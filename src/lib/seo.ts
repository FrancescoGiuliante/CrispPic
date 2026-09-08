import { en } from "@/i18n/dictionaries/en";
import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

/**
 * Structured data.
 *
 * Always emitted from the English dictionary rather than the visitor's
 * chosen language: the locale here is a client-side preference that a
 * crawler never sets, so generating JSON-LD from it would produce markup
 * that disagrees with the server-rendered HTML Google actually indexes.
 */

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any browser",
    browserRequirements: "Requires JavaScript and HTML5 Canvas",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Compress image to an exact file size",
      "Resize image to exact pixel dimensions",
      "Crop image to a fixed or custom aspect ratio",
      "Convert between JPG, PNG and WebP",
      "Rotate and flip",
      "Runs entirely in the browser — no upload",
    ],
    permissions: "No account, no upload, no server-side processing",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    email: CONTACT_EMAIL,
  };
}

/** FAQPage markup from an explicit question list — the same copy the page renders. */
export function faqPageJsonLd(faq: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** FAQPage markup for a tool route, taken from the English dictionary. */
export function toolFaqJsonLd(page: "home" | "compress" | "resize" | "crop" | "convert") {
  return faqPageJsonLd(page === "home" ? en.home.faq : en.toolPages[page].faq);
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

