import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolTemplate } from "@/components/tool/ToolTemplate";
import { breadcrumbJsonLd, toolFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Crop Image — Square, 4:3, 16:9 & Custom Ratios",
  description:
    "Crop an image to a square, 4:3, 16:9, or a custom ratio with a drag-to-position editor. Free, private, processed entirely in your browser.",
  alternates: { canonical: "/crop" },
  openGraph: { url: "/crop", title: "Crop Image — Square, 4:3, 16:9 & Custom Ratios", description: "Crop an image to a square, 4:3, 16:9, or a custom ratio with a drag-to-position editor. Free, private, processed entirely in your browser." },
};

export default function CropPage() {
  return (
    <>
      <JsonLd
        data={[
          toolFaqJsonLd("crop"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Crop", path: "/crop" },
          ]),
        ]}
      />
      <ToolTemplate page="crop" mode="crop" />
    </>
  );
}
