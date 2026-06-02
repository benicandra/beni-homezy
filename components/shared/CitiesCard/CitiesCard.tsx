import Image, { StaticImageData } from "next/image";

import HouseIcon from "@/assets/icons/house-linear.svg";

interface CitiesCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
}

export default function CitiesCard({
  image,
  title,
  description,
  className = "",
}: CitiesCardProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden border border-lavender-40 bg-white rounded-[15px] ${className}`}
    >
      <div className="relative h-85 lg:h-auto lg:aspect-[3/2]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 30vw, calc(100vw - 48px)"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-6 bg-white">
        <h5 className="text-2xl font-semibold text-foreground">{title}</h5>
        <div className="flex flex-row gap-2 items-center text-[#686A79]">
          <HouseIcon className="w-6 h-6" />
          <p className="text-lg font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}
