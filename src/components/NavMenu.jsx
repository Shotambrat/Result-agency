import React from "react";
import { NavLink } from "react-router-dom";
import FooterSocial from "./FooterSocial";
import logoBack from "../assets/img/logoBackButton.svg";

export default function NavMenu({ isNavOpen, setIsNavOpen }) {
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={
        isNavOpen
          ? "grid grid-col-1 justify-center w-full xxs:w-[65%] sm:w-[55%] md:w-[50%] h-screen fixed z-[100] top-0 right-0 bg-white lg:hidden"
          : "absolute right-[-100%]"
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
        О нас
      </NavLink>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center text-[24px]"
      >
        Услуги
      </NavLink>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center text-[24px]"
      >
        Наши кейсы
      </NavLink>
      <NavLink
        onClick={() => {
          setIsNavOpen((prew) => !prew);
          toTop();
        }}
        to="/"
        className="text-center text-[24px]"
      >
        Контакты
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
