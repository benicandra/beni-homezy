"use client";

import BrowseFilterItem from "@/components/shared/BrowseFilterItem/BrowseFilterItem";
import { Button } from "@/components/ui";
import { properties } from "@/lib/data";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import dynamic from "next/dynamic";
import { useState } from "react";

import LocationIcon from "@/assets/icons/location.svg";
import DollarIcon from "@/assets/icons/dollar-square.svg";
import HouseIcon from "@/assets/icons/house.svg";
import CandleIcon from "@/assets/icons/candle.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left-lite.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right-lite.svg";
import GridIcon from "@/assets/icons/grid.svg";
import RowIcon from "@/assets/icons/row.svg";

const Map = dynamic(() => import("@/components/shared/Map/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-lavender-40 animate-pulse rounded-[15px]"></div>
  ),
});

export default function PropertySearch() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="text-[32px] lg:text-5xl leading-tight font-semibold tracking-tight text-foreground">
          Search Properties
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-full bg-white border border-foreground rounded-[15px] p-4 lg:p-3 lg:pl-6">
          <BrowseFilterItem
            icon={LocationIcon}
            label="Location"
            value="California, US"
          />
          <BrowseFilterItem
            icon={DollarIcon}
            label="Price"
            value="$1500-$2500"
          />
          <BrowseFilterItem
            icon={HouseIcon}
            label="Type of Property"
            value="Apartment"
          />

          <div className="flex items-center justify-end lg:col-span-1 w-full mt-4 lg:mt-0">
            <Button className="w-full lg:w-auto px-10">Browse</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-8 py-4 bg-lavender-40 border rounded-[15px] border-foreground cursor-pointer hover:bg-lavender-80 transition-colors shrink-0 h-full">
          <CandleIcon className="w-6 h-6" />

          <p className="text-base font-medium whitespace-nowrap">More Filter</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full h-[500px] lg:h-full lg:min-h-[600px] rounded-[15px] overflow-hidden border border-[#E5E5E5]">
          <Map />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[32px] font-semibold text-foreground tracking-tight">
              124 Results
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode("grid")}
                className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                  viewMode === "grid"
                    ? "border border-foreground text-foreground bg-transparent hover:bg-lavender-40"
                    : "border border-transparent text-[#868893] hover:bg-lavender-40 hover:text-foreground"
                }`}
              >
                <GridIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                  viewMode === "list"
                    ? "border border-foreground text-foreground bg-transparent hover:bg-lavender-40"
                    : "border border-transparent text-[#868893] hover:bg-lavender-40 hover:text-foreground"
                }`}
              >
                <RowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 xl:grid-cols-2 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {properties.slice(0, 4).map((property) => (
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
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-[#868893] font-medium text-lg">
            <button className="p-2 hover:text-foreground transition-colors">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-[10px] bg-foreground text-white flex items-center justify-center transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-[10px] hover:bg-lavender-40 hover:text-foreground flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-[10px] hover:bg-lavender-40 hover:text-foreground flex items-center justify-center transition-colors">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-10 h-10 rounded-[10px] hover:bg-lavender-40 hover:text-foreground flex items-center justify-center transition-colors">
              15
            </button>
            <button className="p-2 hover:text-foreground transition-colors">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
