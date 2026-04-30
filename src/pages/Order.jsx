import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { useCart } from "../hooks/useCart";

const DELIVERY_FEE = 900;
const SERVICE_FEE = 250;

const Order = () => {
  const { cartItems, clearCart, removeFromCart, subtotal, updateQuantity } = useCart();
  const total = cartItems.length ? subtotal + DELIVERY_FEE + SERVICE_FEE : 0;

  const submitOrder = (event) => {
    event.preventDefault();
    clearCart();
    event.currentTarget.reset();
  };

  if (cartItems.length === 0) {
    return (
      <section className="page-hero empty-order">
        <div className="container empty-state">
          <Reveal>
            <p className="eyebrow">Checkout</p>
            <h1>Your order is empty</h1>
            <p>Build a basket from the menu and come back here to complete the UI checkout flow.</p>
            <Link className="btn btn-primary" to="/menu">
              Browse Menu
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container section-heading">
          <Reveal>
            <p className="eyebrow">Checkout</p>
            <h1>Review and confirm</h1>
            <p>Update quantities, choose fulfilment details, and preview your order total.</p>
          </Reveal>
        </div>
      </section>

      <section className="section checkout-section">
        <form className="container checkout-grid" onSubmit={submitOrder}>
          <Reveal className="checkout-main">
            <div className="checkout-card">
              <h2>Order Items</h2>
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.category}</p>
                      <strong>₦{item.price.toLocaleString()}</strong>
                    </div>
                    <div className="quantity-control">
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button className="text-button" type="button" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="checkout-card">
              <h2>Delivery Details</h2>
              <div className="form-row">
                <label>
                  <span>Full name</span>
                  <input name="name" type="text" placeholder="Ada Okonkwo" required />
                </label>
                <label>
                  <span>Phone</span>
                  <input name="phone" type="tel" placeholder="+234 812 555 0188" required />
                </label>
              </div>
              <label>
                <span>Delivery address</span>
                <textarea name="address" rows="4" placeholder="Street, estate, landmark..." required />
              </label>
              <div className="form-row">
                <label>
                  <span>Fulfilment</span>
                  <select name="fulfilment" defaultValue="delivery">
                    <option value="delivery">Delivery</option>
                    <option value="pickup">Pickup</option>
                  </select>
                </label>
                <label>
                  <span>Payment</span>
                  <select name="payment" defaultValue="transfer">
                    <option value="transfer">Bank transfer</option>
                    <option value="card">Card on delivery</option>
                    <option value="cash">Cash</option>
                  </select>
                </label>
              </div>
            </div>
          </Reveal>

          <Reveal className="checkout-summary" delay={100}>
            <h2>Summary</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <strong>₦{DELIVERY_FEE.toLocaleString()}</strong>
            </div>
            <div className="summary-line">
              <span>Service</span>
              <strong>₦{SERVICE_FEE.toLocaleString()}</strong>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <strong>₦{total.toLocaleString()}</strong>
            </div>
            <button className="btn btn-primary" type="submit">
              Place Order
            </button>
            <Link className="btn btn-ghost" to="/menu">
              Add More Items
            </Link>
          </Reveal>
        </form>
      </section>
    </>
  );
};

export default Order;
