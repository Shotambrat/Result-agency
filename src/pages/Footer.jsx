import React from "react";
import FooterSocial from "../components/FooterSocial";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-7 pb-8 px-[0.625rem] sm:px-4 md:px-10 xl:px-24 2xl:px-[6.875rem]">
      <FooterSocial />

      <a
        href="tel: +998905092562"
        className="text-center text-lg mt-7 font-normal sm:mt-6 lg:mt-0 sm:order-2 col-span-3 lg:col-span-2 lg:order-6"
      >
        +998 (90) 509-25-62
      </a>
      <a
        href="tel: +998900228073"
        className="text-center text-lg font-normal mt-6 sm:mt-0 lg:mt-3 lg:order-[13] sm:order-4 col-span-3 lg:col-span-2"
      >
        +998 (90) 022-80-73
      </a>
      <p className="text-center text-[1rem] lg:text-lg font-normal mt-6 sm:mt-2 sm:order-7 lg:order-1 col-span-3 lg:col-span-2">
        {t("footer-adress")}
      </p>

      <p className="text-center text-[1rem] lg:text-lg leading-5 lg:leading-6 mt-6 sm:mt-6 lg:mt-6 sm:order-3 lg:order-8 col-span-3 lg:col-span-2 lg:row-[span_5_/_span_11]">
        © 2023 RESULT AGENCY - <br /> {t("footer-motto")}
      </p>
      <p className="text-center mt-6 sm:mt-2 lg:mt-0 font-normal text-[0.8125rem] sm:order-6 lg:order-[20] col-span-3 lg:col-span-2">
        {t("footer-private-policy")}
      </p>

      <p className="hidden lg:flex lg:col-span-3 lg:order-3"></p>
      <p className="hidden lg:flex lg:col-span-3 lg:order-[15]"></p>
    </div>
  );
};

export default Footer;
