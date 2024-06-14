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
import Xayrillo from "../../assets/img/Slider/Xayrillo.png";
import uzi1 from "../../assets/img/Slider/uzi1.png";
import uzi2 from "../../assets/img/Slider/uzi2.png";
import uzi3 from "../../assets/img/Slider/uzi3.png";

let images = [
  [Prime1, Prime2, Prime3],
  [Odil1, Odil2],
  [Alisher1, Alisher2],
  [uzi1, uzi2, uzi3],
  [Xayrillo],
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
    <div className="w-full sm:w-10/12 xl:w-full mx-auto mt-5 relative">
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
              className="mx-auto w-full sm:w-10/12 xl:max-w-[1025px] rounded-[28px] cursor-pointer"
              onClick={() => handleOpenModal(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-custom w-24 h-4 rounded-full mx-auto mt-4 flex justify-center"></div>

      <div
        className="swiper-button-next lg:!flex !hidden items-center justify-center"
        style={navButtonStyle}
      >
        {/* <img src="" alt="button next" /> */}
      </div>
      <div
        className="swiper-button-prev lg:!flex !hidden items-center justify-center"
        style={navButtonStyle}
      >
        {/* <img src="" alt="button next" /> */}
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <TransformWrapper>
              <TransformComponent>
                <img
                  src={selectedImage}
                  alt="Full-screen"
                  className="modal-image"
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

const navButtonStyle = {
  width: "50px",
  height: "50px",
  backgroundColor: "#7B72EB",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "white",
  padding: '8px!important'
};

export default SwiperCases;
