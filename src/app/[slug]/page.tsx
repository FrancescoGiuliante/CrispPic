import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { LandingTemplate } from "@/components/tool/LandingTemplate";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { LANDINGS, getLanding, relatedLandings } from "@/lib/tools/registry";

/**
 * Every keyword landing page, from one route.
 *
 * This file is the whole of "Sprint C": there is no per-slug component and no
 * per-slug directory. `generateStaticParams` walks the registry, so all of
 * these are prerendered HTML at build time, and each one renders the same
 * `ToolTemplate` → `ImageTool` as `/compress` — only the copy and the
 * `preset` differ. Adding a landing is adding an object to `LANDINGS`.
 *
 * `dynamicParams = false` makes any slug outside the registry a 404 rather
 * than an on-demand render: these URLs are a fixed, curated set, and an
 * open-ended one would let crawlers mint infinite thin pages.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDINGS.map((landing) => ({ slug: landing.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) return {};

  const url = `/${landing.slug}`;

  return {
    title: landing.title,
    description: landing.description,
    alternates: { canonical: url },
    openGraph: { url, title: landing.title, description: landing.description },
    twitter: { title: landing.title, description: landing.description },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const landing = getLanding(slug);
  // Unreachable with dynamicParams = false, but the type says the lookup can
  // fail and a silent crash on a mistyped `related` slug would be worse.
  if (!landing) notFound();

  const related = relatedLandings(landing);

  return (
    <>
      {/* English on purpose, like the metadata above: one static JSON-LD
          payload generated at build time, with no per-locale route to key a
          translated version off. See the comment on `BADGE` in registry.ts. */}
      <JsonLd
        data={[
          faqPageJsonLd(landing.faq),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: landing.h1, path: `/${landing.slug}` },
          ]),
        ]}
      />
      <LandingTemplate landing={landing} related={related} />
    </>
  );
}
