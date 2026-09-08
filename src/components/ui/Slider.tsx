"use client";

import { cn } from "@/lib/utils";

/**
 * Range input styled to match the design system in both themes. Built on
 * the native `<input type="range">` so it keeps free keyboard support,
 * screen-reader announcements, and touch behaviour; only the track and
 * thumb are restyled.
 *
 * The filled portion of the track is a `linear-gradient` whose stop is
 * driven by the current value — one repaint per change, no extra element.
 */
export function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  valueLabel,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label: string;
  valueLabel?: string;
  className?: string;
}) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {valueLabel && (
        <div className="flex items-center justify-between text-[11px] font-medium text-fg-muted">
          <span>{label}</span>
          <span className="tabular text-fg-secondary">{valueLabel}</span>
        </div>
      )}
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--subtle) ${pct}%, var(--subtle) 100%)`,
        }}
        className={cn(
          "h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
          // WebKit thumb
          "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-surface",
          "[&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-sm",
          "[&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110",
          "active:[&::-webkit-slider-thumb]:scale-95",
          // Firefox thumb
          "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full",
          "[&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-surface [&::-moz-range-thumb]:bg-accent"
        )}
      />
    </div>
  );
}
