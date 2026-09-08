"use client";

import Link from "next/link";
import { ContentPage } from "@/components/layout/ContentPage";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { renderWithLinks } from "@/lib/i18n-rich";

export function TermsContent() {
  const { t } = useLanguage();
  const updated = t("legal.updatedLabel", { date: new Date().toISOString().slice(0, 10) });

  return (
    <ContentPage title={t("legal.terms.title")}>
      <p>{updated}</p>

      <h2>{t("legal.terms.useHeading")}</h2>
      <p>{t("legal.terms.useBody", { siteName: SITE_NAME })}</p>

      <h2>{t("legal.terms.noGuaranteesHeading")}</h2>
      <p>{t("legal.terms.noGuaranteesBody", { siteName: SITE_NAME })}</p>

      <h2>{t("legal.terms.adsHeading")}</h2>
      <p>
        {renderWithLinks(t("legal.terms.adsBody", { siteName: SITE_NAME }), {
          LINK: <Link href="/privacy">{t("legal.terms.privacyLinkText")}</Link>,
        })}
      </p>

      <h2>{t("legal.terms.acceptableHeading")}</h2>
      <p>{t("legal.terms.acceptableBody", { siteName: SITE_NAME })}</p>

      <h2>{t("legal.terms.changesHeading")}</h2>
      <p>{t("legal.terms.changesBody")}</p>

      <h2>{t("legal.terms.contactHeading")}</h2>
      <p>
        {renderWithLinks(t("legal.terms.contactBody"), {
          LINK: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>,
        })}
      </p>
    </ContentPage>
  );
}
