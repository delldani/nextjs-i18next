import React from "react";
import { Home } from "../components/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import nextI18nextConfig from "../next-i18next.config";

function HomePage() {
  const router = useRouter();

  return (
    <div>
      <Link href="/" locale={router.locale === "en" ? "hu" : "en"}>
        <button>Change language</button>
      </Link>
      <br />
      <Link href="/home">
        <button>Home route</button>
      </Link>
      <Home />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["translation"],
      nextI18nextConfig
    )),
  },
});

export default HomePage;
