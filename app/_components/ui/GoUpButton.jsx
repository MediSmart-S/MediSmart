"use client";

import { LuChevronUp } from "react-icons/lu";

const GoUpButton = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goTop}
      className="flex justify-center items-center w-10 h-10 font-medium text-white bg-primary-500 rounded-full hover:-translate-y-0.5 will-change-transform transition-all duration-200"
    >
      <LuChevronUp className="w-6 h-6" />
    </button>
  );
};

export default GoUpButton;
