import type { Metadata } from "next";

import PropertySearch from "@/components/sections/PropertySearch/PropertySearch";

export const metadata: Metadata = {
  title: "Browse Properties",
  description:
    "Search and filter properties by location, price, type, and more. Browse apartments, houses, villas, and studios for rent or sale.",
  alternates: {
    canonical: "/properties",
  },
  openGraph: {
    title: "Browse Properties | Homezy",
    description:
      "Search and filter properties by location, price, type, and more. Find your ideal home today.",
    url: "/properties",
  },
};

export default function Properties() {
  return (
    <div>
      <PropertySearch />
    </div>
  );
}
