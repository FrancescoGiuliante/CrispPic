import type { Landing } from "./registry";

/** Matches the shape of `useLanguage().t` — a plain function, not a hook, so it's safe to call from a `.map()`. */
type TFunction = (path: string, vars?: Record<string, string | number>) => string;

const SIZE_SLUG_PREFIX = "compress-image-to-";

/** Slug → the camelCase key its bespoke copy lives under in `dictionary.landings`. */
const BESPOKE_KEYS: Record<string, string> = {
  "passport-photo-size-pixels": "passportPhotoSizePixels",
  "resize-image-to-1080x1080": "resizeImageTo1080x1080",
  "convert-heic-to-jpg": "convertHeicToJpg",
  "convert-png-to-jpg": "convertPngToJpg",
  "convert-webp-to-jpg": "convertWebpToJpg",
  "convert-jpg-to-webp": "convertJpgToWebp",
};

type ResolvedCopy = { badge: string; h1: string; subtitle: string; faq: { q: string; a: string }[] };

/**
 * The visitor-facing counterpart to the English copy on `Landing` (see the
 * comment on `BADGE` in `registry.ts`): looks up the same page's copy in the
 * active dictionary instead, so a landing page reads in the visitor's own
 * language like every other page on the site.
 *
 * Plain function, not a hook — `LandingTemplate` calls this once per related
 * sibling inside a `.map()`, which a hook can't do (Rules of Hooks), after
 * pulling `t` from its own single `useLanguage()` call.
 *
 * The six `compress-image-to-*` pages share one template
 * (`landings.size`) with a `{size}` placeholder, filled in from
 * `landing.sizeLabel` — a plain "20 KB"/"1 MB" string, not run through
 * `formatBytes`, because these are round, hand-picked figures where a
 * locale's digit grouping has nothing to add and `formatBytes` would instead
 * add a stray decimal ("20.0 KB"). The one sentence a shared template can't
 * write itself — who actually asks for that size — comes from
 * `landings.whoAsks`, keyed by the same suffix as the slug ("20kb", "1mb").
 * Every other landing has fully bespoke copy under its own key.
 */
export function resolveLandingCopy(landing: Landing, t: TFunction): ResolvedCopy {
  const badge = t("home.badge");

  if (landing.slug.startsWith(SIZE_SLUG_PREFIX) && landing.sizeLabel) {
    const size = landing.sizeLabel;
    const sizeKey = landing.slug.slice(SIZE_SLUG_PREFIX.length);
    return {
      badge,
      h1: t("landings.size.h1", { size }),
      subtitle: t("landings.size.subtitle", { size }),
      faq: [
        { q: t("landings.size.q1", { size }), a: t("landings.size.a1", { size }) },
        { q: t("landings.size.q2", { size }), a: t("landings.size.a2", { size }) },
        { q: t("landings.size.q3", { size }), a: t(`landings.whoAsks.${sizeKey}`) },
        { q: t("landings.size.q4", { size }), a: t("landings.size.a4") },
        { q: t("landings.size.q5"), a: t("landings.size.a5") },
      ],
    };
  }

  const key = BESPOKE_KEYS[landing.slug];
  if (key) {
    const faq = [0, 1, 2, 3].map((i) => ({
      q: t(`landings.${key}.faq.${i}.q`),
      a: t(`landings.${key}.faq.${i}.a`),
    }));
    return { badge, h1: t(`landings.${key}.h1`), subtitle: t(`landings.${key}.subtitle`), faq };
  }

  // Unreachable for a landing that actually came from the registry — kept as
  // a safe fallback rather than a throw, in case a slug is ever added here
  // without its dictionary copy yet.
  return { badge: landing.badge, h1: landing.h1, subtitle: landing.subtitle, faq: landing.faq };
}
