import React from "react";
import logoBack from "../../assets/img/logoBackButton.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BackButton() {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useParams();

  const handleBackClick = () => {
    navigate(`/${lang}`);  
  };

  return (
    <button
      onClick={handleBackClick}
      className="flex items-center ml-4 sm:ml-10 md:ml-16 lg:ml-10 xl:ml-16 2xl:ml-20 border-2 border-header-text border-solid py-1 pl-4 pr-7 font-normal text-[20px] rounded-[30px] cursor-pointer"
    >
      <img src={logoBack} alt="back" className="mr-5" />
      {t("back-button")}
    </button>
  );
}

