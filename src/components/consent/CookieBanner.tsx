"use client";

import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Consent banner.
 *
 * Deliberately *not* a modal: it never traps focus and never blocks the
 * tool, because the product works identically whichever button is pressed —
 * making the page unusable until someone accepts would be both hostile and,
 * under the ePrivacy rules, a nudge that undermines the freeness of the
 * choice. For the same reason "Decline" is a real button of the same size
 * and prominence as "Accept", not a link hidden in the small print.
 *
 * A dismiss × appears only when a decision already exists (i.e. the banner
 * was reopened from the footer link) — an undecided visitor has to choose,
 * since silently closing it would leave consent unresolved forever.
 *
 * It sits above the mobile ad slot and below the toasts in stacking order;
 * on the fixed-height tool pages it overlays the bottom edge rather than
 * changing the layout, so no reserved geometry moves.
 */
export function CookieBanner() {
  const { bannerOpen, status, accept, decline, closeBanner } = useConsent();
  const { t } = useLanguage();

  if (!bannerOpen) return null;

  return (
    <div
      role="region"
      aria-label={t("consent.title")}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-3 sm:p-4"
    >
      <div className="pointer-events-auto relative flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-line bg-elevated p-4 shadow-lg animate-rise-in sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Cookie className="h-4.5 w-4.5" aria-hidden />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-sm font-semibold text-fg">{t("consent.title")}</p>
          <p className="text-[13px] leading-5 text-fg-secondary">
            {t("consent.body")}{" "}
            <Link
              href="/privacy"
              className="rounded text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              {t("consent.learnMore")}
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="sm" onClick={decline}>
            {t("consent.decline")}
          </Button>
          <Button variant="primary" size="sm" onClick={accept}>
            {t("consent.accept")}
          </Button>
        </div>

        {status !== null && (
          <IconButton
            label={t("consent.close")}
            size="sm"
            variant="ghost"
            onClick={closeBanner}
            className="absolute end-1.5 top-1.5 sm:static"
          >
            <X className="h-4 w-4" aria-hidden />
          </IconButton>
        )}
      </div>
    </div>
  );
}
