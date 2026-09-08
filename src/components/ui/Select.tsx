import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Native `<select>` under a custom skin. Deliberately not a custom listbox:
 * on mobile the OS picker is faster and more accessible than anything we
 * would rebuild, and the option list here is never longer than a handful.
 */
export function Select({
  value,
  onChange,
  options,
  className,
  size = "md",
  "aria-label": ariaLabel,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
  size?: "sm" | "md";
  "aria-label"?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        className={cn(
          "w-full cursor-pointer appearance-none rounded-xl border border-line bg-surface font-medium text-fg",
          "outline-none transition-colors hover:border-line-strong",
          "focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent",
          size === "sm" ? "h-9 pe-8 ps-3 text-[13px]" : "h-11 pe-9 ps-3.5 text-sm"
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-fg-muted",
          size === "sm" ? "end-2.5 h-3.5 w-3.5" : "end-3 h-4 w-4"
        )}
      />
    </div>
  );
}
