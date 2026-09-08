import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolTemplate } from "@/components/tool/ToolTemplate";
import { breadcrumbJsonLd, toolFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Resize Image — Exact Width, Height or Percentage",
  description:
    "Resize an image to exact pixel dimensions or by percentage, with or without locking the aspect ratio. Free, private, processed entirely in your browser.",
  alternates: { canonical: "/resize" },
  openGraph: { url: "/resize", title: "Resize Image — Exact Width, Height or Percentage", description: "Resize an image to exact pixel dimensions or by percentage, with or without locking the aspect ratio. Free, private, processed entirely in your browser." },
};

export default function ResizePage() {
  return (
    <>
      <JsonLd
        data={[
          toolFaqJsonLd("resize"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resize", path: "/resize" },
          ]),
        ]}
      />
      <ToolTemplate page="resize" mode="resize" />
    </>
  );
}
