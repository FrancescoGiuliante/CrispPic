import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdSlot } from "@/components/ads/AdSlot";

/**
 * Shell for content/legal pages (about, contact, faq, privacy, terms):
 * normal document flow that scrolls, with the full footer — unlike the
 * fixed-height tool pages, this content is prose-length and isn't meant to
 * fit in one screen.
 *
 * The reserved leaderboard sits between the article and the footer: after
 * the content, never interrupting it.
 */
export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <div className="flex w-full justify-center px-6 pb-10">
        <AdSlot placement="below-content" />
      </div>
      <Footer />
    </div>
  );
}
