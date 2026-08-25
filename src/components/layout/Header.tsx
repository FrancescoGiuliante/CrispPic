import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/faq" className="transition-colors hover:text-zinc-900">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
