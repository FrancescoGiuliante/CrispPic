/**
 * Client-side "compress to target size" engine.
 *
 * Strategy: draw the image to a canvas and binary-search JPEG quality to
 * find the highest quality that still fits under the target byte size. If
 * even the lowest quality at full resolution doesn't fit, shrink the
 * dimensions and repeat. Runs entirely in the browser — the file never
 * leaves the device.
 */

export type CompressResult = {
  blob: Blob;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  quality: number;
  sizeBytes: number;
  /** True if we couldn't get under the target and returned the smallest we could. */
  targetMissed: boolean;
};

const MIN_DIMENSION = 64;
const MIN_QUALITY = 0.05;
const MAX_QUALITY = 0.95;
const QUALITY_SEARCH_STEPS = 6;
const SCALE_STEP = 0.85;
const MAX_SCALE_ITERATIONS = 20;

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read this image file."));
    };
    img.src = url;
  });
}

function canvasToJpegBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Encoding failed."))),
      "image/jpeg",
      quality
    );
  });
}

function drawToCanvas(img: HTMLImageElement, width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser.");
  // Fill white first: JPEG has no alpha channel, so transparent PNGs would
  // otherwise get a black background.
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
}

/** Binary search JPEG quality at a fixed size for the highest quality under targetBytes. */
async function searchQuality(
  canvas: HTMLCanvasElement,
  targetBytes: number
): Promise<{ blob: Blob; quality: number } | null> {
  let lo = MIN_QUALITY;
  let hi = MAX_QUALITY;
  let best: { blob: Blob; quality: number } | null = null;

  for (let i = 0; i < QUALITY_SEARCH_STEPS; i++) {
    const mid = (lo + hi) / 2;
    const blob = await canvasToJpegBlob(canvas, mid);
    if (blob.size <= targetBytes) {
      best = { blob, quality: mid };
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return best;
}

export async function compressToTargetSize(
  file: File,
  targetBytes: number
): Promise<CompressResult> {
  const img = await loadImage(file);
  const originalWidth = img.naturalWidth;
  const originalHeight = img.naturalHeight;

  let scale = 1;
  let lastCanvas: HTMLCanvasElement | null = null;
  let lastWidth = originalWidth;
  let lastHeight = originalHeight;

  for (let iteration = 0; iteration < MAX_SCALE_ITERATIONS; iteration++) {
    const width = Math.max(MIN_DIMENSION, Math.round(originalWidth * scale));
    const height = Math.max(MIN_DIMENSION, Math.round(originalHeight * scale));
    const canvas = drawToCanvas(img, width, height);
    lastCanvas = canvas;
    lastWidth = width;
    lastHeight = height;

    const found = await searchQuality(canvas, targetBytes);
    if (found) {
      return {
        blob: found.blob,
        width,
        height,
        originalWidth,
        originalHeight,
        quality: found.quality,
        sizeBytes: found.blob.size,
        targetMissed: false,
      };
    }

    if (width <= MIN_DIMENSION && height <= MIN_DIMENSION) break;
    scale *= SCALE_STEP;
  }

  // Couldn't hit the target even at the smallest size — return the
  // smallest/lowest-quality result we have rather than failing outright.
  const fallbackBlob = await canvasToJpegBlob(lastCanvas!, MIN_QUALITY);
  return {
    blob: fallbackBlob,
    width: lastWidth,
    height: lastHeight,
    originalWidth,
    originalHeight,
    quality: MIN_QUALITY,
    sizeBytes: fallbackBlob.size,
    targetMissed: fallbackBlob.size > targetBytes,
  };
}
