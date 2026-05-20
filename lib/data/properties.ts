import type { FeaturedProperty, Property } from "@/lib/types";

import Prop4 from "@/assets/properties/properties-4.webp";
import PropFeat1 from "@/assets/properties/properties-1-feat.png";
import PropFeat2 from "@/assets/properties/properties-2-feat.png";
import PropFeat3 from "@/assets/properties/properties-3-feat.png";
import Agent8 from "@/assets/agents/agents-8.png";

export const featuredProperties: FeaturedProperty = {
  id: "featured-cova-home-realty",
  image: Prop4,
  price: "$2,095",
  priceSuffix: "/month",
  title: "COVA Home Realty",
  address: "2699 Green Valley, Highland Lake, FL",
  beds: 4,
  baths: 4,
  area: "6x8 m²",
  isFeatured: true,
  agent: {
    name: "Edwin Martins",
    role: "Property Advisor",
    image: Agent8,
  },
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
  propertyType: "Modern Loft",
};

export const properties: Property[] = [
  {
    id: "prop-beach-pros-realty",
    image: PropFeat3,
    price: "$15,000",
    priceSuffix: "/month",
    title: "Beach Pros Realty Inc.",
    address: "37 Ambleside Gardens, Ilford, IG4 5HH",
    beds: 3,
    baths: 2,
    area: "5x7 m²",
  },
  {
    id: "prop-beacon-homes",
    image: PropFeat2,
    price: "$1,799",
    priceSuffix: "/month",
    title: "Beacon Homes LLC",
    address: "3 Leame Close, Hull, HU3 6ND",
    beds: 3,
    baths: 2,
    area: "5x7 m²",
  },
  {
    id: "prop-herringbone-realty",
    image: PropFeat1,
    price: "$2,099",
    priceSuffix: "/month",
    title: "Herringbone Realty",
    address: "28B Highgate Road, London, NW5 1NS",
    beds: 3,
    baths: 2,
    area: "5x7 m²",
  },
];