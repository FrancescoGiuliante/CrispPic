"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { IconButton } from "@/components/ui/IconButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const dark = theme === "dark";

  return (
    <IconButton
      label={dark ? t("theme.toLight") : t("theme.toDark")}
      tooltipSide="bottom"
      onClick={() => {
        toggle();
        track("theme_changed", { theme: dark ? "light" : "dark" });
      }}
      className="overflow-hidden"
    >
      {/* Both icons are always mounted and cross-fade/rotate, so the swap
          reads as one control changing state rather than two icons popping. */}
      <span className="relative flex h-4 w-4 items-center justify-center">
        <Sun
          className={cn(
            "absolute h-4 w-4 transition-all duration-300 ease-[var(--ease-spring)]",
            dark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 transition-all duration-300 ease-[var(--ease-spring)]",
            dark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
          )}
        />
      </span>
    </IconButton>
  );
}
