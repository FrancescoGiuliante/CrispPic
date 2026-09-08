import type { Metadata } from "next";
import { AboutContent } from "@/components/layout/legal/AboutContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${SITE_NAME} exists and how it works.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
