/**
 * Site-wide constants.
 *
 * SITE_URL falls back to the canonical production origin so metadata,
 * sitemap and OG URLs are correct even without configuration. Set
 * NEXT_PUBLIC_SITE_URL to override it on preview deploys.
 *
 * Must be `www.crisppic.com`, not the bare apex: Vercel's domain config
 * serves `www` as primary and 308-redirects the apex to it. Every URL this
 * constant produces (sitemap entries, canonical tags, OG/JSON-LD URLs) has
 * to be the one that actually resolves without a hop — a canonical tag or
 * sitemap entry that itself redirects is precisely what Search Console
 * flags as "Page with redirect" and refuses to index, which is what
 * happened while this pointed at the apex.
 *
 * SITE_NAME is the single source of the brand string: the wordmark, the
 * generated favicon/OG image, the manifest and the downloaded filename all
 * derive from it, so a rename never has to be chased through the codebase.
 */
export const SITE_NAME = "CrispPic";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.crisppic.com";

export const SITE_TAGLINE = "Make your image fit the requirement.";

export const SITE_DESCRIPTION =
  "Resize, compress, and convert images to fit exact requirements — file size, dimensions, or format. Free, fast, and processed entirely in your browser. No uploads, no signup.";

export const CONTACT_EMAIL = "hello@crisppic.com";
