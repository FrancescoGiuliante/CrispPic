import { ImageError } from "./errors";
import type { CropRect, Rotation } from "./types";

/**
 * Canvas helpers that work identically on the main thread and inside a Web
 * Worker.
 *
 * `OffscreenCanvas` is preferred wherever it exists — it is the only canvas
 * a worker has, and on the main thread it avoids allocating a DOM node per
 * encode (the target-size search can run over a hundred of them).
 * `HTMLCanvasElement` remains the fallback for older Safari.
 */

export type AnyCanvas = HTMLCanvasElement | OffscreenCanvas;

export type Drawable = ImageBitmap | HTMLImageElement;

export function createCanvas(width: number, height: number): AnyCanvas {
  const w = Math.max(1, Math.round(width));
  const h = Math.max(1, Math.round(height));

  if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(w, h);

  if (typeof document === "undefined") throw new ImageError("canvasUnavailable");
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

function context2d(canvas: AnyCanvas): CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
  if (!ctx) throw new ImageError("canvasUnavailable");
  return ctx;
}

export type DrawOptions = {
  crop?: CropRect;
  rotate?: Rotation;
  flipH?: boolean;
  flipV?: boolean;
  /** Paint white first — required for JPEG, which has no alpha channel and would otherwise render transparent pixels black. */
  fillOpaque: boolean;
};

/**
 * The size the image occupies after cropping and rotating, before any
 * user-requested resize. A 90°/270° rotation swaps width and height, which
 * every downstream dimension calculation has to account for.
 */
export function orientedSize(
  sourceSize: { width: number; height: number },
  crop: CropRect | undefined,
  rotate: Rotation = 0
): { width: number; height: number } {
  const width = crop ? Math.max(1, Math.round(sourceSize.width * crop.width)) : sourceSize.width;
  const height = crop ? Math.max(1, Math.round(sourceSize.height * crop.height)) : sourceSize.height;
  return rotate === 90 || rotate === 270 ? { width: height, height: width } : { width, height };
}

/**
 * Draws a source image into a canvas of the given output size, applying
 * crop → rotate → flip → scale in that order.
 *
 * The transform is set up once and the (possibly cropped) source is drawn
 * in a single `drawImage`, so there is no intermediate canvas and no extra
 * resample: quality loss is limited to the one downscale.
 */
export function drawToCanvas(
  img: Drawable,
  sourceSize: { width: number; height: number },
  outputSize: { width: number; height: number },
  options: DrawOptions
): AnyCanvas {
  const { crop, rotate = 0, flipH = false, flipV = false, fillOpaque } = options;

  const canvas = createCanvas(outputSize.width, outputSize.height);
  const ctx = context2d(canvas);

  if (fillOpaque) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const sx = crop ? crop.x * sourceSize.width : 0;
  const sy = crop ? crop.y * sourceSize.height : 0;
  const sw = crop ? crop.width * sourceSize.width : sourceSize.width;
  const sh = crop ? crop.height * sourceSize.height : sourceSize.height;

  // Work from the centre of the output so rotation and mirroring compose
  // without any per-case offset arithmetic.
  ctx.translate(canvas.width / 2, canvas.height / 2);
  // Mirror *before* rotating in the transform chain, which means the mirror
  // is applied last to the drawn pixels — i.e. in the orientation the user
  // is looking at. The other order would turn "flip horizontally" into a
  // vertical flip on an image the user had already rotated a quarter turn.
  if (flipH || flipV) ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  if (rotate) ctx.rotate((rotate * Math.PI) / 180);

  // After a quarter turn the drawing box is the output box with its axes
  // swapped back, because the canvas itself was already sized rotated.
  const drawW = rotate === 90 || rotate === 270 ? canvas.height : canvas.width;
  const drawH = rotate === 90 || rotate === 270 ? canvas.width : canvas.height;

  ctx.drawImage(img, sx, sy, sw, sh, -drawW / 2, -drawH / 2, drawW, drawH);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  return canvas;
}

export async function canvasToBlob(canvas: AnyCanvas, mimeType: string, quality?: number): Promise<Blob> {
  if ("convertToBlob" in canvas) {
    try {
      return await canvas.convertToBlob({ type: mimeType, quality });
    } catch {
      throw new ImageError("encodeFailed", { format: mimeType });
    }
  }

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new ImageError("encodeFailed", { format: mimeType }))),
      mimeType,
      quality
    );
  });
}

/**
 * Whether any pixel in the image is not fully opaque.
 *
 * Sampled at up to 96px on the long edge rather than at full resolution:
 * this only drives a UI warning ("converting to JPG will flatten
 * transparency"), so a downscaled read is both sufficient and ~1000× cheaper
 * than reading a 24-megapixel buffer.
 */
export function detectAlpha(img: Drawable, sourceSize: { width: number; height: number }): boolean {
  const scale = Math.min(1, 96 / Math.max(sourceSize.width, sourceSize.height));
  const w = Math.max(1, Math.round(sourceSize.width * scale));
  const h = Math.max(1, Math.round(sourceSize.height * scale));

  try {
    const canvas = createCanvas(w, h);
    const ctx = context2d(canvas);
    ctx.drawImage(img, 0, 0, w, h);
    const { data } = ctx.getImageData(0, 0, w, h);
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 255) return true;
    }
    return false;
  } catch {
    // A tainted or unreadable canvas is not worth failing an upload over —
    // the alpha hint is an enhancement, not a requirement.
    return false;
  }
}
