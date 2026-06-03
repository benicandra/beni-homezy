"use client";

import { useState } from "react";

import { Button, Select } from "@/components/ui";
import { cn } from "@/lib/utils";

import CalendarIcon from "@/assets/icons/calendar.svg";
import MessageIcon from "@/assets/icons/message-text.svg";
import PhoneIcon from "@/assets/icons/call.svg";

const dateOptions = ["Today", "Tomorrow", "Friday, Jun 5", "Saturday, Jun 6"];
const timeOptions = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

export default function RequestTourCard() {
  const [activeTab, setActiveTab] = useState<"tour" | "quote">("tour");

  return (
    <aside className="rounded-[15px] border border-foreground bg-lavender-20 p-6 shadow-sm">
      <span className="text-base font-light text-[#868893]">Price</span>
      <p className="mt-3 text-[42px] font-bold leading-none tracking-tight text-foreground lg:text-5xl">
        $15,000
      </p>

      <div className="my-7 h-px bg-[#D8D5E4]" />

      <h3 className="text-[24px] font-semibold leading-tight tracking-tight text-foreground">
        Request a home tour
      </h3>

      <div className="mt-6 grid grid-cols-2 border-b border-[#D8D5E4]">
        <button
          type="button"
          onClick={() => setActiveTab("tour")}
          className={cn(
            "flex items-center justify-center gap-2 pb-3 text-sm font-semibold transition-colors md:text-base",
            activeTab === "tour"
              ? "border-b-2 border-foreground text-foreground"
              : "text-[#868893] hover:text-foreground",
          )}
        >
          <CalendarIcon className="h-5 w-5" />
          Schedule a Tour
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("quote")}
          className={cn(
            "flex items-center justify-center gap-2 pb-3 text-sm font-semibold transition-colors md:text-base",
            activeTab === "quote"
              ? "border-b-2 border-foreground text-foreground"
              : "text-[#868893] hover:text-foreground",
          )}
        >
          <MessageIcon className="h-5 w-5" />
          Request Quote
        </button>
      </div>

      <form className="mt-5 flex flex-col gap-5">
        <div className="relative">
          <PhoneIcon className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-lavender" />
          <Select
            placeholder="Phone Number"
            options={["Phone Number", "Email", "WhatsApp"]}
            className="pl-12"
          />
        </div>
        <div className="relative">
          <CalendarIcon className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-lavender" />
          <Select placeholder="Select Date" options={dateOptions} className="pl-12" />
        </div>
        <div className="relative">
          <CalendarIcon className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-lavender" />
          <Select defaultValue="11:00 AM" options={timeOptions} className="pl-12" />
        </div>
        <div className="relative">
          <PhoneIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-lavender" />
          <input
            type="tel"
            defaultValue="+ 1 234 567 890"
            aria-label="Phone number"
            className="w-full rounded-[12px] border border-foreground bg-white px-4 py-3.5 pl-12 text-[15px] font-medium text-foreground outline-none transition-colors focus:border-lavender"
          />
        </div>
        <Button type="submit" className="w-full">
          {activeTab === "tour" ? "Schedule a Tour" : "Request Quote"}
        </Button>
      </form>
    </aside>
  );
}
