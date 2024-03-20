import React from "react";
import Insta from '../assets/img/insta-icon.svg';
import Teleramm from '../assets/img/telegram-icon.svg';
import Facebook from '../assets/img/facebook-icon.svg';

const Footer = () => {
  return (
    <div
      className="h-[200px] flex justify-around"
      style={{
        background:
          "linear-gradient(to bottom right, #9F99E0 0%, #E8E6FE 14%, #EDEBFF 29%, #DDDAFA 43%, #FFFFFF 57%, #C6D6FF 74%, #F1F5FF 84%, #CEDCFF 100%)",
        color: "#333", // Пример цвета текста, может быть изменен
        padding: "20px", // Пример отступа, может быть изменен
        textAlign: "center", // Пример выравнивания текста, может быть изменен
      }}
    >
      {/* Содержимое футера */}
      <div className="text-start">
        <p className="my-6 font-bold text-[20px]">Ташкент, ул.Чинабад, 57</p>
        <p>© 2023 RESULT AGENCY - <br /> создание и продвижение медицинских сайтов</p>
      </div>
      <div className="flex flex-col mt-4">
        <a href="tel: +998900228073" className="text-[30px]">
          +998 (90) 022-80-73
        </a>
        <a href="tel: +998900228073" className="text-[30px]">
          +998 (90) 022-80-73
        </a>
        <p>Политика конфиденциальности</p>
      </div>
      <div className="flex justify-between w-1/3 mt-12">
        <a href="#" className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex">
          <img src={Insta} alt="social-icon" />
        </a>
        <a href="#" className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex justify-center items-center">
          <img src={Teleramm} alt="social-icon" />
        </a>
        <a href="#" className="bg-footer-icon h-[60px] w-[60px] rounded-[15px] flex justify-end items-end">
          <img src={Facebook} alt="social-icon" className="relative right-0 -bottom-[6px]"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
