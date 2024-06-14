import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutClientText({ blogId, num }) {
  const { t } = useTranslation();

  return (
    <>
      <h6 className="pb-4 font-semibold text-md leading-5 text-[20px] xs:text-[24px] lg:text-[28px] xl:text-[32px]">
        {t(`blog-client-title${blogId}-${num}`)}
      </h6>
      <p
        dangerouslySetInnerHTML={{
          __html: t(`blog-client-subtitle${blogId}-${num}`),
        }}
        className="font-[abel] md:mt-4 text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-regular"
      >
      </p>
    </>
  );
}
