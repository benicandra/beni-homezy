"use client";

import BrowseFilterItem from "@/components/shared/BrowseFilterItem/BrowseFilterItem";
import { Button } from "@/components/ui";

import LocationIcon from "@/assets/icons/location.svg";
import DollarIcon from "@/assets/icons/dollar-square.svg";
import HouseIcon from "@/assets/icons/house.svg";
import CandleIcon from "@/assets/icons/candle.svg";

interface FilterBarProps {
  selectedLocation: string;
  selectedPrice: string;
  selectedType: string;
  locations: string[];
  priceRangeLabels: string[];
  propertyTypes: string[];
  onLocationChange: (value: string) => void;
  onPriceChange: (label: string) => void;
  onTypeChange: (value: string) => void;
  onBrowse: () => void;
}

export default function FilterBar({
  selectedLocation,
  selectedPrice,
  selectedType,
  locations,
  priceRangeLabels,
  propertyTypes,
  onLocationChange,
  onPriceChange,
  onTypeChange,
  onBrowse,
}: FilterBarProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-full bg-white border border-foreground rounded-[15px] p-4 gap-8 lg:p-3 lg:pl-6">
        <BrowseFilterItem
          icon={LocationIcon}
          label="Location"
          value={selectedLocation}
          options={locations}
          onChange={onLocationChange}
        />
        <BrowseFilterItem
          icon={DollarIcon}
          label="Price"
          value={selectedPrice}
          options={priceRangeLabels}
          onChange={onPriceChange}
        />
        <BrowseFilterItem
          icon={HouseIcon}
          label="Type of Property"
          value={selectedType}
          options={propertyTypes}
          onChange={onTypeChange}
        />

        <div className="flex items-center justify-end lg:col-span-1 w-full mt-4 lg:mt-0">
          <Button className="w-full lg:w-auto px-10" onClick={onBrowse}>
            Browse
          </Button>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center gap-3 px-8 py-4 bg-lavender-40 border rounded-[15px] border-foreground cursor-pointer hover:bg-lavender-80 transition-colors shrink-0 h-full">
        <CandleIcon className="w-6 h-6" />
        <p className="text-base font-medium whitespace-nowrap">More Filter</p>
      </div>
    </div>
  );
}
