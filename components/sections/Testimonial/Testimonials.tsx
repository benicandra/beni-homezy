"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "@/components/shared/TestimonialCard/TestimonialCard";
import { CarouselControls, MotionSection } from "@/components/ui";
import { testimonials } from "@/lib/data";

const CARD_WIDTH_PX = 480;
const GAP_PX = 24;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - 1);

  useEffect(() => {
    const handleResize = () => {
      setMaxIndex(
        Math.max(0, testimonials.length - (window.innerWidth >= 1024 ? 2 : 1))
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (currentIndex > maxIndex) {
    setCurrentIndex(maxIndex);
  }

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const translateX = currentIndex * (CARD_WIDTH_PX + GAP_PX);

  return (
    <MotionSection className="w-screen relative left-1/2 -translate-x-1/2 flex flex-col gap-10 overflow-hidden">
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
          {testimonials.map((item) => (
            <div key={item.id} className="shrink-0 w-full">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
          aria-label="Testimonials carousel"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
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
    </MotionSection>
  );
}
