/**
 * VISAGE Casting & Management Agency
 * Master Administrative Data Architecture & State Store
 */

import { MODEL_BANK_TALENT, CASTING_CALLS, ModelBankTalent, CastingCall } from "./castingData";

export interface TalentAgreementRecord {
  id: string; // e.g. "VSA-2026-088"
  talentId: string;
  talentName: string;
  legalFullName: string;
  nicPassport: string;
  email: string;
  phone: string;
  signedAt: string;
  expiresAt: string;
  termYears: number;
  signatureCanvasSvg?: string;
  status: "active" | "flagged_investigation" | "breached_terminated";
  notes?: string;
  recoupmentFineCalculated: number; // LKR photoshoot & management recovery fine
}

export interface CastingApplicant {
  id: string;
  castingId: string;
  talentId: string;
  talentName: string;
  talentPhoto: string;
  division: string;
  appliedAt: string;
  status: "applied" | "shortlisted" | "booked" | "rejected";
  directorRating?: number; // 1 to 5 stars
  adminNotes?: string;
}

export interface ConsultationBookingRecord {
  id: string;
  attendeeName: string;
  attendeeType: "model" | "director" | "film_production" | "commercial_agency";
  type:
    | "Model Portfolio Review"
    | "Talent Support & Inquiry"
    | "Director Casting Brief"
    | "Commercial Licensing Negotiation"
    | "Film & Teledrama Studio Audition";
  date: string;
  time: string;
  format: "In-Studio Colombo 07" | "Virtual Encrypted Video Call";
  contactNumber: string;
  email: string;
  status: "scheduled" | "completed" | "rescheduled" | "cancelled";
  notes: string;
}

export interface ShowcaseCampaignItem {
  id: string;
  brand: string;
  campaignTitle: string;
  year: string;
  category: "Commercial TVC" | "Luxury Hospitality" | "Wellness & Skincare" | "Global Apparel" | "Runway & Haute Couture";
  productionScope: string;
  coverImage: string;
  heroVideoUrl?: string;
  modelsCastedCount: number;
  activeOnHomepage: boolean;
}

export interface AdminAuditLogItem {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  category: "model" | "casting" | "agreement" | "consultation" | "finance" | "system";
  severity: "info" | "success" | "warning" | "critical";
}

export interface PlatformConfig {
  modelRegistrationFeeLKR: number;
  directorListingFeeLKR: number;
  agencyCommissionPercent: number;
  monthlyPhotoGraceDays: number;
  whatsappGatewayActive: boolean;
  autoHoldOverdueTalent: boolean;
  adminEmailAlerts: boolean;
}

// -------------------------------------------------------------
// INITIAL SEED DATA
// -------------------------------------------------------------

export const INITIAL_AGREEMENTS: TalentAgreementRecord[] = [
  {
    id: "VSA-2026-088",
    talentId: "vsg-01",
    talentName: "Adriana Lima",
    legalFullName: "Adriana Lima da Silva",
    nicPassport: "N1981061299P",
    email: "adr.lima@visagemodels.com",
    phone: "+94 77 123 4567",
    signedAt: "2026-01-14T09:30:00Z",
    expiresAt: "2029-01-14T09:30:00Z",
    termYears: 3,
    status: "active",
    notes: "Top-tier international commercial exclusive. 36-month full exclusivity agreement.",
    recoupmentFineCalculated: 350000,
  },
  {
    id: "VSA-2026-089",
    talentId: "vsg-02",
    talentName: "Malik Silva",
    legalFullName: "Malik Kanishka Silva",
    nicPassport: "200114508920",
    email: "malik.silva@visagemodels.com",
    phone: "+94 71 892 3411",
    signedAt: "2026-02-01T14:15:00Z",
    expiresAt: "2029-02-01T14:15:00Z",
    termYears: 3,
    status: "active",
    notes: "Male fashion & teledrama lead talent. All third-party promotion barred.",
    recoupmentFineCalculated: 280000,
  },
  {
    id: "VSA-2026-090",
    talentId: "vsg-03",
    talentName: "Elena Vance",
    legalFullName: "Elena Marie Vance",
    nicPassport: "B98442109P",
    email: "elena.vance@visagemodels.com",
    phone: "+94 76 554 9912",
    signedAt: "2026-02-18T11:00:00Z",
    expiresAt: "2029-02-18T11:00:00Z",
    termYears: 3,
    status: "active",
    notes: "High fashion editorial & runway board.",
    recoupmentFineCalculated: 320000,
  },
  {
    id: "VSA-2026-091",
    talentId: "vsg-04",
    talentName: "Kavinda Rathnayake",
    legalFullName: "Kavinda Deshan Rathnayake",
    nicPassport: "199732104599",
    email: "kavinda.r@visagemodels.com",
    phone: "+94 70 332 1884",
    signedAt: "2026-02-25T16:45:00Z",
    expiresAt: "2029-02-25T16:45:00Z",
    termYears: 3,
    status: "flagged_investigation",
    notes: "Reported unauthorized brand campaign on Instagram. Formal legal review in progress.",
    recoupmentFineCalculated: 450000,
  },
  {
    id: "VSA-2026-092",
    talentId: "vsg-05",
    talentName: "Shenaya Perera",
    legalFullName: "Shenaya Christine Perera",
    nicPassport: "200388912400",
    email: "shenaya.p@visagemodels.com",
    phone: "+94 77 441 2990",
    signedAt: "2026-03-02T10:20:00Z",
    expiresAt: "2029-03-02T10:20:00Z",
    termYears: 3,
    status: "active",
    notes: "Development board talent. Digital signature verified.",
    recoupmentFineCalculated: 250000,
  },
];

export const INITIAL_APPLICANTS: CastingApplicant[] = [
  {
    id: "app-101",
    castingId: "cst-01",
    talentId: "vsg-01",
    talentName: "Adriana Lima",
    talentPhoto: "https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg",
    division: "VISAGE WOMEN",
    appliedAt: "2026-10-25T14:30:00Z",
    status: "booked",
    directorRating: 5,
    adminNotes: "Client requested directly. Confirmed fitting on Oct 30.",
  },
  {
    id: "app-102",
    castingId: "cst-01",
    talentId: "vsg-03",
    talentName: "Elena Vance",
    talentPhoto: "https://booker-media.elitemodelmanagement.com/Library/1/20250428_IxCs0E79oOLdXM.jpg",
    division: "VISAGE WOMEN",
    appliedAt: "2026-10-26T09:12:00Z",
    status: "shortlisted",
    directorRating: 4,
    adminNotes: "Second choice for hero look.",
  },
  {
    id: "app-103",
    castingId: "cst-02",
    talentId: "vsg-02",
    talentName: "Malik Silva",
    talentPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
    division: "VISAGE MEN",
    appliedAt: "2026-10-24T18:00:00Z",
    status: "booked",
    directorRating: 5,
    adminNotes: "Lead male cast for Cinnamon Resorts national TVC.",
  },
  {
    id: "app-104",
    castingId: "cst-03",
    talentId: "vsg-04",
    talentName: "Kavinda Rathnayake",
    talentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    division: "VISAGE MEN",
    appliedAt: "2026-10-26T11:45:00Z",
    status: "applied",
    directorRating: 3,
    adminNotes: "Under review pending contract status resolution.",
  },
  {
    id: "app-105",
    castingId: "cst-04",
    talentId: "vsg-05",
    talentName: "Shenaya Perera",
    talentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    division: "DEVELOPMENT",
    appliedAt: "2026-10-27T08:20:00Z",
    status: "shortlisted",
    directorRating: 4,
    adminNotes: "Perfect look for Spa Ceylon botanical campaign.",
  },
];

export const INITIAL_CONSULTATIONS: ConsultationBookingRecord[] = [
  {
    id: "CNS-501",
    attendeeName: "Elena Vance",
    attendeeType: "model",
    type: "Model Portfolio Review",
    date: "2026-10-29",
    time: "10:30 AM",
    format: "In-Studio Colombo 07",
    contactNumber: "+94 76 554 9912",
    email: "elena.vance@visagemodels.com",
    status: "scheduled",
    notes: "Review updated international comp-card for Paris Fashion Week scouting.",
  },
  {
    id: "CNS-502",
    attendeeName: "Anura Jayawardena (Director, Redline Films)",
    attendeeType: "director",
    type: "Director Casting Brief",
    date: "2026-10-29",
    time: "02:00 PM",
    format: "In-Studio Colombo 07",
    contactNumber: "+94 77 998 1234",
    email: "anura@redlinefilms.lk",
    status: "scheduled",
    notes: "Casting 6 principal actors and 20 background talent for upcoming historical teledrama.",
  },
  {
    id: "CNS-503",
    attendeeName: "Shenaya Perera",
    attendeeType: "model",
    type: "Talent Support & Inquiry",
    date: "2026-10-30",
    time: "11:00 AM",
    format: "Virtual Encrypted Video Call",
    contactNumber: "+94 77 441 2990",
    email: "shenaya.p@visagemodels.com",
    status: "scheduled",
    notes: "Monthly look refresh submission guidance and height recertification.",
  },
  {
    id: "CNS-504",
    attendeeName: "Sanjaya Wickramasinghe (Production Head, Dialog Axiata)",
    attendeeType: "commercial_agency",
    type: "Commercial Licensing Negotiation",
    date: "2026-10-31",
    time: "03:30 PM",
    format: "In-Studio Colombo 07",
    contactNumber: "+94 77 711 0022",
    email: "sanjaya.w@dialog.lk",
    status: "scheduled",
    notes: "Extension of billboard likeness rights for 4 VISAGE models for 2027.",
  },
  {
    id: "CNS-505",
    attendeeName: "Prasanna Vithanage Studios",
    attendeeType: "film_production",
    type: "Film & Teledrama Studio Audition",
    date: "2026-11-02",
    time: "09:00 AM",
    format: "In-Studio Colombo 07",
    contactNumber: "+94 71 223 8899",
    email: "casting@vithanagestudios.lk",
    status: "scheduled",
    notes: "Full-day closed screen tests for female and male lead roles in cinema feature.",
  },
];

export const INITIAL_SHOWCASE_CAMPAIGNS: ShowcaseCampaignItem[] = [
  {
    id: "shw-01",
    brand: "Dialog Axiata",
    campaignTitle: "Future Unwired 5G National Campaign",
    year: "2026",
    category: "Commercial TVC",
    productionScope: "National TV Broadcast, Billboards & Social Media",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-setting-41315-large.mp4",
    modelsCastedCount: 8,
    activeOnHomepage: true,
  },
  {
    id: "shw-02",
    brand: "Cinnamon Hotels & Resorts",
    campaignTitle: "Serendipity Reimagined Global Ad",
    year: "2025 - 2026",
    category: "Luxury Hospitality",
    productionScope: "Global Digital Stream, In-Flight Airline Video & Print",
    coverImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-a-bright-fashion-outfit-41318-large.mp4",
    modelsCastedCount: 14,
    activeOnHomepage: true,
  },
  {
    id: "shw-03",
    brand: "Spa Ceylon Luxury Ayurveda",
    campaignTitle: "Royal Botanical Skin Essence",
    year: "2026",
    category: "Wellness & Skincare",
    productionScope: "Flagship Retail Displays, Middle East & Europe Launch",
    coverImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-for-the-camera-in-a-studio-41316-large.mp4",
    modelsCastedCount: 6,
    activeOnHomepage: true,
  },
  {
    id: "shw-04",
    brand: "MAS Holdings / Linea Aqua",
    campaignTitle: "Sculpt Activewear Global Lookbook",
    year: "2026",
    category: "Global Apparel",
    productionScope: "Athletic Performance Catalog, London & New York Showrooms",
    coverImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    modelsCastedCount: 10,
    activeOnHomepage: true,
  },
  {
    id: "shw-05",
    brand: "Colombo Fashion Week",
    campaignTitle: "Summer / Resort Official Runway Board",
    year: "2026",
    category: "Runway & Haute Couture",
    productionScope: "Live Catwalk, International Press & Designer Showcases",
    coverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    modelsCastedCount: 28,
    activeOnHomepage: true,
  },
];

export const INITIAL_AUDIT_LOGS: AdminAuditLogItem[] = [
  {
    id: "log-1",
    timestamp: "2026-10-28T01:10:00Z",
    actor: "Admin (Auto-Audit)",
    action: "Platform contrast and WCAG AA verification executed cleanly across all pages.",
    category: "system",
    severity: "success",
  },
  {
    id: "log-2",
    timestamp: "2026-10-27T23:45:00Z",
    actor: "Elena Vance (Model)",
    action: "Submitted 3 mandatory current look digitals (Close-up, Mid-shot, Full-body).",
    category: "model",
    severity: "info",
  },
  {
    id: "log-3",
    timestamp: "2026-10-27T21:15:00Z",
    actor: "Redline Films (Director)",
    action: "Submitted commercial casting brief 'Dialog Axiata 5G TVC'. Awaiting payment verification.",
    category: "casting",
    severity: "warning",
  },
  {
    id: "log-4",
    timestamp: "2026-10-27T19:30:00Z",
    actor: "Admin (System)",
    action: "WhatsApp blast dispatched for 'Cinnamon Hotels Campaign' to 48 registered models.",
    category: "casting",
    severity: "success",
  },
  {
    id: "log-5",
    timestamp: "2026-10-27T18:00:00Z",
    actor: "Kavinda Rathnayake",
    action: "Agreement #VSA-2026-091 flagged for external promotion review under Section 2 exclusivity.",
    category: "agreement",
    severity: "critical",
  },
  {
    id: "log-6",
    timestamp: "2026-10-27T16:20:00Z",
    actor: "Prasanna Vithanage Studios",
    action: "Booked in-studio screen test audition for feature cinema film.",
    category: "consultation",
    severity: "info",
  },
];

export const INITIAL_CONFIG: PlatformConfig = {
  modelRegistrationFeeLKR: 8500,
  directorListingFeeLKR: 15000,
  agencyCommissionPercent: 20,
  monthlyPhotoGraceDays: 30,
  whatsappGatewayActive: true,
  autoHoldOverdueTalent: true,
  adminEmailAlerts: true,
};
