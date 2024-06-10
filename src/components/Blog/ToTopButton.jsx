import React from "react";

export default function ToTopButton() {
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      onClick={() => toTop()}
      className="ml-4 sm:ml-10 md:ml-16 lg:ml-10 xl:ml-16 2xl:ml-20 border-2 border-header-text border-solid py-1 px-10 font-normal text-[20px] rounded-[30px] cursor-pointer"
    >
      наверх
    </button>
  );
}
