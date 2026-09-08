"use client";

import { cloneElement, useId, useRef, useState, type ReactElement } from "react";
import { cn } from "@/lib/utils";

type Side = "top" | "bottom" | "left" | "right";

const SIDE_CLASSES: Record<Side, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 me-2",
  right: "left-full top-1/2 -translate-y-1/2 ms-2",
};

/**
 * A deliberately tiny tooltip: no portal, no positioning library, no
 * dependency. It is only ever used on small controls inside containers we
 * own, where a CSS-positioned bubble is enough and a 30KB floating-ui
 * dependency would not earn its bundle cost.
 *
 * Behaviour that matters for a shipped product, and that a pure-CSS
 * `:hover` tooltip cannot do:
 * - shows on keyboard focus, not only on hover;
 * - dismissible with Escape (WCAG 1.4.13);
 * - wired to the trigger with `aria-describedby`, so it is announced rather
 *   than being decoration a screen reader never sees;
 * - suppressed on touch, where a tooltip that follows a tap is just noise.
 */
export function Tooltip({
  label,
  side = "top",
  children,
}: {
  label: string;
  side?: Side;
  children: ReactElement<{ "aria-describedby"?: string }>;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show(delay = 350) {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  }

  function hide() {
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  }

  return (
    <span
      className="relative inline-flex"
      onPointerEnter={(e) => e.pointerType !== "touch" && show()}
      onPointerLeave={hide}
      onPointerDown={hide}
      onFocus={() => show(0)}
      onBlur={hide}
      onKeyDown={(e) => e.key === "Escape" && hide()}
    >
      {cloneElement(children, { "aria-describedby": open ? id : undefined })}
      <span
        id={id}
        role="tooltip"
        hidden={!open}
        className={cn(
          "pointer-events-none absolute z-[80] w-max max-w-[15rem] rounded-lg bg-fg px-2 py-1 text-[11px] font-medium text-bg shadow-md animate-fade-in",
          SIDE_CLASSES[side]
        )}
      >
        {label}
      </span>
    </span>
  );
}
