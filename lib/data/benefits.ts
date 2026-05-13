import type { Benefit } from "@/lib/types";

import CoinIcon from "@/assets/icons/coin.svg";
import LikeIcon from "@/assets/icons/like-shapes.svg";
import PeopleIcon from "@/assets/icons/people.svg";

export const benefits: Benefit[] = [
    {
    id: "benefit-affordable",
    icon: CoinIcon,
    title: "Affordable Price",
    description:
      "We provide the best for you. The price we offer accordance with the quality we provide",
  },
  {
    id: "benefit-legality",
    icon: LikeIcon,
    title: "Clear Legality",
    description:
      "Put your trust in us. We are a legal entity with official legality in the relevant government",
  },
  {
    id: "benefit-experienced",
    icon: PeopleIcon,
    title: "Experienced Agent",
    description:
      "We always work wih agents in their fields so that we can provide the best quality",
  },
];