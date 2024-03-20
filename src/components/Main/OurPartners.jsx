import React from 'react';
import Terra from '../../assets/img/terra-pro.png';
import Glotr from '../../assets/img/glotr-uz.png';
import YellowPages from '../../assets/img/yellow-pages.png';
import Intermed from '../../assets/img/intermed.png';
import Mexclusive from '../../assets/img/m-exclusive.png';
import PromUz from '../../assets/img/prom-uz.png';
import AptekaUz from '../../assets/img/apteka-uz.png';
import Serdsebiyenye from '../../assets/img/serdtsebiyeniye.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const OurPartners = () => {
    // Настройки для Slider
    const settings = {
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 900,
      cssEase: "linear",
      rtl: true, // Используем rtl для изменения направления прокрутки
    };
  
    return (
      <div>
        <h2 className="text-center text-uslugi-text text-5xl font-bold mb-8">
          Наши партнеры
        </h2>
        <Slider {...settings}>
          <div className='slide pr-12'><img src={Terra} alt="Terra" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={Glotr} alt="Glotr" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={YellowPages} alt="Yellow Pages" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={Intermed} alt="Intermed" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={Mexclusive} alt="Mexclusive" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={PromUz} alt="PromUz" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={AptekaUz} alt="AptekaUz" className="mx-auto" /></div>
          <div className='slide pr-12'><img src={Serdsebiyenye} alt="Serdsebiyenye" className="mx-auto" /></div>
        </Slider>
      </div>
    );
  }
  
  export default OurPartners;
