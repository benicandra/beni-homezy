"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonText, MotionSection } from "@/components/ui";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import PropertySummaryStats from "@/components/shared/PropertySummaryStats/PropertySummaryStats";
import { featuredProperties, featuredPropertyStats, properties } from "@/lib/data";

import FeaturedIcon from "@/assets/icons/featured.svg";
import CallIcon from "@/assets/icons/call.svg";
import LocationIcon from "@/assets/icons/location-linear.svg";

export default function Featured() {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 134;

  const description = featuredProperties.description;
  const isLongDescription = description.length > maxDescriptionLength;
  const displayDescription =
    isExpanded || !isLongDescription
      ? description
      : description.substring(0, maxDescriptionLength).trim() + "...";

  return (
    <MotionSection className="flex flex-col gap-4 lg:gap-12">
      <div className="flex flex-col gap-0 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-[32px] lg:text-5xl leading-tight font-semibold tracking-tight text-foreground">
            Featured Listings
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Featured</ButtonText>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] bg-white rounded-[15px] border border-lavender-40">
          <div className="relative w-full h-75 lg:w-100 xl:w-125 lg:h-auto shrink-0">
            <div className="absolute inset-0 overflow-hidden rounded-t-[14px] lg:rounded-tr-none lg:rounded-l-[14px]">
              <Image
                src={featuredProperties.image}
                alt={featuredProperties.title}
                fill
                sizes="(min-width: 1024px) 500px, calc(100vw - 48px)"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-carnation opacity-20"></div>
            </div>

            <FeaturedIcon className="absolute top-6 -left-2 w-28.25 h-10 text-white z-10" />
          </div>

          <div className="w-full py-6 px-4 lg:px-8 flex flex-col justify-between gap-6 lg:gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[40px] leading-none font-bold text-foreground">
                    {featuredProperties.price}
                  </span>
                  <span className="text-[#868893] font-light text-lg">
                    {featuredProperties.priceSuffix}
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src={featuredProperties.agent.image}
                      alt={featuredProperties.agent.name}
                      width={40}
                      height={40}
                      className="rounded-full bg-lavender-40 object-cover"
                    />
                    <div className="hidden sm:block">
                      <p className="text-base font-bold text-foreground">
                        {featuredProperties.agent.name}
                      </p>
                      <p className="text-[13px] text-[#868893]">
                        {featuredProperties.agent.role}
                      </p>
                    </div>
                  </div>
                  <CallIcon className="w-8 h-8 text-black fill-black" />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl lg:text-[32px] leading-tight font-semibold text-foreground">
                    {featuredProperties.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[#686A79]">
                    <LocationIcon className="w-5.5 h-5.5" />
                    <p className="text-base lg:text-lg font-light">
                      {featuredProperties.address}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#686A79] text-lg leading-relaxed font-light transition-all duration-300">
                    {displayDescription}{" "}
                    {isLongDescription && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="font-semibold text-foreground cursor-pointer hover:text-lavender bg-transparent border-none p-0 inline focus:outline-none"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <PropertySummaryStats stats={featuredPropertyStats} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              price={property.price}
              priceSuffix={property.priceSuffix}
              title={property.title}
              address={property.address}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
