import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const links = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-500">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. All processing happens in
          your browser.
        </p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-zinc-800 dark:hover:text-zinc-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
