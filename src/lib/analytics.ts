/**
 * Product analytics.
 *
 * Deliberately narrow: only anonymous, aggregate facts about *what the tool
 * was asked to do* — never anything derived from image content, and never a
 * filename. That keeps the "we never see your files" promise on the tin
 * literally true, including in the telemetry.
 *
 * No-ops entirely unless NEXT_PUBLIC_GA_ID is configured (see
 * GoogleAnalytics.tsx), so development and preview deploys send nothing.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

export type AnalyticsEvent =
  | "file_selected"
  | "process_completed"
  | "process_failed"
  | "download"
  | "crop_applied"
  | "target_missed"
  | "theme_changed"
  | "language_changed";

export function track(event: AnalyticsEvent, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  try {
    gtag("event", event, params);
  } catch {
    // Analytics must never be able to break the tool.
  }
}

/** Buckets a byte count so the analytics dimension stays low-cardinality. */
export function sizeBucket(bytes: number): string {
  const kb = bytes / 1024;
  if (kb < 100) return "<100KB";
  if (kb < 500) return "100-500KB";
  if (kb < 1024) return "500KB-1MB";
  const mb = kb / 1024;
  if (mb < 5) return "1-5MB";
  if (mb < 15) return "5-15MB";
  return ">15MB";
}
