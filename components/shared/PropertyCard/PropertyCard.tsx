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
  layout?: "vertical" | "horizontal" | "compact";
  onClick?: () => void;
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
  layout = "vertical",
  onClick,
}: PropertyCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-[15px] border border-lavender-40 shadow-sm flex ${
        layout === "horizontal" ? "flex-col sm:flex-row" : "flex-col"
      } ${onClick ? "cursor-pointer hover:shadow-md hover:border-lavender transition-all duration-200" : ""}`}
    >
      <div
        className={`relative ${
          layout === "horizontal"
            ? "h-65 sm:h-auto sm:w-60 md:w-70 shrink-0"
            : layout === "compact"
              ? "h-48 w-full"
              : "h-65 w-full"
        }`}
      >
        <div
          className={`absolute inset-0 overflow-hidden ${
            layout === "horizontal"
              ? "rounded-t-[14px] sm:rounded-tr-none sm:rounded-l-[14px]"
              : "rounded-t-[14px]"
          }`}
        >
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
      <div
        className={`flex-1 flex flex-col ${
          layout === "horizontal"
            ? "gap-3 p-5 sm:p-6"
            : layout === "compact"
              ? "gap-3 p-5"
              : "gap-4 py-8 px-6"
        }`}
      >
        <div
          className={`flex flex-col ${layout === "horizontal" ? "gap-2" : layout === "compact" ? "gap-2" : "gap-4"}`}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span
                className={`font-bold text-foreground ${layout === "horizontal" ? "text-[28px]" : layout === "compact" ? "text-2xl" : "text-[32px]"}`}
              >
                {price}
              </span>
              {priceSuffix && (
                <span className="text-[#868893] font-light text-sm">
                  {priceSuffix}
                </span>
              )}
            </div>
            <h4
              className={`leading-tight font-semibold text-foreground ${layout === "horizontal" ? "text-xl" : layout === "compact" ? "text-[19px]" : "text-[22px]"}`}
            >
              {title}
            </h4>
          </div>
          <div>
            <p className="text-[15px] font-light text-[#868893] flex-1">
              {address}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center border-t border-[#F2F2F2] mt-auto ${layout === "horizontal" ? "pt-4 gap-4" : layout === "compact" ? "pt-4 gap-2" : "pt-6 gap-3 lg:gap-3 xl:gap-6"}`}
        >
          <div className="flex items-center gap-2 text-sm text-foreground font-medium whitespace-nowrap">
            <BedIcon
              className={`w-5 h-5 ${layout === "horizontal" ? "" : "lg:w-5 xl:w-6 lg:h-5 xl:h-6"}`}
            />{" "}
            {beds} Beds
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground font-medium whitespace-nowrap">
            <BathIcon
              className={`w-5 h-5 ${layout === "horizontal" ? "" : "lg:w-5 xl:w-6 lg:h-5 xl:h-6"}`}
            />{" "}
            {baths} Baths
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground font-medium whitespace-nowrap">
            <AreaIcon
              className={`w-5 h-5 ${layout === "horizontal" ? "" : "lg:w-5 xl:w-6 lg:h-5 xl:h-6"}`}
            />{" "}
            {area}
          </div>
        </div>
      </div>
    </div>
  );
}
