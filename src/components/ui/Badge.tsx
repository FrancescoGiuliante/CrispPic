import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeStyles = cva("inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap", {
  variants: {
    variant: {
      plain: "text-fg-secondary",
      outline: "border border-line bg-surface text-fg-secondary shadow-xs",
      soft: "bg-accent-soft text-accent",
      success: "bg-success-soft text-success",
      warning: "bg-warning-soft text-warning",
      danger: "bg-danger-soft text-danger",
      subtle: "bg-subtle text-fg-secondary",
    },
    size: {
      sm: "px-2 py-0.5 text-[11px]",
      md: "px-2.5 py-1 text-xs",
    },
    bare: {
      // No pill background — used for the inline privacy line above the H1.
      true: "px-0 py-0",
    },
  },
  defaultVariants: { variant: "plain", size: "md" },
});

export function Badge({
  children,
  className,
  variant,
  size,
  bare,
}: VariantProps<typeof badgeStyles> & { children: React.ReactNode; className?: string }) {
  return <span className={cn(badgeStyles({ variant, size, bare }), className)}>{children}</span>;
}
