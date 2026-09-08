import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

/**
 * Web app manifest — makes the site installable and gives it a proper name,
 * icon and theme colour when added to a phone's home screen. `display:
 * standalone` matters here: the tool pages are already a fixed, non-scrolling
 * frame, so they behave like an app once the browser chrome is gone.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbfd",
    theme_color: "#4f46e5",
    categories: ["photo", "productivity", "utilities"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
