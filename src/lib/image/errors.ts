/**
 * Errors the engine can raise, as codes rather than English sentences.
 *
 * The engine runs in a Web Worker and knows nothing about the active
 * locale, so it must not produce user-facing prose. Every failure carries a
 * stable `code` (plus interpolation params); the UI turns that into a
 * translated message via `errors.<code>` in the active dictionary. Before
 * this, a French user hitting the 40 MB guard got an English sentence.
 */

export type ImageErrorCode =
  | "fileTooLarge"
  | "unsupportedType"
  | "decodeFailed"
  | "heicFailed"
  | "encodeFailed"
  | "formatUnsupported"
  | "canvasUnavailable"
  | "outOfMemory"
  | "unknown";

export class ImageError extends Error {
  readonly code: ImageErrorCode;
  readonly params: Record<string, string | number>;

  constructor(code: ImageErrorCode, params: Record<string, string | number> = {}) {
    super(code);
    this.name = "ImageError";
    this.code = code;
    this.params = params;
  }
}

/** Structural clone-safe shape, for passing an ImageError across the worker boundary. */
export type SerializedImageError = { __imageError: true; code: ImageErrorCode; params: Record<string, string | number> };

export function serializeError(err: unknown): SerializedImageError {
  if (err instanceof ImageError) return { __imageError: true, code: err.code, params: err.params };
  // A RangeError from an oversized canvas allocation is the one native error
  // worth distinguishing — it is by far the most common real-world failure
  // on very large photos, and "try a smaller image" is actionable advice.
  if (err instanceof RangeError) return { __imageError: true, code: "outOfMemory", params: {} };
  return { __imageError: true, code: "unknown", params: {} };
}

export function deserializeError(payload: SerializedImageError): ImageError {
  return new ImageError(payload.code, payload.params);
}

export function isImageError(value: unknown): value is ImageError {
  return value instanceof ImageError;
}
