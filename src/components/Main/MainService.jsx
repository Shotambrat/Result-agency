import React, { useState } from "react";
import Seo from "../../assets/img/Seo.svg";
import Smm from "../../assets/img/Smm.svg";
import SiteDev from "../../assets/img/SiteDev.svg";
import Brand from "../../assets/img/brand.svg";
import Ads from "../../assets/img/Ads.svg";
import Bot from "../../assets/img/Bot.svg";
import Up from "../../assets/img/VectorUP.svg";

const MainService = () => {
  const [services, setServices] = useState({
    smm: false,
    sites: false,
    ads: false,
    seo: false,
    bot: false,
    brand: false,
  });

  function handleChangeCard(name) {
    setServices({ ...services, [name]: !services[name] });
  }

  return (
    <div className="mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] 3xl:max-w-[1500px] 3xl:mx-auto">
      <div
        className="rounded-[17px] lg:rounded-3xl text-center border-2 border-[#b5b1f1] border-solid"
        style={{
          background:
            "linear-gradient(to bottom right, #D6D2FF 0%, #DBD9F1 28%, #EEEDFB 43%, #DBD8FF 74%, #CEDCFF 100%)",
        }}
      >
        <h5 className="text-[#4E4A83] text-[17.02px] font-semibold pt-5 sm:pt-6 xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] 2xl:text-[40px]">
          Предоставляемые результаты
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center pt-4 pb-5 px-[0.375rem] xs:gap-x-2 gap-y-7">
          <div className="order-1 sm:order-2">
            <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
              +25%
            </p>
            <p className="md:h-[40px] lg:h-20 2xl:h-[6.2rem] text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3e3b6b] font-medium text-center px-4 lg:pb-8">
              Увеличение трафика
            </p>
          </div>
          <div className="order-2 sm:order-3">
            <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
              +40%
            </p>
            <p className="text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-medium text-center lg:pb-8">
              Суммарно увеличено <br /> количество клиентов
            </p>
          </div>
          <div className="order-3 sm:order-1">
            <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
              26
            </p>
            <p className="text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-medium text-center lg:pb-8">
              Успешно выполненных <br /> проектов
            </p>
          </div>
          <div className="order-4">
            <p className="text-[32.33px] text-[#5950C9] font-bold lg:text-[40px] 2xl:text-[76px]">
              х2
            </p>
            <p className="text-[13px] lg:text-[16px] 2xl:text-[24px] text-[#3E3B6B] font-medium text-center lg:pb-8">
              Увеличено число <br /> заявок и звонков
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[1.875rem] lg:mt-[3rem]">
        <div className="">
          <h2 className="text-center md:text-left text-[28px] md:text-[32px] 2xl:text-[64px] font-bold text-headings-color">
            Услуги
          </h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-4 xl:gap-x-6 gap-x-[0.625rem] lg:gap-x-[1rem]">
            <div className="relative rounded-[13.14px] lg:rounded-3xl w-full h-[11rem] sm:h-[13rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[32rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              {services["smm"] ? (
                <div className="h-full py-4 px-4 grid grid-cols-1 bg-[#E2E0FD] rounded-[13.14px] lg:rounded-3xl xl:pt-8 2xl:pt-16">
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт 
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Другой сайт
                  </a>
                  <div
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-auto"
                    onClick={() => handleChangeCard("smm")}
                  >
                    <img src={Up} alt="Arrow up" />
                  </div>
                </div>
              ) : (
                <div onClick={() => handleChangeCard("smm")}>
                  <img
                    src={Smm}
                    alt="icons"
                    className="absolute right-0 w-[85%] h-[75%]"
                  />
                  <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] xl:text-[22px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-9">
                    SMM
                  </p>
                </div>
              )}
            </div>
            <div className="relative rounded-[13.14px] lg:rounded-3xl w-full h-[11rem] sm:h-[13rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[32rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              {services["sites"] ? (
                <div className="h-full py-4 px-4 grid grid-cols-1 bg-[#E2E0FD] rounded-[13.14px] lg:rounded-3xl xl:pt-8 2xl:pt-16">
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Другой сайт
                  </a>
                  <div
                    className="absolute bottom-4 right-4 w-8 h-auto"
                    onClick={() => handleChangeCard("sites")}
                  >
                    <img src={Up} alt="Arrow up" />
                  </div>
                </div>
              ) : (
                <div onClick={() => handleChangeCard("sites")}>
                  <img
                    src={SiteDev}
                    alt="icons"
                    className="absolute right-0 w-[85%] h-[75%]"
                  />
                  <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] xl:text-[22px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-9">
                    Разработка <br /> сайтов
                  </p>
                </div>
              )}
            </div>
            <div className="relative rounded-[13.14px] lg:rounded-3xl w-full h-[11rem] sm:h-[13rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[32rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              {services["seo"] ? (
                <div className="h-full py-4 px-4 grid grid-cols-1 bg-[#E2E0FD] rounded-[13.14px] lg:rounded-3xl xl:pt-8 2xl:pt-16">
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Другой сайт
                  </a>
                  <div
                    className="absolute bottom-4 right-4 w-8 h-auto"
                    onClick={() => handleChangeCard("seo")}
                  >
                    <img src={Up} alt="Arrow up" />
                  </div>
                </div>
              ) : (
                <div onClick={() => handleChangeCard("seo")}>
                  <img
                    src={Seo}
                    alt="icons"
                    className="absolute right-0 top-4 w-[85%] h-[75%]"
                  />
                  <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] xl:text-[22px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-9">
                    SEO
                  </p>
                </div>
              )}
            </div>
            <div className="relative rounded-[13.14px] lg:rounded-3xl w-full h-[11rem] sm:h-[13rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[32rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              {services["bot"] ? (
                <div className="h-full py-4 px-4 grid grid-cols-1 bg-[#E2E0FD] rounded-[13.14px] lg:rounded-3xl xl:pt-8 2xl:pt-16">
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Другой сайт
                  </a>
                  <div
                    className="absolute bottom-4 right-4 w-8 h-auto"
                    onClick={() => handleChangeCard("bot")}
                  >
                    <img src={Up} alt="Arrow up" />
                  </div>
                </div>
              ) : (
                <div onClick={() => handleChangeCard("bot")}>
                  <img
                    src={Bot}
                    alt="icons"
                    className="absolute right-0 w-[85%] h-[75%]"
                  />
                  <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] xl:text-[22px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-9">
                    Разработка <br /> Telegram-ботов
                  </p>
                </div>
              )}
            </div>
            <div className="relative rounded-[13.14px] lg:rounded-3xl w-full h-[11rem] sm:h-[13rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[32rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              {services["ads"] ? (
                <div className="h-full py-4 px-4 grid grid-cols-1 bg-[#E2E0FD] rounded-[13.14px] lg:rounded-3xl xl:pt-8 2xl:pt-16">
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Другой сайт
                  </a>
                  <div
                    className="absolute bottom-4 right-4 w-8 h-auto"
                    onClick={() => handleChangeCard("ads")}
                  >
                    <img src={Up} alt="Arrow up" />
                  </div>
                </div>
              ) : (
                <div onClick={() => handleChangeCard("ads")}>
                  <img
                    src={Ads}
                    alt="icons"
                    className="absolute right-0 w-[85%] h-[75%]"
                  />
                  <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] xl:text-[22px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-9">
                    Запуск <br /> рекламы
                  </p>
                </div>
              )}
            </div>
            <div className="relative rounded-[13.14px] lg:rounded-3xl w-full h-[11rem] sm:h-[13rem] md:h-[16rem] lg:h-[20rem] xl:h-[24rem] 2xl:h-[32rem] bg-gradient-to-b from-[#EAE9FD] to-[#7F75FF]">
              {services["brand"] ? (
                <div className="h-full py-4 px-4 grid grid-cols-1 bg-[#E2E0FD] rounded-[13.14px] lg:rounded-3xl xl:pt-8 2xl:pt-16">
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Одностраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Многостраничный сайт Tilda
                  </a>
                  <a href="/" className="text-[9px] xs:text-[12px] md:text-[14px] lg:text-[18px] font-semibold block">
                    Другой сайт
                  </a>
                  <div
                    className="absolute bottom-4 right-4 w-8 h-auto"
                    onClick={() => handleChangeCard("brand")}
                  >
                    <img src={Up} alt="Arrow up" />
                  </div>
                </div>
              ) : (
                <div onClick={() => handleChangeCard("brand")}>
                  <img
                    src={Brand}
                    alt="icons"
                    className="absolute right-0 w-[85%] h-[75%] lg:rounded-3xl cursor-pointer"
                  />
                  <p className="absolute left-[10%] bottom-[12%] font-medium text-[13px] sm:text-[15px] md:text-[18px] xl:text-[22px] 2xl:text-[40px] text-white leading-5 xl:leading-7 2xl:leading-9">
                    Брендинг
                  </p>
                </div>
              )}
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
