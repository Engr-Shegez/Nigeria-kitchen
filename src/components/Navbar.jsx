import React, { useState } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b shadow-lg lg:h-25 bg-stone-900/80 backdrop-blur-md border-stone-800/50 ">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Logo onNavigate={closeMenu} />
          <DesktopNav />
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
        <MobileNav isOpen={isOpen} onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
