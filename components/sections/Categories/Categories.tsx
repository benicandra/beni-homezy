import ButtonText from "@/components/ui/ButtonText";
import CategoryCard from "@/components/shared/CategoryCard/CategoryCard";

import BuildingIcon from "@/assets/icons/buliding.svg";
import BuildingsIcon from "@/assets/icons/buildings.svg";
import Buildings2Icon from "@/assets/icons/buildings-2.svg";

const categories = [
  {
    icon: BuildingsIcon,
    title: "Studio",
    description: "100+ listings",
  },
  {
    icon: BuildingIcon,
    title: "Apartment",
    description: "100+ listings",
  },
  {
    icon: Buildings2Icon,
    title: "Office",
    description: "100+ listings",
  },
];

export default function Categories() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Featured Listings
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Featured</ButtonText>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
