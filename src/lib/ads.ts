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

/**
 * The AdSense publisher id, hardcoded rather than read from
 * NEXT_PUBLIC_ADSENSE_CLIENT — this one is only used for the site-ownership
 * `<meta name="google-adsense-account">` tag in the document head (see
 * layout.tsx), which Google's review crawler must see unconditionally on
 * every visit. AD_CLIENT above stays env-driven and empty until ads are
 * actually meant to serve, because it also gates the real adsbygoogle.js
 * loader and ad units behind cookie consent — the two are deliberately
 * decoupled so verifying the site never requires turning ads on.
 */
export const ADSENSE_ACCOUNT = "ca-pub-4191226054051517";

export const AD_SLOT_IDS: Record<AdPlacement, string | undefined> = {
  "rail-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_RAIL_TOP,
  "rail-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_RAIL_BOTTOM,
  "below-content": process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_CONTENT,
  "mobile-inline": process.env.NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_INLINE,
};

export const ADS_ENABLED = Boolean(AD_CLIENT);
