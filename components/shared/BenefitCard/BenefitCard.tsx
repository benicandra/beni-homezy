import type { ComponentType, SVGProps } from "react";

interface BenefitCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
}

export default function BenefitCard({
  icon: Icon,
  title,
  description,
  className = "",
  iconWrapperClassName = "bg-lavender-40",
  iconClassName = "w-12 h-12 text-foreground",
}: BenefitCardProps) {
  return (
    <div
      className={`flex flex-col gap-16 p-10 border border-foreground rounded-[15px] bg-white ${className}`}
    >
      <div>
        <div
          className={`w-22.5 h-22.5 flex items-center justify-center rounded-[15px] ${iconWrapperClassName}`}
        >
          <Icon className={iconClassName} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h5 className="text-2xl font-semibold">{title}</h5>
        <p className="text-base font-light text-[#686A79]">{description}</p>
      </div>
    </div>
  );
}
