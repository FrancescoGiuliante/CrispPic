"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crop, FileImage, Gauge, HelpCircle, Maximize2 } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: "/compress", label: t("nav.compress"), icon: Gauge },
    { href: "/resize", label: t("nav.resize"), icon: Maximize2 },
    { href: "/crop", label: t("nav.crop"), icon: Crop },
    { href: "/convert", label: t("nav.convert"), icon: FileImage },
    { href: "/faq", label: t("nav.faq"), icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shrink-0 border-b border-line bg-surface/80 backdrop-blur-xl">
      {/* Skip link — the first tab stop on the page, so a keyboard user can
          jump straight past the nav to the tool. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-fg"
      >
        {t("common.skipToContent")}
      </a>

      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 rounded-lg transition-opacity hover:opacity-80" aria-label={t("common.home")}>
          <Logo />
        </Link>

        <PillNav links={navLinks} pathname={pathname} label={t("common.primaryNav")} />

        <div className="flex shrink-0 items-center gap-0.5">
          <ThemeToggle />
          <LanguageSwitcher />
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}

type NavLink = { href: string; label: string };

/**
 * The desktop nav, with a pill background that slides between links instead
 * of popping in and out on the newly-active one.
 *
 * There is no shared-layout-animation library in this project, so the pill
 * is one absolutely-positioned span whose `left`/`width` are measured off
 * the active `<a>`'s own `getBoundingClientRect()` and re-applied with a CSS
 * transition — the same technique a library like Framer Motion's
 * `layoutId` performs internally, just without the dependency.
 *
 * Re-measures on: route change (the active link moves), locale change (link
 * text — and so width — changes per language), and window resize. It does
 * not animate on the very first paint (`ready` gates the transition), so
 * the pill appears already in place instead of sliding in from a default
 * position.
 */
function PillNav({ links, pathname, label }: { links: NavLink[]; pathname: string; label: string }) {
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [ready, setReady] = useState(false);

  const activeHref = links.find((link) => link.href === pathname)?.href;

  useLayoutEffect(() => {
    const nav = navRef.current;
    const activeEl = activeHref ? linkRefs.current.get(activeHref) : undefined;

    function measure() {
      if (!nav || !activeEl) {
        setPill(null);
        return;
      }
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setPill({ left: linkRect.left - navRect.left, width: linkRect.width });
    }

    measure();
    // Runs once, after the first real measurement — everything after this
    // point is allowed to transition; the first paint is not.
    const raf = requestAnimationFrame(() => setReady(true));

    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [activeHref, links]);

  return (
    <nav ref={navRef} aria-label={label} className="relative hidden items-center gap-0.5 text-sm font-medium md:flex">
      {pill && (
        <span
          aria-hidden
          className={cn("absolute inset-y-1 rounded-full bg-accent-soft", ready && "transition-all duration-300 ease-[var(--ease-spring)]")}
          style={{ left: pill.left, width: pill.width }}
        />
      )}
      {links.map((link) => {
        const active = link.href === activeHref;
        return (
          <Link
            key={link.href}
            ref={(el) => {
              if (el) linkRefs.current.set(link.href, el);
              else linkRefs.current.delete(link.href);
            }}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative rounded-full px-3 py-1.5 transition-colors duration-150",
              active ? "text-accent" : "text-fg-secondary hover:bg-subtle hover:text-fg"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
