import type { Metadata } from "next";
import { FaqList } from "@/components/layout/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { en } from "@/i18n/dictionaries/en";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers about how ${SITE_NAME} compresses, resizes, crops and converts images — entirely in your browser, with no upload.`,
  alternates: { canonical: "/faq" },
};

/**
 * Every question the product answers, in one place. The visible list is
 * rendered client-side from the active language's dictionary; the JSON-LD
 * below is always English, because it describes the server-rendered HTML a
 * crawler receives and must not disagree with it.
 */
export default function FaqPage() {
  const questions = [
    ...en.home.faq,
    ...en.toolPages.compress.faq,
    ...en.toolPages.resize.faq,
    ...en.toolPages.crop.faq,
    ...en.toolPages.convert.faq,
  ];

  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <FaqList />
    </article>
  );
}
