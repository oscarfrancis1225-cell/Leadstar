/**
 * Image sources are centralized so photography can be swapped without
 * hunting through components.
 *
 * heroFamily uses the owned portrait of Esther Francis.
 */
export const siteImages = {
  heroFamily: {
    src: "/images/Office/me.png",
    localHint: "/images/Office/me.png",
    alt: "Esther Francis",
    width: 1400,
    height: 1750,
  },
  advisorPortrait: {
    src: "/images/Office/me.png",
    localHint: "/images/Office/me.png",
    alt: "Portrait of Esther Francis, Financial Services Professional",
    width: 1400,
    height: 1750,
  },
  logo: {
    src: "/Assests/logo.png",
    localHint: "/Assests/logo.png",
    alt: "LeadStar Financial",
    width: 504,
    height: 168,
  },
  mark: {
    src: "/Assests/favicon.png",
    localHint: "/Assests/favicon.png",
    alt: "LeadStar Financial star mark",
    width: 180,
    height: 180,
  },
  ogShare: {
    src: "/Assests/og-share.jpg",
    localHint: "/Assests/og-share.jpg",
    alt: "LeadStar Financial. Let's Make the Next Step Simple",
    width: 1200,
    height: 633,
  },
  valuePersonalGuidance: {
    src: "/images/value-personal-guidance.jpg",
    localHint: "/images/value-personal-guidance.jpg",
    alt: "Advisor listening to a couple during a planning conversation",
    width: 320,
    height: 320,
  },
  valueClearCommunication: {
    src: "/images/value-clear-communication.jpg",
    localHint: "/images/value-clear-communication.jpg",
    alt: "Advisor explaining a plan in a clear conversation",
    width: 320,
    height: 320,
  },
  valueBroadSolutions: {
    src: "/images/value-broad-solutions.jpg",
    localHint: "/images/value-broad-solutions.jpg",
    alt: "Family across generations sitting together",
    width: 320,
    height: 320,
  },
  valueOngoingSupport: {
    src: "/images/value-ongoing-support.jpg",
    localHint: "/images/value-ongoing-support.jpg",
    alt: "Advisor and client shaking hands after a conversation",
    width: 320,
    height: 320,
  },
} as const;

export const officeGallery = [
  {
    src: "/images/Office/team1.JPG",
    alt: "LeadStar Financial team standing together in the office",
    width: 1600,
    height: 1060,
  },
  {
    src: "/images/Office/team2.JPG",
    alt: "LeadStar Financial team in the office lobby",
    width: 1600,
    height: 1060,
  },
] as const;

export const advisorCarousel = [
  siteImages.advisorPortrait,
  ...officeGallery,
] as const;

export const processGallery = [
  {
    src: "/images/Office/team1.JPG",
    alt: "LeadStar Financial team standing together in the office",
    width: 1600,
    height: 1060,
  },
  {
    src: "/images/Office/me.png",
    alt: "Esther Francis in the office",
    width: 1400,
    height: 1750,
  },
  {
    src: "/images/Office/team2.JPG",
    alt: "LeadStar Financial team in the office lobby",
    width: 1600,
    height: 1060,
  },
] as const;

export type SiteImage = (typeof siteImages)[keyof typeof siteImages];
