import React from "react";
import Insta from "../assets/img/insta-icon.svg";
import Teleramm from "../assets/img/telegram-icon.svg";
import Facebook from "../assets/img/facebook-icon.svg";

export default function FooterSocial({ isNavOpen, handleClose }) {
  return (
    <>
      <a
        onClick={() => {
          isNavOpen && handleClose();
        }}
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/result_med?igsh=MWhuZ21jODkzNjJwYg=="
        className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex sm:col-span-2 lg:col-span-1 lg:order-9 mx-auto lg:mt-0"
      >
        <img src={Insta} alt="social-icon" />
      </a>
      <a
        onClick={() => {
          isNavOpen && handleClose();
        }}
        target="_blank"
        rel="noreferrer"
        href="https://t.me/result_med"
        className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex justify-center items-center lg:order-[10] sm:col-span-2 lg:col-span-1 mx-auto lg:mt-0"
      >
        <img src={Teleramm} alt="social-icon" />
      </a>
      <a
        onClick={() => {
          isNavOpen && handleClose();
        }}
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/people/Result-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3/61551538436032/?locale=ru_RU"
        className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex justify-end items-end lg:order-[11] sm:col-span-2 lg:col-span-1 mx-auto lg:mt-0"
      >
        <img
          src={Facebook}
          alt="social-icon"
          className="relative right-0 -bottom-[6px]"
        />
      </a>
    </>
  );
}
