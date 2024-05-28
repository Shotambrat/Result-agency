import React from "react";
import InternetWindow from "../../assets/img/howWorkComp.png";
import downArrow from "../../assets/img/down-arrow.svg";

const HowWeWork = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, #A6C4FF 0%, #D2C2FF 100%)`,
      }}
      className="rounded-[8.73px] overflow-hidden mx-[0.625rem] my-8 sm:mx-4 md:mx-10"
    >
      <h2 className="text-[20px] font-bold text-center mt-4">
        Как работает наше агентство
      </h2>
      <div className="flex mt-6 justify-between">
        <img src={InternetWindow} alt="internet-window" className="h-[6rem]" />
        <h3 className="text-[#4A448E] text-[13px]">
          Заполните заявку и получите экспертные рекомендации для повышения
          эффективности вашего бизнеса – абсолютно бесплатно!
        </h3>
      </div>
      <div className="text-center mt-[14px]">
        <button className="px-7 py-2 bg-button-color text-white rounded-[24px] text-center text-[13px] font-normal">
          Бесплатная консультация
        </button>
      </div>
      <div className="mx-[0.4375rem] mt-10 grid grid-cols-1 gap-y-16 pb-[13px]">
        <div className="relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]">
          <div className="absolute top-[-12%] left-[45%] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 rounded-full">
            <p className="text-[19.2px] font-extrabold text-white text-center mt-[2px]">
              1
            </p>
          </div>
          <h4 className="mt-[36px] text-[191359] text-[18.21px]">
            Личная беседа и бриф
          </h4>
          <p className="text-[13px] mt-3 mb-4">
            Обсуждение ваших предпочтений и целей, и объяснение наших условий и
            задач с последующим формированием детального брифа, включая ключевые
            аспекты будущего проекта
          </p>
          <div className="absolute bottom-[-22%] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]">
          <div className="absolute top-[-12%] left-[45%] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 rounded-full">
            <p className="text-[19.2px] font-extrabold text-white text-center mt-[2px]">
              2
            </p>
          </div>
          <h4 className="mt-[36px] text-[191359] text-[18.21px]">Анализ</h4>
          <p className="text-[13px] mt-3 mb-4">
            Запуск углубленного исследования рынка и аудитории клиента.
            Определение сильных сторон и возможностей продвижения на фоне
            конкурентов. Анализ целевой аудитории и ее потребностей
          </p>
          <div className="absolute bottom-[-19%] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]">
          <div className="absolute top-[-12%] left-[45%] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 rounded-full">
            <p className="text-[19.2px] font-extrabold text-white text-center mt-[2px]">
              3
            </p>
          </div>
          <h4 className="mt-[36px] text-[191359] text-[18.21px]">Разработка проекта</h4>
          <p className="text-[13px] mt-3 mb-4">
            Разработка стратегии, создание контента, адаптированного под
            аудиторию. Контроль проекта для обеспечения согласованной и
            целенаправленной работы
          </p>
          <div className="absolute bottom-[-22%] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]">
          <div className="absolute top-[-12%] left-[45%] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 rounded-full">
            <p className="text-[19.2px] font-extrabold text-white text-center mt-[2px]">
              4
            </p>
          </div>
          <h4 className="mt-[36px] text-[191359] text-[18.21px]">Утверждение</h4>
          <p className="text-[13px] mt-3 mb-4">
            Согласование конечного варианта стратегии и креатива с клиентом.
            Внесение корректировок по замечаниям для достижения идеального
            результата
          </p>
          <div className="absolute bottom-[-24%] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]">
          <div className="absolute top-[-12%] left-[45%] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 rounded-full">
            <p className="text-[19.2px] font-extrabold text-white text-center mt-[2px]">
              5
            </p>
          </div>
          <h4 className="mt-[36px] text-[191359] text-[18.21px]">Запуск проекта</h4>
          <p className="text-[13px] mt-3 mb-4">
            Официальный старт кампании. Мониторинг эффективности запущенных
            мероприятий, корректировка стратегии в реальном времени для
            максимального охвата и вовлечения
          </p>
          <div className="absolute bottom-[-22%] left-[45%]">
            <img src={downArrow} alt="down arrow" className="w-10" />
          </div>
        </div>
        <div className="relative px-[0.8125rem] border-2 border-solid border-[#ffffff] rounded-[14px]">
          <div className="absolute top-[-12%] left-[45%] bg-[#7B72EB] border-[4px] border-solid border-[#cccccc] w-10 h-10 rounded-full">
            <p className="text-[19.2px] font-extrabold text-white text-center mt-[2px]">
              6
            </p>
          </div>
          <h4 className="mt-[36px] text-[191359] text-[18.21px]">Настройка рекламы</h4>
          <p className="text-[13px] mt-3 mb-4">
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
