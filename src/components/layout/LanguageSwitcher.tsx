"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT, type Locale } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { FlagIcon } from "@/components/layout/FlagIcon";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      // Roving focus through the list, so the switcher is fully operable
      // without a mouse — 16 options is too many to tab through one by one.
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      const items = [...(listRef.current?.querySelectorAll<HTMLButtonElement>("[data-locale]") ?? [])];
      if (!items.length) return;
      event.preventDefault();
      const index = items.indexOf(document.activeElement as HTMLButtonElement);
      const next = event.key === "ArrowDown" ? index + 1 : index - 1;
      items[(next + items.length) % items.length].focus();
    }

    // Move focus into the list on open so the arrow keys have somewhere to go.
    listRef.current?.querySelector<HTMLButtonElement>(`[data-locale="${locale}"]`)?.focus();

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, locale]);

  function choose(next: Locale) {
    setLocale(next);
    setOpen(false);
    triggerRef.current?.focus();
    track("language_changed", { locale: next });
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("language.label")}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex h-9 items-center gap-1.5 rounded-full border px-2.5 text-sm font-medium transition-colors",
          open
            ? "border-line-strong bg-subtle text-fg"
            : "border-transparent text-fg-secondary hover:bg-subtle hover:text-fg"
        )}
      >
        <FlagIcon code={locale} />
        <span className="hidden sm:inline">{LOCALE_SHORT[locale]}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 text-fg-muted transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          aria-label={t("language.label")}
          className="absolute top-11 end-0 z-50 max-h-[min(70vh,26rem)] w-56 overflow-y-auto rounded-2xl border border-line bg-elevated p-1 shadow-lg animate-scale-in scroll-thin"
        >
          <p className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold tracking-widest text-fg-faint uppercase">
            <Languages className="h-3 w-3" aria-hidden />
            {t("language.label")}
          </p>
          {LOCALES.map((code) => {
            const selected = code === locale;
            return (
              <button
                key={code}
                type="button"
                role="option"
                data-locale={code}
                aria-selected={selected}
                onClick={() => choose(code)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm transition-colors",
                  selected ? "bg-accent-soft font-semibold text-accent" : "text-fg-secondary hover:bg-subtle hover:text-fg"
                )}
              >
                <FlagIcon code={code} />
                <span className="flex-1 text-start">{LOCALE_LABELS[code]}</span>
                {selected ? (
                  <Check className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  <span className="text-[11px] text-fg-faint">{LOCALE_SHORT[code]}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
