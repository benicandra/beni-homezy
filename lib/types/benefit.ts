import type { ComponentType, SVGProps } from "react";

export interface Benefit {
    id: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}