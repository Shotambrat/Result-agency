import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import Prime1 from "../../assets/img/Slider/Prime1.png";
import Prime2 from "../../assets/img/Slider/Prime2.png";
import Prime3 from "../../assets/img/Slider/Prime3.png";
import Odil1 from "../../assets/img/Slider/Odil1.png";
import Odil2 from "../../assets/img/Slider/Odil2.png";
import Alisher1 from "../../assets/img/Slider/Alisher1.png";
import Alisher2 from "../../assets/img/Slider/Alisher2.png";
import Akhmedov1 from "../../assets/img/Slider/Akhmedov_slider1.png";
import Akhmedov2 from "../../assets/img/Slider/Akhmedov_slider2.png";
import uzi1 from "../../assets/img/Slider/uzi1.png";
import uzi2 from "../../assets/img/Slider/uzi2.png";
import uzi3 from "../../assets/img/Slider/uzi3.png";

import imed1 from "../../assets/img/Slider/uzi3.png";
import imed2 from "../../assets/img/Slider/uzi3.png";

import mrj1 from "../../assets/img/Slider/uzi3.png";
import mrj2 from "../../assets/img/Slider/uzi3.png";

let images = [
  [Prime1, Prime2, Prime3],
  [Odil1, Odil2],
  [Alisher1, Alisher2],
  [uzi1, uzi2, uzi3],
  [Akhmedov1, Akhmedov2],
  [imed1, imed2],
  [mrj1, mrj2],
];

const SwiperCases = ({ caseId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full sm:w-10/12 xl:w-full mx-auto mt-5 relative ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="flex justify-center"
      >
        {images[caseId - 1].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`slider-icon-${index}`}
              className="mx-auto w-full sm:w-10/12 lg:w-[80%] xl:max-w-[925px]  rounded-[28px] cursor-pointer "
              onClick={() => handleOpenModal(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-custom w-24 h-4 rounded-full mx-auto mt-4 flex justify-center"></div>

      <div
        className="swiper-button-next lg:!flex !hidden items-center justify-center w-[60px] h-[60px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 70 70" fill="none">
          <circle cx="30" cy="30" r="30" fill="#7B72EB" fill-opacity="0.44"/>
          <path d="M22.897 12.1768C22.2499 12.8277 21.8867 13.7083 21.8867 14.6262C21.8867 15.544 22.2499 16.4246 22.897 17.0755L35.1959 29.5481L22.897 41.847C22.2499 42.498 21.8867 43.3785 21.8867 44.2964C21.8867 45.2142 22.2499 46.0948 22.897 46.7458C23.22 47.0714 23.6042 47.3299 24.0276 47.5062C24.451 47.6826 24.9051 47.7734 25.3637 47.7734C25.8224 47.7734 26.2765 47.6826 26.6999 47.5062C27.1232 47.3299 27.5075 47.0714 27.8305 46.7458L42.5614 32.0149C42.887 31.6919 43.1455 31.3076 43.3218 30.8843C43.4982 30.4609 43.589 30.0068 43.589 29.5481C43.589 29.0895 43.4982 28.6354 43.3218 28.212C43.1455 27.7886 42.887 27.4044 42.5614 27.0814L27.8305 12.1768C27.5075 11.8512 27.1232 11.5927 26.6999 11.4163C26.2765 11.2399 25.8224 11.1491 25.3637 11.1491C24.9051 11.1491 24.451 11.2399 24.0276 11.4163C23.6042 11.5927 23.22 11.8512 22.897 12.1768Z" fill="white"/>
          </svg>
      </div>
      <div
        className="swiper-button-prev lg:!flex !hidden items-center justify-center w-[60px] h-[60px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 70 70" fill="none">
          <circle cx="30" cy="30" r="30" fill="#7B72EB" fill-opacity="0.44"/>
          <path d="M37.103 12.044C37.7501 12.6949 38.1133 13.5755 38.1133 14.4933C38.1133 15.4112 37.7501 16.2918 37.103 16.9427L24.8041 29.4153L37.103 41.7142C37.7501 42.3652 38.1133 43.2457 38.1133 44.1636C38.1133 45.0814 37.7501 45.962 37.103 46.6129C36.78 46.9386 36.3958 47.197 35.9724 47.3734C35.549 47.5498 35.0949 47.6406 34.6363 47.6406C34.1776 47.6406 33.7235 47.5498 33.3001 47.3734C32.8768 47.197 32.4925 46.9386 32.1695 46.6129L17.4386 31.8821C17.113 31.5591 16.8545 31.1748 16.6782 30.7514C16.5018 30.3281 16.411 29.874 16.411 29.4153C16.411 28.9567 16.5018 28.5026 16.6782 28.0792C16.8545 27.6558 17.113 27.2716 17.4386 26.9486L32.1695 12.044C32.4925 11.7184 32.8768 11.4599 33.3001 11.2835C33.7235 11.1071 34.1776 11.0163 34.6363 11.0163C35.0949 11.0163 35.549 11.1071 35.9724 11.2835C36.3958 11.4599 36.78 11.7184 37.103 12.044Z" fill="white"/>
        </svg>
        
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white p-5 rounded-lg lg:px-[40px]"
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper>
              <TransformComponent>
                <img
                  src={selectedImage}
                  alt="Full-screen"
                  className="modal-image max-w-[100%] h-auto"
                />
              </TransformComponent>
            </TransformWrapper>
            <button
              className="absolute top-2 right-3 bg-transparent border-none text-2xl cursor-pointer lg:top-4 lg:right-5"
              onClick={handleCloseModal}
            >
              <svg
                className="w-[12px] h-[14]px lg:w-[18px] lg:h-[21]px"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3065 20.0503C18.1227 19.3752 18.2278 18.1742 17.5412 17.3678L11.5168 10.2916L17.3537 3.43576C18.0403 2.62928 17.9352 1.42829 17.119 0.753268C16.3028 0.0782508 15.0845 0.184825 14.3979 0.991309L8.9984 7.33352L3.59668 0.988723C2.91007 0.182239 1.69179 0.0756651 0.875577 0.750682C0.0593646 1.4257 -0.0456994 2.62669 0.640911 3.43318L6.47996 10.2916L0.453411 17.3703C-0.233199 18.1768 -0.128135 19.3778 0.688077 20.0528C1.50429 20.7279 2.72257 20.6213 3.40918 19.8148L8.9984 13.2498L14.5854 19.8122C15.272 20.6187 16.4903 20.7253 17.3065 20.0503Z"
                  fill="black"
                  fill-opacity="0.61"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperCases;
