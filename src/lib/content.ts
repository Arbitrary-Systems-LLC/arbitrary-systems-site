export const company = {
  name: "Arbitrary Systems",
  domain: "https://arbitrarysystems.io",
  email: "hello@arbitrarysystems.io",
  tagline: "Software for the work people still do carefully.",
  description:
    "Arbitrary Systems builds beta software for serious collections, studio operations, collaborative tastings, private plans between trusted people, game-community intelligence, and agent-ready workflows that respect the underlying record.",
};

export const capabilities = [
  {
    title: "Software shaped by real workflows",
    description:
      "The products start from concrete operating realities like collection records, storage locations, tasting flows, bookings, waivers, staff roles, circle privacy, availability windows, alliance comparisons, and player snapshots instead of generic SaaS patterns.",
  },
  {
    title: "Calm surfaces with real depth",
    description:
      "The interface direction favors clarity, legibility, and restraint, but without flattening the detail serious users need to do the work well.",
  },
  {
    title: "Long-term product thinking",
    description:
      "The goal is not feature sprawl. It is software that becomes more trustworthy as collections grow, tastings get more involved, schedules get busier, communities get more data-rich, and the surrounding operation becomes more demanding.",
  },
  {
    title: "Agent-ready where it makes the work easier",
    description:
      "The useful AI surface is not generic content. It is trusted agents working against clear records, stable contracts, drafts, approvals, and audit trails so users can offload operational upkeep without losing control.",
  },
];

export const principles = [
  {
    title: "Model the work honestly",
    description:
      "Good software should reflect the real structure of the job, whether that means bottle state and storage context, a live tasting workflow, waitlists and waivers, alliance stat comparisons, or the social shape of making plans with trusted people.",
  },
  {
    title: "Keep private details private",
    description:
      "High-trust products need clear boundaries around what belongs to the shared system and what should remain personal, local, circle-scoped, alliance-scoped, or operator-only.",
  },
  {
    title: "Reduce routine friction",
    description:
      "The products should remove friction from routine work and coordination so that collectors, studio teams, players, and everyday users spend less time fighting the software around the task.",
  },
  {
    title: "Prefer reliability over theater",
    description:
      "Trust is earned through predictable workflows, accurate records, and careful defaults, not through louder interfaces or performative complexity.",
  },
  {
    title: "Make agents useful, not decorative",
    description:
      "When AI agents enter the product surface, they should help with work the system is uniquely positioned to do: cleanup, preparation, reporting, review, and safe execution against the user's real data.",
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

export type ProductKey = "register" | "pranalogic" | "imopen2" | "groupPours" | "lwsPowerup";

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
      "A private registry for wine, beer, spirits, and cigars that connects inventory, imports, tasting history, Distinctions, Group Pours, and a trusted agent-access roadmap into one collector profile.",
    overview:
      "The Registry is in beta for collectors who want one trustworthy place for what they own, where it lives, what it cost, what they have consumed, and what deserves attention next.",
    direction:
      "Its direction is shaped by real collector workflows: bottle-level import, location and bin tracking, category-specific metadata, consumed-history capture, tasting notes, Distinctions, Standouts, agent-readable contracts, and a shared catalog that improves discovery without exposing private ownership details.",
    promise:
      "The goal is to make a serious collection easier to maintain, easier to search, easier to taste from, and more meaningful as history accumulates.",
    bullets: [
      "multi-category records for wine, beer, spirits, and cigars",
      "CellarTracker and CSV import, including consumed-history files",
      "location, bin, quantity, bottle state, purchase history, and current value",
      "Group Pours connection for hosted tastings, rankings, polished notes, and saved tasting history",
      "Distinctions and Standouts that turn collection and tasting history into a living profile",
      "trusted agent roadmap for draft-first upkeep, storage planning, reports, import cleanup, and tasting preparation",
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
        "Trusted agent access is planned around drafts, approvals, storage, cleanup, and reports instead of generic prompts.",
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
      "A studio management system built around scheduling, booking, waivers, waitlists, customer records, and payments — with owner repair tools when things go sideways and a working AI-assistant integration for customers who want one.",
    overview:
      "PranaLogic is now in beta for yoga studios that need dependable day-to-day operations across classes, teachers, front-desk staff, customers, rooms, and locations.",
    direction:
      "Its direction centers on the operational backbone of the studio — schedule management, recurrence at the cadence the studio actually runs, booking and cancellation rules, waitlists, waivers, customer accounts, and billing-related workflows — and on giving owners durable repair paths when something goes wrong at the desk.",
    promise:
      "The goal is software that helps a studio run cleanly and confidently, fixes mistakes without drama when they happen, and meets customers where they increasingly are — including in their AI assistant.",
    bullets: [
      "multi-location scheduling with rooms, teachers, and recurring class and workshop templates at any user-selected cadence (every week, every two weeks, every N weeks)",
      "external registration links for offsite workshops so a studio can run a retreat or guest event without leaving its scheduling backbone",
      "role-aware workflows for owners, staff, teachers, and customers, with per-section visibility and an emerging admin shell that brings the back-of-house surfaces together",
      "owner repair tools — cancel a booking on behalf of a customer, void a wrong purchase, adjust credits, record past attendance for a class that was already taught — every action captured in a per-customer audit timeline",
      "first studio platform with a working Model Context Protocol integration: a customer can mint a scoped key in one click and let Claude, ChatGPT, or any MCP-compatible assistant search classes, check credits, and book or cancel on their behalf, with a hard payment boundary (no headless purchases)",
      "booking, cancellation, waitlist, waiver, and intake flows designed around how studios actually operate",
      "a calmer alternative to cluttered studio software without sacrificing operational seriousness",
    ],
    preview: {
      eyebrow: "Studio day",
      title: "Schedules, people, repair paths, and an AI surface — moving together.",
      stats: [
        { label: "Locations", value: "4 active" },
        { label: "Bookings", value: "112 today" },
        { label: "AI keys", value: "scoped, revocable" },
      ],
      highlights: [
        "Recurring schedules at the studio's real cadence, with offsite workshops able to link out to their own registration system.",
        "Owners can undo and repair operational mistakes without an engineer in the loop — and every repair is logged.",
        "Customers who want their assistant to handle bookings can connect it via MCP; the studio's records stay the source of truth.",
      ],
      footer: "classes • staff • customers • repair tools • AI access",
    },
  },
  imopen2: {
    name: "I'm open 2",
    slug: "imopen2",
    eyebrow: "Private social planning",
    audience: "People making low-pressure real-world plans with trusted circles of friends, family, dates, or community.",
    status: "Beta",
    appUrl: "https://www.imopen2.com",
    betaCtaLabel: "Start free",
    contactCtaLabel: "Talk private planning",
    logoSrc: "/products/imopen2-logo.png",
    logoAlt: "I'm open 2 logo",
    logoWidth: 2082,
    logoHeight: 2082,
    logoStyle: "mark",
    description:
      'A private, circle-based planning app for turning "we should hang out" into real plans, without public feeds, group-chat pressure, or an algorithm deciding what matters.',
    overview:
      "I'm open 2 is in beta for people who want a calmer way to say what they are open 2 without broadcasting themselves to everyone they know or starting another group-chat negotiation.",
    direction:
      "Its direction centers on private circles, expiring Pulses, natural Echo language, quiet declines, Social Pulse controls, and pulser-controlled Sync creation so useful overlap can surface without turning attention into a performance.",
    promise:
      "The goal is to make real-world coordination feel more human, more private, and less socially exhausting.",
    bullets: [
      "private, invite-only circles with no public feeds, follower counts, or visible engagement theater",
      "Pulses that say what someone is open 2 and expire before stale plans pile up",
      'Echo language that reads naturally: "Mando is also open 2 dinner this week"',
      "quiet privacy around delivery, declines, and attention so users are not pressured to perform responsiveness",
      "pulser-controlled Sync creation with private availability counts and clear host and organizer choices",
      "ad-free pricing with a free core tier, Supporter, and Organizer plans",
    ],
    preview: {
      eyebrow: "Circle pulse",
      title: "Private overlap without turning life into a feed.",
      stats: [
        { label: "Pulse", value: "dinner this week" },
        { label: "Echoed", value: "Kate, Alex" },
        { label: "No response", value: "3" },
      ],
      highlights: [
        "Say what you are open 2 and choose the trusted circles that should see it.",
        "People can Echo back when they are also open 2, while quiet passes stay private.",
        "The pulser sees private availability counts, then decides when interest becomes a Sync.",
      ],
      footer: "Pulses • Echos • Syncs • private circles",
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
  lwsPowerup: {
    name: "LW:S - Power Up",
    slug: "lws-powerup",
    eyebrow: "Alliance intelligence",
    audience:
      "Last War: Survival players and alliance leaders comparing manually entered Power, Tech, Production, Drone, and Overlord stats across alliance, server, and global scopes.",
    status: "Beta",
    appUrl: "https://www.lws-powerup.com",
    betaCtaLabel: "Start Power Up",
    contactCtaLabel: "Talk Game Tools",
    detailCtaLabel: "See Companion",
    logoSrc: "/products/lws-powerup-logo.png",
    logoAlt: "LW:S Power Up logo",
    logoWidth: 1024,
    logoHeight: 1024,
    logoStyle: "mark",
    description:
      "An independent companion for Last War: Survival that helps players compare Power, Tech, Production, Drone, and Overlord stats, run 1:1 scouting, and track growth without game-login access or automated scraping.",
    overview:
      "LW:S - Power Up is in beta for alliances that want a cleaner way to see where members are ahead or behind without rebuilding the same spreadsheet every week.",
    direction:
      "Its direction centers on manually entered snapshots, alliance/server/global visibility, reciprocal share-to-see privacy, 1:1 matchup analysis, growth history, and carefully decomposed Power, Tech, Production, Drone, and Overlord models.",
    promise:
      "The goal is to help players make smarter upgrade decisions, scout matchups more clearly, and give alliance leaders a shared picture of growth without asking anyone for game credentials.",
    bullets: [
      "manual stat snapshots for Power, Tech, Production, Drone, and Overlord screens",
      "side-by-side comparison grids that show exactly where a player is ahead, behind, or even",
      "1:1 matchup analysis for scouting rivals or understanding alliance gaps",
      "growth tracking so players can see whether recent upgrades are moving the numbers that matter",
      "alliance, server, and global visibility tiers with reciprocal share-to-see controls",
      "one login can manage up to three game accounts with separate alliance and visibility settings",
      "independent, unofficial companion tooling with no game login, no scraping, and no client automation",
    ],
    preview: {
      eyebrow: "Alliance scout",
      title: "Power, tech, production, Drone, and Overlord gaps in one view.",
      stats: [
        { label: "Scope", value: "Alliance" },
        { label: "Compare", value: "1:1" },
        { label: "Privacy", value: "share-to-see" },
      ],
      highlights: [
        "Players enter their numbers by hand, then compare against their alliance, server, or opted-in global pool.",
        "Comparison views make strong and weak spots visible without giving the app any game-account access.",
        "1:1 scouting and growth history turn routine stat checks into a clearer upgrade plan.",
      ],
      footer: "Power • Tech • Production • Drone • Overlord",
    },
  },
};

export const featuredProducts = [
  products.register,
  products.pranalogic,
  products.imopen2,
  products.groupPours,
  products.lwsPowerup,
];

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
  {
    title: "Trusted agents should help with upkeep, not generic prompts.",
    body:
      "The agent-access roadmap focuses on workflows that Registry can do better than a general assistant because it owns the private record: search saved items, find data gaps, prepare drafts, propose storage moves, assemble reports, and prep tastings while keeping confirmation in the user's hands.",
    bullets: [
      "Read-only contracts first for saved items, storage maps, reports, put-away queues, and tasting history",
      "Draft-first actions for import cleanup, item updates, storage moves, make-space plans, lifecycle events, and tasting drafts",
      "Explicit confirmation before applying inventory, storage, account, billing, or lifecycle changes",
      "Audit trails, stable resource links, schema versions, and retry-safe behavior before broader agent tooling",
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

export const imopen2DetailSections = [
  {
    title: "Pulse, Echo, Sync.",
    body:
      "I'm open 2 uses small language for a better social flow. A Pulse says what you are open 2. An Echo means someone is also open 2. A Sync is the confirmed plan when the pulser is ready to make it real.",
    bullets: [
      "Create a Pulse with a date or time window, vibe, cap, expiration, and circle audience",
      "Receive Echos without turning interest into a public performance",
      "Use private availability counts to choose a time before creating a Sync",
      "Keep sent Echos out of The Field so incoming activity stays calm",
    ],
  },
  {
    title: "Built for trusted circles, not public reach.",
    body:
      "Plans stay scoped to invite-only circles. There are no public feeds, follower counts, or algorithmic discovery loops. Users choose who can reach them, how open they are, and when a plan becomes real.",
    bullets: [
      "Private, invite-only circles",
      "Social Pulse controls for what can reach The Field",
      'Quiet "Not this time" behavior without exposing who declined',
      "Block and notification settings close at hand",
      "Time-bound invites, one-time QR invites, and account-based circle membership",
    ],
  },
  {
    title: "The Field stays focused.",
    body:
      "The Field is for incoming Pulses, circle invites, and Sync updates. My Echos holds the things you already echoed, so the main screen does not become cluttered with your own outbound responses.",
    bullets: [
      "The Field for incoming Pulses and live coordination",
      "My Echos for what you said you are also open 2",
      "Circles for private groups, invites, members, muting, and block controls",
      "Syncs for confirmed plans, RSVP state, reminders, updates, and cancellations",
      "Settings for dark and light mode, notifications, calendar invite preference, billing, and feedback",
    ],
  },
] as const;

export const imopen2Pricing = {
  title: "Start free. Support the product when it becomes part of how you make plans.",
  body:
    "The core app is free to start. Supporter is $2/month through August 2026, then $3/month, with annual options at $24 and $30. Organizer is $7/month or $70/year for people coordinating larger circles and more activity.",
  tiers: [
    {
      name: "Free",
      price: "Free",
      bullets: [
        "Core private circles",
        "Pulse, Echo, and Sync flow",
        "Basic notification settings",
        "Enough room to try the product with real people",
      ],
    },
    {
      name: "Supporter",
      price: "$2/month now, then $3/month",
      bullets: [
        "Saved Pulse templates",
        "Richer planning controls",
        "More room for active Pulses and circles",
        "A small way to support an ad-free product",
      ],
    },
    {
      name: "Organizer",
      price: "$7/month or $70/year",
      bullets: [
        "Larger circles",
        "More saved templates",
        "Invite reminders and pending invite visibility",
        "More room for the person who often makes plans happen",
      ],
    },
  ],
} as const;
