"use client";

import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Global error boundary for unhandled render errors.
 *
 * Distinct from the tool's own error handling: everything the image engine
 * can fail at is already a typed `ImageError` shown inline in the panel, so
 * anything that reaches here is a genuine bug. The page therefore offers the
 * only two useful moves — retry the render, or go home — and does not
 * pretend to explain what went wrong.
 *
 * The root layout still renders around this, so the providers are in place
 * and the copy can be shown in the visitor's language, on the visitor's
 * theme, like every other page. `error.tsx` must be a Client Component.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();

  useEffect(() => {
    // Nothing is shipped anywhere: this is only so the stack is visible in the
    // visitor's own console (and in ours, when a bug is reproduced locally).
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main id="main" className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-28 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-danger-soft text-danger animate-pop">
          <TriangleAlert className="h-6 w-6" aria-hidden />
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-fg">{t("errorPage.title")}</h1>
        <p className="max-w-sm text-[15px] text-fg-secondary">{t("errorPage.body")}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          <Button onClick={reset}>{t("errorPage.retry")}</Button>
          <Button href="/" variant="secondary">
            {t("errorPage.home")}
          </Button>
        </div>
        {/* The digest is the only handle that ties a report to a build; shown
            quietly rather than hidden, so a user who reports the bug can quote it. */}
        {error.digest && <p className="pt-2 text-[11px] text-fg-faint">{error.digest}</p>}
      </main>
      <Footer />
    </div>
  );
}
