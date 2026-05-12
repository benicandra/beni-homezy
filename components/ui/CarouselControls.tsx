import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
  className?: string;
}

const btnBase =
  "disabled:opacity-40 disabled:cursor-not-allowed transition-opacity p-2.5 rounded-[15px] border border-foreground bg-foreground text-white hover:bg-lavender hover:border-lavender";

export default function CarouselControls({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  prevAriaLabel = "Previous slide",
  nextAriaLabel = "Next slide",
  className = "",
}: CarouselControlsProps) {
  return (
    <div className={`flex justify-center gap-10 ${className}`}>
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
