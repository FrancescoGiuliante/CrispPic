/**
 * Shared types for the image engine. Every tool (compress, resize, convert,
 * crop) is a call into the same `processImage()` with different fields set —
 * see engine.ts.
 */

export type OutputFormat = "auto" | "jpeg" | "png" | "webp";

export type Rotation = 0 | 90 | 180 | 270;

export type CropRect = {
  /** All values 0-1, relative to the source image's natural size. */
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ProcessOptions = {
  /** Crop applied first, in source coordinates, before rotation and resize. */
  crop?: CropRect;
  /** Clockwise rotation in degrees, applied after crop. */
  rotate?: Rotation;
  /** Mirror horizontally (after rotation). */
  flipH?: boolean;
  /** Mirror vertically (after rotation). */
  flipV?: boolean;
  /** Target width in px. Combined with height/lockAspect to derive the final size. */
  width?: number;
  /** Target height in px. */
  height?: number;
  /** Keep source aspect ratio when only one of width/height is given, or when both are given and lockAspect is true. */
  lockAspect?: boolean;
  /** Cap the output file size. Triggers a quality search when the format supports lossy encoding. */
  maxBytes?: number;
  /** Desired output format. "auto" keeps the input format (falls back to JPEG for formats we can't re-encode, e.g. HEIC). */
  format?: OutputFormat;
  /** Fixed quality (0-1) to use when maxBytes isn't set. Ignored for PNG. */
  quality?: number;
};

export type ProcessResult = {
  blob: Blob;
  mimeType: string;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  quality: number;
  sizeBytes: number;
  originalSizeBytes: number;
  /** True if maxBytes was set but couldn't be hit even at minimum quality/size. */
  targetMissed: boolean;
};

/** What the main thread learns about a file the moment it is decoded. */
export type SourceInfo = {
  width: number;
  height: number;
  /** True if any pixel is not fully opaque — used to warn before a lossy conversion to JPG drops the alpha channel. */
  hasAlpha: boolean;
};

export const MIME_BY_FORMAT: Record<Exclude<OutputFormat, "auto">, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

export const EXTENSION_BY_FORMAT: Record<Exclude<OutputFormat, "auto">, string> = {
  jpeg: "jpg",
  png: "png",
  webp: "webp",
};

export function formatFromMime(mime: string): Exclude<OutputFormat, "auto"> {
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  return "jpeg";
}

/**
 * True when these options amount to "leave this image alone".
 *
 * Shared by the pipeline (which short-circuits to the original blob rather
 * than running a pointless decode/re-encode that would degrade the file) and
 * by the UI (which says so, instead of claiming a 0% saving on a file it did
 * not touch). Both must agree, so the rule lives here rather than in two
 * near-identical copies.
 */
export function isNoopOptions(options: ProcessOptions, sourceType: string): boolean {
  const formatUnchanged =
    !options.format || options.format === "auto" || MIME_BY_FORMAT[options.format] === sourceType;
  return (
    !options.crop &&
    !options.rotate &&
    !options.flipH &&
    !options.flipV &&
    !options.width &&
    !options.height &&
    !options.maxBytes &&
    options.quality === undefined &&
    formatUnchanged
  );
}

/** Formats that carry an alpha channel, and so can lose data when written as JPG. */
export function formatSupportsAlpha(format: Exclude<OutputFormat, "auto">): boolean {
  return format !== "jpeg";
}

/** Formats we can decode as input (browser-native, no extra libraries). */
export const NATIVE_INPUT_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/bmp", "image/avif"];

export const HEIC_TYPES = ["image/heic", "image/heif"];

export const MAX_INPUT_BYTES = 40 * 1024 * 1024; // 40 MB
