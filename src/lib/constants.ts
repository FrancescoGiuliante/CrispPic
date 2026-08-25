/**
 * Site-wide constants.
 *
 * SITE_URL falls back to a placeholder domain during local development.
 * Once a real domain is purchased, set NEXT_PUBLIC_SITE_URL in the
 * production environment (e.g. Vercel project settings) — nothing else
 * needs to change.
 */
export const SITE_NAME = "FitMyFile";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fitmyfile.com";

export const SITE_TAGLINE = "Make your image fit the requirement.";

export const SITE_DESCRIPTION =
  "Resize, compress, and convert images to fit exact requirements — file size, dimensions, or format. Free, fast, and processed entirely in your browser. No uploads, no signup.";

export const CONTACT_EMAIL = "hello@fitmyfile.com";
