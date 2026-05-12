"use client";

import { useState } from "react";

import { CarouselControls } from "@/components/ui";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = cities.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-[32px] lg:text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Explore Cities
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Cities</ButtonText>
        </div>
      </div>

      <div className="block md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          aria-label="Cities carousel"
        >
          {cities.map((city) => (
            <div key={city.title} className="shrink-0 w-full">
              <CitiesCard {...city} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {cities.map((city) => (
          <CitiesCard key={city.title} {...city} />
        ))}
      </div>

      <CarouselControls
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === maxIndex}
        prevAriaLabel="Previous city"
        nextAriaLabel="Next city"
        className="md:hidden"
      />
    </section>
  );
}
