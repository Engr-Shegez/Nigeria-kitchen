import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Logo = ({ onNavigate }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 sm:gap-2 group pl-4 sm:pl-8"
      onClick={onNavigate}
    >
      <img
        src={logo}
        alt="Savage Kitchen Logo"
        className="h-8 sm:h-15 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default Logo;
