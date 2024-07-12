import React from "react";
import UpButton from "../components/Blog/ToTopButton";
import BackButton from "../components/Blog/BackButton";
import OurOffers from "../components/Blog/OurOffers";
import AboutClient from "../components/Blog/AboutClient";
import Conclusions from "../components/Blog/Conclusions";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const { t } = useTranslation();
  const { blogId } = useParams();


  return (
    <>
      <Helmet>
        <title>{t(`blog-seo-title${blogId}`)}</title>
        <meta name="description" content={t(`blog-seo-description${blogId}`)} />
      </Helmet>
      <div className="mt-24 lg:mt-28 3xl:mt-32 mb-8 lg:mb-10 2xl:mb-12 3xl:mb-14">
        <BackButton />
      </div>
      <div className="mx-[0.625rem] sm:mx-8 md:mx-12 lg:mx-16 xl:mx-[6.5rem] 2xl:mx-40 3xl:max-w-[1500px] 3xl:mx-auto text-headings-color">
        <h1 className="py-14 xl:py-20 text-center text-[2rem] text-white font-semibold bg-blog-themeBg rounded-[26px]">
          {t(`blog-theme${blogId}`)}
        </h1>
        <OurOffers blogId={blogId} />
        <AboutClient blogId={blogId} />
        <div className="conclusion">
          <Conclusions blogId={blogId} />
        </div>
      </div>
      <div className="mt-[68px] ">
        <UpButton />
      </div>
    </>
  );
}
