import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { useCart } from "../hooks/useCart";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("nigeria-kitchen-theme") || "light");
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nigeria-kitchen-theme", theme);
  }, [theme]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-mark" onClick={closeMenu}>
          <span>SK</span>
          <strong>Savage Kitchen</strong>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle color theme"
          >
            {theme === "light" ? "☾" : "☼"}
          </button>
          <button
            className="cart-button"
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open cart with ${cartCount} items`}
          >
            <span>Order</span>
            <strong>{cartCount}</strong>
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/order" onClick={closeMenu}>
          Checkout
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
