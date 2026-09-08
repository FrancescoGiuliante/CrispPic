/**
 * The single entry point for every tool in the product: compress, resize,
 * convert, crop, rotate, and any combination of them are all just
 * `processDrawable()` with different fields set. This is deliberate —
 * "JPG + 600×600 + max 100KB" is the general case, not a special one.
 *
 * This module is environment-agnostic: it touches no DOM beyond canvas, so
 * the exact same code runs inside the Web Worker (`image.worker.ts`) and on
 * the main thread as a fallback. Everything runs locally; the file never
 * leaves the device.
 */
import { canvasToBlob, drawToCanvas, orientedSize, type Drawable } from "./canvas";
import { MIN_QUALITY, encodeAtQuality, searchQualityForSize, supportsQuality } from "./encode";
import { resolveDimensions } from "./resize";
import { MIME_BY_FORMAT, formatFromMime, type OutputFormat, type ProcessOptions, type ProcessResult } from "./types";

const MIN_DIMENSION = 32;
const SCALE_STEP = 0.85;
const MAX_SCALE_ITERATIONS = 20;

/**
 * Worst-case encode count, used only to turn "how many encodes have I done"
 * into a monotonic 0-1 progress figure. It does not bound the search.
 */
const ESTIMATED_MAX_STEPS = 24;

export type ProcessInput = {
  image: Drawable;
  sourceSize: { width: number; height: number };
  /** MIME type of the file the user picked — decides the output format when `format` is "auto". */
  sourceType: string;
  /** Size of the file the user picked, reported back for the before/after readout. */
  sourceBytes: number;
};

export async function processDrawable(
  input: ProcessInput,
  options: ProcessOptions = {},
  onProgress?: (fraction: number) => void
): Promise<ProcessResult> {
  const { image, sourceSize, sourceType, sourceBytes } = input;

  const rotate = options.rotate ?? 0;
  const postTransformSize = orientedSize(sourceSize, options.crop, rotate);

  const outputFormat: Exclude<OutputFormat, "auto"> =
    options.format && options.format !== "auto" ? options.format : formatFromMime(sourceType);
  const mimeType = MIME_BY_FORMAT[outputFormat];
  const fillOpaque = mimeType === "image/jpeg";

  const baseDims = resolveDimensions(postTransformSize, {
    width: options.width,
    height: options.height,
    lockAspect: options.lockAspect,
  });

  const drawOptions = { crop: options.crop, rotate, flipH: options.flipH, flipV: options.flipV, fillOpaque };

  let steps = 0;
  const tick = () => {
    steps += 1;
    onProgress?.(Math.min(0.97, steps / ESTIMATED_MAX_STEPS));
  };

  const build = (blob: Blob, dims: { width: number; height: number }, quality: number, targetMissed: boolean): ProcessResult => ({
    blob,
    mimeType,
    width: dims.width,
    height: dims.height,
    originalWidth: sourceSize.width,
    originalHeight: sourceSize.height,
    quality,
    sizeBytes: blob.size,
    originalSizeBytes: sourceBytes,
    targetMissed,
  });

  if (!options.maxBytes) {
    const canvas = drawToCanvas(image, sourceSize, baseDims, drawOptions);
    const quality = options.quality ?? 0.92;
    const blob = await encodeAtQuality(canvas, mimeType, quality);
    onProgress?.(1);
    return build(blob, baseDims, supportsQuality(mimeType) ? quality : 1, false);
  }

  // Target-size mode: binary-search quality at the requested dimensions; if
  // even the lowest quality doesn't fit, progressively shrink and retry.
  let scale = 1;
  let lastCanvas = drawToCanvas(image, sourceSize, baseDims, drawOptions);
  let lastDims = baseDims;

  for (let i = 0; i < MAX_SCALE_ITERATIONS; i++) {
    const dims = {
      width: Math.max(MIN_DIMENSION, Math.round(baseDims.width * scale)),
      height: Math.max(MIN_DIMENSION, Math.round(baseDims.height * scale)),
    };
    const canvas = i === 0 ? lastCanvas : drawToCanvas(image, sourceSize, dims, drawOptions);
    lastCanvas = canvas;
    lastDims = dims;

    const found = await searchQualityForSize(canvas, mimeType, options.maxBytes, tick);
    if (found) {
      onProgress?.(1);
      return build(found.blob, dims, found.quality, false);
    }

    if (dims.width <= MIN_DIMENSION && dims.height <= MIN_DIMENSION) break;
    scale *= SCALE_STEP;
  }

  // Couldn't hit the target even at the smallest size — return the smallest,
  // lowest-quality result we have rather than failing outright, and flag it
  // so the UI can say so.
  const lossy = supportsQuality(mimeType);
  const blob = await canvasToBlob(lastCanvas, mimeType, lossy ? MIN_QUALITY : undefined);
  onProgress?.(1);
  return build(blob, lastDims, lossy ? MIN_QUALITY : 1, blob.size > options.maxBytes);
}

export * from "./types";
export { ImageError, type ImageErrorCode } from "./errors";
