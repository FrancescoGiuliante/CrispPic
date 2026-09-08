"use client";

import { useEffect, useRef, useState } from "react";
import { ImageUp, Clipboard } from "lucide-react";
import { ACCEPT_ATTR } from "@/lib/image/validate";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/**
 * The upload surface.
 *
 * Three ways in, because "get the image into the tool" is the one step
 * every user has to clear:
 * - click / Enter / Space (it is a real `<button>`, so it is in the tab
 *   order and announced as one — the previous `<label>`-wrapping-a-hidden-
 *   input version was unreachable by keyboard entirely);
 * - drag and drop, anywhere over the window rather than only over the box;
 * - paste from the clipboard, which is how a screenshot gets here without
 *   ever becoming a file on disk.
 */
export function Dropzone({ onFile, compact }: { onFile: (file: File) => void; compact?: boolean }) {
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  // Nested elements fire dragleave as the pointer crosses them, so track
  // enter/leave depth rather than toggling on the first leave — otherwise
  // the highlight flickers off the moment the cursor moves over the icon.
  const dragDepth = useRef(0);

  useEffect(() => {
    function onPaste(event: ClipboardEvent) {
      const target = event.target as HTMLElement | null;
      // Never steal a paste aimed at a real field (the custom-size box, the
      // crop ratio inputs).
      if (target?.closest("input, textarea, [contenteditable]")) return;

      const item = [...(event.clipboardData?.items ?? [])].find((i) => i.type.startsWith("image/"));
      const file = item?.getAsFile();
      if (file) {
        event.preventDefault();
        onFile(file);
      }
    }

    function onDragEnter(event: DragEvent) {
      if (!event.dataTransfer?.types.includes("Files")) return;
      dragDepth.current += 1;
      setDragging(true);
    }

    function onDragLeave() {
      dragDepth.current = Math.max(0, dragDepth.current - 1);
      if (dragDepth.current === 0) setDragging(false);
    }

    function onDragOver(event: DragEvent) {
      // Without this the browser navigates to the dropped file.
      if (event.dataTransfer?.types.includes("Files")) event.preventDefault();
    }

    function onDrop(event: DragEvent) {
      dragDepth.current = 0;
      setDragging(false);
      const file = event.dataTransfer?.files?.[0];
      if (file) {
        event.preventDefault();
        onFile(file);
      }
    }

    window.addEventListener("paste", onPaste);
    window.addEventListener("dragenter", onDragEnter);
    window.addEventListener("dragleave", onDragLeave);
    window.addEventListener("dragover", onDragOver);
    window.addEventListener("drop", onDrop);
    return () => {
      window.removeEventListener("paste", onPaste);
      window.removeEventListener("dragenter", onDragEnter);
      window.removeEventListener("dragleave", onDragLeave);
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", onDrop);
    };
  }, [onFile]);

  return (
    <>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        aria-label={t("tool.dropzoneIdle")}
        className={cn(
          "group relative flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed",
          "bg-surface text-center shadow-sm transition-all duration-200",
          "hover:border-line-strong hover:bg-bg-accent hover:shadow-md",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
          compact ? "px-6 py-10" : "px-6 py-14 sm:py-16",
          dragging ? "scale-[1.01] border-accent bg-accent-soft shadow-md" : "border-line-strong/70"
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300",
            compact ? "h-12 w-12" : "h-14 w-14",
            dragging ? "scale-110 animate-ring-pulse" : "group-hover:scale-105 animate-soft-float"
          )}
        >
          <ImageUp className={compact ? "h-5 w-5" : "h-6 w-6"} />
        </span>

        <span className="text-[15px] font-medium text-fg">
          {dragging ? t("tool.dropzoneDrag") : t("tool.dropzoneIdle")}
        </span>

        <span className="text-sm text-fg-muted">{t("tool.dropzoneHint")}</span>

        {/* Paste is invisible unless you say it exists. */}
        <span className="mt-1 hidden items-center gap-1.5 text-xs text-fg-faint sm:inline-flex">
          <Clipboard className="h-3 w-3" />
          {t("tool.dropzonePaste")}
        </span>

        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT_ATTR}
          tabIndex={-1}
          aria-hidden="true"
          className="sr-only"
          onChange={(event) => {
            const selected = event.target.files?.[0];
            if (selected) onFile(selected);
            // Reset so picking the same file twice in a row still fires.
            event.target.value = "";
          }}
        />
      </button>

      {/*
        Full-window drop affordance. Once the user is dragging, the target is
        the whole page — this just makes that legible instead of leaving them
        aiming at a box.
      */}
      {dragging && (
        <div className="pointer-events-none fixed inset-0 z-[150] flex items-center justify-center bg-accent/5 backdrop-blur-[2px] animate-fade-in">
          <div className="rounded-2xl border-2 border-dashed border-accent bg-elevated px-8 py-6 text-center shadow-lg">
            <ImageUp className="mx-auto mb-2 h-7 w-7 text-accent" />
            <p className="text-sm font-medium text-fg">{t("tool.dropzoneDrag")}</p>
          </div>
        </div>
      )}
    </>
  );
}
