import type { StaticImageData } from "next/image";

export interface Property {
    id: string;
    image: StaticImageData;
    isFeatured?: boolean;
    price: string;
    priceSuffix?: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    area: string;
}

export interface FeaturedProperty extends Property {
    agent: {
        name: string;
        role: string;
        image: StaticImageData;
    };
    description: string;
    propertyType: string;
}