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
  column: "left" | "right";
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
  division: "SOCIETY WOMEN" | "SOCIETY MEN" | "DEVELOPMENT";
  bureau: string;
  latestBooking: string;
  instagramHandle: string;
  followers: string;
  accentColor: string;
  primaryImage: string;
  secondaryImage: string;
  videoPreview?: string;
  isDemo: boolean;
  stats: {
    height: string;
    bust: string;
    waist: string;
    hips: string;
    shoe: string;
    hair: string;
    eyes: string;
  };
  projectSlug: string;
}

export interface RunwayShowLook {
  id: string;
  lookNumber: string;
  season: string;
  designer: string;
  city: string;
  modelName: string;
  accentColor: string;
  image: string;
}

export const ASSETS = {
  backToTopIcon:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891f3ea9daf4fb3b1af2c2b_back%20to%20top%20icon.svg",
  closeIconWhite:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e77438579d2253583018_close%20icon.svg",
  closeIconDark:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870f03a77aa2ee38614a_close%20icon.svg",
  sidebarLogoWhite:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e532410a2c9e30bd1d83_sidebar%20icon%201.svg",
  sidebarLogoDark:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899869fdf40f308b96f45d0_sidebar%20logo%20style%202.svg",
  sidebarImage:
    "https://booker-media.elitemodelmanagement.com/Library/1/8ecb6f41e262b3b8f0debc90f8ebdf82099d6a06.jpg",
  headerLogoDark:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889c0c8767ddfe94c5c290f_Header%20Logo.svg",
  headerLogoWhite:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688dfcd1ff7283ee388d12be_Header%20Style%20Two%20Logo.svg",
  footerLogoIcon:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688dbafc16b040471e10b3c2_footer%20logo%20icon%20(1).svg",
  heroImage1:
    "https://booker-media.elitemodelmanagement.com/Library/1/8ecb6f41e262b3b8f0debc90f8ebdf82099d6a06.jpg",
  heroImage2:
    "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
  heroVideo1:
    "https://booker-media.elitemodelmanagement.com/Library/1/74a735501d0c55e9ef422822e5a031a5214b50b0.mp4",
  heroVideo2:
    "https://booker-media.elitemodelmanagement.com/Library/1/6ef3d9249ffb4f9d60773265df22bc73d4e9b338.mp4",
  heroButtonIcon:
    "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688a004a45ae83642ff358e6_hero%20button%20icon.svg",
  videoMp4: "https://static.thesocietymanagement.com/001-Menu.mp4",
  videoWebm: "https://static.thesocietymanagement.com/001-Menu.mp4",
  socialWhite: {
    dribbble:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e9cee0071f1736280542_dribbble-logo.svg",
    behance:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e9afea348f3addce5039_behance-logo.svg",
    instagram:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6889e9b99ff2dce67f972f49_instagram-logo.svg",
  },
  socialDark: {
    dribbble:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870fa15a0e00782fd010_dribbble-logo.svg",
    behance:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870fc7092a5077f0782c_behance-logo.svg",
    instagram:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6899870ff90eee51937cd2f0_instagram-logo.svg",
  },
  footerSocials: {
    facebook:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d7e785817aa6b97eb_1%20(3).svg",
    instagram:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3dad430c3f5702f503_1%20(1).svg",
    pinterest:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d7ccfd9626d9cf79d_1%20(2).svg",
    dribbble:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d8b6be83b0d23f1da_1%20(4).svg",
  },
  teamSocials: {
    facebook:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec0901b7333bc57e9356_2%20(2).svg",
    instagram:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec0928b3cf429048ea66_2%20(3).svg",
    pinterest:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec09f5c11a916bb6f1cf_2%20(1).svg",
    dribbble:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891ec099e4bba0351a92fb9_2%20(4).svg",
  },
  contactIcons: {
    email:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891eb304609cbdaede22df2_1%20(3).svg",
    location:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891eb30778705f4b42a1677_1%20(2).svg",
    phone:
      "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/6891eb3097d3296f92052653_1%20(7).svg",
  },
  aboutTunnelFrames: [
    "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
    "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
    "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
  ],
};

export const RUNWAY_SHOW_STRIP: RunwayShowLook[] = [
  {
    id: "show-1",
    lookNumber: "LOOK 01 — DEMO",
    season: "PARIS COUTURE AW25",
    designer: "MAISON SOLARIS",
    city: "PARIS",
    modelName: "ADRIANA LIMA (DEMO)",
    accentColor: "#a7d8de",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250213_csCfLDcToZeuzp_M.JPG",
  },
  {
    id: "show-2",
    lookNumber: "LOOK 02 — DEMO",
    season: "MILAN RUNWAY AW25",
    designer: "ATELIER VANCE",
    city: "MILAN",
    modelName: "ALECIA MORAIS (DEMO)",
    accentColor: "#f5a3a3",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250213_PSr3pkqxmojMji_M.JPG",
  },
  {
    id: "show-3",
    lookNumber: "LOOK 03 — DEMO",
    season: "NEW YORK FASHION WEEK",
    designer: "KINETIX ARCHIVE",
    city: "NEW YORK",
    modelName: "AMBER VALLETTA (DEMO)",
    accentColor: "#f8c794",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250213_jUBWKgKVv9oxcU_M.JPG",
  },
  {
    id: "show-4",
    lookNumber: "LOOK 04 — DEMO",
    season: "LONDON EXCLUSIVES",
    designer: "NOCTURNE STUDIO",
    city: "LONDON",
    modelName: "AKER AJAK (DEMO)",
    accentColor: "#cbb7f6",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/1/20180703_132949337_M.JPG",
  },
];

export const TALENT_BOARD: TalentCompCard[] = [
  {
    id: "talent-1",
    index: "01",
    name: "Adriana Lima",
    division: "SOCIETY WOMEN",
    bureau: "New York / Paris",
    latestBooking: "Vogue Italia Cover (Demo Data)",
    instagramHandle: "@adrianalima",
    followers: "20.0M Followers",
    accentColor: "#a7d8de",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250428_IxCs0E79oOLdXM.jpg",
    videoPreview:
      "https://booker-media.elitemodelmanagement.com/Library/1/74a735501d0c55e9ef422822e5a031a5214b50b0.mp4",
    isDemo: true,
    stats: {
      height: "5'10\" / 178cm",
      bust: "34\"",
      waist: "24\"",
      hips: "35.5\"",
      shoe: "10 US",
      hair: "Dark Brown",
      eyes: "Blue-Green",
    },
    projectSlug: "velvet-nocturne",
  },
  {
    id: "talent-2",
    index: "02",
    name: "Alton Mason",
    division: "SOCIETY MEN",
    bureau: "New York / Milan",
    latestBooking: "Paris Haute Couture Opening (Demo)",
    instagramHandle: "@altonmason",
    followers: "1.4M Followers",
    accentColor: "#f5a3a3",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260428_-7eAuAT5wneC3C.jpg",
    videoPreview: "https://static.thesocietymanagement.com/001-Menu.mp4",
    isDemo: true,
    stats: {
      height: "6'2\" / 188cm",
      bust: "38\"",
      waist: "29\"",
      hips: "36\"",
      shoe: "11.5 US",
      hair: "Black",
      eyes: "Dark Brown",
    },
    projectSlug: "maison-solaris-aw25",
  },
  {
    id: "talent-3",
    index: "03",
    name: "Amber Valletta",
    division: "SOCIETY WOMEN",
    bureau: "Los Angeles / Paris",
    latestBooking: "Aether Parfum Global Film (Demo)",
    instagramHandle: "@ambervalletta",
    followers: "1.2M Followers",
    accentColor: "#f8c794",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/9630/20230306_f05bsCpXheCgj3.jpg",
    videoPreview:
      "https://booker-media.elitemodelmanagement.com/Library/1/6ef3d9249ffb4f9d60773265df22bc73d4e9b338.mp4",
    isDemo: true,
    stats: {
      height: "5'9.5\" / 176cm",
      bust: "34\"",
      waist: "24\"",
      hips: "35\"",
      shoe: "9 US",
      hair: "Blonde",
      eyes: "Green",
    },
    projectSlug: "aether-parfum-campaign",
  },
  {
    id: "talent-4",
    index: "04",
    name: "Aker Ajak",
    division: "DEVELOPMENT",
    bureau: "London / Paris",
    latestBooking: "Milan Exclusive Debut (Demo Data)",
    instagramHandle: "@akerajak",
    followers: "185K Followers",
    accentColor: "#cbb7f6",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20251023_xJBUsLc1rrLz5H.jpg",
    isDemo: true,
    stats: {
      height: "5'11\" / 180cm",
      bust: "31\"",
      waist: "23\"",
      hips: "34\"",
      shoe: "9.5 US",
      hair: "Black",
      eyes: "Dark Brown",
    },
    projectSlug: "glass-meridian-series",
  },
  {
    id: "talent-5",
    index: "05",
    name: "Alexandre Cunha",
    division: "SOCIETY MEN",
    bureau: "Paris / New York",
    latestBooking: "Kinetix GT World Campaign (Demo)",
    instagramHandle: "@alexandrecunha",
    followers: "420K Followers",
    accentColor: "#a7d8de",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20250925_YHEwoUIpkK0BfN.jpg",
    isDemo: true,
    stats: {
      height: "6'1\" / 185cm",
      bust: "39\"",
      waist: "30\"",
      hips: "37\"",
      shoe: "11 US",
      hair: "Brown",
      eyes: "Hazel",
    },
    projectSlug: "kinetix-gt-launch",
  },
  {
    id: "talent-6",
    index: "06",
    name: "Alecia Morais",
    division: "SOCIETY WOMEN",
    bureau: "New York / London",
    latestBooking: "Paris Couture Lookbook (Demo)",
    instagramHandle: "@aleciamorais",
    followers: "310K Followers",
    accentColor: "#f5a3a3",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/170/20240911_y-VN89XEMm9FW3.jpg",
    isDemo: true,
    stats: {
      height: "5'10.5\" / 179cm",
      bust: "32\"",
      waist: "23.5\"",
      hips: "34.5\"",
      shoe: "9.5 US",
      hair: "Dark Brown",
      eyes: "Brown",
    },
    projectSlug: "orpheus-underground",
  },
  {
    id: "talent-7",
    index: "07",
    name: "Amane Taniguchi",
    division: "DEVELOPMENT",
    bureau: "Tokyo / Paris",
    latestBooking: "Harper's Bazaar Editorial (Demo)",
    instagramHandle: "@amanetaniguchi",
    followers: "140K Followers",
    accentColor: "#f8c794",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/9732/20260217_zLrHONcSCvKvr3.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/9732/20230718_oyPCfHKub1sm4m.jpg",
    isDemo: true,
    stats: {
      height: "5'9.5\" / 177cm",
      bust: "31\"",
      waist: "23\"",
      hips: "34\"",
      shoe: "8.5 US",
      hair: "Black",
      eyes: "Dark Brown",
    },
    projectSlug: "monolith-architectural-lookbook",
  },
  {
    id: "talent-8",
    index: "08",
    name: "Archie Cranch",
    division: "SOCIETY MEN",
    bureau: "London / Milan",
    latestBooking: "Prada Menswear Exclusive (Demo)",
    instagramHandle: "@archiecranch",
    followers: "195K Followers",
    accentColor: "#cbb7f6",
    primaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260602_uUaROABOXshWr5.jpg",
    secondaryImage:
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260413_Gz1c2xspE-HTS-.jpg",
    isDemo: true,
    stats: {
      height: "6'2\" / 188cm",
      bust: "37\"",
      waist: "29\"",
      hips: "36\"",
      shoe: "11 US",
      hair: "Light Brown",
      eyes: "Blue",
    },
    projectSlug: "solstice-luxury-resort",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "principal-film-casting",
    title: "Runway & Haute Couture Casting (Demo)",
    shortTitle: "Runway Casting",
    color: "#a7d8de",
    icon: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    shortDesc:
      "[Demo Service] Full-lineup model casting and catwalk choreography for Paris, Milan, London, and New York Fashion Weeks.",
    fullDesc:
      "[Demo Data for Presentation] Our Runway & Haute Couture division curates 40-to-80 look show lineups for premier luxury houses. We manage global model options, exclusive holds, walk callbacks, and fitting schedules across New York, Paris, Milan, and London.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250428_IxCs0E79oOLdXM.jpg",
    deliverables: [
      "Global Runway Exclusives & First-Option Holds (Demo)",
      "Catwalk Walk-Test Callbacks & Fitting Coordination",
      "60-Look Show Board & Polaroid Comp-Card Curation",
      "International Model Visa & Travel Logistics",
    ],
    stats: [
      { label: "Shows Cast", value: "140+" },
      { label: "Fashion Capitals", value: "4" },
    ],
  },
  {
    id: "srv-2",
    slug: "editorial-runway-talent",
    title: "Editorial & Magazine Covers (Demo)",
    shortTitle: "Editorial Covers",
    color: "#f5a3a3",
    icon: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    shortDesc:
      "[Demo Service] High-fashion cover talent, supermodels, and rising faces for Vogue, Dazed, i-D, and Harper's Bazaar.",
    fullDesc:
      "[Demo Data for Presentation] Collaborating with the world's leading fashion photographers, stylists, and creative directors, we book iconic cover stars and striking new-face models for print and digital editorial stories.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/9630/20230306_f05bsCpXheCgj3.jpg",
    deliverables: [
      "Print & Digital Cover Star Bookings (Demo)",
      "Digital Comp-Cards, Polaroids & Lookbook Portfolios",
      "On-Set Creative Direction & Styling Liaison",
      "Global Syndicate & Press Usage Clearances",
    ],
    stats: [
      { label: "Covers Booked", value: "320+" },
      { label: "Editorial Partners", value: "65+" },
    ],
  },
  {
    id: "srv-3",
    slug: "commercial-brand-campaigns",
    title: "Luxury Fragrance & Brand Campaigns (Demo)",
    shortTitle: "Luxury Campaigns",
    color: "#f8c794",
    icon: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    shortDesc:
      "[Demo Service] Global ambassadors and campaign faces for haute horology, fine jewelry, beauty, and luxury fashion houses.",
    fullDesc:
      "[Demo Data for Presentation] We match luxury maisons with unforgettable campaign faces—structuring multi-year global ambassadorships, cinema commercial spots, and worldwide billboard buyouts.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260428_-7eAuAT5wneC3C.jpg",
    deliverables: [
      "Global Brand Ambassador Negotiations (Demo)",
      "Multi-Territory Print, Cinema & Digital Buyouts",
      "Screen-Test & Chemistry Read Direction",
      "VIP Red Carpet & Cannes Appearance Management",
    ],
    stats: [
      { label: "Global Campaigns", value: "210+" },
      { label: "Luxury Maisons", value: "48" },
    ],
  },
  {
    id: "srv-4",
    slug: "street-casting-scouting",
    title: "New Faces & Development Scouting (Demo)",
    shortTitle: "New Faces Board",
    color: "#cbb7f6",
    icon: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    shortDesc:
      "[Demo Service] Worldwide street scouting, open casting calls, and runway development for the next generation of icons.",
    fullDesc:
      "[Demo Data for Presentation] Our Development board discovers raw, magnetic talent across six continents—guiding new faces from their first studio digitals and walk coaching to exclusive debuts on the Paris and Milan runways.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20251023_xJBUsLc1rrLz5H.jpg",
    deliverables: [
      "Global Street Scouting & Digital Open Calls (Demo)",
      "Studio Polaroids, Digitals & Comp-Card Creation",
      "Runway Walk & Camera Presence Development",
      "First-Season Exclusive Placement Strategy",
    ],
    stats: [
      { label: "Cities Scouted", value: "38" },
      { label: "New Faces Signed", value: "85+" },
    ],
  },
  {
    id: "srv-5",
    slug: "voice-motion-capture",
    title: "Celebrity & Red Carpet Endorsements (Demo)",
    shortTitle: "Celebrity Talent",
    color: "#a7d8de",
    icon: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689060eb64b7b55e59425db0_service%20icon%20(1).svg",
    shortDesc:
      "[Demo Service] Crossover representation for supermodels, actors, musicians, and cultural icons in film and luxury fashion.",
    fullDesc:
      "[Demo Data for Presentation] Bridging Hollywood cinema and European high fashion, our Celebrity desk pairs award-winning actors and musicians with front-row fashion partnerships and prestige screen roles.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/170/20240911_y-VN89XEMm9FW3.jpg",
    deliverables: [
      "Met Gala, Cannes & Venice Front-Row Dressing (Demo)",
      "Feature Film & Prestige Series Crossover Casting",
      "Global Press Tour & Brand Partnership Direction",
      "Executive Image & Archival Curation",
    ],
    stats: [
      { label: "Talent Represented", value: "120+" },
      { label: "Festival Debuts", value: "45" },
    ],
  },
  {
    id: "srv-6",
    slug: "choreography-movement-casting",
    title: "Creative Directors, Stylists & Lens Talent (Demo)",
    shortTitle: "Creatives Division",
    color: "#f5a3a3",
    icon: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689061cf7c9c2971b6844aa2_service%20icon%20(2).svg",
    shortDesc:
      "[Demo Service] Representing visionary fashion photographers, runway movement directors, and editorial stylists.",
    fullDesc:
      "[Demo Data for Presentation] Inspired by The Society Creatives division, we represent the artistic minds behind the camera—connecting luxury houses with world-class photographers, set designers, and movement directors.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20250925_YHEwoUIpkK0BfN.jpg",
    deliverables: [
      "Campaign Photographer & Film Director Packaging (Demo)",
      "Runway Show Concept & Movement Choreography",
      "Lookbook Styling & Art Direction Teams",
      "Complete End-to-End Campaign Production",
    ],
    stats: [
      { label: "Creative Artists", value: "54" },
      { label: "Global Awards", value: "68" },
    ],
  },
  {
    id: "srv-7",
    slug: "bilingual-international-ensembles",
    title: "Digital Comp-Cards & Virtual Casting (Demo)",
    shortTitle: "Digital Casting",
    color: "#f8c794",
    icon: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689061fe0e55704a7d6d56f3_service%20icon%20(3).svg",
    shortDesc:
      "[Demo Service] Interactive client casting packages, live virtual callbacks, and instant PDF comp-card generation.",
    fullDesc:
      "[Demo Data for Presentation] Our proprietary digital booking suite lets casting directors filter our entire model board by measurements, availability, and city—sharing custom lookbook links in seconds.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/10435/20251027_PoqubKjYcn1DWR.jpg",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/10435/20251209_9BX8gALWdoUaZb.jpg",
    deliverables: [
      "Custom Client Casting Packages & Comp-Cards (Demo)",
      "4K Self-Tape & Virtual Walk-Test Rooms",
      "Real-Time Global Bureau Availability Sync",
      "Instant Option & Booking Confirmation",
    ],
    stats: [
      { label: "Response Time", value: "<2 Hrs" },
      { label: "Digital Books", value: "500+" },
    ],
  },
  {
    id: "srv-8",
    slug: "music-video-avant-garde-talent",
    title: "Haute Horology, Fine Jewelry & Beauty (Demo)",
    shortTitle: "Beauty & Jewelry",
    color: "#cbb7f6",
    icon: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689062247c9c2971b6847bc4_service%20icon%20(4).svg",
    shortDesc:
      "[Demo Service] Macro-lens beauty faces and expressive hand/detail models for luxury skincare, cosmetics, and high jewelry.",
    fullDesc:
      "[Demo Data for Presentation] Beauty and high-jewelry campaigns demand flawless skin texture, bone structure, and micro-expression control under 8K macro lenses.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/102/85ndlIjFawKYvIQB7bbY.jpg",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/102/EgPPTyyRSfaF3OtmB4-j.jpg",
    deliverables: [
      "8K Macro Beauty & Skincare Casting (Demo)",
      "High-Jewelry & Horology Specialist Models",
      "Dermatological & Lighting Test Polaroids",
      "Worldwide Cosmetics Exclusivity Management",
    ],
    stats: [
      { label: "Beauty Contracts", value: "95+" },
      { label: "Maisons Served", value: "32" },
    ],
  },
  {
    id: "srv-9",
    slug: "executive-usage-buyout-management",
    title: "Global Usage, Exclusives & Contract Desk (Demo)",
    shortTitle: "Contract Desk",
    color: "#a7d8de",
    icon: "https://cdn.prod.website-files.com/68905204603e93d7e41692c4/689060eb64b7b55e59425db0_service%20icon%20(1).svg",
    shortDesc:
      "[Demo Service] Worldwide runway exclusives, image rights, and multi-market licensing for represented models.",
    fullDesc:
      "[Demo Data for Presentation] Our legal and booking desk protects both talent and luxury clients with transparent global buyouts, runway exclusivity windows, and image rights management.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/6806/20260622_5rdwFYfHPFbwso.jpg",
    altImage:
      "https://booker-media.elitemodelmanagement.com/Library/6806/20250902_mk1eid8hwYOk8a.jpg",
    deliverables: [
      "Worldwide Runway Exclusive Contracts (Demo)",
      "Multi-Year Fragrance & Beauty Image Rights",
      "International Tax, Work Permit & O-1 Visa Desk",
      "Strict AI/Digital Likeness Protection Clauses",
    ],
    stats: [
      { label: "Global Markets", value: "94" },
      { label: "Clearance Rate", value: "100%" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "velvet-nocturne",
    title: "Vogue Italia — Adriana Lima (Demo)",
    categories: ["Cover Story", "Society Women", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/1/8ecb6f41e262b3b8f0debc90f8ebdf82099d6a06.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250428_IxCs0E79oOLdXM.jpg",
    client: "Vogue Italia (Demo Presentation)",
    director: "Steven Meisel / Studio Team",
    year: "2025",
    location: "Milan & Paris",
    summary:
      "[Demo Portfolio Case Study] A 16-page gatefold cover story and motion film starring Adriana Lima in sculptural autumn couture.",
    challenge:
      "Capturing raw architectural silhouette and high-contrast cinema tension across both 35mm film stills and 4K motion.",
    execution:
      "Coordinated a three-day closed-set production in Milan with archival couture pieces and bespoke movement direction.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/1/20250428_IxCs0E79oOLdXM.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/1/8ecb6f41e262b3b8f0debc90f8ebdf82099d6a06.jpg",
    ],
  },
  {
    id: "proj-2",
    slug: "maison-solaris-aw25",
    title: "Maison Solaris AW25 Runway (Demo)",
    categories: ["Paris Couture", "60-Model Cast", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260428_-7eAuAT5wneC3C.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
    client: "Maison Solaris Paris (Demo)",
    director: "Julian Vance",
    year: "2025",
    location: "Palais de Tokyo, Paris",
    summary:
      "[Demo Portfolio Case Study] Full runway casting and catwalk direction for 60 international models, opened by Alton Mason.",
    challenge:
      "Assembling 22 worldwide debut exclusives alongside iconic supermodels for a brutalist concrete runway in Paris.",
    execution:
      "Scouted across 14 bureaus over six weeks, locking exclusive options and directing three days of walk rehearsals.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260428_-7eAuAT5wneC3C.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/1/20250213_csCfLDcToZeuzp_M.JPG",
    ],
  },
  {
    id: "proj-3",
    slug: "aether-parfum-campaign",
    title: "Aether Eau De Parfum — Amber (Demo)",
    categories: ["Luxury Beauty", "Global Campaign", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/9630/20230306_f05bsCpXheCgj3.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
    client: "Maison Aether Parfums (Demo)",
    director: "Sofia Coppola / Lens Unit",
    year: "2025",
    location: "Grasse & Paris",
    summary:
      "[Demo Portfolio Case Study] Worldwide fragrance campaign and cinema commercial starring Amber Valletta.",
    challenge:
      "Delivering an iconic, timeless face capable of anchoring both global print billboards and an intimate 90-second cinema film.",
    execution:
      "Structured a multi-year global ambassadorship and directed the companion editorial lookbook.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/9630/20230306_f05bsCpXheCgj3.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/102/85ndlIjFawKYvIQB7bbY.jpg",
    ],
  },
  {
    id: "proj-4",
    slug: "glass-meridian-series",
    title: "New Faces — Milan Exclusives (Demo)",
    categories: ["Development Board", "Milan AW25", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20251023_xJBUsLc1rrLz5H.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
    client: "Milan Fashion Week Syndicate (Demo)",
    director: "Elena Vance",
    year: "2025",
    location: "Milan, Italy",
    summary:
      "[Demo Portfolio Case Study] First-season runway debut portfolio featuring Aker Ajak and our Development division.",
    challenge:
      "Preparing 12 newly scouted development models for high-pressure first-season exclusives in Milan and Paris.",
    execution:
      "Completed six weeks of studio polaroid development, walk coaching, and direct creative-director appointments.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/10898/20251023_xJBUsLc1rrLz5H.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
    ],
  },
  {
    id: "proj-5",
    slug: "kinetix-gt-launch",
    title: "Atelier Menswear — Alexandre (Demo)",
    categories: ["Society Men", "Editorial", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20250925_YHEwoUIpkK0BfN.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg",
    client: "Atelier Homme Paris (Demo)",
    director: "Marcus Lindqvist",
    year: "2025",
    location: "Paris & Zurich",
    summary:
      "[Demo Portfolio Case Study] Autumn/Winter tailoring campaign starring Alexandre Cunha and Archie Cranch.",
    challenge:
      "Combining sharp architectural menswear tailoring with kinetic outdoor cinematography.",
    execution:
      "Cast lead models from our Society Men board and shot on location across Paris and Zurich.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/3148/20250925_YHEwoUIpkK0BfN.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260602_uUaROABOXshWr5.jpg",
    ],
  },
  {
    id: "proj-6",
    slug: "orpheus-underground",
    title: "Haute Couture — Alecia Morais (Demo)",
    categories: ["Couture Lookbook", "Society Women", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/170/20240911_y-VN89XEMm9FW3.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
    client: "Chambre Syndicale Couture (Demo)",
    director: "Sora Takahashi",
    year: "2025",
    location: "Place Vendôme, Paris",
    summary:
      "[Demo Portfolio Case Study] High-jewelry and haute couture salon presentation featuring Alecia Morais.",
    challenge:
      "Presenting one-of-a-kind archival high jewelry pieces with poise and intimate editorial framing.",
    execution:
      "Curated an exclusive 8-model salon cast for private press and collector appointments at Place Vendôme.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/170/20240911_y-VN89XEMm9FW3.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/1/20250213_PSr3pkqxmojMji_M.JPG",
    ],
  },
  {
    id: "proj-7",
    slug: "monolith-architectural-lookbook",
    title: "Tokyo Avant-Garde — Amane (Demo)",
    categories: ["Development", "Tokyo Bureau", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/9732/20260217_zLrHONcSCvKvr3.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/9732/20230718_oyPCfHKub1sm4m.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/9732/20260217_zLrHONcSCvKvr3.jpg",
    client: "Monolith Studio Tokyo (Demo)",
    director: "Kenji Takahashi",
    year: "2025",
    location: "Shibuya & Naoshima, Japan",
    summary:
      "[Demo Portfolio Case Study] Architectural monograph and campaign starring Amane Taniguchi.",
    challenge:
      "Pairing minimalist Tadao Ando concrete geometry with expressive avant-garde movement.",
    execution:
      "Coordinated between our Tokyo and Paris desks to launch the capsule globally.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/9732/20260217_zLrHONcSCvKvr3.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/9732/20230718_oyPCfHKub1sm4m.jpg",
    ],
  },
  {
    id: "proj-8",
    slug: "solstice-luxury-resort",
    title: "Resort Capsule — Archie Cranch (Demo)",
    categories: ["Society Men", "Resort 2025", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260602_uUaROABOXshWr5.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260413_Gz1c2xspE-HTS-.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260602_uUaROABOXshWr5.jpg",
    client: "Solstice Maison (Demo)",
    director: "Céline Moreau",
    year: "2025",
    location: "Amalfi & Capri",
    summary:
      "[Demo Portfolio Case Study] Mediterranean resort campaign featuring Archie Cranch and Aliza Jarmon.",
    challenge:
      "Shooting a 40-look resort collection on 16mm film across coastal locations in 72 hours.",
    execution:
      "Managed full model logistics, fittings, and global digital/print usage rights.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260602_uUaROABOXshWr5.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/12319/20260413_Gz1c2xspE-HTS-.jpg",
    ],
  },
  {
    id: "proj-9",
    slug: "valkyrie-interactive-odyssey",
    title: "Dazed Cover — Aliza Jarmon (Demo)",
    categories: ["Cover Shoot", "New Faces", "Demo Data"],
    image:
      "https://booker-media.elitemodelmanagement.com/Library/11059/20240402_mZyYndSGXV8CXC.jpg",
    bgImage:
      "https://booker-media.elitemodelmanagement.com/Library/11059/20240905_QRZBhAZC279Y3w.jpg",
    gridImage:
      "https://booker-media.elitemodelmanagement.com/Library/11059/20240402_mZyYndSGXV8CXC.jpg",
    client: "Dazed Media London (Demo)",
    director: "Marcus Sterling",
    year: "2025",
    location: "London, UK",
    summary:
      "[Demo Portfolio Case Study] Autumn issue cover story featuring Aliza Jarmon and Anisha Sandhu.",
    challenge:
      "Highlighting next-generation faces who bridge high-fashion editorial and contemporary culture.",
    execution:
      "Booked and produced through our London and New York development desks.",
    gallery: [
      "https://booker-media.elitemodelmanagement.com/Library/11059/20240402_mZyYndSGXV8CXC.jpg",
      "https://booker-media.elitemodelmanagement.com/Library/11059/20240905_QRZBhAZC279Y3w.jpg",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    slug: "elena-vance",
    name: "Elena Vance (Demo)",
    role: "Head of Women's Board — NY & Paris",
    bio: "[Demo Profile] Directs runway exclusives and cover bookings for our Society Women division.",
    extendedBio:
      "[Demo Data for Presentation] With 16 years at the helm of international model management in New York and Paris, Elena oversees career strategy, luxury fragrance ambassadorships, and Fashion Week exclusives for our Women's board.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/102/85ndlIjFawKYvIQB7bbY.jpg",
    specialty: "Society Women & Haute Couture Exclusives (Demo)",
    experience: "16 Years",
    credits: [
      "Paris Fashion Week — 45+ Exclusive Placements (Demo)",
      "Vogue Italia, Paris & US Cover Bookings (Demo)",
      "Maison Solaris Global Campaign Casting (Demo)",
    ],
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "team-2",
    slug: "marcus-sterling",
    name: "Marcus Sterling (Demo)",
    role: "Director of Men's Division",
    bio: "[Demo Profile] Leads global runway, tailoring campaigns, and crossover cinema bookings for Society Men.",
    extendedBio:
      "[Demo Data for Presentation] Marcus built our Men's division across Milan, London, and New York—discovering and managing top male runway walkers and luxury campaign faces.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/9392/WbBy1FZKHGbpaBBoF4LM.jpg",
    specialty: "Society Men & Milan/Paris Menswear (Demo)",
    experience: "14 Years",
    credits: [
      "Milan & Paris Menswear AW25 Show Casting (Demo)",
      "Atelier Homme Global Campaign Direction (Demo)",
      "GQ & Arena Homme+ Cover Placements (Demo)",
    ],
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "team-3",
    slug: "sora-takahashi",
    name: "Sora Takahashi (Demo)",
    role: "Head of New Faces & Scouting",
    bio: "[Demo Profile] Leads worldwide street scouting, open calls, and first-season model development.",
    extendedBio:
      "[Demo Data for Presentation] Operating between Tokyo, London, and New York, Sora directs our global scouting network—transforming raw new faces into exclusive runway debuts.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/6806/20260622_5rdwFYfHPFbwso.jpg",
    specialty: "Global Scouting & Development Board (Demo)",
    experience: "11 Years",
    credits: [
      "38-City Global Street Scouting Initiative (Demo)",
      "Milan & Paris First-Season Exclusive Debuts (Demo)",
      "Dazed & i-D New Faces Issue Curation (Demo)",
    ],
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "team-4",
    slug: "julian-mercer",
    name: "Julian Mercer (Demo)",
    role: "Executive Runway & Show Producer",
    bio: "[Demo Profile] Choreographs catwalk pacing, casting boards, and backstage production for major fashion weeks.",
    extendedBio:
      "[Demo Data for Presentation] Julian partners directly with creative directors and stylists to cast and choreograph 60-look runway shows in Paris, Milan, New York, and London.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/11325/20231205_lfPxroudhf76KE.jpg",
    specialty: "Runway Show Casting & Choreography (Demo)",
    experience: "13 Years",
    credits: [
      "Palais de Tokyo AW25 Runway Production (Demo)",
      "New York Fashion Week Finale Casting (Demo)",
      "Place Vendôme Haute Joaillerie Presentation (Demo)",
    ],
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "team-5",
    slug: "camille-laurent",
    name: "Camille Laurent (Demo)",
    role: "Head of Luxury Beauty & Fragrance",
    bio: "[Demo Profile] Negotiates global cosmetics, skincare, and fine jewelry ambassadorships.",
    extendedBio:
      "[Demo Data for Presentation] Based in Paris, Camille manages multi-year prestige beauty and fragrance contracts between our top talent and heritage luxury houses.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/10445/20260601_8SiI5F0mPxuQTd.jpg",
    specialty: "Prestige Beauty, Fragrance & High Jewelry (Demo)",
    experience: "12 Years",
    credits: [
      "Maison Aether Worldwide Fragrance Contract (Demo)",
      "Cannes Red Carpet High-Jewelry Placements (Demo)",
      "Vogue Beauty Global Portfolio Series (Demo)",
    ],
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "team-6",
    slug: "dante-rossi",
    name: "Dante Rossi (Demo)",
    role: "Director of Creatives & Motion",
    bio: "[Demo Profile] Represents fashion photographers, film directors, and campaign stylists.",
    extendedBio:
      "[Demo Data for Presentation] Dante oversees our Creatives division, packaging world-class photographers, directors, and stylists with our model roster for end-to-end campaign production.",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/9646/ZbX6FB8e-vHoxo0wUuHh.jpg",
    specialty: "Photographers, Stylists & Fashion Film (Demo)",
    experience: "10 Years",
    credits: [
      "Milan & Amalfi 16mm Resort Film Production (Demo)",
      "Tokyo Monolith Architectural Lookbook (Demo)",
      " Venice Film Festival Talent Packaging (Demo)",
    ],
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
      dribbble: "https://dribbble.com",
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "the-art-of-the-chemistry-read-in-modern-cinema",
    title: "Inside Paris Couture AW25: How 60 Runway Looks Are Cast (Demo)",
    date: "October 2025",
    category: "Runway (Demo)",
    author: "Elena Vance",
    readTime: "4 Min Read",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
    column: "left",
    featuredDark: true,
    excerpt:
      "[Demo Editorial Article] From first-option model holds to 3 A.M. atelier fittings—how our booking desk shapes a Paris Fashion Week lineup.",
    content: [
      "[Demo Content for Morning Meeting] Casting a 60-look Paris Couture show begins eight weeks before the first model steps onto the runway. Every silhouette requires a specific posture, stride, and emotional presence.",
      "Our bookers coordinate across New York, Paris, Milan, and London to balance iconic supermodels with striking first-season development faces.",
    ],
  },
  {
    id: "blog-2",
    slug: "street-casting-vs-agency-boards-finding-raw-truth",
    title: "Digital Comp-Cards & Polaroids: What Casting Directors Look For (Demo)",
    date: "October 2025",
    category: "Scouting (Demo)",
    author: "Sora Takahashi",
    readTime: "5 Min Read",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
    column: "right",
    featuredDark: true,
    excerpt:
      "[Demo Editorial Article] Why natural-light studio digitals and unretouched walk videos remain the gold standard for luxury model casting.",
    content: [
      "[Demo Content for Morning Meeting] Before a creative director books a global campaign, they ask for one thing first: today's natural-light studio digitals.",
      "Our Development board shoots clean, unretouched polaroids and 360-degree walk videos so clients see bone structure and movement with complete clarity.",
    ],
  },
  {
    id: "blog-3",
    slug: "architectural-walk-how-runway-casting-shifted-in-2025",
    title: "The Architectural Walk: How Runway Pacing Shifted in 2025 (Demo)",
    date: "October 2025",
    category: "Couture (Demo)",
    author: "Julian Mercer",
    readTime: "4 Min Read",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
    column: "left",
    featuredDark: true,
    excerpt:
      "[Demo Editorial Article] How kinetic movement and theatrical presence redefined the modern menswear and womenswear catwalk.",
    content: [
      "[Demo Content for Morning Meeting] Modern runway shows are no longer passive garment displays—they are spatial performances.",
      "Whether opening a show in a brutalist concrete gallery or a candlelit Parisian salon, our models train to command the room's acoustic and visual rhythm.",
    ],
  },
  {
    id: "blog-4",
    slug: "global-buyouts-and-image-rights-in-luxury-campaigns",
    title: "Structuring Worldwide Fragrance & Beauty Ambassadorships (Demo)",
    date: "September 2025",
    category: "Campaigns (Demo)",
    author: "Camille Laurent",
    readTime: "6 Min Read",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
    column: "right",
    excerpt:
      "[Demo Editorial Article] Navigating multi-year exclusivity windows, global billboard rights, and cinema spots for top-tier talent.",
    content: [
      "[Demo Content for Morning Meeting] A global fragrance contract is one of the defining milestones in a model's career.",
      "Our executive desk structures multi-territory agreements that elevate both the maison's heritage and the talent's long-term trajectory.",
    ],
  },
  {
    id: "blog-5",
    slug: "directing-voice-and-performance-capture-for-aaa-worlds",
    title: "From New Face to Milan Exclusive in 90 Days (Demo)",
    date: "September 2025",
    category: "Development (Demo)",
    author: "Sora Takahashi",
    readTime: "5 Min Read",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/170/VsIGfx-iT-KBNW5gVya2.jpg",
    column: "left",
    excerpt:
      "[Demo Editorial Article] Inside our 90-day development incubator preparing newly scouted talent for their European runway debut.",
    content: [
      "[Demo Content for Morning Meeting] Launching a new face requires patience, editorial curation, and strategic restraint.",
      "By pairing new talent with test photographers and movement coaches before their first casting season, they arrive in Milan ready to secure exclusive holds.",
    ],
  },
  {
    id: "blog-6",
    slug: "bilingual-principals-the-rise-of-borderless-cinema",
    title: "Crossover Icons: Models Stepping Into A24 & Cannes Cinema (Demo)",
    date: "September 2025",
    category: "Celebrity (Demo)",
    author: "Elena Vance",
    readTime: "4 Min Read",
    image:
      "https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg",
    column: "right",
    excerpt:
      "[Demo Editorial Article] How our representation board bridges high-fashion editorial authority with principal dramatic screen roles.",
    content: [
      "[Demo Content for Morning Meeting] The boundary between the Paris runway and the Cannes competition screen has never been more fluid.",
      "Our theatrical coaching and screen-casting desk supports models transitioning into principal film and prestige series roles.",
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "“[Demo Client Quote] Reflux & Society Board cast our entire 60-look Paris Couture show in record time. Their New Faces and Women's board brought an unforgettable electricity to the runway.”",
    author: "Céline Moreau (Demo)",
    role: "Creative Director, Maison Solaris Paris",
    rotation: 10,
  },
  {
    id: "test-2",
    quote:
      "“[Demo Client Quote] From digital comp-cards and walk videos to worldwide fragrance buyouts, their booking desk operates with the precision and taste of a true fashion institution.”",
    author: "Julian Vance (Demo)",
    role: "Casting Director, Vogue & Atelier Homme",
    rotation: -10,
  },
  {
    id: "test-3",
    quote:
      "“[Demo Client Quote] We booked three exclusive campaign faces across New York, Milan, and Tokyo within 48 hours. Every model arrived on set camera-ready and editorial-sharp.”",
    author: "Marcus Lindqvist (Demo)",
    role: "Executive Producer, Kinetix Luxury Group",
    rotation: 10,
  },
  {
    id: "test-4",
    quote:
      "“[Demo Client Quote] Their Development board has the sharpest eye in the business—two of the new faces they introduced to us opened and closed our Milan AW25 collection.”",
    author: "Kenji Takahashi (Demo)",
    role: "Show Director, Monolith Studio",
    rotation: -10,
  },
];
