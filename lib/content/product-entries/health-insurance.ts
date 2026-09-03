import type { ProductPageContent } from "@/lib/content/types";

export const healthInsuranceProducts = [
  {
    serviceSlug: "health-insurance",
    slug: "hmo",
    href: "/services/health-insurance/hmo",
    title: "HMO",
    metaTitle: "HMO Health Plans",
    description:
      "An HMO is a network type, not a quality ranking. This page is about commercial and Marketplace-style plans, not Medicare Advantage.",
    hook: "Someone sees a lower premium and does not yet see the network trade-off.",
    question: "Can you keep your doctors inside this network?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "PPO", href: "/services/health-insurance/ppo" },
      { label: "EPO", href: "/services/health-insurance/epo" },
      { label: "Health Insurance", href: "/services/health-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what an HMO is",
      },
      {
        type: "paragraph",
        text: "An HMO, or Health Maintenance Organization, is a network type. Care is usually covered when you use doctors and hospitals in the plan’s network, except in an emergency. Many HMOs ask you to pick a primary-care doctor and get a referral before you see a specialist.",
      },
      {
        type: "paragraph",
        text: "This page is about commercial and Marketplace-style plans. It is not a Medicare Advantage page. Medicare Advantage can also use HMO designs. That is a different program, explained under Medicare.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "HMO is not a quality ranking. It is a set of network rules. Actual referral rules and service areas vary by plan. Out-of-network care is often not covered, except emergencies.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you write down whose doctors you want to keep, and whether a tight network is even workable. This page does not shop named plans.",
      },
    ],
  },
  {
    serviceSlug: "health-insurance",
    slug: "ppo",
    href: "/services/health-insurance/ppo",
    title: "PPO",
    metaTitle: "PPO Health Plans",
    description:
      "A PPO usually costs more for the room to go out of network. “I can go anywhere” is not quite right, the bill can still be much higher.",
    hook: "Someone wants to keep a doctor and is willing to pay more for that room. The extra cost is the point.",
    question: "Is the extra flexibility worth the extra premium for your household?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "HMO", href: "/services/health-insurance/hmo" },
      { label: "POS", href: "/services/health-insurance/pos" },
      { label: "Health Insurance", href: "/services/health-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what a PPO is",
      },
      {
        type: "paragraph",
        text: "A PPO, or Preferred Provider Organization, is a network type. You usually pay less when you stay in the plan’s network. You can often use out-of-network doctors without a referral, at a higher cost.",
      },
      {
        type: "paragraph",
        text: "This is a commercial and Marketplace-style explanation. Medicare Advantage PPO plans are a different topic, under Medicare.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "“I can go anywhere” is not quite right. You can often go out of network, but the bill can be much higher, and some services may still need approval. Premiums are often higher than a tighter network. The useful question is whether the extra flexibility is worth the extra cost for your household.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you list the doctors and travel facts that make a PPO conversation different from an HMO conversation.",
      },
    ],
  },
  {
    serviceSlug: "health-insurance",
    slug: "epo",
    href: "/services/health-insurance/epo",
    title: "EPO",
    metaTitle: "EPO Health Plans",
    description:
      "An EPO generally covers in-network care only, except emergencies. No referral does not mean it works like a PPO.",
    hook: "People hear “no referral” and think an EPO works like a PPO. Then a bill arrives.",
    question: "If you go out of network, is anything covered besides an emergency?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "HMO", href: "/services/health-insurance/hmo" },
      { label: "PPO", href: "/services/health-insurance/ppo" },
      { label: "Health Insurance", href: "/services/health-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what an EPO is",
      },
      {
        type: "paragraph",
        text: "An EPO, or Exclusive Provider Organization, generally covers care only if you use doctors and hospitals in the plan’s network, except in an emergency. Referrals are often not required the way they are in many HMOs. The exclusive part is the network.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "People hear “no referral” and think it works like a PPO. Then a bill arrives for an out-of-network visit. That is the mix-up. Actual rules vary. Read the plan documents before you assume a specialist is covered.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you compare the words (HMO, PPO, EPO) so you know which question to ask next. This page is not a quote.",
      },
    ],
  },
  {
    serviceSlug: "health-insurance",
    slug: "pos",
    href: "/services/health-insurance/pos",
    title: "POS",
    metaTitle: "POS Health Plans",
    description:
      "A POS plan mixes network rules. Cost-sharing (Bronze, Silver) is a different question from HMO, PPO, EPO, or POS.",
    hook: "POS borrows a little from HMO and a little from PPO. The name is why people mix it up with a metal tier.",
    question: "Are you choosing a network type, or a cost-sharing tier?",
    disclaimerVariant: "standard",
    relatedLinks: [
      { label: "HMO", href: "/services/health-insurance/hmo" },
      { label: "PPO", href: "/services/health-insurance/ppo" },
      { label: "Health Insurance", href: "/services/health-insurance" },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        id: "what-it-is",
        text: "This is what a POS plan is",
      },
      {
        type: "paragraph",
        text: "A POS, or Point of Service, plan usually costs less if you stay in the network. It also commonly asks you to get a referral from a primary-care doctor before you see a specialist. Out-of-network care may be possible, at a higher cost, depending on the plan.",
      },
      {
        type: "heading",
        level: 2,
        id: "common-mix-up",
        text: "What people often mix up",
      },
      {
        type: "paragraph",
        text: "POS is not a metal tier. Bronze and Silver describe cost-sharing. HMO, PPO, EPO, and POS describe network rules. A plan can be both a network type and a metal category. They answer different questions.",
      },
      {
        type: "callout",
        title: "Esther can help with these questions",
        text: "Esther can help you keep network rules and cost-sharing in two separate piles, which makes the rest of the conversation easier.",
      },
    ],
  },
] as const satisfies readonly ProductPageContent[];
