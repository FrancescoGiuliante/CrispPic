"use client";

import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * The single place third-party scripts are allowed to enter the document.
 *
 * Each script still checks its own env var, so an unconfigured deploy ships
 * nothing regardless; this adds the second, legal gate — nothing is rendered
 * until the visitor has actively accepted. Rendering `null` here means the
 * `<Script>` tags are never created, which is stronger than loading them and
 * telling them not to track.
 */
export function ConsentedScripts() {
  const { status } = useConsent();

  if (status !== "granted") return null;

  return (
    <>
      <GoogleAnalytics />
      <AdSenseScript />
    </>
  );
}
