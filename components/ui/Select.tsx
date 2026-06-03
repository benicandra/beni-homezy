"use client";

import { forwardRef, useState, useId, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/lib/hooks";
import ArrowDownIcon from "@/assets/icons/arrow-down-linear.svg";

interface SelectProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "value" | "defaultValue"
> {
  placeholder?: string;
  options?: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      placeholder = "Select...",
      options = [],
      value: controlledValue,
      defaultValue,
      onChange,
      className,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState<
      string | undefined
    >(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const isControlled = controlledValue !== undefined;
    const selectedValue = isControlled ? controlledValue : uncontrolledValue;

    const buttonId = useId();
    const listboxId = useId();

    const handleClose = () => setIsOpen(false);
    const containerRef = useOutsideClick<HTMLDivElement>(handleClose);

    const handleSelect = (option: string) => {
      if (!isControlled) {
        setUncontrolledValue(option);
      }
      onChange?.(option);
      setIsOpen(false);
      setFocusedIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

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
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setFocusedIndex((prev) =>
              prev < options.length - 1 ? prev + 1 : prev,
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
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    };

    return (
      <div ref={containerRef} className="relative w-full">
        <button
          ref={ref}
          type="button"
          id={id || buttonId}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={id || buttonId}
          aria-activedescendant={
            isOpen && focusedIndex >= 0
              ? `${listboxId}-${focusedIndex}`
              : undefined
          }
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          className={cn(
            "flex items-center justify-between w-full px-4 py-3.5 bg-white border rounded-[12px] text-left text-[15px] outline-none transition-colors",
            isOpen ? "border-lavender" : "border-[#E5E7EB]",
            disabled && "opacity-50 cursor-not-allowed",
            className,
          )}
          {...props}
        >
          <span
            className={
              selectedValue ? "text-foreground font-medium" : "text-[#A0A2B1]"
            }
          >
            {selectedValue || placeholder}
          </span>
          <ArrowDownIcon
            className={cn(
              "w-4 h-4 text-foreground transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {isOpen && options.length > 0 && (
          <div
            id={listboxId}
            role="listbox"
            aria-labelledby={id || buttonId}
            className="absolute top-full left-0 mt-2 w-full max-h-50 overflow-y-auto bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] z-50 p-1.5 flex flex-col gap-1"
          >
            {options.map((option, index) => {
              const isSelected = option === selectedValue;
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
                    "w-full px-3 py-2.5 text-left text-[15px] rounded-[8px] transition-colors font-medium",
                    isSelected || isFocused
                      ? "bg-foreground text-white"
                      : "text-foreground hover:bg-foreground hover:text-white",
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
  },
);

Select.displayName = "Select";

export default Select;
