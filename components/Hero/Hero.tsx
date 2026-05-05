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

export default function Hero() {
  return (
    <section className="relative h-150 pt-19.5 pb-35">
      <div className="w-190.75 grid gap-12">
        <div className="w-152 space-y-4">
          <div>
            <h1 className="font-semibold text-7xl leading-22 tracking-[-4%]">
              We help people to realize their dream property
            </h1>
          </div>
          <div className="w-114.25">
            <p className="font-light text-xl leading-7.5 text-[#334561]">
              We are creative people who provide the best way to you who want to
              have a new comfortable and suitable place to live
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-6 p-5 w-full border border-foreground rounded-[15px] pt-6">
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
          <div className="flex items-center gap-3">
            <Button>Browse</Button>
          </div>
        </div>
      </div>
      <div className="absolute left-173.25 top-0 w-128.5 h-full">
        <div className="absolute top-12.5px left-52.25 w-63.25 flex flex-row justify-between gap-2 border-2 rounded-4xl p-[16.5px] bg-[#FFFFFF]">
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
              alt="Illustration 2"
              width={74.25}
              height={74.25}
              className="bg-lavender-40 rounded-[10.31px]"
            />
          </div>
        </div>
        <div>Ilustration2</div>
        <div>Ilustration3</div>
        <div>Pattern</div>
      </div>
    </section>
  );
}
