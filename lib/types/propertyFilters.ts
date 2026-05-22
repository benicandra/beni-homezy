import type { properties } from "@/lib/data";
import type { MoreFilters } from "@/lib/types";

export const ITEMS_PER_PAGE = 3;

export const DEFAULT_LOCATION = "All";
export const DEFAULT_PRICE_VALUE = "all";
export const DEFAULT_TYPE = "all-types";

export interface UsePropertyFiltersOptions {
  navigateToPath?: string;
}

export interface UsePropertyFiltersReturn {
  selectedLocation: string;
  selectedPriceLabel: string;
  selectedPropertyType: string;
  moreFilters: MoreFilters;
  locations: string[];
  propertyTypes: string[];
  categories: string[];
  priceRangeLabels: string[];
  bedsOptions: string[];
  bathsOptions: string[];
  floorAreaLabels: string[];
  yearOptions: string[];
  filteredProperties: typeof properties;
  paginatedProperties: typeof properties;
  currentPage: number;
  totalPages: number;
  paginationRange: (number | string)[];
  selectedPropertyId: string | null;
  handleLocationChange: (value: string) => void;
  handlePriceChange: (label: string) => void;
  handleTypeChange: (value: string) => void;
  handleApplyMoreFilters: (filters: MoreFilters) => void;
  handleBrowse: () => void;
  handlePageChange: (page: number | string) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  handlePropertySelect: (id: string | null) => void;
}
