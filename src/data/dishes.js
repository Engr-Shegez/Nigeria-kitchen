import Amala from "../assets/Amala.jpg";
import beans from "../assets/beans.jpg";
import beef from "../assets/beef.png";
import chicken from "../assets/chicken.jpg";
import eba from "../assets/eba.jpg";
import egusi from "../assets/egusi.png";
import fishfillet from "../assets/fishfillet.png";
import freshjuice from "../assets/freshjuice.png";
import friedrice from "../assets/friedrice.png";
import ginger from "../assets/ginger.png";
import moimoi from "../assets/moimoi.jpg";
import okroo from "../assets/okroo.jpg";
import palmwine from "../assets/palmwine.png";
import pundedyam from "../assets/pundedyam.png";
import raps from "../assets/raps.jpg";
import rice from "../assets/rice.jpg";
import seafood from "../assets/seafood.jpg";
import zobo from "../assets/zobo.png";
import vegetable from "../assets/vegetable.jpg";

export const categories = [
  "All",
  "Swallows",
  "Soups",
  "Rice Dishes",
  "Proteins",
  "Street Food",
  "Drinks",
];

export const allDishes = [
  {
    id: "rice-jollof",
    name: "Jollof Rice",
    category: "Rice Dishes",
    price: 3200,
    image: rice,
    badge: "Popular",
    spiceLevel: "Medium",
    prepTime: "20 min",
    addOns: [
      { id: "plantain", name: "Fried plantain", price: 700 },
      { id: "chicken", name: "Peppered chicken", price: 1800 },
      { id: "egg", name: "Boiled egg", price: 400 },
    ],
    description:
      "Party-style rice simmered in peppered tomato stock with a smoky Lagos finish.",
  },
  {
    id: "rice-fried",
    name: "Fried Rice",
    category: "Rice Dishes",
    price: 3400,
    image: friedrice,
    badge: "Chef's Pick",
    spiceLevel: "Mild",
    prepTime: "18 min",
    addOns: [
      { id: "plantain", name: "Fried plantain", price: 700 },
      { id: "chicken", name: "Peppered chicken", price: 1800 },
      { id: "beef", name: "Beef pieces", price: 1400 },
    ],
    description:
      "Fragrant rice tossed with vegetables, herbs, liver bits, and a soft pepper kick.",
  },
  {
    id: "rice-ofada",
    name: "Ofada Rice & Ayamase",
    category: "Rice Dishes",
    price: 4200,
    image: beans,
    badge: "New",
    spiceLevel: "Hot",
    prepTime: "25 min",
    addOns: [
      { id: "egg", name: "Boiled egg", price: 400 },
      { id: "goat", name: "Goat meat", price: 2000 },
      { id: "plantain", name: "Fried plantain", price: 700 },
    ],
    description:
      "Local rice paired with green pepper sauce, assorted meats, and boiled egg.",
  },
  {
    id: "swallow-eba",
    name: "Eba",
    category: "Swallows",
    price: 1200,
    image: eba,
    spiceLevel: "None",
    prepTime: "8 min",
    addOns: [
      { id: "extra-wrap", name: "Extra wrap", price: 700 },
      { id: "soup-side", name: "Small soup side", price: 1800 },
    ],
    description:
      "Golden garri swallow, smooth and firm enough for your favourite soup.",
  },
  {
    id: "swallow-amala",
    name: "Amala",
    category: "Swallows",
    price: 1400,
    image: Amala,
    badge: "Popular",
    spiceLevel: "None",
    prepTime: "8 min",
    addOns: [
      { id: "extra-wrap", name: "Extra wrap", price: 800 },
      { id: "gbegiri", name: "Gbegiri side", price: 900 },
      { id: "ewedu", name: "Ewedu side", price: 900 },
    ],
    description:
      "Silky yam flour swallow served warm, especially good with gbegiri and ewedu.",
  },
  {
    id: "swallow-pounded-yam",
    name: "Pounded Yam",
    category: "Swallows",
    price: 1900,
    image: pundedyam,
    spiceLevel: "None",
    prepTime: "10 min",
    addOns: [
      { id: "extra-wrap", name: "Extra wrap", price: 1000 },
      { id: "soup-side", name: "Small soup side", price: 1800 },
    ],
    description:
      "Soft, stretchy pounded yam with a cloud-like texture and comforting bite.",
  },
  {
    id: "soup-egusi",
    name: "Egusi Soup",
    category: "Soups",
    price: 3600,
    image: egusi,
    badge: "Chef's Pick",
    spiceLevel: "Medium",
    prepTime: "22 min",
    addOns: [
      { id: "beef", name: "Extra beef", price: 1400 },
      { id: "stockfish", name: "Stockfish", price: 1800 },
      { id: "swallow", name: "Eba wrap", price: 700 },
    ],
    description:
      "Melon seed soup with leafy greens, stockfish, beef, and deep pepper flavour.",
  },
  {
    id: "soup-ogbono",
    name: "Ogbono Soup",
    category: "Soups",
    price: 3600,
    image: okroo,
    spiceLevel: "Medium",
    prepTime: "22 min",
    addOns: [
      { id: "beef", name: "Extra beef", price: 1400 },
      { id: "fish", name: "Smoked fish", price: 1600 },
      { id: "swallow", name: "Pounded yam wrap", price: 1000 },
    ],
    description:
      "Velvety draw soup cooked with ogbono, dry fish, beef, and native seasoning.",
  },
  {
    id: "soup-afang",
    name: "Afang Soup",
    category: "Soups",
    price: 4400,
    image: vegetable,
    badge: "Popular",
    spiceLevel: "Medium",
    prepTime: "26 min",
    addOns: [
      { id: "periwinkle", name: "Extra periwinkle", price: 1200 },
      { id: "stockfish", name: "Stockfish", price: 1800 },
      { id: "swallow", name: "Pounded yam wrap", price: 1000 },
    ],
    description:
      "Calabar-style leafy soup with waterleaf, afang leaves, smoked fish, and periwinkle.",
  },
  {
    id: "protein-suya",
    name: "Suya",
    category: "Proteins",
    price: 3000,
    image: beef,
    badge: "Popular",
    spiceLevel: "Hot",
    prepTime: "15 min",
    addOns: [
      { id: "extra-yaji", name: "Extra yaji", price: 200 },
      { id: "plantain", name: "Fried plantain", price: 700 },
    ],
    description:
      "Char-grilled beef strips dusted with yaji spice, onions, tomatoes, and lime.",
  },
  {
    id: "protein-chicken",
    name: "Peppered Chicken",
    category: "Proteins",
    price: 3800,
    image: chicken,
    spiceLevel: "Hot",
    prepTime: "18 min",
    addOns: [
      { id: "plantain", name: "Fried plantain", price: 700 },
      { id: "rice-side", name: "Rice side", price: 1200 },
    ],
    description:
      "Juicy chicken glazed in a rich red pepper sauce with herbs and onions.",
  },
  {
    id: "protein-goat",
    name: "Goat Meat",
    category: "Proteins",
    price: 4200,
    image: fishfillet,
    spiceLevel: "Hot",
    prepTime: "24 min",
    addOns: [
      { id: "plantain", name: "Fried plantain", price: 700 },
      { id: "pepper", name: "Extra pepper sauce", price: 300 },
    ],
    description:
      "Tender goat meat simmered in spiced stock, finished in pepper sauce.",
  },
  {
    id: "protein-fish",
    name: "Grilled Croaker",
    category: "Proteins",
    price: 5800,
    image: seafood,
    badge: "Chef's Pick",
    spiceLevel: "Medium",
    prepTime: "28 min",
    addOns: [
      { id: "plantain", name: "Fried plantain", price: 700 },
      { id: "chips", name: "Yam chips", price: 1000 },
      { id: "pepper", name: "Extra pepper sauce", price: 300 },
    ],
    description:
      "Whole fish grilled with pepper rub, plantain, and a bright onion relish.",
  },
  {
    id: "street-puff-puff",
    name: "Puff Puff",
    category: "Street Food",
    price: 900,
    image: raps,
    spiceLevel: "None",
    prepTime: "10 min",
    addOns: [
      { id: "extra-portion", name: "Extra portion", price: 700 },
      { id: "chocolate", name: "Chocolate dip", price: 500 },
    ],
    description:
      "Warm golden dough bites, lightly sweet and fried until pillowy.",
  },
  {
    id: "street-akara",
    name: "Akara",
    category: "Street Food",
    price: 1200,
    image: moimoi,
    spiceLevel: "Mild",
    prepTime: "12 min",
    addOns: [
      { id: "pap", name: "Pap cup", price: 600 },
      { id: "pepper", name: "Pepper dip", price: 300 },
    ],
    description:
      "Crisp bean fritters with soft centres, served with pepper dip.",
  },
  {
    id: "drink-zobo",
    name: "Zobo",
    category: "Drinks",
    price: 900,
    image: zobo,
    badge: "New",
    spiceLevel: "Mild",
    prepTime: "3 min",
    addOns: [
      { id: "ginger", name: "Extra ginger", price: 200 },
      { id: "bottle", name: "Takeaway bottle", price: 300 },
    ],
    description:
      "Chilled hibiscus drink steeped with ginger, cloves, pineapple, and citrus.",
  },
  {
    id: "drink-kunu",
    name: "Kunu",
    category: "Drinks",
    price: 800,
    image: ginger,
    spiceLevel: "Mild",
    prepTime: "3 min",
    addOns: [
      { id: "bottle", name: "Takeaway bottle", price: 300 },
      { id: "ice", name: "Extra ice", price: 100 },
    ],
    description:
      "Creamy millet drink with ginger and warm spices, served cold.",
  },
  {
    id: "drink-chapman",
    name: "Chapman",
    category: "Drinks",
    price: 1500,
    image: freshjuice,
    badge: "Popular",
    spiceLevel: "None",
    prepTime: "5 min",
    addOns: [
      { id: "cucumber", name: "Extra cucumber", price: 200 },
      { id: "bottle", name: "Takeaway bottle", price: 300 },
    ],
    description:
      "Nigerian mocktail with citrus, bitters, cucumber, and a lively fizz.",
  },
  {
    id: "drink-palmwine",
    name: "Palm Wine",
    category: "Drinks",
    price: 1300,
    image: palmwine,
    spiceLevel: "None",
    prepTime: "3 min",
    addOns: [
      { id: "bottle", name: "Takeaway bottle", price: 300 },
      { id: "calabash", name: "Calabash cup", price: 500 },
    ],
    description:
      "Traditional palm wine, lightly sweet, fresh, and served chilled.",
  },
];

export const featuredDishes = allDishes.filter((dish) =>
  ["rice-jollof", "soup-afang", "protein-suya", "drink-chapman"].includes(dish.id),
);
