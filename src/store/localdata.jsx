import { AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai"

import productOne from "../assets/product/Product1.jpg";
import productTwo from "../assets/product/Product2.jpg";
import productThree from "../assets/product/Product3.jpg";
import productFour from "../assets/product/Product4.png";

import productFive from "../assets/product/Product5.png";
import productSix from "../assets/product/Product6.jpg";
import productSeven from "../assets/product/Product7.png";
import productEight from "../assets/product/Product8.jpg";

import brandOne from "../assets/brand/Prada.png";
import brandTwo from "../assets/brand/Boss.png";
import brandThree from "../assets/brand/Gucci.png";
import brandFour from "../assets/brand/Burberry.png";
import brandFive from "../assets/brand/Catier.png";
import brandSix from "../assets/brand/Tiffany&Co.png";

import icon1 from "../assets/openfashion/icon1.png";
import icon2 from "../assets/openfashion/icon2.png";
import icon3 from "../assets/openfashion/icon3.png";
import icon4 from "../assets/openfashion/icon4.png";

import group1 from '../assets/followus/Group1.png';
import group2 from '../assets/followus/Group2.png';
import group3 from '../assets/followus/Group3.png';
import group4 from '../assets/followus/Group4.png';

export const newArrival = [
  {
    image: productOne,
    title: "21WN Reversible Wankadan Cardigan",
    price: "120",
    id: "pr2",
  },
  {
    image: productTwo,
    title: "Oblong",
    price: "120",
    id: "pr4",
  },
  {
    image: productThree,
    title: "21WN Reversible Angora Cardigan",
    price: "120",
    id: "pr1",
  },
  {
    image: productFour,
    title: "21WN Reversible Pandra Cardigan",
    price: "120",
    id: "pr3",
  },
];

export const brands = [
  { image: brandOne, title: "Prada", id: "br1" },

  { image: brandThree, title: "Gucci", id: "br3" },
  { image: brandSix, title: "Tiffany & Co", id: "br6" },
  { image: brandFour, title: "Burberry", id: "br4" },
  { image: brandTwo, title: "Boss", id: "br2" },
  { image: brandFive, title: "Catier", id: "br5" },
];

export const productsForYou = [
  {
    image: productFive,
    title: "21WN Reversible Wankadan Cardigan",
    price: "120",
    id: "pr2",
  },
  {
    image: productSix,
    title: "Cashmere Blend Cropped Jacket S1AW1WN-AM943",
    price: "120",
    id: "pr4",
  },
  {
    image: productSeven,
    title: "Harris Tweed Three Button Jacket",
    price: "120",
    id: "pr1",
  },
  {
    image: productEight,
    title: "Cashmere Blend Cropped Jacket S1AW1WN-AM943",
    price: "120",
    id: "pr3",
  },
];

export const trendingTags = [
  "2023",
  "spring",
  "collection",
  "fall",
  "dress",
  "autumncollection",
  "fashion",
];

export const openFashionInfo = [
  { icon: icon4, info: "Fast shipping. Free on orders over $25.", id: "opi1" },
  {
    icon: icon2,
    info: "Unique designs and high-quality materials.",
    id: "opi2",
  },
  {
    icon: icon3,
    info: "Sustainable process from start to finish.",
    id: "opi3",
  },
  { icon: icon1, info: "Fast shipping. Free on orders over $25..", id: "opi4" },
];

export const followUs = [
  { img: group1, link: "@mia", id: "gr1" },
  { img: group2, link: "@jihyn", id: "gr2"},
  { img: group3, link: "@mia", id: "gr3"},
  { img: group4, link: "@jihyn", id: "gr4" },
];

export const socialIcons = [
    { icon: <AiFillInstagram />,
    id: "icon1"},
    {icon: <AiFillTwitterSquare />,id: "icon2"},
    {icon: <AiFillYoutube />, id: "icon3"}
]

export const footerLinks = [
  { link: "About",
  id: "link1"},
  {link: "Contact",id: "link2"},
  {link: "Blog", id: "icon3"}
]
