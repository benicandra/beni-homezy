import type { PropertySummaryStat } from "@/lib/types";

interface PropertySummaryStatsProps {
  stats: PropertySummaryStat[];
}

export default function PropertySummaryStats({
  stats,
}: PropertySummaryStatsProps) {
  return (
    <div className="bg-[#F6F4FA] rounded-[15px] p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-2">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-base text-[#868893] font-light">
              {stat.label}
            </span>
            <div className="flex items-center gap-2 font-bold text-base text-foreground">
              <Icon className="w-6 h-6" /> {stat.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
