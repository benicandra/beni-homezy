import Image from "next/image";

import { Button } from "@/components/ui";
import { agents } from "@/lib/data";

const agent = agents[0];

export default function ListingAgentCard() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Listing by Agent
      </h2>

      <div className="flex flex-col gap-6 rounded-[15px] border border-lavender-40 bg-lavender-20 p-5 md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
        <div className="flex items-center gap-3">
          <div className="relative h-13 w-13 overflow-hidden rounded-full bg-lavender-40">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight text-foreground">
              {agent.name}
            </h3>
            <p className="text-base font-light text-[#868893]">{agent.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:w-auto">
          <Button variant="outline" className="w-full md:w-40">
            Ask Question
          </Button>
          <Button variant="outline" className="w-full md:w-40">
            Contact Agent
          </Button>
        </div>
      </div>
    </section>
  );
}
