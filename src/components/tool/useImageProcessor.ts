"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ImagePipeline } from "@/lib/image/pipeline";
import { ImageError, type ImageErrorCode } from "@/lib/image/errors";
import type { ProcessOptions, ProcessResult, SourceInfo } from "@/lib/image/types";

export type ProcessorStatus = "empty" | "loading" | "ready" | "processing" | "error";

export type ProcessorError = { code: ImageErrorCode; params: Record<string, string | number> };

type State = {
  file: File | null;
  source: SourceInfo | null;
  status: ProcessorStatus;
  result: ProcessResult | null;
  /** Object URL for the untouched original — the "before" side of the compare slider. */
  originalUrl: string | null;
  /** Object URL for the current result — the "after" side, and what Download saves. */
  resultUrl: string | null;
  progress: number;
  error: ProcessorError | null;
};

const EMPTY: State = {
  file: null,
  source: null,
  status: "empty",
  result: null,
  originalUrl: null,
  resultUrl: null,
  progress: 0,
  error: null,
};

function toProcessorError(err: unknown): ProcessorError {
  if (err instanceof ImageError) return { code: err.code, params: err.params };
  return { code: "unknown", params: {} };
}

/**
 * Owns everything about "the image currently being worked on": the worker
 * pipeline, the decoded source, the latest result, and the object URLs that
 * back the preview.
 *
 * Two things this centralises that were previously spread across the tool
 * component and easy to get wrong:
 *
 * - **Object-URL lifetime.** Every URL created here is revoked when it is
 *   replaced and on unmount. Leaking them pins whole decoded images in
 *   memory for the life of the tab, which on a phone editing several photos
 *   in a row is what eventually kills the page.
 * - **Out-of-order results.** Changing a setting mid-encode starts a second
 *   run while the first is still going; whichever finishes last would
 *   otherwise win. Every run carries an id and only the newest is allowed
 *   to touch state.
 */
export function useImageProcessor() {
  const pipelineRef = useRef<ImagePipeline | null>(null);
  const runIdRef = useRef(0);
  const originalUrlRef = useRef<string | null>(null);
  const resultUrlRef = useRef<string | null>(null);

  const [state, setState] = useState<State>(EMPTY);

  const revokeAll = useCallback(() => {
    if (originalUrlRef.current) URL.revokeObjectURL(originalUrlRef.current);
    if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    originalUrlRef.current = null;
    resultUrlRef.current = null;
  }, []);

  useEffect(
    () => () => {
      revokeAll();
      pipelineRef.current?.dispose();
      pipelineRef.current = null;
    },
    [revokeAll]
  );

  const reset = useCallback(() => {
    runIdRef.current++;
    revokeAll();
    pipelineRef.current?.dispose();
    pipelineRef.current = null;
    setState(EMPTY);
  }, [revokeAll]);

  const load = useCallback(
    async (file: File): Promise<SourceInfo | null> => {
      const runId = ++runIdRef.current;

      revokeAll();
      pipelineRef.current?.dispose();
      const pipeline = new ImagePipeline();
      pipelineRef.current = pipeline;

      const originalUrl = URL.createObjectURL(file);
      originalUrlRef.current = originalUrl;

      setState({ ...EMPTY, file, originalUrl, status: "loading" });

      try {
        const source = await pipeline.load(file);
        if (runIdRef.current !== runId) return null;
        setState((prev) => ({ ...prev, source, status: "ready" }));
        return source;
      } catch (err) {
        if (runIdRef.current !== runId) return null;
        setState((prev) => ({ ...prev, status: "error", error: toProcessorError(err) }));
        return null;
      }
    },
    [revokeAll]
  );

  const run = useCallback(async (options: ProcessOptions): Promise<ProcessResult | null> => {
    const pipeline = pipelineRef.current;
    if (!pipeline) return null;

    const runId = ++runIdRef.current;
    setState((prev) => ({ ...prev, status: "processing", progress: 0, error: null }));

    try {
      const result = await pipeline.process(options, (value) => {
        if (runIdRef.current === runId) setState((prev) => ({ ...prev, progress: value }));
      });
      if (runIdRef.current !== runId) return null;

      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(result.blob);
      resultUrlRef.current = url;

      setState((prev) => ({ ...prev, result, resultUrl: url, status: "ready", progress: 1 }));
      return result;
    } catch (err) {
      if (runIdRef.current !== runId) return null;
      setState((prev) => ({ ...prev, status: "error", error: toProcessorError(err) }));
      return null;
    }
  }, []);

  return { ...state, load, run, reset };
}
