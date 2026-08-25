import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${SITE_NAME}.`,
};

const faqs = [
  {
    question: "Do you store or see my images?",
    answer:
      "No. Every tool processes your image directly in your browser. Files are never uploaded to a server, so we never see or store them.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. All tools are free to use, with no account or signup required. The site is supported by minimal advertising.",
  },
  {
    question: "What image formats are supported?",
    answer: "JPG, PNG, and WebP, with more formats planned.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "Since processing happens in your browser rather than on a server, the practical limit depends on your device's memory rather than a fixed cap we impose.",
  },
  {
    question: "Why does the result sometimes look slightly different?",
    answer:
      "Compressing an image to fit a smaller file size involves a trade-off with visual quality. We aim for the best quality possible while staying under your target.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <ContentPage title="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </ContentPage>
  );
}
