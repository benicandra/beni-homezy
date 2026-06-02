import { Suspense } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero/Hero";
import Featured from "@/components/sections/Featured/Featured";

const Benefits = dynamic(
  () => import("@/components/sections/Benefits/Benefits"),
);
const Categories = dynamic(
  () => import("@/components/sections/Categories/Categories"),
);
const Cities = dynamic(() => import("@/components/sections/Cities/Cities"));
const Agents = dynamic(() => import("@/components/sections/Agents/Agents"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonial/Testimonials"),
);
const CTA = dynamic(() => import("@/components/sections/CTA/CTA"));

function SectionSkeleton() {
  return (
    <div className="min-h-60 animate-pulse bg-lavender-20 rounded-[15px]" />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-26 lg:gap-40">
      <Hero />
      <Featured />
      <Suspense fallback={<SectionSkeleton />}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Cities />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Agents />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTA />
      </Suspense>
    </div>
  );
}
