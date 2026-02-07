import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
