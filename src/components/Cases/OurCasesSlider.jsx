import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import zaglushkaslider from "../../assets/img/zaglushka_slider.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';





const SwiperCases = () => {
    return (
      <div className="w-full max-w-lg  mx-auto mt-5 relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          modules={[Pagination, Autoplay]}
          pagination={{
            el: '.swiper-pagination-custom  ',
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="flex justify-center"
        >
          <SwiperSlide>
            <img src={zaglushkaslider} alt="slider-icon" className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={zaglushkaslider} alt="slider-icon" className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={zaglushkaslider} alt="slider-icon" className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={zaglushkaslider} alt="slider-icon" className="mx-auto"/>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-custom w-24 mt-[10px] h-4 rounded-full inline-block mx-auto mt-4 flex justify-center "></div>
      </div>
    );
  };

export default SwiperCases;