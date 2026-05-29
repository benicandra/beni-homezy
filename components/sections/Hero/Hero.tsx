"use client";

import Image from "next/image";
import { MotionSection } from "@/components/ui";

import FilterBarBase from "@/components/shared/FilterBarBase/FilterBarBase";
import AgentMiniCard from "@/components/shared/AgentMiniCard/AgentMiniCard";
import { usePropertyFilters } from "@/lib/hooks/usePropertyFilters";
import { defaultSocialLinks } from "@/lib/data";

import Agents7 from "@/assets/agents/agents-7.png";
import Prop3 from "@/assets/properties/properties-3.webp";
import Prop1 from "@/assets/properties/properties-1.webp";
import BgText from "@/assets/bg-text.svg";
import Pattern from "@/assets/pattern.webp";

export default function Hero() {
  const {
    selectedLocation,
    selectedPriceLabel,
    selectedPropertyType,
    locations,
    priceRangeLabels,
    propertyTypes,
    handleLocationChange,
    handlePriceChange,
    handleTypeChange,
    handleBrowse,
  } = usePropertyFilters({ navigateToPath: "/properties" });

  return (
    <MotionSection className="relative flex flex-col gap-10 lg:gap-0 lg:block lg:h-132 pb-25 md:pb-32 pt-8 lg:pt-0">
      <div className="lg:block absolute top-0 bottom-0 lg:-top-20 lg:bottom-0 lg:h-175 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-[-1]">
        <div className="w-full max-w-[1440px] px-6 lg:px-35 mx-auto h-full relative">
          <div className="absolute -left-25 md:left-1/2 md:-translate-x-1/2 lg:left-208 lg:translate-x-0 top-0 lg:top-20 w-128.5 md:w-170 lg:w-128.5 h-full lg:block">
            <div className="absolute bottom-0 lg:bottom-auto lg:-top-10 -left-28.25 md:left-0 lg:left-[-90]">
              <Image
                src={Pattern}
                alt="Pattern"
                className="w-170 md:w-200 lg:w-174 h-auto max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[clamp(400px,52%,763px)] xl:w-190.75 flex flex-col gap-8 lg:gap-0 lg:justify-between lg:h-full relative z-10 transition-all duration-300">
        <div className="w-full xl:w-152 space-y-4 text-left">
          <div>
            <h1 className="font-semibold text-[42px] leading-tight md:text-6xl lg:text-[clamp(2.75rem,4.5vw,4.5rem)] lg:leading-tight xl:text-7xl xl:leading-22 tracking-[-4%]">
              We help people to realize their dream property
            </h1>
          </div>
          <div className="w-full xl:w-114.25 mx-auto lg:mx-0">
            <p className="font-light text-xl lg:text-[clamp(1.125rem,1.5vw,1.25rem)] lg:leading-relaxed xl:text-xl xl:leading-7.5 text-[#334561]">
              We are creative people who provide the best way to you who want to
              have a new comfortable and suitable place to live
            </p>
          </div>
        </div>

        <div className="lg:origin-top-left lg:scale-[0.75] xl:scale-100 lg:w-[133.33%] xl:w-full transition-all duration-300">
          <FilterBarBase
            location={selectedLocation}
            price={selectedPriceLabel}
            propertyType={selectedPropertyType}
            locations={locations}
            priceRangeLabels={priceRangeLabels}
            propertyTypes={propertyTypes}
            onLocationChange={handleLocationChange}
            onPriceChange={handlePriceChange}
            onTypeChange={handleTypeChange}
            onBrowse={handleBrowse}
            className="lg:bg-transparent lg:pt-6"
          />
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-12 lg:mt-0 lg:absolute lg:top-0 lg:right-0 lg:w-[45%] lg:h-full lg:block">
        <div className="relative w-full max-w-[514px] aspect-514/528">
          <AgentMiniCard
            className="absolute top-[9.5%] left-[40.7%] w-[49.2%]"
            name="Edwin Martins"
            role="Property Advisor"
            image={Agents7}
            imageAlt="Edwin Martins"
            socialLinks={defaultSocialLinks}
            socialLinkClassName="w-3 h-3 md:w-[16.5px] md:h-[16.5px] bg-[#686A79]"
            socialIconClassName="size-3 md:size-5 [&>path:first-child]:fill-[#686A79] [&>path:last-child]:fill-white"
          />

          <div className="absolute top-0 left-0 w-[48.2%] h-[70%]">
            <div className="relative h-[70%] border-2 rounded-t-[clamp(26px,3vw,40px)] overflow-hidden">
              <Image
                src={Prop3}
                alt="Illustration 2"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 230px, 248px"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[30%] rounded-b-[clamp(26px,3vw,40px)] overflow-hidden flex items-center justify-center px-[6%]">
              <BgText className="absolute inset-0 w-full h-full" />
              <p className="relative z-10 text-white font-light text-[clamp(9px,1.1vw,14px)] leading-snug text-center w-[80%]">
                We provide our best properties to give great services possible
              </p>
            </div>
          </div>

          <div className="absolute top-[35.6%] left-[51.7%] w-[48.2%] h-[64.4%] border-2 rounded-[clamp(26px,3vw,40px)] overflow-hidden">
            <Image
              src={Prop1}
              alt="Illustration 3"
              fill
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 230px, 248px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
