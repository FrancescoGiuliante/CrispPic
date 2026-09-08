"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/**
 * The full FAQ, assembled from the same per-tool copy the tool pages show in
 * their side rail.
 *
 * Sourcing it from the dictionary rather than a second hardcoded list means
 * this page is available in all 16 languages for free, and that an answer can
 * never drift between the rail and the FAQ page — there is only one copy of
 * each question in the codebase.
 */
export function FaqList() {
  const { dict, t } = useLanguage();

  const sections = [
    { heading: t("common.faqGeneral"), items: dict.home.faq },
    { heading: t("nav.compress"), items: dict.toolPages.compress.faq },
    { heading: t("nav.resize"), items: dict.toolPages.resize.faq },
    { heading: t("nav.crop"), items: dict.toolPages.crop.faq },
    { heading: t("nav.convert"), items: dict.toolPages.convert.faq },
  ];

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">{t("common.faqPageTitle")}</h1>
      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-1">
          <h2 className="mb-1 text-[11px] font-semibold tracking-widest text-fg-faint uppercase">{section.heading}</h2>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            {section.items.map((item, index) => (
              <FaqRow key={item.q} question={item.q} answer={item.a} defaultOpen={index === 0} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function FaqRow({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-line last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-start transition-colors hover:bg-subtle/60"
      >
        <span className="text-[15px] font-medium text-fg">{question}</span>
        <ChevronDown
          className={cn("mt-0.5 h-4 w-4 shrink-0 text-fg-muted transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && <p className="px-5 pb-4 text-[15px] leading-7 text-fg-secondary animate-fade-in">{answer}</p>}
    </div>
  );
}
