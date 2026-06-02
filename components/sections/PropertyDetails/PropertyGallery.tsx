import Image, { type StaticImageData } from "next/image";

import Prop1 from "@/assets/properties/prop-1.webp";
import Prop2 from "@/assets/properties/prop-2.webp";
import Prop3 from "@/assets/properties/prop-3.webp";
import Prop4 from "@/assets/properties/prop-4.webp";
import Prop5 from "@/assets/properties/prop-5.webp";
import Prop6 from "@/assets/properties/prop-6.webp";

const galleryImages: StaticImageData[] = [Prop1, Prop2, Prop3, Prop4, Prop5, Prop6];

export default function PropertyGallery() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Property Gallery
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
