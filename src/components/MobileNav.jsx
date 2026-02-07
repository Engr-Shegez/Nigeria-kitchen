import React from "react";
import { Link } from "react-router";

const MobileNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4 space-y-1 border-t border-stone-800 pt-4">
      <Link
        to="/"
        className="block px-4 py-3 text-stone-300 hover:bg-stone-800/50 hover:text-sage-400 rounded-md transition-colors duration-300 font-light text-sm"
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        to="/menu"
        className="block px-4 py-3 text-stone-300 hover:bg-stone-800/50 hover:text-sage-400 rounded-md transition-colors duration-300 font-light text-sm"
        onClick={onClose}
      >
        Menu
      </Link>
      <Link
        to="/about"
        className="block px-4 py-3 text-stone-300 hover:bg-stone-800/50 hover:text-sage-400 rounded-md transition-colors duration-300 font-light text-sm"
        onClick={onClose}
      >
        About
      </Link>
      <Link
        to="/order"
        className="block px-4 py-3 text-stone-300 hover:bg-stone-800/50 hover:text-sage-400 rounded-md transition-colors duration-300 font-light text-sm"
        onClick={onClose}
      >
        Order
      </Link>
      <button className="w-full px-4 py-3 mt-2 bg-sage-600 hover:bg-sage-700 text-white font-light text-sm rounded-md transition-colors duration-300">
        Reserve
      </button>
    </div>
  );
};

export default MobileNav;
