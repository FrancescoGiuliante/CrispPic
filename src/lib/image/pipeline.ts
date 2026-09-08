"use client";

import { detectAlpha, type Drawable } from "./canvas";
import { processDrawable } from "./engine";
import { ImageError, deserializeError } from "./errors";
import { decodeHeicToBlob, isHeic } from "./heic";
import { decodeImage, naturalSize, releaseImage } from "./loadImage";
import { assertProcessable } from "./validate";
import { isNoopOptions, type ProcessOptions, type ProcessResult, type SourceInfo } from "./types";
import type { WorkerRequest, WorkerResponse } from "./worker/protocol";

/**
 * The one API the UI talks to.
 *
 * A pipeline owns a single image for its lifetime: `load()` decodes it once,
 * then every `process()` re-encodes from that cached decode. Two
 * interchangeable backends sit behind the same interface:
 *
 * - **worker** (the normal path) — `OffscreenCanvas` in a Web Worker, so the
 *   dozens of canvas encodes a target-size search needs never touch the main
 *   thread and the UI stays at 60fps;
 * - **inline** — the identical engine on the main thread, for browsers
 *   without `Worker`/`OffscreenCanvas`, and as an automatic rescue if the
 *   worker fails to start at all (a CSP, an extension, a stale service
 *   worker). A user must never see a dead tool because a worker didn't boot.
 *
 * HEIC decoding stays on the main thread either way — `heic2any` brings its
 * own workers, and nesting those buys nothing.
 */

export type ProgressHandler = (fraction: number) => void;

function workerSupported(): boolean {
  return (
    typeof Worker !== "undefined" &&
    typeof OffscreenCanvas !== "undefined" &&
    typeof createImageBitmap === "function"
  );
}

type Pending = {
  resolve: (value: never) => void;
  reject: (reason: unknown) => void;
  onProgress?: ProgressHandler;
};

export class ImagePipeline {
  private worker: Worker | null = null;
  private pending = new Map<number, Pending>();
  private nextId = 1;

  /** Inline-backend state, also used as the fallback after a worker failure. */
  private inlineImage: Drawable | null = null;
  private inlineSize = { width: 0, height: 0 };

  /** Natural size of the loaded image, whichever backend decoded it. */
  private loadedSize = { width: 0, height: 0 };

  private sourceType = "image/jpeg";
  private sourceBytes = 0;
  private lastBlob: Blob | null = null;
  private disposed = false;

  private ensureWorker(): Worker | null {
    if (this.worker || this.disposed) return this.worker;
    if (!workerSupported()) return null;

    try {
      const worker = new Worker(new URL("./worker/image.worker.ts", import.meta.url));
      worker.onmessage = (event: MessageEvent<WorkerResponse>) => this.handleMessage(event.data);
      worker.onerror = () => this.failoverToInline();
      this.worker = worker;
      return worker;
    } catch {
      return null;
    }
  }

  /**
   * The worker died or never started. Reject everything in flight with a
   * marker the callers below use to retry inline, and never try the worker
   * again for this pipeline.
   */
  private failoverToInline() {
    const inFlight = [...this.pending.values()];
    this.pending.clear();
    this.worker?.terminate();
    this.worker = null;
    inFlight.forEach((p) => p.reject(WORKER_FAILED));
  }

  private handleMessage(message: WorkerResponse) {
    const entry = this.pending.get(message.id);
    if (!entry) return;

    if (message.type === "progress") {
      entry.onProgress?.(message.value);
      return;
    }

    this.pending.delete(message.id);
    if (message.type === "error") entry.reject(deserializeError(message.error));
    else if (message.type === "loaded") entry.resolve(message.info as never);
    else entry.resolve(message.result as never);
  }

  private send<T>(worker: Worker, request: WorkerRequest & { id: number }, onProgress?: ProgressHandler): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.pending.set(request.id, { resolve: resolve as (value: never) => void, reject, onProgress });
      worker.postMessage(request);
    });
  }

  /**
   * Decodes the file once. Validates first, so an oversized or unsupported
   * file fails immediately with a translatable code instead of after a slow
   * decode attempt.
   */
  async load(file: File): Promise<SourceInfo> {
    assertProcessable(file);

    this.sourceType = isHeic(file) ? "image/jpeg" : file.type || "image/jpeg";
    this.sourceBytes = file.size;

    const blob = isHeic(file) ? await decodeHeicToBlob(file) : file;
    this.lastBlob = blob;

    const worker = this.ensureWorker();
    if (worker) {
      try {
        const info = await this.send<SourceInfo>(worker, { type: "load", id: this.nextId++, blob });
        this.loadedSize = { width: info.width, height: info.height };
        return info;
      } catch (error) {
        if (error !== WORKER_FAILED) throw error;
      }
    }

    return this.loadInline(blob);
  }

  private async loadInline(blob: Blob): Promise<SourceInfo> {
    releaseImage(this.inlineImage);
    const image = await decodeImage(blob);
    this.inlineImage = image;
    this.inlineSize = naturalSize(image);
    this.loadedSize = this.inlineSize;
    return { ...this.inlineSize, hasAlpha: detectAlpha(image, this.inlineSize) };
  }

  /**
   * Encodes the loaded image against `options`.
   *
   * The early return below is the "nothing was asked for" case, and it
   * matters: without it, opening a JPG and requesting no change would hand
   * back a re-compressed copy — slightly worse looking, often slightly
   * larger — instead of the file the user started with.
   */
  async process(options: ProcessOptions, onProgress?: ProgressHandler): Promise<ProcessResult> {
    if (this.lastBlob && isNoopOptions(options, this.sourceType)) {
      onProgress?.(1);
      const size = this.loadedSize;
      return {
        blob: this.lastBlob,
        mimeType: this.sourceType,
        width: size.width,
        height: size.height,
        originalWidth: size.width,
        originalHeight: size.height,
        quality: 1,
        sizeBytes: this.lastBlob.size,
        originalSizeBytes: this.sourceBytes,
        targetMissed: false,
      };
    }

    const worker = this.ensureWorker();
    if (worker) {
      try {
        return await this.send<ProcessResult>(
          worker,
          {
            type: "process",
            id: this.nextId++,
            options,
            sourceType: this.sourceType,
            sourceBytes: this.sourceBytes,
          },
          onProgress
        );
      } catch (error) {
        if (error !== WORKER_FAILED) throw error;
      }
    }

    // Inline path — either by capability or after a worker failover, in
    // which case the image still needs decoding on this side.
    if (!this.inlineImage) {
      if (!this.lastBlob) throw new ImageError("decodeFailed");
      await this.loadInline(this.lastBlob);
    }

    return processDrawable(
      {
        image: this.inlineImage!,
        sourceSize: this.inlineSize,
        sourceType: this.sourceType,
        sourceBytes: this.sourceBytes,
      },
      options,
      onProgress
    );
  }

  /** Releases the decoded bitmap and tears the worker down. */
  dispose() {
    this.disposed = true;
    this.pending.clear();
    this.worker?.postMessage({ type: "release" } satisfies WorkerRequest);
    this.worker?.terminate();
    this.worker = null;
    releaseImage(this.inlineImage);
    this.inlineImage = null;
    this.lastBlob = null;
  }
}

/** Sentinel rejection meaning "the worker is gone, retry inline" — never surfaced to users. */
const WORKER_FAILED = Symbol("worker-failed");
