export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  color: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  altImage: string;
  deliverables: string[];
  stats: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  categories: [string, string, string];
  image: string;
  bgImage: string;
  gridImage: string;
  client: string;
  director: string;
  year: string;
  location: string;
  summary: string;
  challenge: string;
  execution: string;
  gallery: string[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  extendedBio: string;
  image: string;
  specialty: string;
  experience: string;
  credits: string[];
  socials: {
    facebook: string;
    instagram: string;
    pinterest: string;
    dribbble: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  column: 'left' | 'right';
  featuredDark?: boolean;
  excerpt: string;
  content: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rotation: number;
}

export interface TalentCompCard {
  id: string;
  index: string;
  name: string;
  division: "SCREEN LEADS" | "COUTURE RUNWAY" | "NEW FACES";
  bureau: string;
  latestBooking: string;
  accentColor: string;
  primaryImage: string;
  secondaryImage: string;
  stats: {
    height: string;
    eyes: string;
    hair: string;
    specialty: string;
  };
  projectSlug: string;
}

export const ASSETS = {
  backToTopIcon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891f3ea9daf4fb3b1af2c2b_back%20to%20top%20icon.svg",
  closeIconWhite: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e77438579d2253583018_close%20icon.svg",
  closeIconDark: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870f03a77aa2ee38614a_close%20icon.svg",
  sidebarLogoWhite: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e532410a2c9e30bd1d83_sidebar%20icon%201.svg",
  sidebarLogoDark: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899869fdf40f308b96f45d0_sidebar%20logo%20style%202.svg",
  sidebarImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e812953456a2d182ac4c_sidebar%20iamge.png",
  headerLogoDark: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889c0c8767ddfe94c5c290f_Header%20Logo.svg",
  headerLogoWhite: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688dfcd1ff7283ee388d12be_Header%20Style%20Two%20Logo.svg",
  footerLogoIcon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688dbafc16b040471e10b3c2_footer%20logo%20icon%20(1).svg",
  heroImage1: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889efca9b1e194759a282ca_hero%20Image%20(2).png",
  heroImage2: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889efcb005bb9b5dbc40376_hero%20Image%20(1).png",
  heroButtonIcon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a004a45ae83642ff358e6_hero%20button%20icon.svg",
  videoMp4: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8%2F68919288da35115879ab50d0_6994264_Headphones_Audio_1280x720-transcode.mp4",
  videoWebm: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8%2F68919288da35115879ab50d0_6994264_Headphones_Audio_1280x720-transcode.webm",
  socialWhite: {
    dribbble: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e9cee0071f1736280542_dribbble-logo.svg",
    behance: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e9afea348f3addce5039_behance-logo.svg",
    instagram: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e9b99ff2dce67f972f49_instagram-logo.svg",
  },
  socialDark: {
    dribbble: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870fa15a0e00782fd010_dribbble-logo.svg",
    behance: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870fc7092a5077f0782c_behance-logo.svg",
    instagram: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870ff90eee51937cd2f0_instagram-logo.svg",
  },
  footerSocials: {
    facebook: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d7e785817aa6b97eb_1%20(3).svg",
    instagram: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3dad430c3f5702f503_1%20(1).svg",
    pinterest: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d7ccfd9626d9cf79d_1%20(2).svg",
    dribbble: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d8b6be83b0d23f1da_1%20(4).svg",
  },
  teamSocials: {
    facebook: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec0901b7333bc57e9356_2%20(2).svg",
    instagram: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec0928b3cf429048ea66_2%20(3).svg",
    pinterest: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec09f5c11a916bb6f1cf_2%20(1).svg",
    dribbble: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec099e4bba0351a92fb9_2%20(4).svg",
  },
  contactIcons: {
    email: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891eb304609cbdaede22df2_1%20(3).svg",
    location: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891eb30778705f4b42a1677_1%20(2).svg",
    phone: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891eb3097d3296f92052653_1%20(7).svg",
  },
  aboutTunnelFrames: [
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688ddcba2ce52119112f38b3_about%20hero%20image%20(2).webp",
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688ddcba4a5b551e662869e8_about%20hero%20image%20(1).webp",
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605695cade17f56d98c_service%20images%20(1).webp",
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605d63df0d1262ddb06_service%20images%20(2).webp",
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605ad2d96a85ad2b64c_service%20images%20(8).webp",
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d6055f8f425e2fff77ef_service%20images%20(11).webp",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    slug: "principal-film-casting",
    title: "Principal Film Casting",
    shortTitle: "Principal Casting",
    color: "#a7d8de",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a56080453899cfe829_Service%20Icons%20(4).svg",
    shortDesc: "Securing magnetic lead and supporting screen talent for feature films, prestige television, and global streaming originals.",
    fullDesc: "Our Principal Film Casting division pairs auteur directors and showrunners with unforgettable screen presences. From Chemistry Reads in New York, London, and Los Angeles to international street casting searches, we handle script breakdowns,SAG-AFTRA negotiations, and chemistry callbacks with surgical creative precision.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905c139b7f22f50199f97c_service%20images%20(5).webp",
    altImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605695cade17f56d98c_service%20images%20(1).webp",
    deliverables: [
      "Comprehensive Script & Character Breakdowns",
      "Global Talent Scouting & Street Casting",
      "In-Studio & Live Remote Chemistry Reads",
      "SAG-AFTRA / Equity Deal Memo Structuring",
    ],
    stats: [
      { label: "Feature Films Cast", value: "140+" },
      { label: "Festival Selections", value: "62" },
    ],
  },
  {
    id: "service-2",
    slug: "editorial-runway-talent",
    title: "Editorial & Runway",
    shortTitle: "Runway & Editorial",
    color: "#f5a3a3",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a598eb0d504f0ae8cb_Service%20Icons%20(3).svg",
    shortDesc: "Curating distinct faces and sculptural movement for Paris, Milan, New York, and Tokyo fashion weeks and luxury print campaigns.",
    fullDesc: "We curate boundary-pushing faces and iconic runway walkers for luxury fashion houses and avant-garde publications. Whether casting a 60-look Paris couture show or an intimate film lookbook, our board balances emerging new faces with established supermodels.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905c3e96b8b16d4dde8705_service%20images%20(2).webp",
    altImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605d63df0d1262ddb06_service%20images%20(2).webp",
    deliverables: [
      "Runway Show Lineup & Exclusive Bookings",
      "Luxury Print & Digital Lookbook Casting",
      "Go-Sees, Fitting Coordination & Choreography",
      "International Visa & Travel Logistics",
    ],
    stats: [
      { label: "Runway Shows", value: "310+" },
      { label: "Vogue Covers", value: "48" },
    ],
  },
  {
    id: "service-3",
    slug: "commercial-brand-campaigns",
    title: "Commercial Campaigns",
    shortTitle: "Commercial Talent",
    color: "#f8c794",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a508108099599d7acb_Service%20Icons%20(2).svg",
    shortDesc: "Connecting global lifestyle, automotive, and tech brands with authentic actors, creators, and cultural tastemakers.",
    fullDesc: "Modern commercial campaigns demand immediate emotional resonance. We cast multi-market broadcast spots, Super Bowl commercials, and digital brand films with diverse, charismatic performers—managing global buyouts, usage rights, and rapid 48-hour turnarounds.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905c55c0753c130b6f76cf_service%20images%20(1).webp",
    altImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d607abb0846af1668e4a_service%20images%20(6).webp",
    deliverables: [
      "Global Broadcast & Digital Spot Casting",
      "Real-People & Subculture Documentary Scouting",
      "Usage Rights, Exclusivity & Buyout Management",
      "Self-Tape & Live Callback Direction",
    ],
    stats: [
      { label: "Global Campaigns", value: "480+" },
      { label: "Client Retention", value: "96%" },
    ],
  },
  {
    id: "service-4",
    slug: "voice-motion-capture",
    title: "Voice & Motion Capture",
    shortTitle: "Voice & MoCap",
    color: "#cbb7f6",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a55ff968aa3b57dbdd_Service%20Icons%20(1).svg",
    shortDesc: "Specialist performance capture, stunt choreography, and multilingual voice casting for AAA gaming and virtual production.",
    fullDesc: "As cinema and interactive worlds converge, our Voice & Performance Capture desk supplies physical actors, creature performers, and vocal chameleons for Unreal Engine volumes, AAA gaming studios, and animated features.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905c69f59a9d893743a302_service%20images%20(3).webp",
    altImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605d4d5aa0507585617_service%20images%20(3).webp",
    deliverables: [
      "Full-Body & Facial HMC Performance Capture",
      "Multilingual Voiceover & Dialect Coaching",
      "Stunt & Movement Specialist Coordination",
      "Biometric & Digital Replica Licensing Protection",
    ],
    stats: [
      { label: "AAA Titles Cast", value: "55+" },
      { label: "Voice Artists", value: "900+" },
    ],
  },
  {
    id: "service-5",
    slug: "music-video-choreography",
    title: "Music Video & Movement",
    shortTitle: "Movement & Dance",
    color: "#a7d8de",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a56080453899cfe829_Service%20Icons%20(4).svg",
    shortDesc: "Visceral contemporary dancers, movement directors, and featured leads for chart-topping music visuals and world tours.",
    fullDesc: "We partner with visionary music video directors and recording labels to cast kinetic dancers, physical theatre performers, and striking co-stars who elevate sonic storytelling into cultural moments.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905c7c8130ec8f3b825fdf_service%20images%20(4).webp",
    altImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d605ad2d96a85ad2b64c_service%20images%20(8).webp",
    deliverables: [
      "Contemporary & Street Dance Auditions",
      "Movement Director Pairing",
      "Featured Narrative Lead Casting",
      "Tour Visual & Stage Ensemble Sourcing",
    ],
    stats: [
      { label: "Music Videos", value: "220+" },
      { label: "VMA / Grammy Nominees", value: "34" },
    ],
  },
  {
    id: "service-6",
    slug: "celebrity-ambassador-packaging",
    title: "Celebrity Endorsements",
    shortTitle: "Celebrity Packaging",
    color: "#f5a3a3",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a598eb0d504f0ae8cb_Service%20Icons%20(3).svg",
    shortDesc: "Strategic A-list talent procurement, brand ambassadorships, and front-row curation for global luxury houses.",
    fullDesc: "Our Celebrity Packaging division bridges Hollywood and high fashion. We negotiate multi-year global ambassador contracts, red-carpet dressing partnerships, and capsule collaborations backed by audience affinity analytics.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905c8db60bd0b42dfc1172_service%20images%20(6).webp",
    altImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891d6055f8f425e2fff77ef_service%20images%20(11).webp",
    deliverables: [
      "Global Brand Ambassador Procurement",
      "Red Carpet & Met Gala VIP Placement",
      "Talent Fee & Morals Clause Negotiation",
      "Cross-Cultural Audience Sentiment Analysis",
    ],
    stats: [
      { label: "A-List Placements", value: "85+" },
      { label: "Media Value Generated", value: "$420M" },
    ],
  },
  {
    id: "service-7",
    slug: "street-documentary-scouting",
    title: "Street & Real-People Scouting",
    shortTitle: "Street Scouting",
    color: "#f8c794",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a508108099599d7acb_Service%20Icons%20(2).svg",
    shortDesc: "Uncovering raw, unvarnished authenticity through grassroots scouting across global subcultures, skate parks, and ateliers.",
    fullDesc: "When scripts call for lived-in truth that cannot be manufactured, our field scouts hit the streets across 18 countries. We discover real artisans, athletes, musicians, and first-time actors who bring electric realism to screen.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905ca57ca18674204d6475_service%20images%20(7).webp",
    altImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905ca57ca18674204d6475_service%20images%20(7).webp",
    deliverables: [
      "Subculture & Community Field Research",
      "On-Camera Documentary Interview Tapes",
      "First-Time Actor Set Coaching",
      "Location Release & Clearance Administration",
    ],
    stats: [
      { label: "Cities Scouted", value: "42" },
      { label: "New Faces Discovered", value: "1,800+" },
    ],
  },
  {
    id: "service-8",
    slug: "ensemble-background-architecture",
    title: "Atmospheric Ensemble",
    shortTitle: "Ensemble & Crowd",
    color: "#cbb7f6",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a55ff968aa3b57dbdd_Service%20Icons%20(1).svg",
    shortDesc: "Period-accuratefeatured background and specialized crowd curation that makes cinematic worlds feel genuinely inhabited.",
    fullDesc: "Every frame is defined by the faces in the periphery. We curate period-specific ensembles, precision-matched photo doubles, and specialized skill background artists for historical epics and high-concept sci-fi.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905cc9f20d24ab62c9ad21_service%20images%20(8).webp",
    altImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905cc9f20d24ab62c9ad21_service%20images%20(8).webp",
    deliverables: [
      "Period-Accurate Look & Silhouette Matching",
      "Precision Camera & Lighting Doubles",
      "Large-Scale Crowd Holding & Set Wrangling",
      "Costume & Prosthetic Fitting Scheduling",
    ],
    stats: [
      { label: "Ensemble Bookings", value: "12,000+" },
      { label: "On-Set Accuracy", value: "100%" },
    ],
  },
  {
    id: "service-9",
    slug: "dialect-intimacy-coaching",
    title: "Dialect & Performance Prep",
    shortTitle: "Performance Prep",
    color: "#a7d8de",
    icon: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a05a56080453899cfe829_Service%20Icons%20(4).svg",
    shortDesc: "Dedicated dialect coaches, certified intimacy coordinators, and pre-shoot character intensives for principal talent.",
    fullDesc: "Great casting doesn't stop at the booking. We surround cast members with elite dialect specialists, movement coaches, and SAG-accredited intimacy coordinators so actors step onto set fearless and fully prepared.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905cb7fdd817dddb7fba5d_service%20images%20(11).webp",
    altImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68905cb7fdd817dddb7fba5d_service%20images%20(11).webp",
    deliverables: [
      "Phonetic & Regional Dialect Mastery",
      "Certified On-Set Intimacy Coordination",
      "Character Physicality & Method Workshops",
      "ADR & Post-Production Vocal Supervision",
    ],
    stats: [
      { label: "Coaches on Roster", value: "38" },
      { label: "Languages Covered", value: "29" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    slug: "velvet-nocturne",
    title: "Velvet Nocturne",
    categories: ["Feature Film", "Principal Cast", "A24 / Cannes"],
    image: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d6919fe788e7f9bc94_Portfolio%20Images%20(2).webp",
    bgImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b0c188433d6d3cf62fe70_Portfolio%20Image.webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68908667f830b978f01668ff_Portfolio%20image%20(1).webp",
    client: "Lumière Pictures",
    director: "Céline Moreau",
    year: "2025",
    location: "Paris & Marseille",
    summary: "A six-month European street-casting odyssey to discover two bilingual leads and 40 underground club performers for a neo-noir thriller.",
    challenge: "The director required lead actors fluent in both French and Algerian Arabic with conservatory-level piano skills and zero prior mainstream overexposure.",
    execution: "We audited 1,400 conservatory students and independent theatre collectives across Paris, Lyon, and Marseille, culminating in three weeks of improvisational chemistry workshops.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68908667f830b978f01668ff_Portfolio%20image%20(1).webp",
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d6919fe788e7f9bc94_Portfolio%20Images%20(2).webp",
    ],
  },
  {
    id: "project-2",
    slug: "maison-solaris-aw25",
    title: "Maison Solaris",
    categories: ["Haute Couture", "Runway Cast", "Paris"],
    image: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d6f0b59a0d8f2a745b_Portfolio%20Images%20(3).webp",
    bgImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d5ae94eb87dbd28743_Portfolio%20Images%20(4).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890867e1990a7713c87fee4_Portfolio%20image%20(3).webp",
    client: "Maison Solaris Paris",
    director: "Julian Vance",
    year: "2025",
    location: "Palais de Tokyo, Paris",
    summary: "Architectural runway casting and movement direction for 54 couture looks, blending iconic 90s supermodels with 18 global new-face exclusives.",
    challenge: "Balancing dramatic sculptural garments with a brutalist concrete runway that demanded dancers' posture and unshakeable spatial pacing.",
    execution: "Over 600 go-sees in 10 days, pairing classical ballet soloists with high-fashion exclusives scouted from Seoul, Dakar, Berlin, and São Paulo.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890867e1990a7713c87fee4_Portfolio%20image%20(3).webp",
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d6f0b59a0d8f2a745b_Portfolio%20Images%20(3).webp",
    ],
  },
  {
    id: "project-3",
    slug: "kinetix-gt-launch",
    title: "Kinetix GT Zero",
    categories: ["Commercial", "Global Spot", "Automotive"],
    image: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d59ae80e4a3bfc2572_Portfolio%20Images%20(5).webp",
    bgImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f5c288ecbde7adb14_Portfolio%20Image%20Two.png",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890868c542526804cc8b639_Portfolio%20image%20(5).webp",
    client: "Kinetix Motorsport",
    director: "Marcus Lindqvist",
    year: "2024",
    location: "Reykjavik & Stuttgart",
    summary: "High-adrenaline precision driver and principal talent casting for a global electric hypercar launch film broadcast across 45 markets.",
    challenge: "Sourcing a lead actress capable of executing high-speed wet-track stunt driving while delivering a restrained, cinematic monologue.",
    execution: "We cross-referenced FIA license holders with theatrical talent registries, locking a bilingual Danish-British lead alongside a 12-person pit crew.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890868c542526804cc8b639_Portfolio%20image%20(5).webp",
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d59ae80e4a3bfc2572_Portfolio%20Images%20(5).webp",
    ],
  },
  {
    id: "project-4",
    slug: "aether-chronicles",
    title: "Aether Chronicles",
    categories: ["Motion Capture", "Voice Cast", "AAA Gaming"],
    image: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d501846cc31be1917b_Portfolio%20Images%20(6).webp",
    bgImage: "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d5b7e94450026c3e51_Portfolio%20Images%20(1).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890869d603e93d7e428c898_Portfolio%20image%20(6).webp",
    client: "Valkyrie Interactive",
    director: "Kenji Takahashi",
    year: "2025",
    location: "Los Angeles & Tokyo",
    summary: "Full-body optical performance capture and 9-principal voice ensemble for an award-winning sci-fi RPG.",
    challenge: "Performers needed full facial HMC emotional subtlety while executing wire-assisted zero-gravity combat choreography in a 360-degree volume.",
    execution: "Cast Royal Shakespeare Company alumni paired with Cirque movement specialists, overseeing 80 days of volume capture in Los Angeles.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890869d603e93d7e428c898_Portfolio%20image%20(6).webp",
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b16d501846cc31be1917b_Portfolio%20Images%20(6).webp",
    ],
  },
  {
    id: "project-5",
    slug: "obsidian-echo",
    title: "Obsidian Echo",
    categories: ["Music Visual", "Choreography", "London"],
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086b25c4aca763fc2533a_Portfolio%20image%20(7).webp",
    bgImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086b25c4aca763fc2533a_Portfolio%20image%20(7).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086b25c4aca763fc2533a_Portfolio%20image%20(7).webp",
    client: "Warp / Columbia UK",
    director: "Soraia Mendes",
    year: "2024",
    location: "East London",
    summary: "A single-take 35mm visual poem featuring 28 krump and contemporary floorwork dancers inside a flooded brutalist warehouse.",
    challenge: "Executing an unbroken 6-minute Steadicam shot requiring extreme stamina and micro-second cue precision.",
    execution: "Held a 3-day open movement intensive in Hackney, assembling a razor-sharp ensemble of 28 dancers.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086b25c4aca763fc2533a_Portfolio%20image%20(7).webp",
    ],
  },
  {
    id: "project-6",
    slug: "atelier-vermeil",
    title: "Atelier Vermeil",
    categories: ["Luxury Print", "Editorial", "Milan"],
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086c5857f59f3ec133f25_Portfolio%20image%20(8).webp",
    bgImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086c5857f59f3ec133f25_Portfolio%20image%20(8).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086c5857f59f3ec133f25_Portfolio%20image%20(8).webp",
    client: "Atelier Vermeil Milano",
    director: "Lorenzo Bellini",
    year: "2025",
    location: "Lake Como, Italy",
    summary: "Multi-generational heritage campaign casting spanning iconic Italian cinema legends and avant-garde new faces.",
    challenge: "Creating an authentic sense of aristocratic family lineage across three generations of talent.",
    execution: "Paired legendary 1970s Cinecittà actors with fresh Milanese street-cast faces for a timeless 40-page monograph.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086c5857f59f3ec133f25_Portfolio%20image%20(8).webp",
    ],
  },
  {
    id: "project-7",
    slug: "neon-requiem-series",
    title: "Neon Requiem",
    categories: ["Streaming Series", "Ensemble", "HBO / Sky"],
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086d8beafa1405846200d_Portfolio%20image%20(9).webp",
    bgImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086d8beafa1405846200d_Portfolio%20image%20(9).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086d8beafa1405846200d_Portfolio%20image%20(9).webp",
    client: "Prestige Drama Studio",
    director: "Hannah Lind",
    year: "2024",
    location: "Berlin & Prague",
    summary: "8-episode limited series casting 14 series regulars and 95 speaking day-players across Central Europe.",
    challenge: "Coordinating visa clearances and complex cross-boarded shooting schedules across four languages.",
    execution: "Established satellite casting hubs in Berlin, Prague, and Warsaw, delivering 100% of speaking roles ahead of principal photography.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086d8beafa1405846200d_Portfolio%20image%20(9).webp",
    ],
  },
  {
    id: "project-8",
    slug: "solstice-fragrance",
    title: "Solstice Eau",
    categories: ["Celebrity Amb.", "Beauty Film", "New York"],
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086eefcd9c57d6caa8240_Portfolio%20image%20(10).webp",
    bgImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086eefcd9c57d6caa8240_Portfolio%20image%20(10).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086eefcd9c57d6caa8240_Portfolio%20image%20(10).webp",
    client: "Maison Solstice Parfums",
    director: "Elena Rostova",
    year: "2025",
    location: "New York & Amalfi",
    summary: "Global fragrance ambassador negotiation and supporting cast curation for a golden-hour 65mm campaign.",
    challenge: "Aligning a Venice Film Festival best-actress winner's tight press schedule with a 4-day coastal shoot.",
    execution: "Closed global print and broadcast rights in 72 hours and cast 12 Mediterranean supporting talent.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086eefcd9c57d6caa8240_Portfolio%20image%20(10).webp",
    ],
  },
  {
    id: "project-9",
    slug: "hyperion-sport-global",
    title: "Hyperion Pulse",
    categories: ["Street Casting", "Athletic", "Global"],
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086ff5cb065ab1b1aca0f_Portfolio%20image%20(11).webp",
    bgImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086ff5cb065ab1b1aca0f_Portfolio%20image%20(11).webp",
    gridImage: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086ff5cb065ab1b1aca0f_Portfolio%20image%20(11).webp",
    client: "Hyperion Athletics",
    director: "Devon Brooks",
    year: "2025",
    location: "Tokyo, London & LA",
    summary: "Grassroots street scouting of 32 underground marathoners, climbers, and parkour athletes across three continents.",
    challenge: "Zero professional models allowed—every cast member had to be a verified competitive or street athlete.",
    execution: "Embedded field scouts in local run clubs and climbing gyms across Tokyo, London, and Los Angeles.",
    gallery: [
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689086ff5cb065ab1b1aca0f_Portfolio%20image%20(11).webp",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    slug: "elena-vance",
    name: "Elena Vance",
    role: "Head of Principal Casting",
    bio: "Over 14 years casting award-winning cinema, A24 features, and international co-productions across New York, Paris, and London.",
    extendedBio: "Elena founded Reflux's Principal Film desk after a decade casting for Palme d'Or and Academy Award-nominated filmmakers. Known for her instinct in pairing veteran screen icons with raw street-cast newcomers, she oversees script breakdowns, chemistry reads, and talent packaging globally.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689089de09aa4ac0af38a871_team%20image%20(1).webp",
    specialty: "Feature Film & Prestige Series",
    experience: "14+ Years",
    credits: ["Velvet Nocturne (Cannes 2025)", "Neon Requiem (HBO)", "The Glass Harbor (Venice)"],
    socials: { facebook: "#", instagram: "#", pinterest: "#", dribbble: "#" },
  },
  {
    id: "team-2",
    slug: "marcus-sterling",
    name: "Marcus Sterling",
    role: "Runway & Editorial Director",
    bio: "Architect behind 200+ Paris, Milan, and New York Fashion Week castings and luxury monograph campaigns.",
    extendedBio: "Marcus shapes the visual identity of the world's most directional fashion houses. From scouting exclusive new faces in Seoul and Lagos to choreographing 70-look runway spectacles at the Palais de Tokyo, his eye defines modern editorial beauty.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689089b78f8e74fb64149b4f_team%20image%20(2).webp",
    specialty: "Haute Couture & Luxury Print",
    experience: "11+ Years",
    credits: ["Maison Solaris AW25", "Atelier Vermeil Milano", "Vogue Italia September Issue"],
    socials: { facebook: "#", instagram: "#", pinterest: "#", dribbble: "#" },
  },
  {
    id: "team-3",
    slug: "sora-takahashi",
    name: "Sora Takahashi",
    role: "Commercial & Street Scout Lead",
    bio: "Specializes in global subculture research, real-people documentary casting, and multi-market broadcast campaigns.",
    extendedBio: "Sora leads a network of 40 field scouts across 18 countries. When brands and directors demand unscripted charisma—from underground Tokyo runners to Marseilles jazz pianists—Sora's team finds the one-in-a-million human story.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689089703dce1d45ada4236e_team%20image%20(3).webp",
    specialty: "Global Commercial & Street Scouting",
    experience: "9+ Years",
    credits: ["Kinetix GT Zero", "Hyperion Pulse Global", "Leica Street Stories"],
    socials: { facebook: "#", instagram: "#", pinterest: "#", dribbble: "#" },
  },
  {
    id: "team-4",
    slug: "julian-mercer",
    name: "Julian Mercer",
    role: "Voice & MoCap Supervisor",
    bio: "Bridging theatrical acting with Unreal Engine volume capture, AAA gaming voice ensembles, and stunt choreography.",
    extendedBio: "Trained at RADA before transitioning into interactive performance direction, Julian casts and directs voice and optical motion-capture ensembles for next-generation gaming studios and virtual production stages.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890894066fcae4ee81c926d_team%20image%20(4).webp",
    specialty: "Performance Capture & Voice",
    experience: "10+ Years",
    credits: ["Aether Chronicles", "Cyberia 2099", "Chronos Volume Stage"],
    socials: { facebook: "#", instagram: "#", pinterest: "#", dribbble: "#" },
  },
  {
    id: "team-5",
    slug: "claire-dubois",
    name: "Claire Dubois",
    role: "Celebrity & Brand Partnerships",
    bio: "Structuring high-impact A-list ambassadorships, festival jury placements, and global luxury endorsements.",
    extendedBio: "Operating between Los Angeles, Paris, and Geneva, Claire negotiates complex talent partnerships, balancing creative prestige with rigorous contract and usage governance.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890891841eb946a68b182a8_team%20image%20(5).webp",
    specialty: "VIP Packaging & Endorsements",
    experience: "12+ Years",
    credits: ["Solstice Eau Global", "Cannes Red Carpet Suite", "Lumière Horology"],
    socials: { facebook: "#", instagram: "#", pinterest: "#", dribbble: "#" },
  },
  {
    id: "team-6",
    slug: "devon-kane",
    name: "Devon Kane",
    role: "Movement & Choreography Casting",
    bio: "Curating physical theatre artists, contemporary dancers, and kinetic ensembles for music visuals and live tours.",
    extendedBio: "Formerly a resident movement director in London, Devon brings deep anatomical and rhythmic fluency to every audition room, turning static frames into living sculpture.",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689088c4625b4e18f0aa44af_team%20image%20(6).webp",
    specialty: "Movement, Dance & Music Visuals",
    experience: "8+ Years",
    credits: ["Obsidian Echo", "FKA World Tour Visuals", "Tate Modern Live Installation"],
    socials: { facebook: "#", instagram: "#", pinterest: "#", dribbble: "#" },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "the-art-of-the-chemistry-read-in-modern-cinema",
    title: "The Art of the Chemistry Read in Modern Cinema",
    date: "August 4, 2025",
    category: "Film Casting",
    author: "Elena Vance",
    readTime: "5 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68909ec1f4dab71810c33789_blog%20images%20(1).webp",
    column: "left",
    featuredDark: true,
    excerpt: "Why unscripted silence between two actors in an audition room reveals more than ten pages of dialogue ever could.",
    content: [
      "In an era dominated by self-tapes recorded thousands of miles apart, the live in-room chemistry read remains the most electric ritual in filmmaking. When two actors share physical space, micro-expressions, breathing cadences, and spatial tension cannot be faked.",
      "At Reflux, our chemistry sessions move away from rigid line readings within the first twenty minutes. Instead, we introduce silent improvisational prompts—asking actors to share a frame without speaking while the camera rolls on a 50mm lens.",
      "Directors consistently tell us that the decision is made in the three seconds after 'cut' is called. How two performers exit the character together tells you everything about how they will carry a ninety-minute feature.",
    ],
  },
  {
    id: "blog-2",
    slug: "street-casting-vs-agency-boards-finding-raw-truth",
    title: "Street Casting vs. Agency Boards: Finding Raw Truth",
    date: "August 9, 2025",
    category: "Scouting",
    author: "Sora Takahashi",
    readTime: "6 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68909edf90ca52a573e7088b_blog%20images%20(2).webp",
    column: "right",
    featuredDark: true,
    excerpt: "How blending conservatory-trained actors with first-time street-cast talent creates electricity on screen.",
    content: [
      "The most memorable ensembles of the past decade share a secret: they refuse to choose between classical craft and non-professional authenticity. They place both inside the same scene.",
      "When a seasoned dramatic actor plays opposite someone who actually lives the subculture depicted in the script, both performances elevate. The non-actor anchors the room in unpretentious reality; the trained actor shapes the dramatic arc.",
      "Our scouting teams spend months embedded in regional communities before a single camera test is scheduled, ensuring ethical onboarding, on-set mentorship, and long-term representation for newly discovered talent.",
    ],
  },
  {
    id: "blog-3",
    slug: "architectural-walk-how-runway-casting-shifted-in-2025",
    title: "Architectural Walk: How Runway Casting Shifted in 2025",
    date: "August 14, 2025",
    category: "Runway",
    author: "Marcus Sterling",
    readTime: "4 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/68909eed09aa4ac0af413318_blog%20images%20(3).webp",
    column: "left",
    featuredDark: true,
    excerpt: "Why luxury fashion houses are trading uniform anonymity for distinctive character, theatrical presence, and multi-generational lineups.",
    content: [
      "Gone are the seasons when a runway lineup was built as an interchangeable grid. Creative directors in Paris and Milan are now approaching their fifteen-minute runway shows with the narrative rigor of a feature film.",
      "Every look is cast as a distinct protagonist. Posture, stride velocity, and the psychological weight of a glance toward the pit cameras are rehearsed alongside soundscape designers.",
      "We are seeing a remarkable surge in cross-disciplinary bookings: contemporary dancers, classical cellists, and silver-screen legends opening and closing major collections.",
    ],
  },
  {
    id: "blog-4",
    slug: "directing-actors-inside-an-unreal-engine-led-volume",
    title: "Directing Actors Inside an Unreal Engine LED Volume",
    date: "August 19, 2025",
    category: "Motion Capture",
    author: "Julian Mercer",
    readTime: "7 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a00c32b88ef2f86232f8_blog%20images%20(4).webp",
    column: "right",
    excerpt: "What casting directors look for when auditioning talent for virtual production stages and optical performance capture.",
    content: [
      "Acting inside a 270-degree LED volume or wearing a head-mounted facial camera requires a rare combination of classical theatre spatial imagination and micro-expression cinema discipline.",
      "During our MoCap auditions, we test an actor's proprioception and vocal stamina under physical load, ensuring their emotional truth translates seamlessly onto digital rigs.",
    ],
  },
  {
    id: "blog-5",
    slug: "global-buyouts-and-ai-likeness-clauses-explained",
    title: "Global Buyouts & AI Likeness Clauses Explained",
    date: "August 22, 2025",
    category: "Industry Insights",
    author: "Claire Dubois",
    readTime: "6 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a020cc4164bdc37ead22_blog%20images%20(6).webp",
    column: "left",
    excerpt: "Protecting both brands and performers with transparent digital replica riders and territorial usage frameworks.",
    content: [
      "As synthetic media tools mature, clear contractual boundaries around 3D scans, vocal stems, and digital doubles have become the centerpiece of every commercial and theatrical deal memo.",
      "Reflux pioneered a standardized biometric rider that guarantees explicit informed consent, strict usage windows, and fair residual compensation for every performer on our roster.",
    ],
  },
  {
    id: "blog-6",
    slug: "anatomy-of-a-self-tape-that-stops-the-room",
    title: "Anatomy of a Self-Tape That Stops the Room",
    date: "August 26, 2025",
    category: "Talent Craft",
    author: "Elena Vance",
    readTime: "5 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a02f64be09da846c8ecf_blog%20images%20(8).webp",
    column: "right",
    excerpt: "Why stillness, eye-line discipline, and bold first-ten-second choices outperform over-lit studio setups.",
    content: [
      "After watching four hundred tapes for a single role, casting directors aren't grading your backdrop or your ring light. We are looking for an actor who trusts their own stillness.",
      "The strongest tapes begin before the first word is spoken: a grounded breath, a specific eye-line, and a willingness to let the camera come to you.",
    ],
  },
  {
    id: "blog-7",
    slug: "kinetic-storytelling-casting-movement-for-music-film",
    title: "Kinetic Storytelling: Casting Movement for Music Film",
    date: "August 29, 2025",
    category: "Movement",
    author: "Devon Kane",
    readTime: "4 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a03c55a360a548ac25de_blog%20images%20(9).webp",
    column: "left",
    excerpt: "How physical theatre and contemporary floorwork replaced literal narrative in this year's most iconic music videos.",
    content: [
      "When a four-minute track needs to resonate globally without translation, the human body becomes the primary instrument of narrative.",
      "We structure movement auditions as collaborative labs between the director, choreographer, and dancers—discovering raw physical vocabulary in real time.",
    ],
  },
  {
    id: "blog-8",
    slug: "multi-market-commercial-casting-in-48-hours",
    title: "Multi-Market Commercial Casting in 48 Hours",
    date: "September 2, 2025",
    category: "Commercial",
    author: "Sora Takahashi",
    readTime: "5 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a052986169b863d2140c_blog%20images%20(11).webp",
    column: "right",
    excerpt: "Inside our 24-hour follow-the-sun workflow connecting Tokyo, London, Paris, and Los Angeles casting studios.",
    content: [
      "When a global campaign greenlights on a Wednesday for a Monday wardrobe fitting, timezone orchestration becomes a superpower.",
      "As our Tokyo studio wraps callbacks, London opens its doors, handing curated selects directly to New York and Los Angeles by afternoon.",
    ],
  },
  {
    id: "blog-9",
    slug: "why-period-epics-are-won-or-lost-in-ensemble-casting",
    title: "Why Period Epics Are Won or Lost in Ensemble Casting",
    date: "September 6, 2025",
    category: "Ensemble",
    author: "Elena Vance",
    readTime: "6 Min Read",
    image: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a0e1fff159a9632887f7_blog%20images%20(12).webp",
    column: "left",
    excerpt: "Crafting historical texture through lived-in faces, period-authentic silhouettes, and specialized artisan background performers.",
    content: [
      "You can build a multi-million-dollar 19th-century street set, but a single modern posture or anachronistic haircut in the background shatters the illusion instantly.",
      "Our atmospheric ensemble desk researches archival photography from the exact decade and region of the screenplay before calling a single fitting.",
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "“Reflux transformed our feature film before we even rolled a frame. They found our bilingual lead in a Marseille conservatory after six months of searching—a performance that carried us straight to Cannes.”",
    author: "Céline Moreau",
    role: "Film Director, Lumière Pictures",
    rotation: 10,
  },
  {
    id: "test-2",
    quote: "“For our Paris Couture show, Reflux curated 54 faces that felt like a living sculpture gallery. Their instinct for movement, diversity, and quiet authority is unmatched in the industry.”",
    author: "Julian Vance",
    role: "Creative Director, Maison Solaris",
    rotation: -10,
  },
  {
    id: "test-3",
    quote: "“We needed a precision stunt driver who could also deliver an intimate dramatic monologue in two languages. Within 48 hours, Reflux delivered three extraordinary options and handled every global buyout seamlessly.”",
    author: "Marcus Lindqvist",
    role: "Executive Producer, Kinetix Global",
    rotation: 10,
  },
  {
    id: "test-4",
    quote: "“Their voice and performance capture roster elevated our entire game narrative. The actors stepped into our Unreal volume with theatrical rigor and immediate physical fluency.”",
    author: "Kenji Takahashi",
    role: "Narrative Director, Valkyrie Studio",
    rotation: -10,
  },
];

export const TALENT_BOARD: TalentCompCard[] = [
  {
    id: "talent-1",
    index: "01",
    name: "Inès Valentin",
    division: "SCREEN LEADS",
    bureau: "Paris / New York",
    latestBooking: "Velvet Nocturne (Cannes '25)",
    accentColor: "#a7d8de",
    primaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6891a20e87bc1144dfab1088_Portfolio%20Grid%20Image%20(1).webp",
    secondaryImage:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f599071a306072ac2_Portfolio%20Image%20One.png",
    stats: {
      height: "178 CM / 5'10\"",
      eyes: "Hazel Green",
      hair: "Chestnut",
      specialty: "Bilingual FR/EN Lead",
    },
    projectSlug: "velvet-nocturne",
  },
  {
    id: "talent-2",
    index: "02",
    name: "Kairo Vance",
    division: "COUTURE RUNWAY",
    bureau: "London / Milan",
    latestBooking: "Maison Solaris AW25 Exclusives",
    accentColor: "#f5a3a3",
    primaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6891a23bf15693d9dd25e1e4_Portfolio%20Grid%20Image%20(2).webp",
    secondaryImage:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f5c288ecbde7adb14_Portfolio%20Image%20Two.png",
    stats: {
      height: "188 CM / 6'2\"",
      eyes: "Dark Espresso",
      hair: "Black",
      specialty: "Architectural Runway",
    },
    projectSlug: "maison-solaris-aw25",
  },
  {
    id: "talent-3",
    index: "03",
    name: "Noémi Lindberg",
    division: "NEW FACES",
    bureau: "Stockholm / Paris",
    latestBooking: "Aether Eau de Parfum Global Film",
    accentColor: "#f8c794",
    primaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6891a25b7e026e2bc2861ca5_Portfolio%20Grid%20Image%20(3).webp",
    secondaryImage:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f61963c9e919529ff_Portfolio%20Image%20Three.png",
    stats: {
      height: "180 CM / 5'11\"",
      eyes: "Ice Blue",
      hair: "Platinum",
      specialty: "Editorial & Movement",
    },
    projectSlug: "aether-parfum-campaign",
  },
  {
    id: "talent-4",
    index: "04",
    name: "Solène Rousseau",
    division: "SCREEN LEADS",
    bureau: "New York / Los Angeles",
    latestBooking: "Glass Meridian (HBO / A24)",
    accentColor: "#cbb7f6",
    primaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6891a271190df5a4f4098664_Portfolio%20Grid%20Image%20(4).webp",
    secondaryImage:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f4ff813b1dd225e1e_Portfolio%20Image%20Four.png",
    stats: {
      height: "175 CM / 5'9\"",
      eyes: "Amber",
      hair: "Raven",
      specialty: "Classical & Method Drama",
    },
    projectSlug: "glass-meridian-series",
  },
  {
    id: "talent-5",
    index: "05",
    name: "Taj Bennett",
    division: "COUTURE RUNWAY",
    bureau: "Tokyo / London",
    latestBooking: "Kinetix GT World Premiere",
    accentColor: "#a7d8de",
    primaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6891a288b031411420975304_Portfolio%20Grid%20Image%20(5).webp",
    secondaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a01c30df6df4e888eb4a_blog%20images%20(9).webp",
    stats: {
      height: "186 CM / 6'1\"",
      eyes: "Obsidian",
      hair: "Close Crop",
      specialty: "Precision Stunt & Walk",
    },
    projectSlug: "kinetix-gt-launch",
  },
  {
    id: "talent-6",
    index: "06",
    name: "Mira Kovács",
    division: "NEW FACES",
    bureau: "Budapest / Milan",
    latestBooking: "Orpheus Contemporary Opera",
    accentColor: "#f5a3a3",
    primaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6891a2a2eb6865bd9e8389ae_Portfolio%20Grid%20Image%20(6).webp",
    secondaryImage:
      "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/6890a03a3519089260f5b583_blog%20images%20(10).webp",
    stats: {
      height: "177 CM / 5'9.5\"",
      eyes: "Grey Green",
      hair: "Auburn",
      specialty: "Contemporary Dance & Film",
    },
    projectSlug: "orpheus-underground",
  },
];

