import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { SITE_TAGLINE } from "@/lib/constants";

const columns = [
  {
    heading: "Product",
    links: [{ href: "/", label: "Image compressor" }],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-14 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="max-w-[220px] text-sm text-zinc-500">
            {SITE_TAGLINE}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                {column.heading}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-200/70 px-6 py-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} FitMyFile. All processing happens in
        your browser.
      </div>
    </footer>
  );
}
