import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolTemplate } from "@/components/tool/ToolTemplate";
import { breadcrumbJsonLd, toolFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Compress Image to an Exact Size (KB or MB)",
  description:
    "Compress a JPG, PNG, or WebP image to a precise file size — 20KB, 50KB, 100KB, 200KB, 500KB, 1MB, or a custom target. Free, private, processed in your browser.",
  alternates: { canonical: "/compress" },
  openGraph: { url: "/compress", title: "Compress Image to an Exact Size (KB or MB)", description: "Compress a JPG, PNG, or WebP image to a precise file size — 20KB, 50KB, 100KB, 200KB, 500KB, 1MB, or a custom target. Free, private, processed in your browser." },
};

export default function CompressPage() {
  return (
    <>
      <JsonLd
        data={[
          toolFaqJsonLd("compress"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Compress", path: "/compress" },
          ]),
        ]}
      />
      <ToolTemplate page="compress" mode="compress" />
    </>
  );
}
