import type { PropertySummaryStat } from "@/lib/types";
import { featuredProperties } from "./properties";

import BedIcon from "@/assets/icons/bed.svg";
import BathIcon from "@/assets/icons/bath.svg";
import AreaIcon from "@/assets/icons/surface-area.svg";
import RepairIcon from "@/assets/icons/repair.svg";

export const featuredPropertyStats: PropertySummaryStat[] = [
  {
    label: "Bedrooms",
    value: featuredProperties.beds,
    icon: BedIcon,
  },
  {
    label: "Bathrooms",
    value: featuredProperties.baths,
    icon: BathIcon,
  },
  {
    label: "Square Area",
    value: featuredProperties.area,
    icon: AreaIcon,
  },
  {
    label: "Property Type",
    value: featuredProperties.propertyType,
    icon: RepairIcon,
  },
];

export const propertyDetailsStats: PropertySummaryStat[] = [
  {
    label: "Bedrooms",
    value: "4",
    icon: BedIcon,
  },
  {
    label: "Bathrooms",
    value: "4",
    icon: BathIcon,
  },
  {
    label: "Square Area",
    value: "6x8 m²",
    icon: AreaIcon,
  },
  {
    label: "Property Type",
    value: "Modern Loft",
    icon: RepairIcon,
  },
];
