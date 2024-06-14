import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import case1 from "../../assets/img/case1.png";
import case4 from "../../assets/img/case2.png";
import case3 from "../../assets/img/case3.png";
import case2 from "../../assets/img/case4.png";
import case5 from "../../assets/img/case5.png";

const MainCases = () => {
  const { t } = useTranslation();

  function toTop() {
    window.scrollTo({ top: 0 });
  }

  const cases1 = [
    { image: case1 },
    { image: case2 },
    { image: case3 },
    { image: case4 },
    { image: case5 },
  ];

  return (
    <div className="mt-8 lg:mt-[3rem] mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] 3xl:max-w-[1500px] 3xl:mx-auto">
      <h2 className="text-headings-color text-[20px] xs:text-[24px] md:text-[30px] 2xl:text-[56px] text-center md:text-left font-semibold lg:font-bold mb-4">
        {t("cases-title")}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-[0.625rem] sm:p-0 gap-x-[0.625rem] lg:gap-x-[1rem] xl:gap-x-6 gap-y-5">
        {cases1.map((elem, index) => (
          <div key={index} className="">
            <Link onClick={() => toTop()} to={`/cases/${index + 1}`}>
              <div className="rounded-[7.39px] lg:rounded-3xl h-[6.5rem] xs:h-36 md:h-40 lg:h-56 xl:h-[15rem] 2xl:h-[17rem] 3xl:h-[19rem] border-[1px] border-solid border-cases-border">
                <img
                  src={elem.image}
                  alt={`case-${index + 1}`}
                  className="w-full h-full object-cover rounded-[7.39px] lg:rounded-3xl"
                />
              </div>
            </Link>
            <h4 className="text-headings-color font-medium md:font-semibold text-[20px] md:text-[24px] mt-2">
              {t(`cases-card${index + 1}-title`)}
            </h4>
            <p className="text-headings-color font-regular text-[13px] md:text-[15px] mt-1">
              {t(`cases-card${index + 1}-subtitle`)}
            </p>
          </div>
        ))}
        <div>
          <div className="rounded-[7.39px] text-[14px] md:text-xl lg:text-2xl lg:rounded-3xl h-[6.5rem] xs:h-36 md:h-40 lg:h-56 xl:h-[15rem] 2xl:h-[17rem] 3xl:h-[19rem] cursor-pointer border-[1px] border-solid border-[#d3d2e4] flex justify-center items-center">
            {t("cases-card-create")}
          </div>
        </div>
      </div>
      {/* <div className="lg:grid lg:grid-cols-3 lg:gap-4 mt-5">
        {cases2.map((elem, index) => (
          <div key={index} className="flex flex-col p-4">
            <div className="h-56 bg-blue-800 w-full mb-4 rounded-[20px]"></div>
            <h4 className="text-headings-color font-medium text-[20px]">{elem.title}</h4>
            <p className="text-headings-color text-[24px]">{elem.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MainCases;
