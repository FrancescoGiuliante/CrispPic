"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { Logo } from "@/components/layout/Logo";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SITE_NAME } from "@/lib/constants";

/** A footer entry is either a route or an in-page action; never both. */
type FooterLink = { href: string; label: string } | { onClick: () => void; label: string };

export function Footer() {
  const { t } = useLanguage();
  const { openPreferences } = useConsent();

  const columns: { heading: string; links: FooterLink[] }[] = [
    {
      heading: t("footer.tools"),
      links: [
        { href: "/compress", label: t("footer.compress") },
        { href: "/resize", label: t("footer.resize") },
        { href: "/crop", label: t("footer.crop") },
        { href: "/convert", label: t("footer.convert") },
      ],
    },
    {
      heading: t("footer.company"),
      links: [
        { href: "/about", label: t("footer.about") },
        { href: "/contact", label: t("footer.contact") },
        { href: "/faq", label: t("footer.faq") },
      ],
    },
    {
      heading: t("footer.legal"),
      links: [
        { href: "/privacy", label: t("footer.privacy") },
        { href: "/terms", label: t("footer.terms") },
        // Not a route: consent has to stay reversible from every page, and a
        // dedicated page for one toggle would be a worse place to change it
        // than the banner the choice was first made in.
        { onClick: openPreferences, label: t("consent.manage") },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-line bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-start gap-3">
          <Logo />
          <p className="max-w-[220px] text-sm text-fg-muted">{t("footer.tagline")}</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
            <ShieldCheck className="h-3 w-3" aria-hidden />
            {t("footer.privacyPill")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-widest text-fg-faint uppercase">{column.heading}</span>
              {column.links.map((link) =>
                "href" in link ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded text-sm text-fg-secondary transition-colors hover:text-fg"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    type="button"
                    onClick={link.onClick}
                    className="rounded text-start text-sm text-fg-secondary transition-colors hover:text-fg"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-line px-6 py-5 text-center text-xs text-fg-muted">
        © {new Date().getFullYear()} {SITE_NAME}. {t("footer.copyright")}
      </div>
    </footer>
  );
}
