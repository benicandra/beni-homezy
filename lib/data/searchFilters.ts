import type { Property } from "@/lib/types";

export interface PriceRange {
  label: string;
  value: string;
  min: number;
  max: number;
}

export const PRICE_RANGES: PriceRange[] = [
  { label: "All Prices", value: "all", min: 0, max: Infinity },
  { label: "$0 - $2,000", value: "0-2000", min: 0, max: 2000 },
  { label: "$2,000 - $5,000", value: "2000-5000", min: 2000, max: 5000 },
  { label: "$5,000 - $10,000", value: "5000-10000", min: 5000, max: 10000 },
  { label: "$10,000+", value: "10000+", min: 10000, max: Infinity },
];

export interface FloorAreaRange {
  label: string;
  min: number;
  max: number;
}

export const FLOOR_AREA_RANGES: FloorAreaRange[] = [
  { label: "Any", min: 0, max: Infinity },
  { label: "Under 30 m²", min: 0, max: 30 },
  { label: "30 - 50 m²", min: 30, max: 50 },
  { label: "50 - 80 m²", min: 50, max: 80 },
  { label: "80 - 100 m²", min: 80, max: 100 },
  { label: "100+ m²", min: 100, max: Infinity },
];

export const BEDS_OPTIONS = ["Any", "1 bed", "2 beds", "3 beds", "4 beds", "5+ beds"];
export const BATHS_OPTIONS = ["Any", "1 bath", "2 baths", "3 baths", "4+ baths"];
export const YEAR_OPTIONS = ["Any", "2000", "2005", "2010", "2015", "2020", "2023", "2024"];

export function extractLocations(properties: Property[]): string[] {
  const cities = new Set<string>();

  properties.forEach((prop) => {
    const parts = prop.address.split(",");
    if (parts.length >= 2) {
      const cityPart = parts[parts.length - 2].trim();
      const cityMatch = cityPart.match(/^([A-Za-z\s]+)/);
      if (cityMatch) {
        cities.add(cityMatch[1].trim());
      }
    }
  });

  return ["All", ...Array.from(cities).sort()];
}

export function extractPropertyTypes(properties: Property[]): string[] {
  const types = new Set<string>();

  properties.forEach((prop) => {
    if (prop.propertyType) {
      types.add(prop.propertyType);
    }
  });

  return ["All Types", ...Array.from(types).sort()];
}

export function extractCategories(properties: Property[]): string[] {
  const categories = new Set<string>();

  properties.forEach((prop) => {
    if (prop.propertyType) {
      categories.add(prop.propertyType);
    }
  });

  return ["", ...Array.from(categories).sort()];
}

export function getPriceRangeByValue(value: string): PriceRange | undefined {
  return PRICE_RANGES.find((range) => range.value === value);
}

export function getPriceRangeByLabel(label: string): PriceRange | undefined {
  return PRICE_RANGES.find((range) => range.label === label);
}

export function getFloorAreaRangeByLabel(label: string): FloorAreaRange | undefined {
  return FLOOR_AREA_RANGES.find((range) => range.label === label);
}

export function parseBedsBathsValue(value: string): { min: number; max: number } | null {
  if (!value || value === "Any") return null;
  
  const match = value.match(/^(\d+)\+?\s*(?:bed|bath)/);
  if (match) {
    const num = parseInt(match[1], 10);
    return { min: num, max: Infinity };
  }
  
  return null;
}

export const DEFAULT_PRICE_RANGE = PRICE_RANGES[0];
