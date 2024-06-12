import React, { useRef, useEffect } from 'react';
import Monitor from "../../assets/img/monitor.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from 'gsap';

const MainArticle = () => {
  const { t } = useTranslation();

  const articles = [{}, {}, {}];

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      if (image) {
        const handleMouseEnter = () => {
          gsap.to(image, { scale: 1.2, duration: 0.3 });
        };
        const handleMouseLeave = () => {
          gsap.to(image, { scale: 1, duration: 0.3 });
        };

        image.addEventListener('mouseenter', handleMouseEnter);
        image.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function to remove event listeners
        return () => {
          image.removeEventListener('mouseenter', handleMouseEnter);
          image.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <div className="lg:mt-[3rem] mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] 3xl:max-w-[1500px] 3xl:mx-auto mt-8">
      <h2 className="text-[28px] sm:text-[32px] 2xl:text-[64px] font-semibold text-center mb-4 sm:text-left">
        {t("new-articles-title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[0.625rem] gap-x-5">
        {articles.map((article, index) => (
          <div key={index} className="text-white">
            <Link onClick={() => toTop()} to={`/blog/${index + 1}`} className="block">
              <div className="p-4 bg-blog-themeBg rounded-[14.32px] lg:rounded-3xl cursor-pointer">
                <div className="w-full h-auto mb-5 flex items-center justify-center">
                  <img
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={Monitor}
                    alt="monitor"
                  />
                </div>
                <div>
                  <div className="h-[5rem] 2xl:h-[10rem] mb-4">
                    <div className="text-[18px] 2xl:text-[28px] 2xl:h-[10rem] font-medium overflow-y-hidden">
                      {t(`new-articles-card${index + 1}-theme`)}
                    </div>
                  </div>
                  <button className="text-[15px] 2xl:text-[22px] font-medium border-[1px] 2xl:mb-4 border-white text-white bg-transparent py-1 px-8 rounded-full">
                    {t(`new-articles-card${index + 1}-group`)}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainArticle;
