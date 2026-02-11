import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
// import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.jpg";

const Logo = ({ onNavigate }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 pt-2 pl-4 lg:pl-50 sm:gap-2 group sm:pl-8"
      onClick={onNavigate}
    >
      <img
        src={logo}
        alt="Savage Kitchen Logo"
        className="w-auto h-11 transition-transform duration-300 sm:h-20.5 group-hover:scale-105"
      />
    </Link>
  );
};

export default Logo;
