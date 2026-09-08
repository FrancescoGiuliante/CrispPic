import { canvasToBlob, type AnyCanvas } from "./canvas";

export const MIN_QUALITY = 0.05;
const MAX_QUALITY = 0.95;
const QUALITY_SEARCH_STEPS = 7;

/** PNG is lossless — there's no quality knob, so "quality" is always 1. */
export function supportsQuality(mimeType: string): boolean {
  return mimeType === "image/jpeg" || mimeType === "image/webp";
}

/**
 * Runtime feature-detects a codec by encoding a 1×1 canvas and checking the
 * MIME type that comes back. Browsers silently fall back to PNG for formats
 * they can't write, so without this check a "convert to WebP" on an old
 * Safari would hand the user a PNG named `.webp`.
 *
 * Cached: the answer can't change within a session.
 */
const encoderSupport = new Map<string, Promise<boolean>>();

export function supportsEncoding(mimeType: string): Promise<boolean> {
  const cached = encoderSupport.get(mimeType);
  if (cached) return cached;

  const probe = (async () => {
    try {
      const { createCanvas } = await import("./canvas");
      const blob = await canvasToBlob(createCanvas(1, 1), mimeType, 0.5);
      return blob.type === mimeType;
    } catch {
      return false;
    }
  })();

  encoderSupport.set(mimeType, probe);
  return probe;
}

/**
 * Binary-searches the encoder quality (for lossy formats) to find the
 * highest quality whose output still fits under targetBytes at this canvas
 * size. Returns null if even the lowest quality doesn't fit — the caller
 * should then try a smaller canvas.
 */
export async function searchQualityForSize(
  canvas: AnyCanvas,
  mimeType: string,
  targetBytes: number,
  onStep?: () => void
): Promise<{ blob: Blob; quality: number } | null> {
  if (!supportsQuality(mimeType)) {
    const blob = await canvasToBlob(canvas, mimeType);
    onStep?.();
    return blob.size <= targetBytes ? { blob, quality: 1 } : null;
  }

  // Probe the floor first: if the smallest possible encode at this size is
  // still over target, the whole search is wasted work and the caller should
  // go straight to a smaller canvas. On images far above their target this
  // turns 7 encodes per scale step into 1.
  const floor = await canvasToBlob(canvas, mimeType, MIN_QUALITY);
  onStep?.();
  if (floor.size > targetBytes) return null;

  let lo = MIN_QUALITY;
  let hi = MAX_QUALITY;
  let best: { blob: Blob; quality: number } = { blob: floor, quality: MIN_QUALITY };

  for (let i = 0; i < QUALITY_SEARCH_STEPS; i++) {
    const mid = (lo + hi) / 2;
    const blob = await canvasToBlob(canvas, mimeType, mid);
    onStep?.();
    if (blob.size <= targetBytes) {
      best = { blob, quality: mid };
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return best;
}

export async function encodeAtQuality(canvas: AnyCanvas, mimeType: string, quality: number): Promise<Blob> {
  return canvasToBlob(canvas, mimeType, supportsQuality(mimeType) ? quality : undefined);
}
