import React from "react";
import UpButton from "../components/Blog/ToTopButton";
import BackButton from "../components/Blog/BackButton";
import OurOffers from "../components/Blog/OurOffers";
import AboutClient from "../components/Blog/AboutClient";
import Conclusions from "../components/Blog/Conclusions";
import Header from "./Header";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="mt-24 lg:mt-28 3xl:mt-32 mb-8 lg:mb-10 2xl:mb-12 3xl:mb-14">
        <BackButton />
      </div>
      <div className="mx-[0.625rem] sm:mx-8 md:mx-12 lg:mx-16 xl:mx-[6.5rem] 2xl:mx-40 3xl:max-w-[1500px] 3xl:mx-auto text-headings-color">
        <h1 className="py-14 xl:py-20 text-center text-4xl text-white font-semibold bg-blog-themeBg rounded-[26px]">
          {t("blog-theme")}
        </h1>
        <OurOffers />
        <AboutClient />
        <div className="сonclusion">
        <Conclusions />
        </div>
      </div>
      <div className=" mt-[68px] ">
        <UpButton />
      </div>
    </>
  );
}
