"use client";

import { useState, useRef, useEffect } from "react";
import type { ComponentType, SVGProps } from "react";

import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

interface BrowseFilterItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  options?: string[];
  onChange?: (value: string) => void;
}

export default function BrowseFilterItem({
  icon: Icon,
  label,
  value,
  options = [],
  onChange,
}: BrowseFilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isInteractive = options.length > 0 && onChange;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => isInteractive && setIsOpen(!isOpen)}
        className={`flex items-center gap-3 w-full text-left ${isInteractive ? "cursor-pointer" : ""}`}
      >
        <div className="w-10 h-10 rounded-[15px] bg-lavender-40 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-light">{label}</p>
          <p className="text-base font-bold truncate">{value}</p>
        </div>
        {isInteractive && (
          <ArrowDownIcon
            className={`w-4 h-4 text-[#868893] transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {isOpen && isInteractive && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-45 max-h-50 overflow-y-auto bg-white border border-lavender-40 rounded-[15px] shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-lavender-20 transition-colors ${
                value === option
                  ? "bg-lavender-20 font-semibold text-lavender"
                  : ""
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
