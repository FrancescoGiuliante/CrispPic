import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  [
    "relative inline-flex shrink-0 select-none items-center justify-center gap-2 rounded-full font-medium",
    "whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:pointer-events-none disabled:opacity-45",
    // Physical translate is fine here: it is a vertical nudge, unaffected by RTL.
    "active:translate-y-px",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg shadow-accent hover:bg-accent-hover hover:shadow-md active:bg-accent-active",
        secondary:
          "border border-line bg-surface text-fg shadow-xs hover:border-line-strong hover:bg-subtle",
        subtle: "bg-subtle text-fg-secondary hover:bg-subtle-hover hover:text-fg",
        ghost: "text-fg-secondary hover:bg-subtle hover:text-fg",
        danger: "bg-danger text-white hover:brightness-110",
      },
      size: {
        xs: "h-8 gap-1.5 px-3 text-[13px]",
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children: React.ReactNode;
  /** Swaps the leading content for a spinner and blocks interaction, without changing the button's width. */
  loading?: boolean;
};

// `ComponentPropsWithRef` rather than `*HTMLAttributes`: React 19 passes
// `ref` to function components as an ordinary prop, so it just needs to be
// in the type and to reach the spread below — no forwardRef wrapper.
type ButtonAsButton = ButtonOwnProps & Omit<React.ComponentPropsWithRef<"button">, "children"> & { href?: undefined };

type ButtonAsLink = ButtonOwnProps & { href: string } & Omit<React.ComponentPropsWithRef<"a">, "href" | "children">;

export function Button({ className, variant, size, block, href, loading, children, ...props }: ButtonAsButton | ButtonAsLink) {
  const classes = cn(buttonStyles({ variant, size, block }), className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.ComponentPropsWithRef<"a">)}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ComponentPropsWithRef<"button">;

  return (
    <button className={classes} {...buttonProps} disabled={buttonProps.disabled || loading} aria-busy={loading || undefined}>
      {/* The label keeps its place (and the button its width) while loading —
          only its opacity drops, with the spinner centred over it. */}
      <span className={cn("inline-flex items-center gap-2", loading && "invisible")}>{children}</span>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </span>
      )}
    </button>
  );
}

export { buttonStyles };
