"use client";

import { ContentPage } from "@/components/layout/ContentPage";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SITE_NAME } from "@/lib/constants";

export function AboutContent() {
  const { t } = useLanguage();
  const c = t("legal.about.title", { siteName: SITE_NAME });

  return (
    <ContentPage title={c}>
      <p>{t("legal.about.p1", { siteName: SITE_NAME })}</p>
      <p>{t("legal.about.p2", { siteName: SITE_NAME })}</p>
      <h2>{t("legal.about.howHeading")}</h2>
      <p>{t("legal.about.howBody")}</p>
      <h2>{t("legal.about.whyHeading")}</h2>
      <p>{t("legal.about.whyBody", { siteName: SITE_NAME })}</p>
    </ContentPage>
  );
}
