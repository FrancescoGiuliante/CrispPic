"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { cn } from "@/lib/utils";
import { AD_CLIENT, AD_SLOT_IDS, type AdPlacement } from "@/lib/ads";

/**
 * An ad placement.
 *
 * The contract of this component is *the space is always reserved*, in every
 * state: configured or not, filled or unfilled. The layout is designed
 * around these boxes from the start, so turning AdSense on later changes
 * what is inside them and never how the page is laid out — no cumulative
 * layout shift, and no "the design broke once ads went live" surprise.
 *
 * Three states:
 * 1. No client id configured, or the visitor has not accepted advertising
 *    cookies — the box renders its house fallback (or empty and invisible),
 *    still occupying its exact reserved size. In development only, it draws
 *    a labelled dashed outline so the reservation is visible while designing.
 * 2. Configured and consented — the real `<ins class="adsbygoogle">` unit
 *    renders inside the reserved box.
 * 3. Live but unfilled — AdSense collapses its own `<ins>`; our box keeps its
 *    height, so nothing jumps.
 *
 * The consent check matters twice over: `adsbygoogle.js` is not in the
 * document until consent is granted, so pushing an `<ins>` before then would
 * queue a unit that can never fill, and the reserved box would sit visibly
 * empty instead of showing the house card.
 *
 * Rules this component exists to enforce (project brief §14):
 * - never between an upload step and its result/download;
 * - never an interstitial, popup, or auto-expanding unit;
 * - always a fixed reserved height.
 */

type Props = {
  placement: AdPlacement;
  className?: string;
  /**
   * House content shown in the reserved box while no ad network is
   * configured — so an empty rail reads as intentional product content
   * rather than a hole. Replaced by the ad unit once ads are live.
   */
  fallback?: React.ReactNode;
};

/** Reserved box geometry per placement, matched to standard IAB unit sizes. */
const RESERVED: Record<AdPlacement, string> = {
  // 300×250 medium rectangle.
  "rail-top": "h-[250px] w-full max-w-[300px]",
  // 300×600 half-page, allowed to shrink in short viewports (the tool page
  // never scrolls, so this box absorbs the slack instead of overflowing).
  "rail-bottom": "min-h-[250px] w-full max-w-[300px] flex-1",
  // 728×90 leaderboard, responsive down to 320×100 on mobile.
  "below-content": "h-[100px] w-full max-w-[728px] lg:h-[90px]",
  // 320×100 inline mobile unit, shown under the tool on small screens only.
  "mobile-inline": "h-[100px] w-full max-w-[320px]",
};

export function AdSlot({ placement, className, fallback }: Props) {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const { status } = useConsent();
  const live = Boolean(AD_CLIENT) && status === "granted";

  useEffect(() => {
    if (!live || pushed.current || !ref.current) return;
    pushed.current = true;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch {
      // A blocked or not-yet-loaded adsbygoogle.js must never break the tool.
    }
  }, [live]);

  const box = cn("flex shrink-0 items-center justify-center overflow-hidden", RESERVED[placement], className);

  if (!live) {
    return (
      <div className={box} data-ad-placement={placement} aria-hidden={!fallback}>
        {fallback ?? (
          process.env.NODE_ENV === "development" ? (
            <span className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-line-strong text-[10px] font-medium tracking-widest text-fg-faint uppercase">
              Ad · {placement}
            </span>
          ) : null
        )}
      </div>
    );
  }

  return (
    <div className={box} data-ad-placement={placement}>
      <ins
        ref={ref}
        className="adsbygoogle block h-full w-full"
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT_IDS[placement]}
        data-ad-format="auto"
        data-full-width-responsive="false"
      />
    </div>
  );
}
