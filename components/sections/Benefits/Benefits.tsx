import CoinIcon from "@/assets/icons/coin.svg";
import LikeIcon from "@/assets/icons/like-shapes.svg";
import PeopleIcon from "@/assets/icons/people.svg";

import BenefitCard from "@/components/shared/BenefitCard/BenefitCard";

const benefits = [
  {
    icon: CoinIcon,
    title: "Affordable Price",
    description:
      "We provide the best for you. The price we offer accordance with the quality we provide",
  },
  {
    icon: LikeIcon,
    title: "Clear Legality",
    description:
      "Put your trust in us. We are a legal entity with official legality in the relevant government",
  },
  {
    icon: PeopleIcon,
    title: "Experienced Agent",
    description:
      "We always work wih agents in their fields so that we can provide the best quality",
  },
];

export default function Benefits() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex justify-between items-center ">
        <div className="w-121.25">
          <h2 className="text-5xl md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
            Comfort Is Our Top Priority For You
          </h2>
        </div>
        <div className="w-115.5">
          <p className="text-lg font-light">
            We guarantee that the products we sell will make our customers happy
            because we are very concerned about our consumer satisfaction
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}
