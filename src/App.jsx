import React from "react";
import { Route, Routes } from "react-router";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

const App = () => {
  return (
    <CartProvider>
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
