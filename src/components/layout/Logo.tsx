import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Icon + wordmark. The icon is a fixed-color raster (cropped from the mark
 * artwork), so it can't shift color via CSS the way the text can — instead
 * two pre-rendered PNGs (indigo, white) sit stacked in the same spot and
 * `.logo-icon-light`/`.logo-icon-dark` in globals.css toggle which one is
 * visible per `[data-theme]`, the same swap-not-recompute approach the
 * favicon pair (`icon.png` / `apple-icon.png`) uses.
 *
 * `unoptimized`: at this display size (28px, from a 512px source) Next's
 * image pipeline picks a small intermediate candidate and resamples through
 * it, which was measured to wash the small amber mountain accent out to
 * nothing. A single direct browser-side downscale of the full-resolution
 * source keeps it (measured ~9% of pixels still amber at 28px vs. 0 through
 * the optimizer) — worth the tiny bit of extra image weight this trades for.
 *
 * `SITE_NAME` is set in the same UI font as the rest of the app (Inter,
 * via `--font-sans`) at a bold weight — no separate display face. A
 * dedicated bubbly logo font was tried and dropped: it read as a mismatch
 * against the otherwise neutral, professional tone of the product. Its
 * color is `--logo`: a solid fill (never a stroke/outline trick), brand
 * indigo in light mode and solid white in dark mode, since indigo reads
 * muddy against the app's near-black dark background. See the `--logo`
 * definitions in globals.css.
 */
export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative inline-flex h-7 w-7 shrink-0">
        <Image src="/logo-icon.png" alt="" fill unoptimized className="logo-icon-light object-contain" priority />
        <Image src="/logo-icon-dark.png" alt="" fill unoptimized className="logo-icon-dark object-contain" priority />
      </span>
      {showWordmark && (
        <span className="text-[19px] leading-none font-bold tracking-tight" style={{ color: "var(--logo)" }}>
          {SITE_NAME}
        </span>
      )}
    </span>
  );
}
