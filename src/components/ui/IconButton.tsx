"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/Tooltip";

const iconButtonStyles = cva(
  [
    "inline-flex shrink-0 items-center justify-center rounded-full transition-colors duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:pointer-events-none disabled:opacity-40",
  ],
  {
    variants: {
      variant: {
        ghost: "text-fg-muted hover:bg-subtle hover:text-fg",
        subtle: "bg-subtle text-fg-secondary hover:bg-subtle-hover hover:text-fg",
        outline: "border border-line bg-surface text-fg-secondary hover:border-line-strong hover:text-fg",
        accent: "bg-accent text-accent-fg shadow-accent hover:bg-accent-hover",
      },
      size: {
        sm: "h-7 w-7",
        md: "h-9 w-9",
        lg: "h-10 w-10",
      },
      active: {
        true: "",
      },
    },
    compoundVariants: [
      { variant: "ghost", active: true, className: "bg-accent-soft text-accent hover:bg-accent-soft-hover hover:text-accent" },
      { variant: "subtle", active: true, className: "bg-accent-soft text-accent hover:bg-accent-soft-hover hover:text-accent" },
      { variant: "outline", active: true, className: "border-accent/40 bg-accent-soft text-accent" },
    ],
    defaultVariants: { variant: "ghost", size: "md" },
  }
);

type Props = VariantProps<typeof iconButtonStyles> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> & {
    /** Doubles as the tooltip text — an icon-only control always needs both. */
    label: string;
    /** Set false for controls whose meaning is already obvious in context. */
    tooltip?: boolean;
    tooltipSide?: "top" | "bottom" | "left" | "right";
  };

/**
 * Icon-only button. Always labelled for screen readers, and by default also
 * carries a hover/focus tooltip so sighted users get the same information.
 */
export function IconButton({ label, tooltip = true, tooltipSide = "top", variant, size, active, className, ...props }: Props) {
  const button = (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active === true ? true : undefined}
      className={cn(iconButtonStyles({ variant, size, active }), className)}
      {...props}
    />
  );

  if (!tooltip) return button;
  return (
    <Tooltip label={label} side={tooltipSide}>
      {button}
    </Tooltip>
  );
}
