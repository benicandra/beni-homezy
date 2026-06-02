"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

const accordionItems = [
  {
    title: "Interior Details",
    content: [
      {
        heading: "Interior Details",
        details: ["Basement: Partial, Storage Space", "Number of Rooms: 10"],
      },
      {
        heading: "Beds & Baths",
        details: ["Bedrooms: 5", "Bathrooms: 5"],
      },
      {
        heading: "Dimensions and Layout",
        details: ["Living Area: 2500 Square Feet"],
      },
      {
        heading: "Heating & Cooling",
        details: ["Heating: Central", "Has Heating", "Heating Fuel: Central"],
      },
    ],
  },
  {
    title: "Property Size",
    content: [],
  },
  {
    title: "Land Area",
    content: [],
  },
  {
    title: "Year Build",
    content: [],
  },
];

export default function PropertyDetailsAccordion() {
  const [openItem, setOpenItem] = useState("Interior Details");

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Property Details
      </h2>

      <div className="flex flex-col gap-8">
        {accordionItems.map((item) => {
          const isOpen = openItem === item.title;

          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-[15px] border border-lavender-40 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenItem(isOpen ? "" : item.title)}
                className="flex w-full items-center justify-between bg-lavender-20 px-4 py-4 text-left text-base font-bold text-foreground md:px-5"
              >
                {item.title}
                <ArrowDownIcon
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen && item.content.length > 0 && (
                <div className="flex flex-col px-4 py-6 md:px-5">
                  {item.content.map((section, index) => (
                    <div
                      key={section.heading}
                      className={cn(
                        "flex flex-col gap-3 py-4 first:pt-0 last:pb-0",
                        index > 0 && "border-t border-[#D8D5E4]",
                      )}
                    >
                      <h3 className="text-base font-light text-[#868893]">
                        {section.heading}
                      </h3>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {section.details.map((detail) => (
                          <p
                            key={detail}
                            className="flex gap-2 text-base font-bold text-foreground"
                          >
                            <span aria-hidden="true">•</span>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
