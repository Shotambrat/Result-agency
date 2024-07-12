import React from 'react'
import dnkLeft from "../assets/img/DNK.png";
import dnkRight from "../assets/img/DnkRight.png";
export default function FixedBackground() {
  return (
    <div
      className="blur-xl w-full h-screen fixed flex justify-center items-center bg-cover bg-center overflow-hidden mb-8 lg:mb-12 -z-10"
    >
      <div className="3xl:max-w-[1500px] 3xl:mx-auto">
        <div className="z-[0]">
          <img
            src={dnkLeft}
            alt="DNK"
            className="dnk-left transition-all duration-300 absolute bottom-[70%] right-[37%] md:bottom-[33%] md:right-[40%] lg:bottom-[25%] lg:right-[50%] xl:bottom-[15%] xl:right-[45%] 2xl:bottom-[7%] 3xl:right-[45%] z-[0]"
          />
          <img
            src={dnkRight}
            alt="DNK"
            className="absolute top-[58%] left-[50%] xs:top-[42%] sm:top-[22%] md:top-[15%] md:left-[50%] lg:top-[5%] lg:left-[45%] xl:top-[-5%] 2xl:top-[-15%] z-[0]"
          />
        </div>
      </div>
    </div>
  )
}
