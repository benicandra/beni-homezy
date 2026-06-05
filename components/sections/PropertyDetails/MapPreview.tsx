"use client";

import dynamic from "next/dynamic";

import { properties } from "@/lib/data";

const Map = dynamic(() => import("@/components/shared/Map/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-80 w-full animate-pulse rounded-[15px] bg-lavender-40" />
  ),
});

const mapProperty = properties[1];

export default function MapPreview() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Map View
      </h2>
      <div className="h-80 overflow-hidden rounded-[15px] border border-[#E5E5E5] ">
        <Map
          properties={[mapProperty]}
          selectedPropertyId={mapProperty.id}
          onPropertySelect={() => undefined}
          zoomControlPosition="topright"
        />
      </div>
    </section>
  );
}
