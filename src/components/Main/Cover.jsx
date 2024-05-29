import React, { useRef, useEffect, useState } from "react";
import MainBg from "../../assets/img/mainBg.png";
import Application from "../Modals/Application";

const Cover = () => {
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
    <div
      style={{ backgroundImage: `url(${MainBg})` }}
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
    >
      <div className="flex flex-col items-center justify-center lg:space-y-8 xs:mx-14 sm:mx-[5rem] md:mx-[7rem]">
        <div className="flex flex-col items-center justify-center mt-12 lg:w-[900px]">
          <h1 className="font-semibold text-[36px] xs:text-[44px] sm:text-[48px] md:text-[52px] 2xl:text-[52px] text-[#191359] lg:font-semibold text-center font-roboto-flex leading-9 xs:leading-[3rem]">
            МЕДИЦИНСКИЙ МАРКЕТИНГ & IT
          </h1>
          <h4 className="text-[#000000] text-[17px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] lg:px-4 font-regular mt-7 md:mt-12 mx-5 sm:mx-9 md:mx-12 text-center leading-9">
            Result Agency эффективно продвигает клиники, фармацевтические
            предприятия, медицинских специалистов и другие компании
          </h4>
        </div>
        <div className="flex items-center justify-center w-full mt-12 xs:mt-16 md:mt-20 lg:mt-24">
          <div
            ref={buttonRef}
            className="relative inline-block rounded-[40px] w-full mx-3 sm:w-[70%] lg:w-[45%]"
          >
            <button
              onClick={openModal}
              className="px-6 py-4 pt-3 border border-solid text-black text-[20px] xs:text-[21px] 2xl:text-[22px] font-normal border-button-color rounded-[40px] text-center hover:bg-gradient-to-br w-full h-full focus:ring-2 focus:ring-offset-2 focus:ring-violet-200 active:animate-pulseText"
            >
              Оставить заявку
            </button>

            <Application isOpen={isModalOpen} onClose={closeModal} />
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
                  transform: "translate(-50%, -50%)", // Центрирование круга относительно курсора
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
