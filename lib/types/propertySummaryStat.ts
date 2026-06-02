import type { ComponentType, SVGProps } from "react";

export interface PropertySummaryStat {
  label: string;
  value: string | number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
