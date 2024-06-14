import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";
import blog1 from "../../assets/img/Blog/blog1.png";
import blog2 from "../../assets/img/Blog/blog2.png";
import blog3 from "../../assets/img/Blog/blog3.png";

import blogBg1 from "../../assets/img/Blog/blog-bg1.png";
import blogBg2 from "../../assets/img/Blog/blog-bg2.png";
import blogBg3 from "../../assets/img/Blog/blog-bg3.png";

export default function OurOffers({ blogId }) {
  const { t } = useTranslation();

  return (
    <div className="mt-6 md:mt-10 lg:mt-14">
      {/* Background color bo'midi ob tashaladi */}
      <div
        style={{
          backgroundImage: `url(${
            blogId === "1" ? blogBg1 : blogId === "2" ? blogBg2 : blogBg3
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex mb-8 md:mb-4 md:mr-[2.5rem] rounded-[10px] md:rounded-[16px] w-full md:w-[50%] lg:w-[45%] md:float-start h-auto"
      >
        <div className="w-[60%]">
          <img
            src={blogId === "1" ? blog1 : blogId === "2" ? blog2 : blog3}
            alt="Blog client"
            className={`w-full h-auto ${blogId === "1" ? "my-8" : ""}`}
          />
        </div>
        <div className="relative w-[40%]">
          <img
            src={logo}
            alt="Blog client"
            className="w-auto h-auto absolute bottom-0"
          />
        </div>
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
