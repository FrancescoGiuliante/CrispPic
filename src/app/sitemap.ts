import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Static pages for now. As tool/landing pages are added in Fase 2/4
 * (e.g. /compress-image-to-100kb), append them here — or, once there are
 * many, generate this list from a shared route registry instead of
 * hand-maintaining it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/faq", "/privacy", "/terms", "/contact"];

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
