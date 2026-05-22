import type { Property, MoreFilters } from "@/lib/types";
import {
  getPriceRangeByValue,
  getFloorAreaRangeByLabel,
  parseBedsBathsValue,
} from "@/lib/data/searchFilters";
import { DEFAULT_LOCATION, DEFAULT_TYPE } from "@/lib/types/propertyFilters";

interface FilterParams {
  location: string;
  priceValue: string;
  type: string;
  filters: MoreFilters;
}

export function filterProperties(
  properties: Property[],
  { location, priceValue, type, filters }: FilterParams
): Property[] {
  const priceRange = getPriceRangeByValue(priceValue);
  const floorAreaRange = getFloorAreaRangeByLabel(filters.floorArea);
  const bedsRange = parseBedsBathsValue(filters.beds);
  const bathsRange = parseBedsBathsValue(filters.baths);
  const minYear = filters.minYear && filters.minYear !== "Any"
    ? parseInt(filters.minYear, 10)
    : null;
  const maxYear = filters.maxYear && filters.maxYear !== "Any"
    ? parseInt(filters.maxYear, 10)
    : null;

  return properties.filter((prop) => {
    const propCity = prop.address.split(",").slice(-2, -1)[0]?.trim().split(" ")[0] || "";
    const matchLocation = location === DEFAULT_LOCATION || propCity === location;

    const numericPrice = parseInt(prop.price.replace(/[^0-9]/g, ""), 10);
    const matchPrice =
      priceRange && numericPrice >= priceRange.min && numericPrice < priceRange.max;

    const matchType = type === DEFAULT_TYPE || prop.propertyType === type;

    const matchListingType =
      filters.listingType === "all" || prop.listingType === filters.listingType;

    const matchCategory = !filters.category || prop.propertyType === filters.category;

    const matchBeds =
      !bedsRange ||
      (prop.beds >= bedsRange.min &&
        prop.beds <= (bedsRange.max === Infinity ? 100 : bedsRange.max));

    const matchBaths =
      !bathsRange ||
      (prop.baths >= bathsRange.min &&
        prop.baths <= (bathsRange.max === Infinity ? 100 : bathsRange.max));

    const matchFloorArea =
      !floorAreaRange ||
      floorAreaRange.label === "Any" ||
      (prop.floorAreaM2 !== undefined &&
        prop.floorAreaM2 >= floorAreaRange.min &&
        prop.floorAreaM2 < floorAreaRange.max);

    const matchMinYear = !minYear || (prop.yearBuilt !== undefined && prop.yearBuilt >= minYear);
    const matchMaxYear = !maxYear || (prop.yearBuilt !== undefined && prop.yearBuilt <= maxYear);

    return (
      matchLocation &&
      matchPrice &&
      matchType &&
      matchListingType &&
      matchCategory &&
      matchBeds &&
      matchBaths &&
      matchFloorArea &&
      matchMinYear &&
      matchMaxYear
    );
  });
}
