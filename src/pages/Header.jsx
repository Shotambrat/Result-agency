import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "./../assets/img/logo.png";
import LanLogo from "./../assets/img/Language icon.svg";
import Menu from "./../assets/img/menu.svg";
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header = ({ isNavOpen, setIsNavOpen }) => {
  const [scrollTimeout, setScrollTimeout] = useState(null);
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      // Отменяем предыдущий таймер, если он был установлен
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Скрываем шапку
      gsap.to(".header", { y: -100, opacity: 0, duration: 0.5 });

      // Устанавливаем таймер, чтобы показать шапку после 2 секунд бездействия
      const timeout = setTimeout(() => {
        gsap.to(".header", { y: 0, opacity: 1, duration: 0.5 });
      }, 1000);
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <header className="header w-[100vw] bg-white bg-opacity-30 backdrop-filter backdrop-blur-3xl fixed top-0 z-20 py-3 3xl:py-0">
      <div className=" lg:max-w-7xl mx-auto px-[0.625rem] sm:px-6 lg:px-[6.25rem]">
        <div className="flex items-center content-center justify-between h-16 3xl:h-24">
          <NavLink to="/" className="flex items-center" onClick={() => toTop()}>
            <div className="flex-shrink-0">
              <img
                className="w-[5.45rem] h-[3.125rem] xs:w-[7.5rem] xs:h-[4rem] lg:h-[94px] lg:w-[169px]"
                src={Logo}
                alt="Логотип"
              />
            </div>
          </NavLink>
          <div className={`hidden lg:block`}>
            <div className="flex items-baseline space-x-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
              >
                О нас
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
              >
                Услуги
              </Link>
              <Link
                to="cases"
                smooth={true}
                duration={500}
                className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
              >
                Наши кейсы
              </Link>
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
              >
                Контакты
              </Link>
            </div>
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6 xl:text-lg">
              <h1 className="hidden md:block">
                <a href="Tel:+998900228073">+998900228073</a>
              </h1>
              <div
                className="flex content-center ml-[1.1rem]"
                id="container-language"
              >
                <div className="flex self-center items-start relative">
                  <button className="flex items-center border-[1px] border-solid border-[#191359] rounded-[48px] pl-4 pr-2 h-6 md:py-1">
                    <p className="text-[#191359] text-[11px] font-light xs:text-[12px] md:text-[14px]">
                      Русский
                    </p>
                    <img src={LanLogo} alt="language icon" className="pl-2" />
                  </button>
                  <button className="w-full flex items-center bottom-[-100%] absolute text-start pl-2 border-[1px] border-solid border-cases-border rounded-[48px] h-6">
                    <p className="text-[#191359] text-[11px] font-light xs:text-[12px] md:text-[14px]">
                      O'zbekcha
                    </p>
                  </button>
                </div>
                <button

                  onClick={() => setIsNavOpen((prew) => !prew)}
                  className="ml-2 md:ml-4 lg:hidden"
                >
                  <img src={Menu} alt="Menu icon" className="w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
