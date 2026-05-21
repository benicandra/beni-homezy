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

export function getPriceRangeByValue(value: string): PriceRange | undefined {
  return PRICE_RANGES.find((range) => range.value === value);
}

export function getPriceRangeByLabel(label: string): PriceRange | undefined {
  return PRICE_RANGES.find((range) => range.label === label);
}

export const DEFAULT_PRICE_RANGE = PRICE_RANGES[0];
