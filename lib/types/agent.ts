import type { StaticImageData } from "next/image";
import type { SocialLink } from "./social";

export interface Agent {
    id: string; name:string; role: string; image: StaticImageData; socialLinks: SocialLink[];
}