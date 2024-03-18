import React, { useState } from "react";
import Logo from "./../assets/img/logo.png";
import LanguageSwitch from "../components/LanguageSwitch";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navArr = ["О нас", "Услуги", "Наши кейсы", "Контакты"];

  return (
    <header className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-3xl w-full fixed top-0 z-10">
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
          {/* Навигационная панель для десктопных версий и скрытая на мобильных */}
          <div className={`${isNavOpen ? "block" : "hidden"} md:block`}>
            <div className="flex items-baseline space-x-4">
              {navArr.map((elem) => {
                return (
                  <a
                    href="#"
                    class="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {elem}
                  </a>
                );
              })}
            </div>
          </div>
          <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <h1>
                <a href="Tel:+998900228073">+998900228073</a>
            </h1>
            <div className="h-auto w-[100px] border border-red-500 border-solid" id="container-language">
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
