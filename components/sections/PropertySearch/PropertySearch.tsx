"use client";

import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import Pagination from "@/components/shared/Pagination/Pagination";
import FilterBar from "./FilterBar";
import ViewModeToggle from "./ViewModeToggle";
import { usePropertyFilters } from "@/lib/hooks/usePropertyFilters";
import dynamic from "next/dynamic";
import { useState } from "react";

const Map = dynamic(() => import("@/components/shared/Map/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-125 lg:min-h-150 bg-lavender-40 animate-pulse rounded-[15px]" />
  ),
});

export default function PropertySearch() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const {
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
  } = usePropertyFilters();

  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="text-[32px] lg:text-5xl leading-tight font-semibold tracking-tight text-foreground">
          Search Properties
        </h2>
      </div>

      <FilterBar
        selectedLocation={selectedLocation}
        selectedPrice={selectedPriceLabel}
        selectedType={selectedPropertyType}
        locations={locations}
        priceRangeLabels={priceRangeLabels}
        propertyTypes={propertyTypes}
        onLocationChange={handleLocationChange}
        onPriceChange={handlePriceChange}
        onTypeChange={handleTypeChange}
        onBrowse={handleBrowse}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full h-125 lg:h-full lg:min-h-150 rounded-[15px] overflow-hidden border border-[#E5E5E5]">
          <Map
            properties={filteredProperties}
            selectedPropertyId={selectedPropertyId}
            onPropertySelect={handlePropertySelect}
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[32px] font-semibold text-foreground tracking-tight">
              {filteredProperties.length} Results
            </h3>
            <ViewModeToggle viewMode={viewMode} onChange={setViewMode} />
          </div>

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 xl:grid-cols-2 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {paginatedProperties.map((property) => (
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
                layout={viewMode === "list" ? "horizontal" : "vertical"}
                onClick={() => handlePropertySelect(property.id)}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginationRange={paginationRange}
            onPageChange={handlePageChange}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
}
