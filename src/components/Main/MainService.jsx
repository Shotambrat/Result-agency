import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainService1 from "../../assets/img/mainService1.png";
import MainService2 from "../../assets/img/mainService2.png";
import MainService3 from "../../assets/img/mainService3.png";

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
          <div className="w-full h-full bg-emerald-600 rounded-[30px]"></div>
        </div>
        <div className="w-2/3 h-auto">
          <h2 className="text-start text-uslugi-tex text-[64px] h-[80px] relative -top-4 left-5">
            Услуги
          </h2>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <div className="ml-4 bg-red-500 h-[344px] rounded-[40px]"></div>
            <div className="mr-4 bg-red-500 rounded-[40px]"></div>
            <div className="ml-4 bg-red-500 h-[344px] rounded-[40px]"></div>
            <div className="mr-4 bg-red-500 rounded-[40px]"></div>
          </div>
        </div>
      </div>
      <div className="w-10/12 h-[300px] bg-blue-300 mt-9 mx-auto rounded-[40px]">
        <h3>
          <span>Медецинский маркетинг</span>к вашим улугам
        </h3>
        <div className="">
            <div><h1>13</h1> <p>партнеров со скидками для наших клиентов</p></div>
            <div><h1>+25%</h1> <p>увеличен средний чек наших клиентов</p></div>
            <div><h1>+60%</h1> <p>суммарно увеличено количество клиентов</p></div>
            <div><h1>х2</h1> <p>увеличено число заявок и звонков</p></div>
        </div>
      </div>
    </div>
  );
};

export default MainService;
