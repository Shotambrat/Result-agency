import React from "react";
import InternetWindow from "../../assets/img/howWorkComp.png";
import downArrow from "../../assets/img/down-arrow.svg";

const HowWeWork = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, #c6d4f1  0%, #e6dffc 100%)`,
      }}
      className="rounded-[16px] lg:rounded-3xl overflow-hidden mx-[0.625rem] my-8 xs:px-8 sm:px-0 sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] lg:mt-[3rem]"
    >
      <h2 className="text-[20px] xs:text-[24px] md:text-[30px] 2xl:text-[56px] font-bold text-center mt-4 xs:mt-6">
        Как работает наше агентство
      </h2>
      <div className="grid grid-cols-5 sm:grid-cols-2 mt-6 justify-between sm:px-8 md:px-12 lg:px-[10%]">
        <img
          src={InternetWindow}
          alt="internet-window"
          className="h-[6rem] xs:h-[8rem] sm:h-[12rem] 2xl:h-[24rem] col-span-2 sm:col-span-1 sm:row-span-2"
        />
        <h3 className="text-[#4A448E] pr-2 text-[13px] xs:text-[15px] md:text-[20px] 2xl:text-[32px] col-span-3 sm:col-span-1 leading-6 2xl:leading-8">
          Заполните заявку и получите экспертные рекомендации для повышения
          эффективности вашего бизнеса – абсолютно бесплатно!
        </h3>
        <div className="col-span-5 text-center sm:text-left mt-4 sm:col-span-1">
          <button className="px-7 xs:px-10 sm:px-8 py-2 sm:py-4 bg-button-color text-white rounded-[24px] sm:rounded-full text-center text-[13px] xs:text-[15px] md:text-[18px] 2xl:text-[20px] font-normal">
            Бесплатная консультация
          </button>
        </div>
      </div>
      <div className="mx-[0.4375rem] xl:mb-8 2xl:mb-12 md:px-4 lg:px-8 xl:px-[8%] mt-10 grid grid-cols-1 sm:px-24 md:grid-cols-2 md:gap-x-[38px] gap-y-16 md:gap-y-[38px] pb-[13px]">
        <div className="order-1 relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px] lg:rounded-3xl">
          <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
            <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
              1
            </p>
          </div>
          <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-[#191359] font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
            Личная беседа и бриф
          </h4>
          <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-[#191359] mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
            Обсуждение ваших предпочтений и целей, и объяснение наших условий и
            задач с последующим формированием детального брифа, включая ключевые
            аспекты будущего проекта
          </p>
          <div className="absolute bottom-[-40px] left-[45%] md:bottom-[8%] md:left-auto md:right-[-40px] md:-rotate-90">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="order-2 relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]  lg:rounded-3xl">
          <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
            <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
              2
            </p>
          </div>
          <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-[#191359] font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
            Анализ
          </h4>
          <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-[#191359] mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
            Запуск углубленного исследования рынка и аудитории клиента.
            Определение сильных сторон и возможностей продвижения на фоне
            конкурентов. Анализ целевой аудитории и ее потребностей
          </p>
          <div className="absolute bottom-[-40px] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="order-3 md:order-4 relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]  lg:rounded-3xl">
          <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
            <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
              3
            </p>
          </div>
          <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-[#191359] font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
            Разработка проекта
          </h4>
          <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-[#191359] mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
            Разработка стратегии, создание контента, адаптированного под
            аудиторию. Контроль проекта для обеспечения согласованной и
            целенаправленной работы
          </p>
          <div className="absolute bottom-[-40px] left-[45%] md:rotate-90 md:bottom-[7%] md:left-[-40px]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="order-4 md:order-3 relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]  lg:rounded-3xl">
          <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
            <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
              4
            </p>
          </div>
          <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-[#191359] font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
            Утверждение
          </h4>
          <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-[#191359] mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
            Согласование конечного варианта стратегии и креатива с клиентом.
            Внесение корректировок по замечаниям для достижения идеального
            результата
          </p>
          <div className="absolute bottom-[-40px] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="order-5 relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]  lg:rounded-3xl">
          <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
            <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
              5
            </p>
          </div>
          <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-[#191359] font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
            Запуск проекта
          </h4>
          <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-[#191359] mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
            Официальный старт кампании. Мониторинг эффективности запущенных
            мероприятий, корректировка стратегии в реальном времени для
            максимального охвата и вовлечения
          </p>
          <div className="absolute bottom-[-40px] left-[45%] md:bottom-[8%] md:left-auto md:right-[-40px] md:-rotate-90">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="order-6 relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]  lg:rounded-3xl">
          <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
            <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
              6
            </p>
          </div>
          <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-[#191359] font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
            Настройка рекламы
          </h4>
          <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-[#191359] mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
            Запуск рекламных кампаний в социальных сетях и на других платформах.
            Применение таргетинга и ретаргетинга для максимизации ROMI и
            эффективной доставки ключевых сообщений целевой аудитории
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
