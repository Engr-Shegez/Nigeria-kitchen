import { useMemo, useState } from "react";
import { useCart } from "../hooks/useCart";

const formatPrice = (price) => `₦${price.toLocaleString()}`;

const MenuCard = ({ dish }) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [spice, setSpice] = useState("Regular");
  const { addToCart } = useCart();

  const selectedAddOnItems = useMemo(
    () => dish.addOns?.filter((addOn) => selectedAddOns.includes(addOn.id)) || [],
    [dish.addOns, selectedAddOns],
  );

  const totalPrice = useMemo(
    () => dish.price + selectedAddOnItems.reduce((sum, addOn) => sum + addOn.price, 0),
    [dish.price, selectedAddOnItems],
  );

  const toggleAddOn = (addOnId) => {
    setSelectedAddOns((current) =>
      current.includes(addOnId)
        ? current.filter((id) => id !== addOnId)
        : [...current, addOnId],
    );
  };

  const addCustomizedDish = () => {
    addToCart(dish, {
      addOns: selectedAddOnItems,
      spice,
    });
    setIsCustomizing(false);
  };

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        <span>{dish.category}</span>
        {dish.badge && <strong className="dish-badge">{dish.badge}</strong>}
      </div>
      <div className="menu-card-body">
        <div>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <div className="dish-meta">
            <span>{dish.prepTime}</span>
            <span>{dish.spiceLevel} spice</span>
          </div>
        </div>

        {isCustomizing && (
          <div className="menu-customizer">
            <label>
              <span>Spice preference</span>
              <select value={spice} onChange={(event) => setSpice(event.target.value)}>
                <option>Regular</option>
                <option>Mild</option>
                <option>Extra pepper</option>
                <option>No pepper</option>
              </select>
            </label>

            {dish.addOns?.length > 0 && (
              <div className="add-on-list" aria-label={`Add-ons for ${dish.name}`}>
                {dish.addOns.map((addOn) => (
                  <label className="add-on-option" key={addOn.id}>
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={() => toggleAddOn(addOn.id)}
                    />
                    <span>{addOn.name}</span>
                    <strong>+{formatPrice(addOn.price)}</strong>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="menu-card-footer">
          <strong>{formatPrice(totalPrice)}</strong>
          <button
            className="btn btn-small"
            type="button"
            onClick={isCustomizing ? addCustomizedDish : () => setIsCustomizing(true)}
          >
            {isCustomizing ? "Add Selection" : "Customize"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
