import type { Metadata } from "next";

import PropertyDetails from "@/components/sections/PropertyDetails/PropertyDetails";

export const metadata: Metadata = {
  title: "Property Details",
  description:
    "View property details including photos, description, amenities, location map, and agent contact information.",
  alternates: {
    canonical: "/property-details",
  },
  openGraph: {
    title: "Property Details | Homezy",
    description:
      "View property details including photos, description, amenities, and location map.",
    url: "/property-details",
  },
};

export default function PropertyDetailsPage() {
  return <PropertyDetails />;
}
