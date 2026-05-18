import Image, { StaticImageData } from "next/image";

import FeaturedIcon from "@/assets/icons/featured.svg";
import BedIcon from "@/assets/icons/bed.svg";
import BathIcon from "@/assets/icons/bath.svg";
import AreaIcon from "@/assets/icons/surface-area.svg";

interface PropertyCardProps {
  image: StaticImageData;
  isFeatured?: boolean;
  price: string;
  priceSuffix?: string;
  title: string;
  address: string;
  beds: number | string;
  baths: number | string;
  area: string;
}

export default function PropertyCard({
  image,
  isFeatured = true,
  price,
  priceSuffix,
  title,
  address,
  beds,
  baths,
  area,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-[15px] border border-lavender-40 shadow-sm flex flex-col">
      <div className="relative h-65">
        <div className="absolute inset-0 overflow-hidden rounded-t-[14px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 30vw, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
        {isFeatured && (
          <FeaturedIcon className="absolute top-5 -left-2 w-28.25 h-10 text-white z-10" />
        )}
      </div>
      <div className="py-8 px-6 flex-1 gap-4 flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] font-bold text-foreground">
                {price}
              </span>
              {priceSuffix && (
                <span className="text-[#868893] font-light text-sm">
                  {priceSuffix}
                </span>
              )}
            </div>
            <h4 className="text-[22px] leading-tight font-semibold text-foreground">
              {title}
            </h4>
          </div>
          <div>
            <p className="text-[15px] font-light text-[#868893] flex-1">
              {address}
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center pt-6 border-t border-[#F2F2F2] gap-3 lg:gap-3 xl:gap-6">
          <div className="flex items-center gap-2 text-sm text-foreground font-medium">
            <BedIcon className="w-5 h-5 lg:w-5 xl:w-6 lg:h-5 xl:h-6" /> {beds}{" "}
            Beds
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground font-medium">
            <BathIcon className="w-5 h-5 lg:w-5 xl:w-6 lg:h-5 xl:h-6" /> {baths}{" "}
            Baths
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground font-medium">
            <AreaIcon className="w-5 h-5 lg:w-5 xl:w-6 lg:h-5 xl:h-6" /> {area}
          </div>
        </div>
      </div>
    </div>
  );
}
