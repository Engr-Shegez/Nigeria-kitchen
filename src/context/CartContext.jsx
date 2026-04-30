import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CartContext } from "./cart-context";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("nigeria-kitchen-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  useEffect(() => {
    localStorage.setItem("nigeria-kitchen-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = useCallback((message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2200);
  }, []);

  const addToCart = useCallback(
    (dish, options = {}) => {
      const selectedAddOns = options.addOns || [];
      const spice = options.spice || "Regular";
      const addOnTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
      const unitPrice = dish.price + addOnTotal;
      const optionKey = selectedAddOns.map((addOn) => addOn.id).sort().join("-");
      const lineId = `${dish.id}__${spice}__${optionKey || "plain"}`;

      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => (item.lineId || item.id) === lineId);

        if (existingItem) {
          showToast(`${dish.name} quantity updated`);
          return prevItems.map((item) =>
            (item.lineId || item.id) === lineId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        showToast(`${dish.name} added to order`);
        return [
          ...prevItems,
          {
            id: dish.id,
            lineId,
            name: dish.name,
            category: dish.category,
            basePrice: dish.price,
            price: unitPrice,
            addOns: selectedAddOns,
            spice,
            quantity: 1,
            image: dish.image,
          },
        ];
      });
      setIsCartOpen(true);
    },
    [showToast],
  );

  const removeFromCart = useCallback((lineId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => (item.lineId || item.id) !== lineId),
    );
  }, []);

  const updateQuantity = useCallback((lineId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(lineId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.lineId || item.id) === lineId ? { ...item, quantity } : item,
      ),
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const value = useMemo(() => ({
    cartItems,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount,
    toast,
    showToast,
  }), [
    cartItems,
    subtotal,
    isCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount,
    toast,
    showToast,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
