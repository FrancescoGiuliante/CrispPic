/**
 * Ad configuration, kept in one place so the layout can reason about
 * reserved space without importing the component.
 *
 * Nothing loads until NEXT_PUBLIC_ADSENSE_CLIENT is set. The per-placement
 * slot ids come from the AdSense dashboard once units are created; they can
 * be supplied individually via env vars, otherwise the placement renders as
 * a responsive auto unit.
 */

export type AdPlacement = "rail-top" | "rail-bottom" | "below-content" | "mobile-inline";

export const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const AD_SLOT_IDS: Record<AdPlacement, string | undefined> = {
  "rail-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_RAIL_TOP,
  "rail-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_RAIL_BOTTOM,
  "below-content": process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_CONTENT,
  "mobile-inline": process.env.NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_INLINE,
};

export const ADS_ENABLED = Boolean(AD_CLIENT);
