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
    description:
      "Party-style rice simmered in peppered tomato stock with a smoky Lagos finish.",
  },
  {
    id: "rice-fried",
    name: "Fried Rice",
    category: "Rice Dishes",
    price: 3400,
    image: friedrice,
    description:
      "Fragrant rice tossed with vegetables, herbs, liver bits, and a soft pepper kick.",
  },
  {
    id: "rice-ofada",
    name: "Ofada Rice & Ayamase",
    category: "Rice Dishes",
    price: 4200,
    image: beans,
    description:
      "Local rice paired with green pepper sauce, assorted meats, and boiled egg.",
  },
  {
    id: "swallow-eba",
    name: "Eba",
    category: "Swallows",
    price: 1200,
    image: eba,
    description:
      "Golden garri swallow, smooth and firm enough for your favourite soup.",
  },
  {
    id: "swallow-amala",
    name: "Amala",
    category: "Swallows",
    price: 1400,
    image: Amala,
    description:
      "Silky yam flour swallow served warm, especially good with gbegiri and ewedu.",
  },
  {
    id: "swallow-pounded-yam",
    name: "Pounded Yam",
    category: "Swallows",
    price: 1900,
    image: pundedyam,
    description:
      "Soft, stretchy pounded yam with a cloud-like texture and comforting bite.",
  },
  {
    id: "soup-egusi",
    name: "Egusi Soup",
    category: "Soups",
    price: 3600,
    image: egusi,
    description:
      "Melon seed soup with leafy greens, stockfish, beef, and deep pepper flavour.",
  },
  {
    id: "soup-ogbono",
    name: "Ogbono Soup",
    category: "Soups",
    price: 3600,
    image: okroo,
    description:
      "Velvety draw soup cooked with ogbono, dry fish, beef, and native seasoning.",
  },
  {
    id: "soup-afang",
    name: "Afang Soup",
    category: "Soups",
    price: 4400,
    image: vegetable,
    description:
      "Calabar-style leafy soup with waterleaf, afang leaves, smoked fish, and periwinkle.",
  },
  {
    id: "protein-suya",
    name: "Suya",
    category: "Proteins",
    price: 3000,
    image: beef,
    description:
      "Char-grilled beef strips dusted with yaji spice, onions, tomatoes, and lime.",
  },
  {
    id: "protein-chicken",
    name: "Peppered Chicken",
    category: "Proteins",
    price: 3800,
    image: chicken,
    description:
      "Juicy chicken glazed in a rich red pepper sauce with herbs and onions.",
  },
  {
    id: "protein-goat",
    name: "Goat Meat",
    category: "Proteins",
    price: 4200,
    image: fishfillet,
    description:
      "Tender goat meat simmered in spiced stock, finished in pepper sauce.",
  },
  {
    id: "protein-fish",
    name: "Grilled Croaker",
    category: "Proteins",
    price: 5800,
    image: seafood,
    description:
      "Whole fish grilled with pepper rub, plantain, and a bright onion relish.",
  },
  {
    id: "street-puff-puff",
    name: "Puff Puff",
    category: "Street Food",
    price: 900,
    image: raps,
    description:
      "Warm golden dough bites, lightly sweet and fried until pillowy.",
  },
  {
    id: "street-akara",
    name: "Akara",
    category: "Street Food",
    price: 1200,
    image: moimoi,
    description:
      "Crisp bean fritters with soft centres, served with pepper dip.",
  },
  {
    id: "drink-zobo",
    name: "Zobo",
    category: "Drinks",
    price: 900,
    image: zobo,
    description:
      "Chilled hibiscus drink steeped with ginger, cloves, pineapple, and citrus.",
  },
  {
    id: "drink-kunu",
    name: "Kunu",
    category: "Drinks",
    price: 800,
    image: ginger,
    description:
      "Creamy millet drink with ginger and warm spices, served cold.",
  },
  {
    id: "drink-chapman",
    name: "Chapman",
    category: "Drinks",
    price: 1500,
    image: freshjuice,
    description:
      "Nigerian mocktail with citrus, bitters, cucumber, and a lively fizz.",
  },
  {
    id: "drink-palmwine",
    name: "Palm Wine",
    category: "Drinks",
    price: 1300,
    image: palmwine,
    description:
      "Traditional palm wine, lightly sweet, fresh, and served chilled.",
  },
];

export const featuredDishes = allDishes.filter((dish) =>
  ["rice-jollof", "soup-afang", "protein-suya", "drink-chapman"].includes(dish.id),
);
