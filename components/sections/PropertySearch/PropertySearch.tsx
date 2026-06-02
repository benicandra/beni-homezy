"use client";

import Image from "next/image";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { MotionSection } from "@/components/ui";
import { Button } from "@/components/ui";
import Pagination from "@/components/shared/Pagination/Pagination";
import FilterBar from "./FilterBar";
import ViewModeToggle from "./ViewModeToggle";
import { usePropertyFilters } from "@/lib/hooks/usePropertyFilters";
import resultImage from "@/assets/result.png";
import dynamic from "next/dynamic";
import { useState } from "react";

const Map = dynamic(() => import("@/components/shared/Map/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-125 lg:min-h-150 bg-lavender-40 animate-pulse rounded-[15px]" />
  ),
});

export default function PropertySearch() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");

  const {
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
  } = usePropertyFilters();

  return (
    <MotionSection className="flex flex-col gap-10">
      <div>
        <h2 className="text-[32px] lg:text-5xl leading-tight font-semibold tracking-tight text-foreground">
          Search Properties
        </h2>
      </div>

      <FilterBar
        selectedLocation={selectedLocation}
        selectedPrice={selectedPriceLabel}
        selectedType={selectedPropertyType}
        moreFilters={moreFilters}
        locations={locations}
        priceRangeLabels={priceRangeLabels}
        propertyTypes={propertyTypes}
        categories={categories}
        bedsOptions={bedsOptions}
        bathsOptions={bathsOptions}
        floorAreaLabels={floorAreaLabels}
        yearOptions={yearOptions}
        onLocationChange={handleLocationChange}
        onPriceChange={handlePriceChange}
        onTypeChange={handleTypeChange}
        onApplyMoreFilters={handleApplyMoreFilters}
        onBrowse={handleBrowse}
      />

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 lg:grid-cols-2 gap-10"
            : "flex flex-col gap-10"
        }
      >
        <div className="w-full h-125 lg:h-full lg:min-h-150 rounded-[15px] overflow-hidden border border-[#E5E5E5]">
          <Map
            properties={filteredProperties}
            selectedPropertyId={selectedPropertyId}
            onPropertySelect={handlePropertySelect}
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-3 gap-1">
              <h3 className="text-[32px] font-semibold text-foreground tracking-tight">
                {filteredProperties.length} Results
              </h3>
              <Button
                variant="outline"
                size="small"
                onClick={handleResetFilters}
              >
                Reset
              </Button>
            </div>
            <ViewModeToggle viewMode={viewMode} onChange={setViewMode} />
          </div>

          <div className="flex flex-col gap-6">
            {filteredProperties.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-6 py-10">
                <Image
                  src={resultImage}
                  alt="No results found"
                  className="w-60 h-auto"
                />
                <p className="text-xl font-semibold text-foreground">
                  No properties found
                </p>
              </div>
            ) : (
              paginatedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  price={property.price}
                  priceSuffix={property.priceSuffix}
                  title={property.title}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  area={property.area}
                  isFeatured={false}
                  layout="horizontal"
                  onClick={() => handlePropertySelect(property.id)}
                />
              ))
            )}
          </div>

          {filteredProperties.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginationRange={paginationRange}
              onPageChange={handlePageChange}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </MotionSection>
  );
}
