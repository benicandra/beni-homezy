import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";

import SocialIconLink from "@/components/shared/SocialIconLink/SocialIconLink";

interface AgentSocialLink {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface AgentCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  imageAlt?: string;
  socialLinks: AgentSocialLink[];
  className?: string;
}

export default function AgentCard({
  name,
  role,
  image,
  imageAlt,
  socialLinks,
  className = "",
}: AgentCardProps) {
  return (
    <div
      className={`flex flex-row justify-between border border-lavender-40 rounded-[15px] p-6 bg-white z-10 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="gap-px">
          <h5 className="font-body text-lg md:text-2xl font-semibold text-foreground">
            {name}
          </h5>
          <p className="text-lg font-light text-[#686A79]">{role}</p>
        </div>
        <div className="flex gap-[12px]">
          {socialLinks.map((link) => (
            <SocialIconLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              className="w-6 h-6 bg-[#686A79]"
              iconClassName="size-6 [&>path:first-child]:fill-foreground [&>path:last-child]:fill-white"
            />
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt={imageAlt ?? name}
        className="w-[108px] h-[108px] bg-carnation-40 rounded-[15px] shrink-0 object-cover"
      />
    </div>
  );
}
