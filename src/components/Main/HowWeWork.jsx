import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import downArrow from "../../assets/img/down-arrow.svg";
import InternetWindow from "../../assets/img/howWorkComp.svg";
import Application from "../Modals/Application";
import { useInView } from "react-intersection-observer";

const HowWeWork = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  let data = [
    {
      title: "Личная беседа и бриф",
      subtitle: `Обсуждение ваших предпочтений и целей, и объяснение наших условий и
      задач с последующим формированием детального брифа, включая ключевые
      аспекты будущего проекта`,
      style: "md:bottom-[8%] md:left-auto md:right-[-30px] md:-rotate-90",
      order: "order-1",
    },
    {
      title: "Анализ",
      subtitle: `Запуск углубленного исследования рынка и аудитории клиента.
      Определение сильных сторон и возможностей продвижения на фоне
      конкурентов. Анализ целевой аудитории и ее потребностей`,
      style: "",
      order: "order-2",
    },
    {
      title: "Разработка проекта",
      subtitle: `Разработка стратегии, создание контента, адаптированного под
      аудиторию. Контроль проекта для обеспечения согласованной и
      целенаправленной работы`,
      style: "md:rotate-90 md:bottom-[7%] md:left-[-30px]",
      order: "order-3 md:order-4",
    },
    {
      title: "Утверждение",
      subtitle: `Согласование конечного варианта стратегии и креатива с клиентом.
      Внесение корректировок по замечаниям для достижения идеального
      результата`,
      style: "",
      order: "order-4 md:order-3",
    },
    {
      title: "Запуск проекта",
      subtitle: `Официальный старт кампании. Мониторинг эффективности запущенных
      мероприятий, корректировка стратегии в реальном времени для
      максимального охвата и вовлечения`,
      style: "md:bottom-[8%] md:left-auto md:right-[-30px] md:-rotate-90",
      order: "order-5",
    },
    {
      title: "Настройка рекламы",
      subtitle: `Запуск рекламных кампаний в социальных сетях и на других платформах.
      Применение таргетинга и ретаргетинга для максимизации ROMI и
      эффективной доставки ключевых сообщений целевой аудитории`,
      style: "",
      order: "order-6",
    },
  ];
  let dataLength = data.length;

  const titleRef = useRef();
  const titleContainerRef = useRef();
  const ImageSubtitleRef = useRef();
  const subtitleRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef();
  const cardRefs = useRef([]);
  const containerRef = useRef();

  const [titleContainerInViewRef, titleContainerInView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [imageSubtitleInViewRef, imageSubtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [buttonInViewRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  // Start point positions animations
  useEffect(() => {
    // Animation for title
    gsap.set(titleRef.current, { y: -100, x: 0, opacity: 0 });
    // Animation for subtitle
    gsap.set(subtitleRef.current, { x: 150, y: 0, opacity: 0 });
    // Animation for image
    gsap.set(imageRef.current, { x: -150, y: 0, opacity: 0 });
    // Animation for button
    gsap.set(buttonRef.current, { opacity: 0, y: 100, x: 0 });
  }, []);

  useEffect(() => {
    if (titleContainerInView) {
      gsap.to(titleRef.current, {
        duration: 1,
        y: 0,
        opacity: 1,
        // ease: "power3.out",
      });
    }
  }, [titleContainerInView]);

  useEffect(() => {
    if (imageSubtitleInView) {
      gsap.to(subtitleRef.current, {
        duration: 1,
        x: 0,
        opacity: 1,
      });
    }
  }, [imageSubtitleInView]);

  useEffect(() => {
    if (imageSubtitleInView) {
      gsap.to(imageRef.current, {
        duration: 1,
        x: 0,
        opacity: 1,
      });
    }
  }, [imageSubtitleInView]);

  useEffect(() => {
    if (buttonInView) {
      gsap.to(buttonRef.current, {
        duration: 1,
        y: 0,
        opacity: 1,
      });
    }
  }, [buttonInView]);

  // Animation for cards
  useEffect(() => {
    cardRefs.current.forEach((item) => {
      gsap.set(item, { opacity: 0 });
    });

    const showItems = () => {
      gsap.to(cardRefs.current, {
        opacity: 1,
        duration: 2,
        stagger: 0.2,
      });
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >=
          `${window.innerWidth >= 1024
            ? 0.5
            : window.innerWidth >= 768
              ? 0.3
              : 0.2
          }`
        ) {
          showItems();
        }
      });
    };

    const observerCards = new IntersectionObserver(observerCallback, {
      threshold: [0.2, 0.3, 0.5],
    });

    if (containerRef.current) {
      observerCards.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line
        observerCards.unobserve(containerRef.current);
      }
    };
  }, [cardRefs]);

  return (
    <div
      ref={(el) => {
        titleContainerRef.current = el;
        titleContainerInViewRef(el);
      }}
      style={{
        backgroundImage: `linear-gradient(to bottom, #c6d4f1  0%, #e6dffc 100%)`,
      }}
      className="rounded-[16px] lg:rounded-3xl overflow-hidden my-8 xs:px-8 sm:px-0 mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem]  3xl:max-w-[1500px] 3xl:mx-auto lg:mt-[3rem]"
    >
      <h2
        ref={(el) => {
          titleRef.current = el;
        }}
        className="text-[20px] xs:text-[24px] md:text-[30px] 2xl:text-[56px] font-bold text-center mt-4 xs:mt-6"
      >
        {t("howWeWork-title")}
      </h2>
      <div
        ref={(el) => {
          ImageSubtitleRef.current = el;
          imageSubtitleInViewRef(el);
        }}
        className="grid grid-cols-5 sm:grid-cols-2 mt-6 justify-between sm:px-8 md:px-12 lg:px-[10%]"
      >
        <img
          ref={(el) => {
            imageRef.current = el;
          }}
          src={InternetWindow}
          alt="internet-window"
          className="h-[6rem] xs:h-[8rem] sm:h-[12rem] lg:h-[16rem] 2xl:h-[24rem] col-span-2 sm:col-span-1 sm:row-span-2 mx-auto"
        />
        <h3
          ref={(el) => {
            subtitleRef.current = el;
          }}
          className="text-how-we-work-color l:mt-[3%] lg:mt-[10%] pr-2 xl:pr-16 text-[13px] xs:text-[15px] md:text-[20px] xl:text-[24px] 2xl:text-[29px] col-span-3 sm:col-span-1 leading-4 md:leading-6 2xl:leading-10"
        >
          {t("howWeWork-subtitle")}
        </h3>
        <div
          onClick={() => openModal()}
          className="col-span-5 text-center sm:text-left mt-4 sm:col-span-1"
        >
          <button
            ref={(el) => {
              buttonRef.current = el;
              buttonInViewRef(el);
            }}
            className="px-7 xs:px-10 sm:px-8 py-2 sm:py-4 bg-button-color text-white rounded-[24px] sm:rounded-full text-center text-[13px] xs:text-[15px] md:text-[18px] 2xl:text-[20px] font-normal"
          >
            {t("howWeWork-button")}
          </button>
        </div>
      </div>
      <Application isOpen={isModalOpen} onClose={closeModal} />
      <div
        ref={containerRef}
        className=" mx-[0.4375rem] xl:mb-8 2xl:mb-12 md:px-4 lg:px-8 xl:px-[8%] mt-10 grid grid-cols-1 sm:px-24 md:grid-cols-2 md:gap-x-[38px] gap-y-16 md:gap-y-[38px] pb-[13px] rounded-[14px] lg:rounded-3xl"
      >
        {data.map((data, index) => {
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white bg-opacity-40 ${data.order} relative px-[0.8125rem] lg:px-8 2xl:pl-0 2xl:pr-4 border-[1px] md:border-2 border-solid border-white rounded-[14px] lg:rounded-3xl`}
            >
              <div className="absolute top-[-12%] left-[calc(50%-1.25rem)] md:top-[calc(50%-1.25rem)] 2xl:top-[calc(50%-2rem)] md:left-[-1.3rem] 2xl:left-[-2.2rem] bg-footer-icon border-[4px] border-howWeWork-border w-10 h-10 2xl:w-16 2xl:h-16 rounded-full">
                <p className="text-[19.2px] 2xl:text-[40px] font-extrabold text-white text-center mt-[2px] 2xl:mt-0">
                  {index + 1}
                </p>
              </div>
              <h4 className="mt-[36px] md:mt-4 md:ml-8 2xl:ml-16 text-headings-color font-semibold text-[18.21px] xs:text-[22px] 2xl:text-[34.34px]">
                {t(`howWeWork-card${index + 1}-title`)}
              </h4>
              <p className="text-[13px] xs:text-[16px] 2xl:text-[21.46px] text-headings-color mt-3 mb-4 md:ml-8 2xl:ml-16 2xl:mr-10 leading-5 2xl:leading-6">
                {t(`howWeWork-card${index + 1}-subtitle`)}
              </p>
              <div
                className={`absolute bottom-[-40px] left-[calc(50%-8px)] ${dataLength === index + 1 ? "hidden" : data.style
                  }`}
              >
                <img src={downArrow} alt="down arrow" className="w-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWeWork;
