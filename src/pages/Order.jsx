import { useMemo, useState } from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { deliveryZones, serviceFee, whatsappPhone } from "../data/orderOptions";
import { useCart } from "../hooks/useCart";

const formatPrice = (price) => `₦${price.toLocaleString()}`;

const buildWhatsAppUrl = ({ customer, items, totals }) => {
  const itemLines = items
    .map((item) => {
      const addOns = item.addOns?.length
        ? ` | Add-ons: ${item.addOns.map((addOn) => addOn.name).join(", ")}`
        : "";
      return `${item.quantity}x ${item.name} (${item.spice || "Regular"}${addOns}) - ${formatPrice(item.price * item.quantity)}`;
    })
    .join("\n");

  const message = [
    `Hello Savage Kitchen, I would like to place order ${customer.orderRef}.`,
    "",
    "Order:",
    itemLines,
    "",
    `Subtotal: ${formatPrice(totals.subtotal)}`,
    `Delivery: ${formatPrice(totals.deliveryFee)}`,
    `Service: ${formatPrice(totals.serviceFee)}`,
    `Total: ${formatPrice(totals.total)}`,
    "",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Fulfilment: ${customer.fulfilment}`,
    `Zone: ${customer.zoneName}`,
    `Address: ${customer.address}`,
    `Payment: ${customer.payment}`,
  ].join("\n");

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
};

const Order = () => {
  const { cartItems, clearCart, removeFromCart, subtotal, updateQuantity } = useCart();
  const [fulfilment, setFulfilment] = useState("delivery");
  const [zoneId, setZoneId] = useState(deliveryZones[0].id);
  const [confirmation, setConfirmation] = useState(null);

  const selectedZone = useMemo(
    () => deliveryZones.find((zone) => zone.id === zoneId) || deliveryZones[0],
    [zoneId],
  );
  const deliveryFee = fulfilment === "delivery" ? selectedZone.fee : 0;
  const total = cartItems.length ? subtotal + deliveryFee + serviceFee : 0;

  const submitOrder = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const orderRef = `SK-${Date.now().toString().slice(-6)}`;
    const itemsSnapshot = cartItems.map((item) => ({ ...item }));
    const totals = {
      subtotal,
      deliveryFee,
      serviceFee,
      total,
    };
    const customer = {
      orderRef,
      name: form.get("name"),
      phone: form.get("phone"),
      address: form.get("address") || "Pickup at Savage Kitchen Lekki",
      fulfilment,
      payment: form.get("payment"),
      zoneName: fulfilment === "delivery" ? selectedZone.name : "Pickup",
      eta: fulfilment === "delivery" ? selectedZone.eta : "15-20 min",
    };

    setConfirmation({
      customer,
      items: itemsSnapshot,
      totals,
      whatsappUrl: buildWhatsAppUrl({ customer, items: itemsSnapshot, totals }),
    });
    clearCart();
    event.currentTarget.reset();
  };

  if (confirmation) {
    return (
      <section className="page-hero order-success">
        <div className="container success-panel">
          <Reveal>
            <p className="eyebrow">Order Ready To Send</p>
            <h1>{confirmation.customer.orderRef}</h1>
            <p>
              Your order summary is prepared. Send it to Savage Kitchen on WhatsApp
              so the team can confirm payment and timing.
            </p>
          </Reveal>

          <Reveal className="checkout-summary" delay={100}>
            <h2>Confirmation</h2>
            <div className="summary-line">
              <span>Name</span>
              <strong>{confirmation.customer.name}</strong>
            </div>
            <div className="summary-line">
              <span>ETA</span>
              <strong>{confirmation.customer.eta}</strong>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <strong>{formatPrice(confirmation.totals.total)}</strong>
            </div>
            <a
              className="btn btn-primary"
              href={confirmation.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Send on WhatsApp
            </a>
            <Link className="btn btn-ghost" to="/menu">
              Start New Order
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="page-hero empty-order">
        <div className="container empty-state">
          <Reveal>
            <p className="eyebrow">Checkout</p>
            <h1>Your order is empty</h1>
            <p>Build a basket from the menu and come back here to complete checkout.</p>
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
            <p>Update quantities, select your Lagos zone, and send the order through WhatsApp.</p>
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
                  <div className="checkout-item" key={item.lineId || item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        {item.spice || "Regular"}
                        {item.addOns?.length
                          ? ` · ${item.addOns.map((addOn) => addOn.name).join(", ")}`
                          : ""}
                      </p>
                      <strong>{formatPrice(item.price)} each</strong>
                    </div>
                    <div className="quantity-control">
                      <button type="button" onClick={() => updateQuantity(item.lineId || item.id, item.quantity - 1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.lineId || item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button className="text-button" type="button" onClick={() => removeFromCart(item.lineId || item.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="checkout-card">
              <h2>Customer Details</h2>
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
              <div className="form-row">
                <label>
                  <span>Fulfilment</span>
                  <select
                    name="fulfilment"
                    value={fulfilment}
                    onChange={(event) => setFulfilment(event.target.value)}
                  >
                    <option value="delivery">Delivery</option>
                    <option value="pickup">Pickup</option>
                  </select>
                </label>
                <label>
                  <span>Delivery zone</span>
                  <select
                    name="zone"
                    value={zoneId}
                    onChange={(event) => setZoneId(event.target.value)}
                    disabled={fulfilment === "pickup"}
                  >
                    {deliveryZones.map((zone) => (
                      <option value={zone.id} key={zone.id}>
                        {zone.name} - {formatPrice(zone.fee)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                <span>{fulfilment === "delivery" ? "Delivery address" : "Pickup note"}</span>
                <textarea
                  name="address"
                  rows="4"
                  placeholder={
                    fulfilment === "delivery"
                      ? "Street, estate, landmark..."
                      : "Any pickup notes?"
                  }
                  required={fulfilment === "delivery"}
                />
              </label>
              <label>
                <span>Payment</span>
                <select name="payment" defaultValue="transfer">
                  <option value="Bank transfer">Bank transfer</option>
                  <option value="Card on delivery">Card on delivery</option>
                  <option value="Cash">Cash</option>
                </select>
              </label>
            </div>
          </Reveal>

          <Reveal className="checkout-summary" delay={100}>
            <h2>Summary</h2>
            <div className="delivery-zone-note">
              <strong>{fulfilment === "delivery" ? selectedZone.name : "Pickup"}</strong>
              <span>{fulfilment === "delivery" ? selectedZone.eta : "15-20 min"}</span>
            </div>
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <strong>{formatPrice(deliveryFee)}</strong>
            </div>
            <div className="summary-line">
              <span>Service</span>
              <strong>{formatPrice(serviceFee)}</strong>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button className="btn btn-primary" type="submit">
              Prepare WhatsApp Order
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
