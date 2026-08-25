import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${SITE_NAME} exists and how it works.`,
};

export default function AboutPage() {
  return (
    <ContentPage title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} exists to solve one specific problem: you have an image,
        and something — a form, a website, an application — requires it to
        meet a precise specification. A maximum file size. Exact dimensions.
        A particular format.
      </p>
      <p>
        Instead of asking you to figure out which setting in which software
        will get you there, {SITE_NAME} asks for the result you need and
        handles the rest: resizing, compressing, or converting as needed.
      </p>
      <h2>How it works</h2>
      <p>
        All image processing runs directly in your browser using standard
        web technologies. Your files are never uploaded to a server — we
        simply don&apos;t have the infrastructure to receive them, by design.
      </p>
      <h2>Why it&apos;s free</h2>
      <p>
        {SITE_NAME} is supported by minimal, non-intrusive advertising. There
        are no accounts, no subscriptions, and no paywalls on any tool.
      </p>
    </ContentPage>
  );
}
