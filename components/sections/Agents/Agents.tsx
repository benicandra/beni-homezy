"use client";

import { useState } from "react";

import { CarouselControls, MotionSection } from "@/components/ui";
import ButtonText from "@/components/ui/ButtonText";
import AgentCard from "@/components/shared/AgentCard/AgentCard";
import { agents } from "@/lib/data";

export default function Agents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = agents.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <MotionSection className="flex flex-col gap-16">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-[32px] lg:text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Meet Our Agents
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Agents</ButtonText>
        </div>
      </div>

      <div className="block md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          aria-label="Agents carousel"
        >
          {agents.map((agent) => (
            <div key={agent.id} className="shrink-0 w-full">
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 md:gap-5 lg:gap-10">
        {agents.map((agent) => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>

      <CarouselControls
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === maxIndex}
        prevAriaLabel="Previous agent"
        nextAriaLabel="Next agent"
        className="md:hidden"
      />
    </MotionSection>
  );
}
