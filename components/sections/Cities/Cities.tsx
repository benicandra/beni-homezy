import { ButtonText } from "@/components/ui";
import CitiesCard from "@/components/shared/CitiesCard/CitiesCard";

import City1 from "@/assets/cities/cities-1.webp";
import City2 from "@/assets/cities/cities-2.webp";
import City3 from "@/assets/cities/cities-3.webp";

const cities = [
  {
    image: City3,
    title: "Pasadena, Oklahoma",
    description: "100+ listings",
  },
  {
    image: City2,
    title: "Lafayette, California",
    description: "100+ listings",
  },
  {
    image: City1,
    title: "New York",
    description: "100+ listings",
  },
];

export default function Cities() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Explore Cities
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Cities</ButtonText>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cities.map((city) => (
          <CitiesCard key={city.title} {...city} />
        ))}
      </div>
    </section>
  );
}
