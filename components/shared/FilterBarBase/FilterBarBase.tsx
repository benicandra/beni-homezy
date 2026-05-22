"use client";

import BrowseFilterItem from "@/components/shared/BrowseFilterItem/BrowseFilterItem";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import LocationIcon from "@/assets/icons/location.svg";
import DollarIcon from "@/assets/icons/dollar-square.svg";
import HouseIcon from "@/assets/icons/house.svg";

interface FilterBarBaseProps {
  location: string;
  price: string;
  propertyType: string;
  locations?: string[];
  priceRangeLabels?: string[];
  propertyTypes?: string[];
  onLocationChange?: (value: string) => void;
  onPriceChange?: (label: string) => void;
  onTypeChange?: (value: string) => void;
  onBrowse?: () => void;
  className?: string;
  browseButtonClassName?: string;
}

export default function FilterBarBase({
  location,
  price,
  propertyType,
  locations,
  priceRangeLabels,
  propertyTypes,
  onLocationChange,
  onPriceChange,
  onTypeChange,
  onBrowse,
  className,
  browseButtonClassName,
}: FilterBarBaseProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-4 items-center w-full bg-white border border-foreground rounded-[15px] p-4 gap-8 lg:p-3 lg:pl-6",
        className
      )}
    >
      <BrowseFilterItem
        icon={LocationIcon}
        label="Location"
        value={location}
        options={locations}
        onChange={onLocationChange}
      />
      <BrowseFilterItem
        icon={DollarIcon}
        label="Price"
        value={price}
        options={priceRangeLabels}
        onChange={onPriceChange}
      />
      <BrowseFilterItem
        icon={HouseIcon}
        label="Type of Property"
        value={propertyType}
        options={propertyTypes}
        onChange={onTypeChange}
      />

      <div className="flex items-center justify-end lg:col-span-1 w-full mt-4 lg:mt-0">
        <Button
          className={cn(
            "w-full lg:w-auto px-10 cursor-pointer",
            browseButtonClassName
          )}
          onClick={onBrowse}
        >
          Browse
        </Button>
      </div>
    </div>
  );
}
