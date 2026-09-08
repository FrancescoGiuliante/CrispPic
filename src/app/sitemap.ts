import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LANDINGS } from "@/lib/tools/registry";

/**
 * The keyword landing pages come from the same registry that generates their
 * routes, so a new entry in `LANDINGS` is submitted to search engines without
 * anyone remembering to touch this file. Only the fixed routes — which are
 * real files on disk — are still listed by hand.
 *
 * Priorities read as a ranking of intent, not of importance to us: the home
 * page, then the four tool entry points, then the landings (equal to a tool
 * page: they are the same tool with the requirement already answered), then
 * the legal and informational pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const toolRoutes = ["/compress", "/resize", "/crop", "/convert"];
  const landingRoutes = LANDINGS.map((landing) => `/${landing.slug}`);
  const contentRoutes = ["/about", "/faq", "/privacy", "/terms", "/contact"];

  const lastModified = new Date();

  const entry = (route: string, priority: number, changeFrequency: "weekly" | "monthly") => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    ...toolRoutes.map((route) => entry(route, 0.8, "weekly")),
    ...landingRoutes.map((route) => entry(route, 0.8, "weekly")),
    ...contentRoutes.map((route) => entry(route, 0.5, "monthly")),
  ];
}
