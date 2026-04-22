export const company = {
  name: "Arbitrary Systems",
  domain: "https://arbitrarysystems.io",
  email: "hello@arbitrarysystems.io",
  tagline: "Quiet software for businesses where precision matters.",
  description:
    "Arbitrary Systems designs composed software for detail-driven businesses, with current product work spanning luxury collections and wellness operations.",
};

export const capabilities = [
  {
    title: "Composed operating systems",
    description:
      "We design software that gives teams a calmer way to work, especially when records, workflows, and client experience all need to stay in sync.",
  },
  {
    title: "High-trust interfaces",
    description:
      "The product direction favors discretion, legibility, and polish over noise, making the software feel dependable from the first interaction onward.",
  },
  {
    title: "Long-horizon product thinking",
    description:
      "The goal is not feature volume. It is software that stays useful as a business matures and as operational detail grows more demanding.",
  },
];

export const principles = [
  {
    title: "Clarity over clutter",
    description:
      "Important information should become easier to understand, not harder to locate once the system grows.",
  },
  {
    title: "Restraint in the interface",
    description:
      "Products can feel premium, steady, and helpful without becoming loud, crowded, or theatrically complex.",
  },
  {
    title: "Reliability in the details",
    description:
      "Trust is earned through the ordinary moments: accurate records, predictable workflows, and careful defaults.",
  },
  {
    title: "Software with a point of view",
    description:
      "Each product is shaped around a specific operating reality instead of being stretched into a generic tool for everyone.",
  },
];

export type Product = {
  name: string;
  slug: string;
  eyebrow: string;
  audience: string;
  status: string;
  description: string;
  overview: string;
  direction: string;
  promise: string;
  bullets: string[];
};

export const products: Record<"register" | "pranalogic", Product> = {
  register: {
    name: "The Arbitrary Register",
    slug: "the-arbitrary-register",
    eyebrow: "Collections software",
    audience: "Luxury collections, private cellars, and detail-heavy inventory operations.",
    status: "Prototype in development",
    description:
      "A product direction for collection-centered businesses that need legible records, thoughtful organization, and a more refined operating surface.",
    overview:
      "The Arbitrary Register is being developed as a calmer, more exacting system for managing collections and the operational records that surround them.",
    direction:
      "Its direction is shaped by the realities of stewardship: inventory confidence, provenance awareness, storage context, and day-to-day order without administrative sprawl.",
    promise:
      "The aim is to make collection work feel orderly, trustworthy, and easier to maintain over time.",
    bullets: [
      "collection records that stay readable as inventories grow",
      "structure for provenance, storage, quantity, and condition details",
      "interfaces suited to private, premium, and high-discretion environments",
      "a foundation for long-term stewardship rather than short-term busywork",
    ],
  },
  pranalogic: {
    name: "PranaLogic",
    slug: "pranalogic",
    eyebrow: "Wellness operations",
    audience: "Yoga studios and wellness businesses balancing scheduling, service, and client care.",
    status: "Prototype in development",
    description:
      "A product direction for wellness operators who want software that feels more composed, more human, and less administratively draining.",
    overview:
      "PranaLogic is being developed to support studios and wellness businesses with a steadier approach to the operational layer of the business.",
    direction:
      "Its direction centers on reducing friction around calendars, client touchpoints, and the everyday administrative work that can pull attention away from service.",
    promise:
      "The goal is software that supports practice without adding unnecessary tension to the business that surrounds it.",
    bullets: [
      "clean scheduling and service workflows",
      "a more coherent experience for staff and clients alike",
      "less operational drag around routine administration",
      "software that feels aligned with calm, service-led brands",
    ],
  },
};

export const featuredProducts = [products.register, products.pranalogic];
