import Image, { type StaticImageData } from "next/image";
import SocialIconLink from "@/components/shared/SocialIconLink/SocialIconLink";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/lib/types";

interface AgentMiniCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  imageAlt?: string;
  socialLinks: SocialLink[];
  className?: string;
  socialLinkClassName?: string;
  socialIconClassName?: string;
}

export default function AgentMiniCard({
  name,
  role,
  image,
  imageAlt,
  socialLinks,
  className,
  socialLinkClassName,
  socialIconClassName = "size-3 md:size-5 text-white",
}: AgentMiniCardProps) {
  return (
    <div
      className={cn(
        "flex flex-row justify-between gap-1.5 md:gap-2 border-2 rounded-2xl md:rounded-4xl p-2.5 md:p-[16.5px] bg-white z-10",
        className,
      )}
    >
      <div className="flex flex-col gap-1 md:gap-2.75 min-w-0">
        <div className="gap-0 md:gap-[1.38px]">
          <p className="text-xs md:text-base font-bold truncate">{name}</p>
          <p className="text-[10px] md:text-xs font-normal truncate">{role}</p>
        </div>
        <div className="flex gap-1 md:gap-[8.25px]">
          {socialLinks.map((link) => (
            <SocialIconLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              className={cn(
                "w-3 h-3 md:w-[16.5px] md:h-[16.5px] bg-[#686A79]",
                socialLinkClassName,
              )}
              iconClassName={socialIconClassName}
            />
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt={imageAlt ?? name}
        width={40}
        height={40}
        sizes="40px"
        className="bg-lavender-40 rounded-lg md:rounded-[10.31px] w-10 h-10 md:w-[74.25px] md:h-[74.25px] shrink-0"
      />
    </div>
  );
}
