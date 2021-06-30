import React from "react";
import { useTranslation } from "next-i18next";

export const Home: React.FC = () => {
  const [value, setValue] = React.useState<number>(1);

  const { t } = useTranslation();

  const onChange = (e: any) => {
    const value = parseInt(e.target.value);
    setValue(value);
  };

  return (
    <div>
      <br />
      <p>{t("sentence1")}</p>
      <h3>{t("sayHi", { count: value })}</h3>
      <h3> {t("sayHi", { context: "elso", count: value })}</h3>
      <h3> {t("sentence3", { text: "haliho" })}</h3>
      <h3> {t("date", { date: "2013, 3 3" })}</h3>
      <br />

      <br />
      <select name="numbers" onChange={onChange} value={value}>
        <option value={1}>-1-</option>
        <option value={2}>-2-</option>
        <option value={3}>-3-</option>
      </select>
    </div>
  );
};
