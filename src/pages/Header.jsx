import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "./../assets/img/logo.png";
import { Link } from 'react-scroll';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);


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
    <header className="header bg-white bg-opacity-30 backdrop-filter backdrop-blur-3xl w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img class="h-[94] w-[169]" src={Logo} alt="Логотип" />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isNavOpen ? (
                  // XIcon
                  <div className="block h-6 w-6" />
                ) : (
                  // MenuIcon
                  <div className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div className={`${isNavOpen ? "block" : "hidden"} md:block`}>
            <div className="flex items-baseline space-x-4">
              <Link
                
                to="home" smooth={true} duration={500}
                class="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                О нас
              </Link>
              <Link
                to="services" smooth={true} duration={500}
                class="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Услуги
              </Link>
              <Link
                to="cases" smooth={true} duration={500}
                class="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Наши кейсы
              </Link>
              <Link
               to="contacts" smooth={true} duration={500}
                class="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Контакты
              </Link>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <h1>
                <a href="Tel:+998900228073">+998900228073</a>
              </h1>
              <div
                className="h-auto w-[100px] border border-red-500 border-solid"
                id="container-language"
              >
                {/* <LanguageSwitch /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
