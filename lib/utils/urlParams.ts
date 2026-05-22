import type { MoreFilters } from "@/lib/types";
import { DEFAULT_LOCATION, DEFAULT_PRICE_VALUE, DEFAULT_TYPE } from "@/lib/types/propertyFilters";

export function buildFilterParams(
  location: string,
  priceValue: string,
  type: string,
  filters: MoreFilters
): Record<string, string | number> {
  return {
    location,
    price: priceValue,
    type,
    page: 1,
    listingType: filters.listingType,
    category: filters.category,
    beds: filters.beds,
    baths: filters.baths,
    floorArea: filters.floorArea,
    minYear: filters.minYear,
    maxYear: filters.maxYear,
  };
}

export function buildQueryString(params: Record<string, string | number>): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    const isDefault =
      value === DEFAULT_LOCATION ||
      value === DEFAULT_PRICE_VALUE ||
      value === DEFAULT_TYPE ||
      (key === "page" && value === 1) ||
      value === "" ||
      value === "all";

    if (!isDefault) {
      searchParams.set(key, String(value));
    }
  });

  return searchParams.toString();
}
