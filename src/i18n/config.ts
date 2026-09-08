export const LOCALES = ["en", "es", "pt", "fr", "de", "it", "nl", "pl", "ru", "tr", "ar", "hi", "id", "ja", "ko", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Native display names, shown in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  ru: "Русский",
  tr: "Türkçe",
  ar: "العربية",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
  fr: "FR",
  de: "DE",
  it: "IT",
  nl: "NL",
  pl: "PL",
  ru: "RU",
  tr: "TR",
  ar: "AR",
  hi: "HI",
  id: "ID",
  ja: "JA",
  ko: "KO",
  zh: "ZH",
};

export const LOCALE_DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  es: "ltr",
  pt: "ltr",
  fr: "ltr",
  de: "ltr",
  it: "ltr",
  nl: "ltr",
  pl: "ltr",
  ru: "ltr",
  tr: "ltr",
  ar: "rtl",
  hi: "ltr",
  id: "ltr",
  ja: "ltr",
  ko: "ltr",
  zh: "ltr",
};

export const STORAGE_KEY = "crisppic-locale";

/** Matches a browser language tag (e.g. "pt-BR", "zh-Hans") against our supported locales, falling back to English. */
export function matchLocale(tag: string | undefined | null): Locale {
  if (!tag) return DEFAULT_LOCALE;
  const primary = tag.toLowerCase().split("-")[0];
  return (LOCALES as readonly string[]).includes(primary) ? (primary as Locale) : DEFAULT_LOCALE;
}
