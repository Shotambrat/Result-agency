import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import logoresbig from "../../src/assets/img/logoresbig.png";
import logo_big_upside_down from "../../src/assets/img/logo_big_upside_down.png";
import SwiperCases from "../components/Cases/OurCasesSlider";
import ToTopButton from "../components/Blog/ToTopButton";
// import ButtonPodrobnee from "../components/Cases/ButtonPodrobnee";
import BackButton from "../components/Blog/BackButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import logo1 from "../assets/img/Prime.png";
import logo2 from "../assets/img/Odil.png";
import logo4 from "../assets/img/uzi.png";
import logo3 from "../assets/img/Alisher.png";
import logo5 from "../assets/img/Akhmedov.png";
import {Helmet} from "react-helmet-async";
const images = [logo1, logo2, logo3, logo4, logo5]; //logo6,logo7

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {
  const { caseId } = useParams();
  const titleRef = useRef(null);
  const titleStatic1 = useRef(null);
  const titleStatic2 = useRef(null);
  const titleStatic3 = useRef(null);
  const titleZapros = useRef(null);
  const titleUl = useRef(null);

  const [titleInViewRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [static1InViewRef, static1InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [static2InViewRef, static2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [static3InViewRef, static3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [zaprosInViewRef, zaprosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ulInViewRef, ulInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    //анимация для сообщений ,которая срабатывает при скролле
    gsap.utils.toArray(".animated-block").forEach((block) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 150 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    if (titleInView && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          x: 150,
          y: 0,
          opacity: 0,
        },
        {
          duration: 5,
          x: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }
  }, [titleInView]);

  useEffect(() => {
    if (
      (static1InView || static2InView || static3InView) &&
      titleStatic1.current &&
      titleStatic2.current &&
      titleStatic3.current
    ) {
      gsap.fromTo(
        [titleStatic1.current, titleStatic2.current, titleStatic3.current],
        {
          y: 50,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.3, // Пауза между анимацией для каждого элемента в 0.3 секунды
        }
      );
    }
  }, [static1InView, static2InView, static3InView]);

  const isDesktop = window.innerWidth > 1024;
  useEffect(() => {
    //анимация "запрос"
    if (isDesktop && zaprosInView && titleZapros.current) {
      gsap.fromTo(
        titleZapros.current,
        {
          y: 150,
          opacity: 0,
        },
        {
          duration: 2.5,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }
    // eslint-disable-next-line
  }, [zaprosInView]);

  useEffect(() => {
    //анимация списка ul
    if (ulInView && titleUl.current) {
      gsap.fromTo(
        titleUl.current,
        {
          y: -150,
          opacity: 0,
        },
        {
          duration: 2.5,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }
  }, [ulInView]);

  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>{t(`cases-seo-title${caseId}`)}</title>
        <meta name="description" content={t(`cases-seo-description${caseId}`)} />
      </Helmet>
      <div>
        {/* будет кнопка назад */}
        <div className="mt-[120px] mb-[30px] lg:mt-[110px] lg:mb-[51px] 3xl:ml-[9%]">
          <BackButton />
        </div>
        <div className="mx-[10px] lg:mx-[80px] 2xl:max-w-[1185px] 2xl:mx-auto">
          <div className="mx-auto flex h-auto flex-col bg-button-color text-white rounded-[26px] p-[14px] shadow-lg w-64 m:w-4/5 lg:flex-row lg:w-full lg:items-center lg:justify-between lg:min-h-[277px] lg:p-[26px] 2xl:max-w-[1185px] 2xl:mt-[20px]">
            {/* Левая колонка с логотипом */}
            <div className="flex items-center justify-center h-auto mb-4 lg:mb-0">
              <img
                src={images[caseId - 1]}
                className="w-full rounded-[22px] lg:w-[320px] lg:h-[220px]"
                alt="social-icon"
              />
            </div>
            {/* Правая колонка с текстом и показателями */}
            <div className="lg:space-y-0 lg:flex lg:space-x-8 lg:w-3/4 lg:flex-col">
              <h2
                ref={(el) => {
                  titleRef.current = el;
                  titleInViewRef(el);
                }}
                className="text-center text-xl font-semibold mb-4 mt-2 m:text-2xl md:mt-6 md:mb-8 md:text-3xl lg:text-[29px] lg:mb-[65px] xl:text-[35px] 2xl:text-[40px]"
              >
                {t(`cases-plan-title${caseId}`)}
              </h2>
              <div className="flex flex-col space-y-8 s:mx-[2.2%] xs:mx-[5.2%] lg:mx-[0%] lg:flex-row lg:space-y-0 lg:space-x-8 lg:justify-around">
                <div
                  ref={(el) => {
                    titleStatic1.current = el;
                    static1InViewRef(el);
                  }}
                  className="flex justify-between gap-x-3 items-center flex-row lg:gap-x-0 lg:gap-y-4 lg:flex-col-reverse"
                >
                  <span className="text-[17px] m:text-[18px] md:text-2xl">
                    {t(`cases-plan-application${caseId}`)}
                  </span>
                  <span className="font-bold text-3xl m:text-4xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[48px]">
                    {t(`cases-plan-application-count${caseId}`)}
                  </span>
                </div>
                <div
                  ref={(el) => {
                    titleStatic2.current = el;
                    static2InViewRef(el);
                  }}
                  className="flex justify-between gap-x-8 items-center lg:gap-x-0 lg:gap-y-4 lg:flex-col-reverse"
                >
                  <span className="text-[17px] m:text-[18px] md:text-2xl lg:ml-0">
                    {t(`cases-plan-ROI${caseId}`)}
                  </span>
                  <span className="font-bold text-3xl m:text-4xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[48px]">
                    {t(`cases-plan-ROI-count${caseId}`)}
                  </span>
                </div>
                <div
                  ref={(el) => {
                    titleStatic3.current = el;
                    static3InViewRef(el);
                  }}
                  className="flex justify-between gap-x-8 items-center lg:gap-x-0 lg:gap-y-3 lg:flex-col-reverse"
                >
                  <span className="text-[17px] m:text-[18px] md:text-2xl">
                    {t(`cases-plan-client${caseId}`)}
                  </span>
                  <span className="font-bold text-3xl m:text-4xl md:text-3xl lg:mr-0 lg:text-4xl xl:text-[40px] 2xl:text-[48px]">
                    {t(`cases-plan-client-count${caseId}`)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-uslugi-text inline-block mt-10 sm:mx-[15px]">
            <span className=" block font-semibold text-3xl mb-[7px] s:text-4xl lg:mb-[15px]">
              {t(`cases-about-client-title${caseId}`)}
            </span>
            <span className="block text-[17px] sm:text-[18px]">
              {t(`cases-about-client-subtitle${caseId}`)}
            </span>
          </div>

        <div className="mb-[51px] mt-[21px] flex justify-end ">
        </div>

          <div className="flex flex-col gradient-item-cases rounded-[30px] border-item-cases p-8 shadow-md items-center mx-auto min-h-[343px] sm:w-4/5 sm:flex-row sm:justify-between sm:items-center sm:min-h-[250px] lg:flex lg:w-full lg:justify-between lg:min-h-[250px] 2xl:max-w-[1185px]">
            <div
              ref={(el) => {
                titleZapros.current = el;
                zaprosInViewRef(el);
              }}
              className="text-uslugi-text flex flex-col items-center sm:items-start sm:justify-around lg:flex-1 lg:ml-8"
            >
              <h2 className="text-[35px] font-bold mb-4 sm:text-[30px] sm:mb-0 lg:text-[35px] lg:mb-0 lg:ml-[30%] 2xl:text-[43px]">
                {t(`cases-requests-title`)}
              </h2>
            </div>
            <div className="mt-4 sm:mt-0 relative sm:block sm:ml-8 lg:flex-1 lg:flex ">
              <ul
                ref={(el) => {
                  titleUl.current = el;
                  ulInViewRef(el);
                }}
                className=" list-disc  text-[24px] font-normal leading-[48px] list-inside  sm:text-[23px] sm:leading-[40px] sm:ml-8 sm:mt-0 lg:ml-0 lg:mt-0 lg:text-[24px] lg:leading-[48px]"
              >
                <li>{t(`cases-request${caseId}-1`)}</li>
                <li>{t(`cases-request${caseId}-2`)}</li>
                <li>{t(`cases-request${caseId}-3`)}</li>
              </ul>
            </div>
          </div>

          <div className=" lg:grid lg:grid-cols-[30%_1fr]">
            <div>
              <a
                target="_blank"
                href={t(`cases-link${caseId}`)}
                className="resultk rounded-[20px] min-h-[105px] min-w-[290px] border-[1px] flex justify-center items-center border-uslugi-text p-4 font-semibold text-cases-text text-[36px] mt-[54px] text-center s:max-w-[350px] mx-auto lg:text-[33px] lg:max-h-[125px] lg:max-w-[370px] 2xl:min-h-[120px] hover:text-footer-icon transition duration-300 ease-in-out"
              >
                <button className="w-full h-full">
                  {t(`cases-results-title`)}
                </button>
              </a>
              {/*будет 1 колонка для грида при десктоп */}
              <div className="hidden w-full mb-14 lg:block">
                <img
                  src={logo_big_upside_down}
                  alt="logo_big"
                  className="mt-[41px] mx-auto "
                />
              </div>
            </div>

            <div>
              {" "}
              {/*будет 2 колонка для грида при десктоп */}
              <div className="relative mt-[48px] w-full lg:mt-[100px]">
                {/* левая полоса */}
                <div className="absolute left-0 ml-[2%] m:ml-[3%] l:ml-[3.5%] s:ml-[4%] xs:ml-[4.6%] xxs:ml-[5%] sm:ml-[6%] md:ml-[6.2%]">
                  <div className="flex mt-[50px] justify-center items-center min-h-full">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative flex flex-col gap-[190px] items-center lg:gap-[185px]">
                        {/* <div className="relative w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[55px] lg:h-[55px]"></div>
                      <div className="relative w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[55px] lg:h-[55px]"></div>
                      <div className="relative w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[55px] lg:h-[55px]"></div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* правый контейнер с сообщ */}
                <div className="relative flex flex-col items-end md:w-11/5 lg:w-10/12 lg:ml-[15%] 2xl:ml-[0%] 2xl:w-full">
                  {["", "", ""].map((item, index) => {
                    return (
                      <>
                        <div className="relative animated-block py-[15px] rounded-[12px] min-h-[147px] w-11/12 bg-footer-icon lg:bg-keys_item-bg p-1 2xl:py-[25px] 2xl:px-[20px] 2xl:max-w-[700px] flex items-center">
                          <div className="absolute left-[-6.3%] m:left-[-5.6%] l:left-[-5.5%] s:left-[-4.9%] xs:left-[-3.9%] xxs:left-[-3.5%] sm:left-[-2.9%] md:left-[-2.3%] lg:left-[-15%] top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[55px] lg:h-[55px]"></div>
                          <div className="ml-[36px] lg:ml-[10px]">
                            <span className="text-[17px] text-white font-medium l:text-[18px] sm:text-[19px] 2xl:text-[24px]">
                              {t(`cases-results-card${index + 1}-title${caseId}`)}
                            </span>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: t(
                                  `cases-results-card${index + 1
                                  }-subtitle${caseId}`
                                ),
                              }}
                              className="text-[13px] text-white mt-[5px] font-normal l:mt-[15px] sm:text-[15px] 2xl:text-[19px]"
                            >
                              { }
                            </p>
                          </div>
                        </div>
                        <div className="my-[21px] flex justify-end">
                          {/* <ButtonPodrobnee /> */}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {/* Конец полосы с мессендж */}
              <div className="w-full mb-14 lg:hidden">
                <img src={logoresbig} alt="logo_big" className="my-0 mx-auto" />
              </div>
            </div>
          </div>

          <div className="statistics w-full flex self-center items-center justify-center content-center">
            <SwiperCases caseId={caseId} />
          </div>
        </div>
        <div className="mb-[50px] mt-[60px] lg:mb-[30px] 3xl:ml-[9%]">
          <ToTopButton />
        </div>
      </div>
    </>
  );
};

export default Cases;
