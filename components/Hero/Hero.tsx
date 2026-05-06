import Image from "next/image";

import { Button } from "@/components/ui";

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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[15px] bg-lavender-40 flex items-center justify-center shrink-0">
              <LocationIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-light">Location</p>
              <p className="text-base font-bold">California, US</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[15px] bg-lavender-40 flex items-center justify-center shrink-0">
              <DollarIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-light">Price</p>
              <p className="text-base font-bold">$1500-$2500</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[15px] bg-lavender-40 flex items-center justify-center shrink-0">
              <HouseIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-light">Type of Property</p>
              <p className="text-base font-bold">Apartment</p>
            </div>
          </div>
          <div className="flex items-center sm:col-span-2 lg:col-span-1">
            <Button className="w-full">Browse</Button>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-12 lg:mt-0 lg:absolute lg:left-173.25 lg:top-0 lg:w-128.5 lg:h-full lg:block">
        <div className="relative w-128.5 h-132 scale-[0.65] sm:scale-90 lg:scale-100 origin-top lg:origin-top-left -mb-45 sm:-mb-12.5 lg:mb-0">
          <div className="absolute top-12.5 left-52.25 w-63.25 flex flex-row justify-between gap-2 border-2 rounded-4xl p-[16.5px] bg-[#FFFFFF] z-10">
            <div className="flex flex-col gap-2.75">
              <div className="gap-[1.38px]">
                <p className="text-base font-bold">Edwin Martins</p>
                <p className="text-xs font-normal">Property Advisor</p>
              </div>
              <div className="flex gap-[8.25px]">
                <a
                  href="tel:+123456789"
                  className="flex items-center justify-center w-[16.5px] h-[16.5px] bg-[#686A79] rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Phone"
                >
                  <PhoneIcon className="size-5 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[16.5px] h-[16.5px] bg-[#686A79] rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-5 text-white" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[16.5px] h-[16.5px] bg-[#686A79] rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="size-5 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[16.5px] h-[16.5px] bg-[#686A79] rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="size-5 text-white" />
                </a>
              </div>
            </div>
            <div>
              <Image
                src={Agents7}
                alt="Illustration 1"
                width={74.25}
                height={74.25}
                className="bg-lavender-40 rounded-[10.31px]"
              />
            </div>
          </div>

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
