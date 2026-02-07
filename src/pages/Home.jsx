import React from "react";
import { Link } from "react-router";
import moimoi from "../assets/moimoi.jpg";

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Jollof Rice",
      description: "Perfectly seasoned aromatic rice with a golden crust",
      image: moimoi,
    },
    {
      id: 2,
      name: "Pepper Soup",
      description: "Traditional rich broth with tender meat and spices",
      image: "🍲",
    },
    {
      id: 3,
      name: "Suya",
      description: "Grilled protein with our signature peanut spice blend",
      image: "🔥",
    },
    {
      id: 4,
      name: "Suya",
      description: "Grilled protein with our signature peanut spice blend",
      image: "🔥",
    },
    {
      id: 5,
      name: "Suya",
      description: "Grilled protein with our signature peanut spice blend",
      image: "🔥",
    },
    {
      id: 6,
      name: "Suya",
      description: "Grilled protein with our signature peanut spice blend",
      image: "🔥",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen sm:h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 md:pt-20 px-4 sm:px-0">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-linear-to-br from-stone-900 via-stone-800 to-stone-900"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(132, 126, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(101, 135, 105, 0.1) 0%, transparent 50%)",
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-linear-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="mb-4 sm:mb-6 inline-block">
            <span className="text-black font-extrbold tracking-widest uppercase text-xl sm:text-xl">
              Culinary Excellence
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text- mb-4 sm:mb-6 leading-tight tracking-tight">
            Savage Kitchen
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-stone-400 mb-8 sm:mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Authentic Nigerian cuisine crafted with passion, tradition, and
            contemporary finesse
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center pt-7">
            <Link
              to="/menu"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-sage-600 hover:bg-sage-700 text-white font-medium text-sm sm:text-base transition-all duration-300  rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Menu
            </Link>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-stone-200 text-stone-700 hover:bg-white hover:text-stone-700 font-medium text-sm sm:text-base transition-all duration-300 rounded-xl backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
              Book a Table
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-stone-300">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center pt-2 animate-bounce">
              <div className="w-1 h-2 bg-stone-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="w-full bg-linear-to-b from-stone-50 to-white flex justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center py-10 mb-12 sm:mb-16">
            <span className="text-sage-600 font-light tracking-widest uppercase text-xl sm:text-xl ">
              Culinary Artistry
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900 mt-5 sm:mt-4 mb-4">
              Featured Dishes
            </h2>
            <span className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto text-center font-light ">
              Experience our most celebrated creations, each thoughtfully
              prepared
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100"
              >
                <div
                  className="h-40 sm:h-48 bg-linear
                -to-br from-stone-200 to-stone-300 flex items-center justify-center text-5xl sm:text-7xl overflow-hidden relative"
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {dish.image}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                    {dish.description}
                  </p>
                  <button className="mt-4 sm:mt-6 text-sage-600 hover:text-sage-700 font-medium text-sm sm:text-base transition-colors duration-300 flex items-center gap-2 group/btn">
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Philosophy Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden flex justify-center">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-sage-50 rounded-full -mr-32 sm:-mr-48 -mt-32 sm:-mt-48 opacity-60"></div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-sage-600 font-light tracking-widest uppercase text-xs sm:text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-900 mt-2 sm:mt-4">
                  Chef's Philosophy
                </h2>
              </div>

              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                At Savage Kitchen, we believe in honoring traditional Nigerian
                culinary heritage while embracing contemporary techniques. Each
                dish tells a story of passion, precision, and respect for
                ingredients.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Farm-to-table sourcing of premium ingredients",
                  "Techniques refined through generations",
                  "Contemporary presentation, authentic flavors",
                  "Sustainable and ethical kitchen practices",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 sm:gap-4 items-start">
                    <div className="w-2 h-2 bg-sage-600 rounded-full mt-2 shrink-0"></div>
                    <span className="text-stone-600 font-light text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className=" mt-2 sm:mt-4 text-sage-600 hover:text-sage-700 font-medium text-sm sm:text-base transition-colors duration-300 flex items-center gap-2 group/btn"
              >
                Read Our Full Story
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="aspect-square bg-linear-to-br from-stone-200 to-stone-300 rounded-lg flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl shadow-xl">
                👨‍🍳
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-32 sm:w-48 h-32 sm:h-48 bg-sage-100 rounded-lg opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-linear-to-r from-sage-700 to-sage-600 relative overflow-hidden flex justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-stone-800 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6">
            Experience Excellence
          </h2>
          <p className="text-base sm:text-lg text-sage-50 mb-8 sm:mb-12 font-light max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Reserve your table
            today and discover why we're the destination for authentic Nigerian
            cuisine.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-sage-700 hover:bg-stone-50 font-medium text-sm sm:text-base transition-all duration-300 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1">
              Book Now
            </button>
            <Link
              to="/menu"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-sage-700 font-medium text-sm sm:text-base transition-all duration-300 rounded-md hover:shadow-xl hover:-translate-y-1"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-200 py-12 sm:py-16 px-4 sm:px-6 md:px-8 flex justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12 w-full">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4">
              Savage Kitchen
            </h3>
            <p className="text-stone-400 font-light text-sm sm:text-base">
              Authentic Nigerian cuisine, crafted with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Navigation
            </h4>
            <nav className="space-y-2 sm:space-y-3 flex flex-col">
              <Link
                to="/"
                className="text-stone-400 hover:text-sage-400 font-light text-sm sm:text-base transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-stone-400 hover:text-sage-400 font-light text-sm sm:text-base transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-stone-400 hover:text-sage-400 font-light text-sm sm:text-base transition-colors"
              >
                About
              </Link>
              <Link
                to="/order"
                className="text-stone-400 hover:text-sage-400 font-light text-sm sm:text-base transition-colors"
              >
                Order
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-3 font-light text-stone-400 text-xs sm:text-sm md:text-base">
              <p>📞 (555) 123-4567</p>
              <p>📧 hello@savagekitchen.com</p>
              <p>📍 Lagos, Nigeria</p>
              <p className="pt-2 text-xs">Open Daily: 12PM - 11PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Follow Us
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sage-600 transition-colors duration-300 flex items-center justify-center text-sm font-light"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs sm:text-sm font-light gap-4 md:gap-0">
            <p>&copy; 2024 Savage Kitchen. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <button className="hover:text-sage-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-sage-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
