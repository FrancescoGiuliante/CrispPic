"use client";

import { ContentPage } from "@/components/layout/ContentPage";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { renderWithLinks } from "@/lib/i18n-rich";

export function PrivacyContent() {
  const { t } = useLanguage();
  const updated = t("legal.updatedLabel", { date: new Date().toISOString().slice(0, 10) });

  return (
    <ContentPage title={t("legal.privacy.title")}>
      <p>{updated}</p>

      <h2>{t("legal.privacy.imagesHeading")}</h2>
      <p>{t("legal.privacy.imagesBody", { siteName: SITE_NAME })}</p>

      <h2>{t("legal.privacy.cookiesHeading")}</h2>
      <p>{t("legal.privacy.cookiesBody1", { siteName: SITE_NAME })}</p>
      <p>{t("legal.privacy.cookiesBody2")}</p>

      <h2>{t("legal.privacy.analyticsHeading")}</h2>
      <p>{t("legal.privacy.analyticsBody")}</p>

      <h2>{t("legal.privacy.adsHeading")}</h2>
      <p>
        {renderWithLinks(t("legal.privacy.adsBody", { siteName: SITE_NAME }), {
          LINK1: (
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              {t("legal.privacy.adsLink1Text")}
            </a>
          ),
          LINK2: (
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              {t("legal.privacy.adsLink2Text")}
            </a>
          ),
        })}
      </p>

      <h2>{t("legal.privacy.accountsHeading")}</h2>
      <p>{t("legal.privacy.accountsBody", { siteName: SITE_NAME })}</p>

      <h2>{t("legal.privacy.contactHeading")}</h2>
      <p>
        {renderWithLinks(t("legal.privacy.contactBody"), {
          LINK: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>,
        })}
      </p>
    </ContentPage>
  );
}
