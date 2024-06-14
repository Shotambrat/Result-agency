import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import zaglushkaslider from "../../assets/img/zaglushka_slider.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

let data = [
  
]

const SwiperCases = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsZoomed(false); // Reset zoom state when closing
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
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
        {[
          zaglushkaslider,
          zaglushkaslider,
          zaglushkaslider,
          zaglushkaslider,
        ].map((image, index) => (
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
      <div className="swiper-pagination-custom w-24 mt-[10px] h-4 rounded-full inline-block mx-auto mt-4 flex justify-center"></div>

      <div
        className="swiper-button-next lg:!flex !hidden items-center justify-center"
        style={navButtonStyle}
      ></div>
      <div
        className="swiper-button-prev lg:!flex !hidden items-center justify-center"
        style={navButtonStyle}
      ></div>

      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full-screen"
              className={`modal-image ${isZoomed ? "zoomed" : ""}`}
              onClick={toggleZoom}
            />
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
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
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  color: "#fff",
};

export default SwiperCases;
