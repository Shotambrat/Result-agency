import React, { useRef } from "react";
import Seo from "../../assets/img/Seo.png";
import Smm from "../../assets/img/Smm.png";
import SiteDev from "../../assets/img/SiteDev.png";
import Brand from "../../assets/img/Brand.png";
import Ads from "../../assets/img/Ads.png";
import Bot from "../../assets/img/Bot.png";

const MainService = () => {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  return (
    <div>
      <div
        className="mt-6 sm:mt-8 rounded-[17px] text-center mx-[0.625rem] sm:mx-4 md:mx-10"
        style={{
          background:
            "linear-gradient(to bottom right, #D6D2FF 0%, #DBD9F1 28%, #EEEDFB 43%, #DBD8FF 74%, #CEDCFF 100%)",
        }}
      >
        <h5 className="text-[#4E4A83] text-[17.02px] font-semibold pt-5 sm:pt-6 xs:text-[18px] sm:text-[20px] md:text-[22px]">
          Предоставляемые результаты
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center pt-4 pb-5 px-[0.375rem] gap-x-2 gap-y-7">
          <div>
            <p className="text-[32.33px] text-[#5950C9] font-bold ">+25%</p>
            <p className="text-[13px] text-[#3E3B6B] font-normal text-center px-4">
              Увеличение трафика
            </p>
          </div>
          <div>
            <p className="text-[32.33px] text-[#5950C9] font-bold ">+40%</p>
            <p className="text-[13px] text-[#3E3B6B] font-normal text-center">
              Суммарно увеличено <br /> количество клиентов
            </p>
          </div>
          <div>
            <p className="text-[32.33px] text-[#5950C9] font-bold ">26</p>
            <p className="text-[13px] text-[#3E3B6B] font-normal text-center">
              Успешно выполненных <br /> проектов
            </p>
          </div>
          <div>
            <p className="text-[32.33px] text-[#5950C9] font-bold ">х2</p>
            <p className="text-[13px] text-[#3E3B6B] font-normal text-center">
              Увеличено число <br /> заявок и звонков
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[1.875rem] mx-[0.625rem] sm:mx-4 md:mx-10">
        <div className="">
          <h2 className="text-center text-[28px] font-bold">Услуги</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-[0.625rem]">
            <div className="relative rounded-[13.14px] w-[45vw] sm:w-[30vw] md:w-[29vw] h-[11rem] md:h-[16rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              <img
                src={Smm}
                alt="icons"
                className="absolute right-0 sm:w-[9rem] md:w-[10rem]"
              />
              <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] text-white">
                SMM
              </p>
            </div>
            <div className="relative rounded-[13.14px] w-[45vw] sm:w-[30vw] md:w-[29vw] h-[11rem] md:h-[16rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              <img
                src={SiteDev}
                alt="icons"
                className="absolute right-0 sm:w-[9rem] md:w-[10rem]"
              />
              <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] text-white">
                Разработка <br /> сайтов
              </p>
            </div>
            <div className="relative rounded-[13.14px] w-[45vw] sm:w-[30vw] md:w-[29vw] h-[11rem] md:h-[16rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              <img
                src={Seo}
                alt="icons"
                className="absolute right-0 top-4 sm:w-[9rem] md:w-[10rem]"
              />
              <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] text-white">
                SEO
              </p>
            </div>
            <div className="relative rounded-[13.14px] w-[45vw] sm:w-[30vw] md:w-[29vw] h-[11rem] md:h-[16rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              <img
                src={Bot}
                alt="icons"
                className="absolute right-0 sm:w-[9rem] md:w-[10rem]"
              />
              <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] text-white">
                Разработка <br /> Telegram-ботов
              </p>
            </div>
            <div className="relative rounded-[13.14px] w-[45vw] sm:w-[30vw] md:w-[29vw] h-[11rem] md:h-[16rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              <img
                src={Ads}
                alt="icons"
                className="absolute right-0 sm:w-[9rem] md:w-[10rem]"
              />
              <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] text-white">
                Запуск <br /> рекламы
              </p>
            </div>
            <div className="relative rounded-[13.14px] w-[45vw] sm:w-[30vw] md:w-[29vw] h-[11rem] md:h-[16rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              <img
                src={Brand}
                alt="icons"
                className="absolute right-0 sm:w-[9rem] md:w-[10rem]"
              />
              <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] text-white">
                Брендинг
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          backgroundImage:
            "linear-gradient(to left, #9F99E0 0%, #DDDAFA 43%, #C6D6FF 74%, #CEDCFF 100%)",
        }}
        className="w-10/12 h-[300px] mt-9 mx-auto rounded-[40px]"
      >
        <h3
          style={{ color: "#373181" }}
          className="relative top-4 text-center text-[30px] leading-9"
        >
          <span className="font-bold">Медецинский маркетинг</span> <br /> к
          вашим улугам
        </h3>
        <div className="w-full lg:flex lg:justify-between mt-12">
          <div className="w-[200px] text-center">
            <h1
              style={{ color: "#5950C9" }}
              className="text-[64px] text-center font-extrabold"
            >
              13
            </h1>{" "}
            <p style={{ color: "#3E3B6B" }}>
              Партнеров со скидками для наших клиентов
            </p>
          </div>
          <div className="w-[200px] text-center">
            <h1
              style={{ color: "#5950C9" }}
              className="text-[64px] text-center font-extrabold"
            >
              +25%
            </h1>{" "}
            <p style={{ color: "#3E3B6B" }}>
              Увеличен средний чек наших клиентов
            </p>
          </div>
          <div className="w-[200px] text-center">
            <h1
              style={{ color: "#5950C9" }}
              className="text-[64px] text-center font-extrabold"
            >
              +60%
            </h1>{" "}
            <p style={{ color: "#3E3B6B" }}>
              Суммарно увеличено количество клиентов
            </p>
          </div>
          <div className="w-[200px] text-center">
            <h1
              style={{ color: "#5950C9" }}
              className="text-[64px] text-center font-extrabold"
            >
              х2
            </h1>{" "}
            <p style={{ color: "#3E3B6B" }}>Увеличено число заявок и звонков</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainService;
