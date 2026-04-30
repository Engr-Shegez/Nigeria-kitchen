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
    (dish) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === dish.id);

        if (existingItem) {
          showToast(`${dish.name} quantity updated`);
          return prevItems.map((item) =>
            item.id === dish.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        showToast(`${dish.name} added to order`);
        return [
          ...prevItems,
          {
            id: dish.id,
            name: dish.name,
            category: dish.category,
            price: dish.price,
            quantity: 1,
            image: dish.image,
          },
        ];
      });
      setIsCartOpen(true);
    },
    [showToast],
  );

  const removeFromCart = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
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
