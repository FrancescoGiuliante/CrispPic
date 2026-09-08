/**
 * Byte formatting.
 *
 * Locale-aware digit grouping via Intl, so a German user sees "1,25 MB" and
 * an English one "1.25 MB". The unit itself stays untranslated: KB/MB are
 * read as symbols rather than words in every language we ship.
 */
export function formatBytes(bytes: number, locale?: string): string {
  if (bytes < 1024) return `${format(bytes, 0, locale)} B`;

  const kb = bytes / 1024;
  if (kb < 1024) return `${format(kb, kb < 10 ? 2 : 1, locale)} KB`;

  const mb = kb / 1024;
  return `${format(mb, 2, locale)} MB`;
}

function format(value: number, decimals: number, locale?: string): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Percentage saved going from `before` to `after`. Negative when the result
 * grew — which genuinely happens (PNG output from a JPG source, or raising
 * quality), and the UI shows it honestly rather than clamping to zero.
 */
export function savingsPercent(before: number, after: number): number {
  if (!before) return 0;
  return Math.round(((before - after) / before) * 100);
}

export function formatDimensions(width: number, height: number, locale?: string): string {
  const n = new Intl.NumberFormat(locale);
  return `${n.format(width)} × ${n.format(height)}`;
}
