"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Draw an alpha checkerboard behind the images. Only meaningful when the source actually has transparency — on an opaque photo it is just visual noise in the letterboxed margins. */
  transparent?: boolean;
  className?: string;
};

/**
 * Before/after comparison with a draggable divider.
 *
 * Both images are stacked absolutely at full size and the "before" layer is
 * clipped with `clip-path` rather than resized, so it never re-flows against
 * `object-fit: contain` while dragging.
 *
 * The divider is a real `role="slider"`: it is focusable, arrow keys move it
 * (Shift for coarse steps, Home/End to pin to either side), and its position
 * is announced. A drag-only control would leave keyboard and screen-reader
 * users with no way to see the "before" image at all.
 */
export function CompareSlider({ beforeSrc, afterSrc, alt, beforeLabel, afterLabel, transparent, className }: Props) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  function updateFromClientX(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  function onKeyDown(event: React.KeyboardEvent) {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (event.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (event.key === "Home") setPos(0);
    else if (event.key === "End") setPos(100);
    else return;
    event.preventDefault();
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-full w-full touch-none overflow-hidden rounded-xl select-none",
        transparent ? "bg-checker" : "bg-subtle",
        className
      )}
      onPointerDown={(event) => {
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
        setDragging(true);
        updateFromClientX(event.clientX);
      }}
      onPointerMove={(event) => dragging && updateFromClientX(event.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, never a remote asset */}
      <img
        src={afterSrc}
        alt={`${alt} — ${t("tool.after")}`}
        className="absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />
      <div className={cn("absolute inset-0 h-full w-full", transparent ? "bg-checker" : "bg-subtle")} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, never a remote asset */}
        <img
          src={beforeSrc}
          alt={`${alt} — ${t("tool.before")}`}
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />
      </div>

      <span
        className={cn(
          "pointer-events-none absolute top-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm transition-opacity",
          pos < 12 && "opacity-0"
        )}
      >
        {beforeLabel ?? t("tool.before")}
      </span>
      <span
        className={cn(
          "pointer-events-none absolute top-3 right-3 rounded-full bg-accent/90 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm transition-opacity",
          pos > 88 && "opacity-0"
        )}
      >
        {afterLabel ?? t("tool.after")}
      </span>

      <div className="pointer-events-none absolute inset-y-0 flex w-0 items-center" style={{ left: `${pos}%` }}>
        <div className="h-full w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_0_1px_rgb(0_0_0/0.12)]" />
        <button
          type="button"
          role="slider"
          aria-label={t("tool.compareLabel")}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={t("tool.compareValue", { value: Math.round(pos) })}
          onKeyDown={onKeyDown}
          className={cn(
            "pointer-events-auto absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize",
            "items-center justify-center rounded-full bg-white text-zinc-700 shadow-lg transition-transform duration-150",
            "hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            dragging && "scale-110"
          )}
        >
          <ChevronLeft className="h-3.5 w-3.5 -me-1" />
          <ChevronRight className="h-3.5 w-3.5 -ms-1" />
        </button>
      </div>
    </div>
  );
}
