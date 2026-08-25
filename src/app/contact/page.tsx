import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team.`,
};

export default function ContactPage() {
  return (
    <ContentPage title="Contact">
      <p>
        Questions, bug reports, or feature requests — we&apos;d like to hear
        them.
      </p>
      <p>
        Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </ContentPage>
  );
}
