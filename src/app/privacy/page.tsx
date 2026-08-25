import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles your images and data.`,
};

export default function PrivacyPage() {
  return (
    <ContentPage title="Privacy Policy">
      <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <h2>Your images</h2>
      <p>
        {SITE_NAME}&apos;s tools process images directly in your browser.
        Your image files are not uploaded, transmitted, or stored on any
        server operated by us. We never see, access, or retain the content
        of any file you process.
      </p>

      <h2>Analytics</h2>
      <p>
        We use privacy-conscious analytics (such as Google Analytics) to
        understand aggregate usage — for example, which tools are used,
        which pages are visited, and general location and device
        information. This data is anonymized/aggregated where possible and
        is never linked to the images you process.
      </p>

      <h2>Advertising</h2>
      <p>
        {SITE_NAME} may display advertising served by third-party networks
        (such as Google AdSense) to keep the tools free. These networks may
        use cookies or similar technologies to serve relevant ads. You can
        control ad personalization through your browser or via{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        .
      </p>

      <h2>Accounts and personal data</h2>
      <p>
        {SITE_NAME} does not require an account, login, or personal
        information to use any tool.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </ContentPage>
  );
}
