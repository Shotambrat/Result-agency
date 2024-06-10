import React from "react";
import { NavLink } from "react-router-dom";
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
      className={
        isNavOpen
          ? "grid grid-col-1 justify-center w-full xxs:w-[65%] sm:w-[55%] md:w-[50%] h-screen fixed z-[100] top-0 right-0 bg-white lg:hidden"
          : "hidden"
      }
    >
      <div
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        className="absolute top-2 right-2"
      >
        <img src={logoBack} alt="close" className="text-right w-12 h-12" />
      </div>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center mt-[6rem] text-[24px]"
      >
        {t("header-aboutUs")}
      </NavLink>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center text-[24px]"
      >
        {t("header-services")}
      </NavLink>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center text-[24px]"
      >
        {t("header-cases")}
      </NavLink>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center text-[24px]"
      >
        {t("header-contacts")}
      </NavLink>
      <a href="Tel:+998900228073" className="text-center text-[24px]">
        +998900228073
      </a>
      <div className="flex gap-x-10 m:gap-12 l:gap-16">
        <FooterSocial />
      </div>
    </div>
  );
}
