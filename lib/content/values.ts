import { siteImages } from "@/lib/images";

export const values = [
  {
    title: "Personal Guidance",
    description:
      "Conversations start with your situation, not a product name.",
    icon: "UserRound",
    image: siteImages.valuePersonalGuidance,
  },
  {
    title: "Clear Communication",
    description: "Straightforward explanations without unnecessary complexity.",
    icon: "MessageCircle",
    image: siteImages.valueClearCommunication,
  },
  {
    title: "Broad Solutions",
    description:
      "Coverage and planning questions across several stages of life.",
    icon: "Layers",
    image: siteImages.valueBroadSolutions,
  },
  {
    title: "Ongoing Support",
    description:
      "A relationship that can continue after the first conversation.",
    icon: "Handshake",
    image: siteImages.valueOngoingSupport,
  },
] as const;
