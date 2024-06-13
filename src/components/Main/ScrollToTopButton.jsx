import React, { useEffect } from "react";

const ScrollToTopButton = () => {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
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
      className="fixed bottom-5 right-5 z-50 bg-keys_item-bg text-white p-3 rounded-full shadow-lg hover:bg-button-color flex items-center justify-center w-12 h-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
