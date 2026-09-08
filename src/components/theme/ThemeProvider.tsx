"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "crisppic-theme";

/**
 * Runs before first paint (injected as a blocking inline script in the
 * document head) so the correct theme is on <html> before any pixels are
 * drawn. Without it, a dark-mode user gets a white flash on every
 * navigation — the single most visible "unfinished" tell in a themed app.
 *
 * Kept as a string rather than a real function because it has to be
 * serialized into the HTML; it deliberately duplicates the small amount of
 * resolution logic in `resolveTheme` below rather than importing anything.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var p=localStorage.getItem('${THEME_STORAGE_KEY}');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=(p==='light'||p==='dark')?p:(d?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

type Ctx = {
  /** What the user chose — including "system". */
  preference: ThemePreference;
  /** What is actually on screen right now. */
  theme: ResolvedTheme;
  setPreference: (next: ThemePreference) => void;
  /** Cycles light → dark → light, pinning an explicit choice. */
  toggle: () => void;
};

const ThemeContext = createContext<Ctx | null>(null);

function systemTheme(): ResolvedTheme {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render must agree, so both start at "system" /
  // "light". The blocking script above has already put the *real* theme on
  // <html>, so there is no visible flash while this catches up on mount.
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [theme, setTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const pref: ThemePreference = stored === "light" || stored === "dark" ? stored : "system";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init; see comment above
    setPreferenceState(pref);
    setTheme(pref === "system" ? systemTheme() : pref);
  }, []);

  // Follow the OS while the user hasn't pinned a choice.
  useEffect(() => {
    if (preference !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [preference]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    setTheme(next === "system" ? systemTheme() : next);
    if (next === "system") window.localStorage.removeItem(THEME_STORAGE_KEY);
    else window.localStorage.setItem(THEME_STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setPreferenceState((prev) => {
      const current = prev === "system" ? systemTheme() : prev;
      const next: ThemePreference = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
      setTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ preference, theme, setPreference, toggle }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): Ctx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
