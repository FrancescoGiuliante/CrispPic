"use client";

import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * The 404 body. Split out as a client component so it can read the active
 * language — a visitor who set the site to Japanese and then mistyped a URL
 * should not be answered in English.
 */
export function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <main id="main" className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-28 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-subtle text-fg-muted animate-pop">
        <FileQuestion className="h-6 w-6" aria-hidden />
      </span>
      <p className="text-sm font-semibold tracking-widest text-fg-faint uppercase">{t("notFound.code")}</p>
      <h1 className="text-2xl font-semibold tracking-tight text-fg">{t("notFound.title")}</h1>
      <p className="max-w-sm text-[15px] text-fg-secondary">{t("notFound.body")}</p>
      <Button href="/" className="mt-2">
        {t("notFound.cta")}
      </Button>
    </main>
  );
}
