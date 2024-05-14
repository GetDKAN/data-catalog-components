import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dataset: "dataset",
      datasets: "datasets",
      found: "found",
      more: "more",
      of: "of",
      reset: "reset",
      rows: "rows",
      "rows-per-page": "Rows per page",
      show: "Show",
    },
  },
  es: {
    translation: {
      dataset: "conjunto de datos",
      datasets: "conjuntos de datos",
      found: "encontrados",
      more: "más",
      of: "de",
      reset: "reiniciar",
      rows: "filas",
      "rows-per-page": "Filas por página",
      show: "Mostrar",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
