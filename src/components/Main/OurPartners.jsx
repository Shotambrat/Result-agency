import React from "react";
import Terra from "../../assets/img/terralab-logo.svg";
import Glotr from "../../assets/img/glotr-logo.svg";
import YellowPages from "../../assets/img/yellow-pages-logo.svg";
import Intermed from "../../assets/img/Intermed_Innovation-logo.svg";
import Mexclusive from "../../assets/img/exclusive-logo.svg";
import PromUz from "../../assets/img/prom-logo.svg";
import AptekaUz from "../../assets/img/Apteka-logo.svg";
import Serdsebiyenye from "../../assets/img/unnamed-logo.svg";
import Med24 from "../../assets/img/logo_med24 2.svg";
import Top from "../../assets/img/top-logo.svg";
import Megahertz from "../../assets/img/megahertz-logo.svg";
import Prime from "../../assets/img/Prime_MedicalCenter_logo.svg";

const OurPartners = () => {
  return (
    <div className="mx-[0.625rem] lg:mt-[3rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] border-2 border-[#4A448E] border-opacity-40 border-solid rounded-[14.67px]">
      <h2 className="text-center text-[26px] md:text-[30px] lg:text-[34px] 2xl:text-[64px] font-semibold pt-4 pb-[0.875rem] md:py-5 lg:py-6 border-b-2 border-solid border-[#4A448E] border-opacity-40">
        Наши партнеры
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 pt-5 pb-8 px-3 md:px-4 lg:px-8 md:py-8 lg:py-12">
        <div className="order-1">
          <img src={Intermed} alt="Intermed" className="mx-auto" />
        </div>
        <div className="order-2">
          <img src={AptekaUz} alt="AptekaUz" className="mx-auto" />
        </div>
        <div className="order-3">
          <img src={YellowPages} alt="Yellow Pages" className="mx-auto" />
        </div>
        <div className="order-4 md:order-5">
          <img src={Glotr} alt="Glotr" className="mx-auto" />
        </div>
        <div className="order-5">
          <img src={PromUz} alt="PromUz" className="mx-auto" />
        </div>
        <div className="order-6">
          <img src={Mexclusive} alt="Mexclusive" className="mx-auto" />
        </div>
        <div className="order-7 md:order-9">
          <img src={Top} alt="Top" className="mx-auto" />
        </div>
        <div className="order-8 md:order-10">
          <img src={Megahertz} alt="Megahertz" className="mx-auto" />
        </div>
        <div className="order-9 md:order-11">
          <img src={Med24} alt="Med24" className="mx-auto" />
        </div>
        <div className="order-10 md:order-4">
          <img src={Terra} alt="Terra" className="mx-auto" />
        </div>
        <div className="order-11 md:order-8">
          <img src={Serdsebiyenye} alt="Serdsebiyenye" className="mx-auto" />
        </div>
        <div className="order-12">
          <img src={Prime} alt="Prime" className="mx-auto md:h-14 lg:h-16 xl:h-18 2xl:h-24" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
