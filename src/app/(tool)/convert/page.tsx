import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolTemplate } from "@/components/tool/ToolTemplate";
import { breadcrumbJsonLd, toolFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Convert Image Format — JPG, PNG, WebP, HEIC",
  description:
    "Convert an image between JPG, PNG, and WebP — including HEIC photos from iPhone. Free, private, processed entirely in your browser.",
  alternates: { canonical: "/convert" },
  openGraph: { url: "/convert", title: "Convert Image Format — JPG, PNG, WebP, HEIC", description: "Convert an image between JPG, PNG, and WebP — including HEIC photos from iPhone. Free, private, processed entirely in your browser." },
};

export default function ConvertPage() {
  return (
    <>
      <JsonLd
        data={[
          toolFaqJsonLd("convert"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Convert", path: "/convert" },
          ]),
        ]}
      />
      <ToolTemplate page="convert" mode="convert" />
    </>
  );
}
