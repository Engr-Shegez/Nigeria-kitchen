import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const CartDrawer = () => {
  const {
    cartItems,
    clearCart,
    isCartOpen,
    removeFromCart,
    setIsCartOpen,
    subtotal,
    updateQuantity,
  } = useCart();

  return (
    <>
      <div
        className={`cart-scrim ${isCartOpen ? "is-open" : ""}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${isCartOpen ? "is-open" : ""}`}
        aria-label="Order summary"
        aria-hidden={!isCartOpen}
      >
        <div className="cart-header">
          <div>
            <p className="eyebrow">Your Order</p>
            <h2>{cartItems.length ? `${cartItems.length} selected` : "Cart is empty"}</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-state">
              <h3>No dishes yet</h3>
              <p>Pick a soup, swallow, plate of rice, or chilled drink to begin.</p>
              <Link className="btn btn-primary" to="/menu" onClick={() => setIsCartOpen(false)}>
                Browse Menu
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.lineId || item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>₦{item.price.toLocaleString()} each</p>
                  <p className="cart-options">
                    {item.spice || "Regular"}
                    {item.addOns?.length
                      ? ` · ${item.addOns.map((addOn) => addOn.name).join(", ")}`
                      : ""}
                  </p>
                  <button type="button" onClick={() => removeFromCart(item.lineId || item.id)}>
                    Remove
                  </button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" onClick={() => updateQuantity(item.lineId || item.id, item.quantity - 1)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.lineId || item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-checkout">
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>
            <div className="summary-line total">
              <span>Delivery</span>
              <strong>Calculated at checkout</strong>
            </div>
            <Link className="btn btn-primary" to="/order" onClick={() => setIsCartOpen(false)}>
              Checkout
            </Link>
            <button className="btn btn-ghost" type="button" onClick={clearCart}>
              Clear Order
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
