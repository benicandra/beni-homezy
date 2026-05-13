import type { City } from "@/lib/types";

import City1 from "@/assets/cities/cities-1.webp";
import City2 from "@/assets/cities/cities-2.webp";
import City3 from "@/assets/cities/cities-3.webp";

export const cities: City[] = [
    {
    id: "city-pasadena",
    image: City3,
    title: "Pasadena, Oklahoma",
    description: "100+ listings",
  },
  {
    id: "city-lafayette",
    image: City2,
    title: "Lafayette, California",
    description: "100+ listings",
  },
  {
    id: "city-new-york",
    image: City1,
    title: "New York",
    description: "100+ listings",
  },
];