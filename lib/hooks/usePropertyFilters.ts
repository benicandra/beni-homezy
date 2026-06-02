"use client";

import { useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { properties } from "@/lib/data";
import {
  extractLocations,
  extractPropertyTypes,
  extractCategories,
  getPriceRangeByValue,
  PRICE_RANGES,
  DEFAULT_PRICE_RANGE,
  BEDS_OPTIONS,
  BATHS_OPTIONS,
  FLOOR_AREA_RANGES,
  YEAR_OPTIONS,
} from "@/lib/data/searchFilters";
import { getPaginationRange } from "@/lib/utils/pagination";
import { filterProperties } from "@/lib/utils/filterProperties";
import { buildFilterParams, buildQueryString } from "@/lib/utils/urlParams";
import type { MoreFilters } from "@/lib/types";
import { DEFAULT_MORE_FILTERS } from "@/lib/types";
import {
  ITEMS_PER_PAGE,
  DEFAULT_LOCATION,
  DEFAULT_PRICE_VALUE,
  DEFAULT_TYPE,
  UsePropertyFiltersOptions,
  UsePropertyFiltersReturn,
} from "@/lib/types/propertyFilters";

export type { UsePropertyFiltersOptions, UsePropertyFiltersReturn };

export function usePropertyFilters(options?: UsePropertyFiltersOptions): UsePropertyFiltersReturn {
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

  const parseMoreFiltersFromUrl = useCallback((): MoreFilters => {
    return {
      listingType: (searchParams.get("listingType") as MoreFilters["listingType"]) || "all",
      category: searchParams.get("category") || "",
      beds: searchParams.get("beds") || "",
      baths: searchParams.get("baths") || "",
      floorArea: searchParams.get("floorArea") || "",
      minYear: searchParams.get("minYear") || "",
      maxYear: searchParams.get("maxYear") || "",
    };
  }, [searchParams]);

  const [moreFilters, setMoreFilters] = useState<MoreFilters>(parseMoreFiltersFromUrl);

  const locations = useMemo(() => extractLocations(properties), []);
  const propertyTypes = useMemo(() => extractPropertyTypes(properties), []);
  const categories = useMemo(() => extractCategories(properties), []);
  const priceRangeLabels = useMemo(() => PRICE_RANGES.map((r) => r.label), []);
  const bedsOptions = useMemo(() => BEDS_OPTIONS, []);
  const bathsOptions = useMemo(() => BATHS_OPTIONS, []);
  const floorAreaLabels = useMemo(() => FLOOR_AREA_RANGES.map((r) => r.label), []);
  const yearOptions = useMemo(() => YEAR_OPTIONS, []);

  const selectedPriceLabel = useMemo(() => {
    const range = getPriceRangeByValue(selectedPriceValue);
    return range?.label || DEFAULT_PRICE_RANGE.label;
  }, [selectedPriceValue]);

  const updateUrlParams = useCallback(
    (params: Record<string, string | number>) => {
      const queryString = buildQueryString(params);
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(newUrl, { scroll: false });
    },
    [pathname, router]
  );

  const initialFilters = useMemo(() => parseMoreFiltersFromUrl(), [parseMoreFiltersFromUrl]);

  const initialFiltered = useMemo(
    () =>
      filterProperties(properties, {
        location: searchParams.get("location") || DEFAULT_LOCATION,
        priceValue: searchParams.get("price") || DEFAULT_PRICE_VALUE,
        type: searchParams.get("type") || DEFAULT_TYPE,
        filters: initialFilters,
      }),
    [initialFilters, searchParams]
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

  const handleApplyMoreFilters = (filters: MoreFilters) => {
    setMoreFilters(filters);
    const filtered = filterProperties(properties, {
      location: selectedLocation,
      priceValue: selectedPriceValue,
      type: selectedPropertyType,
      filters,
    });

    setFilteredProperties(filtered);
    setCurrentPage(1);
    setSelectedPropertyId(null);
    updateUrlParams(
      buildFilterParams(selectedLocation, selectedPriceValue, selectedPropertyType, filters)
    );
  };

  const handleBrowse = () => {
    const params = buildFilterParams(
      selectedLocation,
      selectedPriceValue,
      selectedPropertyType,
      moreFilters
    );

    if (options?.navigateToPath) {
      const queryString = buildQueryString(params);
      const targetUrl = queryString
        ? `${options.navigateToPath}?${queryString}`
        : options.navigateToPath;
      router.push(targetUrl);
    } else {
      const filtered = filterProperties(properties, {
        location: selectedLocation,
        priceValue: selectedPriceValue,
        type: selectedPropertyType,
        filters: moreFilters,
      });

      setFilteredProperties(filtered);
      setCurrentPage(1);
      setSelectedPropertyId(null);
      updateUrlParams(params);
    }
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

  const handleResetFilters = () => {
    setSelectedLocation(DEFAULT_LOCATION);
    setSelectedPriceValue(DEFAULT_PRICE_VALUE);
    setSelectedPropertyType(DEFAULT_TYPE);
    setMoreFilters(DEFAULT_MORE_FILTERS);
    setCurrentPage(1);
    setSelectedPropertyId(null);

    const filtered = filterProperties(properties, {
      location: DEFAULT_LOCATION,
      priceValue: DEFAULT_PRICE_VALUE,
      type: DEFAULT_TYPE,
      filters: DEFAULT_MORE_FILTERS,
    });
    setFilteredProperties(filtered);

    router.replace(pathname, { scroll: false });
  };

  return {
    selectedLocation,
    selectedPriceLabel,
    selectedPropertyType,
    moreFilters,
    locations,
    propertyTypes,
    categories,
    priceRangeLabels,
    bedsOptions,
    bathsOptions,
    floorAreaLabels,
    yearOptions,
    filteredProperties,
    paginatedProperties,
    currentPage,
    totalPages,
    paginationRange,
    selectedPropertyId,
    handleLocationChange,
    handlePriceChange,
    handleTypeChange,
    handleApplyMoreFilters,
    handleBrowse,
    handlePageChange,
    handlePrevious,
    handleNext,
    handlePropertySelect,
    handleResetFilters,
  };
}
