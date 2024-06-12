import React, { useEffect } from "react";

const ScrollToTopButton = () => {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scrollToTopButton"
      title="Go to top"
      onClick={scrollToTop}
      className="hidden fixed bottom-5 right-5 z-50 bg-keys_item-bg text-white p-3 rounded-full shadow-lg hover:bg-button-color"
    >
      Вверх
    </button>
  );
};

export default ScrollToTopButton;