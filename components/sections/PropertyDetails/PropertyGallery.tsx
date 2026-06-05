import Image, { type StaticImageData } from "next/image";

import Inter1 from "@/assets/interiors/image-72.webp";
import Inter2 from "@/assets/interiors/image-73.webp";
import Inter3 from "@/assets/interiors/image-74.webp";
import Inter4 from "@/assets/interiors/image-75.webp";
import Inter5 from "@/assets/interiors/image-76.webp";
import Inter6 from "@/assets/interiors/image-82.webp";

const galleryImages: StaticImageData[] = [
  Inter1,
  Inter2,
  Inter3,
  Inter4,
  Inter5,
  Inter6,
];

export default function PropertyGallery() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Property Gallery
      </h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className="relative aspect-[1.03/1] overflow-hidden rounded-[15px] bg-lavender-20"
          >
            <Image
              src={image}
              alt={`Property gallery image ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, calc(100vw - 48px)"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
