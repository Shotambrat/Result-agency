import React from "react";
import { NavLink } from 'react-router-dom';
import FooterSocial from "./FooterSocial";
import logoBack from "../assets/img/logoBackButton.svg";
import { useTranslation } from "react-i18next";

export default function NavMenu({ isNavOpen, setIsNavOpen }) {
  const { t } = useTranslation();

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    
<div
  className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 z-[100] ${
    isNavOpen ? "transform translate-x-0" : "transform translate-x-full"
  } w-full xxs:w-[65%] sm:w-[55%] md:w-[50%] lg:hidden flex flex-col items-center`}
>
      <div
        onClick={() => {
          setIsNavOpen((prev) => !prev);
        }}
        className="absolute top-4 right-4"
      >
        <img src={logoBack} alt="close" className="text-right w-12 h-12" />
      </div>
    <div className="max-h-full">
      <nav className="mt-20 flex flex-col items-center space-y-12 text-[24px] max-h-[571px] ">
        <NavLink
          onClick={() => {
            setIsNavOpen((prev) => !prev);
            toTop();
          }}
          to="/"
          smooth={true}
          duration={500}
        >
          {t("header-aboutUs")}
        </NavLink>
        <NavLink
          onClick={() => {
            setIsNavOpen((prev) => !prev);
            toTop();
          }}
            to="services"
        >
          {t("header-services")}
        </NavLink>
        <NavLink
          onClick={() => {
            setIsNavOpen((prev) => !prev);
            toTop();
          }}
          to="cases"
        >
          {t("header-cases")}
        </NavLink>
        <NavLink
          onClick={() => {
            setIsNavOpen((prev) => !prev);
            toTop();
          }}
          to="/"
        >
          {t("header-contacts")}
        </NavLink>
        <a href="Tel:+998900228073" className="text-center">
          +998900228073
        </a>
      </nav>
      <div className="flex justify-center gap-x-10 mt-12">
        <FooterSocial />
      </div>
    </div>
    </div>
  );
}
