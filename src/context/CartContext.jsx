import React, { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  // Show toast notification
  const showToast = useCallback((message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  }, []);

  // Add item to cart
  const addToCart = useCallback(
    (dish) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === dish.id);

        if (existingItem) {
          // If item already exists, increase quantity
          showToast(`${dish.name} quantity updated!`);
          return prevItems.map((item) =>
            item.id === dish.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        } else {
          // Add new item with quantity 1
          showToast(`${dish.name} order placed!`);
          return [
            ...prevItems,
            {
              id: dish.id,
              name: dish.name,
              price: dish.price,
              quantity: 1,
              image: dish.image,
            },
          ];
        }
      });
    },
    [showToast],
  );

  // Update item quantity
  const updateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      );
    }
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Get cart count
  const getCartCount = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount,
    toast,
    showToast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
