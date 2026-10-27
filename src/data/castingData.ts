export interface ModelBankTalent {
  id: string;
  name: string;
  division: "VISAGE WOMEN" | "VISAGE MEN" | "DEVELOPMENT" | "CLASSIC & ICON";
  bureau: string;
  age: number;
  ageBracket: "youth" | "prime" | "mature" | "silver";
  gender: "women" | "men" | "non-binary";
  skinTone: "fair" | "light" | "medium" | "tan" | "amber" | "ebony";
  skinToneLabel: string;
  lookAesthetic: "runway" | "editorial" | "commercial" | "alternative";
  languages: string[];
  stats: {
    heightFt: string;
    heightCm: number;
    bust: string;
    waist: string;
    hips: string;
    shoe: string;
    hair: string;
    eyes: string;
  };
  piercings: string;
  tattoos: string;
  photos: {
    closeUp: string;
    midShot: string;
    fullBody: string;
  };
  videoReel?: string;
  instagram: string;
  followers: string;
  recentBooking: string;
  isAvailable: boolean;
  status: "active" | "recertified" | "on-hold";
  daysUntilRecertification: number;
}

export interface CastingCall {
  id: string;
  title: string;
  brand: string;
  clientLogoText: string;
  category: "Editorial" | "Runway" | "Commercial" | "Film & Video" | "Alternative";
  rate: string;
  location: string;
  shootDates: string;
  deadline: string;
  demographics: {
    gender: string;
    ageRange: string;
    heightMin: string;
    complexion: string;
    languages: string[];
  };
  description: string;
  requirements: string[];
  applicantCount: number;
  featured: boolean;
  status: "Active" | "Closing Soon" | "Moderated";
}

export interface ConsultationAgent {
  id: string;
  name: string;
  title: string;
  division: string;
  avatar: string;
  availability: string;
}

export interface ConsultationService {
  id: string;
  title: string;
  duration: string;
  format: "Studio In-Person" | "Encrypted Video Call" | "Hybrid";
  description: string;
  badge: string;
  idealFor: string;
}

export const MODEL_BANK_TALENT: ModelBankTalent[] = [
  {
    id: "vsg-01",
    name: "Adriana Lima",
    division: "VISAGE WOMEN",
    bureau: "New York / Paris",
    age: 29,
    ageBracket: "prime",
    gender: "women",
    skinTone: "tan",
    skinToneLabel: "Sunlit Bronze / Tan",
    lookAesthetic: "runway",
    languages: ["English", "Portuguese", "Italian"],
    stats: {
      heightFt: "5'10\"",
      heightCm: 178,
      bust: "34\"",
      waist: "24\"",
      hips: "35.5\"",
      shoe: "10 US",
      hair: "Dark Brown",
      eyes: "Blue-Green",
    },
    piercings: "Ears pierced (single lobe)",
    tattoos: "Subtle ankle line",
    photos: {
      closeUp: "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
      midShot: "https://booker-media.elitemodelmanagement.com/Library/1/20250428_IxCs0E79oOLdXM.jpg",
      fullBody: "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
    },
    videoReel: "https://booker-media.elitemodelmanagement.com/Library/1/74a735501d0c55e9ef422822e5a031a5214b50b0.mp4",
    instagram: "@adrianalima",
    followers: "20M",
    recentBooking: "Vogue Italia Cover Campaign",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 24,
  },
  {
    id: "vsg-02",
    name: "Alton Mason",
    division: "VISAGE MEN",
    bureau: "New York / Milan",
    age: 26,
    ageBracket: "prime",
    gender: "men",
    skinTone: "amber",
    skinToneLabel: "Rich Deep Amber",
    lookAesthetic: "runway",
    languages: ["English", "French"],
    stats: {
      heightFt: "6'2\"",
      heightCm: 188,
      bust: "38\"",
      waist: "29\"",
      hips: "36\"",
      shoe: "11.5 US",
      hair: "Natural Black",
      eyes: "Dark Brown",
    },
    piercings: "None",
    tattoos: "None",
    photos: {
      closeUp: "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
      midShot: "https://booker-media.elitemodelmanagement.com/Library/12381/20260428_-7eAuAT5wneC3C.jpg",
      fullBody: "https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg",
    },
    videoReel: "https://static.thesocietymanagement.com/001-Menu.mp4",
    instagram: "@altonmason",
    followers: "1.4M",
    recentBooking: "Paris Haute Couture Lineup",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 19,
  },
  {
    id: "vsg-03",
    name: "Amber Valletta",
    division: "CLASSIC & ICON",
    bureau: "Los Angeles / Paris",
    age: 46,
    ageBracket: "mature",
    gender: "women",
    skinTone: "light",
    skinToneLabel: "Warm Light",
    lookAesthetic: "editorial",
    languages: ["English", "French"],
    stats: {
      heightFt: "5'9.5\"",
      heightCm: 176,
      bust: "34\"",
      waist: "24\"",
      hips: "35\"",
      shoe: "9 US",
      hair: "Golden Blonde",
      eyes: "Emerald Green",
    },
    piercings: "Ears pierced",
    tattoos: "None",
    photos: {
      closeUp: "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
      midShot: "https://booker-media.elitemodelmanagement.com/Library/9630/20230306_f05bsCpXheCgj3.jpg",
      fullBody: "https://booker-media.elitemodelmanagement.com/Library/9630/vDj40Z0bYh5Sux-4ltSc.jpg",
    },
    videoReel: "https://booker-media.elitemodelmanagement.com/Library/1/6ef3d9249ffb4f9d60773265df22bc73d4e9b338.mp4",
    instagram: "@ambervalletta",
    followers: "1.2M",
    recentBooking: "Aether Parfum Global Film",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 28,
  },
  {
    id: "vsg-04",
    name: "Aker Ajak",
    division: "VISAGE WOMEN",
    bureau: "London / Paris",
    age: 22,
    ageBracket: "prime",
    gender: "women",
    skinTone: "ebony",
    skinToneLabel: "Deep Luminous Ebony",
    lookAesthetic: "runway",
    languages: ["English", "Swahili", "French"],
    stats: {
      heightFt: "5'11\"",
      heightCm: 180,
      bust: "31\"",
      waist: "23\"",
      hips: "34\"",
      shoe: "9.5 US",
      hair: "Natural Black Buzz",
      eyes: "Dark Brown",
    },
    piercings: "Septum (removable)",
    tattoos: "None",
    photos: {
      closeUp: "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
      midShot: "https://booker-media.elitemodelmanagement.com/Library/10898/20251023_xJBUsLc1rrLz5H.jpg",
      fullBody: "https://booker-media.elitemodelmanagement.com/Library/10898/20260423_4kMyUYH7pXp8i4.jpg",
    },
    videoReel: "https://static.thesocietymanagement.com/001-Menu.mp4",
    instagram: "@akerajak",
    followers: "185K",
    recentBooking: "Milan Exclusive Debut",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 22,
  },
  {
    id: "vsg-05",
    name: "Sora Choi",
    division: "VISAGE WOMEN",
    bureau: "Seoul / New York",
    age: 27,
    ageBracket: "prime",
    gender: "women",
    skinTone: "fair",
    skinToneLabel: "Fair Alabaster",
    lookAesthetic: "runway",
    languages: ["Korean", "English"],
    stats: {
      heightFt: "5'10.5\"",
      heightCm: 179,
      bust: "30.5\"",
      waist: "23.5\"",
      hips: "34\"",
      shoe: "9 US",
      hair: "Raven Black",
      eyes: "Dark Brown",
    },
    piercings: "Ears & Cartilage",
    tattoos: "Minimalist forearm script",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
    videoReel: "https://booker-media.elitemodelmanagement.com/Library/1/74a735501d0c55e9ef422822e5a031a5214b50b0.mp4",
    instagram: "@sora_ch_editorial",
    followers: "480K",
    recentBooking: "Saint Laurent Winter Campaign",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 16,
  },
  {
    id: "vsg-06",
    name: "Leon Dame",
    division: "VISAGE MEN",
    bureau: "Berlin / Paris",
    age: 25,
    ageBracket: "prime",
    gender: "men",
    skinTone: "light",
    skinToneLabel: "Cool Fair",
    lookAesthetic: "alternative",
    languages: ["German", "English", "French"],
    stats: {
      heightFt: "6'2.5\"",
      heightCm: 189,
      bust: "37\"",
      waist: "28\"",
      hips: "35\"",
      shoe: "11 US",
      hair: "Chestnut Brown",
      eyes: "Ice Blue",
    },
    piercings: "None",
    tattoos: "None",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    },
    videoReel: "https://static.thesocietymanagement.com/001-Menu.mp4",
    instagram: "@leondame_berlin",
    followers: "320K",
    recentBooking: "Maison Margiela Runway Finale",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 30,
  },
  {
    id: "vsg-07",
    name: "Maye Sterling",
    division: "CLASSIC & ICON",
    bureau: "New York / Toronto",
    age: 58,
    ageBracket: "silver",
    gender: "women",
    skinTone: "fair",
    skinToneLabel: "Nordic Fair",
    lookAesthetic: "commercial",
    languages: ["English", "German"],
    stats: {
      heightFt: "5'8\"",
      heightCm: 173,
      bust: "35\"",
      waist: "27\"",
      hips: "36.5\"",
      shoe: "8.5 US",
      hair: "Natural Silver-White",
      eyes: "Steel Blue",
    },
    piercings: "Ears pierced",
    tattoos: "None",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
    },
    instagram: "@mayesterling_classic",
    followers: "650K",
    recentBooking: "Atelier Joaillerie Global Print",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 18,
  },
  {
    id: "vsg-08",
    name: "Kai Rodriguez",
    division: "DEVELOPMENT",
    bureau: "Brooklyn / London",
    age: 20,
    ageBracket: "youth",
    gender: "non-binary",
    skinTone: "medium",
    skinToneLabel: "Olive Medium",
    lookAesthetic: "alternative",
    languages: ["English", "Spanish"],
    stats: {
      heightFt: "5'10\"",
      heightCm: 178,
      bust: "33\"",
      waist: "26\"",
      hips: "34\"",
      shoe: "9.5 US",
      hair: "Bleached Platinum Buzz",
      eyes: "Amber Hazel",
    },
    piercings: "Double nostril, bridge",
    tattoos: "Geometric sleeve on left arm",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
    },
    instagram: "@kai_rodriguez_nyc",
    followers: "94K",
    recentBooking: "Dazed & Confused Autumn Feature",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 12,
  },
  {
    id: "vsg-09",
    name: "Cheikh Dia",
    division: "VISAGE MEN",
    bureau: "Paris / Dakar",
    age: 24,
    ageBracket: "prime",
    gender: "men",
    skinTone: "ebony",
    skinToneLabel: "Deep Obsidian Ebony",
    lookAesthetic: "commercial",
    languages: ["French", "English", "Wolof"],
    stats: {
      heightFt: "6'1.5\"",
      heightCm: 187,
      bust: "39\"",
      waist: "30\"",
      hips: "36.5\"",
      shoe: "12 US",
      hair: "Natural Black Faded",
      eyes: "Dark Espresso",
    },
    piercings: "Left lobe stud",
    tattoos: "None",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
    instagram: "@cheikh_dia_model",
    followers: "142K",
    recentBooking: "GAP Global Movement Campaign",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 27,
  },
  {
    id: "vsg-10",
    name: "Yumi Takahashi",
    division: "VISAGE WOMEN",
    bureau: "Tokyo / Los Angeles",
    age: 23,
    ageBracket: "prime",
    gender: "women",
    skinTone: "light",
    skinToneLabel: "Golden Ivory",
    lookAesthetic: "editorial",
    languages: ["Japanese", "English"],
    stats: {
      heightFt: "5'9.5\"",
      heightCm: 177,
      bust: "32\"",
      waist: "24\"",
      hips: "34.5\"",
      shoe: "8.5 US",
      hair: "Sleek Jet Black",
      eyes: "Dark Obsidian",
    },
    piercings: "Ears pierced",
    tattoos: "None",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
    videoReel: "https://booker-media.elitemodelmanagement.com/Library/1/74a735501d0c55e9ef422822e5a031a5214b50b0.mp4",
    instagram: "@yumitakahashi_visage",
    followers: "275K",
    recentBooking: "Harper's Bazaar Asia Cover",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 21,
  },
  {
    id: "vsg-11",
    name: "Matty Thorne",
    division: "DEVELOPMENT",
    bureau: "London",
    age: 19,
    ageBracket: "youth",
    gender: "men",
    skinTone: "fair",
    skinToneLabel: "Fair Porcelain",
    lookAesthetic: "runway",
    languages: ["English"],
    stats: {
      heightFt: "6'1\"",
      heightCm: 185,
      bust: "36\"",
      waist: "28\"",
      hips: "34\"",
      shoe: "10.5 US",
      hair: "Sandy Blonde",
      eyes: "Sea Green",
    },
    piercings: "None",
    tattoos: "None",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    },
    instagram: "@matty.thorne",
    followers: "42K",
    recentBooking: "London Menswear Collective",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 15,
  },
  {
    id: "vsg-12",
    name: "Nicoletta Rossi",
    division: "VISAGE WOMEN",
    bureau: "Rome / Paris",
    age: 38,
    ageBracket: "mature",
    gender: "women",
    skinTone: "medium",
    skinToneLabel: "Mediterranean Olive",
    lookAesthetic: "commercial",
    languages: ["Italian", "French", "English"],
    stats: {
      heightFt: "5'9\"",
      heightCm: 175,
      bust: "34\"",
      waist: "25\"",
      hips: "35\"",
      shoe: "9 US",
      hair: "Rich Espresso",
      eyes: "Hazel Brown",
    },
    piercings: "Ears pierced",
    tattoos: "Small wrist star",
    photos: {
      closeUp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      midShot: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      fullBody: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    },
    instagram: "@nicoletta_rossi_talent",
    followers: "190K",
    recentBooking: "Bottega Veneta Lookbook",
    isAvailable: true,
    status: "recertified",
    daysUntilRecertification: 8,
  },
];

export const CASTING_CALLS: CastingCall[] = [
  {
    id: "cst-001",
    title: "Vogue Italia — 'Metropolis Obsidian' Winter Cover Story",
    brand: "Vogue Italia / Condé Nast",
    clientLogoText: "VOGUE ITALIA",
    category: "Editorial",
    rate: "$4,500 / Day + Global Editorial",
    location: "Milan, Italy (Duomo & Historic Palazzo)",
    shootDates: "Nov 14 – Nov 17, 2026",
    deadline: "Nov 05, 2026",
    demographics: {
      gender: "Women & Non-Binary",
      ageRange: "18 – 35",
      heightMin: "5'9\" / 175cm",
      complexion: "All Skin Tones Welcome",
      languages: ["English or Italian preferred"],
    },
    description: "Multi-page cover story capturing architectural silhouettes against historic Milanese brutalism. Requires sharp posture, distinct cheekbone profile, and high comfort with dramatic monochrome lighting.",
    requirements: [
      "Must have 3 recent verified portfolio photos (within 30 days).",
      "Full runway walk or editorial reel required.",
      "International passport with EU travel clearance.",
    ],
    applicantCount: 48,
    featured: true,
    status: "Active",
  },
  {
    id: "cst-002",
    title: "Saint Laurent — Haute Couture SS27 Runway Selection",
    brand: "Yves Saint Laurent Rive Droite",
    clientLogoText: "SAINT LAURENT",
    category: "Runway",
    rate: "€6,200 Flat + Couture Gifting",
    location: "Paris, France (Trocadéro / Eiffel Tower)",
    shootDates: "Dec 01 – Dec 05, 2026",
    deadline: "Nov 18, 2026",
    demographics: {
      gender: "Men & Women",
      ageRange: "18 – 30",
      heightMin: "Women 5'10\"+ / Men 6'1\"+",
      complexion: "All Complexions",
      languages: ["English or French"],
    },
    description: "Annual flagship runway presentation under the direction of Anthony Vaccarello. Seeking commanding, weightless, high-cadence walking signatures with razor-sharp tailoring fit.",
    requirements: [
      "Exact bust/chest and hip measurements matching sample sizes.",
      "In-person fitting in Paris required 48h prior to call.",
      "Exclusive hold required during presentation week.",
    ],
    applicantCount: 92,
    featured: true,
    status: "Active",
  },
  {
    id: "cst-003",
    title: "GAP Inc. — Global 'Every Movement' Denim Campaign",
    brand: "GAP Global & Wieden+Kennedy",
    clientLogoText: "GAP",
    category: "Commercial",
    rate: "$3,200 / Day + $8,500 2-Year Worldwide Buyout",
    location: "Los Angeles, CA (Milk Studios + Outdoor)",
    shootDates: "Nov 28 – Nov 30, 2026",
    deadline: "Nov 12, 2026",
    demographics: {
      gender: "All Genders (Women, Men, Non-Binary)",
      ageRange: "All Ages (Youth, Prime, Mature, Silver 50+)",
      heightMin: "No height restrictions",
      complexion: "High Diversity Roster Across All Shades",
      languages: ["Any spoken languages"],
    },
    description: "Major worldwide broadcast and digital outdoor advertising campaign celebrating genuine personality, rhythm, movement, and effortless raw denim lifestyle.",
    requirements: [
      "Natural candid smile, expressive eyes, and dynamic physical agility.",
      "Open to beginner and experienced models registered with VISAGE.",
      "Direct WhatsApp callback notifications will be issued to shortlisted talent.",
    ],
    applicantCount: 174,
    featured: true,
    status: "Active",
  },
  {
    id: "cst-004",
    title: "Maison Solaris — High Jewelry & Timepiece Cinematic Film",
    brand: "Solaris Atelier Zurich",
    clientLogoText: "MAISON SOLARIS",
    category: "Film & Video",
    rate: "£3,800 / Day",
    location: "London, UK (Pinewood Studios)",
    shootDates: "Dec 10 – Dec 13, 2026",
    deadline: "Nov 24, 2026",
    demographics: {
      gender: "Women & Men",
      ageRange: "24 – 45",
      heightMin: "5'8\"+",
      complexion: "Luminous Porcelain, Olive, or Deep Ebony",
      languages: ["English"],
    },
    description: "Ultra-macro high-speed cinematography capturing diamond pavé reflections on collarbones, wrists, and neckline. Impeccable skin texture and refined poise are essential.",
    requirements: [
      "Close-up macro beauty digitals required in profile.",
      "Manicure and skin prep included on set.",
      "NDA required upon shortlisting.",
    ],
    applicantCount: 36,
    featured: false,
    status: "Active",
  },
  {
    id: "cst-005",
    title: "Balenciaga — Avant-Garde Volumetric Avatar Capsule",
    brand: "Balenciaga Paris",
    clientLogoText: "BALENCIAGA",
    category: "Alternative",
    rate: "€5,000 + 3D Holographic Usage Royalty",
    location: "Paris, France (Volumetric Capture Soundstage)",
    shootDates: "Jan 08 – Jan 12, 2027",
    deadline: "Dec 01, 2026",
    demographics: {
      gender: "All Genders & Non-Binary",
      ageRange: "18 – 40",
      heightMin: "5'9\"+",
      complexion: "All Complexions",
      languages: ["English, French, or German"],
    },
    description: "360-degree volumetric photogrammetry scan for virtual runway and mixed-reality installations. Looking for unconventional facial bone structures, buzzcuts, striking gaze, or visible piercings.",
    requirements: [
      "Comfortable with 3D scanning rigs and motion capture dots.",
      "Must report any changes to hair, tattoos, or piercings 14 days prior.",
    ],
    applicantCount: 61,
    featured: false,
    status: "Active",
  },
];

export const CONSULTATION_SERVICES: ConsultationService[] = [
  {
    id: "srv-portfolio",
    title: "Comp-Card & Portfolio Architecture Review",
    duration: "45 Minutes",
    format: "Studio In-Person",
    description: "Detailed 1-on-1 critique of your 3 mandatory photo slots, editorial digitals, walking reel, and casting profile positioning with senior bookers.",
    badge: "Most Requested",
    idealFor: "New talent & models transitioning from commercial to high-fashion.",
  },
  {
    id: "srv-contract",
    title: "Contract, Buyout & Direct Rate Advisory",
    duration: "30 Minutes",
    format: "Encrypted Video Call",
    description: "Review upcoming brand contracts, international syndication buyouts, usage clauses, exclusivity terms, and day-rate negotiations with our legal advocate.",
    badge: "Advocacy",
    idealFor: "Models with pending direct offers or international option holds.",
  },
  {
    id: "srv-look-check",
    title: "Monthly Look Recertification & Digital Polariods",
    duration: "20 Minutes",
    format: "Studio In-Person",
    description: "Quick studio session to capture updated candid digitals under balanced natural light to maintain 'Active' status and avoid 30-day profile auto-holds.",
    badge: "Recertification",
    idealFor: "Models with hair color shifts, new piercings, or expiring monthly photos.",
  },
  {
    id: "srv-issue-desk",
    title: "Casting Urgent Issue & Priority Agent Desk",
    duration: "30 Minutes",
    format: "Hybrid",
    description: "Priority expedited resolution desk for casting conflicts, on-set safety questions, payment disbursement inquiries, or travel coordination.",
    badge: "Support",
    idealFor: "Any active model requiring immediate agency intervention.",
  },
];

export const DIRECTOR_MEETING_SERVICES: ConsultationService[] = [
  {
    id: "dir-film-teledrama",
    title: "Film & Teledrama Casting Conference",
    duration: "60 Minutes",
    format: "Studio In-Person",
    description: "Principal screen lead & ensemble cast breakdown with VISAGE executive casting directors. Includes script breakdown, character lookbook matching, and tape evaluations.",
    badge: "Film Productions",
    idealFor: "Feature film directors, teledrama production companies, and showrunners.",
  },
  {
    id: "dir-commercial-tvc",
    title: "Commercial & TVC Brand Campaign Meeting",
    duration: "45 Minutes",
    format: "Encrypted Video Call",
    description: "Scouting and option holds for global advertising campaigns, TVC spots, digital promos, and multi-market billboard brand takeovers.",
    badge: "Advertising Agencies",
    idealFor: "Creative agency producers, commercial directors, and brand marketing leads.",
  },
  {
    id: "dir-option-holds",
    title: "Talent Option Holds & Exclusivity Negotiations",
    duration: "30 Minutes",
    format: "Hybrid",
    description: "Lock down runway exclusives, first-option dates, buyouts, and multi-year ambassador agreements across our roster.",
    badge: "Priority Holds",
    idealFor: "Producers with confirmed shoot dates seeking immediate availability lock.",
  },
  {
    id: "dir-general-inquiry",
    title: "General Production Inquiries & Co-Casting Desk",
    duration: "30 Minutes",
    format: "Encrypted Video Call",
    description: "Consultation on casting rates, international work permits, location production staffing, and customized casting calls.",
    badge: "Inquiries",
    idealFor: "International production houses planning shoots in the US, Europe, or Asia.",
  },
];

export const CONSULTATION_AGENTS: ConsultationAgent[] = [
  {
    id: "agt-01",
    name: "Elena Rostova",
    title: "Head of High-Fashion & Runway Casting",
    division: "Haute Couture & Runway",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    availability: "Mon, Wed, Fri (10:00 – 16:00)",
  },
  {
    id: "agt-02",
    name: "Marcus Vance",
    title: "Director of Men's Division & Global Commercials",
    division: "Men's Board & Worldwide Ads",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    availability: "Tue, Thu (11:00 – 17:00)",
  },
  {
    id: "agt-03",
    name: "Danielle Moreau",
    title: "Senior Talent Advocate & Legal Counsel",
    division: "Contracts, Buyouts & Rights",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    availability: "Mon – Fri (09:00 – 13:00)",
  },
  {
    id: "agt-04",
    name: "Julian Croft",
    title: "Creative Director & Polaroid Studio Head",
    division: "Digitals & Comp-Card Curation",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    availability: "Wed, Thu, Sat (12:00 – 18:00)",
  },
];

export const MODEL_AGREEMENT_DATA = {
  contractTitle: "VISAGE Exclusive Talent Representation & Agency Management Agreement",
  version: "2026.4 - Official Online Execution Copy",
  durationYears: 3,
  summary:
    "Official 3-Year exclusive representation contract binding the talent exclusively to VISAGE Casting & Management. All photoshoots, brand endorsements, commercial TVCs, digital campaigns, films, and teledramas must strictly route through the agency.",
  clauses: [
    {
      id: "term-exclusivity",
      title: "1. Term & 3-Year Agency Exclusivity",
      content:
        "The Talent hereby engages VISAGE ('Casting & Co') as their sole, exclusive manager and casting representative worldwide for a binding period of three (3) full calendar years from the date of online digital execution. During this 3-year term, the Talent expressly agrees that they cannot work on, accept, negotiate, or perform any brand promotions, commercial appearances, modeling jobs, or influencer ambassadorships sourced from or organized by third-party companies, outside managers, or direct clients. The Talent agrees to stick to VISAGE at all times to maximize casting opportunities, international placement, and professional agency branding.",
      bulletPoints: [
        "Binding 3-year exclusive representation worldwide.",
        "Zero unauthorized direct brand deals or outside management.",
        "Agency prioritizes exclusive talent for international fashion weeks, covers, and global commercial campaigns.",
      ],
    },
    {
      id: "production-routing",
      title: "2. Production Routing & Universal Representation Scope",
      content:
        "All product endorsements, photo shoots, promotional engagements, digital campaigns, TVCs (television commercials), feature film roles, teledramas, music videos, or any other sort of visual or physical production that the Talent is involved in MUST route exclusively through and be approved by VISAGE. No third-party production house, director, photographer, or client may contract the Talent directly without prior written confirmation and commission routing from the VISAGE booking department.",
      bulletPoints: [
        "Covers: All Product Shoots, Photos, Digital Promos, TVCs, Feature Films, and Teledramas.",
        "Direct bookings or on-set private agreements are strictly prohibited.",
        "Guarantees standard union-compliant payment terms, safety riders, and buyout limits for talent.",
      ],
    },
    {
      id: "breach-penalty",
      title: "3. Breach of Exclusivity, Immediate Termination & Liquidated Damages",
      content:
        "If the Talent goes beyond or violates this agreement—including accepting unauthorized outside work, circumvention of agency commission, direct client deals, or unapproved promotions—the Talent's agency representation shall be terminated immediately for cause. Furthermore, in the event of such a breach, an immediate fine and liquidated service reimbursement fee will be legally assessed and collected from the Talent. This fine shall be calculated based on the complete cumulative expenses incurred by the agency on behalf of the Talent, including but not limited to: high-end portfolio photoshoots, studio rental, hair/makeup artists, video reel production, comp-card graphic creation, digital profile hosting, and agency marketing overhead.",
      bulletPoints: [
        "Immediate termination of representation and cancellation of casting opportunities upon breach.",
        "Compulsory fine and recoupment for all agency photoshoots and production costs.",
        "Full calculation of profile maintenance and marketing investments assessed for collection.",
      ],
    },
    {
      id: "recertification-rule",
      title: "4. Monthly Look Recertification & Auto-Hold Protocol",
      content:
        "The Talent acknowledges the mandatory 30-day look verification policy. Every thirty (30) days, the Talent must submit new candid digital photos reflecting their exact current appearance (Face close-up, mid shot, full body) and disclose any physical modifications (haircut, hair color shifts, tattoos, piercings, or measurement changes). Failure to submit monthly digitals results in automatic 'Profile On Hold' status, rendering the talent temporarily ineligible for active casting submissions until recertified.",
      bulletPoints: [
        "Monthly updated candid digitals required within 30 days.",
        "Immediate notification required for new hair color, piercings, or tattoos.",
        "Automated profile hold prevents submission to casting calls until photos are renewed.",
      ],
    },
  ],
};
