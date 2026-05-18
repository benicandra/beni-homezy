import BrowseFilterItem from "@/components/shared/BrowseFilterItem/BrowseFilterItem";
import { Button } from "@/components/ui";

import LocationIcon from "@/assets/icons/location.svg";
import DollarIcon from "@/assets/icons/dollar-square.svg";
import HouseIcon from "@/assets/icons/house.svg";
import CandleIcon from "@/assets/icons/candle.svg";

export default function PropertySearch() {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="text-[32px] lg:text-5xl leading-tight font-semibold tracking-tight text-foreground">
          Search Properties
        </h2>
      </div>

      <div className="flex flex-row gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6 p-5 w-full bg-white lg:bg-transparent border border-foreground rounded-[15px] lg:pt-6">
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

          <div className="flex items-center lg:col-span-1">
            <Button className="w-full">Browse</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-8 bg-lavender-40 border rounded-[15px] border-foreground">
          <CandleIcon className="w-6 h-6" />

          <p className="text-base font-medium whitespace-nowrap">More Filter</p>
        </div>
      </div>
    </section>
  );
}
