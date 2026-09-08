import type { Locale } from "@/i18n/config";

/**
 * Small inline SVG flags, keyed by locale.
 *
 * Not emoji: flag emoji (regional indicator pairs) render as plain two-
 * letter codes on Windows outside Chrome's newest builds, so relying on
 * them silently degrades to "EN", "IT", etc. with no flag at all. These
 * are simplified but recognizable at 20×14 — real flags, not pixel-exact
 * reproductions (no crests/text/13-star fields), which is the right
 * trade-off at chip size.
 */
export function FlagIcon({ code, className }: { code: Locale; className?: string }) {
  return (
    <span className={`inline-block h-[14px] w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10 ${className ?? ""}`}>
      <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden="true">
        {FLAG_CONTENT[code]}
      </svg>
    </span>
  );
}

const FLAG_CONTENT: Record<Locale, React.ReactNode> = {
  en: (
    <>
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0L20 14M20 0L0 14" stroke="#fff" strokeWidth="2.8" />
      <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M10 0V14M0 7H20" stroke="#fff" strokeWidth="4.6" />
      <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.6" />
    </>
  ),
  es: (
    <>
      <rect width="20" height="14" fill="#AA151B" />
      <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    </>
  ),
  pt: (
    <>
      <rect width="20" height="14" fill="#009739" />
      <path d="M8 7L12.5 3V11L8 7Z" fill="#FEDD00" />
      <circle cx="8.5" cy="7" r="2" fill="#012169" />
    </>
  ),
  fr: (
    <>
      <rect width="6.7" height="14" fill="#0055A4" />
      <rect x="6.7" width="6.6" height="14" fill="#fff" />
      <rect x="13.3" width="6.7" height="14" fill="#EF4135" />
    </>
  ),
  de: (
    <>
      <rect width="20" height="4.7" fill="#000" />
      <rect y="4.7" width="20" height="4.6" fill="#DD0000" />
      <rect y="9.3" width="20" height="4.7" fill="#FFCE00" />
    </>
  ),
  it: (
    <>
      <rect width="6.7" height="14" fill="#009246" />
      <rect x="6.7" width="6.6" height="14" fill="#fff" />
      <rect x="13.3" width="6.7" height="14" fill="#CE2B37" />
    </>
  ),
  nl: (
    <>
      <rect width="20" height="4.7" fill="#AE1C28" />
      <rect y="4.7" width="20" height="4.6" fill="#fff" />
      <rect y="9.3" width="20" height="4.7" fill="#21468B" />
    </>
  ),
  pl: (
    <>
      <rect width="20" height="7" fill="#fff" />
      <rect y="7" width="20" height="7" fill="#DC143C" />
    </>
  ),
  ru: (
    <>
      <rect width="20" height="4.7" fill="#fff" />
      <rect y="4.7" width="20" height="4.6" fill="#0039A6" />
      <rect y="9.3" width="20" height="4.7" fill="#D52B1E" />
    </>
  ),
  tr: (
    <>
      <rect width="20" height="14" fill="#E30A17" />
      <circle cx="8" cy="7" r="3.6" fill="#fff" />
      <circle cx="9" cy="7" r="2.9" fill="#E30A17" />
      <path d="M12 7l3.4-1.1-2.1 2.9v-3.6l2.1 2.9z" fill="#fff" />
    </>
  ),
  ar: (
    <>
      <rect width="20" height="14" fill="#006C35" />
      <rect x="3" y="6.3" width="12" height="1.4" fill="#fff" />
      <path d="M15 6.3l1.6.7-1.6.7z" fill="#fff" />
    </>
  ),
  hi: (
    <>
      <rect width="20" height="4.7" fill="#FF9933" />
      <rect y="4.7" width="20" height="4.6" fill="#fff" />
      <rect y="9.3" width="20" height="4.7" fill="#138808" />
      <circle cx="10" cy="7" r="1.6" fill="none" stroke="#000080" strokeWidth="0.4" />
      <circle cx="10" cy="7" r="0.4" fill="#000080" />
    </>
  ),
  id: (
    <>
      <rect width="20" height="7" fill="#CE1126" />
      <rect y="7" width="20" height="7" fill="#fff" />
    </>
  ),
  ja: (
    <>
      <rect width="20" height="14" fill="#fff" />
      <circle cx="10" cy="7" r="4" fill="#BC002D" />
    </>
  ),
  ko: (
    <>
      <rect width="20" height="14" fill="#fff" />
      <circle cx="10" cy="7" r="3.4" fill="#CD2E3A" />
      <path d="M10 3.6a3.4 3.4 0 000 6.8 1.7 1.7 0 010-3.4 1.7 1.7 0 000-3.4z" fill="#0047A0" />
    </>
  ),
  zh: (
    <>
      <rect width="20" height="14" fill="#DE2910" />
      <path d="M4 2.6l.6 1.8h1.9l-1.5 1.1.6 1.8-1.6-1.1-1.6 1.1.6-1.8-1.5-1.1h1.9z" fill="#FFDE00" />
    </>
  ),
};
