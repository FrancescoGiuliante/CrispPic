"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { Check, Maximize, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Slider } from "@/components/ui/Slider";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import type { CropRect } from "@/lib/image/types";

const RATIO_PRESETS = [
  { label: "Free", sub: "", value: undefined },
  { label: "Square", sub: "1:1", value: 1 },
  { label: "Landscape", sub: "4:3", value: 4 / 3 },
  { label: "Portrait", sub: "3:4", value: 3 / 4 },
  { label: "Widescreen", sub: "16:9", value: 16 / 9 },
  { label: "Story", sub: "9:16", value: 9 / 16 },
] as const;

type Props = {
  imageUrl: string;
  initialLabel?: string | null;
  onCancel: () => void;
  onConfirm: (crop: CropRect, label: string) => void;
};

export function CropModal({ imageUrl, initialLabel, onCancel, onConfirm }: Props) {
  const { t } = useLanguage();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  const [activeLabel, setActiveLabel] = useState<string>(initialLabel ?? "Square");
  const [ratio, setRatio] = useState<number | undefined>(
    () => RATIO_PRESETS.find((p) => p.label === (initialLabel ?? "Square"))?.value ?? 1
  );
  const [customW, setCustomW] = useState("1");
  const [customH, setCustomH] = useState("1");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [area, setArea] = useState<Area | null>(null);

  /* Modal plumbing: lock the page behind it, close on Escape, keep Tab inside
     the dialog, and hand focus back where it came from on close. Without the
     focus trap, tabbing out of a modal lands the user on controls they can
     see but cannot reach past the overlay. */
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    confirmRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopPropagation();
        onCancel();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [onCancel]);

  const handleCropComplete = useCallback((croppedAreaPercent: Area) => setArea(croppedAreaPercent), []);

  function selectPreset(label: string, value: number | undefined) {
    setRatio(value);
    setActiveLabel(label);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  }

  function applyCustomRatio() {
    const w = Number(customW);
    const h = Number(customH);
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return;
    selectPreset("Custom", w / h);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm animate-fade-in"
      onPointerDown={(event) => event.target === event.currentTarget && onCancel()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-line bg-elevated shadow-lg animate-scale-in"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-3.5">
          <h2 id={titleId} className="text-sm font-semibold text-fg">
            {t("cropModal.title")}
          </h2>
          <IconButton label={t("cropModal.cancel")} onClick={onCancel} size="sm" tooltip={false}>
            <X className="h-4 w-4" />
          </IconButton>
        </div>

        <div className="relative h-[46vh] max-h-[400px] min-h-[220px] w-full shrink-0 bg-black">
          <Cropper
            image={imageUrl}
            crop={crop}
            zoom={zoom}
            aspect={ratio}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
            showGrid
          />
        </div>

        <div className="flex min-h-0 flex-col gap-3.5 overflow-y-auto px-5 py-4 scroll-thin">
          <div className="flex flex-wrap gap-1.5">
            {RATIO_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => selectPreset(preset.label, preset.value)}
                className={cn(
                  "flex h-8 items-center gap-1.5 rounded-full px-3 text-[13px] font-medium transition-colors",
                  activeLabel === preset.label
                    ? "bg-accent text-accent-fg shadow-accent"
                    : "bg-subtle text-fg-secondary hover:bg-subtle-hover hover:text-fg"
                )}
              >
                {preset.label === "Free" && <Maximize className="h-3 w-3" />}
                {t(`cropModal.ratios.${preset.label}`)}
                {preset.sub && <span className="text-[11px] opacity-70">{preset.sub}</span>}
              </button>
            ))}
            <div
              className={cn(
                "flex h-8 items-center gap-1 rounded-full px-2.5 text-[13px] font-medium transition-colors",
                activeLabel === "Custom" ? "bg-accent text-accent-fg shadow-accent" : "bg-subtle text-fg-secondary"
              )}
            >
              <input
                type="number"
                min={1}
                aria-label={t("cropModal.customWidth")}
                value={customW}
                onChange={(e) => setCustomW(e.target.value)}
                onBlur={applyCustomRatio}
                onKeyDown={(e) => e.key === "Enter" && applyCustomRatio()}
                className="tabular w-7 bg-transparent text-center outline-none"
              />
              <span className="opacity-60">:</span>
              <input
                type="number"
                min={1}
                aria-label={t("cropModal.customHeight")}
                value={customH}
                onChange={(e) => setCustomH(e.target.value)}
                onBlur={applyCustomRatio}
                onKeyDown={(e) => e.key === "Enter" && applyCustomRatio()}
                className="tabular w-7 bg-transparent text-center outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ZoomIn className="h-4 w-4 shrink-0 text-fg-muted" aria-hidden />
            <Slider label={t("cropModal.zoom")} min={1} max={4} step={0.01} value={zoom} onChange={setZoom} />
          </div>

          <div className="flex gap-2.5 pt-0.5">
            <Button variant="secondary" onClick={onCancel} className="flex-1">
              {t("cropModal.cancel")}
            </Button>
            <Button
              ref={confirmRef}
              onClick={() => {
                if (!area) return;
                onConfirm(
                  { x: area.x / 100, y: area.y / 100, width: area.width / 100, height: area.height / 100 },
                  activeLabel
                );
              }}
              disabled={!area}
              className="flex-1"
            >
              <Check className="h-4 w-4" />
              {t("cropModal.apply")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
