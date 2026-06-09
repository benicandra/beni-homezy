"use client";

import { useState, useRef } from "react";
import GalleryIcon from "@/assets/icons/gallery.svg";
import { Select, Button } from "@/components/ui";
import { useModalBehavior } from "@/lib/hooks/useModalBehavior";
import type { MoreFilters } from "@/lib/types";

interface MoreFilterModalProps {
  values: MoreFilters;
  categories: string[];
  bedsOptions: string[];
  bathsOptions: string[];
  floorAreaLabels: string[];
  yearOptions: string[];
  onApply: (filters: MoreFilters) => void;
  onClose: () => void;
}

export default function MoreFilterModal({
  values,
  categories,
  bedsOptions,
  bathsOptions,
  floorAreaLabels,
  yearOptions,
  onApply,
  onClose,
}: MoreFilterModalProps) {
  const [localFilters, setLocalFilters] = useState<MoreFilters>(values);
  const modalRef = useRef<HTMLDivElement>(null);

  useModalBehavior({ ref: modalRef, onClose });

  const handleLocalChange = (filters: Partial<MoreFilters>) => {
    setLocalFilters((prev) => ({ ...prev, ...filters }));
  };

  const handleApply = () => {
    onApply(localFilters);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div
      ref={modalRef}
      className="absolute top-[calc(100%+16px)] right-0 bg-white rounded-[24px] shadow-[0px_20px_60px_rgba(0,0,0,0.08)] border border-[#F3F4F6] p-6 w-[380px] z-[100] flex flex-col gap-6 cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="font-bold text-[22px] text-foreground tracking-tight">More Filters</h3>

      <div className="flex bg-lavender-20 rounded-[16px] p-1.5">
        <Button
          type="button"
          variant="toggle"
          active={localFilters.listingType === "sale"}
          onClick={() => handleLocalChange({ listingType: "sale" })}
          className="flex-1 rounded-[12px] py-3.5 text-[15px] px-0"
        >
          For Sale
        </Button>
        <Button
          type="button"
          variant="toggle"
          active={localFilters.listingType === "rent"}
          onClick={() => handleLocalChange({ listingType: "rent" })}
          className="flex-1 gap-2 rounded-[12px] py-3.5 text-[15px] px-0"
        >
          {localFilters.listingType !== "rent" && <GalleryIcon className="w-[18px] h-[18px] text-lavender-80" />}
          For Rent
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <label className="text-[15px] font-bold text-foreground">Category</label>
          <Select
            placeholder="Category"
            options={categories.filter(Boolean)}
            value={localFilters.category}
            onChange={(val) => handleLocalChange({ category: val })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2.5">
            <label className="text-[15px] font-bold text-foreground">Bedrooms</label>
            <Select
              placeholder="Select"
              options={bedsOptions}
              value={localFilters.beds}
              onChange={(val) => handleLocalChange({ beds: val })}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-[15px] font-bold text-foreground">Bathrooms</label>
            <Select
              placeholder="Select"
              options={bathsOptions}
              value={localFilters.baths}
              onChange={(val) => handleLocalChange({ baths: val })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[15px] font-bold text-foreground">Floor Area</label>
          <Select
            placeholder="Select Area"
            options={floorAreaLabels}
            value={localFilters.floorArea}
            onChange={(val) => handleLocalChange({ floorArea: val })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-1">
          <div className="flex flex-col gap-2.5">
            <label className="text-[15px] font-bold text-foreground">Min Year</label>
            <Select
              placeholder="Min Year"
              options={yearOptions}
              value={localFilters.minYear}
              onChange={(val) => handleLocalChange({ minYear: val })}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-[15px] font-bold text-foreground">Max Year</label>
            <Select
              placeholder="Max Year"
              options={yearOptions}
              value={localFilters.maxYear}
              onChange={(val) => handleLocalChange({ maxYear: val })}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <button
          type="button"
          onClick={handleCancel}
          className="flex items-center justify-center gap-2 bg-lavender-20 hover:bg-lavender-40 transition-colors rounded-[16px] py-4 text-[15px] font-bold text-foreground"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleApply}
          className="bg-foreground hover:bg-[#2A2B36] transition-colors text-white rounded-[16px] py-4 text-[15px] font-bold"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}
