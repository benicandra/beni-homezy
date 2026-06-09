import type { PropertySummaryStat } from "@/lib/types";
import { featuredProperties, properties } from "./properties";

import BedIcon from "@/assets/icons/bed.svg";
import BathIcon from "@/assets/icons/bath.svg";
import AreaIcon from "@/assets/icons/surface-area.svg";
import RepairIcon from "@/assets/icons/repair.svg";

const detailsProperty = properties[1];

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
    value: detailsProperty.beds,
    icon: BedIcon,
  },
  {
    label: "Bathrooms",
    value: detailsProperty.baths,
    icon: BathIcon,
  },
  {
    label: "Square Area",
    value: detailsProperty.area,
    icon: AreaIcon,
  },
  {
    label: "Property Type",
    value: detailsProperty.propertyType,
    icon: RepairIcon,
  },
];
