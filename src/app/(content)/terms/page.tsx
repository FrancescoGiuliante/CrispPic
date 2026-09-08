import type { Metadata } from "next";
import { TermsContent } from "@/components/layout/legal/TermsContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of use for ${SITE_NAME}.`,
};

export default function TermsPage() {
  return <TermsContent />;
}
