"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastTone = "success" | "error" | "info";

type Toast = {
  id: number;
  tone: ToastTone;
  message: string;
  /** Optional single action, e.g. "Undo". */
  action?: { label: string; onClick: () => void };
};

type Ctx = { toast: (message: string, options?: { tone?: ToastTone; action?: Toast["action"]; duration?: number }) => void };

const ToastContext = createContext<Ctx | null>(null);

const DEFAULT_DURATION = 4000;

const TONE_STYLES: Record<ToastTone, { icon: typeof Info; className: string }> = {
  success: { icon: CheckCircle2, className: "text-success" },
  error: { icon: AlertTriangle, className: "text-danger" },
  info: { icon: Info, className: "text-accent" },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

  const dismiss = useCallback((id: number) => {
    const timer = timers.current.get(id);
    if (timer) clearTimeout(timer);
    timers.current.delete(id);
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback<Ctx["toast"]>(
    (message, options) => {
      const id = nextId.current++;
      setToasts((prev) => [...prev.slice(-2), { id, message, tone: options?.tone ?? "info", action: options?.action }]);
      timers.current.set(
        id,
        setTimeout(() => dismiss(id), options?.duration ?? DEFAULT_DURATION)
      );
    },
    [dismiss]
  );

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((timer) => clearTimeout(timer));
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/*
        `aria-live="polite"` + `role="status"` so a screen-reader user hears
        "Downloaded" / the error text without focus ever moving — the same
        information sighted users get from the bubble. Anchored bottom-center
        on mobile, bottom-end on desktop, above every other layer.
      */}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[200] flex flex-col items-center gap-2 p-4 sm:items-end sm:p-6"
      >
        {toasts.map((t) => {
          const { icon: Icon, className } = TONE_STYLES[t.tone];
          return (
            <div
              key={t.id}
              className="pointer-events-auto flex w-full max-w-sm items-start gap-2.5 rounded-xl border border-line bg-elevated px-3.5 py-3 shadow-lg animate-toast-in"
            >
              <Icon className={cn("mt-px h-4 w-4 shrink-0", className)} aria-hidden />
              <span className="flex-1 text-[13px] leading-5 text-fg">{t.message}</span>
              {t.action && (
                <button
                  type="button"
                  onClick={() => {
                    t.action?.onClick();
                    dismiss(t.id);
                  }}
                  className="shrink-0 rounded-md text-[13px] font-semibold text-accent hover:underline"
                >
                  {t.action.label}
                </button>
              )}
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss"
                className="-me-1 shrink-0 rounded-md p-0.5 text-fg-faint transition-colors hover:text-fg"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): Ctx {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
