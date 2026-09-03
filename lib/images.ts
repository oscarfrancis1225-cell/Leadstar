/**
 * Image sources are centralized so photography can be swapped without
 * hunting through components.
 *
 * heroFamily uses the licensed Unsplash family photograph that was on the
 * original hero. Advisor photography stays on Esther's owned portrait.
 */
export const siteImages = {
  heroFamily: {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=80",
    localHint: "/images/hero-family.jpg",
    alt: "Parents and two children sitting together in a bright living room",
    width: 1800,
    height: 1350,
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

export type SiteImage = (typeof siteImages)[keyof typeof siteImages];
