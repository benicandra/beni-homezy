import StarIcon from "@/assets/icons/stars.svg";
import CompanyIcon from "@/assets/icons/company.svg";

interface TestimonialCardProps {
  rating?: number;
  quote: string;
  name: string;
  role: string;
  className?: string;
}

export default function TestimonialCard({
  rating = 5,
  quote,
  name,
  role,
  className = "",
}: TestimonialCardProps) {
  const clampedRating = Math.min(5, Math.max(0, rating));

  return (
    <div
      className={`flex flex-col gap-8 p-8 border-2 border-lavender-20 rounded-[15px] bg-white min-w-[334px] md:min-w-[480px] ${className}`}
    >
      <div
        className="flex gap-3"
        aria-label={`Rating: ${clampedRating} out of 5`}
      >
        {Array.from({ length: clampedRating }).map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-[#F68533]" />
        ))}
      </div>

      <p className="text-xl font-light text-foreground leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="font-semibold text-foreground text-2xl">{name}</span>
          <span className="text-lg font-light text-foreground">{role}</span>
        </div>
        <CompanyIcon
          className="w-12 h-12 shrink-0 text-foreground"
          aria-label="Company logo"
        />
      </div>
    </div>
  );
}
