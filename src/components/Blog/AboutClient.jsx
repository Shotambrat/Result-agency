import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutClient() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-16 xl:mt-[4.5rem] 2xl:mt-20">
        <h6 className="pb-4 font-semibold text-md leading-5 xs:text-[24px] lg:text-[28px] xl:text-[32px]">
          {t("blog-client-title")}
        </h6>
        <p className="font-[abel] md:mt-4 text-[11px] xs:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-regular">
          {t("blog-client-subtitle")}
        </p>
        <p className="font-[abel] md:mt-4 text-[11px] xs:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] font-regular">
          {t("blog-client-subtitle")}
        </p>
      </div>
      <div className="mt-8 lg:mt-10 h-[11rem] xs:h-[18rem] md:h-[22rem] lg:h-[28rem] xl:h-[36rem] 2xl:h-[44rem] bg-[#D9D9D9] rounded-[10px] md:rounded-[16px]">
        {/* <img src="" alt="Blog client" /> */}
      </div>
    </>
  );
}
