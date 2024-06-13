import React from "react";
import { useTranslation } from "react-i18next";
import blog1 from "../../assets/img/Blog/blog1.png";
import blog2 from "../../assets/img/Blog/blog2.png";
import blog3 from "../../assets/img/Blog/blog3.png";

export default function OurOffers({ blogId }) {
  const { t } = useTranslation();

  return (
    <div className="mt-6 md:mt-10 lg:mt-14">
      {/* Background color bo'midi ob tashaladi */}
      <div className="bg-[#D9D9D9] mb-8 md:mb-4 md:mr-[2.5rem] lg:mr-[4rem] h-[10rem] xs:h-[16rem] lg:h-[20rem] 3xl:h-[24rem] rounded-[10px] md:rounded-[16px] w-full md:w-[50%] lg:w-[45%] md:float-start">
        <img
          src={blogId === "1" ? blog1 : blogId === "2" ? blog2 : blog3}
          alt="Blog client"
        />
      </div>
      <div className="font-[roboto-flex]">
        <h6 className="font-semibold leading-5 md:leading-6 lg:leading-8 text-[20px] xs:text-[24px] lg:text-[28px] xl:text-[32px]">
          {t(`blog-title${blogId}`)}
        </h6>
        <p className="font-[abel] mt-4 text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-regular">
          {t(`blog-subtitle${blogId}`)}
        </p>
      </div>
    </div>
  );
}
