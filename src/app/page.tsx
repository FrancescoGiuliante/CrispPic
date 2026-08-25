import { AdSlot } from "@/components/ads/AdSlot";
import { Badge } from "@/components/ui/Badge";
import { CompressTool } from "@/components/tool/CompressTool";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-14 pb-20">
      <div className="flex w-full max-w-xl flex-col items-center gap-3 pb-8 text-center">
        <Badge>🔒 Processed in your browser — never uploaded</Badge>
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl">
          Compress your image to an exact size
        </h1>
      </div>

      <CompressTool />

      <div className="mt-12 w-full max-w-xl">
        <AdSlot placement="below-tool" />
      </div>
    </div>
  );
}
