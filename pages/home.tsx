import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../next-i18next.config";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("sentence1")}</p>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"], nextI18nextConfig)),
    },
  };
};

export default HomePage;
