import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="w-full border-b border-black/5 dark:border-white/10">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/faq" className="hover:text-zinc-900 dark:hover:text-zinc-50">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
