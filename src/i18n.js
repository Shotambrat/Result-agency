import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const DEFAULT_LOCALE = "ru";

const domainLocaleMap = {
  "localhost:3000": "ru",
  "uz.result.uz": "uz",
  "ru.result.uz": "ru",
};

const domainDetector = {
  // We use the name to refer to it later when we want to tell i18next when to use it.
  name: "domain",
  lookup(req, res, options) {
    // You need to either set the value of DEFAULT_LOCALE before this or hard-code the value here.
    let locale = DEFAULT_LOCALE;
    // In the browser, get the hostname from window.location.
    if (typeof window !== "undefined") {
      locale = domainLocaleMap[window.location.hostname];
    }
    // On the server, get the hostname from the request headers.
    // We use the host header which is available on IncomingMessage.
    // https://nodejs.org/api/http.html#http_class_http_incomingmessage
    // But the host header may include the port so first we take that off, if it exists.
    else {
      const hostname = req.headers.host?.split(":")[0];
      locale = domainLocaleMap[hostname];
    }
    return locale;
  },
};

i18n
  // detect user language
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(HttpApi)
  .init({
    supportedLngs: ["uz", "ru"],
    fallbackLng: "ru",
    customDetectors: [domainDetector],
    detection: {
      customDetectors: domainDetector.lookup(),
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18n