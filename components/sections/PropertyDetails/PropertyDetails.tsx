import Image from "next/image";
import Link from "next/link";

import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { Button, MotionSection } from "@/components/ui";
import { properties } from "@/lib/data";

import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import GalleryIcon from "@/assets/icons/gallery.svg";
import ShareIcon from "@/assets/icons/share.svg";
import PlayIcon from "@/assets/icons/send.svg";
import HeroImage from "@/assets/properties/properties-4.webp";

import PropertyDetailsAccordion from "./PropertyDetailsAccordion";
import PropertyGallery from "./PropertyGallery";
import PropertyStats from "./PropertyStats";

const similarListings = properties.slice(0, 3);

export default function PropertyDetails() {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      <section className="overflow-hidden rounded-[15px]">
        <div className="relative h-[420px] md:h-[520px] lg:h-[600px]">
          <Image
            src={HeroImage}
            alt="Beacon Homes LLC property exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10" />

          <Link
            href="/properties"
            className="absolute left-6 top-8 flex items-center gap-4 text-base font-bold text-foreground transition-colors hover:text-lavender md:left-35 md:text-lg"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back To Search
          </Link>

          <Button
            variant="outline"
            className="absolute bottom-8 left-6 bg-white hover:bg-lavender-20 md:left-35"
          >
            <GalleryIcon className="mr-2 h-5 w-5" />
            Show All Photos
          </Button>
        </div>
      </section>

      <MotionSection className="grid gap-10 lg:items-start">
        <div className="flex flex-col gap-14 lg:gap-20">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                  Beacon Homes LLC
                </h1>
                <p className="mt-3 text-lg font-light text-[#868893] md:text-xl">
                  3 Leame Close, Hull, HU3 6ND
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full gap-2 bg-transparent md:w-auto"
              >
                <ShareIcon className="h-5 w-5" />
                Share
              </Button>
            </div>

            <PropertyStats />
          </section>

          <section className="flex flex-col gap-7">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Description
            </h2>
            <p className="max-w-3xl text-base font-light leading-8 text-[#868893]">
              First time on market in 40 years. Detached two unit Victorian -
              vacant - with excellent bones on rear of huge (4552 sq ft) flat
              sunny lot on fabulous quiet block accessible to GG Park and
              neighborhood amenities. This property is tucked away behind a wood
              fence, and has a curb cut which provides for ample parking.
              Development opportunity? Income property with huge play space or
              garden? ADU? The possibilities on this special parcel are
              virtually endless. Large storage and laundry under rear of
              building. Quiet block between Arguello & Willard North. Two blocks
              to Rossi Park to the north, and two blocks to GG Park and the
              Conservatory of Flowers to the south. Close to multiple markets,
              cafes, restaurants, transportation.
            </p>
            <Link
              href="#"
              className="inline-flex w-fit items-center gap-3 text-base font-bold text-foreground transition-colors hover:text-lavender"
            >
              <PlayIcon className="h-5 w-5 rotate-45" />
              View Video Tour
            </Link>
          </section>

          <div className="h-px bg-[#D8D5E4]" />
          <PropertyDetailsAccordion />
          <div className="h-px bg-[#D8D5E4]" />
          <PropertyGallery />
          <div className="h-px bg-[#D8D5E4]" />
        </div>
      </MotionSection>

      <MotionSection className="flex flex-col gap-10">
        <h2 className="text-[38px] font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          Similar Listings
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {similarListings.map((property) => (
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
              layout="vertical"
            />
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
