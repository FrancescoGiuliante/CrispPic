import type { SerializedImageError } from "../errors";
import type { ProcessOptions, ProcessResult, SourceInfo } from "../types";

/**
 * Message contract between the main thread and the image worker.
 *
 * The worker keeps the decoded bitmap alive between messages, keyed by
 * nothing more than "the current image": every parameter change re-encodes
 * from the cached decode instead of re-decoding the file. On a 24-megapixel
 * photo that is the difference between ~600ms and ~5ms of setup per tweak.
 */

export type WorkerRequest =
  | { type: "load"; id: number; blob: Blob }
  | { type: "process"; id: number; options: ProcessOptions; sourceType: string; sourceBytes: number }
  | { type: "release" };

export type WorkerResponse =
  | { type: "loaded"; id: number; info: SourceInfo }
  | { type: "progress"; id: number; value: number }
  | { type: "done"; id: number; result: ProcessResult }
  | { type: "error"; id: number; error: SerializedImageError };
