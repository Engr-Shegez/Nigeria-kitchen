import { useMemo, useState } from "react";
import MenuCard from "../components/MenuCard";
import Reveal from "../components/Reveal";
import { allDishes, categories } from "../data/dishes";
import { useCart } from "../hooks/useCart";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useCart();

  const filteredDishes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allDishes.filter((dish) => {
      const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
      const matchesSearch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {toast.show && (
        <div className="toast" role="status">
          {toast.message}
        </div>
      )}

      <section className="page-hero compact-hero">
        <div className="container section-heading">
          <Reveal>
            <p className="eyebrow">Menu</p>
            <h1>Find your next plate</h1>
            <p>
              Filter classic Nigerian dishes, search by craving, and add meals to
              your order without leaving the menu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section menu-section">
        <div className="container menu-controls">
          <label className="search-box">
            <span className="sr-only">Search menu</span>
            <input
              type="search"
              placeholder="Search jollof, egusi, zobo..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>

          <div className="category-tabs" role="tablist" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="container results-meta">
          <p>
            Showing <strong>{filteredDishes.length}</strong> {filteredDishes.length === 1 ? "dish" : "dishes"}
          </p>
        </div>

        <div className="container menu-grid">
          {filteredDishes.length ? (
            filteredDishes.map((dish, index) => (
              <Reveal key={dish.id} delay={(index % 6) * 60}>
                <MenuCard dish={dish} />
              </Reveal>
            ))
          ) : (
            <div className="empty-state wide">
              <h2>No matching dish</h2>
              <p>Try another search or switch back to all categories.</p>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;
