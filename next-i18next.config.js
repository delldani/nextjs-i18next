const { format: formatDate } = require("date-fns");
const { hu, enUS } = require("date-fns/locale");

module.exports = {
  i18n: {
    defaultLocale: "hu",
    locales: ["en", "hu"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === "datum") {
          return lng === "hu"
            ? formatDate(new Date(value), "Y MMMM do", {
                locale: hu,
              })
            : formatDate(new Date(value), "Y MMMM do", {
                locale: enUS,
              });
        }
        if (format === "alakitas") {
          return lng === "hu"
            ? value + " ezt hozzáadtam"
            : value + " text adding";
        }
        return value;
      },
    },
    serializeConfig: false,
  },
};
