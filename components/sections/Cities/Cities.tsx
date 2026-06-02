"use client";

import { useState } from "react";

import { CarouselControls } from "@/components/ui";
import { ButtonText, MotionSection } from "@/components/ui";
import CitiesCard from "@/components/shared/CitiesCard/CitiesCard";
import { cities } from "@/lib/data";

export default function Cities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = cities.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <MotionSection className="flex flex-col gap-6 md:gap-16">
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
            <div key={city.id} className="shrink-0 w-full">
              <CitiesCard {...city} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8">
        {cities.map((city) => (
          <CitiesCard key={city.id} {...city} />
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
    </MotionSection>
  );
}
