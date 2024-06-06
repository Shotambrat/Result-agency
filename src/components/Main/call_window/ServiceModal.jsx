import React, { useState } from "react";
import ServicePriceModal from "./ServicePriceModal";
// import './ServiceModal.css'

export default function ServiceModal({ close, name }) {
  const [openPrice, setOpenPrice] = useState(false);
  const [state, setState] = useState(0);

  const handleOpenServicePriceModal = (index) => {
    setState(index);
    setOpenPrice(true);
  };

  const handleCloseServiceModal = () => {
    setOpenPrice(false);
  };

  const servicesData = [
    {
      title: "Одностраничный сайт",
      siteFor: "Статичный сайт для специалиста или небольшой клиники.",
      price: "300$",
      size: "1 страница",
      duration: "1 месяц",
      condition: "(при быстром получении запрашиваемой информации от клиента)",
      services: "Пакет услуг",
      webDev: "Разработка сайта",
      completion: "Заполнение контентом на 2 языках",
      integration: "Интеграция с CMS панелью",
      indexation: "Индексация в Google",
      seo: "SEO оптимизация под ключевые слова",
      hosting: "Хостинг на 3 месяца",
      domen: "Доменное имя на 1 год",
      expCode: "Экспорт кода (при желании заказчика)",
      name: "smm",
    },
    {
      title: "Одностраничный сайт Tilda",
      siteFor: "Статичный сайт для специалиста или небольшой 2.",
      price: "400$",
      size: "1 страница",
      duration: "2 недели",
      condition: "(при быстром получении запрашиваемой информации от клиента)",
      services: "Пакет услуг",
      webDev: "Разработка сайта",
      completion: "Заполнение контентом на 2 языках",
      integration: "Интеграция с CMS панелью",
      indexation: "Индексация в Google",
      seo: "SEO оптимизация под ключевые слова",
      hosting: "Хостинг на 3 месяца",
      domen: "Доменное имя на 1 год",
      expCode: "Экспорт кода (при желании заказчика)",
    },
    {
      title: "Многостраничный сайт",
      siteFor: "Статичный сайт для специалиста или небольшой 3.",
      price: "500$",
      size: "1 страница",
      duration: "2 недели",
      condition: "(при быстром получении запрашиваемой информации от клиента)",
      services: "Пакет услуг",
      webDev: "Разработка сайта",
      completion: "Заполнение контентом на 2 языках",
      integration: "Интеграция с CMS панелью",
      indexation: "Индексация в Google",
      seo: "SEO оптимизация под ключевые слова",
      hosting: "Хостинг на 3 месяца",
      domen: "Доменное имя на 1 год",
      expCode: "Экспорт кода (при желании заказчика)",
    },
    {
      title: "Многостраничный сайтa",
      siteFor: "Статичный сайт для специалиста или небольшой клиники.",
      price: "600$",
      size: "1 страница",
      duration: "2 недели",
      condition: "(при быстром получении запрашиваемой информации от клиента)",
      services: "Пакет услуг",
      webDev: "Разработка сайта",
      completion: "Заполнение контентом на 2 языках",
      integration: "Интеграция с CMS панелью",
      indexation: "Индексация в Google",
      seo: "SEO оптимизация под ключевые слова",
      hosting: "Хостинг на 3 месяца",
      domen: "Доменное имя на 1 год",
      expCode: "Экспорт кода (при желании заказчика)",
    },
    {
      title: "Многостраничный сайт Tilda",
      siteFor: "Статичный сайт для специалиста или небольшой клиники.",
      price: "700$",
      size: "1 страница",
      duration: "2 недели",
      condition: "(при быстром получении запрашиваемой информации от клиента)",
      services: "Пакет услуг",
      webDev: "Разработка сайта",
      completion: "Заполнение контентом на 2 языках",
      integration: "Интеграция с CMS панелью",
      indexation: "Индексация в Google",
      seo: "SEO оптимизация под ключевые слова",
      hosting: "Хостинг на 3 месяца",
      domen: "Доменное имя на 1 год",
      expCode: "Экспорт кода (при желании заказчика)",
    },
    {
      title: "Другие сайты",
      siteFor: "Статичный сайт для специалиста или небольшой клиники.",
      price: "800$",
      size: "1 страница",
      duration: "2 недели",
      condition: "(при быстром получении запрашиваемой информации от клиента)",
      services: "Пакет услуг",
      webDev: "Разработка сайта",
      completion: "Заполнение контентом на 2 языках",
      integration: "Интеграция с CMS панелью",
      indexation: "Индексация в Google",
      seo: "SEO оптимизация под ключевые слова",
      hosting: "Хостинг на 3 месяца",
      domen: "Доменное имя на 1 год",
      expCode: "Экспорт кода (при желании заказчика)",
    },
  ];

  return (
    <>
      {openPrice ? (
        <ServicePriceModal
          defaultNumber={state}
          data={servicesData}
          close={handleCloseServiceModal}
        />
      ) : (
        <></>
      )}

      <div className="rounded-xl bg-[#e0e0ff]  lg:rounded-3xl h-[11rem] md:h-[18rem] lg:h-[21rem] xl:h-[24rem] 2xl:h-[30rem]">
        <div className="h-full grid grid-cols-1 relative text-left px-2 m:px-2 l:px-1.5 xs:px-1 py-1 l:py-1.5 lg:py-4 xl:py-6 2xl:py-8">
          {servicesData.map((elem, index) => {
            return (
              <p
                className="hover:underline text-[10.5px] py-[1.5px] cursor-pointer text-left font-semibold text-purpleText inline-block m:py-[0.5px] m:text-[11px] l:text-[12.5px] l:py-[0px] s:py-[3px] xs:text-[14px] xs:py-[3px] xs:px-[4.5px] sm:py-[2px]  sm:px-[4px] sm:text-[13px] md:text-[16.5px] md:px-[7px] md:py-[5px] lg:text-[18px] lg:px-[13px] lg:py-[7px] xl:py-[10px] xl:px-[20px] xl:text-[19px] 2xl:text-[25px] "
                key={index}
                onClick={() => handleOpenServicePriceModal(index)}
              >
                {elem.title}
              </p>
            );
          })}
          <div
            onClick={() => close(name)}
            className="absolute right-0 bottom-1 flex justify-end items-center"
          >
            <button className="w-[15px] h-[10px] mb-1 mr-4 close-button m:mr-3 m:h-[16px] l:mr-5 l:w-[23px] l:h-[19px] lg:w-[27px] lg:h-[23px] lg:mr-7 2xl:w-[50px] 2xl:h-[28px] 2xl:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 28"
                fill="none"
              >
                <path
                  d="M52.4883 30.5103C51.5284 31.4644 50.23 32 48.8766 32C47.5232 32 46.2248 31.4644 45.265 30.5103L26.8737 12.3752L8.73864 30.5103C7.7788 31.4644 6.48039 32 5.127 32C3.7736 32 2.47519 31.4644 1.51535 30.5103C1.03518 30.0341 0.654069 29.4675 0.393986 28.8432C0.133903 28.2189 0 27.5493 0 26.873C0 26.1968 0.133903 25.5272 0.393986 24.9029C0.654069 24.2786 1.03518 23.712 1.51535 23.2358L23.2365 1.51465C23.7127 1.03449 24.2793 0.653376 24.9036 0.393293C25.5279 0.133209 26.1974 -0.000694275 26.8737 -0.000694275C27.55 -0.000694275 28.2196 0.133209 28.8439 0.393293C29.4682 0.653376 30.0348 1.03449 30.511 1.51465L52.4883 23.2358C52.9684 23.712 53.3495 24.2786 53.6096 24.9029C53.8697 25.5272 54.0036 26.1968 54.0036 26.873C54.0036 27.5493 53.8697 28.2189 53.6096 28.8432C53.3495 29.4675 52.9684 30.0341 52.4883 30.5103Z"
                  fill="#948DEA"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
