import React from "react";

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col gap-1.5 w-6 h-6 relative pr-5 sm:pr-8 pt-6"
    >
      <span
        className={`w-full h-0.5 bg-stone-300 transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`w-full h-0.5 bg-stone-300 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-full h-0.5 bg-stone-300 transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
};

export default MobileMenuButton;
