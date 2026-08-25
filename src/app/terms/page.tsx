import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of use for ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <ContentPage title="Terms of Service">
      <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <h2>Use of the service</h2>
      <p>
        {SITE_NAME} is provided free of charge, as-is, without warranty of
        any kind. You are responsible for ensuring you have the right to
        process any image you upload using the tools on this site.
      </p>

      <h2>No guarantees</h2>
      <p>
        While {SITE_NAME} aims to produce accurate, correct results, we do
        not guarantee that output will be error-free or fit for every
        specific purpose. Always verify the result before relying on it for
        a critical submission (e.g. a legal document or official
        application).
      </p>

      <h2>Acceptable use</h2>
      <p>
        You may not use {SITE_NAME} to process content that is illegal, or
        to attempt to disrupt, overload, or reverse-engineer the service.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be updated from time to time. Continued use of the
        site after changes constitutes acceptance of the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </ContentPage>
  );
}
