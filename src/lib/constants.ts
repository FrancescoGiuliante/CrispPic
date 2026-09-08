/**
 * Site-wide constants.
 *
 * SITE_URL falls back to the canonical production origin (crisppic.com) so
 * metadata, sitemap and OG URLs are correct even without configuration. Set
 * NEXT_PUBLIC_SITE_URL to override it on preview deploys.
 *
 * SITE_NAME is the single source of the brand string: the wordmark, the
 * generated favicon/OG image, the manifest and the downloaded filename all
 * derive from it, so a rename never has to be chased through the codebase.
 */
export const SITE_NAME = "CrispPic";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crisppic.com";

export const SITE_TAGLINE = "Make your image fit the requirement.";

export const SITE_DESCRIPTION =
  "Resize, compress, and convert images to fit exact requirements — file size, dimensions, or format. Free, fast, and processed entirely in your browser. No uploads, no signup.";

export const CONTACT_EMAIL = "hello@crisppic.com";
