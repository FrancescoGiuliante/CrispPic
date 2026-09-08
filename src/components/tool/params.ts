import type { CropRect, OutputFormat, ProcessOptions, Rotation, SourceInfo } from "@/lib/image/types";

/** Which entry point the user arrived through. Changes defaults and the order of the panel, never the capabilities. */
export type ToolMode = "compress" | "resize" | "convert" | "crop";

export type RequirementKey = "size" | "dimensions" | "format" | "quality" | "crop" | "transform";

export type Params = {
  sizeEnabled: boolean;
  targetBytes: number;
  /** Raw text of the custom-KB field, kept as a string so a half-typed value doesn't reformat under the cursor. */
  customKb: string;
  isCustomSize: boolean;

  dimensionsEnabled: boolean;
  resizeUnit: "px" | "percent";
  width: string;
  height: string;
  percent: number;
  lockAspect: boolean;

  format: OutputFormat;
  /** Manual quality override. Off by default: with nothing requested the file is passed through untouched rather than silently re-encoded. */
  qualityEnabled: boolean;
  /** Only consulted when quality is on and no target size is set — a size target derives its own quality. */
  quality: number;

  crop: CropRect | null;
  cropLabel: string | null;

  rotate: Rotation;
  flipH: boolean;
  flipV: boolean;
};

export const DEFAULT_TARGET_BYTES = 100 * 1024;

export const SIZE_PRESETS = [
  { labelKey: "20 KB", bytes: 20 * 1024 },
  { labelKey: "50 KB", bytes: 50 * 1024 },
  { labelKey: "100 KB", bytes: 100 * 1024 },
  { labelKey: "200 KB", bytes: 200 * 1024 },
  { labelKey: "500 KB", bytes: 500 * 1024 },
  { labelKey: "1 MB", bytes: 1024 * 1024 },
] as const;

/**
 * Named output sizes people are actually asked for. This is the whole
 * product thesis in a dropdown: users rarely want "some smaller image",
 * they want the one size a specific form or platform demands.
 */
export const DIMENSION_PRESETS = [
  { id: "hd1080", width: 1920, height: 1080 },
  { id: "hd720", width: 1280, height: 720 },
  { id: "square1080", width: 1080, height: 1080 },
  { id: "portrait1350", width: 1080, height: 1350 },
  { id: "story1920", width: 1080, height: 1920 },
  { id: "og", width: 1200, height: 630 },
  { id: "avatar512", width: 512, height: 512 },
  { id: "thumb256", width: 256, height: 256 },
  // 35 × 45 mm at 300 dpi — the ICAO/EU passport and visa photo size.
  { id: "passport", width: 413, height: 531 },
] as const;

export const BASE_PARAMS: Params = {
  sizeEnabled: false,
  targetBytes: DEFAULT_TARGET_BYTES,
  customKb: "",
  isCustomSize: false,

  dimensionsEnabled: false,
  resizeUnit: "px",
  width: "",
  height: "",
  percent: 100,
  lockAspect: true,

  format: "auto",
  qualityEnabled: false,
  quality: 0.9,

  crop: null,
  cropLabel: null,

  rotate: 0,
  flipH: false,
  flipV: false,
};

/**
 * Per-entry-point defaults and panel ordering. Every mode exposes every
 * requirement — the mode only decides what is switched on when you arrive
 * and what sits at the top of the panel, so a user who landed on /resize can
 * still cap the file size without going anywhere else.
 */
export const MODE_CONFIG: Record<ToolMode, { defaults: Partial<Params>; order: RequirementKey[]; openCropOnUpload?: boolean }> = {
  compress: {
    defaults: { sizeEnabled: true },
    order: ["size", "quality", "format", "dimensions", "crop", "transform"],
  },
  resize: {
    defaults: { dimensionsEnabled: true },
    order: ["dimensions", "crop", "size", "quality", "format", "transform"],
  },
  convert: {
    defaults: {},
    order: ["format", "quality", "size", "dimensions", "crop", "transform"],
  },
  crop: {
    defaults: {},
    order: ["crop", "dimensions", "size", "quality", "format", "transform"],
    openCropOnUpload: true,
  },
};

export function initialParams(mode: ToolMode): Params {
  return { ...BASE_PARAMS, ...MODE_CONFIG[mode].defaults };
}

/**
 * Translates panel state into an engine request.
 *
 * The percentage unit is resolved here rather than in the engine, because
 * "50%" means 50% of *what the user is looking at* — the image after any
 * crop and rotation — and only this layer knows that.
 */
export function toProcessOptions(params: Params, source: SourceInfo | null): ProcessOptions {
  const options: ProcessOptions = {
    format: params.format,
    lockAspect: params.lockAspect,
    crop: params.crop ?? undefined,
    rotate: params.rotate || undefined,
    flipH: params.flipH || undefined,
    flipV: params.flipV || undefined,
  };

  if (params.sizeEnabled && params.targetBytes > 0) {
    options.maxBytes = params.targetBytes;
  } else if (params.qualityEnabled && params.format !== "png") {
    // Only meaningful for lossy output; PNG ignores it.
    options.quality = params.quality;
  }

  if (params.dimensionsEnabled) {
    if (params.resizeUnit === "percent") {
      const base = orientedSourceSize(params, source);
      if (base && params.percent !== 100) {
        options.width = Math.max(1, Math.round((base.width * params.percent) / 100));
        options.height = Math.max(1, Math.round((base.height * params.percent) / 100));
        options.lockAspect = false; // Both edges scale by the same factor, so no fitting is needed.
      }
    } else {
      const width = Number(params.width);
      const height = Number(params.height);
      if (width > 0) options.width = width;
      if (height > 0) options.height = height;
    }
  }

  return options;
}

/** The pixel size the user is effectively looking at: source → crop → rotate. */
export function orientedSourceSize(params: Params, source: SourceInfo | null): { width: number; height: number } | null {
  if (!source) return null;
  const width = params.crop ? Math.round(source.width * params.crop.width) : source.width;
  const height = params.crop ? Math.round(source.height * params.crop.height) : source.height;
  return params.rotate === 90 || params.rotate === 270 ? { width: height, height: width } : { width, height };
}

