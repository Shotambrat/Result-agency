import React from "react";
import { useTranslation } from "react-i18next";

export default function OurOffers() {
  const { t } = useTranslation();

  return (
    <div className="mt-6 md:mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-5">
      {/* Background color bo'midi ob tashaladi */}
      <div className="bg-[#D9D9D9] h-[10rem] xs:h-[16rem] lg:h-[20rem] 3xl:h-[24rem] rounded-[10px] md:rounded-[16px] col-span-1 md:col-span-2">
        {/* <img src="" alt="Blog client" /> */}
      </div>
      <div className="font-[roboto-flex] col-span-1 flex flex-col self-center md:col-span-3 md:ml-8 xl:ml-14 2xl:ml-20 ">
        <h6 className="mt-6 xs:mt-8 md:mb-4 md:mt-0 font-semibold leading-5 md:leading-6 lg:leading-8 text-[20px] xs:text-[24px] lg:text-[28px] xl:text-[32px]">
          {t("blog-title")}
        </h6>
        <p className="font-[abel] mt-4 text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-regular 2xl:w-[620px]">
          {t("blog-subtitle")}
        </p>
      </div>
    </div>
  );
}
