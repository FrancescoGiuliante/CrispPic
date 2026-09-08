"use client";

import {
  Crop as CropIcon,
  FlipHorizontal,
  FlipVertical,
  Lock,
  Pencil,
  RotateCcw,
  RotateCw,
  Sparkles,
  TriangleAlert,
  Unlock,
  X,
} from "lucide-react";
import { Switch } from "@/components/ui/Switch";
import { Select } from "@/components/ui/Select";
import { Segmented } from "@/components/ui/Segmented";
import { Slider } from "@/components/ui/Slider";
import { IconButton } from "@/components/ui/IconButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatBytes } from "@/lib/format";
import { formatSupportsAlpha, type OutputFormat, type SourceInfo } from "@/lib/image/types";
import { cn } from "@/lib/utils";
import {
  DIMENSION_PRESETS,
  SIZE_PRESETS,
  orientedSourceSize,
  type Params,
  type RequirementKey,
} from "./params";

type Props = {
  params: Params;
  patch: (next: Partial<Params>) => void;
  source: SourceInfo | null;
  order: RequirementKey[];
  onOpenCrop: () => void;
};

/**
 * The requirements panel: one card per thing the output has to satisfy.
 *
 * Each card is independently switchable and they all compose — the engine
 * applies whatever is on in a single pass. That is the product's actual
 * differentiator, so the UI makes it visible rather than hiding combinations
 * behind separate "tools".
 */
export function RequirementsPanel({ params, patch, source, order, onOpenCrop }: Props) {
  const { t, locale } = useLanguage();

  const cards: Record<RequirementKey, React.ReactNode> = {
    size: <SizeCard key="size" params={params} patch={patch} />,
    quality: <QualityCard key="quality" params={params} patch={patch} />,
    format: <FormatCard key="format" params={params} patch={patch} source={source} />,
    dimensions: <DimensionsCard key="dimensions" params={params} patch={patch} source={source} locale={locale} />,
    crop: <CropCard key="crop" params={params} patch={patch} onOpenCrop={onOpenCrop} />,
    transform: <TransformCard key="transform" params={params} patch={patch} />,
  };

  return (
    <div className="flex w-full flex-col divide-y divide-line overflow-y-auto overflow-x-hidden rounded-2xl border border-line bg-surface px-4 shadow-sm scroll-thin lg:w-[290px] lg:shrink-0">
      <p className="sr-only">{t("tool.panelHeading")}</p>
      {order.map((key) => cards[key])}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function SectionCard({
  title,
  hint,
  toggle,
  children,
}: {
  title: string;
  hint?: string;
  toggle?: { checked: boolean; onChange: (v: boolean) => void };
  children?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-2.5 py-3 first:pt-3.5 last:pb-3.5">
      <div className="flex min-h-6 items-center justify-between gap-2">
        <span className="text-[13px] font-semibold text-fg">{title}</span>
        {hint && !toggle && <span className="tabular text-[11px] text-fg-muted">{hint}</span>}
        {toggle && <Switch checked={toggle.checked} onChange={toggle.onChange} label={title} size="sm" />}
      </div>
      {children && <div className="animate-fade-in">{children}</div>}
    </section>
  );
}

/** Pill button used for the size presets and the transform row. */
function Chip({
  active,
  children,
  className,
  ...props
}: { active?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "h-8 rounded-full px-3 text-[13px] font-medium transition-all duration-150",
        active
          ? "bg-accent text-accent-fg shadow-accent"
          : "bg-subtle text-fg-secondary hover:bg-subtle-hover hover:text-fg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */

function SizeCard({ params, patch }: { params: Params; patch: Props["patch"] }) {
  const { t, locale } = useLanguage();

  function commitCustom(raw: string) {
    const kb = Number(raw);
    if (!Number.isFinite(kb) || kb <= 0) {
      patch({ customKb: "", isCustomSize: false });
      return;
    }
    patch({ isCustomSize: true, sizeEnabled: true, targetBytes: Math.round(kb * 1024) });
  }

  return (
    <SectionCard
      title={t("tool.maxFileSize")}
      toggle={{ checked: params.sizeEnabled, onChange: (v) => patch({ sizeEnabled: v }) }}
    >
      {params.sizeEnabled && (
        <div className="flex flex-wrap gap-1.5">
          {SIZE_PRESETS.map((preset) => (
            <Chip
              key={preset.bytes}
              active={!params.isCustomSize && params.targetBytes === preset.bytes}
              onClick={() => patch({ isCustomSize: false, customKb: "", sizeEnabled: true, targetBytes: preset.bytes })}
            >
              {formatBytes(preset.bytes, locale)}
            </Chip>
          ))}
          <div
            className={cn(
              "flex h-8 items-center gap-1 rounded-full ps-2.5 pe-2.5 transition-all",
              params.isCustomSize ? "bg-accent text-accent-fg shadow-accent" : "bg-subtle text-fg-secondary"
            )}
          >
            <input
              type="number"
              min={1}
              inputMode="decimal"
              aria-label={t("tool.customSizeLabel")}
              placeholder={t("tool.custom")}
              value={params.customKb}
              onChange={(e) => patch({ customKb: e.target.value })}
              onBlur={(e) => commitCustom(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && commitCustom((e.target as HTMLInputElement).value)}
              className={cn(
                // Deliberately roomier than the widest translated placeholder
                // actually measures ("Personal." in es/it/pt, ~58px at this
                // font) rather than sized to the exact pixel: a value this
                // close to the edge reads as truncated depending on the
                // fallback font used before Inter finishes loading, so the
                // field gets real breathing room instead of a tight fit.
                "w-24 bg-transparent text-[13px] font-medium outline-none",
                params.isCustomSize ? "placeholder:text-accent-fg/70" : "placeholder:text-fg-muted"
              )}
            />
            <span className="text-[13px] font-medium">KB</span>
          </div>
        </div>
      )}
    </SectionCard>
  );
}

/* -------------------------------------------------------------------------- */

function QualityCard({ params, patch }: { params: Params; patch: Props["patch"] }) {
  const { t } = useLanguage();

  // A target size derives its own quality by search — exposing a second,
  // conflicting knob at the same time would be a lie about what is in charge.
  if (params.sizeEnabled) return null;
  if (params.format === "png") return null;

  return (
    <SectionCard
      title={t("tool.quality")}
      toggle={{ checked: params.qualityEnabled, onChange: (v) => patch({ qualityEnabled: v }) }}
    >
      {params.qualityEnabled && (
        <Slider
          label={t("tool.quality")}
          min={10}
          max={100}
          step={1}
          value={Math.round(params.quality * 100)}
          valueLabel={`${Math.round(params.quality * 100)}%`}
          onChange={(v) => patch({ quality: v / 100 })}
        />
      )}
    </SectionCard>
  );
}

/* -------------------------------------------------------------------------- */

function FormatCard({ params, patch, source }: { params: Params; patch: Props["patch"]; source: SourceInfo | null }) {
  const { t } = useLanguage();

  const options: { value: OutputFormat; label: string }[] = [
    { value: "auto", label: t("tool.formats.auto") },
    { value: "jpeg", label: t("tool.formats.jpeg") },
    { value: "png", label: t("tool.formats.png") },
    { value: "webp", label: t("tool.formats.webp") },
  ];

  const losesAlpha = source?.hasAlpha && params.format !== "auto" && !formatSupportsAlpha(params.format);

  return (
    <SectionCard title={t("tool.outputFormat")}>
      <div className="flex flex-col gap-2">
        <Segmented
          label={t("tool.outputFormat")}
          value={params.format}
          onChange={(value) => patch({ format: value })}
          options={options}
          size="sm"
        />
        {losesAlpha && (
          <p className="flex items-start gap-1.5 rounded-lg bg-warning-soft px-2.5 py-2 text-[11px] leading-4 text-warning animate-fade-in">
            <TriangleAlert className="mt-px h-3 w-3 shrink-0" />
            {t("tool.alphaWarning")}
          </p>
        )}
      </div>
    </SectionCard>
  );
}

/* -------------------------------------------------------------------------- */

function DimensionsCard({
  params,
  patch,
  source,
  locale,
}: {
  params: Params;
  patch: Props["patch"];
  source: SourceInfo | null;
  locale: string;
}) {
  const { t } = useLanguage();
  const base = orientedSourceSize(params, source);

  /**
   * With the aspect ratio locked, typing one edge fills in the other
   * immediately rather than waiting for the engine to come back — the field
   * shows what will actually happen while you are still typing.
   */
  function onWidth(value: string) {
    const next: Partial<Params> = { width: value, dimensionsEnabled: true };
    if (params.lockAspect && base && Number(value) > 0) {
      next.height = String(Math.max(1, Math.round((Number(value) * base.height) / base.width)));
    }
    patch(next);
  }

  function onHeight(value: string) {
    const next: Partial<Params> = { height: value, dimensionsEnabled: true };
    if (params.lockAspect && base && Number(value) > 0) {
      next.width = String(Math.max(1, Math.round((Number(value) * base.width) / base.height)));
    }
    patch(next);
  }

  const presetOptions = [
    { value: "", label: t("tool.presetPlaceholder") },
    ...DIMENSION_PRESETS.map((preset) => ({
      value: preset.id,
      label: `${t(`tool.presets.${preset.id}`)} · ${preset.width}×${preset.height}`,
    })),
  ];

  const activePreset =
    DIMENSION_PRESETS.find((p) => String(p.width) === params.width && String(p.height) === params.height)?.id ?? "";

  return (
    <SectionCard
      title={t("tool.dimensions")}
      toggle={{ checked: params.dimensionsEnabled, onChange: (v) => patch({ dimensionsEnabled: v }) }}
    >
      {params.dimensionsEnabled && (
        <div className="flex flex-col gap-2.5">
          <Segmented
            label={t("tool.resizeUnit")}
            size="sm"
            value={params.resizeUnit}
            onChange={(value) => patch({ resizeUnit: value })}
            options={[
              { value: "px", label: t("tool.unitPixels") },
              { value: "percent", label: t("tool.unitPercent") },
            ]}
          />

          {params.resizeUnit === "px" ? (
            <>
              <div className="flex items-center gap-2">
                <NumberField label="W" value={params.width} onChange={onWidth} ariaLabel={t("tool.width")} />
                <span className="text-fg-faint">×</span>
                <NumberField label="H" value={params.height} onChange={onHeight} ariaLabel={t("tool.height")} />
                <IconButton
                  label={params.lockAspect ? t("tool.unlockAspect") : t("tool.lockAspect")}
                  variant="subtle"
                  active={params.lockAspect}
                  onClick={() => patch({ lockAspect: !params.lockAspect })}
                >
                  {params.lockAspect ? <Lock className="h-3.5 w-3.5" /> : <Unlock className="h-3.5 w-3.5" />}
                </IconButton>
              </div>
              <Select
                size="sm"
                aria-label={t("tool.presetPlaceholder")}
                value={activePreset}
                options={presetOptions}
                onChange={(id) => {
                  const preset = DIMENSION_PRESETS.find((p) => p.id === id);
                  if (preset) patch({ width: String(preset.width), height: String(preset.height), dimensionsEnabled: true });
                }}
              />
            </>
          ) : (
            <Slider
              label={t("tool.scale")}
              min={5}
              max={200}
              step={5}
              value={params.percent}
              valueLabel={
                base
                  ? `${params.percent}% · ${Math.round((base.width * params.percent) / 100)}×${Math.round(
                      (base.height * params.percent) / 100
                    )}`
                  : `${params.percent}%`
              }
              onChange={(percent) => patch({ percent })}
            />
          )}

          {base && (
            <p className="tabular text-[11px] text-fg-muted">
              {t("tool.sourceSize", {
                size: `${new Intl.NumberFormat(locale).format(base.width)} × ${new Intl.NumberFormat(locale).format(base.height)}`,
              })}
            </p>
          )}
        </div>
      )}
    </SectionCard>
  );
}

function NumberField({
  label,
  value,
  onChange,
  ariaLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  ariaLabel: string;
}) {
  return (
    <div className="flex h-9 flex-1 items-center gap-1.5 rounded-lg bg-subtle px-2.5 transition-colors focus-within:bg-subtle-hover">
      <span aria-hidden className="text-[11px] font-semibold text-fg-muted">
        {label}
      </span>
      <input
        type="number"
        min={1}
        inputMode="numeric"
        aria-label={ariaLabel}
        placeholder="auto"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="tabular w-full min-w-0 bg-transparent text-[13px] font-medium text-fg outline-none placeholder:font-normal placeholder:text-fg-muted"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function CropCard({ params, patch, onOpenCrop }: { params: Params; patch: Props["patch"]; onOpenCrop: () => void }) {
  const { t } = useLanguage();

  return (
    <SectionCard title={t("tool.crop")}>
      {params.crop ? (
        <div className="flex items-center justify-between gap-2 rounded-lg bg-accent-soft px-3 py-1.5">
          <span className="text-[13px] font-medium text-accent">
            {params.cropLabel ? t(`cropModal.ratios.${params.cropLabel}`) : t("tool.crop")}
          </span>
          <div className="flex items-center gap-0.5">
            <IconButton label={t("tool.editCrop")} size="sm" onClick={onOpenCrop}>
              <Pencil className="h-3.5 w-3.5" />
            </IconButton>
            <IconButton label={t("tool.removeCrop")} size="sm" onClick={() => patch({ crop: null, cropLabel: null })}>
              <X className="h-3.5 w-3.5" />
            </IconButton>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={onOpenCrop}
          className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-subtle text-[13px] font-medium text-fg-secondary transition-colors hover:bg-subtle-hover hover:text-fg"
        >
          <CropIcon className="h-3.5 w-3.5" />
          {t("tool.openCropEditor")}
        </button>
      )}
    </SectionCard>
  );
}

/* -------------------------------------------------------------------------- */

function TransformCard({ params, patch }: { params: Params; patch: Props["patch"] }) {
  const { t } = useLanguage();
  const rotateBy = (delta: number) => patch({ rotate: (((params.rotate + delta) % 360) + 360) % 360 as Params["rotate"] });
  const touched = params.rotate !== 0 || params.flipH || params.flipV;

  return (
    <SectionCard title={t("tool.transform")} hint={params.rotate ? `${params.rotate}°` : undefined}>
      <div className="flex items-center gap-1">
        <IconButton label={t("tool.rotateLeft")} variant="subtle" onClick={() => rotateBy(-90)}>
          <RotateCcw className="h-3.5 w-3.5" />
        </IconButton>
        <IconButton label={t("tool.rotateRight")} variant="subtle" onClick={() => rotateBy(90)}>
          <RotateCw className="h-3.5 w-3.5" />
        </IconButton>
        <span className="mx-1 h-5 w-px bg-line" />
        <IconButton
          label={t("tool.flipHorizontal")}
          variant="subtle"
          active={params.flipH}
          onClick={() => patch({ flipH: !params.flipH })}
        >
          <FlipHorizontal className="h-3.5 w-3.5" />
        </IconButton>
        <IconButton
          label={t("tool.flipVertical")}
          variant="subtle"
          active={params.flipV}
          onClick={() => patch({ flipV: !params.flipV })}
        >
          <FlipVertical className="h-3.5 w-3.5" />
        </IconButton>
        {touched && (
          <button
            type="button"
            onClick={() => patch({ rotate: 0, flipH: false, flipV: false })}
            className="ms-auto flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-fg-muted transition-colors hover:bg-subtle hover:text-fg animate-fade-in"
          >
            <Sparkles className="h-3 w-3" />
            {t("tool.resetTransform")}
          </button>
        )}
      </div>
    </SectionCard>
  );
}
