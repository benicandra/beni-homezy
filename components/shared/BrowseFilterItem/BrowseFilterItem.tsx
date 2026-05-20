import type { ComponentType, SVGProps } from "react";

interface BrowseFilterItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

export default function BrowseFilterItem({
  icon: Icon,
  label,
  value,
}: BrowseFilterItemProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-10 h-10 rounded-[15px] bg-lavender-40 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-foreground" />
      </div>
      <div>
        <p className="text-sm font-light">{label}</p>
        <p className="text-base font-bold">{value}</p>
      </div>
    </div>
  );
}
