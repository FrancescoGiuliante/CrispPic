import { Header } from "@/components/layout/Header";

/**
 * The viewport-height shell every tool-shaped route renders inside: header +
 * a content area that never scrolls as a page. `ToolTemplate` fills the space
 * below the header with its 3-column layout (FAQ / tool / ads) on wide
 * screens; on narrower screens only the centre column shows, with its own
 * contained scroll as a fallback rather than the whole page scrolling.
 *
 * It lives here rather than in `(tool)/layout.tsx` because the keyword
 * landing pages under `/[slug]` sit outside that route group — they need the
 * identical frame, and a second hand-written copy of it is exactly the kind of
 * drift the landing registry exists to prevent.
 */
export function ToolFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}
