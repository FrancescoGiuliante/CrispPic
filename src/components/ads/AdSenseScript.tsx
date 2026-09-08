import Script from "next/script";
import { AD_CLIENT } from "@/lib/ads";

/**
 * Loads adsbygoogle.js once, and only when a client id is configured — so
 * development and preview deploys ship zero third-party ad JavaScript.
 * `afterInteractive` keeps it off the critical path, which matters for the
 * LCP budget on the tool pages.
 */
export function AdSenseScript() {
  if (!AD_CLIENT) return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
    />
  );
}
