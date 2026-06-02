import PropertySummaryStats from "@/components/shared/PropertySummaryStats/PropertySummaryStats";
import { propertyDetailsStats } from "@/lib/data";

export default function PropertyStats() {
  return <PropertySummaryStats stats={propertyDetailsStats} />;
}
