import React, { useState } from "react";
import { Link } from "react-router";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+234 (0) 123 456 7890",
      href: "tel:+2341234567890",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "hello@nigeriakitchen.com",
      href: "mailto:hello@nigeriakitchen.com",
    },
    {
      icon: "📍",
      label: "Address",
      value: "123 Culinary Lane, Lagos, Nigeria",
      href: null,
    },
    {
      icon: "⏰",
      label: "Hours",
      value: "Mon-Sun, 10:00 AM - 10:00 PM",
      href: null,
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
                Get in Touch
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl text-stone-900 sm:mt-6">
                Contact Us
              </h1>
            </div>

            <p className="max-w-3xl mx-auto text-base font-light leading-relaxed text-stone-700 sm:text-lg md:text-xl">
              We'd love to hear from you. Whether you have a question about our
              menu, want to make a reservation, or just want to say hello, feel
              free to reach out. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="flex justify-center w-full px-4 py-16 bg-white sm:px-6 lg:px-8 sm:py-20 md:py-24">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all duration-300 shadow-md bg-stone-50 rounded-2xl hover:shadow-lg hover:-translate-y-1 sm:p-8"
              >
                <div className="mb-4 text-5xl sm:text-6xl">{info.icon}</div>
                <h3 className="mb-2 text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-base font-light break-all transition-colors duration-300 text-stone-700 hover:text-sage-600 sm:text-base"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-base font-light text-stone-700 sm:text-base">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="flex justify-center w-full px-4 py-16 sm:px-6 lg:px-8 sm:py-20 md:py-24 bg-stone-200">
        <div className="w-full max-w-6xl">
          <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8 space-y-6 sm:space-y-8">
                <div>
                  <span className="text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base md:text-lg">
                    Send us a Message
                  </span>
                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900">
                    We're Listening
                  </h2>
                </div>
                <p className="text-base font-light leading-relaxed text-stone-600 sm:text-lg">
                  Have a question or feedback? Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>
              </div>

              {submitted && (
                <div className="p-4 mb-6 border-2 rounded-xl bg-sage-50 border-sage-200 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-2xl">✓</span>
                    <div>
                      <h3 className="font-semibold text-sage-900 sm:text-lg">
                        Message Sent Successfully!
                      </h3>
                      <p className="mt-1 text-sm text-sage-700 sm:text-base">
                        Thank you for reaching out. We'll respond to your
                        message within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-stone-900 sm:text-base"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-5 py-3 text-base transition-all duration-300 bg-white border-2 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none sm:py-4 sm:text-base ${
                      errors.fullName
                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-stone-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-100"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600 sm:text-base">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-stone-900 sm:text-base"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-5 py-3 text-base transition-all duration-300 bg-white border-2 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none sm:py-4 sm:text-base ${
                      errors.email
                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-stone-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-100"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 sm:text-base">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-stone-900 sm:text-base"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-5 py-3 text-base transition-all duration-300 bg-white border-2 rounded-xl text-stone-900 placeholder-stone-400 border-stone-200 focus:outline-none focus:border-sage-600 focus:ring-2 focus:ring-sage-100 sm:py-4 sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-stone-900 sm:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows="5"
                    className={`w-full px-5 py-3 text-base transition-all duration-300 bg-white border-2 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none resize-none sm:py-4 sm:text-base ${
                      errors.message
                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-stone-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-100"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 sm:text-base">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 shadow-lg sm:py-5 bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="relative hidden lg:block">
              <div className="sticky top-32">
                <div className="relative overflow-hidden shadow-lg rounded-2xl aspect-square bg-linear-to-br from-stone-300 to-stone-400">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 bg-opacity-90">
                    <div className="mb-4 text-6xl">📍</div>
                    <h3 className="mb-2 text-lg font-semibold text-stone-900">
                      Find Us on the Map
                    </h3>
                    <p className="max-w-xs mb-6 text-sm text-center text-stone-600">
                      123 Culinary Lane
                      <br />
                      Lagos, Nigeria
                    </p>
                    <button className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-sage-600 hover:bg-sage-700 hover:shadow-lg">
                      Open in Maps
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute w-32 h-32 rounded-lg opacity-20 -top-10 -right-10 bg-sage-300"></div>
                <div className="absolute w-24 h-24 rounded-lg opacity-15 -bottom-5 -left-5 bg-amber-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center w-full px-4 py-16 bg-white sm:px-6 lg:px-8 sm:py-20 md:py-24">
        <div className="w-full max-w-4xl">
          <div className="p-8 space-y-6 text-center shadow-lg bg-stone-50 rounded-2xl sm:p-12 md:p-16 sm:space-y-8">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-stone-900">
              Can't Wait to Connect?
            </h2>
            <p className="max-w-2xl mx-auto text-base font-light leading-relaxed text-stone-600 sm:text-lg">
              Call us directly or stop by during our operating hours. We're
              always happy to chat about food and take care of your needs.
            </p>

            <div className="flex flex-col justify-center gap-3 pt-4 xs:flex-row sm:gap-4">
              <a
                href="tel:+2341234567890"
                className="px-8 py-4 text-sm font-medium text-white transition-all duration-300 shadow-lg sm:px-10 sm:py-5 bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
              >
                Call Us
              </a>
              <Link
                to="/menu"
                className="px-8 py-4 text-sm font-medium transition-all duration-300 border-2 sm:px-10 sm:py-5 border-stone-200 text-stone-700 hover:bg-white sm:text-base rounded-xl hover:shadow-lg hover:-translate-y-1"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
