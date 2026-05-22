import type { MoreFilters } from "@/lib/types";
import { DEFAULT_MORE_FILTERS } from "@/lib/types";

export function countActiveFilters(filters: MoreFilters): number {
  let count = 0;

  if (filters.listingType !== DEFAULT_MORE_FILTERS.listingType) count++;
  if (filters.category !== DEFAULT_MORE_FILTERS.category) count++;
  if (filters.beds !== DEFAULT_MORE_FILTERS.beds) count++;
  if (filters.baths !== DEFAULT_MORE_FILTERS.baths) count++;
  if (filters.floorArea !== DEFAULT_MORE_FILTERS.floorArea) count++;
  if (filters.minYear !== DEFAULT_MORE_FILTERS.minYear) count++;
  if (filters.maxYear !== DEFAULT_MORE_FILTERS.maxYear) count++;

  return count;
}

export function hasActiveFilters(filters: MoreFilters): boolean {
  return countActiveFilters(filters) > 0;
}
