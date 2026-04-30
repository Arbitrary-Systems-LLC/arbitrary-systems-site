export const company = {
  name: "Arbitrary Systems",
  domain: "https://arbitrarysystems.io",
  email: "hello@arbitrarysystems.io",
  tagline: "Focused software for collectors, studios, and real-world plans.",
  description:
    "Arbitrary Systems builds calm, precise software for serious collectors, studio operators, and private social coordination, with current product work in The Arbitrary Register, PranaLogic, and I'm open 2.",
};

export const capabilities = [
  {
    title: "Software shaped by real workflows",
    description:
      "The products start from concrete operating realities like collection records, storage locations, bookings, waivers, staff roles, circle privacy, and availability windows instead of generic SaaS patterns.",
  },
  {
    title: "Calm surfaces with real depth",
    description:
      "The interface direction favors clarity, legibility, and restraint, but without flattening the detail serious users need to do the work well.",
  },
  {
    title: "Long-term product thinking",
    description:
      "The goal is not feature sprawl. It is software that becomes more trustworthy as collections grow, schedules get busier, and the surrounding operation becomes more demanding.",
  },
];

export const principles = [
  {
    title: "Model the work honestly",
    description:
      "Good software should reflect the real structure of the job, whether that means bottle state and storage context, waitlists and waivers, or the social shape of making plans with trusted people.",
  },
  {
    title: "Keep private details private",
    description:
      "High-trust products need clear boundaries around what belongs to the shared system and what should remain personal, local, circle-scoped, or operator-only.",
  },
  {
    title: "Reduce routine friction",
    description:
      "The products should remove friction from routine work and coordination so that collectors, studio teams, and everyday users spend less time fighting the software around the task.",
  },
  {
    title: "Prefer reliability over theater",
    description:
      "Trust is earned through predictable workflows, accurate records, and careful defaults, not through louder interfaces or performative complexity.",
  },
];

export type Product = {
  name: string;
  slug: string;
  eyebrow: string;
  audience: string;
  status: string;
  logoIconSrc?: string;
  logoIconWidth?: number;
  logoIconHeight?: number;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoStyle: "mark" | "wordmark";
  description: string;
  overview: string;
  direction: string;
  promise: string;
  bullets: string[];
};

export type ProductKey = "register" | "pranalogic" | "imopen2";

export const products: Record<ProductKey, Product> = {
  register: {
    name: "The Arbitrary Register",
    slug: "the-arbitrary-register",
    eyebrow: "Collector system",
    audience: "Private collectors and households managing wine, spirits, beer, and cigar collections.",
    status: "Prototype in development",
    logoSrc: "/products/arbitrary-register-logo.webp",
    logoAlt: "The Arbitrary Register monogram",
    logoWidth: 480,
    logoHeight: 480,
    logoStyle: "mark",
    description:
      "A collector-first system for wine, spirits, beer, and cigars, designed to keep inventory, storage, pricing, and purchase history in one calm, trustworthy place.",
    overview:
      "The Arbitrary Register is being developed for people who maintain serious collections and want better control over what they own, where it lives, what it cost, and how it changes over time.",
    direction:
      "Its direction is shaped by real collector needs: fast capture, category-specific depth, precise storage records, and a shared catalog model that improves discovery without exposing private ownership details.",
    promise:
      "The goal is to make a serious collection easier to maintain, easier to search, and easier to trust as it grows.",
    bullets: [
      "multi-category records for wine, beer, spirits, and cigars",
      "clear tracking for quantity, bottle state, storage location, purchase price, and current value",
      "wish lists, photos, and richer category-specific detail as the product expands",
      "collector-grade privacy boundaries between shared catalog data and personal collection records",
    ],
  },
  pranalogic: {
    name: "PranaLogic",
    slug: "pranalogic",
    eyebrow: "Studio operating system",
    audience: "Yoga studios and boutique fitness businesses managing classes, staff, customers, and one or more locations.",
    status: "Prototype in development",
    logoIconSrc: "/products/pranalogic-mark.png",
    logoIconWidth: 1920,
    logoIconHeight: 1920,
    logoSrc: "/products/pranalogic-wordmark.svg",
    logoAlt: "PranaLogic wordmark",
    logoWidth: 560,
    logoHeight: 120,
    logoStyle: "wordmark",
    description:
      "A studio management system built around scheduling, booking, waivers, waitlists, customer records, and payments, with simplicity and reliability leading the product direction.",
    overview:
      "PranaLogic is being developed for yoga studios that need dependable day-to-day operations across classes, teachers, front-desk staff, customers, rooms, and locations.",
    direction:
      "Its direction centers on the operational backbone of the studio: schedule management, booking and cancellation rules, waitlists, waivers, customer accounts, and billing-related workflows.",
    promise:
      "The goal is software that helps a studio run cleanly and confidently without adding administrative tension to the customer experience.",
    bullets: [
      "multi-location scheduling with rooms, teachers, recurring templates, and dated class instances",
      "role-aware workflows for owners, staff, teachers, and customers",
      "booking, cancellation, waitlist, waiver, and intake flows designed around how studios actually operate",
      "a calmer alternative to cluttered studio software without sacrificing operational seriousness",
    ],
  },
  imopen2: {
    name: "I'm open 2",
    slug: "imopen2",
    eyebrow: "Private pulse planning",
    audience: "People making low-pressure real-world plans with trusted circles of friends, family, or community.",
    status: "Prototype in development",
    logoSrc: "/products/imopen2-logo.png",
    logoAlt: "I'm open 2 logo",
    logoWidth: 2082,
    logoHeight: 2082,
    logoStyle: "mark",
    description:
      "A private, circle-based planning app built around pulses, responses, and syncs, helping people turn small real-world openness into actual plans without public feeds or noisy group chats.",
    overview:
      "I'm open 2 is being developed for people who want a calmer way to signal they are open 2 dinner, a drink, a game, or some other small plan without broadcasting themselves to everyone they know.",
    direction:
      "Its direction centers on private circles, expiring pulses, named positive response, silent privacy, and poster-controlled sync creation so interest can surface without leaking attention metadata or forcing the app to behave like a social feed.",
    promise:
      "The goal is to make real-world coordination feel more human, more private, and less socially exhausting.",
    bullets: [
      "private, invite-only circles with no public feeds or visible engagement theater",
      "pulse-based planning that starts with a small moment of openness and lets useful overlap surface quietly",
      "an \"I'm open 2\" response language and a Sync step that turns interest into an actual plan",
      "silent privacy around delivery, declines, and attention so users are not pressured to perform responsiveness",
      "poster-controlled coordination with trust, locality, and low social pressure leading the design",
    ],
  },
};

export const featuredProducts = [products.register, products.pranalogic, products.imopen2];
