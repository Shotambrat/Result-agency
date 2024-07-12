import React, { useRef, useEffect, useState } from "react";
import MainBg from "../../assets/img/mainBg.png";
import Application from "../Modals/Application";
import dnkLeft from "../../assets/img/DNK.png";
import dnkRight from "../../assets/img/DnkRight.png";
import { useTranslation } from "react-i18next";

const Cover = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const [circlePos, setCirclePos] = useState({ x: -50, y: -50, opacity: 0 });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - 7; // 7 - половина нового радиуса круга
      const y = event.clientY - rect.top - 7; // Вычитаем радиус, чтобы центрировать
      setCirclePos({ x, y, opacity: 1 });
    };

    const handleMouseEnter = () =>
      setCirclePos((prev) => ({ ...prev, opacity: 1 }));

    const handleMouseLeave = () => setCirclePos({ x: -50, y: -50, opacity: 0 });

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>

      <div
        style={{ backgroundImage: `url(${MainBg})` }}
        className="w-full lg:h-screen flex justify-center items-center bg-cover bg-center relative overflow-hidden mb-8 lg:mb-12"
      >

        <div className="3xl:max-w-[1500px] 3xl:mx-auto">
          <div className="flex flex-col items-center justify-center mt-24 lg:mt-44 mb-20 lg:mb-40 xs:mx-14 sm:mx-[5rem] md:mx-[7rem]">
            <div className="flex flex-col items-center justify-center mt-12 lg:w-[900px] z-[3]">
              <h1 className="font-semibold text-[30px] xs:text-[44px] sm:text-[48px] md:text-[52px] lg:text-[48px] 2xl:text-[52px] text-headings-color lg:font-semibold text-center font-roboto-flex leading-9 xs:leading-[3rem]">
                {t("cover-title-first")} <br className="lg:hidden" /> {t("cover-title-second")}
              </h1>
              <h4 className="text-black text-[16px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] lg:px-8 xl:text-[28px] xl:px-4 font-regular mt-7 md:mt-12 mx-5 sm:mx-9 md:mx-12 text-center leading-5 lg:leading-6 xl:leading-9">
                {t("cover-subtitle")}
              </h4>
            </div>
            <div className="flex items-center justify-center w-full mt-12 xs:mt-16 md:mt-20 lg:mt-24 z-10">
              <div
                ref={buttonRef}
                className="relative inline-block rounded-[40px] w-[75%] mx-3 sm:w-[70%] lg:w-[55%] z-10"
              >
                <button
                  onClick={openModal}
                  className="bg-opacity-55 backdrop-filter backdrop-blur-[2px] bg-white z-10 px-6 py-2 xl:py-4 align-middle border border-solid text-black text-[18.5px] xs:text-[21px] 2xl:text-[22px] font-normal border-button-color rounded-[40px] text-center hover:bg-gradient-to-br w-full h-full focus:ring-2 focus:ring-offset-2 focus:ring-violet-200 active:animate-pulseText"
                >
                  {t("cover-button")}
                </button>

                <div
                  style={{ pointerEvents: "none" }}
                  className="cursor-pointer absolute top-0 left-0 rounded-[40px] w-full h-full overflow-hidden -z-10"
                >
                  <div
                    className="cursor-pointer absolute bg-purple-300 rounded-full w-20 h-20 mix-blend-difference"
                    style={{
                      left: `${circlePos.x}px`,
                      top: `${circlePos.y}px`,
                      opacity: circlePos.opacity,
                      pointerEvents: "none",
                      transform: "translate(-50%, -50%)",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-[0]" style={{ userSelect: "none" }}>
            <img
              src={dnkLeft}
              alt="DNK"
              className="dnk-left transition-all duration-300 absolute bottom-[70%] right-[37%] md:bottom-[33%] md:right-[40%] lg:bottom-[25%] lg:right-[50%] xl:bottom-[15%] xl:right-[45%] 2xl:bottom-[7%] 3xl:right-[45%] z-[0]"
              draggable="false"
            />
            <img
              src={dnkRight}
              alt="DNK"
              className="absolute top-[58%] left-[50%] xs:top-[42%] sm:top-[22%] md:top-[15%] md:left-[50%] lg:top-[5%] lg:left-[45%] xl:top-[-5%] 2xl:top-[-15%] z-[0]"
              draggable="false"
            />
          </div>
        </div>

        {/* Модальное окно */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Application isOpen={isModalOpen} onClose={closeModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Cover;