import Hero from "@/components/sections/Hero/Hero";
import Featured from "@/components/sections/Featured/Featured";
import Benefits from "@/components/sections/Benefits/Benefits";
import Categories from "@/components/sections/Categories/Categories";
import Cities from "@/components/sections/Cities/Cities";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 lg:gap-40">
      <Hero />
      <Featured />
      <Benefits />
      <Categories />
      <Cities />
    </div>
  );
}
