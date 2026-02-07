import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const About = () => {
  const values = [
    {
      icon: "🌾",
      title: "Quality Ingredients",
      description:
        "We source only the finest, freshest ingredients to honor authentic Nigerian culinary traditions.",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Craft",
      description:
        "Our experienced chefs blend traditional techniques with contemporary finesse to create unforgettable dishes.",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description:
        "Every dish is prepared with passion and care, reflecting our commitment to culinary excellence.",
    },
    {
      icon: "🌍",
      title: "Authentic Heritage",
      description:
        "We celebrate the rich flavors and cultural significance of Nigerian cuisine in every plate.",
    },
  ];

  const whyChooseUs = [
    {
      number: "01",
      title: "Authentic Flavors",
      description:
        "Traditional recipes passed down through generations, now reimagined for modern palates.",
    },
    {
      number: "02",
      title: "Fresh Daily",
      description:
        "We prepare everything fresh to order, ensuring maximum flavor and nutritional value.",
    },
    {
      number: "03",
      title: "Exceptional Service",
      description:
        "Prompt, friendly service that makes you feel welcomed and valued every single time.",
    },
    {
      number: "04",
      title: "Community First",
      description:
        "We believe in building lasting relationships with our customers and supporting our community.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Hero Section */}
      <section className="flex justify-center w-full px-4 pb-16 pt-28 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="space-y-6 text-center md:space-y-8">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base md:text-lg">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl text-stone-900 sm:mt-6">
                About Us
              </h1>
            </div>

            <p className="max-w-3xl mx-auto text-base font-light leading-relaxed text-stone-700 sm:text-lg md:text-xl">
              We're passionate about bringing the authentic taste of Nigeria to
              your table, crafted with pride, tradition, and a modern touch.
            </p>

            <div className="flex justify-center gap-3 pt-4 xs:flex-row sm:gap-4">
              <Link
                to="/menu"
                className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 shadow-lg sm:px-8 sm:py-4 bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
              >
                Explore Menu
              </Link>
              <button className="px-6 py-3 text-sm font-medium transition-all duration-300 border-2 sm:px-8 sm:py-4 border-stone-200 text-stone-700 hover:bg-white hover:text-stone-700 sm:text-base rounded-xl backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="flex justify-center w-full px-4 py-16 bg-white sm:px-6 lg:px-8 sm:py-20 md:py-24">
        <div className="w-full max-w-6xl">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base md:text-lg">
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900">
                  Our Journey
                </h2>
              </div>

              <p className="text-base font-light leading-relaxed text-stone-600 sm:text-lg md:text-lg">
                Nigeria Kitchen was born from a simple belief: that authentic
                Nigerian cuisine deserves to be celebrated and shared with
                everyone who appreciates great food. Our founders, deeply rooted
                in Nigerian culinary heritage, set out to create a space where
                tradition meets innovation.
              </p>

              <p className="text-base font-light leading-relaxed text-stone-600 sm:text-lg md:text-lg">
                Every dish on our menu tells a story—of generations of family
                recipes, of markets bustling with fresh produce, and of the
                warmth and generosity that defines Nigerian hospitality. We're
                not just serving food; we're sharing a piece of our culture and
                our heart.
              </p>

              <p className="text-base font-light leading-relaxed text-stone-600 sm:text-lg md:text-lg">
                Today, we're proud to be a gathering place where food brings
                people together, memories are created, and the authentic flavors
                of Nigeria are experienced in all their glory.
              </p>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 pt-3 text-sm font-medium transition-colors duration-300 text-sage-600 hover:text-sage-700 sm:text-base group/btn"
              >
                View Our Full Menu
                <span className="transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden shadow-xl aspect-square bg-linear-to-br from-sage-100 to-stone-200 rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl bg-sage-50">
                  <img
                    src={logo}
                    alt="Savage Kitchen Logo"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute w-24 h-24 rounded-lg opacity-70 -bottom-4 -right-4 sm:w-32 sm:h-32 bg-sage-300"></div>
              <div className="absolute w-20 h-20 rounded-lg opacity-60 -top-3 -left-3 sm:w-28 sm:h-28 bg-amber-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex justify-center w-full px-4 py-16 sm:px-6 lg:px-8 sm:py-20 md:py-24">
        <div className="w-full max-w-6xl">
          <div className="mb-12 space-y-4 text-center sm:space-y-6 sm:mb-16 md:mb-20">
            <span className="text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base md:text-lg">
              Our Values
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900">
              What Drives Us
            </h2>
            <p className="max-w-2xl mx-auto text-base font-light leading-relaxed text-stone-600 sm:text-lg">
              Four core principles guide everything we do, from sourcing
              ingredients to serving each guest.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg hover:-translate-y-1 sm:p-8"
              >
                <div className="mb-4 text-5xl sm:text-6xl">{value.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-stone-900 sm:text-xl">
                  {value.title}
                </h3>
                <p className="text-base font-light leading-relaxed text-stone-600 sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex justify-center w-full px-4 py-16 bg-white sm:px-6 lg:px-8 sm:py-20 md:py-24">
        <div className="w-full max-w-6xl">
          <div className="mb-12 space-y-4 text-center sm:space-y-6 sm:mb-16 md:mb-20">
            <span className="text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base md:text-lg">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900">
              The Difference We Make
            </h2>
            <p className="max-w-2xl mx-auto text-base font-light leading-relaxed text-stone-600 sm:text-lg">
              Here's what sets us apart and why thousands of customers return to
              us.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full sm:w-20 sm:h-20 bg-sage-100">
                    <span className="text-2xl font-bold sm:text-3xl text-sage-600">
                      {item.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-stone-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex justify-center w-full px-4 py-16 sm:px-6 lg:px-8 sm:py-20 md:py-24 bg-stone-200">
        <div className="w-full max-w-4xl">
          <div className="p-8 space-y-6 text-center bg-white shadow-lg rounded-2xl sm:p-12 md:p-16 sm:space-y-8">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900">
              Ready to Experience the Taste?
            </h2>
            <p className="max-w-2xl mx-auto text-base font-light leading-relaxed text-stone-600 sm:text-lg">
              Join our community and discover why we're the preferred choice for
              authentic Nigerian cuisine. Your next favorite meal awaits.
            </p>

            <div className="flex flex-col justify-center gap-3 pt-4 xs:flex-row sm:gap-4">
              <Link
                to="/menu"
                className="px-8 py-4 text-sm font-medium text-white transition-all duration-300 shadow-lg sm:px-10 sm:py-5 bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
              >
                Browse Menu
              </Link>
              <button className="px-8 py-4 text-sm font-medium transition-all duration-300 border-2 sm:px-10 sm:py-5 border-stone-200 text-stone-700 hover:bg-stone-50 sm:text-base rounded-xl hover:shadow-lg hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="flex justify-center w-full px-4 py-12 bg-white sm:px-6 lg:px-8 sm:py-16">
        <div className="w-full max-w-6xl">
          <div className="space-y-4 text-center">
            <p className="text-sm font-light text-stone-600 sm:text-base">
              Have questions?{" "}
              <span className="font-semibold text-sage-600">
                hello@nigeriakitchen.com
              </span>
            </p>
            <p className="text-xs text-stone-500 sm:text-sm">
              Open: Monday - Sunday, 10:00 AM - 10:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
