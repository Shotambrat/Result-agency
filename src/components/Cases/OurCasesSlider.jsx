import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import zaglushkaslider from "../../assets/img/zaglushka_slider.png";
import { Modal } from "react-responsive-modal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import "react-responsive-modal/styles.css";

const SwiperCases = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
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

      <Modal open={open} onClose={handleCloseModal} center>
        <img
          src={selectedImage}
          alt="Full-screen"
          className="w-full h-full object-contain"
        />
      </Modal>
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
