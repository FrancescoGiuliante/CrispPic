"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, type LucideIcon } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string; icon?: LucideIcon };

export function MobileNav({ links }: { links: NavLink[] }) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <IconButton
        label={open ? t("common.closeMenu") : t("common.openMenu")}
        tooltip={false}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </IconButton>

      {open && (
        <>
          <div className="fixed inset-0 top-16 z-40 bg-black/20 animate-fade-in" aria-hidden />
          <div
            ref={panelRef}
            className="absolute inset-x-0 top-16 z-50 border-b border-line bg-surface/95 px-4 py-3 shadow-md backdrop-blur-xl animate-fade-in"
          >
            <nav aria-label={t("common.primaryNav")} className="stagger flex flex-col gap-0.5">
              {links.map((link, index) => {
                const Icon = link.icon;
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // Closed here rather than in an effect on `pathname`:
                    // the click *is* the event that should close the sheet,
                    // and tying it to the route would also miss a tap on the
                    // link for the page you are already on.
                    onClick={() => setOpen(false)}
                    style={{ ["--i" as string]: index }}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      active ? "bg-accent-soft text-accent" : "text-fg-secondary hover:bg-subtle hover:text-fg"
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" aria-hidden />}
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
