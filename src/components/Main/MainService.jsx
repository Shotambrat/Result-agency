import React, { useRef, useState } from "react";
import Seo from "../../assets/img/Seo.svg";
import Smm from "../../assets/img/Smm.svg";
import SiteDev from "../../assets/img/SiteDev.svg";
import Brand from "../../assets/img/brand.svg";
import Ads from "../../assets/img/Ads.svg";
import Bot from "../../assets/img/Bot.svg";
import { gsap } from "gsap";

import ServiceModal from "./call_window/ServiceModal";
import { useTranslation } from "react-i18next";

let data = [
  {
    name: "SMM",
    nameForFunction: "smm",
    img: Smm,
    style: "order-1 md:order-1",
    iterationNumber: 3
  },
  {
    name: `Разработка <br/> сайтов`,
    nameForFunction: "sites",
    img: SiteDev,
    style: "order-2 md:order-2",
    iterationNumber: 5
  },
  {
    name: "Запуск <br /> рекламы",
    nameForFunction: "ads",
    img: Ads,
    style: "order-5 md:order-3",
    iterationNumber: 2
  },
  {
    name: "Seo",
    nameForFunction: "seo",
    img: Seo,
    style: "order-3 md:order-4",
    iterationNumber: 2
  },
  {
    name: "Разработка <br /> Telegram-ботов",
    nameForFunction: "bot",
    img: Bot,
    style: "order-4 md:order-5",
    iterationNumber: 3
  },
  {
    name: "Брендинг",
    nameForFunction: "brand",
    img: Brand,
    style: "order-6 md:order-6",
    iterationNumber: 2
  },
];

const MainService = () => {
  const imgRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(imgRefs.current[index], { scale: 1.13, x: -30, duration: 0.3 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imgRefs.current[index], { scale: 1, x: 0, duration: 0.3 });
  };

  const { t } = useTranslation();

  const [services, setServices] = useState({
    smm: false,
    sites: false,
    ads: false,
    seo: false,
    bot: false,
    brand: false,
  });

  function handleChangeCard(name) {
    console.log(name);
    setServices({ ...services, [name]: !services[name] });
  }

  const iconRefs = useRef([]);
  iconRefs.current = [];



  return (
    <>
      <div className="mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] 3xl:max-w-[1500px] 3xl:mx-auto">
        <div
          className="border-solid border-[3px] border-item-cases mt-6 sm:mt-8 rounded-[17px] lg:rounded-3xl text-center"
          style={{
            background:
              "linear-gradient(to bottom right, #D6D2FF 0%, #DBD9F1 28%, #EEEDFB 43%, #DBD8FF 74%, #CEDCFF 100%)",
          }}
        >
          <h5 className="text-[#4E4A83] text-[17.02px] font-semibold pt-5 sm:pt-6 xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] 2xl:text-[40px]">
            {t("service-info-title")}
          </h5>
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center pt-4 pb-5 px-[0.375rem] gap-x-2 gap-y-7">
            <div className="order-1 sm:order-2">
              <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
                25%
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`service-info-cart2-subtitle`),
                }}
                className="md:h-[40px] lg:h-20 2xl:h-[6.2rem] text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-normal text-center px-4 lg:pb-8"
              ></p>
            </div>
            <div className="order-2 sm:order-3">
              <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
                40%
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`service-info-cart3-subtitle`),
                }}
                className="text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-normal text-center lg:pb-8"
              ></p>
            </div>
            <div className="order-3 sm:order-1">
              <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
                26
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`service-info-cart1-subtitle`),
                }}
                className="text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-normal text-center lg:pb-8"
              ></p>
            </div>
            <div className="order-4">
              <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
                х2
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`service-info-cart4-subtitle`),
                }}
                className="text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-normal text-center lg:pb-8"
              ></p>
            </div>
          </div>
        </div>

        <div className="mt-[1.875rem] lg:mt-[3rem]">
          <div className="">
            <h2 className="text-center md:text-left text-[28px] md:text-[32px] 2xl:text-[64px] font-bold ">
              {t("service-title")}
            </h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-[0.625rem] lg:gap-x-[1rem] xl:gap-x-6 gap-y-5 lg:gap-y-12">
              {data.map((data, index) => {
                return (
                  <div key={index} className={`${data.style}`}>
                    {services[data.nameForFunction] ? (
                      <ServiceModal
                        close={handleChangeCard}
                        name={data.nameForFunction}
                        modal={index}
                        iterationNumber={data.iterationNumber}
                      />
                    ) : (
                      <div
                        className="relative rounded-[13.14px] lg:rounded-3xl h-[11rem] md:h-[18rem] lg:h-[21rem] xl:h-[24rem] 2xl:h-[30rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF] lg:transition-transform lg:duration-500 lg:ease-in-out transform lg:hover:scale-105"
                        onClick={() => handleChangeCard(data.nameForFunction)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <img
                          ref={(el) => (imgRefs.current[index] = el)}
                          src={data.img}
                          alt="icons"
                          className="mt-[4%] absolute right-0 lg:rounded-3xl w-[70%] h-[70%]"
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t(`service-card${index + 1}-title`),
                          }}
                          className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-10 cursor-pointer"
                        ></p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainService;
