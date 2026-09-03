import { siteImages } from "@/lib/images";

export const values = [
  {
    title: "Personal Guidance",
    description:
      "The first question is what you have to decide this year. The product name comes later, if it comes at all.",
    icon: "UserRound",
    image: siteImages.valuePersonalGuidance,
  },
  {
    title: "Clear Communication",
    description:
      "If you cannot repeat it at the kitchen table, it is not clear enough yet.",
    icon: "MessageCircle",
    image: siteImages.valueClearCommunication,
  },
  {
    title: "Broad Solutions",
    description:
      "Health before 65, Medicare timing, life coverage, retirement income, a house payment, a business. Same conversation style for each.",
    icon: "Layers",
    image: siteImages.valueBroadSolutions,
  },
  {
    title: "Ongoing Support",
    description:
      "The first conversation is not the last one. Dates shift. Coverage ends. Someone new depends on you.",
    icon: "Handshake",
    image: siteImages.valueOngoingSupport,
  },
] as const;
