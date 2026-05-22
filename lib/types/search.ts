export interface MoreFilters {
  listingType: "all" | "sale" | "rent";
  category: string;
  beds: string;
  baths: string;
  floorArea: string;
  minYear: string;
  maxYear: string;
}

export const DEFAULT_MORE_FILTERS: MoreFilters = {
  listingType: "all",
  category: "",
  beds: "",
  baths: "",
  floorArea: "",
  minYear: "",
  maxYear: "",
};
