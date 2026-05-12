"use client";

import { useState } from "react";
import TestimonialCard from "@/components/shared/TestimonialCard/TestimonialCard";
import { CarouselControls } from "@/components/ui";

const testimonialsData = [
  {
    rating: 5,
    quote:
      "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
    name: "Brooklyn Simmons",
    role: "CEO of Asana",
  },
  {
    rating: 5,
    quote:
      "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
    name: "Brooklyn Simmons",
    role: "CEO of Asana",
  },
  {
    rating: 5,
    quote:
      "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
    name: "Brooklyn Simmons",
    role: "CEO of Asana",
  },
  {
    rating: 5,
    quote:
      "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
    name: "Brooklyn Simmons",
    role: "CEO of Asana",
  },
];

const CARD_WIDTH_PX = 480;
const GAP_PX = 24;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonialsData.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const translateX = currentIndex * (CARD_WIDTH_PX + GAP_PX);

  return (
    <section className="flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Kind Words From Our Customers
        </h2>
      </div>

      <div className="block lg:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonialsData.map((item, index) => (
            <div key={index} className="shrink-0 w-full">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block overflow-hidden lg:-mr-35">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
          aria-label="Testimonials carousel"
        >
          {testimonialsData.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>

      <CarouselControls
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === maxIndex}
        prevAriaLabel="Previous testimonial"
        nextAriaLabel="Next testimonial"
      />
    </section>
  );
}
