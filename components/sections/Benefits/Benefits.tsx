"use client";

import { useState } from "react";

import { CarouselControls, MotionSection } from "@/components/ui";
import BenefitCard from "@/components/shared/BenefitCard/BenefitCard";
import { benefits } from "@/lib/data";

export default function Benefits() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = benefits.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <MotionSection className="flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-121.5">
          <h2 className="text-[32px] lg:text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Comfort Is Our Top Priority For You
          </h2>
        </div>
        <div className="lg:w-115.5">
          <p className="text-lg font-light">
            We guarantee that the products we sell will make our customers happy
            because we are very concerned about our consumer satisfaction
          </p>
        </div>
      </div>

      <div className="block md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          aria-label="Benefits carousel"
        >
          {benefits.map((benefit) => (
            <div key={benefit.id} className="shrink-0 w-full">
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>

      <CarouselControls
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === maxIndex}
        prevAriaLabel="Previous benefit"
        nextAriaLabel="Next benefit"
        className="md:hidden"
      />
    </MotionSection>
  );
}
