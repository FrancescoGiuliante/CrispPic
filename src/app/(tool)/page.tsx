import { JsonLd } from "@/components/seo/JsonLd";
import { ToolTemplate } from "@/components/tool/ToolTemplate";
import { toolFaqJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={toolFaqJsonLd("home")} />
      <ToolTemplate page="home" mode="compress" />
    </>
  );
}
