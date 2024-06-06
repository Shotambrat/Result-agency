import React from "react";
import Insta from "../assets/img/insta-icon.svg";
import Teleramm from "../assets/img/telegram-icon.svg";
import Facebook from "../assets/img/facebook-icon.svg";

export default function FooterSocial() {
  return (
    <>
      <a
        href="#"
        className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex sm:col-span-2 lg:col-span-1 lg:order-9 mx-auto lg:mt-0"
      >
        <img src={Insta} alt="social-icon" />
      </a>
      <a
        href="#"
        className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex justify-center items-center lg:order-[10] sm:col-span-2 lg:col-span-1 mx-auto lg:mt-0"
      >
        <img src={Teleramm} alt="social-icon" />
      </a>
      <a
        href="#"
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
