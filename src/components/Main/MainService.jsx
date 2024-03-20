import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainService1 from "../../assets/img/mainService1.png";
import MainService2 from "../../assets/img/mainService2.png";
import MainService3 from "../../assets/img/mainService3.png";
import VioletRec from "../../assets/img/violet-rectangle.png";
import Seo from "../../assets/img/seo.png";
import Smm from "../../assets/img/smm.png";
import SiteDev from "../../assets/img/site-dev.png";
import Brand from "../../assets/img/brand.png";

const MainService = () => {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#icon1",
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        y: 100,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: "#icon1",
          start: "top center",
          //   end: 'bottom center',
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      "#icon2",
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: "#icon2",
          start: "top center",
          //   end: 'bottom center',
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      "#icon3",
      {
        opacity: 0,
        x: 150,
        y: 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 100,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: "#icon3",
          start: "top center",
          //   end: 'bottom center',
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="mt-9 w-10/12 h-[840px] rounded-[60px] bg-gradient-to-b from-gradient-start to-gradient-end mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-white text-5xl mt-[70px]">
            Мы создаём маркетинг медицинской организации
          </h3>
          <h4 className="text-white text-2xl w-[700px] mt-12">
            В штате нашего агентства есть все специалисты, которые могут
            понадобиться для продвижения медицинского бизнеса
          </h4>
        </div>
        <div className=" flex justify-around items-center">
          {/* Пример трех иконок className="w-[454px] h-[454px] bg-white" */}
          <div id="icon1">
            <img src={MainService1} alt="icon" />
          </div>
          <div id="icon2">
            <img src={MainService3} alt="icon" />
          </div>
          <div id="icon3">
            <img src={MainService2} alt="icon" />
          </div>
        </div>
      </div>
      <div className="w-10/12 h-[800px] rounded-[60px] mt-9 flex mx-auto">
        <div className="w-1/3">
          <div className="w-full h-full bg-rectangle rounded-[30px]">
            <img src={VioletRec} alt="rec" />
            <h4 className="relative bottom-[200px] left-10 text-white text-[37px] w-5/6">
              Настройка и запуск рекламных кампаний
            </h4>
          </div>
        </div>
        <div className="w-2/3 h-auto">
          <h2 className="text-start text-uslugi-tex text-[64px] h-[80px] relative -top-4 left-5">
            Услуги
          </h2>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <div className="ml-4 bg-red-500 h-[344px] rounded-[40px]">
              <img src={Seo} alt="icons" />
            </div>
            <div className="mr-4 bg-red-500 rounded-[40px]">
              <img src={Smm} alt="icons" />
            </div>
            <div className="ml-4 bg-red-500 h-[344px] rounded-[40px]">
              <img src={SiteDev} alt="icons" />
            </div>
            <div className="mr-4 bg-red-500 rounded-[40px]">
              <img src={Brand} alt="icons" />
            </div>
          </div>
        </div>
      </div>
      {/* 9F99E0 */}
      <div
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
        <div className="w-full flex justify-between mt-12">
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
      </div>
    </div>
  );
};

export default MainService;
