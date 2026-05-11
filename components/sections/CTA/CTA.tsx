import Image from "next/image";

import Pattern from "@/assets/pattern-2.png";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row h-auto lg:h-95 border-2 rounded-[15px] border-foreground bg-lavender-80 overflow-hidden">
        <div className="flex flex-col w-full lg:w-[50%] gap-6 justify-center py-10 px-8 lg:py-14 lg:px-18 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold lg:text-5xl text-white">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-sm font-light lg:text-lg text-lavender-40">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:gap-[62px] lg:flex-row lg:items-center lg:bg-white lg:rounded-[15px] lg:p-2 max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-white lg:bg-transparent rounded-[15px] px-4 py-3 flex-1 border-none outline-none text-foreground text-base placeholder:text-foreground/40 lg:py-0 lg:rounded-none"
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
        <div className="mt-[-60px] lg:mt-0 h-[260px] lg:h-auto lg:flex-1 relative overflow-hidden">
          <Image
            src={Pattern}
            alt="Pattern"
            width={Pattern.width}
            height={Pattern.height}
            className="absolute h-full w-auto top-0"
          />
        </div>
      </div>
    </section>
  );
}
