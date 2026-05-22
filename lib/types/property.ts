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
    floorAreaM2?: number;
    lat: number;
    lng: number;
    propertyType: string;
    listingType?: "sale" | "rent";
    yearBuilt?: number;
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