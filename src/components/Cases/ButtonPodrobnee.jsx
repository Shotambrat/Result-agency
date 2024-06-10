import React from "react";
import { useTranslation } from "react-i18next";

const ButtonPodrobnee = () => {
  const { t } = useTranslation();

  return (
    <button className="w-[188px] h-[36px] border rounded-[18px] border-[1.175px] border-solid border-button-color bg-white text-black flex justify-center items-center md:w-[200px] md:h-[41px] md:text-[18px]">
      {t("moreDetails-button")}
    </button>
  );
};

export default ButtonPodrobnee;
