"use client";

import { useState } from "react";

import Link from "next/link";
import { ArrowRight, ChevronDown, Keyboard, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { Badge } from "@/components/ui/Badge";
import { ImageTool } from "@/components/tool/ImageTool";
import type { Params, ToolMode } from "@/components/tool/params";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type PageKey = "home" | "compress" | "resize" | "crop" | "convert";

/** The four strings this template renders. A dictionary `toolPages` entry has exactly this shape. */
type Copy = { badge: string; h1: string; subtitle?: string; faq: { q: string; a: string }[] };

type Props = {
  mode: ToolMode;
  /** Reads the copy from the active dictionary. Mutually exclusive with `copy`. */
  page?: PageKey;
  /**
   * Copy supplied directly, used by the keyword landing pages: their text
   * lives in the landing registry rather than in the dictionaries, because it
   * targets English search phrases and has no localized URL to live at.
   */
  copy?: Copy;
  /** Requirements pre-applied on top of the mode defaults (see `ImageTool`). */
  preset?: Partial<Params>;
  /** Internal links rendered under the tool. */
  related?: { slug: string; h1: string }[];
};

/**
 * Shared render for every tool-focused page (/, /compress, /resize,
 * /convert, /crop). Each route passes its own `page` key and `mode`; the
 * copy comes from the active language dictionary and the tool itself is
 * always the same `ImageTool`, pre-angled toward a mode — so adding another
 * entry point is a content change, not a new tool.
 *
 * ## Layout contract
 *
 * On desktop this page **never scrolls**. It is a fixed `h-dvh` frame split
 * into three columns:
 *
 *   ┌────────────┬──────────────────────────┬──────────────┐
 *   │ FAQ rail   │ the tool                 │ ad rail      │
 *   │ 264px      │ flexible                 │ 332px        │
 *   └────────────┴──────────────────────────┴──────────────┘
 *
 * Both rails are fixed-width and always present above `xl`, and the ad rail
 * reserves its IAB boxes (300×250 and a flexible 300×600) whether or not an
 * ad network is configured — so switching AdSense on later changes what is
 * in the boxes and never the geometry of the page.
 *
 * `min-h-0` is required at every level of this grid: grid and flex items
 * default to `min-height: auto`, which would let the tallest column's
 * content push the row past `h-full` and reintroduce a page scrollbar.
 *
 * Below `xl` there is no room for rails, so the centre column stands alone
 * and takes its own contained scroll — a phone is expected to scroll, and
 * the mobile ad unit sits under the tool rather than beside it.
 */
export function ToolTemplate({ page, mode, copy: copyProp, preset, related }: Props) {
  const { t, dict } = useLanguage();
  const dictCopy: Copy = page === "home" ? dict.home : page ? dict.toolPages[page] : dict.home;
  const copy = copyProp ?? dictCopy;

  const hero = (
    <header className="relative flex w-full max-w-xl shrink-0 flex-col items-center gap-2 pb-3 text-center">
      <Badge variant="outline" size="sm">
        <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
        {copy.badge}
      </Badge>
      <h1 className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-[2.5rem] sm:leading-[1.1]">
        {copy.h1}
      </h1>
      {copy.subtitle && <p className="max-w-lg text-[15px] text-balance text-fg-secondary">{copy.subtitle}</p>}
      {/* Inside the hero rather than under the tool: the tool column is a
          fixed-height, non-scrolling frame on desktop, so anything placed
          below `ImageTool` is clipped and unreachable. The hero is also the
          right moment for these — they answer "wrong target, what else is
          there?" before a file has been chosen, not after. */}
      {related && related.length > 0 && <RelatedLinks items={related} heading={t("common.relatedHeading")} />}
    </header>
  );

  return (
    <div className="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[264px_minmax(0,1fr)_332px]">
      {/* ------------------------------------------------------- FAQ rail */}
      {/*
        `min-h-0` on the aside plus `flex-1 min-h-0` + its own
        `overflow-y-auto` on the FAQ block (not on the aside itself) is
        deliberate: expanding an answer can make the FAQ list taller than
        the space left under the "why" block. Scrolling only that block
        keeps the "why" list and heading always visible and pinned, and
        means an opened answer is always reachable by scroll instead of
        being silently clipped against the viewport edge — which is what
        `overflow-hidden` + `justify-center` on the whole aside used to do.
      */}
      <aside className="hidden min-h-0 flex-col gap-5 overflow-hidden border-e border-line px-5 py-8 xl:flex">
        <div className="flex shrink-0 flex-col gap-1.5">
          <span className="text-[11px] font-semibold tracking-widest text-fg-faint uppercase">
            {t("common.whyHeading")}
          </span>
          <ul className="flex flex-col gap-2 pt-1">
            {[
              { icon: ShieldCheck, text: t("common.trustPrivate") },
              { icon: Zap, text: t("common.trustFast") },
              { icon: Sparkles, text: t("common.trustFree") },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2 text-[12px] leading-4.5 text-fg-secondary">
                <Icon className="mt-px h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px shrink-0 bg-line" />

        <div className="flex min-h-0 flex-1 flex-col gap-1">
          <span className="shrink-0 pb-1 text-[11px] font-semibold tracking-widest text-fg-faint uppercase">
            {t("common.faqHeading")}
          </span>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pe-1 scroll-thin">
            {copy.faq.slice(0, 3).map((item, index) => (
              <FaqItem key={item.q} question={item.q} answer={item.a} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </aside>

      {/* ----------------------------------------------------- tool column */}
      <main id="main" className="flex min-h-0 flex-col overflow-y-auto px-5 py-4 sm:px-6 xl:overflow-hidden scroll-thin">
        <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4">
          <ImageTool mode={mode} hero={hero} preset={preset} />
          {/* Mobile/tablet ad slot — under the tool, never between the
              upload step and the result. */}
          <div className="flex w-full justify-center pt-2 xl:hidden">
            <AdSlot placement="mobile-inline" />
          </div>
        </div>
      </main>

      {/* -------------------------------------------------------- ad rail */}
      <aside className="hidden min-h-0 flex-col items-center gap-4 overflow-hidden border-s border-line px-4 py-6 xl:flex">
        <AdSlot placement="rail-top" fallback={<HouseCard variant="how" />} />
        <AdSlot placement="rail-bottom" fallback={<HouseCard variant="privacy" />} />
      </aside>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * Sibling landing pages.
 *
 * Only rendered on the keyword routes, and only under the tool: they are
 * navigation for someone whose target turned out to be the wrong one ("20 KB
 * is too strict, what about 50?"), not a hub the visitor is meant to browse
 * before using the tool. Real links rather than a client-side switcher, so
 * each one is a crawlable path between the pages.
 */
function RelatedLinks({ items, heading }: { items: { slug: string; h1: string }[]; heading: string }) {
  return (
    <nav aria-label={heading} className="flex flex-col items-center gap-1.5 pt-2">
      <span className="text-[10px] font-semibold tracking-widest text-fg-faint uppercase">{heading}</span>
      <ul className="flex flex-wrap justify-center gap-1.5">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/${item.slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2.5 py-1 text-[11.5px] text-fg-secondary shadow-xs transition-colors hover:border-line-strong hover:text-fg"
            >
              {item.h1}
              <ArrowRight className="h-3 w-3 shrink-0 rtl:rotate-180" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-line/70 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-2 rounded-md py-2.5 text-start"
      >
        <span className="text-[12.5px] leading-4.5 font-medium text-fg">{question}</span>
        <ChevronDown
          className={cn("mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-faint transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && <p className="pb-2.5 text-[11.5px] leading-4.5 text-fg-muted animate-fade-in">{answer}</p>}
    </div>
  );
}

/**
 * What sits in an ad box until an ad network is configured.
 *
 * The alternative — leaving the reserved rail visibly empty — makes a
 * finished product look broken. Deliberately *not* a list of the tools:
 * those are already one click away in the header, and repeating them here
 * would be a second control for an action the user can already see. These
 * two say something the rest of the page doesn't — how the tool works, and
 * why nothing is uploaded. Both are sized to the exact box they occupy, so
 * the swap to a live ad unit is pixel-for-pixel.
 */
function HouseCard({ variant }: { variant: "how" | "privacy" }) {
  const { t } = useLanguage();

  if (variant === "how") {
    const steps = [t("common.step1"), t("common.step2"), t("common.step3")];

    return (
      <div className="flex h-full w-full flex-col gap-3 rounded-2xl border border-line bg-surface p-4 shadow-xs">
        <span className="text-[11px] font-semibold tracking-widest text-fg-faint uppercase">
          {t("common.howHeading")}
        </span>
        <ol className="flex flex-1 flex-col justify-center gap-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[11px] font-semibold text-accent">
                {index + 1}
              </span>
              <span className="text-[12px] leading-4.5 text-fg-secondary">{step}</span>
            </li>
          ))}
        </ol>
        <p className="flex items-center gap-1.5 border-t border-line pt-2.5 text-[11px] text-fg-muted">
          <Keyboard className="h-3 w-3 shrink-0" aria-hidden />
          {t("common.shortcutTip")}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-2xl border border-line bg-surface p-5 text-center shadow-xs">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <ShieldCheck className="h-5 w-5" aria-hidden />
      </span>
      <p className="text-[13px] font-semibold text-fg">{t("common.privacyTitle")}</p>
      <p className="text-[11.5px] leading-4.5 text-fg-muted">{t("common.privacyBody")}</p>
    </div>
  );
}
