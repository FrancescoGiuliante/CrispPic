"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
};

/**
 * Small segmented control (radio group semantics), used wherever a handful
 * of mutually exclusive choices should be visible at once rather than
 * hidden behind a select — resize units, output format, and so on.
 *
 * Keyboard: it is a real `radiogroup`, so arrow keys move between options
 * and only the selected option is a tab stop — the behaviour a keyboard
 * user expects, and what a row of plain buttons would get wrong.
 */
export function Segmented<T extends string>({
  value,
  onChange,
  options,
  label,
  size = "md",
  className,
}: {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedOption<T>[];
  label: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (index + delta + options.length) % options.length;
    onChange(options[next].value);
    refs.current[next]?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cn("inline-flex w-full rounded-xl bg-subtle p-0.5", size === "sm" ? "h-8" : "h-9", className)}
    >
      {options.map((option, index) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 rounded-[10px] px-2 font-medium transition-all duration-150",
              size === "sm" ? "text-[12px]" : "text-[13px]",
              selected
                ? "bg-surface text-fg shadow-xs"
                : "text-fg-muted hover:text-fg-secondary"
            )}
          >
            {option.icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
