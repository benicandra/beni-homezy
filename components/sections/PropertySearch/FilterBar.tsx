"use client";

import { useState } from "react";
import FilterBarBase from "@/components/shared/FilterBarBase/FilterBarBase";
import MoreFilterModal from "./MoreFilterModal";
import type { MoreFilters } from "@/lib/types";

import CandleIcon from "@/assets/icons/candle.svg";

interface FilterBarProps {
  selectedLocation: string;
  selectedPrice: string;
  selectedType: string;
  moreFilters: MoreFilters;
  locations: string[];
  priceRangeLabels: string[];
  propertyTypes: string[];
  categories: string[];
  bedsOptions: string[];
  bathsOptions: string[];
  floorAreaLabels: string[];
  yearOptions: string[];
  onLocationChange: (value: string) => void;
  onPriceChange: (label: string) => void;
  onTypeChange: (value: string) => void;
  onApplyMoreFilters: (filters: MoreFilters) => void;
  onBrowse: () => void;
}

export default function FilterBar({
  selectedLocation,
  selectedPrice,
  selectedType,
  moreFilters,
  locations,
  priceRangeLabels,
  propertyTypes,
  categories,
  bedsOptions,
  bathsOptions,
  floorAreaLabels,
  yearOptions,
  onLocationChange,
  onPriceChange,
  onTypeChange,
  onApplyMoreFilters,
  onBrowse,
}: FilterBarProps) {
  const [isMoreFilterOpen, setIsMoreFilterOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  const handleToggleModal = () => {
    if (!isMoreFilterOpen) {
      setModalKey((prev) => prev + 1);
    }
    setIsMoreFilterOpen(!isMoreFilterOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
      <FilterBarBase
        location={selectedLocation}
        price={selectedPrice}
        propertyType={selectedType}
        locations={locations}
        priceRangeLabels={priceRangeLabels}
        propertyTypes={propertyTypes}
        onLocationChange={onLocationChange}
        onPriceChange={onPriceChange}
        onTypeChange={onTypeChange}
        onBrowse={onBrowse}
      />
      <div className="relative shrink-0">
        <div
          className="flex lg:flex-col items-center justify-center gap-3 px-8 py-4 bg-lavender-40 border rounded-[15px] border-foreground cursor-pointer hover:bg-lavender-80 transition-colors shrink-0 h-full"
          onClick={handleToggleModal}
        >
          <CandleIcon className="w-6 h-6" />
          <p className="text-base font-medium whitespace-nowrap">More Filter</p>
        </div>
        {isMoreFilterOpen && (
          <MoreFilterModal
            key={modalKey}
            values={moreFilters}
            categories={categories}
            bedsOptions={bedsOptions}
            bathsOptions={bathsOptions}
            floorAreaLabels={floorAreaLabels}
            yearOptions={yearOptions}
            onApply={onApplyMoreFilters}
            onClose={() => setIsMoreFilterOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
