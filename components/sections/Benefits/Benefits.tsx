"use client";

import { useState } from "react";

import { CarouselControls } from "@/components/ui";
import BenefitCard from "@/components/shared/BenefitCard/BenefitCard";

import CoinIcon from "@/assets/icons/coin.svg";
import LikeIcon from "@/assets/icons/like-shapes.svg";
import PeopleIcon from "@/assets/icons/people.svg";

const benefits = [
  {
    icon: CoinIcon,
    title: "Affordable Price",
    description:
      "We provide the best for you. The price we offer accordance with the quality we provide",
  },
  {
    icon: LikeIcon,
    title: "Clear Legality",
    description:
      "Put your trust in us. We are a legal entity with official legality in the relevant government",
  },
  {
    icon: PeopleIcon,
    title: "Experienced Agent",
    description:
      "We always work wih agents in their fields so that we can provide the best quality",
  },
];

export default function Benefits() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = benefits.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-[32px] lg:text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Comfort Is Our Top Priority For You
          </h2>
        </div>
        <div>
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
            <div key={benefit.title} className="shrink-0 w-full">
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
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
    </section>
  );
}
