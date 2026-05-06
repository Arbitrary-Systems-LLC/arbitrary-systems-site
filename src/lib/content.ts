export const company = {
  name: "Arbitrary Systems",
  domain: "https://arbitrarysystems.io",
  email: "hello@arbitrarysystems.io",
  tagline: "Software for the work people still do carefully.",
  description:
    "Arbitrary Systems builds beta software for serious collections, studio operations, collaborative tastings, and private plans between trusted people.",
};

export const capabilities = [
  {
    title: "Software shaped by real workflows",
    description:
      "The products start from concrete operating realities like collection records, storage locations, tasting flows, bookings, waivers, staff roles, circle privacy, and availability windows instead of generic SaaS patterns.",
  },
  {
    title: "Calm surfaces with real depth",
    description:
      "The interface direction favors clarity, legibility, and restraint, but without flattening the detail serious users need to do the work well.",
  },
  {
    title: "Long-term product thinking",
    description:
      "The goal is not feature sprawl. It is software that becomes more trustworthy as collections grow, tastings get more involved, schedules get busier, and the surrounding operation becomes more demanding.",
  },
];

export const principles = [
  {
    title: "Model the work honestly",
    description:
      "Good software should reflect the real structure of the job, whether that means bottle state and storage context, a live tasting workflow, waitlists and waivers, or the social shape of making plans with trusted people.",
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

export type ProductPreviewStat = {
  label: string;
  value: string;
};

export type ProductPreview = {
  eyebrow: string;
  title: string;
  stats: ProductPreviewStat[];
  highlights: string[];
  footer: string;
};

export type Product = {
  name: string;
  slug: string;
  eyebrow: string;
  audience: string;
  status: string;
  appUrl: string;
  betaCtaLabel: string;
  contactCtaLabel: string;
  detailCtaLabel?: string;
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
  preview: ProductPreview;
};

export type ProductKey = "register" | "pranalogic" | "imopen2" | "groupPours";

export const products: Record<ProductKey, Product> = {
  register: {
    name: "The Registry",
    slug: "the-registry",
    eyebrow: "Collector intelligence",
    audience: "Private collectors, households, and tasting-minded enthusiasts managing wine, beer, spirits, and cigar collections.",
    status: "Beta",
    appUrl: "https://www.the-registry.net",
    betaCtaLabel: "Start The Registry",
    contactCtaLabel: "Talk Collections",
    detailCtaLabel: "See Collector",
    logoSrc: "/products/the-registry-logo.png",
    logoAlt: "The Registry crest",
    logoWidth: 1024,
    logoHeight: 1024,
    logoStyle: "mark",
    description:
      "A private registry for wine, beer, spirits, and cigars that connects inventory, imports, tasting history, Distinctions, and Group Pours into one collector profile.",
    overview:
      "The Registry is in beta for collectors who want one trustworthy place for what they own, where it lives, what it cost, what they have consumed, and what deserves attention next.",
    direction:
      "Its direction is shaped by real collector workflows: bottle-level import, location and bin tracking, category-specific metadata, consumed-history capture, tasting notes, Distinctions, Standouts, and a shared catalog that improves discovery without exposing private ownership details.",
    promise:
      "The goal is to make a serious collection easier to maintain, easier to search, easier to taste from, and more meaningful as history accumulates.",
    bullets: [
      "multi-category records for wine, beer, spirits, and cigars",
      "CellarTracker and CSV import, including consumed-history files",
      "location, bin, quantity, bottle state, purchase history, and current value",
      "Group Pours connection for hosted tastings, rankings, polished notes, and saved tasting history",
      "Distinctions and Standouts that turn collection and tasting history into a living profile",
      "collector-grade privacy boundaries between shared catalog data and personal collection records",
    ],
    preview: {
      eyebrow: "Collection snapshot",
      title: "Inventory, tastings, and collector intelligence in one place.",
      stats: [
        { label: "Tracked", value: "642 bottles" },
        { label: "Locations", value: "4 cellars" },
        { label: "Value", value: "$86k" },
      ],
      highlights: [
        "Track what you own, where it lives, what it cost, and what needs attention next.",
        "Import CellarTracker and CSV files, including consumed-history exports that make Distinctions smarter.",
        "Collector includes Group Pours, so hosted tastings, rankings, and polished notes can become part of the same long-term profile.",
      ],
      footer: "wine • beer • spirits • cigars • Group Pours",
    },
  },
  pranalogic: {
    name: "PranaLogic",
    slug: "pranalogic",
    eyebrow: "Studio operating system",
    audience: "Yoga studios and boutique fitness businesses managing classes, staff, customers, and one or more locations.",
    status: "Beta",
    appUrl: "https://www.prana-logic.com",
    betaCtaLabel: "See Studio Beta",
    contactCtaLabel: "Talk Studio Ops",
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
      "PranaLogic is now in beta for yoga studios that need dependable day-to-day operations across classes, teachers, front-desk staff, customers, rooms, and locations.",
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
    preview: {
      eyebrow: "Studio day",
      title: "Schedules, people, and waivers moving together.",
      stats: [
        { label: "Locations", value: "4 active" },
        { label: "Bookings", value: "112 today" },
        { label: "Waitlist", value: "18 pending" },
      ],
      highlights: [
        "Recurring schedules, rooms, and dated class instances stay tied to the real calendar.",
        "Owners, desk staff, teachers, and customers each get the actions that fit their role.",
        "Waivers, attendance, and booking rules sit close to the flow instead of becoming separate admin work.",
      ],
      footer: "classes • staff • customers • payments",
    },
  },
  imopen2: {
    name: "I'm open 2",
    slug: "imopen2",
    eyebrow: "Private pulse planning",
    audience: "People making low-pressure real-world plans with trusted circles of friends, family, or community.",
    status: "Beta",
    appUrl: "https://www.imopen2.com",
    betaCtaLabel: "Try Private Beta",
    contactCtaLabel: "Talk Private Planning",
    logoSrc: "/products/imopen2-logo.png",
    logoAlt: "I'm open 2 logo",
    logoWidth: 2082,
    logoHeight: 2082,
    logoStyle: "mark",
    description:
      "A private, circle-based planning app built around pulses, responses, and syncs, helping people turn small real-world openness into actual plans without public feeds or noisy group chats.",
    overview:
      "I'm open 2 is now in beta for people who want a calmer way to signal they are open 2 dinner, a drink, a game, or some other small plan without broadcasting themselves to everyone they know.",
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
    preview: {
      eyebrow: "Circle pulse",
      title: "Quiet overlap without turning life into a feed.",
      stats: [
        { label: "Circles", value: "3 trusted" },
        { label: "Replies", value: "7 open 2" },
        { label: "Syncs", value: "2 active" },
      ],
      highlights: [
        "A pulse reaches only the circles that should see it, not everyone a person knows.",
        "Replies stay lightweight and positive so interest can surface without social theater.",
        "The original poster decides whether overlap becomes a real plan and who gets brought into it.",
      ],
      footer: "pulses • responses • syncs",
    },
  },
  groupPours: {
    name: "Group Pours",
    slug: "group-pours",
    eyebrow: "Collaborative tasting",
    audience: "Hosts and tasters running guided, blind, or social wine tastings together.",
    status: "Beta",
    appUrl: "https://www.grouppours.com",
    betaCtaLabel: "Start Tasting Beta",
    contactCtaLabel: "Talk Tastings",
    logoSrc: "/products/group-pours-wordmark.png",
    logoAlt: "Group Pours wordmark",
    logoWidth: 720,
    logoHeight: 297,
    logoStyle: "wordmark",
    description:
      "A collaborative wine tasting app built around GPAT, helping hosts run structured tastings while tasters join by code, record notes, and contribute to live shared results.",
    overview:
      "Group Pours is now in beta for tasting hosts who want a cleaner way to run one or more wines, optionally keep bottles blind, and gather everyone into the same tasting flow without paper chaos.",
    direction:
      "Its direction centers on host-led tasting sessions, share codes and QR joins, GPAT-driven note capture, blind tasting support, and live aggregate views that get more useful as the room fills in responses.",
    promise:
      "The goal is to make group tasting easier to host, easier to join, and more rewarding to revisit after the pours are over.",
    bullets: [
      "host-led tastings with one or more wines, optional blind mode, and live session control",
      "join-by-code or QR workflows that let tasters move straight into note capture",
      "structured GPAT sheets, real-time aggregate feedback, and shareable group results",
      "a natural bridge between collaborative tasting and a deeper personal collection record in The Registry",
    ],
    preview: {
      eyebrow: "Tasting room",
      title: "Shared notes and GPAT results while the pours are live.",
      stats: [
        { label: "Tasters", value: "12 joined" },
        { label: "Wines", value: "6 poured" },
        { label: "Blind", value: "on" },
      ],
      highlights: [
        "Hosts run the room while tasters join by code or QR and move straight into structured note capture.",
        "Blind flights stay hidden until the right moment, with reveal and control still in the host's hands.",
        "Aggregate notes keep getting more useful as the group fills in the tasting together.",
      ],
      footer: "host flow • blind mode • live results",
    },
  },
};

export const featuredProducts = [products.register, products.pranalogic, products.imopen2, products.groupPours];

export const registryDetailSections = [
  {
    title: "Your collection, without flattening the details.",
    body:
      "The Registry tracks wine, beer, spirits, and cigars in one private record while preserving the category-specific details that matter: vintage, varietal, producer, region, proof, format, bottle state, location, bin, quantity, purchase history, and estimated value.",
    bullets: [
      "In-stock, pending, consumed, wishlist, and open-bottle states",
      "Location and bin tracking for real cellar and cabinet organization",
      "Category-specific metadata for wine, beer, spirits, and cigars",
      "Dashboard views for receiving, low stock, drink windows, and attention items",
    ],
  },
  {
    title: "Bring the history with you.",
    body:
      "Collector supports CellarTracker and CSV import, including consumed-history files. The best CellarTracker import comes from exporting Individual Bottles with all fields selected, so location, bin, purchase date, delivery date, and richer wine metadata can come across cleanly.",
    bullets: [
      "Collection import for current and pending bottles",
      "Consumed-history import for what you have already experienced",
      "Dedupe preview before import",
      "Cleanup tools for messy repeat imports",
      "Export remains available so users can always get their data back",
    ],
  },
  {
    title: "A profile of what you collect and what you love.",
    body:
      "Distinctions turn collection depth, consumption history, geography, varietal breadth, aging, and tasting behavior into an explainable collector profile. Standouts create a lighter preference layer by asking what stood out from recent things you have had, without forcing everything into a 100-point score.",
    bullets: [
      "Distinctions across wine, beer, spirits, cigars, collection depth, and experience history",
      "Clickable progress details explaining how each Distinction is computed",
      "Standouts for casual favorites without rigid scores",
      "Future shared-registry support for households and couples with different favorites",
    ],
  },
  {
    title: "The tasting happens in Group Pours. The history lives in The Registry.",
    body:
      "Collector includes Group Pours. Start a tasting from bottles in The Registry, host it in Group Pours, then save rankings, polished notes, and tasting summaries back to the collector profile. Inventory changes still require explicit confirmation, so hosting a tasting never silently consumes bottles.",
    bullets: [
      "Open selected Registry wines directly in a Group Pours hosted tasting",
      "Save tasting summaries and polished notes back to The Registry",
      "Use tasting history to feed Distinctions and future recommendations",
      "Keep inventory authority in The Registry with explicit consume confirmation",
    ],
  },
] as const;

export const registryPricing = {
  title: "Free to begin. Collector when it becomes home.",
  body:
    "Free is useful by design for manual tracking and getting comfortable with the registry model. Collector is $7/month or $70/year and includes The Registry plus Group Pours.",
  tiers: [
    {
      name: "Free",
      price: "Free",
      bullets: [
        "Manual item entry",
        "Core collection, wishlist, consumed, and activity views",
        "Starter Distinctions preview",
        "Standouts preference picks",
        "Export",
      ],
    },
    {
      name: "Collector",
      price: "$7/month or $70/year",
      bullets: [
        "The Registry plus Group Pours in one membership",
        "CellarTracker and CSV import",
        "Consumed-history import",
        "Add from photo",
        "Hosted Group Pours tastings, rankings, and saved tasting history",
        "Full Distinctions catalog and progress detail",
        "Advanced import cleanup and dedupe tools",
      ],
    },
  ],
} as const;
