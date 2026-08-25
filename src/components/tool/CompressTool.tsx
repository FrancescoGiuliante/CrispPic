"use client";

import { useRef, useState } from "react";
import { UploadCloud, Loader2, RotateCcw } from "lucide-react";
import { compressToTargetSize, type CompressResult } from "@/lib/image/compress";
import { formatBytes } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PRESETS = [
  { label: "20 KB", bytes: 20 * 1024 },
  { label: "50 KB", bytes: 50 * 1024 },
  { label: "100 KB", bytes: 100 * 1024 },
  { label: "200 KB", bytes: 200 * 1024 },
  { label: "500 KB", bytes: 500 * 1024 },
  { label: "1 MB", bytes: 1024 * 1024 },
];

const DEFAULT_TARGET_BYTES = 100 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

type Status = "idle" | "compressing" | "done" | "error";

function outputFileName(originalName: string): string {
  const base = originalName.replace(/\.[^/.]+$/, "");
  return `${base || "image"}-compressed.jpg`;
}

export function CompressTool() {
  const inputRef = useRef<HTMLInputElement>(null);
  const originalUrlRef = useRef<string | null>(null);
  const resultUrlRef = useRef<string | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [targetBytes, setTargetBytes] = useState(DEFAULT_TARGET_BYTES);
  const [customKb, setCustomKb] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<CompressResult | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  async function runCompression(targetFile: File, target: number) {
    setStatus("compressing");
    setError(null);
    try {
      const res = await compressToTargetSize(targetFile, target);
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(res.blob);
      resultUrlRef.current = url;
      setResult(res);
      setResultUrl(url);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  function handleFile(candidate: File) {
    if (!ACCEPTED_TYPES.includes(candidate.type)) {
      setError("Please use a JPG, PNG, or WebP image.");
      setStatus("error");
      return;
    }

    if (originalUrlRef.current) URL.revokeObjectURL(originalUrlRef.current);
    const url = URL.createObjectURL(candidate);
    originalUrlRef.current = url;

    setFile(candidate);
    setOriginalUrl(url);
    void runCompression(candidate, targetBytes);
  }

  function selectPreset(bytes: number) {
    setIsCustom(false);
    setCustomKb("");
    setTargetBytes(bytes);
    if (file) void runCompression(file, bytes);
  }

  function commitCustom() {
    const kb = Number(customKb);
    if (!Number.isFinite(kb) || kb <= 0) return;
    const bytes = Math.round(kb * 1024);
    setIsCustom(true);
    setTargetBytes(bytes);
    if (file) void runCompression(file, bytes);
  }

  function reset() {
    if (originalUrlRef.current) URL.revokeObjectURL(originalUrlRef.current);
    if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    originalUrlRef.current = null;
    resultUrlRef.current = null;
    setFile(null);
    setOriginalUrl(null);
    setResult(null);
    setResultUrl(null);
    setError(null);
    setStatus("idle");
  }

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.bytes}
            type="button"
            onClick={() => selectPreset(preset.bytes)}
            className={cn(
              "h-9 rounded-full px-4 text-sm font-medium transition-colors",
              !isCustom && targetBytes === preset.bytes
                ? "bg-accent text-accent-foreground"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            )}
          >
            {preset.label}
          </button>
        ))}
        <div
          className={cn(
            "flex h-9 items-center gap-1.5 rounded-full px-3",
            isCustom ? "bg-accent text-accent-foreground" : "bg-zinc-100"
          )}
        >
          <input
            type="number"
            min={1}
            inputMode="decimal"
            placeholder="Custom"
            value={customKb}
            onChange={(e) => setCustomKb(e.target.value)}
            onBlur={commitCustom}
            onKeyDown={(e) => e.key === "Enter" && commitCustom()}
            className={cn(
              "w-16 bg-transparent text-sm font-medium outline-none",
              isCustom ? "placeholder:text-accent-foreground/70" : "text-zinc-600 placeholder:text-zinc-400"
            )}
          />
          <span className="text-sm font-medium">KB</span>
        </div>
      </div>

      {!file ? (
        <label
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const dropped = e.dataTransfer.files?.[0];
            if (dropped) handleFile(dropped);
          }}
          className={cn(
            "flex w-full cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-6 py-16 text-center transition-colors",
            isDragging ? "border-accent bg-accent/5" : "border-zinc-200 hover:border-zinc-300"
          )}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <UploadCloud className="h-6 w-6" />
          </span>
          <span className="font-medium text-zinc-900">
            Drop an image, or click to upload
          </span>
          <span className="text-sm text-zinc-500">JPG, PNG, or WebP</span>
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_TYPES.join(",")}
            className="hidden"
            onChange={(e) => {
              const selected = e.target.files?.[0];
              if (selected) handleFile(selected);
              e.target.value = "";
            }}
          />
        </label>
      ) : (
        <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, not an optimizable remote asset */}
              <img
                src={originalUrl ?? undefined}
                alt="Original"
                className="h-32 w-full rounded-lg object-cover"
              />
              <span className="text-xs font-medium text-zinc-500">
                Original · {formatBytes(file.size)}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {status === "compressing" || !resultUrl ? (
                <div className="flex h-32 w-full items-center justify-center rounded-lg bg-zinc-50">
                  <Loader2 className="h-5 w-5 animate-spin text-zinc-400" />
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- local blob preview, not an optimizable remote asset
                <img
                  src={resultUrl}
                  alt="Compressed result"
                  className="h-32 w-full rounded-lg object-cover"
                />
              )}
              <span
                className={cn(
                  "text-xs font-medium",
                  result && !result.targetMissed ? "text-emerald-600" : "text-zinc-500"
                )}
              >
                {status === "compressing"
                  ? "Compressing…"
                  : result
                    ? `Result · ${formatBytes(result.sizeBytes)}`
                    : ""}
              </span>
            </div>
          </div>

          {result && status === "done" && (
            <>
              <div className="flex w-full items-center justify-center gap-6 rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
                <span>
                  {result.width}×{result.height}px
                </span>
                <span>Quality {Math.round(result.quality * 100)}%</span>
              </div>
              {result.targetMissed && (
                <p className="text-sm text-amber-600">
                  Couldn&apos;t fit under {formatBytes(targetBytes)} without
                  losing too much quality — this is the smallest we could get.
                </p>
              )}
              <div className="flex w-full gap-3">
                <Button
                  href={resultUrl ?? "#"}
                  download={outputFileName(file.name)}
                  className="flex-1"
                >
                  Download
                </Button>
                <Button variant="secondary" onClick={reset} className="gap-1.5">
                  <RotateCcw className="h-4 w-4" />
                  New image
                </Button>
              </div>
            </>
          )}
        </div>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
