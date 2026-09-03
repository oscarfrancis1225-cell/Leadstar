import { siteImages } from "@/lib/images";

export const values = [
  {
    title: "Personal Guidance",
    description:
      "What do you have to decide this year? That is the first question. The product name comes later, if it comes at all.",
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
      "A job change. A 65th birthday. A house. A business. Same conversation style. Different jobs of money.",
    icon: "Layers",
    image: siteImages.valueBroadSolutions,
  },
  {
    title: "Ongoing Support",
    description:
      "Dates shift. Coverage ends. Someone new depends on you. The first talk is not the last one.",
    icon: "Handshake",
    image: siteImages.valueOngoingSupport,
  },
] as const;
