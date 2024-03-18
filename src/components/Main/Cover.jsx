import React, { useRef, useEffect, useState } from "react";
import MainBg from "../../assets/img/mainBg.png";
// import Emergency from '../../assets/img/emergency-truck.png'
// import Equalizer from '../../assets/img/equalizer.png';
// import FineIcon from '../../assets/img/fine-icon.png'
// import Laptop from '../../assets/img/laptop.png';
// import MedCase from '../../assets/img/medCase.png';
// import ManDoctor from '../../assets/img/man-doctor.png';

const Cover = () => {
  const buttonRef = useRef(null);
  const [circlePos, setCirclePos] = useState({ x: -50, y: -50, opacity: 0 });

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
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 w-[900px]">
          <h1 className="text-[64px] font-light text-center font-roboto-flex z-20">
            Агенство маркетинга & IT в сфере медицины
          </h1>
          <h4 className="text-4xl  text-center z-20">
          Наше агентство эффективно продвигает клиники, фармацевтические предприятия, медицинских специалистов и другие связанные учреждения
          </h4>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div ref={buttonRef} className="relative inline-block rounded-[40px]">
            <button className="px-6 py-4 pt-3 border border-solid border-button-color rounded-[40px] text-button-color text-center hover:bg-gradient-to-br w-full h-full focus:ring-2 focus:ring-offset-2 focus:ring-violet-200 active:animate-pulseText">
              заказать обратный звонок
            </button>
            <div style={{ pointerEvents: "none" }} className="cursor-pointer absolute top-0 left-0 rounded-[40px] w-full h-full overflow-hidden -z-10">
              <div
                className="cursor-pointer absolute bg-purple-300 rounded-full w-20 h-20 mix-blend-difference"
                style={{
                  left: `${circlePos.x}px`,
                  top: `${circlePos.y}px`,
                  opacity: circlePos.opacity,
                  pointerEvents: "none",
                  transform: 'translate(-50%, -50%)', // Центрирование круга относительно курсора
                  borderRadius: '50%' 
                }}
              ></div>
            </div>
          </div>
          <button className="px-6 py-4 pt-3 bg-button-color text-white rounded-[40px] text-center transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-200 hover:bg-gradient-to-r hover:from-[#ffffff]/30 hover:to-[#ffffff]/10 active:animate-pulseText">
            бесплатная консультация
          </button>
        </div>
      </div>
      {/* <div>
        <img className="absolute left-[170px] -top-[70px]" src={Emergency} alt="emergency-truck" />
        <img className="absolute left-0 bottom-[40px]" src={FineIcon} alt="fine-icon" />
        <img className="absolute left-[150px] bottom-0" src={Laptop} alt="laptop" />
        <img className="absolute right-[150px] -top-[30px]" src={MedCase} alt="case-medical" />
        <img className="absolute right-0 top-[100px]" src={Equalizer} alt="equalizer" />
        <img className="absolute right-[50px] bottom-0" src={ManDoctor} alt="doctor-man" />
      </div> */}
    </div>
  );
};

export default Cover;
