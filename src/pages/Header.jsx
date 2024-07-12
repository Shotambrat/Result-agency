import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "./../assets/img/logo.png";
import Menu from "./../assets/img/menu.svg";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FlagRus from "./../assets/img/FlagRus.png";
import FlagUz from "./../assets/img/FlagUz.png";
import i18n from "i18next";
import cookies from "js-cookie";

const Header = ({ handleOpen }) => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const menuRef = useRef(null);
  const activeLanguageRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      activeLanguageRef.current &&
      !activeLanguageRef.current.contains(event.target)
    ) {
      setOpenLanguage(false);
    }
  };

  const currentLanguage = cookies.get("i18next") || "ru";

  function handleChangeLanguage() {
    const newLanguage = currentLanguage === "ru" ? "uz" : "ru";
    i18n.changeLanguage(newLanguage);
    cookies.set("i18next", newLanguage);

    const newPath = `/${newLanguage}${location.pathname.replace(/^\/(ru|uz)/, '')}`;
    navigate(newPath, { replace: true });

    setOpenLanguage(false);
  }

  const [scrollTimeout, setScrollTimeout] = useState(null);
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        gsap.to(".header", { y: 0, opacity: 1, duration: 0.5 });
        if (scrollTimeout) clearTimeout(scrollTimeout);
      } else {
        if (scrollTimeout) clearTimeout(scrollTimeout);

        gsap.to(".header", { y: -100, opacity: 0, duration: 0.5 });

        const timeout = setTimeout(() => {
          gsap.to(".header", { y: 0, opacity: 1, duration: 0.5 });
        }, 2000);
        setScrollTimeout(timeout);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header w-[100vw] h-[60px] lg:h-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg fixed top-0 z-20 py-0 lg:py-3 3xl:py-0">
      <div className="lg:max-w-7xl mx-auto px-[0.625rem] sm:px-6 lg:px-[3rem]">
        <div className="flex items-center content-center justify-between h-16 3xl:h-24">
          <NavLink to={`/${currentLanguage}`} className="flex items-center" onClick={toTop}>
            <div className="flex-shrink-0">
              <img
                className="w-[5.45rem] h-[3.125rem] xs:w-[7.5rem] xs:h-[4rem] lg:h-[94px] lg:w-[169px]"
                src={Logo}
                alt="Логотип"
              />
            </div>
          </NavLink>
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-4">
              {(location.pathname === "/cases" ||
                location.pathname === "/Cases" ||
                location.pathname.includes("/blog")) && (
                  <NavLink
                    to={`/${currentLanguage}`}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-aboutUs")}
                  </NavLink>
                )}
              {location.pathname === `/${currentLanguage}` && (
                <div>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-services")}
                  </ScrollLink>
                  <ScrollLink
                    to="cases"
                    smooth={true}
                    duration={500}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-cases")}
                  </ScrollLink>
                  <ScrollLink
                    to="blog"
                    smooth={true}
                    duration={500}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-blog")}
                  </ScrollLink>
                </div>
              )}
              {location.pathname.includes("/cases") && (
                <div>
                  <ScrollLink
                    to="resultk"
                    smooth={true}
                    duration={500}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-result")}
                  </ScrollLink>
                  <ScrollLink
                    to="statistics"
                    smooth={true}
                    duration={500}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-statistics")}
                  </ScrollLink>
                </div>
              )}
              {location.pathname.includes("/blog") && (
                <div>
                  <ScrollLink
                    to="conclusion"
                    smooth={true}
                    duration={500}
                    className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
                  >
                    {t("header-сonclusion")}
                  </ScrollLink>
                </div>
              )}
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={500}
                className="text-header-text hover:text-blue-700 px-3 py-2 rounded-md text-sm xl:text-lg font-medium cursor-pointer"
              >
                {t("header-contacts")}
              </ScrollLink>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6 xl:text-lg">
            <h1 className="hidden md:block">
              <a href="Tel:+998900228073">+998900228073</a>
            </h1>
            <div
              className="flex content-center ml-[1.1rem]"
              id="container-language"
            >
              <div className="flex self-center items-start relative">
                <button
                  onClick={() => setOpenLanguage((prev) => !prev)}
                  className="flex items-center border-[1px] border-solid border-[#191359] rounded-[48px] pl-4 pr-2 h-6 md:py-1 transition duration-300"
                  ref={activeLanguageRef}
                >
                  <p className="text-[#191359] text-[11px] font-light xs:text-[12px] md:text-[14px]">
                    {currentLanguage === "ru" ? "Русский" : "O'zbekcha"}
                  </p>
                  <img
                    src={currentLanguage === "ru" ? FlagRus : FlagUz}
                    alt="language flag"
                    className="pl-2 w-7 h-auto"
                  />
                </button>
                <div
                  ref={menuRef}
                  className={`absolute w-full bottom-[-100%] text-start pl-2 border-[1px] border-solid border-cases-border rounded-[48px] overflow-hidden transition-all duration-300 ease-in-out transform ${openLanguage
                      ? "max-h-20 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 translate-y-[-10px]"
                    }`}
                >
                  <button
                    onClick={handleChangeLanguage}
                    className="w-full flex items-center justify-evenly h-6"
                  >
                    <p className="text-[#191359] text-[11px] font-light xs:text-[12px] md:text-[14px]">
                      {currentLanguage !== "ru" ? "Русский" : "O'zbekcha"}
                    </p>
                    <img
                      src={currentLanguage !== "ru" ? FlagRus : FlagUz}
                      alt="language flag"
                      className=" w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
              <button
                onClick={handleOpen}
                className="ml-2 md:ml-4 lg:hidden"
              >
                <img src={Menu} alt="Menu icon" className="w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;