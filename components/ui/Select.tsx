"use client";

import { useState, useRef, useEffect } from "react";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

interface SelectProps {
  placeholder: string;
  options?: string[];
  value: string;
  onChange: (val: string) => void;
}

export default function Select({ placeholder, options = [], value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-3.5 bg-white border ${
          isOpen ? "border-lavender" : "border-[#E5E7EB]"
        } rounded-[12px] text-left text-[15px] outline-none transition-colors`}
      >
        <span className={value ? "text-foreground font-medium" : "text-[#A0A2B1]"}>
          {value || placeholder}
        </span>
        <ArrowDownIcon
          className={`w-4 h-4 text-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && options.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full max-h-50 overflow-y-auto bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] z-50 p-1.5 flex flex-col gap-1">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2.5 text-left text-[15px] rounded-[8px] transition-colors ${
                value === option
                  ? "bg-foreground text-white font-medium"
                  : "text-foreground hover:bg-foreground hover:text-white font-medium"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
