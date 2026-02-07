// Sample dish data for the Menu
import moimoi from "../assets/moimoi.jpg";
import seafood from "../assets/seafood.jpg";
import rice from "../assets/rice.jpg";
import chicken from "../assets/chicken.jpg";
import Amala from "../assets/Amala.jpg";
import beans from "../assets/beans.jpg";
import beef from "../assets/beef.png";
import eba from "../assets/eba.jpg";
import raps from "../assets/raps.jpg";
import fishfillet from "../assets/fishfillet.png";
import okroo from "../assets/okroo.jpg";
import palmwine from "../assets/palmwine.png";
import zobo from "../assets/zobo.png";
import freshjuice from "../assets/freshjuice.png";
import vegetable from "../assets/Vegetable.jpg";
import friedrice from "../assets/friedrice.png";
import pundedyam from "../assets/pundedyam.png";
import egusi from "../assets/egusi.png";
import ginger from "../assets/ginger.png";

export const allDishes = [
  // Rice Dishes
  {
    id: 1,
    name: "Jollof Rice",
    category: "Rice",
    description:
      "Perfectly seasoned jollof rice slow-cooked in rich tomato sauce with a smoky finish.",
    price: 2500,
    image: rice,
  },
  {
    id: 2,
    name: "Fried Rice",
    category: "Rice",
    description:
      "Fluffy rice stir-fried with vegetables, protein, and aromatic spices for a complete meal.",
    price: 2800,
    image: friedrice,
  },
  {
    id: 3,
    name: "White Rice & Stew",
    category: "Beans",
    description:
      "Perfectly cooked white rice served with rich tomato-based stew and tender meat.",
    price: 2200,
    image: beans,
  },

  // Swallow
  {
    id: 4,
    name: "Fufu",
    category: "Swallow",
    description:
      "Smooth and creamy mashed plantain and cassava, traditionally served with soup.",
    price: 1500,
    image: moimoi,
  },
  {
    id: 5,
    name: "Amala",
    category: "Swallow",
    description:
      "Silky yam flour swallow, perfectly paired with rich Nigerian soups.",
    price: 1200,
    image: Amala,
  },
  {
    id: 6,
    name: "Pounded Yam",
    category: "Swallow",
    description:
      "Fluffy and smooth pounded yam, an authentic Nigerian comfort food staple.",
    price: 1800,
    image: pundedyam,
  },

  // Soups
  {
    id: 7,
    name: "Ogbono Soup",
    category: "Soups",
    description:
      "Rich and smooth soup made with melon seeds, served with tender meat and seafood.",
    price: 3200,
    image: okroo,
  },
  {
    id: 8,
    name: "Egusi Soup",
    category: "Soups",
    description:
      "Creamy pumpkin seed soup with beef, fish, and vibrant vegetables.",
    price: 3000,
    image: egusi,
  },
  {
    id: 9,
    name: "Grilled Fish",
    category: "Soups",
    description:
      "Aromatic spiced broth with tender meat or seafood, perfect as an appetizer.",
    price: 2800,
    image: seafood,
  },
  {
    id: 10,
    name: "Vegetable Soup",
    category: "Soups",
    description:
      "Light and nutritious soup loaded with fresh vegetables and tender proteins.",
    price: 2400,
    image: vegetable,
  },

  // Proteins
  {
    id: 11,
    name: "Grilled Chicken",
    category: "Proteins",
    description:
      "Tender, well-seasoned chicken cooked to juicy perfection with a rich, savory finish.",
    price: 4500,
    image: chicken,
  },
  {
    id: 12,
    name: "Suya",
    category: "Proteins",
    description:
      "Spiced grilled meat skewers with groundnut coating, served with onions and lime.",
    price: 3500,
    image: beef,
  },
  {
    id: 13,
    name: "Fish Fillet",
    category: "Proteins",
    description:
      "Pan-fried white fish fillet with aromatic spices and fresh lemon.",
    price: 5000,
    image: fishfillet,
  },
  {
    id: 14,
    name: "Braised Beef",
    category: "Proteins",
    description:
      "Slow-cooked beef in savory sauce with tender, melt-in-your-mouth texture.",
    price: 4000,
    image: beef,
  },

  // Drinks
  {
    id: 15,
    name: "Fresh Zobo",
    category: "Drinks",
    description:
      "Refreshing hibiscus drink with ginger and spices, served ice-cold.",
    price: 500,
    image: zobo,
  },
  {
    id: 16,
    name: "Palm Wine",
    category: "Drinks",
    description:
      "Traditional fermented drink with smooth, slightly sweet taste.",
    price: 800,
    image: palmwine,
  },
  {
    id: 17,
    name: "Fresh Juice",
    category: "Drinks",
    description:
      "Freshly squeezed tropical fruit juice with natural sweetness and vibrant flavor.",
    price: 600,
    image: freshjuice,
  },
  {
    id: 18,
    name: "Ginger Drink",
    category: "Drinks",
    description: "Spicy and warming ginger infusion with honey and lemon.",
    price: 400,
    image: ginger,
  },
];

export const categories = [
  "All",
  "Rice",
  "Swallow",
  "Soups",
  "Proteins",
  "Drinks",
];
