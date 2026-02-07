import React from "react";
import { Link } from "react-router";

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-stone-200 hover:text-sage-400 font-bold transition-colors duration-300 relative group text-sm lg:text-base"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default NavLink;
