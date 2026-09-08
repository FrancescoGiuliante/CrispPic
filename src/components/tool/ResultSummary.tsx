"use client";

import { ArrowRight, Maximize2, Sliders, TrendingDown, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatBytes, formatDimensions, savingsPercent } from "@/lib/format";
import { formatFromMime, type ProcessResult } from "@/lib/image/types";
import { cn } from "@/lib/utils";

/**
 * The one-line verdict: what the file was, what it is now, and by how much.
 *
 * Kept honest in both directions — a result that got *bigger* (PNG output
 * from a JPG source, or quality raised) says so with an up arrow instead of
 * quietly showing "0% saved".
 */
export function ResultSummary({ result, dimmed }: { result: ProcessResult; dimmed?: boolean }) {
  const { t, locale } = useLanguage();
  const savings = savingsPercent(result.originalSizeBytes, result.sizeBytes);
  const grew = savings < 0;

  return (
    <div
      className={cn(
        "flex w-full shrink-0 flex-wrap items-center justify-center gap-x-5 gap-y-1.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-[13px] text-fg-secondary transition-opacity",
        dimmed && "opacity-50"
      )}
    >
      <span className="tabular flex items-center gap-1.5">
        <span className="text-fg-muted line-through decoration-fg-faint/60">
          {formatBytes(result.originalSizeBytes, locale)}
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-fg-faint" aria-hidden />
        <span className="font-semibold text-fg">{formatBytes(result.sizeBytes, locale)}</span>
        {savings !== 0 && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
              grew ? "bg-warning-soft text-warning" : "bg-success-soft text-success"
            )}
          >
            {grew ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(savings)}%
          </span>
        )}
      </span>

      <span className="tabular flex items-center gap-1.5">
        <Maximize2 className="h-3.5 w-3.5 text-fg-faint" aria-hidden />
        {formatDimensions(result.width, result.height, locale)}
      </span>

      {result.quality < 1 && (
        <span className="tabular flex items-center gap-1.5">
          <Sliders className="h-3.5 w-3.5 text-fg-faint" aria-hidden />
          {t("tool.qualityValue", { value: Math.round(result.quality * 100) })}
        </span>
      )}

      <span className="rounded-md bg-subtle px-1.5 py-0.5 text-[11px] font-semibold tracking-wide text-fg-secondary uppercase">
        {formatFromMime(result.mimeType)}
      </span>
    </div>
  );
}
