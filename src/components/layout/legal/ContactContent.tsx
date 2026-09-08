"use client";

import Link from "next/link";
import { ContentPage } from "@/components/layout/ContentPage";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { renderWithLinks } from "@/lib/i18n-rich";

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <ContentPage title={t("legal.contact.title")}>
      <p>{t("legal.contact.intro")}</p>
      <p>
        {renderWithLinks(t("legal.contact.emailBody"), {
          LINK: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>,
        })}
      </p>

      <h2>{t("legal.contact.reportHeading")}</h2>
      <p>{t("legal.contact.reportIntro")}</p>
      <ul>
        <li>{t("legal.contact.reportItem1")}</li>
        <li>{t("legal.contact.reportItem2")}</li>
        <li>{t("legal.contact.reportItem3")}</li>
      </ul>

      <h2>{t("legal.contact.privacyHeading")}</h2>
      <p>
        {renderWithLinks(t("legal.contact.privacyBody", { siteName: SITE_NAME }), {
          LINK: <Link href="/privacy">{t("legal.contact.privacyLinkText")}</Link>,
        })}
      </p>
    </ContentPage>
  );
}
