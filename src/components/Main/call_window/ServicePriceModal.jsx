import React from "react";
import { useTranslation } from "react-i18next";

export default function ServiceModal({
  defaultNumber,
  data,
  siteFor,
  title,
  condition,
  services,
  close,
}) {
  const { t } = useTranslation();

  let liStyle =
    "text-[12px] list-disc text-left text-white font-light m:text-[12.5px] l:my-[2px] s:text-[13px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[22px] 2xl:my-[0px]";

  return (
    <div className=" fixed inset-0 flex items-center justify-center z-[21] backdrop-blur-md shadow-md  modal-container-price">
      <div className="p-4 w-4/5 rounded-[11px] h-auto m:p-6 xs:px-7 xs:py-3 sm:px-9  2xl:p-10 2xl:w-3/4 lg:rounded-[41px] bg-gradient-to-b from-[#746FAE] to-[#8A66F0] flex items-start justify-center flex-col lg:px-9 lg:py-9 price-list">
        <div className="flex w-full justify-between align-baseline price-list-upp">
          <span className="l:mb-[5px] s:mb-[7px] text-[15px] text-white xs:text-[19px] sm:text-[20px]  md:text-[24px] xl:text-[29px] 2xl:text-[30px] 2xl:mb-[0px] font-semibold  lg:mb-[14px] page-list-text">
            {t(`service-modal-title${defaultNumber}`)}
          </span>
          <button
            className="bg-transparent border-none close-button"
            onClick={close}
          >
            <svg
              className=" w-[15px] h-[13px] xs:w-[18px] xs:h-[15px] lg:w-[25px] lg:h-[20px]            xl:w-[29px] xl:h-[31px] svg-img-close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31 35"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.0267 33.5975C30.3955 32.4489 30.5741 30.4081 29.4255 29.0392L19.3154 16.9905L29.111 5.31661C30.2596 3.94776 30.0811 1.90695 28.7122 0.758348C27.3434 -0.390255 25.3026 -0.211709 24.154 1.15714L15.0918 11.957L6.02854 1.15583C4.87993 -0.213021 2.83913 -0.391567 1.47028 0.757035C0.10143 1.90564 -0.0771133 3.94644 1.07149 5.31529L10.8682 16.9905L0.757036 29.0405C-0.391566 30.4094 -0.213023 32.4502 1.15583 33.5988C2.52468 34.7474 4.56548 34.5689 5.71408 33.2L15.0918 22.0241L24.4684 33.1987C25.617 34.5676 27.6578 34.7461 29.0267 33.5975Z"
                fill="white"
                fill-opacity="0.61"
              />
            </svg>
          </button>
        </div>
        <ul className="lg:p-4 lg:px-8">
          <li className={liStyle}>
            ◻️ {t(`service-modal-siteFor${defaultNumber}`)}
          </li>
          <li className={liStyle}>💵 {t(`service-modal-price${defaultNumber}`)}</li>
          <li className={liStyle}>💻 размер: {t(`service-modal-size${defaultNumber}`)}</li>
          <li className={liStyle}>⏱️ срок: {t(`service-modal-duration${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-condition${defaultNumber}`)}</li>
          <li className={liStyle}>🛍 {t(`service-modal-services${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-webDev${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-completion${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-integration${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-indexation${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-seo${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-hosting${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-domen${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-expCode${defaultNumber}`)}</li>
        </ul>
      </div>
    </div>
  );
}
