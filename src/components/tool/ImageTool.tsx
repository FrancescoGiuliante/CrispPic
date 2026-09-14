"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, Download, ImageIcon, RotateCcw, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { CompareSlider } from "@/components/tool/CompareSlider";
import { CropModal } from "@/components/tool/CropModal";
import { Dropzone } from "@/components/tool/Dropzone";
import { RequirementsPanel } from "@/components/tool/RequirementsPanel";
import { ResultSummary } from "@/components/tool/ResultSummary";
import { useImageProcessor } from "@/components/tool/useImageProcessor";
import { useLeaveGuard } from "@/components/tool/useLeaveGuard";
import { MODE_CONFIG, initialParams, toProcessOptions, type Params, type ToolMode } from "@/components/tool/params";
import { useLanguage } from "@/i18n/LanguageProvider";
import { sizeBucket, track } from "@/lib/analytics";
import { SITE_NAME } from "@/lib/constants";
import { formatBytes } from "@/lib/format";
import { EXTENSION_BY_FORMAT, formatFromMime, isNoopOptions, type CropRect } from "@/lib/image/types";
import { cn } from "@/lib/utils";

export type { ToolMode };

/**
 * Time between the last settings change and the encode that follows it.
 *
 * Dragging the quality slider fires a change per pixel of travel; without a
 * gate that is dozens of full encodes for one gesture. 160ms is short enough
 * to feel immediate on a click and long enough to collapse a drag into one
 * run — and the worker keeps the UI alive either way.
 */
const DEBOUNCE_MS = 160;

/**
 * Suffix appended to every downloaded file. Derived from SITE_NAME rather
 * than written out again, so a future rename can't leave the filename behind.
 */
const FILENAME_SUFFIX = SITE_NAME.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function outputFileName(originalName: string, mimeType: string): string {
  const base = originalName.replace(/\.[^/.]+$/, "").trim() || "image";
  return `${base}-${FILENAME_SUFFIX}.${EXTENSION_BY_FORMAT[formatFromMime(mimeType)]}`;
}

export function ImageTool({
  mode = "compress",
  hero,
  preset,
}: {
  mode?: ToolMode;
  hero?: React.ReactNode;
  /**
   * Extra defaults layered over the mode's own, used by the keyword landing
   * pages so the requirement the visitor searched for is already switched on
   * when the page opens. Read once, at mount — after that the panel owns the
   * state, exactly as it does on every other route.
   */
  preset?: Partial<Params>;
}) {
  const { t, locale } = useLanguage();
  const { toast } = useToast();
  const config = MODE_CONFIG[mode];
  // Captured once, via state, so "New image" restores the landing page's
  // requirement too and not just the mode defaults — losing the 20 KB target
  // on the second file would be the one thing that page exists to avoid.
  const [startingPreset] = useState(preset);

  const startingParams = useCallback(() => ({ ...initialParams(mode), ...startingPreset }), [mode, startingPreset]);
  const [params, setParams] = useState<Params>(startingParams);
  const [showCrop, setShowCrop] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const { file, source, status, result, originalUrl, resultUrl, progress, error, load, run, reset } = useImageProcessor();

  // A loaded file exists nowhere but this tab, so leaving without downloading
  // throws it away. Guard every exit while one is open.
  useLeaveGuard(Boolean(file), t("tool.leaveConfirm"));

  const patch = useCallback((next: Partial<Params>) => setParams((prev) => ({ ...prev, ...next })), []);

  const options = useMemo(() => toProcessOptions(params, source), [params, source]);
  const optionsKey = JSON.stringify(options);

  // Kept in a ref so the debounce effect below can depend on the *serialized*
  // options (which only change when something meaningful does) instead of the
  // object identity, which changes on every render.
  const optionsRef = useRef(options);
  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    if (!source) return;
    const timer = setTimeout(() => void run(optionsRef.current), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [optionsKey, source, run]);

  const handleFile = useCallback(
    async (candidate: File) => {
      track("file_selected", { input_format: candidate.type || "unknown", input_size: sizeBucket(candidate.size) });
      const info = await load(candidate);
      if (info && config.openCropOnUpload) setShowCrop(true);
    },
    [load, config.openCropOnUpload]
  );

  const download = useCallback(() => {
    if (!resultUrl || !result || !file) return;
    const anchor = downloadRef.current;
    if (!anchor) return;
    anchor.href = resultUrl;
    anchor.download = outputFileName(file.name, result.mimeType);
    anchor.click();
    track("download", {
      tool: mode,
      output_format: formatFromMime(result.mimeType),
      output_size: sizeBucket(result.sizeBytes),
    });
    toast(t("tool.downloadStarted"), { tone: "success" });
  }, [resultUrl, result, file, mode, toast, t]);

  // Ctrl/Cmd+S saves the result, the way it would in any editor. Only bound
  // while there is something to save, so the browser's own Save dialog still
  // works on the empty state.
  useEffect(() => {
    if (!resultUrl) return;
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        download();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [resultUrl, download]);

  // Report outcomes once per settled result rather than per render.
  const reportedRef = useRef<string | null>(null);
  useEffect(() => {
    if (!result || status !== "ready") return;
    const key = `${result.sizeBytes}:${result.width}x${result.height}:${result.mimeType}`;
    if (reportedRef.current === key) return;
    reportedRef.current = key;
    track("process_completed", {
      tool: mode,
      output_format: formatFromMime(result.mimeType),
      output_size: sizeBucket(result.sizeBytes),
      target_missed: result.targetMissed,
    });
    if (result.targetMissed) track("target_missed", { tool: mode });
  }, [result, status, mode]);

  useEffect(() => {
    if (error) track("process_failed", { tool: mode, code: error.code });
  }, [error, mode]);

  function startOver() {
    reset();
    setParams(startingParams());
    reportedRef.current = null;
  }

  function applyCrop(rect: CropRect, label: string) {
    patch({ crop: rect, cropLabel: label });
    setShowCrop(false);
    track("crop_applied", { tool: mode, ratio: label });
  }

  const busy = status === "processing" || status === "loading";
  const errorMessage = error ? t(`errors.${error.code}`, error.params) : null;
  // Derived from the same predicate the pipeline uses to short-circuit, so
  // the message and the behaviour can never disagree.
  const passthrough = Boolean(file && isNoopOptions(options, file.type));

  /* ---------------------------------------------------------------- empty */

  if (!file) {
    return (
      <div className="flex w-full max-w-2xl flex-col items-center gap-5">
        {hero}
        <Dropzone onFile={handleFile} />
        {errorMessage && <ErrorNote message={errorMessage} />}
        <a ref={downloadRef} className="hidden" aria-hidden />
      </div>
    );
  }

  /* ------------------------------------------------------------ workspace */

  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-4 lg:min-h-0 lg:flex-1">
      <div className="flex w-full flex-col gap-4 animate-fade-in lg:min-h-0 lg:flex-1 lg:flex-row">
        {/* Preview column — flexible; absorbs whatever space the fixed-width
            requirements panel leaves, and never scrolls. That "shrink to fit"
            behaviour (min-h-0 + flex-1) is a desktop-only contract: below
            `lg` the page is allowed to scroll (see ToolTemplate), so forcing
            it here too just compressed this column below its content's real
            height with nothing to clip the overflow — the content spilled
            out and visually overlapped the requirements panel below it. */}
        <div className="flex min-w-0 flex-col gap-3 lg:min-h-0 lg:flex-1">
          <div className="relative min-h-[180px] min-w-0 flex-1 lg:min-h-[90px]">
            {result && resultUrl && originalUrl ? (
              <CompareSlider
                beforeSrc={originalUrl}
                afterSrc={resultUrl}
                alt={file.name}
                transparent={source?.hasAlpha}
                beforeLabel={`${t("tool.before")} · ${formatBytes(result.originalSizeBytes, locale)}`}
                afterLabel={`${t("tool.after")} · ${formatBytes(result.sizeBytes, locale)}`}
              />
            ) : (
              <div className={cn("relative h-full w-full overflow-hidden rounded-xl", source?.hasAlpha ? "bg-checker" : "bg-subtle")}>
                {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, never a remote asset */}
                <img src={originalUrl ?? undefined} alt="" className="h-full w-full object-contain" />
              </div>
            )}

            {busy && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-bg/55 backdrop-blur-[2px] animate-fade-in">
                <ProgressRing value={status === "loading" ? undefined : progress} />
                <span className="text-xs font-medium text-fg-secondary">
                  {status === "loading" ? t("tool.reading") : t("tool.processing")}
                </span>
              </div>
            )}
          </div>

          {result && <ResultSummary result={result} dimmed={busy} />}

          {result?.targetMissed && (
            <p className="flex shrink-0 items-start gap-2 rounded-xl bg-warning-soft px-3.5 py-2.5 text-[13px] text-warning">
              <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {t("tool.targetMissed", { size: formatBytes(params.targetBytes, locale) })}
            </p>
          )}

          {passthrough && !result?.targetMissed && (
            <p className="shrink-0 text-center text-[13px] text-fg-muted">{t("tool.passthrough")}</p>
          )}

          {errorMessage && <ErrorNote message={errorMessage} />}

          <div className="flex w-full shrink-0 gap-2.5">
            <Button onClick={download} disabled={!resultUrl || !result} block className="flex-1">
              <Download className="h-4 w-4" />
              {t("tool.download")}
            </Button>
            <Button variant="secondary" onClick={startOver} className="flex-1">
              <RotateCcw className="h-4 w-4" />
              {t("tool.newImage")}
            </Button>
          </div>
        </div>

        <RequirementsPanel
          params={params}
          patch={patch}
          source={source}
          order={config.order}
          onOpenCrop={() => setShowCrop(true)}
        />
      </div>

      {/* Hidden anchor used to trigger the download without leaving the page. */}
      <a ref={downloadRef} className="hidden" aria-hidden />

      {showCrop && originalUrl && (
        <CropModal
          imageUrl={originalUrl}
          initialLabel={params.cropLabel}
          onCancel={() => setShowCrop(false)}
          onConfirm={applyCrop}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function ErrorNote({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex w-full shrink-0 items-start gap-2 rounded-xl border border-danger/25 bg-danger-soft px-3.5 py-3 text-[13px] text-danger animate-fade-in"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

/**
 * Determinate while the engine reports progress, indeterminate while the
 * file is still being decoded (which has no measurable steps).
 */
function ProgressRing({ value }: { value?: number }) {
  const size = 42;
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const determinate = typeof value === "number";

  return (
    <span className="relative flex items-center justify-center">
      <svg width={size} height={size} className={cn(!determinate && "animate-spin")} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--line)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={determinate ? circumference * (1 - Math.min(1, value)) : circumference * 0.75}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: determinate ? "stroke-dashoffset 200ms var(--ease-out)" : undefined }}
        />
      </svg>
      {determinate && (
        <ImageIcon className="pointer-events-none absolute h-4 w-4 text-accent" aria-hidden />
      )}
    </span>
  );
}
