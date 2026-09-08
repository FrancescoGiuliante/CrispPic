import type { Metadata } from "next";
import { PrivacyContent } from "@/components/layout/legal/PrivacyContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles your images and data.`,
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
