import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import One from "./../../assets/img/one.svg";
import Two from "../../assets/img/two.svg";
import Three from "../../assets/img/three.svg";
import Four from "../../assets/img/four.svg";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  // Создаем ссылки на элементы для анимации
  const verticalLineRef = useRef(null);
  const horizontalLineRef1 = useRef(null);
  const horizontalLineRef2 = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);
  const block4Ref = useRef(null);
  const block5Ref = useRef(null);
  const block6Ref = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      verticalLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: verticalLineRef.current,
      }
    );

    gsap.fromTo(
      horizontalLineRef1.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "none",
        delay: 1,
        scrollTrigger: horizontalLineRef1.current,
      }
    );

    gsap.fromTo(
      horizontalLineRef2.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "none",
        delay: 1,
        scrollTrigger: horizontalLineRef2.current,
      }
    );

    gsap.fromTo(
      [
        block1Ref.current,
        block2Ref.current,
        block3Ref.current,
        block4Ref.current,
        block5Ref.current,
        block6Ref.current,
      ],
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "none",
        delay: 1.5,
        stagger: 0.2,
        scrollTrigger: block1Ref.current,
      }
    );

    gsap.fromTo(
      [
        contentRef1.current,
        contentRef2.current,
        contentRef3.current,
        contentRef4.current,
        contentRef5.current,
        contentRef6.current,
      ],
      { y: -20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "none",
        delay: 2.5,
        stagger: 0.2,
        scrollTrigger: contentRef1.current,
      }
    );
  }, []);

  return (
    <div className="w-10/12 h-auto rounded-[30px] overflow-hidden mx-auto my-8">
      <h2 className="text-8xl font-bold text-center text-blue-500">
        Как у нас устроена работа
      </h2>
      <div className="flex">
        <div className="w-1/2">Картинка здесь</div>
        <div className="w-1/2 text-center">
          <h3>
            Оставьте заявку и получите рекомендации по оптимизации вашего
            бизнеса совершенно бесплатно!
          </h3>
          <button className="mt-4">Бесплатная консультация</button>
        </div>
      </div>
      <div className="relative my-8">
        <div
          className="absolute inset-0 m-auto w-0.5 bg-black h-full"
          ref={verticalLineRef}
        ></div>
        <div
          className="absolute top-1/3 left-[100px] w-10/12 h-0.5 bg-black"
          style={{ transform: "translateY(-50%)" }}
          ref={horizontalLineRef1}
        ></div>
        <div className="flex justify-between h-64">
          <div
            className="w-1/3 bg-red-200 flex ml-[100px] items-center"
            ref={block1Ref}
          >
            <img src={One} alt="one" className="h-[150px]" />
            <div ref={contentRef1}>
              <h4 className="text-bolder text-[28px] ">Мы не делаем однотипных предложений</h4>
              <p>
                Глубоко изучаем конкретный бизнес и решаем, что сработает лучше.
                Тестируем гипотезы, не останавливаясь на классических
                онлайн-инструментах
              </p>
            </div>
          </div>
          <div
            className="w-1/3 ml-4 h-64 bg-red-300 flex mr-[120px] items-center"
            ref={block2Ref}
          >
            <img src={Two} alt="one" className="h-[150px]" />
            <div ref={contentRef2}>
              <h4>Мы не делаем однотипных предложений</h4>
              <p>
                Глубоко изучаем конкретный бизнес и решаем, что сработает лучше.
                Тестируем гипотезы, не останавливаясь на классических
                онлайн-инструментах
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute top-2/3 left-[100px] w-10/12 h-0.5 bg-black"
          style={{ transform: "translateY(-100%)" }}
          ref={horizontalLineRef2}
        ></div>
        <div className="flex justify-between h-64">
          <div
            className="w-1/3 bg-red-200 flex ml-[100px] items-center"
            ref={block3Ref}
          >
            <img src={Three} alt="one" className="h-[150px]" />
            <div ref={contentRef3}>
              <h4>Мы не делаем однотипных предложений</h4>
              <p>
                Глубоко изучаем конкретный бизнес и решаем, что сработает лучше.
                Тестируем гипотезы, не останавливаясь на классических
                онлайн-инструментах
              </p>
            </div>
          </div>
          <div
            className="w-1/3 ml-4 h-64 bg-red-300 flex mr-[120px] items-center"
            ref={block4Ref}
          >
            <img src={Four} alt="one" className="h-[150px] " />
            <div ref={contentRef4}>
              <h4>Мы не делаем однотипных предложений</h4>
              <p>
                Глубоко изучаем конкретный бизнес и решаем, что сработает лучше.
                Тестируем гипотезы, не останавливаясь на классических
                онлайн-инструментах
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between h-64">
          <div
            className="w-1/3 bg-red-200 flex ml-[100px] items-center"
            ref={block5Ref}
          >
            <img src={Three} alt="one" className="h-[150px]" />
            <div ref={contentRef5}>
              <h4>Мы не делаем однотипных предложений</h4>
              <p>
                Глубоко изучаем конкретный бизнес и решаем, что сработает лучше.
                Тестируем гипотезы, не останавливаясь на классических
                онлайн-инструментах
              </p>
            </div>
          </div>
          <div
            className="w-1/3 ml-4 h-64 bg-red-300 flex mr-[120px] items-center"
            ref={block6Ref}
          >
            <img src={Four} alt="one" className="h-[150px]" />
            <div ref={contentRef6}>
              <h4>Мы не делаем однотипных предложений</h4>
              <p>
                Глубоко изучаем конкретный бизнес и решаем, что сработает лучше.
                Тестируем гипотезы, не останавливаясь на классических
                онлайн-инструментах
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
