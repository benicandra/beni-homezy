"use client";

import { useState, useId, type ComponentType, type SVGProps } from "react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/lib/hooks";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

interface BrowseFilterItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  options?: string[];
  onChange?: (value: string) => void;
  className?: string;
}

export default function BrowseFilterItem({
  icon: Icon,
  label,
  value,
  options = [],
  onChange,
  className,
}: BrowseFilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const isInteractive = options.length > 0 && onChange;

  const buttonId = useId();
  const listboxId = useId();

  const handleClose = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const containerRef = useOutsideClick<HTMLDivElement>(handleClose);

  const handleSelect = (option: string) => {
    onChange?.(option);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isInteractive) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && options[focusedIndex]) {
          handleSelect(options[focusedIndex]);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case "Escape":
        handleClose();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
        break;
      case "Tab":
        handleClose();
        break;
    }
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={isInteractive ? isOpen : undefined}
        aria-haspopup={isInteractive ? "listbox" : undefined}
        aria-labelledby={buttonId}
        disabled={!isInteractive}
        onClick={() => isInteractive && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex items-center gap-3 w-full text-left",
          isInteractive && "cursor-pointer"
        )}
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
            className={cn(
              "w-4 h-4 text-[#868893] transition-transform duration-200 shrink-0",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>

      {isOpen && isInteractive && (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={buttonId}
          className="absolute top-full left-0 mt-2 w-full min-w-45 max-h-50 overflow-y-auto bg-white border border-lavender-40 rounded-[15px] shadow-lg z-50"
        >
          {options.map((option, index) => {
            const isSelected = option === value;
            const isFocused = index === focusedIndex;

            return (
              <button
                key={option}
                id={`${listboxId}-${index}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={cn(
                  "w-full px-4 py-3 text-left text-sm transition-colors",
                  isSelected || isFocused
                    ? "bg-lavender-20 font-semibold text-lavender"
                    : "hover:bg-lavender-20"
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
