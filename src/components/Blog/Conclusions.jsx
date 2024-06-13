import React from "react";
import { useTranslation } from "react-i18next";

export default function Conclusions({ blogId }) {
  const { t } = useTranslation();
  return (
    <div
      className="mt-16 text-center border-vivodBorder border-[3px] border-solid rounded-[30px]"
      style={{
        background:
          "linear-gradient(to bottom right, #D6D2FF 0%, #DBD9F1 28%, #EEEDFB 43%, #DBD8FF 74%, #CEDCFF 100%)",
      }}
    >
      <h2 className="pt-11 text-[31.17px] font-semibold md:text-left md:ml-11">
        {t(`blog-conclusions-title${blogId}`)}
      </h2>
      <p
        dangerouslySetInnerHTML={{
          __html: t(`blog-conclusions-subtitle${blogId}`),
        }}
        className="font-[abel] mt-8 md:mt-6 mx-11 mb-14 text-[20px] text-left"
      >
      </p>
    </div>
  );
}
