"use client";

import ArrowLeftIcon from "@/assets/icons/arrow-left-lite.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right-lite.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginationRange: (number | string)[];
  onPageChange: (page: number | string) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  paginationRange,
  onPageChange,
  onPrevious,
  onNext,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4 text-[#868893] font-medium text-lg">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="p-2 hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </button>
      {paginationRange.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
              currentPage === page
                ? "bg-foreground text-white"
                : "hover:bg-lavender-40 hover:text-foreground"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="p-2 hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
