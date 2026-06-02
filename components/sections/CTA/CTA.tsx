import Image from "next/image";
import { MotionSection } from "@/components/ui";

import Pattern from "@/assets/pattern-2.png";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <MotionSection>
      <div className="flex flex-col lg:flex-row h-auto lg:h-95 border-2 rounded-[15px] border-foreground bg-lavender-80 overflow-hidden">
        <div className="flex flex-col w-full lg:w-[60%] xl:w-[50%] gap-6 justify-center md:items-start md:text-left py-10 px-8 lg:py-12 xl:py-14 lg:px-10 xl:px-18 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold lg:text-5xl text-white">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-sm font-light lg:text-lg text-lavender-40">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full lg:gap-4 xl:gap-15.5 lg:flex-row lg:items-center lg:bg-white lg:rounded-[15px] lg:p-2 max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-white lg:bg-transparent rounded-[15px] px-4 py-3 flex-1 min-w-0 border-none outline-none text-foreground text-base placeholder:text-foreground/40 lg:py-0 lg:rounded-none"
            />
            <Button
              size="normal"
              variant="fill"
              className="rounded-[15px] shrink-0 w-full lg:w-auto"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="-mt-15 lg:mt-0 h-65 lg:h-auto lg:flex-1 relative overflow-hidden">
          <Image
            src={Pattern}
            alt="Pattern"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </MotionSection>
  );
}
