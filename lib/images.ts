/**
 * Image sources are centralized so photography can be swapped without
 * hunting through components.
 *
 * Recommended local filenames in /public/images:
 * - hero-family.jpg
 * - advisor-consultation.jpg
 * - resource-life-insurance.jpg
 * - resource-medicare.jpg
 * - resource-retirement.jpg
 *
 * Until those files are added, licensed Unsplash placeholders are used.
 * Update `src` to the local path once final photography is in place.
 */
export const siteImages = {
  heroFamily: {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=80",
    localHint: "/images/hero-family.jpg",
    alt: "Parents and two children sitting together in a bright living room",
    width: 1800,
    height: 1350,
  },
  advisorConsultation: {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    localHint: "/images/advisor-consultation.jpg",
    alt: "Advisor meeting with clients at a conference table",
    width: 1400,
    height: 1050,
  },
  advisorPortrait: {
    src: "/images/Office/me.png",
    localHint: "/images/Office/me.png",
    alt: "Portrait of Esther Francis, Financial Services Professional",
    width: 1400,
    height: 1750,
  },
  resourceLifeInsurance: {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    localHint: "/images/resource-life-insurance.jpg",
    alt: "Family spending time together outdoors",
    width: 1200,
    height: 800,
  },
  resourceMedicare: {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    localHint: "/images/resource-medicare.jpg",
    alt: "Healthcare professional reviewing coverage information",
    width: 1200,
    height: 800,
  },
  resourceRetirement: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    localHint: "/images/resource-retirement.jpg",
    alt: "Notebook and planning materials on a desk",
    width: 1200,
    height: 800,
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
  {
    src: "/images/Office/ChatGPT Image Aug 27, 2026, 10_47_00 AM.png",
    alt: "Advisor meeting with a couple in a conference room",
    width: 1600,
    height: 1060,
  },
  {
    src: "/images/Office/ChatGPT Image Aug 27, 2026, 10_47_19 AM.png",
    alt: "Advisor in a professional office setting",
    width: 1600,
    height: 1060,
  },
  {
    src: "/images/Office/ChatGPT Image Aug 27, 2026, 10_48_28 AM.png",
    alt: "Office workspace used for client conversations",
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
    src: "/images/Clear Path Images/ChatGPT Image Aug 27, 2026, 12_36_58 PM (1).png",
    alt: "Advisor reviewing documents with a couple at a conference table",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/Clear Path Images/ChatGPT Image Aug 27, 2026, 12_36_58 PM (2).png",
    alt: "Advisors comparing coverage options on a tablet",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/Clear Path Images/ChatGPT Image Aug 27, 2026, 12_36_58 PM (3).png",
    alt: "Advisor handing a planning folder to a client",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/Clear Path Images/ChatGPT Image Aug 27, 2026, 12_36_58 PM (4).png",
    alt: "Advisor standing with clients during a planning session",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/Clear Path Images/ChatGPT Image Aug 27, 2026, 12_36_59 PM (5).png",
    alt: "Advisors reviewing a plan together in the office lounge",
    width: 1200,
    height: 1600,
  },
] as const;

export type SiteImage = (typeof siteImages)[keyof typeof siteImages];
