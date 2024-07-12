import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const LanguageSwitch = () => {

  const switchRef = useRef(null); 

  useEffect(() => {
    const animate = gsap.timeline({ paused: true });
    const animateBackground = gsap.timeline({ paused: true });
    let toggle = true;

    animateBackground
      .to("body", 0.1, { backgroundImage: "none", backgroundColor: "#111" }, 0.2)
      .set(switchRef.current, { boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" })
      .to(".text p", 0.1, { color: "#FFF" }, 0.2);

    animate
      .to(".toggle-button", 0.2, { scale: 0.7 }, 0)
      .set(".toggle", { backgroundColor: "#FFF" })
      .set(".circle", { display: "none" })
      .to(".moon-mask", 0.2, { y: 20, x: -10 }, 0.2)
      .to(".toggle-button", 0.2, { y: 49 }, 0.2)
      .to(".toggle-button", 0.2, { scale: 0.9 });

    switchRef.current.addEventListener("click", () => {
      if (toggle) {
        animate.restart();
        animateBackground.restart();
      } else {
        animate.reverse();
        animateBackground.reverse();
      }
      toggle = !toggle;
    });

    // Очистка эффекта
    return () => {
      animate.kill();
      animateBackground.kill();
    };
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={switchRef} className="switch w-15 h-28 p-0.5 bg-gray-700 rounded-full cursor-pointer outline-none overflow-hidden shadow-md">
          <div className="toggle-button scale-80 origin-center">
            <div className="toggle relative w-9 h-9 m-3 bg-yellow-400 rounded-full"></div>
            <div className="moon-mask absolute w-9 h-9 m-[-4.5rem] mt-[-18.5rem] ml-8 bg-gray-700 rounded-full"></div>
            <div className="circles-wrapper">{/* Circle instances */}</div>
          </div>
        </div>
        <div className="text ml-1 text-5xl leading-tight font-bold">
          <p>n</p>
          <p>ff</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
