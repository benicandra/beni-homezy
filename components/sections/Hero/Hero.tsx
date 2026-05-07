import Image from "next/image";

import { Button } from "@/components/ui";
import BrowseFilterItem from "@/components/shared/BrowseFilterItem/BrowseFilterItem";
import AgentMiniCard from "@/components/shared/AgentMiniCard/AgentMiniCard";

import LocationIcon from "@/assets/icons/location.svg";
import DollarIcon from "@/assets/icons/dollar-square.svg";
import HouseIcon from "@/assets/icons/house.svg";

import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import PhoneIcon from "@/assets/icons/phone.svg";

import Agents7 from "@/assets/agents/agents-7.png";
import Prop3 from "@/assets/properties/properties-3.png";
import Prop1 from "@/assets/properties/properties-1.png";
import BgText from "@/assets/bg-text.svg";
import Pattern from "@/assets/pattern.png";

const agentSocialLinks = [
  { href: "tel:+123456789", label: "Phone", icon: PhoneIcon },
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://twitter.com", label: "Twitter", icon: TwitterIcon },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:block lg:h-155 pb-15 pt-8 lg:pt-0">
      <div className="hidden lg:block absolute -top-20 left-1/2 w-screen -translate-x-1/2 h-175 overflow-hidden pointer-events-none z-[-1]">
        <div className="w-full px-6 lg:px-35 mx-auto h-full relative">
          <div className="absolute left-208 top-20 w-128.5 h-full">
            <div className="absolute -top-18 -left-28.25">
              <Image
                src={Pattern}
                alt="Pattern"
                className="w-180 h-auto max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-190.75 grid gap-8 lg:gap-12 relative z-10">
        <div className="w-full lg:w-152 space-y-4 text-center lg:text-left">
          <div>
            <h1 className="font-semibold text-[44px] leading-tight md:text-6xl lg:text-7xl lg:leading-22 tracking-[-4%]">
              We help people to realize their dream property
            </h1>
          </div>
          <div className="w-full lg:w-114.25 mx-auto lg:mx-0">
            <p className="font-light text-lg lg:text-xl lg:leading-7.5 text-[#334561]">
              We are creative people who provide the best way to you who want to
              have a new comfortable and suitable place to live
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 p-5 w-full bg-white lg:bg-transparent border border-foreground rounded-[15px] lg:pt-6">
          <BrowseFilterItem
            icon={LocationIcon}
            label="Location"
            value="California, US"
          />
          <BrowseFilterItem
            icon={DollarIcon}
            label="Price"
            value="$1500-$2500"
          />
          <BrowseFilterItem
            icon={HouseIcon}
            label="Type of Property"
            value="Apartment"
          />

          <div className="flex items-center sm:col-span-2 lg:col-span-1">
            <Button className="w-full">Browse</Button>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-12 lg:mt-0 lg:absolute lg:left-173.25 lg:top-0 lg:w-128.5 lg:h-full lg:block">
        <div className="relative w-128.5 h-132 scale-[0.65] sm:scale-90 lg:scale-100 origin-top lg:origin-top-left -mb-45 sm:-mb-12.5 lg:mb-0">
          <AgentMiniCard
            className="absolute top-12.5 left-52.25 w-63.25"
            name="Edwin Martins"
            role="Property Advisor"
            image={Agents7}
            imageAlt="Edwin Martins"
            socialLinks={agentSocialLinks}
            socialLinkClassName="w-[16.5px] h-[16.5px] bg-[#686A79]"
            socialIconClassName="size-5 [&>path:first-child]:fill-[#686A79] [&>path:last-child]:fill-white"
          />

          <div className="absolute top-0 left-0 w-62 h-90.5">
            <div className="relative h-[264.8px] border-2 rounded-tl-[40px] rounded-tr-[40px] rounded-br-4xl overflow-hidden">
              <Image
                src={Prop3}
                alt="Illustration 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-full h-26.5 flex items-center justify-center px-6 pt-5 pb-1">
              <BgText className="absolute inset-0 w-full h-full" />
              <p className="relative z-10 text-white font-light text-sm leading-snug text-center max-w-50">
                We provide our best properties to give great services possible
              </p>
            </div>
          </div>

          <div className="absolute top-47 left-66.5 w-62 h-85 border-2 rounded-[40px] overflow-hidden">
            <Image src={Prop1} alt="Illustration 3" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
