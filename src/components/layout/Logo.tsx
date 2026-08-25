import { Crop } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Crop className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
        {SITE_NAME}
      </span>
    </span>
  );
}
