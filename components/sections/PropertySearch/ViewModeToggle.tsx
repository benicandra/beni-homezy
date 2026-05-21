"use client";

import GridIcon from "@/assets/icons/grid.svg";
import RowIcon from "@/assets/icons/row.svg";

interface ViewModeToggleProps {
  viewMode: "list" | "grid";
  onChange: (mode: "list" | "grid") => void;
}

export default function ViewModeToggle({ viewMode, onChange }: ViewModeToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onChange("grid")}
        className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
          viewMode === "grid"
            ? "border border-foreground text-foreground bg-transparent hover:bg-lavender-40"
            : "border border-transparent text-[#868893] hover:bg-lavender-40 hover:text-foreground"
        }`}
      >
        <GridIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange("list")}
        className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
          viewMode === "list"
            ? "border border-foreground text-foreground bg-transparent hover:bg-lavender-40"
            : "border border-transparent text-[#868893] hover:bg-lavender-40 hover:text-foreground"
        }`}
      >
        <RowIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
