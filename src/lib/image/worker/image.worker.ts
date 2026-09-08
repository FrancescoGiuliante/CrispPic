/// <reference lib="webworker" />

import { detectAlpha, type Drawable } from "../canvas";
import { processDrawable } from "../engine";
import { ImageError, serializeError } from "../errors";
import { decodeImage, naturalSize, releaseImage } from "../loadImage";
import type { WorkerRequest, WorkerResponse } from "./protocol";

/**
 * Runs the image engine off the main thread.
 *
 * This is what keeps the UI responsive: hitting an exact target size can
 * take dozens of canvas encodes, and on a large photo each one is tens of
 * milliseconds. On the main thread that is a visibly frozen page — no
 * spinner animation, no scrolling, no cancel. Here it is invisible.
 *
 * State: exactly one decoded bitmap at a time, reused across every
 * `process` message so changing a setting never re-decodes the file.
 */

const ctx = self as unknown as DedicatedWorkerGlobalScope;

let current: Drawable | null = null;
let currentSize = { width: 0, height: 0 };

/**
 * Only the newest request matters. A user dragging the quality slider
 * queues requests faster than they complete; anything older than
 * `latestRequestId` is abandoned at the next checkpoint rather than
 * finishing work whose result will be thrown away.
 */
let latestRequestId = 0;

function post(message: WorkerResponse) {
  ctx.postMessage(message);
}

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;

  if (message.type === "release") {
    releaseImage(current);
    current = null;
    return;
  }

  latestRequestId = message.id;

  try {
    if (message.type === "load") {
      releaseImage(current);
      current = null;

      const image = await decodeImage(message.blob);
      if (message.id !== latestRequestId) {
        releaseImage(image);
        return;
      }

      current = image;
      currentSize = naturalSize(image);
      post({
        type: "loaded",
        id: message.id,
        info: { ...currentSize, hasAlpha: detectAlpha(image, currentSize) },
      });
      return;
    }

    if (!current) throw new ImageError("decodeFailed");

    const result = await processDrawable(
      { image: current, sourceSize: currentSize, sourceType: message.sourceType, sourceBytes: message.sourceBytes },
      message.options,
      (value) => {
        if (message.id === latestRequestId) post({ type: "progress", id: message.id, value });
      }
    );

    if (message.id !== latestRequestId) return;
    post({ type: "done", id: message.id, result });
  } catch (error) {
    if (message.id !== latestRequestId) return;
    post({ type: "error", id: message.id, error: serializeError(error) });
  }
};
