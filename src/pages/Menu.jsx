import React, { useState, useMemo, useContext } from "react";
import { allDishes, categories } from "../data/dishes";
import { CartContext } from "../context/CartContext";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, toast } = useContext(CartContext);

  // Filter dishes based on category and search query
  const filteredDishes = useMemo(() => {
    return allDishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" || dish.category === activeCategory;
      const matchesSearch = dish.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed z-50 transition-all duration-300 ease-out transform -translate-x-1/2 top-24 left-1/2">
          <div className="flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg bg-sage-600 sm:px-8 sm:py-4 animate-pulse">
            <span className="text-lg">✓</span>
            <span className="text-sm font-medium sm:text-base">
              {toast.message}
            </span>
          </div>
        </div>
      )}

      {/* Page Header */}
      <section className="flex justify-center w-full px-10 pb-12 pt-28 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase pt-14 text-sage-600 sm:text-base md:text-lg">
            Discover
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl text-stone-900 sm:mt-6">
            Our Menu
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-base font-light leading-relaxed text-stone-900 sm:text-lg md:text-2xl sm:mt-6">
            Explore our carefully curated selection of authentic Nigerian
            dishes, each prepared with passion and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="flex justify-center w-full px-4 pb-6 sm:px-6 lg:px-2">
        <div className="w-full max-w-6xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your favorite dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 m-0 text-base transition-all duration-300 bg-white border-2 rounded-2xl text-stone-900 placeholder-stone-400 border-stone-200 focus:outline-none focus:border-sage-600 focus:ring-2 focus:ring-sage-100 sm:py-5 sm:text-lg"
            />
            <svg
              className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="flex justify-center w-full px-4 pb-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="flex gap-2 pb-0 overflow-x-auto sm:gap-3 sm:flex-wrap sm:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 py-2 font-medium text-xs whitespace-nowrap transition-all duration-300 rounded-full sm:px-5 sm:py-3 sm:text-sm lg:px-7 lg:py-3 lg:text-base ${
                  activeCategory === category
                    ? "bg-sage-600 text-white shadow-lg hover:shadow-xl hover:bg-sage-700"
                    : "bg-white text-stone-700 border-2 border-stone-200 hover:border-sage-300 hover:bg-stone-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="flex justify-center w-full px-4 pb-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="overflow-hidden transition-all duration-500 bg-white shadow-md rounded-2xl group hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Dish Image */}
                  <div className="relative flex items-center justify-center h-56 overflow-hidden bg-linear-to-br from-stone-100 to-stone-200 sm:h-64">
                    {typeof dish.image === "string" &&
                    dish.image.length <= 3 ? (
                      <span className="transition-transform duration-500 text-7xl group-hover:scale-110 sm:text-8xl">
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

                  {/* Dish Info */}
                  <div className="p-6 sm:p-8">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-sage-50 text-sage-600">
                        {dish.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="mb-2 text-xl font-semibold text-stone-900 sm:text-2xl line-clamp-2">
                      {dish.name}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-stone-600 line-clamp-2 sm:text-base">
                      {dish.description}
                    </p>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-2xl font-bold text-sage-600 sm:text-3xl">
                        ₦{dish.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(dish)}
                        className="px-5 py-3 text-sm font-medium text-white transition-all duration-300 bg-sage-600 hover:bg-sage-700 rounded-xl hover:shadow-lg hover:-translate-y-1 sm:px-3 sm:py-2 sm:text-base"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-2xl font-semibold text-stone-900">
                No dishes found
              </h3>
              <p className="max-w-md text-base text-stone-600">
                We couldn't find any dishes matching your search. Try a
                different search term or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center w-full px-4 py-16 bg-linear-to-r from-sage-600 to-sage-700 sm:px-6 lg:px-8 sm:py-20">
        <div className="w-full max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-red sm:text-3xl md:text-4xl sm:mb-6">
            Questions About Your Order?
          </h2>
          <p className="mb-8 text-base text-sage-50 sm:text-lg sm:mb-10">
            Our team is here to help you choose the perfect meal or answer any
            dietary questions.
          </p>
          <button className="px-8 py-4 font-bold text-center transition-all duration-300 bg-amber-950 text-blue-50 hover:bg-sage-50 rounded-xl hover:shadow-lg hover:-translate-y-1 hover:bg-amber-900 hover:text-gray-50 sm:px-10 sm:py-4 sm:text-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
