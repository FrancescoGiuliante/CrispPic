import { ImageError } from "./errors";
import { HEIC_TYPES } from "./types";

export function isHeic(file: File): boolean {
  return HEIC_TYPES.includes(file.type) || /\.hei[cf]$/i.test(file.name);
}

/**
 * HEIC/HEIF — the default photo format on iPhone — is not decodable by any
 * browser's canvas or Image APIs, so it needs a wasm decoder.
 *
 * `heic2any` is imported dynamically and only when a HEIC file is actually
 * dropped: everyone else pays nothing for it. It stays on the main thread
 * (rather than moving into our worker) because it spawns its own workers
 * internally and nesting those has no benefit.
 *
 * Safari on iOS 17+ can natively decode HEIC via `createImageBitmap`, so we
 * try that first and skip the download entirely when it works — which is
 * exactly the platform where HEIC files are most common.
 */
export async function decodeHeicToBlob(file: File): Promise<Blob> {
  if (typeof createImageBitmap === "function") {
    try {
      const bitmap = await createImageBitmap(file);
      bitmap.close();
      return file; // Native decoding works; hand the original through untouched.
    } catch {
      // Expected on every non-Apple browser — fall through to the wasm path.
    }
  }

  try {
    const heic2any = (await import("heic2any")).default;
    const result = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.94 });
    return Array.isArray(result) ? result[0] : result;
  } catch {
    throw new ImageError("heicFailed");
  }
}
