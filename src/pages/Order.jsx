import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/CartContext";

const Order = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const DELIVERY_FEE = 500;

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + DELIVERY_FEE;

  // Handle delivery info changes
  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({
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

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!deliveryInfo.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!deliveryInfo.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(deliveryInfo.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!deliveryInfo.deliveryAddress.trim()) {
      newErrors.deliveryAddress = "Delivery address is required";
    } else if (deliveryInfo.deliveryAddress.trim().length < 10) {
      newErrors.deliveryAddress = "Please enter a complete address";
    }

    return newErrors;
  };

  // Handle order submission
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate order processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would typically send the order to a backend
      alert(
        `Order placed successfully!\n\nOrder for ${deliveryInfo.fullName}\nTotal: ₦${total.toLocaleString()}\n\nDelivering to: ${deliveryInfo.deliveryAddress}`,
      );
      // Reset the form
      setDeliveryInfo({
        fullName: "",
        phoneNumber: "",
        deliveryAddress: "",
      });
    }, 1500);
  };

  // Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-stone-200 pt-28">
        <div className="w-full max-w-2xl text-center">
          <div className="mb-6 text-6xl">🛒</div>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-stone-900">
            Your Cart is Empty
          </h1>
          <p className="mb-8 text-base text-stone-600 sm:text-lg">
            Looks like you haven't added any items yet. Browse our menu and add
            your favorite dishes!
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-4 text-sm font-medium text-white transition-all duration-300 shadow-lg bg-sage-600 hover:bg-sage-700 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Page Header */}
      <section className="flex justify-center w-full px-4 pb-12 pt-28 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-sage-600 sm:text-base md:text-lg">
            Review & Confirm
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl text-stone-900 sm:mt-6">
            Your Order
          </h1>
          <span className="max-w-2xl mx-auto mt-4 text-base font-light leading-relaxed text-stone-600 sm:text-lg md:text-xl sm:mt-6">
            Review your items, enter delivery details, and complete your order.
          </span>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex justify-center w-full px-4 pb-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Order Summary - Left Column */}
            <div className="space-y-6 lg:col-span-2 sm:space-y-8">
              {/* Order Items Section */}
              <div className="p-6 space-y-4 bg-white shadow-md rounded-2xl sm:p-8 sm:space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                    Order Items
                  </h2>
                  <p className="mt-1 text-sm text-stone-500 sm:text-base">
                    {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}{" "}
                    in your order
                  </p>
                </div>

                <div className="border-t border-stone-200"></div>

                {/* Cart Items */}
                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b border-stone-100 last:border-b-0 sm:gap-6 sm:pb-6"
                    >
                      {/* Item Image */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-20 h-20 overflow-hidden text-3xl rounded-lg bg-stone-100 sm:w-24 sm:h-24 sm:text-4xl">
                          {typeof item.image === "string" &&
                          item.image.length <= 3 ? (
                            <span className="text-3xl transition-transform duration-500 sm:text-4xl">
                              {item.image}
                            </span>
                          ) : (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                          )}
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-base font-semibold text-stone-900 sm:text-lg">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-sage-600 sm:text-base">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex flex-col items-end justify-between">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2 p-1 rounded-lg bg-stone-100 sm:gap-3 sm:p-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex items-center justify-center w-6 h-6 transition-colors duration-200 rounded text-stone-600 hover:bg-stone-200 sm:w-8 sm:h-8"
                          >
                            −
                          </button>
                          <span className="w-6 text-sm font-medium text-center text-stone-900 sm:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex items-center justify-center w-6 h-6 transition-colors duration-200 rounded text-stone-600 hover:bg-stone-200 sm:w-8 sm:h-8"
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <p className="text-base font-bold text-stone-900 sm:text-lg">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-1 text-xs text-red-600 transition-colors duration-200 hover:text-red-700 sm:text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Details Section */}
              <div className="p-6 space-y-4 bg-white shadow-md rounded-2xl sm:p-8 sm:space-y-6">
                <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                  Delivery Details
                </h2>

                <div className="border-t border-stone-200"></div>

                {/* Delivery Form */}
                <form
                  onSubmit={handlePlaceOrder}
                  className="space-y-4 sm:space-y-6"
                >
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
                      value={deliveryInfo.fullName}
                      onChange={handleDeliveryChange}
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

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-stone-900 sm:text-base"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={deliveryInfo.phoneNumber}
                      onChange={handleDeliveryChange}
                      placeholder="+234 (0) 123 456 7890"
                      className={`w-full px-5 py-3 text-base transition-all duration-300 bg-white border-2 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none sm:py-4 sm:text-base ${
                        errors.phoneNumber
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-stone-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-100"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-2 text-sm text-red-600 sm:text-base">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label
                      htmlFor="deliveryAddress"
                      className="block mb-2 text-sm font-medium text-stone-900 sm:text-base"
                    >
                      Delivery Address
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={deliveryInfo.deliveryAddress}
                      onChange={handleDeliveryChange}
                      placeholder="Enter your complete delivery address..."
                      rows="4"
                      className={`w-full px-5 py-3 text-base transition-all duration-300 bg-white border-2 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none resize-none sm:py-4 sm:text-base ${
                        errors.deliveryAddress
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-stone-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-100"
                      }`}
                    />
                    {errors.deliveryAddress && (
                      <p className="mt-2 text-sm text-red-600 sm:text-base">
                        {errors.deliveryAddress}
                      </p>
                    )}
                  </div>

                  {/* Continue Button on Mobile */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 shadow-lg lg:hidden bg-sage-600 hover:bg-sage-700 disabled:bg-stone-400 disabled:cursor-not-allowed sm:py-5 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1 disabled:hover:translate-y-0"
                  >
                    {isProcessing ? "Processing..." : "Continue to Payment"}
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary Sidebar - Right Column */}
            <div className="lg:col-span-1">
              <div className="sticky p-6 space-y-6 bg-white shadow-md rounded-2xl sm:p-8 sm:space-y-8 top-28">
                <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                  Order Summary
                </h2>

                <div className="border-t border-stone-200"></div>

                {/* Pricing Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-stone-600">Subtotal</span>
                    <span className="font-medium text-stone-900">
                      ₦{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-light text-stone-600">
                      Delivery Fee
                    </span>
                    <span className="font-medium text-stone-900">
                      ₦{DELIVERY_FEE.toLocaleString()}
                    </span>
                  </div>

                  <div className="border-t border-stone-200"></div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-stone-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-sage-600">
                      ₦{total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="hidden w-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 shadow-lg lg:block bg-sage-600 hover:bg-sage-700 disabled:bg-stone-400 disabled:cursor-not-allowed sm:py-5 sm:text-base rounded-xl hover:shadow-xl hover:-translate-y-1 disabled:hover:translate-y-0"
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </button>

                {/* Info Box */}
                <div className="p-4 border-2 rounded-xl bg-sage-50 border-sage-200">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 text-xl">✓</span>
                    <div>
                      <p className="text-sm font-medium text-sage-900">
                        Secure Checkout
                      </p>
                      <p className="mt-1 text-xs text-sage-700">
                        Your information is safe and encrypted.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Continue Shopping Link */}
                <Link
                  to="/menu"
                  className="flex items-center justify-center gap-2 pt-3 text-sm font-medium transition-colors duration-300 text-sage-600 hover:text-sage-700 sm:text-base"
                >
                  Continue Shopping
                  <span className="transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
