"use client";

import { cn } from "@/lib/utils";

export function Switch({
  checked,
  onChange,
  label,
  disabled,
  size = "md",
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md";
}) {
  const sm = size === "sm";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative shrink-0 rounded-full transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "disabled:pointer-events-none disabled:opacity-40",
        sm ? "h-5 w-9" : "h-6 w-10",
        checked ? "bg-accent" : "bg-line-strong"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 start-0.5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-[var(--ease-spring)]",
          sm ? "h-4 w-4" : "h-5 w-5",
          // `rtl:-translate-x-*` keeps the knob travelling toward the end of
          // the track in Arabic, where the whole switch is mirrored.
          checked && (sm ? "translate-x-4 rtl:-translate-x-4" : "translate-x-4 rtl:-translate-x-4")
        )}
      />
    </button>
  );
}
