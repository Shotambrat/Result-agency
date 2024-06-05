import React from "react";
import UpButton from "../components/Blog/ToTopButton";
import BackButton from "../components/Blog/BackButton";
import OurOffers from "../components/Blog/OurOffers";
import AboutClient from "../components/Blog/AboutClient";
import Conclusions from "../components/Blog/Conclusions";
import Header from "./Header";

export default function Blog() {
  return (
    <>
    <Header />  
      <BackButton />
      <div className="mx-[0.625rem] sm:mx-8 md:mx-12 lg:mx-16 xl:mx-28 2xl:mx-40 3xl:max-w-[1500px] 3xl:mx-auto text-headings-color">
        <h1 className="mt-9 py-14 text-center text-4xl text-white font-semibold bg-blog-themeBg rounded-[26px]">
          Тема блога
        </h1>
        <OurOffers />
        <AboutClient />
        <Conclusions />
      </div>
      <UpButton />
    </>
  );
}
