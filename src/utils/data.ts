import image1 from "../assets/images/Adidas-1896x800.jpg";
import image2 from "../assets/images/AdidasGreen-1-1896x800.jpg";
import image3 from "../assets/images/adidas_banner.webp";
import image4 from "../assets/images/maxresdefault.jpg";

import vn from "../assets/images/vn.png";
import uk from "../assets/images/197374.png";
import german from "../assets/images/german.png";

import cart1 from "../assets/images/adifom supperstart.jpg";
import cart2 from "../assets/images/adidas-adiform.png";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillGithub,
} from "react-icons/ai";

export const data = [
  {
    url: image1,
    name: "Samba OG Shoes",
    cat: "Orginals",
  },
  {
    url: image2,
    name: "Ultraboost Light Shoes",
    cat: "Running",
  },
  {
    url: image3,
    name: "Ultraboost Light Shoes",
    cat: "Running",
  },
  {
    url: image4,
    name: "Ultraboost Light Shoes",
    cat: "Running",
  },
];

export const ListMenu = [
  {
    name: "Home",
    icon: "",
    link: "/home",
    type: "menu",
  },
  {
    name: "Events",
    icon: "",
    link: "/events",
    type: "menu",
  },
  {
    name: "Products",
    icon: "",
    link: "/products",
    type: "menu",
  },
  {
    name: "Blogs",
    icon: "",
    link: "/blogs",
    type: "menu",
  },
  {
    name: "Contact",
    icon: "",
    link: "/contact",
    type: "menu",
  },
  {
    name: "Category",
    icon: "",
    link: "/category",
    type: "dropdown",
    subMenu: [
      {
        id: 1,
        name: "Original",
        link: "/category/original",
      },
      {
        id: 2,
        name: "Men",
        link: "/category/men",
      },
      {
        id: 3,
        name: "Women",
        link: "/category/women",
      },
    ],
  },
];

export const FlagItems = [
  {
    value: "VN",
    label: vn,
  },
  {
    value: "EN",
    label: uk,
  },
  {
    value: "GE",
    label: german,
  },
];

export const ListCart = [
  {
    name: "Addidas Adifom Supperstar",
    color: "white",
    cat: "Uniform",
    image: cart1,
    symbol: "$",
    quanlity: 2,
    total: 0,
    price: 150,
  },
  {
    name: "Addidas Adifom Supperstar",
    cat: "Uniform",
    color: "black",
    image: cart2,
    symbol: "$",
    quanlity: 1,
    total: 0,
    price: 150,
  },
];

export const Social = [
  {
    name: "instargram",
    icon: AiFillInstagram,
    link: "#",
  },
  {
    name: "linkedIn",
    icon: AiFillLinkedin,
    link: "#",
  },
  {
    name: "google",
    icon: AiFillGoogleCircle,
    link: "#",
  },
  {
    name: "github",
    icon: AiFillGithub,
    link: "#",
  },
];

export const UsefulLink = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Category",
    link: "/category",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];
