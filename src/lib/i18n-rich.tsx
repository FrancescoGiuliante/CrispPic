import { Fragment, type ReactNode } from "react";

/**
 * Renders a translated string that carries one or more `{{TOKEN}}`
 * placeholders, substituting each for a real React node (typically a link).
 *
 * Dictionary strings are plain text, so a sentence that needs an inline
 * `<a>` (an email address, a link to another page) carries a literal
 * `{{LINK}}` token instead — see the comment on `legal` in
 * `src/i18n/dictionaries/en.ts`. This is the other half of that contract:
 * it splits the translated string on every `{{TOKEN}}` and drops the
 * matching node from `links` into the gap, keeping the surrounding words
 * exactly as translated (and in whatever order that language puts them).
 */
export function renderWithLinks(text: string, links: Record<string, ReactNode>): ReactNode {
  const parts = text.split(/(\{\{[A-Z0-9]+\}\})/g);
  return parts.map((part, index) => {
    const match = /^\{\{([A-Z0-9]+)\}\}$/.exec(part);
    // Index as key is fine here: this list is a static split of a fixed
    // translated string, so the order and count never change between renders.
    if (match && match[1] in links) {
      return <Fragment key={index}>{links[match[1]]}</Fragment>;
    }
    return part;
  });
}
