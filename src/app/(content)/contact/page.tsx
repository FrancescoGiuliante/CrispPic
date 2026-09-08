import type { Metadata } from "next";
import { ContactContent } from "@/components/layout/legal/ContactContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team.`,
};

export default function ContactPage() {
  return <ContactContent />;
}
