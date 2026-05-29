import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

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
  className?: string;
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
  className,
}: PropertyCardProps) {
  const layoutStyles = {
    imageHeight:
      layout === "horizontal"
        ? "h-65 sm:h-auto sm:w-60 md:w-70 shrink-0"
        : layout === "compact"
          ? "h-48 w-full"
          : "h-60 lg:h-[210px] w-full shrink-0",
    imageRounded:
      layout === "horizontal"
        ? "rounded-t-[14px] sm:rounded-tr-none sm:rounded-l-[14px]"
        : "rounded-t-[14px]",
    bodyPadding:
      layout === "horizontal"
        ? "gap-3 p-5 sm:p-6"
        : layout === "compact"
          ? "gap-3 p-5"
          : "gap-3 p-5",
    titleSize:
      layout === "horizontal"
        ? "text-xl"
        : layout === "compact"
          ? "text-[19px]"
          : "text-[22px]",
    priceSize:
      layout === "horizontal"
        ? "text-[28px]"
        : layout === "compact"
          ? "text-2xl"
          : "text-[32px]",
    featuresGap:
      layout === "horizontal"
        ? "pt-4 gap-4"
        : layout === "compact"
          ? "pt-4 gap-2"
          : "pt-4 gap-3 lg:gap-3 xl:gap-6",
    iconSize:
      layout === "horizontal" ? "w-5 h-5" : "lg:w-5 xl:w-6 lg:h-5 xl:h-6",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative bg-white rounded-[15px] border border-lavender-40 shadow-sm flex",
        layout === "horizontal" ? "flex-col sm:flex-row" : "flex-col",
        layout === "vertical" && "h-auto xl:h-[420px]",
        onClick &&
          "cursor-pointer hover:shadow-md hover:border-lavender transition-all duration-200",
        className,
      )}
    >
      {isFeatured && (
        <FeaturedIcon
          className={cn(
            "absolute -left-2 w-28.25 h-10 text-white z-20",
            layout === "vertical" ? "top-1/2 -translate-y-1/2" : "top-5"
          )}
        />
      )}
      <div className={cn("relative", layoutStyles.imageHeight)}>
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            layoutStyles.imageRounded,
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 30vw, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
      </div>
      <div className={cn("flex-1 flex flex-col", layoutStyles.bodyPadding)}>
        <div
          className={cn(
            "flex flex-col",
            layout === "horizontal" || layout === "compact" ? "gap-2" : "gap-3",
          )}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span
                className={cn(
                  "font-bold text-foreground",
                  layoutStyles.priceSize,
                )}
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
              className={cn(
                "leading-tight font-semibold text-foreground",
                layoutStyles.titleSize,
              )}
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
          className={cn(
            "flex flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center border-t border-[#F2F2F2] mt-auto",
            layoutStyles.featuresGap,
          )}
        >
          <div className="flex items-center gap-2 text-sm text-foreground font-medium whitespace-nowrap">
            <BedIcon className={layoutStyles.iconSize} /> {beds} Beds
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground font-medium whitespace-nowrap">
            <BathIcon className={layoutStyles.iconSize} /> {baths} Baths
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground font-medium whitespace-nowrap">
            <AreaIcon className={layoutStyles.iconSize} /> {area}
          </div>
        </div>
      </div>
    </div>
  );
}
