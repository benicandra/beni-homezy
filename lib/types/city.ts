import type { StaticImageData } from "next/image";

export interface City {
    id: string; 
    image: StaticImageData;
    title: string;
    description: string;
}