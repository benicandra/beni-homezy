"use client";

import { useState } from "react";
import TestimonialCard from "@/components/shared/TestimonialCard/TestimonialCard";

import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

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

      <div className="overflow-hidden -mr-6 lg:-mr-35">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
          aria-label="Testimonials carousel"
        >
          {testimonialsData.map((item, index) => (
            <TestimonialCard
              key={index}
              rating={item.rating}
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-10">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous testimonial"
          className="disabled:opacity-40 disabled:cursor-not-allowed transition-opacity p-2.5 rounded-[15px] border border-foreground bg-foreground text-white hover:bg-lavender hover:border-lavender"
        >
          <ArrowLeftIcon className="size-10" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next testimonial"
          className="disabled:opacity-40 disabled:cursor-not-allowed transition-opacity p-2.5 rounded-[15px] border border-foreground bg-foreground text-white hover:bg-lavender hover:border-lavender"
        >
          <ArrowRightIcon className="size-10" />
        </button>
      </div>
    </section>
  );
}
