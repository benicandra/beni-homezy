import Image from "next/image";
import { ButtonText } from "@/components/ui";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";

import FeaturedIcon from "@/assets/icons/featured.svg";
import CallIcon from "@/assets/icons/call.svg";
import LocationIcon from "@/assets/icons/location-linear.svg";
import BedIcon from "@/assets/icons/bed.svg";
import BathIcon from "@/assets/icons/bath.svg";
import AreaIcon from "@/assets/icons/surface-area.svg";
import RepairIcon from "@/assets/icons/repair.svg";

import Agent8 from "@/assets/agents/agents-8.png";
import Prop4 from "@/assets/properties/properties-4.webp";
import PropFeat1 from "@/assets/properties/properties-1-feat.png";
import PropFeat2 from "@/assets/properties/properties-2-feat.png";
import PropFeat3 from "@/assets/properties/properties-3-feat.png";

export default function Featured() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Featured Listings
          </h2>
        </div>
        <div>
          <ButtonText>Browse All Featured</ButtonText>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row bg-white rounded-[15px] border border-lavender-40 mb-12">
          <div className="relative w-full h-75 lg:w-125 lg:h-105 shrink-0">
            <Image
              src={Prop4}
              alt="COVA Home Realty"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-carnation opacity-20"></div>
            <FeaturedIcon className="absolute top-6 -left-2 w-28.25 h-10 text-white" />
          </div>

          <div className="w-full lg:w-165 py-6 px-8  flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[40px] leading-none font-bold text-foreground">
                    $2,095
                  </span>
                  <span className="text-[#868893] font-light text-lg">
                    /month
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src={Agent8}
                      alt="Edwin Martins"
                      width={40}
                      height={40}
                      className="rounded-full bg-lavender-40 object-cover"
                    />
                    <div className="hidden sm:block">
                      <p className="text-base font-bold text-foreground">
                        Edwin Martins
                      </p>
                      <p className="text-[13px] text-[#868893]">
                        Property Advisor
                      </p>
                    </div>
                  </div>
                  <CallIcon className="w-8 h-8 text-black fill-black" />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[32px] leading-tight font-semibold text-foreground">
                    COVA Home Realty
                  </h4>
                  <div className="flex items-center gap-2 text-[#686A79]">
                    <LocationIcon className="w-5.5 h-5.5" />
                    <p className="text-lg font-light">
                      2699 Green Valley, Highland Lake, FL
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#686A79] text-lg leading-relaxed font-light">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation{" "}
                    <span className="font-semibold text-foreground cursor-pointer hover:text-lavender">
                      Read More
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F4FA] rounded-[15px] p-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-base text-[#868893] font-light">
                  3 Bedrooms
                </span>
                <div className="flex items-center gap-2 font-bold text-base text-foreground">
                  <BedIcon className="w-6 h-6" /> 4
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-[#868893] font-light">
                  Bathrooms
                </span>
                <div className="flex items-center gap-2 font-bold text-base text-foreground">
                  <BathIcon className="w-6 h-6" /> 4
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-[#868893] font-light">
                  Square Area
                </span>
                <div className="flex items-center gap-2 font-bold text-base text-foreground">
                  <AreaIcon className="w-6 h-6" /> 6x8 m²
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base text-[#868893] font-light">
                  Square Area
                </span>
                <div className="flex items-center gap-2 font-bold text-base text-foreground">
                  <RepairIcon className="w-6 h-6" /> Modern Loft
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PropertyCard
            image={PropFeat3}
            price="$15,000"
            priceSuffix="/month"
            title="Beach Pros Realty Inc."
            address="37 Ambleside Gardens, Ilford, IG4 5HH"
            beds={3}
            baths={2}
            area="5x7 m²"
          />
          <PropertyCard
            image={PropFeat2}
            price="$4,299"
            priceSuffix="/month"
            title="Beacon Homes LLC"
            address="3 Leame Close, Hull, HU3 6ND"
            beds={3}
            baths={2}
            area="5x7 m²"
          />
          <PropertyCard
            image={PropFeat1}
            price="$5,099"
            priceSuffix="/month"
            title="Herringbone Realty"
            address="28B Highgate Road, London, NW5 1NS"
            beds={3}
            baths={2}
            area="5x7 m²"
          />
        </div>
      </div>
    </section>
  );
}
