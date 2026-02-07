import React from "react";
import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-10 ml-8 text-lg ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/order">Order</NavLink>
      <button className="px-4 sm:px-6 py-2 bg-sage-600 hover:bg-sage-700 text-white font-light  rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
        Reserve
      </button>
    </div>
  );
};

export default DesktopNav;
