import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

interface CarouselControlsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onPrev" | "onNext"> {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
}

const btnBase =
  "disabled:opacity-40 disabled:cursor-not-allowed transition-opacity p-2.5 rounded-[15px] border border-foreground bg-foreground text-white hover:bg-lavender hover:border-lavender cursor-pointer";

export const CarouselControls = forwardRef<
  HTMLDivElement,
  CarouselControlsProps
>(
  (
    {
      onPrev,
      onNext,
      disablePrev = false,
      disableNext = false,
      prevAriaLabel = "Previous slide",
      nextAriaLabel = "Next slide",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex justify-center gap-10", className)}
        {...props}
      >
        <button
          type="button"
          onClick={onPrev}
          disabled={disablePrev}
          aria-label={prevAriaLabel}
          className={btnBase}
        >
          <ArrowLeftIcon className="size-10" />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={disableNext}
          aria-label={nextAriaLabel}
          className={btnBase}
        >
          <ArrowRightIcon className="size-10" />
        </button>
      </div>
    );
  }
);

CarouselControls.displayName = "CarouselControls";

export default CarouselControls;
