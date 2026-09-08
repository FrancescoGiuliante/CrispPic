import { ImageError } from "./errors";
import { HEIC_TYPES, MAX_INPUT_BYTES, NATIVE_INPUT_TYPES } from "./types";

/** Extensions we accept even when the browser reports an empty/generic MIME type (common for HEIC on Windows and Android). */
const ACCEPTED_EXTENSIONS = /\.(jpe?g|png|webp|gif|bmp|avif|heic|heif)$/i;

export const ACCEPT_ATTR = [...NATIVE_INPUT_TYPES, ...HEIC_TYPES, ".heic", ".heif"].join(",");

export function isAcceptedImageFile(file: File): boolean {
  if (NATIVE_INPUT_TYPES.includes(file.type) || HEIC_TYPES.includes(file.type)) return true;
  // Some browsers report an empty type for files dragged from certain apps;
  // the extension is the only signal left, and a wrong guess just fails at
  // decode time with a clear message.
  if (!file.type && ACCEPTED_EXTENSIONS.test(file.name)) return true;
  return file.type.startsWith("image/") && ACCEPTED_EXTENSIONS.test(file.name);
}

/** Throws a coded, translatable error if the file can't be processed at all. */
export function assertProcessable(file: File): void {
  if (!isAcceptedImageFile(file)) throw new ImageError("unsupportedType");
  if (file.size > MAX_INPUT_BYTES) {
    throw new ImageError("fileTooLarge", {
      size: Math.round(file.size / 1024 / 1024),
      max: MAX_INPUT_BYTES / 1024 / 1024,
    });
  }
}
