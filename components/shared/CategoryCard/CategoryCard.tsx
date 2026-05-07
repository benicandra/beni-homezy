import type { ComponentType, SVGProps } from "react";

import SendIcon from "@/assets/icons/send.svg";

interface CategoryCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
}

export default function CategoryCard({
  icon: Icon,
  title,
  description,
  className = "",
  iconWrapperClassName = "bg-lavender-40",
  iconClassName = "w-8 h-8 text-foreground",
}: CategoryCardProps) {
  return (
    <div
      className={`flex flex-row p-8 justify-between items-center border border-lavender-40 rounded-[15px] bg-white ${className}`}
    >
      <div className="flex flex-row gap-4 items-center">
        <div
          className={`w-15 h-15 flex items-center justify-center rounded-[15px] ${iconWrapperClassName}`}
        >
          <Icon className={iconClassName} />
        </div>
        <div className="flex flex-col gap-0.5">
          <h5 className="text-2xl font-semibold text-foreground">{title}</h5>
          <p className="text-base font-light text-[#686A79]">{description}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div>
          <p className="text-base font-semibold">View</p>
        </div>
        <div>
          <SendIcon className="w-5 h-5 text-foreground" />
        </div>
      </div>
    </div>
  );
}
