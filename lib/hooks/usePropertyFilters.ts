"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { properties } from "@/lib/data";
import {
  extractLocations,
  extractPropertyTypes,
  getPriceRangeByValue,
  PRICE_RANGES,
  DEFAULT_PRICE_RANGE,
} from "@/lib/data/searchFilters";
import { getPaginationRange } from "@/lib/utils/pagination";

const ITEMS_PER_PAGE = 3;

const DEFAULT_LOCATION = "All";
const DEFAULT_PRICE_VALUE = "all";
const DEFAULT_TYPE = "all-types";

export interface UsePropertyFiltersReturn {
  selectedLocation: string;
  selectedPriceLabel: string;
  selectedPropertyType: string;
  locations: string[];
  propertyTypes: string[];
  priceRangeLabels: string[];
  filteredProperties: typeof properties;
  paginatedProperties: typeof properties;
  currentPage: number;
  totalPages: number;
  paginationRange: (number | string)[];
  selectedPropertyId: string | null;
  handleLocationChange: (value: string) => void;
  handlePriceChange: (label: string) => void;
  handleTypeChange: (value: string) => void;
  handleBrowse: () => void;
  handlePageChange: (page: number | string) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  handlePropertySelect: (id: string | null) => void;
}

export function usePropertyFilters(): UsePropertyFiltersReturn {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const [selectedLocation, setSelectedLocation] = useState(
    searchParams.get("location") || DEFAULT_LOCATION
  );
  const [selectedPriceValue, setSelectedPriceValue] = useState(
    searchParams.get("price") || DEFAULT_PRICE_VALUE
  );
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    searchParams.get("type") || DEFAULT_TYPE
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const locations = useMemo(() => extractLocations(properties), []);
  const propertyTypes = useMemo(() => extractPropertyTypes(properties), []);
  const priceRangeLabels = useMemo(() => PRICE_RANGES.map((r) => r.label), []);

  const selectedPriceLabel = useMemo(() => {
    const range = getPriceRangeByValue(selectedPriceValue);
    return range?.label || DEFAULT_PRICE_RANGE.label;
  }, [selectedPriceValue]);

  const updateUrlParams = (params: Record<string, string | number>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      const isDefault =
        value === DEFAULT_LOCATION ||
        value === DEFAULT_PRICE_VALUE ||
        value === DEFAULT_TYPE ||
        (key === "page" && value === 1);

      if (isDefault) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, String(value));
      }
    });

    const queryString = newSearchParams.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(newUrl, { scroll: false });
  };

  const applyFilters = (location: string, priceValue: string, type: string) => {
    const priceRange = getPriceRangeByValue(priceValue);

    return properties.filter((prop) => {
      const propCity = prop.address.split(",").slice(-2, -1)[0]?.trim().split(" ")[0] || "";
      const matchLocation = location === DEFAULT_LOCATION || propCity === location;

      const numericPrice = parseInt(prop.price.replace(/[^0-9]/g, ""), 10);
      const matchPrice =
        priceRange &&
        numericPrice >= priceRange.min &&
        numericPrice < priceRange.max;

      const matchType = type === DEFAULT_TYPE || prop.propertyType === type;

      return matchLocation && matchPrice && matchType;
    });
  };

  const initialFiltered = useMemo(
    () =>
      applyFilters(
        searchParams.get("location") || DEFAULT_LOCATION,
        searchParams.get("price") || DEFAULT_PRICE_VALUE,
        searchParams.get("type") || DEFAULT_TYPE
      ),
    
    []
  );

  const [filteredProperties, setFilteredProperties] = useState(initialFiltered);

  const totalPages = useMemo(
    () => Math.ceil(filteredProperties.length / ITEMS_PER_PAGE),
    [filteredProperties.length]
  );

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProperties.slice(startIndex, endIndex);
  }, [filteredProperties, currentPage]);

  const paginationRange = useMemo(
    () => getPaginationRange(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  const handlePriceChange = (label: string) => {
    const range = PRICE_RANGES.find((r) => r.label === label);
    if (range) {
      setSelectedPriceValue(range.value);
    }
  };

  const handleTypeChange = (value: string) => {
    setSelectedPropertyType(value);
  };

  const handleBrowse = () => {
    const filtered = applyFilters(selectedLocation, selectedPriceValue, selectedPropertyType);

    setFilteredProperties(filtered);
    setCurrentPage(1);
    setSelectedPropertyId(null);
    updateUrlParams({
      location: selectedLocation,
      price: selectedPriceValue,
      type: selectedPropertyType,
      page: 1,
    });
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) {
      setCurrentPage(page);
      setSelectedPropertyId(null);
      updateUrlParams({ page });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setSelectedPropertyId(null);
      updateUrlParams({ page: newPage });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setSelectedPropertyId(null);
      updateUrlParams({ page: newPage });
    }
  };

  const handlePropertySelect = (id: string | null) => {
    setSelectedPropertyId(id);
  };

  return {
    selectedLocation,
    selectedPriceLabel,
    selectedPropertyType,
    locations,
    propertyTypes,
    priceRangeLabels,
    filteredProperties,
    paginatedProperties,
    currentPage,
    totalPages,
    paginationRange,
    selectedPropertyId,
    handleLocationChange,
    handlePriceChange,
    handleTypeChange,
    handleBrowse,
    handlePageChange,
    handlePrevious,
    handleNext,
    handlePropertySelect,
  };
}
