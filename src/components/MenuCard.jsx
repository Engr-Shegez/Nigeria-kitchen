import { useCart } from "../hooks/useCart";

const formatPrice = (price) => `₦${price.toLocaleString()}`;

const MenuCard = ({ dish }) => {
  const { addToCart } = useCart();

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        <span>{dish.category}</span>
      </div>
      <div className="menu-card-body">
        <div>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
        </div>
        <div className="menu-card-footer">
          <strong>{formatPrice(dish.price)}</strong>
          <button className="btn btn-small" type="button" onClick={() => addToCart(dish)}>
            Add to Order
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
