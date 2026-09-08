import { ImageError } from "./errors";
import type { Drawable } from "./canvas";

/**
 * Decodes a Blob into something drawable.
 *
 * Prefers `createImageBitmap(blob, { imageOrientation: "from-image" })`,
 * which both auto-applies EXIF orientation (so portrait phone photos don't
 * come out sideways) and decodes off the main thread. It is also the only
 * decoder available inside a Web Worker, which is where this normally runs.
 *
 * The `<img>` fallback exists for browsers without `createImageBitmap`; it
 * needs a DOM, so it is main-thread only.
 */
export async function decodeImage(blob: Blob): Promise<Drawable> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(blob, { imageOrientation: "from-image" });
    } catch {
      // Some engines reject the options bag rather than ignoring it; retry
      // bare before giving up on the fast path entirely.
      try {
        return await createImageBitmap(blob);
      } catch {
        // fall through to the <img> path
      }
    }
  }

  if (typeof document === "undefined") throw new ImageError("decodeFailed");
  return decodeViaImageElement(blob);
}

function decodeViaImageElement(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new ImageError("decodeFailed"));
    };
    img.src = url;
  });
}

export function naturalSize(img: Drawable): { width: number; height: number } {
  if (typeof HTMLImageElement !== "undefined" && img instanceof HTMLImageElement) {
    return { width: img.naturalWidth, height: img.naturalHeight };
  }
  const bitmap = img as ImageBitmap;
  return { width: bitmap.width, height: bitmap.height };
}

/** Frees the decoder's backing memory. Only ImageBitmap holds any. */
export function releaseImage(img: Drawable | null) {
  if (img && typeof ImageBitmap !== "undefined" && img instanceof ImageBitmap) img.close();
}
