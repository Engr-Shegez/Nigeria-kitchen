import React from "react";
import { Link } from "react-router";
import moimoi from "../assets/moimoi.jpg";
import seafood from "../assets/seafood.jpg";
import rice from "../assets/rice.jpg";
import chicken from "../assets/chicken.jpg";

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "MoiMoi",
      description:
        "Steamed bean pudding, delicately spiced and finished with a soft, savory richness.",
      image: moimoi,
    },
    {
      id: 2,
      name: "Grilled Chicken",
      description:
        "Tender, well-seasoned chicken cooked to juicy perfection with a rich, savory finish.",
      image: chicken,
    },
    {
      id: 3,
      name: "Jollof Rice",
      description:
        "Perfectly seasoned jollof rice slow-cooked in rich tomato sauce with a smoky finish.",
      image: rice,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden sm:h-screen pt-14 sm:pt-16 md:pt-20 sm:px-0">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-linear-to-br from-stone-800 via-stone-750 to-stone-900"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(132, 126, 110, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(101, 135, 105, 0.2) 0%, transparent 50%)",
          }}
        >
          <div className="absolute inset-0 opacity-45 bg-linear-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute rounded-full top-20 right-10 w-72 h-72 bg-sage-900 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute rounded-full -bottom-8 left-20 w-72 h-72 bg-amber-800 mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>

        {/* Hero Content */}
        {/* <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 md:px-8">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xl tracking-widest text-black uppercase font-extrbold sm:text-xl">
              Culinary Excellence
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-7xl text- sm:mb-6">
            Savage Kitchen
          </h1>

          <p className="max-w-2xl mx-auto mb-8 text-base font-light leading-relaxed sm:text-lg md:text-2xl text-stone-400 sm:mb-12">
            Authentic Nigerian cuisine crafted with passion, tradition, and
            contemporary finesse
          </p>

          <div className="flex flex-col justify-center gap-3 xs:flex-row sm:gap-4 pt-7">
            <Link
              to="/menu"
              className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 shadow-lg sm:px-8 sm:py-4 bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              View Menu
            </Link>
            <button className="px-6 py-3 text-sm font-medium transition-all duration-300 border-2 sm:px-8 sm:py-4 border-stone-200 text-stone-700 hover:bg-white hover:text-stone-700 sm:text-base rounded-xl backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
              Book a Table
            </button>
          </div>
        </div> */}
        <section className="relative flex justify-center px-4 py-16 overflow-hidden sm:py-20 md:py-24 sm:px-6 md:px-8">
          <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full sm:w-96 sm:h-96 bg-sage-50 sm:-mr-48 sm:-mt-48 opacity-60"></div>

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-8 sm:space-y-8">
                <div>
                  <span className="font-semibold tracking-widest uppercase text-sage-600 text-md sm:text-2xl">
                    Experience
                  </span>
                  <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900 sm:mt-4">
                    Culinary Comfort
                  </h2>
                </div>

                <p className="pt-3 font-mono text-base leading-relaxed text-stone-600 sm:text-lg">
                  Authentic Nigeria cuisine crafted with passion, tradition, and
                  contemporary finesse
                </p>

                <Link
                  to="/about"
                  className="flex items-center gap-2 pt-3 text-sm font-medium transition-colors duration-300 sm:mt-4 text-sage-600 hover:text-sage-700 sm:text-base group/btn"
                >
                  Read Our Full Story
                  <span className="transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
                <div className="flex justify-center gap-3 flex-roll xs:flex-row sm:gap-4 pt-7">
                  <Link
                    to="/menu"
                    className="px-6 py-3 text-sm font-medium text-center text-white transition-all duration-300 shadow-lg sm:px-15 sm:py-4 bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
                  >
                    View Menu
                  </Link>
                  <button className="px-6 py-3 text-sm font-medium transition-all duration-300 border-2 sm:px-15 sm:py-4 border-stone-200 text-stone-700 hover:bg-white hover:text-stone-700 sm:text-base rounded-xl backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
                    Book a Table
                  </button>
                </div>
              </div>
              <div className="absolute w-32 h-32 rounded-lg -bottom-4 sm:-top-5 lg:left-104 md:left-87 sm:right-6 sm:w-48 sm:h-48 bg-sage-400 opacity-95"></div>
              <div className="relative mt-8 md:mt-0">
                <div className="flex items-center justify-center overflow-hidden text-6xl shadow-xl aspect-square bg-linear-to-br from-stone-200 to-stone-300 rounded-xl sm:text-7xl md:text-8xl lg:text-9xl w-80 sm:w-96 md:w-md lg:w-xl">
                  <img
                    src={seafood}
                    alt="Our Philosophy"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute w-32 h-32 rounded-lg opacity-75 -bottom-4 sm:-bottom-6 -right-4 sm:-right-4 sm:w-48 sm:h-48 bg-sage-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute z-10 transform -translate-x-1/2 bottom-8 left-1/2">
          <div className="flex flex-col items-center gap-2 text-stone-300">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="flex justify-center w-6 h-10 pt-2 border-2 rounded-full border-stone-300 animate-bounce">
              <div className="w-1 h-2 rounded-full bg-stone-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="flex justify-center w-full bg-linear-to-b from-stone-200 to-white">
        <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="py-10 mb-12 text-center sm:mb-16">
            <span className="text-xl font-medium tracking-widest uppercase text-sage-600 sm:text-xl ">
              Culinary Artistry
            </span>
            <h2 className="mt-5 mb-4 text-3xl font-medium sm:text-4xl md:text-5xl text-stone-900 sm:mt-4">
              Featured Dishes
            </h2>
            <span className="max-w-2xl mx-auto text-base font-light text-center text-stone-600 sm:text-lg ">
              Experience our most celebrated creations, each thoughtfully
              prepared
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-12">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="overflow-hidden transition-all duration-500 bg-white border rounded-full shadow-md group hover:shadow-2xl hover:-translate-y-2 border-stone-100"
              >
                <div className="relative flex items-center justify-center h-56 overflow-hidden sm:h-64 md:h-72 bg-linear-to-br from-stone-200 to-stone-300">
                  {typeof dish.image === "string" && dish.image.length <= 3 ? (
                    <span className="text-7xl sm:text-8xl md:text-9xl">
                      {dish.image}
                    </span>
                  ) : (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-8 sm:p-10 md:p-12">
                  <h3 className="mb-3 text-2xl font-light sm:text-3xl md:text-4xl text-stone-900 md:mb-4">
                    {dish.name}
                  </h3>
                  <p className="mb-4 text-base font-light leading-relaxed text-stone-600 sm:text-lg md:text-lg">
                    {dish.description}
                  </p>
                  <button className="flex items-center gap-2 pl-5 mt-6 text-base font-medium transition-colors duration-300 sm:mt-8 md:mt-10 text-sage-600 hover:text-sage-700 sm:text-lg group/btn">
                    Learn More
                    <span className="transition-transform group-hover/btn:translate-x-1">
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
      <section className="relative flex justify-center px-4 py-16 overflow-hidden bg-white sm:py-20 md:py-24 sm:px-6 md:px-8">
        <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full sm:w-96 sm:h-96 bg-sage-50 sm:-mr-48 sm:-mt-48 opacity-60"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-xs font-light tracking-widest uppercase text-sage-600 sm:text-sm">
                  Our Story
                </span>
                <h2 className="mt-2 text-3xl font-light sm:text-4xl md:text-5xl text-stone-900 sm:mt-4">
                  Chef's Philosophy
                </h2>
              </div>

              <p className="text-base font-light leading-relaxed text-stone-600 sm:text-lg">
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
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 shrink-0"></div>
                    <span className="text-sm font-light text-stone-600 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="flex items-center gap-2 mt-2 text-sm font-medium transition-colors duration-300 sm:mt-4 text-sage-600 hover:text-sage-700 sm:text-base group/btn"
              >
                Read Our Full Story
                <span className="transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="flex items-center justify-center overflow-hidden text-6xl rounded-lg shadow-xl aspect-square bg-linear-to-br from-stone-200 to-stone-300 sm:text-7xl md:text-8xl lg:text-9xl">
                <img
                  src={moimoi}
                  alt="Our Philosophy"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute w-32 h-32 rounded-lg opacity-75 -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 sm:w-48 sm:h-48 bg-sage-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative flex justify-center px-4 py-16 overflow-hidden sm:py-20 md:py-24 sm:px-6 md:px-8 bg-linear-to-r from-sage-700 to-sage-600 ">
        <div className="absolute inset-0 opacity-10 ">
          <div className="absolute w-64 h-64 bg-white rounded-full top-20 left-10 filter blur-3xl "></div>
          <div className="absolute bottom-0 rounded-full right-20 w-96 h-96 bg-stone-800 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <h2 className="pb-5 mb-4 text-3xl font-light sm:text-4xl md:text-5xl text-stone-800 sm:mb-6">
            Experience Excellence
          </h2>
          <span className="max-w-2xl mx-auto mb-8 text-base font-medium sm:text-lg text-sage-700 sm:mb-12 pt-15">
            Join us for an unforgettable culinary journey. Reserve your table
            today and discover why we're the destination for authentic Nigerian
            cuisine.
          </span>

          <div className="flex flex-col justify-center gap-3 pt-5 xs:flex-row sm:gap-4">
            <button className="px-6 py-3 text-sm font-medium transition-all duration-300 bg-white rounded-md shadow-lg sm:px-8 sm:py-4 text-sage-700 hover:bg-stone-50 sm:text-base hover:shadow-xl hover:-translate-y-1">
              Book Now
            </button>
            <Link
              to="/menu"
              className="px-6 py-3 text-sm font-medium text-black transition-all duration-300 bg-green-800 border-2 border-white rounded-md sm:px-8 sm:py-4 hover:bg-white hover:text-sage-700 sm:text-base hover:shadow-xl hover:-translate-y-1"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-center px-4 py-12 bg-stone-900 text-stone-200 sm:py-16 sm:px-6 md:px-8">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mb-8 xs:grid-cols-2 md:grid-cols-4 sm:gap-12 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-xl font-light text-white sm:text-2xl sm:mb-4">
              Savage Kitchen
            </h3>
            <p className="text-sm font-light text-stone-400 sm:text-base">
              Authentic Nigerian cuisine, crafted with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white sm:mb-6 sm:text-base">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <Link
                to="/"
                className="text-sm font-light transition-colors text-stone-400 hover:text-sage-400 sm:text-base"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-sm font-light transition-colors text-stone-400 hover:text-sage-400 sm:text-base"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-sm font-light transition-colors text-stone-400 hover:text-sage-400 sm:text-base"
              >
                About
              </Link>
              <Link
                to="/order"
                className="text-sm font-light transition-colors text-stone-400 hover:text-sage-400 sm:text-base"
              >
                Order
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white sm:mb-6 sm:text-base">
              Contact
            </h4>
            <div className="space-y-2 text-xs font-light sm:space-y-3 text-stone-400 sm:text-sm md:text-base">
              <p>📞 (555) 123-4567</p>
              <p>📧 hello@savagekitchen.com</p>
              <p>📍 Lagos, Nigeria</p>
              <p className="pt-2 text-xs">Open Daily: 12PM - 11PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white sm:mb-6 sm:text-base">
              Follow Us
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <button
                  key={social}
                  className="flex items-center justify-center w-10 h-10 text-sm font-light transition-colors duration-300 rounded-full bg-stone-800 hover:bg-sage-600"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 border-t border-stone-800 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs font-light md:flex-row text-stone-400 sm:text-sm md:gap-0">
            <p>&copy; 2024 Savage Kitchen. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <button className="transition-colors hover:text-sage-400">
                Privacy Policy
              </button>
              <button className="transition-colors hover:text-sage-400">
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
