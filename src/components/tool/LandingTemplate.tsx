"use client";

import { ToolTemplate } from "@/components/tool/ToolTemplate";
import { useLanguage } from "@/i18n/LanguageProvider";
import { resolveLandingCopy } from "@/lib/tools/landingCopy";
import type { Landing } from "@/lib/tools/registry";

/**
 * The client half of a keyword landing page (`/[slug]/page.tsx` is the
 * server half — metadata and JSON-LD, both intentionally still English, see
 * `registry.ts`). Takes the plain-data `Landing` objects as props and
 * resolves their visitor-facing copy from the active dictionary here, in one
 * `useLanguage()` call, before handing off to the same `ToolTemplate` every
 * other tool page uses.
 */
export function LandingTemplate({ landing, related }: { landing: Landing; related: Landing[] }) {
  const { t } = useLanguage();
  const copy = resolveLandingCopy(landing, t);
  const relatedLinks = related.map((sibling) => ({ slug: sibling.slug, h1: resolveLandingCopy(sibling, t).h1 }));

  return <ToolTemplate mode={landing.mode} copy={copy} preset={landing.preset} related={relatedLinks} />;
}
