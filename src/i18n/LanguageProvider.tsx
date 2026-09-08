"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LOCALE, LOCALE_DIR, LOCALES, STORAGE_KEY, matchLocale, type Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { pt } from "./dictionaries/pt";
import { fr } from "./dictionaries/fr";
import { de } from "./dictionaries/de";
import { it } from "./dictionaries/it";
import { nl } from "./dictionaries/nl";
import { pl } from "./dictionaries/pl";
import { ru } from "./dictionaries/ru";
import { tr } from "./dictionaries/tr";
import { ar } from "./dictionaries/ar";
import { hi } from "./dictionaries/hi";
import { id } from "./dictionaries/id";
import { ja } from "./dictionaries/ja";
import { ko } from "./dictionaries/ko";
import { zh } from "./dictionaries/zh";

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, pt, fr, de, it, nl, pl, ru, tr, ar, hi, id, ja, ko, zh };

type Ctx = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Looks up a dot-path (e.g. "tool.download") in the current dictionary, falling back to English, then to the path itself. `{var}` placeholders in the string are replaced from `vars`. */
  t: (path: string, vars?: Record<string, string | number>) => string;
  dict: Dictionary;
};

const LanguageContext = createContext<Ctx | null>(null);

function getPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start at the default locale so server and first client render
  // match exactly (no hydration mismatch). Real detection happens after
  // mount, in the effect below.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    // One-time client-only initialization from localStorage/navigator, which
    // don't exist during SSR — there's no way to know the real locale before
    // mount, so a single extra render here is the intended trade-off for
    // avoiding a hydration mismatch (see the comment on the useState above).
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (LOCALES as readonly string[]).includes(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init, see comment above
      setLocaleState(stored as Locale);
      return;
    }
    // Try every language the user's browser reports (in preference order),
    // not just the top one — e.g. a browser set to ["nb", "it", "en"] with
    // no Norwegian dictionary should still land on Italian, not English.
    const candidates = window.navigator.languages?.length ? window.navigator.languages : [window.navigator.language];
    const match = candidates.map((tag) => matchLocale(tag)).find((l) => l !== DEFAULT_LOCALE);
    if (match) setLocaleState(match);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = LOCALE_DIR[locale];
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const value = useMemo<Ctx>(() => {
    const dict = DICTIONARIES[locale];
    const t = (path: string, vars?: Record<string, string | number>) => {
      const value = getPath(dict, path) ?? getPath(en, path);
      return typeof value === "string" ? interpolate(value, vars) : path;
    };
    return { locale, setLocale, t, dict };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
