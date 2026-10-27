"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  MODEL_BANK_TALENT,
  CASTING_CALLS,
  ModelBankTalent,
  CastingCall,
} from "@/data/castingData";
import {
  INITIAL_AGREEMENTS,
  INITIAL_APPLICANTS,
  INITIAL_CONSULTATIONS,
  INITIAL_SHOWCASE_CAMPAIGNS,
  INITIAL_AUDIT_LOGS,
  INITIAL_CONFIG,
  TalentAgreementRecord,
  CastingApplicant,
  ConsultationBookingRecord,
  ShowcaseCampaignItem,
  AdminAuditLogItem,
  PlatformConfig,
} from "@/data/adminData";

type AdminTab =
  | "overview"
  | "models"
  | "castings"
  | "agreements"
  | "consultations"
  | "showcase"
  | "settings";

export default function AdminPortalPage() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Platform Entities State (initialized from localStorage with fallback to initial seed data)
  const [models, setModels] = useState<ModelBankTalent[]>(MODEL_BANK_TALENT);
  const [castings, setCastings] = useState<CastingCall[]>(CASTING_CALLS);
  const [agreements, setAgreements] = useState<TalentAgreementRecord[]>(INITIAL_AGREEMENTS);
  const [applicants, setApplicants] = useState<CastingApplicant[]>(INITIAL_APPLICANTS);
  const [consultations, setConsultations] = useState<ConsultationBookingRecord[]>(INITIAL_CONSULTATIONS);
  const [showcase, setShowcase] = useState<ShowcaseCampaignItem[]>(INITIAL_SHOWCASE_CAMPAIGNS);
  const [auditLogs, setAuditLogs] = useState<AdminAuditLogItem[]>(INITIAL_AUDIT_LOGS);
  const [config, setConfig] = useState<PlatformConfig>(INITIAL_CONFIG);

  // UI Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter & Search States
  const [modelSearch, setModelSearch] = useState("");
  const [modelStatusFilter, setModelStatusFilter] = useState<string>("all");
  const [modelGenderFilter, setModelGenderFilter] = useState<string>("all");

  const [castingSearch, setCastingSearch] = useState("");
  const [castingStatusFilter, setCastingStatusFilter] = useState<string>("all");

  const [agreementSearch, setAgreementSearch] = useState("");
  const [agreementStatusFilter, setAgreementStatusFilter] = useState<string>("all");

  const [consultationSearch, setConsultationSearch] = useState("");
  const [consultationTypeFilter, setConsultationTypeFilter] = useState<string>("all");

  // Modals / Inspector State
  const [selectedModel, setSelectedModel] = useState<ModelBankTalent | null>(null);
  const [selectedAgreement, setSelectedAgreement] = useState<TalentAgreementRecord | null>(null);
  const [activeCastingForApplicants, setActiveCastingForApplicants] = useState<CastingCall | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddCastingModal, setShowAddCastingModal] = useState(false);
  const [showWhatsAppBlastModal, setShowWhatsAppBlastModal] = useState(false);
  const [blastTargetCasting, setBlastTargetCasting] = useState<CastingCall | null>(null);

  // Form State for Adding New Model
  const [newModelName, setNewModelName] = useState("");
  const [newModelDivision, setNewModelDivision] = useState<"VISAGE WOMEN" | "VISAGE MEN" | "DEVELOPMENT" | "CLASSIC & ICON">("VISAGE WOMEN");
  const [newModelGender, setNewModelGender] = useState<"women" | "men" | "non-binary">("women");
  const [newModelAge, setNewModelAge] = useState(22);
  const [newModelSkinTone, setNewModelSkinTone] = useState<"fair" | "light" | "medium" | "tan" | "amber" | "ebony">("medium");
  const [newModelHeight, setNewModelHeight] = useState("5'9\"");
  const [newModelPhoto, setNewModelPhoto] = useState("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80");

  // Form State for Adding New Casting
  const [newCastingTitle, setNewCastingTitle] = useState("");
  const [newCastingBrand, setNewCastingBrand] = useState("");
  const [newCastingCategory, setNewCastingCategory] = useState<"Editorial" | "Runway" | "Commercial" | "Film & Video" | "Alternative">("Commercial");
  const [newCastingRate, setNewCastingRate] = useState("LKR 180,000 / Day");
  const [newCastingShootDates, setNewCastingShootDates] = useState("Nov 15 - Nov 17, 2026");

  // Load from LocalStorage on Mount
  useEffect(() => {
    try {
      const savedModels = localStorage.getItem("visage_admin_models");
      if (savedModels) setModels(JSON.parse(savedModels));

      const savedCastings = localStorage.getItem("visage_admin_castings");
      if (savedCastings) setCastings(JSON.parse(savedCastings));

      const savedAgreements = localStorage.getItem("visage_admin_agreements");
      if (savedAgreements) setAgreements(JSON.parse(savedAgreements));

      const savedApplicants = localStorage.getItem("visage_admin_applicants");
      if (savedApplicants) setApplicants(JSON.parse(savedApplicants));

      const savedConsultations = localStorage.getItem("visage_admin_consultations");
      if (savedConsultations) setConsultations(JSON.parse(savedConsultations));

      const savedShowcase = localStorage.getItem("visage_admin_showcase");
      if (savedShowcase) setShowcase(JSON.parse(savedShowcase));

      const savedAudit = localStorage.getItem("visage_admin_audit");
      if (savedAudit) setAuditLogs(JSON.parse(savedAudit));

      const savedConfig = localStorage.getItem("visage_admin_config");
      if (savedConfig) setConfig(JSON.parse(savedConfig));
    } catch {
      // LocalStorage unavailable, continue with seed data
    }
  }, []);

  // Save changes to LocalStorage helper
  const saveStateToDisk = (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage write error", e);
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  const addAuditLog = (action: string, category: AdminAuditLogItem["category"], severity: AdminAuditLogItem["severity"] = "info") => {
    const newLog: AdminAuditLogItem = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString(),
      actor: "Admin (Active Session)",
      action,
      category,
      severity,
    };
    const updated = [newLog, ...auditLogs];
    setAuditLogs(updated);
    saveStateToDisk("visage_admin_audit", updated);
  };

  // -------------------------------------------------------------
  // ACTION HANDLERS
  // -------------------------------------------------------------

  // Model Controls
  const handleUpdateModelStatus = (modelId: string, newStatus: "active" | "recertified" | "on-hold") => {
    const updated = models.map((m) =>
      m.id === modelId
        ? {
            ...m,
            status: newStatus,
            daysUntilRecertification: newStatus === "recertified" || newStatus === "active" ? 30 : 0,
          }
        : m
    );
    setModels(updated);
    saveStateToDisk("visage_admin_models", updated);
    if (selectedModel?.id === modelId) {
      setSelectedModel({
        ...selectedModel,
        status: newStatus,
        daysUntilRecertification: newStatus === "recertified" || newStatus === "active" ? 30 : 0,
      });
    }
    const model = models.find((m) => m.id === modelId);
    triggerToast(`Model ${model?.name || modelId} status changed to ${newStatus.toUpperCase()}`);
    addAuditLog(`Updated model status for ${model?.name} to ${newStatus}`, "model", newStatus === "on-hold" ? "warning" : "success");
  };

  const handleRequestPhotoRefresh = (modelId: string) => {
    const model = models.find((m) => m.id === modelId);
    triggerToast(`WhatsApp reminder dispatched to ${model?.name} to submit 30-day current look digitals`);
    addAuditLog(`Dispatched monthly photo refresh WhatsApp alert to ${model?.name}`, "model", "info");
  };

  const handleDeleteModel = (modelId: string) => {
    const model = models.find((m) => m.id === modelId);
    if (confirm(`Are you sure you want to delete model ${model?.name}?`)) {
      const updated = models.filter((m) => m.id !== modelId);
      setModels(updated);
      saveStateToDisk("visage_admin_models", updated);
      setSelectedModel(null);
      triggerToast(`Model ${model?.name} archived from platform`);
      addAuditLog(`Archived model profile ${model?.name}`, "model", "warning");
    }
  };

  const handleCreateNewModel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModelName) return;

    const newTalent: ModelBankTalent = {
      id: `vsg-${Date.now().toString().slice(-4)}`,
      name: newModelName,
      division: newModelDivision,
      bureau: "Colombo / Global",
      age: Number(newModelAge),
      ageBracket: newModelAge < 18 ? "youth" : newModelAge <= 35 ? "prime" : "mature",
      gender: newModelGender,
      skinTone: newModelSkinTone,
      skinToneLabel: newModelSkinTone.toUpperCase(),
      lookAesthetic: "commercial",
      languages: ["English", "Sinhala"],
      stats: {
        heightFt: newModelHeight,
        heightCm: 175,
        bust: "34\"",
        waist: "26\"",
        hips: "36\"",
        shoe: "8.5 US",
        hair: "Natural Dark",
        eyes: "Brown",
      },
      piercings: "None",
      tattoos: "None",
      photos: {
        closeUp: newModelPhoto,
        midShot: newModelPhoto,
        fullBody: newModelPhoto,
      },
      instagram: `@${newModelName.toLowerCase().replace(/\s+/g, "")}`,
      followers: "12K",
      recentBooking: "VISAGE Board Debut",
      isAvailable: true,
      status: "active",
      daysUntilRecertification: 30,
    };

    const updated = [newTalent, ...models];
    setModels(updated);
    saveStateToDisk("visage_admin_models", updated);
    setShowAddModal(false);
    setNewModelName("");
    triggerToast(`New model ${newTalent.name} added and published to Model Bank`);
    addAuditLog(`Manually created new model profile for ${newTalent.name}`, "model", "success");
  };

  // Casting Controls
  const handleApproveDirectorCasting = (castingId: string) => {
    const updated = castings.map((c) => (c.id === castingId ? { ...c, status: "Active" as const } : c));
    setCastings(updated);
    saveStateToDisk("visage_admin_castings", updated);
    const casting = castings.find((c) => c.id === castingId);
    triggerToast(`Director brief "${casting?.title}" payment verified & published live to Casting Board!`);
    addAuditLog(`Verified payment and published director casting brief "${casting?.title}"`, "casting", "success");
  };

  const handleToggleCastingStatus = (castingId: string) => {
    const updated = castings.map((c) => {
      if (c.id === castingId) {
        const nextStatus = c.status === "Active" ? ("Closing Soon" as const) : c.status === "Closing Soon" ? ("Moderated" as const) : ("Active" as const);
        return { ...c, status: nextStatus };
      }
      return c;
    });
    setCastings(updated);
    saveStateToDisk("visage_admin_castings", updated);
    triggerToast("Casting status toggled");
  };

  const handleDispatchWhatsAppBlast = (casting: CastingCall) => {
    triggerToast(`WhatsApp alert blasted for "${casting.title}" to ${models.filter((m) => m.status === "active").length} registered models!`);
    addAuditLog(`Dispatched automated WhatsApp casting notification for "${casting.title}"`, "casting", "success");
    setShowWhatsAppBlastModal(false);
  };

  const handleCreateNewCasting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCastingTitle || !newCastingBrand) return;

    const newBrief: CastingCall = {
      id: `cst-${Date.now().toString().slice(-4)}`,
      title: newCastingTitle,
      brand: newCastingBrand,
      clientLogoText: newCastingBrand.toUpperCase(),
      category: newCastingCategory,
      rate: newCastingRate,
      location: "Colombo Studio / On Location",
      shootDates: newCastingShootDates,
      deadline: "In 14 Days",
      demographics: {
        gender: "All Genders",
        ageRange: "18 - 35",
        heightMin: "5'7\"",
        complexion: "All Complexions",
        languages: ["English", "Sinhala", "Tamil"],
      },
      description: `Official casting call by ${newCastingBrand}. Managed exclusively by VISAGE. Direct 1-click model application.`,
      requirements: ["Natural daylight headshot", "Current measurements", "Valid 3-year signed representation agreement"],
      applicantCount: 0,
      featured: true,
      status: "Active",
    };

    const updated = [newBrief, ...castings];
    setCastings(updated);
    saveStateToDisk("visage_admin_castings", updated);
    setShowAddCastingModal(false);
    setNewCastingTitle("");
    setNewCastingBrand("");
    triggerToast(`Casting brief "${newBrief.title}" created & published!`);
    addAuditLog(`Created new casting call "${newBrief.title}" for ${newBrief.brand}`, "casting", "success");
  };

  // Applicant Status Control
  const handleUpdateApplicantStatus = (applicantId: string, newStatus: CastingApplicant["status"]) => {
    const updated = applicants.map((a) => (a.id === applicantId ? { ...a, status: newStatus } : a));
    setApplicants(updated);
    saveStateToDisk("visage_admin_applicants", updated);
    const applicant = applicants.find((a) => a.id === applicantId);
    triggerToast(`Applicant ${applicant?.talentName} status changed to ${newStatus.toUpperCase()}`);
    addAuditLog(`Updated applicant status for ${applicant?.talentName} to ${newStatus}`, "casting", newStatus === "booked" ? "success" : "info");
  };

  // Agreement Controls
  const handleFlagAgreementBreach = (agreementId: string) => {
    const updated = agreements.map((agr) =>
      agr.id === agreementId
        ? {
            ...agr,
            status: "breached_terminated" as const,
            notes: "Formally terminated for breach of Section 2 exclusivity. Recovery proceedings initiated for studio photoshoot & management costs.",
          }
        : agr
    );
    setAgreements(updated);
    saveStateToDisk("visage_admin_agreements", updated);
    const agr = agreements.find((a) => a.id === agreementId);
    triggerToast(`Agreement ${agr?.id} marked BREACHED / TERMINATED. Fine LKR ${agr?.recoupmentFineCalculated.toLocaleString()} calculated.`);
    addAuditLog(`Issued formal breach notice and terminated contract ${agr?.id} for ${agr?.talentName}`, "agreement", "critical");
  };

  const handleReinstateAgreement = (agreementId: string) => {
    const updated = agreements.map((agr) =>
      agr.id === agreementId
        ? {
            ...agr,
            status: "active" as const,
            notes: "Active & compliant under 36-month exclusive representation terms.",
          }
        : agr
    );
    setAgreements(updated);
    saveStateToDisk("visage_admin_agreements", updated);
    triggerToast(`Agreement ${agreementId} reinstated to Active`);
    addAuditLog(`Reinstated agreement ${agreementId} to Active`, "agreement", "success");
  };

  // Consultation Controls
  const handleUpdateConsultationStatus = (bookingId: string, status: ConsultationBookingRecord["status"]) => {
    const updated = consultations.map((c) => (c.id === bookingId ? { ...c, status } : c));
    setConsultations(updated);
    saveStateToDisk("visage_admin_consultations", updated);
    triggerToast(`Appointment ${bookingId} marked as ${status.toUpperCase()}`);
    addAuditLog(`Appointment ${bookingId} updated to ${status}`, "consultation", "info");
  };

  // Showcase Controls
  const handleToggleShowcaseCampaign = (campaignId: string) => {
    const updated = showcase.map((c) => (c.id === campaignId ? { ...c, activeOnHomepage: !c.activeOnHomepage } : c));
    setShowcase(updated);
    saveStateToDisk("visage_admin_showcase", updated);
    triggerToast("Campaign homepage visibility toggled");
    addAuditLog(`Toggled homepage visibility for campaign ${campaignId}`, "system", "info");
  };

  // Settings & Reset
  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveStateToDisk("visage_admin_config", config);
    triggerToast("Platform settings and pricing rules updated");
    addAuditLog("Updated platform pricing and operational settings", "system", "success");
  };

  const handleExportFullDatabase = () => {
    const fullBackup = {
      agency: "VISAGE Casting & Model Management",
      exportedAt: new Date().toISOString(),
      models,
      castings,
      agreements,
      applicants,
      consultations,
      showcase,
      config,
      auditLogs,
    };
    const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `visage-platform-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast("Full platform JSON database exported successfully");
    addAuditLog("Exported full platform JSON database backup", "system", "info");
  };

  const handleResetToSeedData = () => {
    if (confirm("Reset all admin data to initial platform seed? All temporary changes will revert.")) {
      localStorage.clear();
      setModels(MODEL_BANK_TALENT);
      setCastings(CASTING_CALLS);
      setAgreements(INITIAL_AGREEMENTS);
      setApplicants(INITIAL_APPLICANTS);
      setConsultations(INITIAL_CONSULTATIONS);
      setShowcase(INITIAL_SHOWCASE_CAMPAIGNS);
      setAuditLogs(INITIAL_AUDIT_LOGS);
      setConfig(INITIAL_CONFIG);
      triggerToast("System reset to pristine seed state");
    }
  };

  // -------------------------------------------------------------
  // COMPUTED STATS & FILTERED DATA
  // -------------------------------------------------------------
  const activeModelsCount = models.filter((m) => m.status === "active" || m.status === "recertified").length;
  const onHoldModelsCount = models.filter((m) => m.status === "on-hold").length;
  const activeCastingsCount = castings.filter((c) => c.status === "Active").length;
  const pendingDirectorCastingsCount = castings.filter((c) => c.status === "Moderated").length;
  const activeAgreementsCount = agreements.filter((a) => a.status === "active").length;
  const upcomingConsultationsCount = consultations.filter((c) => c.status === "scheduled").length;

  const totalCalculatedRevenueLKR = useMemo(() => {
    const membershipRev = models.length * config.modelRegistrationFeeLKR;
    const listingRev = castings.length * config.directorListingFeeLKR;
    const estimatedBookingsCommission = 1450000; // 20% estimated on commercial bookings
    return membershipRev + listingRev + estimatedBookingsCommission;
  }, [models.length, castings.length, config]);

  const filteredModels = useMemo(() => {
    return models.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(modelSearch.toLowerCase()) ||
        m.id.toLowerCase().includes(modelSearch.toLowerCase()) ||
        m.languages.some((l) => l.toLowerCase().includes(modelSearch.toLowerCase()));
      const matchStatus =
        modelStatusFilter === "all"
          ? true
          : modelStatusFilter === "active"
          ? m.status === "active" || m.status === "recertified"
          : m.status === modelStatusFilter;
      const matchGender = modelGenderFilter === "all" ? true : m.gender === modelGenderFilter;
      return matchSearch && matchStatus && matchGender;
    });
  }, [models, modelSearch, modelStatusFilter, modelGenderFilter]);

  const filteredCastings = useMemo(() => {
    return castings.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(castingSearch.toLowerCase()) ||
        c.brand.toLowerCase().includes(castingSearch.toLowerCase()) ||
        c.category.toLowerCase().includes(castingSearch.toLowerCase());
      const matchStatus = castingStatusFilter === "all" ? true : c.status === castingStatusFilter;
      return matchSearch && matchStatus;
    });
  }, [castings, castingSearch, castingStatusFilter]);

  const filteredAgreements = useMemo(() => {
    return agreements.filter((a) => {
      const matchSearch =
        a.talentName.toLowerCase().includes(agreementSearch.toLowerCase()) ||
        a.legalFullName.toLowerCase().includes(agreementSearch.toLowerCase()) ||
        a.nicPassport.toLowerCase().includes(agreementSearch.toLowerCase()) ||
        a.id.toLowerCase().includes(agreementSearch.toLowerCase());
      const matchStatus = agreementStatusFilter === "all" ? true : a.status === agreementStatusFilter;
      return matchSearch && matchStatus;
    });
  }, [agreements, agreementSearch, agreementStatusFilter]);

  const filteredConsultations = useMemo(() => {
    return consultations.filter((c) => {
      const matchSearch =
        c.attendeeName.toLowerCase().includes(consultationSearch.toLowerCase()) ||
        c.type.toLowerCase().includes(consultationSearch.toLowerCase()) ||
        c.id.toLowerCase().includes(consultationSearch.toLowerCase());
      const matchType = consultationTypeFilter === "all" ? true : c.attendeeType === consultationTypeFilter;
      return matchSearch && matchType;
    });
  }, [consultations, consultationSearch, consultationTypeFilter]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#070707",
        color: "#ffffff",
        fontFamily: "var(--_typography---body-font)",
        display: "flex",
      }}
    >
      {/* ==============================================================
          TOAST NOTIFICATION COMPONENT
          ============================================================== */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 99999,
            backgroundColor: "#161616",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            borderRadius: "4px",
            padding: "14px 22px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
            fontSize: "14px",
            letterSpacing: "0.02em",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "16px" }}>✓</span>
          <span style={{ color: "#ffffff" }}>{toastMessage}</span>
        </div>
      )}

      {/* ==============================================================
          LEFT NAVIGATION SIDEBAR (OBSIDIAN MINIMALIST)
          ============================================================== */}
      <aside
        style={{
          width: sidebarCollapsed ? "72px" : "260px",
          backgroundColor: "#0b0b0b",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.25s ease",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 100,
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            padding: "24px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: sidebarCollapsed ? "center" : "space-between",
          }}
        >
          {!sidebarCollapsed && (
            <div>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--_typography---title-font)",
                  fontSize: "24px",
                  letterSpacing: "0.15em",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                VISAGE
              </Link>
              <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#888888", textTransform: "uppercase" }}>
                Command Console
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#cccccc",
              width: "30px",
              height: "30px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {sidebarCollapsed ? "→" : "←"}
          </button>
        </div>

        {/* Navigation Items */}
        <nav style={{ padding: "16px 10px", flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { id: "overview", label: "Overview", icon: "⊞", badge: null },
            { id: "models", label: "Talent Board", icon: "👤", badge: onHoldModelsCount > 0 ? `${onHoldModelsCount} hold` : null },
            { id: "castings", label: "Casting Calls", icon: "⚡", badge: pendingDirectorCastingsCount > 0 ? `${pendingDirectorCastingsCount} new` : null },
            { id: "agreements", label: "3-Yr Agreements", icon: "⚖", badge: null },
            { id: "consultations", label: "Appointments", icon: "📅", badge: upcomingConsultationsCount },
            { id: "showcase", label: "Brand Showcase", icon: "★", badge: null },
            { id: "settings", label: "System & Pricing", icon: "⚙", badge: null },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AdminTab)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "11px 14px",
                  borderRadius: "4px",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid transparent",
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
                  color: isActive ? "#ffffff" : "#999999",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.15s ease",
                  justifyContent: sidebarCollapsed ? "center" : "flex-start",
                }}
                title={item.label}
              >
                <span style={{ fontSize: "15px" }}>{item.icon}</span>
                {!sidebarCollapsed && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: "10px",
                          padding: "2px 6px",
                          borderRadius: "10px",
                          backgroundColor: item.badge.toString().includes("hold") ? "rgba(245, 163, 163, 0.2)" : "rgba(255, 255, 255, 0.15)",
                          color: item.badge.toString().includes("hold") ? "#f5a3a3" : "#ffffff",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer Link back to Website */}
        <div style={{ padding: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#aaaaaa",
              fontSize: "12px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              justifyContent: sidebarCollapsed ? "center" : "flex-start",
            }}
          >
            <span>↗</span>
            {!sidebarCollapsed && <span>Return to Website</span>}
          </Link>
        </div>
      </aside>

      {/* ==============================================================
          MAIN ADMIN CONTENT WORKSPACE
          ============================================================== */}
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", height: "100vh", overflowY: "auto" }}>
        {/* Top Operational Bar */}
        <header
          style={{
            padding: "16px 32px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(10, 10, 10, 0.85)",
            backdropFilter: "blur(12px)",
            position: "sticky",
            top: 0,
            zIndex: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <h1
              style={{
                fontFamily: "var(--_typography---title-font)",
                fontSize: "24px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: 0,
                color: "#ffffff",
              }}
            >
              {activeTab === "overview" && "Platform Command & Telemetry"}
              {activeTab === "models" && "Model Bank & Digitals Governance"}
              {activeTab === "castings" && "Casting Pipeline & Director Posts"}
              {activeTab === "agreements" && "3-Year Talent Agreements & Compliance"}
              {activeTab === "consultations" && "Consultation & Audition Calendar"}
              {activeTab === "showcase" && "Frontpage Advertising Showcase"}
              {activeTab === "settings" && "Platform Economics & Policy Engine"}
            </h1>

            {/* Live Operational Health Badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "3px 10px",
                borderRadius: "12px",
                fontSize: "11px",
                letterSpacing: "0.06em",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#e0e0e0",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ffffff" }} />
              SYSTEM ACTIVE
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setShowAddModal(true)}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "none",
                borderRadius: "3px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              + Add Model
            </button>
            <button
              onClick={() => setShowAddCastingModal(true)}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "3px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              + Post Casting
            </button>
            <button
              onClick={handleExportFullDatabase}
              title="Export complete database backup as JSON"
              style={{
                backgroundColor: "transparent",
                color: "#cccccc",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "3px",
                padding: "8px 12px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              JSON Export
            </button>
          </div>
        </header>

        {/* Workspace Body */}
        <div style={{ padding: "32px", flex: 1 }}>
          {/* ==========================================================
              TAB 1: OVERVIEW & TELEMETRY
              ========================================================== */}
          {activeTab === "overview" && (
            <div>
              {/* Metric Cards Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                {[
                  {
                    label: "Active Talent Board",
                    value: activeModelsCount,
                    meta: `${models.length} Total Registered`,
                    action: () => setActiveTab("models"),
                  },
                  {
                    label: "Overdue Digitals (Hold)",
                    value: onHoldModelsCount,
                    meta: "Requires 30-Day Fresh Photos",
                    alert: onHoldModelsCount > 0,
                    action: () => {
                      setModelStatusFilter("on-hold");
                      setActiveTab("models");
                    },
                  },
                  {
                    label: "Active Casting Calls",
                    value: activeCastingsCount,
                    meta: `${pendingDirectorCastingsCount} Pending Director Verification`,
                    action: () => setActiveTab("castings"),
                  },
                  {
                    label: "Direct Applications Logged",
                    value: applicants.length,
                    meta: "1-Click Model Submissions",
                    action: () => setActiveTab("castings"),
                  },
                  {
                    label: "3-Yr Exclusive Contracts",
                    value: activeAgreementsCount,
                    meta: "Digitally Signed & Binding",
                    action: () => setActiveTab("agreements"),
                  },
                  {
                    label: "Estimated Billed Volume",
                    value: `LKR ${(totalCalculatedRevenueLKR / 1000000).toFixed(2)}M`,
                    meta: "Memberships + Listing + 20% Cut",
                    action: () => setActiveTab("settings"),
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    onClick={stat.action}
                    style={{
                      backgroundColor: "#0e0e0e",
                      border: stat.alert ? "1px solid rgba(245, 163, 163, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "4px",
                      padding: "20px",
                      cursor: "pointer",
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        color: stat.alert ? "#f5a3a3" : "#aaaaaa",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--_typography---title-font)",
                        fontSize: "36px",
                        letterSpacing: "0.04em",
                        color: "#ffffff",
                        lineHeight: 1.1,
                        marginBottom: "8px",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "12px", color: "#888888" }}>{stat.meta}</div>
                  </div>
                ))}
              </div>

              {/* Two Column Section: Live Action Queue & Audit Trail */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
                {/* Pending Approvals Queue */}
                <div
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "4px",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h2
                      style={{
                        fontFamily: "var(--_typography---title-font)",
                        fontSize: "20px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        margin: 0,
                        color: "#ffffff",
                      }}
                    >
                      Priority Approvals Queue
                    </h2>
                    <span style={{ fontSize: "12px", color: "#aaaaaa" }}>
                      {pendingDirectorCastingsCount + onHoldModelsCount} Items Requiring Attention
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {/* Director Casting Waiting for Payment */}
                    {castings
                      .filter((c) => c.status === "Moderated")
                      .map((c) => (
                        <div
                          key={c.id}
                          style={{
                            padding: "16px",
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#f8c794", textTransform: "uppercase" }}>
                              Director Brief · Payment Verification
                            </div>
                            <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", marginTop: "2px" }}>
                              {c.title}
                            </div>
                            <div style={{ fontSize: "12px", color: "#aaaaaa" }}>
                              Client: {c.brand} · Rate: {c.rate}
                            </div>
                          </div>
                          <button
                            onClick={() => handleApproveDirectorCasting(c.id)}
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              border: "none",
                              padding: "6px 14px",
                              fontSize: "11px",
                              fontWeight: 700,
                              borderRadius: "3px",
                              cursor: "pointer",
                            }}
                          >
                            Verify &amp; Publish
                          </button>
                        </div>
                      ))}

                    {/* Models on Hold */}
                    {models
                      .filter((m) => m.status === "on-hold")
                      .slice(0, 3)
                      .map((m) => (
                        <div
                          key={m.id}
                          style={{
                            padding: "16px",
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#f5a3a3", textTransform: "uppercase" }}>
                              Model Profile On Hold · 30-Day Photos Missing
                            </div>
                            <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", marginTop: "2px" }}>
                              {m.name}
                            </div>
                            <div style={{ fontSize: "12px", color: "#aaaaaa" }}>
                              Division: {m.division} · Last updated 34 days ago
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <button
                              onClick={() => handleRequestPhotoRefresh(m.id)}
                              style={{
                                backgroundColor: "transparent",
                                color: "#ffffff",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                padding: "6px 12px",
                                fontSize: "11px",
                                borderRadius: "3px",
                                cursor: "pointer",
                              }}
                            >
                              WhatsApp Alert
                            </button>
                            <button
                              onClick={() => handleUpdateModelStatus(m.id, "active")}
                              style={{
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                border: "none",
                                padding: "6px 12px",
                                fontSize: "11px",
                                fontWeight: 700,
                                borderRadius: "3px",
                                cursor: "pointer",
                              }}
                            >
                              Approve Look
                            </button>
                          </div>
                        </div>
                      ))}

                    {pendingDirectorCastingsCount === 0 && onHoldModelsCount === 0 && (
                      <div style={{ padding: "30px", textAlign: "center", color: "#888888", fontSize: "14px" }}>
                        All submissions, director payments, and model look updates are currently resolved.
                      </div>
                    )}
                  </div>
                </div>

                {/* Real-time Audit Log */}
                <div
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "4px",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h2
                      style={{
                        fontFamily: "var(--_typography---title-font)",
                        fontSize: "20px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        margin: 0,
                        color: "#ffffff",
                      }}
                    >
                      Real-Time Operational Audit Trail
                    </h2>
                    <span style={{ fontSize: "11px", color: "#888888" }}>Auto-Logged</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "380px", overflowY: "auto" }}>
                    {auditLogs.map((log) => (
                      <div
                        key={log.id}
                        style={{
                          padding: "12px",
                          backgroundColor: "rgba(255, 255, 255, 0.02)",
                          borderLeft:
                            log.severity === "critical"
                              ? "3px solid #f5a3a3"
                              : log.severity === "success"
                              ? "3px solid #ffffff"
                              : log.severity === "warning"
                              ? "3px solid #f8c794"
                              : "3px solid #666666",
                          borderRadius: "2px",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#888888", marginBottom: "4px" }}>
                          <span style={{ textTransform: "uppercase", letterSpacing: "0.05em", color: "#cccccc" }}>{log.actor}</span>
                          <span>{new Date(log.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        </div>
                        <div style={{ fontSize: "13px", color: "#e0e0e0", lineHeight: 1.4 }}>{log.action}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================================
              TAB 2: TALENT BOARD & MODEL MANAGEMENT
              ========================================================== */}
          {activeTab === "models" && (
            <div>
              {/* Controls Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* Search & Filters */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flex: 1 }}>
                  <input
                    type="text"
                    value={modelSearch}
                    onChange={(e) => setModelSearch(e.target.value)}
                    placeholder="Search model name, ID, or language..."
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                      minWidth: "260px",
                    }}
                  />

                  {/* Status Filter */}
                  <select
                    value={modelStatusFilter}
                    onChange={(e) => setModelStatusFilter(e.target.value)}
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="all">All Statuses</option>
                    <option value="active">Active &amp; Compliant</option>
                    <option value="on-hold">On Hold (30-Day Photo Due)</option>
                  </select>

                  {/* Gender Filter */}
                  <select
                    value={modelGenderFilter}
                    onChange={(e) => setModelGenderFilter(e.target.value)}
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="all">All Genders</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="non-binary">Non-Binary</option>
                  </select>
                </div>

                <div style={{ fontSize: "13px", color: "#aaaaaa" }}>
                  Showing <strong>{filteredModels.length}</strong> of {models.length} models
                </div>
              </div>

              {/* Models Table */}
              <div
                style={{
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  overflowX: "auto",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)", backgroundColor: "rgba(255, 255, 255, 0.02)" }}>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Model / Look</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Division</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Demographics</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Specs (H / B / W / H)</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>30-Day Photo Health</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Status</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600, textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredModels.map((m) => (
                      <tr
                        key={m.id}
                        style={{
                          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                          transition: "background-color 0.15s ease",
                        }}
                      >
                        {/* Model Photo & Name */}
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <img
                              src={m.photos.closeUp}
                              alt={m.name}
                              style={{ width: "42px", height: "52px", objectFit: "cover", borderRadius: "2px" }}
                            />
                            <div>
                              <div style={{ fontWeight: 600, color: "#ffffff", fontSize: "14px" }}>{m.name}</div>
                              <div style={{ fontSize: "11px", color: "#888888", letterSpacing: "0.05em" }}>ID: {m.id}</div>
                            </div>
                          </div>
                        </td>

                        {/* Division */}
                        <td style={{ padding: "14px 16px", color: "#cccccc" }}>
                          <span style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.division}</span>
                        </td>

                        {/* Demographics */}
                        <td style={{ padding: "14px 16px", color: "#cccccc" }}>
                          <div>{m.age} Yrs · {m.gender}</div>
                          <div style={{ fontSize: "11px", color: "#888888" }}>{m.skinToneLabel}</div>
                        </td>

                        {/* Measurements */}
                        <td style={{ padding: "14px 16px", color: "#cccccc" }}>
                          <div>{m.stats.heightFt} ({m.stats.heightCm}cm)</div>
                          <div style={{ fontSize: "11px", color: "#888888" }}>
                            {m.stats.bust} / {m.stats.waist} / {m.stats.hips}
                          </div>
                        </td>

                        {/* 30-Day Photo Health */}
                        <td style={{ padding: "14px 16px" }}>
                          {m.status === "on-hold" ? (
                            <span
                              style={{
                                color: "#f5a3a3",
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.04em",
                                display: "inline-block",
                                padding: "2px 8px",
                                borderRadius: "3px",
                                backgroundColor: "rgba(245, 163, 163, 0.12)",
                              }}
                            >
                              Overdue (Hold)
                            </span>
                          ) : (
                            <span
                              style={{
                                color: "#ffffff",
                                fontSize: "11px",
                                letterSpacing: "0.04em",
                              }}
                            >
                              ✓ Verified ({m.daysUntilRecertification}d remaining)
                            </span>
                          )}
                        </td>

                        {/* Status */}
                        <td style={{ padding: "14px 16px" }}>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              padding: "3px 8px",
                              borderRadius: "3px",
                              backgroundColor:
                                m.status === "on-hold"
                                  ? "rgba(245, 163, 163, 0.15)"
                                  : "rgba(255, 255, 255, 0.1)",
                              color: m.status === "on-hold" ? "#f5a3a3" : "#ffffff",
                            }}
                          >
                            {m.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td style={{ padding: "14px 16px", textAlign: "right" }}>
                          <div style={{ display: "inline-flex", gap: "6px" }}>
                            <button
                              onClick={() => setSelectedModel(m)}
                              title="Inspect 3 mandatory current look photos"
                              style={{
                                backgroundColor: "transparent",
                                color: "#ffffff",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "3px",
                                padding: "4px 8px",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              View Digitals
                            </button>

                            {m.status === "on-hold" ? (
                              <button
                                onClick={() => handleUpdateModelStatus(m.id, "active")}
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  border: "none",
                                  borderRadius: "3px",
                                  padding: "4px 8px",
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                }}
                              >
                                Activate
                              </button>
                            ) : (
                              <button
                                onClick={() => handleUpdateModelStatus(m.id, "on-hold")}
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#aaaaaa",
                                  border: "1px solid rgba(255, 255, 255, 0.12)",
                                  borderRadius: "3px",
                                  padding: "4px 8px",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Put On Hold
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ==========================================================
              TAB 3: CASTING PIPELINE & DIRECTOR SUBMISSIONS
              ========================================================== */}
          {activeTab === "castings" && (
            <div>
              {/* Controls Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flex: 1 }}>
                  <input
                    type="text"
                    value={castingSearch}
                    onChange={(e) => setCastingSearch(e.target.value)}
                    placeholder="Search casting call, brand, or category..."
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                      minWidth: "260px",
                    }}
                  />

                  <select
                    value={castingStatusFilter}
                    onChange={(e) => setCastingStatusFilter(e.target.value)}
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="all">All Briefs</option>
                    <option value="Active">Published &amp; Active</option>
                    <option value="Moderated">Awaiting Payment Verification</option>
                    <option value="Closing Soon">Closing Soon</option>
                  </select>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => setShowAddCastingModal(true)}
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "none",
                      borderRadius: "3px",
                      padding: "9px 18px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    + Create Casting Brief
                  </button>
                </div>
              </div>

              {/* Castings Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "20px" }}>
                {filteredCastings.map((c) => {
                  const castingApplicants = applicants.filter((a) => a.castingId === c.id);
                  const isModerated = c.status === "Moderated";

                  return (
                    <div
                      key={c.id}
                      style={{
                        backgroundColor: "#0d0d0d",
                        border: isModerated ? "1px solid rgba(248, 199, 148, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "4px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        {/* Header Badge */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                          <span
                            style={{
                              fontSize: "10px",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              padding: "3px 8px",
                              borderRadius: "2px",
                              backgroundColor: isModerated ? "rgba(248, 199, 148, 0.15)" : "rgba(255, 255, 255, 0.1)",
                              color: isModerated ? "#f8c794" : "#ffffff",
                              fontWeight: 600,
                            }}
                          >
                            {isModerated ? "Payment Pending · Moderation Hold" : c.status}
                          </span>
                          <span style={{ fontSize: "12px", color: "#888888" }}>{c.category}</span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "var(--_typography---title-font)",
                            fontSize: "22px",
                            letterSpacing: "0.04em",
                            color: "#ffffff",
                            margin: "0 0 6px 0",
                            lineHeight: 1.2,
                          }}
                        >
                          {c.title}
                        </h3>

                        <div style={{ fontSize: "13px", color: "#cccccc", marginBottom: "16px" }}>
                          Brand: <strong>{c.brand}</strong> · Compensation: <strong>{c.rate}</strong>
                        </div>

                        <p style={{ fontSize: "13px", color: "#aaaaaa", lineHeight: 1.5, marginBottom: "18px" }}>
                          {c.description}
                        </p>

                        <div
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            padding: "12px",
                            borderRadius: "3px",
                            fontSize: "12px",
                            color: "#cccccc",
                            marginBottom: "18px",
                          }}
                        >
                          <div>Shoot Dates: {c.shootDates}</div>
                          <div style={{ marginTop: "4px" }}>
                            Demographics: {c.demographics.gender} · {c.demographics.ageRange} Yrs
                          </div>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div
                        style={{
                          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                          paddingTop: "16px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {/* Submissions count */}
                        <button
                          onClick={() => setActiveCastingForApplicants(c)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#ffffff",
                            fontSize: "12px",
                            textDecoration: "underline",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          View {castingApplicants.length} Applicants ↗
                        </button>

                        <div style={{ display: "flex", gap: "8px" }}>
                          {isModerated ? (
                            <button
                              onClick={() => handleApproveDirectorCasting(c.id)}
                              style={{
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                border: "none",
                                padding: "6px 12px",
                                fontSize: "11px",
                                fontWeight: 700,
                                borderRadius: "3px",
                                cursor: "pointer",
                              }}
                            >
                              Verify Payment
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => {
                                  setBlastTargetCasting(c);
                                  setShowWhatsAppBlastModal(true);
                                }}
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#ffffff",
                                  border: "1px solid rgba(255, 255, 255, 0.2)",
                                  padding: "6px 12px",
                                  fontSize: "11px",
                                  borderRadius: "3px",
                                  cursor: "pointer",
                                }}
                              >
                                WhatsApp Blast
                              </button>
                              <button
                                onClick={() => handleToggleCastingStatus(c.id)}
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#aaaaaa",
                                  border: "1px solid rgba(255, 255, 255, 0.12)",
                                  padding: "6px 10px",
                                  fontSize: "11px",
                                  borderRadius: "3px",
                                  cursor: "pointer",
                                }}
                              >
                                Toggle
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ==========================================================
              TAB 4: 3-YEAR TALENT AGREEMENTS & LEGAL LEDGER
              ========================================================== */}
          {activeTab === "agreements" && (
            <div>
              {/* Top Controls */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flex: 1 }}>
                  <input
                    type="text"
                    value={agreementSearch}
                    onChange={(e) => setAgreementSearch(e.target.value)}
                    placeholder="Search agreement reference, legal name, or NIC..."
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                      minWidth: "260px",
                    }}
                  />

                  <select
                    value={agreementStatusFilter}
                    onChange={(e) => setAgreementStatusFilter(e.target.value)}
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="all">All Contracts</option>
                    <option value="active">Active &amp; Compliant</option>
                    <option value="flagged_investigation">Flagged for External Review</option>
                    <option value="breached_terminated">Terminated / Breached</option>
                  </select>
                </div>

                <div style={{ fontSize: "13px", color: "#aaaaaa" }}>
                  <strong>{filteredAgreements.length}</strong> active legal agreements on file
                </div>
              </div>

              {/* Legal Contracts Ledger Table */}
              <div
                style={{
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  overflowX: "auto",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)", backgroundColor: "rgba(255, 255, 255, 0.02)" }}>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Agreement Ref</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Model / Legal Full Name</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>NIC / Passport</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Term Duration</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Breach Recoupment</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600 }}>Status</th>
                      <th style={{ padding: "14px 16px", color: "#aaaaaa", fontWeight: 600, textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAgreements.map((agr) => {
                      const isBreached = agr.status === "breached_terminated";
                      const isFlagged = agr.status === "flagged_investigation";

                      return (
                        <tr
                          key={agr.id}
                          style={{
                            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                            backgroundColor: isBreached ? "rgba(245, 163, 163, 0.03)" : "transparent",
                          }}
                        >
                          <td style={{ padding: "14px 16px", fontFamily: "monospace", color: "#ffffff", fontWeight: 600 }}>
                            {agr.id}
                          </td>

                          <td style={{ padding: "14px 16px" }}>
                            <div style={{ fontWeight: 600, color: "#ffffff" }}>{agr.talentName}</div>
                            <div style={{ fontSize: "11px", color: "#888888" }}>Legal: {agr.legalFullName}</div>
                          </td>

                          <td style={{ padding: "14px 16px", fontFamily: "monospace", color: "#cccccc" }}>
                            {agr.nicPassport}
                          </td>

                          <td style={{ padding: "14px 16px", color: "#cccccc" }}>
                            <div>36 Months (3 Years)</div>
                            <div style={{ fontSize: "11px", color: "#888888" }}>
                              Expires: {new Date(agr.expiresAt).toLocaleDateString()}
                            </div>
                          </td>

                          <td style={{ padding: "14px 16px", color: isBreached ? "#f5a3a3" : "#cccccc" }}>
                            <strong>LKR {agr.recoupmentFineCalculated.toLocaleString()}</strong>
                            <div style={{ fontSize: "11px", color: "#888888" }}>Studio &amp; Mgmt Costs</div>
                          </td>

                          <td style={{ padding: "14px 16px" }}>
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                padding: "3px 8px",
                                borderRadius: "3px",
                                backgroundColor: isBreached
                                  ? "rgba(245, 163, 163, 0.15)"
                                  : isFlagged
                                  ? "rgba(248, 199, 148, 0.15)"
                                  : "rgba(255, 255, 255, 0.1)",
                                color: isBreached ? "#f5a3a3" : isFlagged ? "#f8c794" : "#ffffff",
                              }}
                            >
                              {agr.status.replace("_", " ")}
                            </span>
                          </td>

                          <td style={{ padding: "14px 16px", textAlign: "right" }}>
                            <div style={{ display: "inline-flex", gap: "6px" }}>
                              <button
                                onClick={() => setSelectedAgreement(agr)}
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#ffffff",
                                  border: "1px solid rgba(255, 255, 255, 0.2)",
                                  borderRadius: "3px",
                                  padding: "4px 8px",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                View Contract
                              </button>

                              {!isBreached ? (
                                <button
                                  onClick={() => handleFlagAgreementBreach(agr.id)}
                                  title="Terminate and issue photoshoot recovery notice"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "#f5a3a3",
                                    border: "1px solid rgba(245, 163, 163, 0.3)",
                                    borderRadius: "3px",
                                    padding: "4px 8px",
                                    fontSize: "11px",
                                    cursor: "pointer",
                                  }}
                                >
                                  Issue Breach
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleReinstateAgreement(agr.id)}
                                  style={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    border: "none",
                                    borderRadius: "3px",
                                    padding: "4px 8px",
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                  }}
                                >
                                  Reinstate
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ==========================================================
              TAB 5: CONSULTATIONS & AUDITION APPOINTMENTS
              ========================================================== */}
          {activeTab === "consultations" && (
            <div>
              {/* Controls */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flex: 1 }}>
                  <input
                    type="text"
                    value={consultationSearch}
                    onChange={(e) => setConsultationSearch(e.target.value)}
                    placeholder="Search attendee, booking ref, or inquiry..."
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                      minWidth: "260px",
                    }}
                  />

                  <select
                    value={consultationTypeFilter}
                    onChange={(e) => setConsultationTypeFilter(e.target.value)}
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      padding: "10px 16px",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="all">All Attendee Types</option>
                    <option value="model">Talent / Model</option>
                    <option value="director">Casting Director</option>
                    <option value="film_production">Film &amp; Teledrama Studio</option>
                    <option value="commercial_agency">Commercial Agency</option>
                  </select>
                </div>

                <div style={{ fontSize: "13px", color: "#aaaaaa" }}>
                  <strong>{filteredConsultations.length}</strong> scheduled sessions
                </div>
              </div>

              {/* Appointments Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "18px" }}>
                {filteredConsultations.map((c) => {
                  const isCompleted = c.status === "completed";
                  const isCancelled = c.status === "cancelled";

                  return (
                    <div
                      key={c.id}
                      style={{
                        backgroundColor: "#0d0d0d",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "4px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        opacity: isCompleted || isCancelled ? 0.75 : 1,
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                          <span
                            style={{
                              fontSize: "10px",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              padding: "2px 6px",
                              borderRadius: "2px",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              color: "#ffffff",
                              fontWeight: 600,
                            }}
                          >
                            {c.id} · {c.attendeeType.replace("_", " ")}
                          </span>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              color: isCompleted ? "#ffffff" : isCancelled ? "#f5a3a3" : "#f8c794",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {c.status}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "var(--_typography---title-font)",
                            fontSize: "20px",
                            letterSpacing: "0.04em",
                            color: "#ffffff",
                            margin: "0 0 6px 0",
                          }}
                        >
                          {c.attendeeName}
                        </h3>

                        <div style={{ fontSize: "13px", fontWeight: 600, color: "#cccccc", marginBottom: "6px" }}>
                          {c.type}
                        </div>

                        <div style={{ fontSize: "12px", color: "#aaaaaa", marginBottom: "14px" }}>
                          📅 {c.date} at {c.time} · {c.format}
                        </div>

                        <p style={{ fontSize: "12px", color: "#888888", lineHeight: 1.5, margin: 0 }}>
                          Notes: {c.notes}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div
                        style={{
                          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                          paddingTop: "14px",
                          marginTop: "16px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: "11px", color: "#aaaaaa" }}>{c.contactNumber}</span>
                        <div style={{ display: "flex", gap: "6px" }}>
                          {c.status === "scheduled" && (
                            <>
                              <button
                                onClick={() => handleUpdateConsultationStatus(c.id, "completed")}
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  border: "none",
                                  padding: "4px 8px",
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  borderRadius: "2px",
                                  cursor: "pointer",
                                }}
                              >
                                Complete
                              </button>
                              <button
                                onClick={() => handleUpdateConsultationStatus(c.id, "cancelled")}
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#aaaaaa",
                                  border: "1px solid rgba(255, 255, 255, 0.15)",
                                  padding: "4px 8px",
                                  fontSize: "11px",
                                  borderRadius: "2px",
                                  cursor: "pointer",
                                }}
                              >
                                Cancel
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ==========================================================
              TAB 6: HOMEPAGE BRAND SHOWCASE MANAGER
              ========================================================== */}
          {activeTab === "showcase" && (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", color: "#cccccc", margin: "0 0 6px 0" }}>
                  Control the verified client commercial campaigns displayed on the VISAGE homepage (Row 14).
                </p>
                <div style={{ fontSize: "12px", color: "#888888" }}>
                  Toggle homepage visibility or inspect models casted for each national and international campaign.
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                {showcase.map((camp) => (
                  <div
                    key={camp.id}
                    style={{
                      backgroundColor: "#0d0d0d",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={camp.coverImage}
                      alt={camp.brand}
                      style={{ width: "100%", height: "180px", objectFit: "cover" }}
                    />
                    <div style={{ padding: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#aaaaaa", textTransform: "uppercase" }}>
                          {camp.brand} · {camp.year}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            padding: "2px 6px",
                            borderRadius: "2px",
                            backgroundColor: camp.activeOnHomepage ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                            color: camp.activeOnHomepage ? "#ffffff" : "#666666",
                            fontWeight: 600,
                          }}
                        >
                          {camp.activeOnHomepage ? "LIVE ON HOMEPAGE" : "HIDDEN"}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--_typography---title-font)",
                          fontSize: "20px",
                          letterSpacing: "0.04em",
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                        }}
                      >
                        {camp.campaignTitle}
                      </h3>

                      <div style={{ fontSize: "12px", color: "#cccccc", marginBottom: "14px" }}>
                        Scope: {camp.productionScope}
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "14px" }}>
                        <span style={{ fontSize: "12px", color: "#aaaaaa" }}>
                          {camp.modelsCastedCount} VISAGE Models Casted
                        </span>
                        <button
                          onClick={() => handleToggleShowcaseCampaign(camp.id)}
                          style={{
                            backgroundColor: camp.activeOnHomepage ? "transparent" : "#ffffff",
                            color: camp.activeOnHomepage ? "#ffffff" : "#000000",
                            border: camp.activeOnHomepage ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                            borderRadius: "3px",
                            padding: "5px 12px",
                            fontSize: "11px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          {camp.activeOnHomepage ? "Hide from Home" : "Show on Home"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================================
              TAB 7: SYSTEM CONFIGURATION & FINANCIAL RULES
              ========================================================== */}
          {activeTab === "settings" && (
            <div style={{ maxWidth: "800px" }}>
              <div
                style={{
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  padding: "28px",
                  marginBottom: "24px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--_typography---title-font)",
                    fontSize: "22px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 20px 0",
                    color: "#ffffff",
                  }}
                >
                  Platform Pricing &amp; Commission Architecture
                </h2>

                <form onSubmit={handleSaveConfig}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "6px" }}>
                        Model Registration Fee (LKR)
                      </label>
                      <input
                        type="number"
                        value={config.modelRegistrationFeeLKR}
                        onChange={(e) => setConfig({ ...config, modelRegistrationFeeLKR: Number(e.target.value) })}
                        style={{
                          width: "100%",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          padding: "10px",
                          color: "#ffffff",
                          fontSize: "14px",
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "#888888", display: "block", marginTop: "4px" }}>
                        Covers studio portfolio shoot &amp; WhatsApp casting notification gateway
                      </span>
                    </div>

                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "6px" }}>
                        Director / Client Listing Fee (LKR)
                      </label>
                      <input
                        type="number"
                        value={config.directorListingFeeLKR}
                        onChange={(e) => setConfig({ ...config, directorListingFeeLKR: Number(e.target.value) })}
                        style={{
                          width: "100%",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          padding: "10px",
                          color: "#ffffff",
                          fontSize: "14px",
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "#888888", display: "block", marginTop: "4px" }}>
                        Per-casting brief fee (moderated until payment receipt verified)
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "6px" }}>
                        Agency Commission (%)
                      </label>
                      <input
                        type="number"
                        value={config.agencyCommissionPercent}
                        onChange={(e) => setConfig({ ...config, agencyCommissionPercent: Number(e.target.value) })}
                        style={{
                          width: "100%",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          padding: "10px",
                          color: "#ffffff",
                          fontSize: "14px",
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "#888888", display: "block", marginTop: "4px" }}>
                        Default 20% commission on commercial, TVC, and runway bookings
                      </span>
                    </div>

                    <div>
                      <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "6px" }}>
                        Monthly Photo Refresh Window (Days)
                      </label>
                      <input
                        type="number"
                        value={config.monthlyPhotoGraceDays}
                        onChange={(e) => setConfig({ ...config, monthlyPhotoGraceDays: Number(e.target.value) })}
                        style={{
                          width: "100%",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          padding: "10px",
                          color: "#ffffff",
                          fontSize: "14px",
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "#888888", display: "block", marginTop: "4px" }}>
                        Models with digitals older than this window are placed ON HOLD
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "none",
                      padding: "10px 24px",
                      fontSize: "12px",
                      fontWeight: 700,
                      borderRadius: "3px",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Save Operational Settings
                  </button>
                </form>
              </div>

              {/* Danger & Maintenance Zone */}
              <div
                style={{
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  padding: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>
                    Sandbox Data State Controls
                  </div>
                  <div style={{ fontSize: "12px", color: "#888888", marginTop: "4px" }}>
                    Export a portable JSON database snapshot or restore pristine initial seed states.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={handleExportFullDatabase}
                    style={{
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      padding: "8px 16px",
                      fontSize: "12px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Export Full JSON
                  </button>
                  <button
                    onClick={handleResetToSeedData}
                    style={{
                      backgroundColor: "transparent",
                      color: "#f5a3a3",
                      border: "1px solid rgba(245, 163, 163, 0.3)",
                      padding: "8px 16px",
                      fontSize: "12px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Reset to Seed Data
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ==============================================================
          MODAL: MODEL INSPECTION & 3-PHOTO DIGITALS VIEWER
          ============================================================== */}
      {selectedModel && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "4px",
              maxWidth: "840px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#aaaaaa", textTransform: "uppercase" }}>
                  {selectedModel.division} · ID: {selectedModel.id}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--_typography---title-font)",
                    fontSize: "28px",
                    letterSpacing: "0.04em",
                    color: "#ffffff",
                    margin: "4px 0",
                  }}
                >
                  {selectedModel.name}
                </h2>
                <div style={{ fontSize: "13px", color: "#cccccc" }}>
                  {selectedModel.age} Yrs · {selectedModel.gender} · {selectedModel.skinToneLabel} · Languages: {selectedModel.languages.join(", ")}
                </div>
              </div>

              <button
                onClick={() => setSelectedModel(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#aaaaaa",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            {/* 3 MANDATORY CURRENT LOOK PHOTOS (ROW 5 AUDIT PROOF) */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffffff", marginBottom: "12px", fontWeight: 600 }}>
                Mandatory Current Look Digitals (3 Required)
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#aaaaaa", marginBottom: "4px" }}>01. Face Close-Up</div>
                  <img
                    src={selectedModel.photos.closeUp}
                    alt="Close-up headshot"
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "2px" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#aaaaaa", marginBottom: "4px" }}>02. Mid-Shot Profile</div>
                  <img
                    src={selectedModel.photos.midShot}
                    alt="Mid-shot"
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "2px" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#aaaaaa", marginBottom: "4px" }}>03. Full-Body Stance</div>
                  <img
                    src={selectedModel.photos.fullBody}
                    alt="Full body"
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "2px" }}
                  />
                </div>
              </div>
            </div>

            {/* Physical Specs & 30-Day Check */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "16px",
                borderRadius: "3px",
                marginBottom: "24px",
                fontSize: "13px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>Height: <strong>{selectedModel.stats.heightFt} ({selectedModel.stats.heightCm}cm)</strong></div>
              <div>Shoe: <strong>{selectedModel.stats.shoe}</strong></div>
              <div>Bust/Chest: <strong>{selectedModel.stats.bust}</strong></div>
              <div>Waist: <strong>{selectedModel.stats.waist}</strong></div>
              <div>Hips: <strong>{selectedModel.stats.hips}</strong></div>
              <div>Eye Color: <strong>{selectedModel.stats.eyes}</strong></div>
              <div>Hair: <strong>{selectedModel.stats.hair}</strong></div>
              <div>Piercings/Tattoos: <strong>{selectedModel.piercings} / {selectedModel.tattoos}</strong></div>
            </div>

            {/* Admin Action Drawer */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "18px" }}>
              <button
                onClick={() => handleDeleteModel(selectedModel.id)}
                style={{
                  background: "transparent",
                  color: "#f5a3a3",
                  border: "1px solid rgba(245, 163, 163, 0.3)",
                  padding: "8px 16px",
                  fontSize: "12px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Archive Profile
              </button>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleRequestPhotoRefresh(selectedModel.id)}
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    padding: "8px 16px",
                    fontSize: "12px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Dispatch WhatsApp 30-Day Reminder
                </button>

                {selectedModel.status === "on-hold" ? (
                  <button
                    onClick={() => handleUpdateModelStatus(selectedModel.id, "active")}
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "none",
                      padding: "8px 16px",
                      fontSize: "12px",
                      fontWeight: 700,
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Lift Hold &amp; Approve Look
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateModelStatus(selectedModel.id, "on-hold")}
                    style={{
                      backgroundColor: "transparent",
                      color: "#aaaaaa",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      padding: "8px 16px",
                      fontSize: "12px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Place On Hold
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          MODAL: ADD MODEL DIRECTLY
          ============================================================== */}
      {showAddModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "4px",
              maxWidth: "600px",
              width: "100%",
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2
                style={{
                  fontFamily: "var(--_typography---title-font)",
                  fontSize: "24px",
                  letterSpacing: "0.06em",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Add Model to Talent Board
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                style={{ background: "transparent", border: "none", color: "#aaaaaa", fontSize: "20px", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateNewModel}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newModelName}
                  onChange={(e) => setNewModelName(e.target.value)}
                  placeholder="e.g. Maya Senanayake"
                  style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                    Division
                  </label>
                  <select
                    value={newModelDivision}
                    onChange={(e) => setNewModelDivision(e.target.value as "VISAGE WOMEN" | "VISAGE MEN" | "DEVELOPMENT" | "CLASSIC & ICON")}
                    style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                  >
                    <option value="VISAGE WOMEN">VISAGE WOMEN</option>
                    <option value="VISAGE MEN">VISAGE MEN</option>
                    <option value="DEVELOPMENT">DEVELOPMENT</option>
                    <option value="CLASSIC & ICON">CLASSIC &amp; ICON</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                    Gender
                  </label>
                  <select
                    value={newModelGender}
                    onChange={(e) => setNewModelGender(e.target.value as "women" | "men" | "non-binary")}
                    style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                  >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="non-binary">Non-Binary</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px", marginBottom: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                    Age
                  </label>
                  <input
                    type="number"
                    value={newModelAge}
                    onChange={(e) => setNewModelAge(Number(e.target.value))}
                    style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                    Skin Tone
                  </label>
                  <select
                    value={newModelSkinTone}
                    onChange={(e) => setNewModelSkinTone(e.target.value as "fair" | "light" | "medium" | "tan" | "amber" | "ebony")}
                    style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                  >
                    <option value="fair">Fair</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium / Wheatish</option>
                    <option value="tan">Tan / Sunlit Bronze</option>
                    <option value="amber">Warm Amber</option>
                    <option value="ebony">Deep Ebony</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                    Height
                  </label>
                  <input
                    type="text"
                    value={newModelHeight}
                    onChange={(e) => setNewModelHeight(e.target.value)}
                    placeholder="5'10&quot;"
                    style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaaaaa", display: "block", marginBottom: "4px" }}>
                  Digital Photo Preview URL
                </label>
                <input
                  type="url"
                  value={newModelPhoto}
                  onChange={(e) => setNewModelPhoto(e.target.value)}
                  style={{ width: "100%", backgroundColor: "#161616", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "3px", padding: "10px", color: "#ffffff" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={{ background: "transparent", color: "#aaaaaa", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "8px 16px", borderRadius: "3px", cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: "#ffffff", color: "#000000", border: "none", padding: "8px 20px", fontWeight: 700, borderRadius: "3px", cursor: "pointer" }}
                >
                  Publish to Model Bank
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==============================================================
          MODAL: APPLICANTS VIEWER FOR A SPECIFIC CASTING
          ============================================================== */}
      {activeCastingForApplicants && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "4px",
              maxWidth: "760px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#aaaaaa", textTransform: "uppercase" }}>
                  Applicant Submissions
                </span>
                <h2
                  style={{
                    fontFamily: "var(--_typography---title-font)",
                    fontSize: "24px",
                    letterSpacing: "0.04em",
                    color: "#ffffff",
                    margin: "4px 0",
                  }}
                >
                  {activeCastingForApplicants.title}
                </h2>
                <div style={{ fontSize: "12px", color: "#cccccc" }}>
                  Client: {activeCastingForApplicants.brand} · Rate: {activeCastingForApplicants.rate}
                </div>
              </div>

              <button
                onClick={() => setActiveCastingForApplicants(null)}
                style={{ background: "transparent", border: "none", color: "#aaaaaa", fontSize: "20px", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            {/* Applicants List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
              {applicants.filter((a) => a.castingId === activeCastingForApplicants.id).length === 0 ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#888888" }}>
                  No models have submitted applications to this brief yet. Dispatch a WhatsApp blast to notify registered talent.
                </div>
              ) : (
                applicants
                  .filter((a) => a.castingId === activeCastingForApplicants.id)
                  .map((app) => (
                    <div
                      key={app.id}
                      style={{
                        padding: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "3px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <img
                          src={app.talentPhoto}
                          alt={app.talentName}
                          style={{ width: "48px", height: "58px", objectFit: "cover", borderRadius: "2px" }}
                        />
                        <div>
                          <div style={{ fontWeight: 600, color: "#ffffff", fontSize: "15px" }}>{app.talentName}</div>
                          <div style={{ fontSize: "11px", color: "#888888" }}>
                            Applied: {new Date(app.appliedAt).toLocaleDateString()} · Status: <span style={{ color: "#ffffff", textTransform: "uppercase" }}>{app.status}</span>
                          </div>
                          {app.adminNotes && (
                            <div style={{ fontSize: "12px", color: "#aaaaaa", marginTop: "2px" }}>
                              Note: {app.adminNotes}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => handleUpdateApplicantStatus(app.id, "shortlisted")}
                          style={{
                            backgroundColor: "transparent",
                            color: "#ffffff",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            padding: "6px 10px",
                            fontSize: "11px",
                            borderRadius: "2px",
                            cursor: "pointer",
                          }}
                        >
                          Shortlist
                        </button>
                        <button
                          onClick={() => handleUpdateApplicantStatus(app.id, "booked")}
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "none",
                            padding: "6px 12px",
                            fontSize: "11px",
                            fontWeight: 700,
                            borderRadius: "2px",
                            cursor: "pointer",
                          }}
                        >
                          Book Talent
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          MODAL: WHATSAPP BROADCAST BLAST
          ============================================================== */}
      {showWhatsAppBlastModal && blastTargetCasting && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "4px",
              maxWidth: "520px",
              width: "100%",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--_typography---title-font)",
                fontSize: "24px",
                letterSpacing: "0.06em",
                color: "#ffffff",
                margin: "0 0 10px 0",
              }}
            >
              Dispatch Instant WhatsApp Casting Alert
            </h2>

            <p style={{ fontSize: "13px", color: "#cccccc", lineHeight: 1.6, marginBottom: "20px" }}>
              This will trigger a direct WhatsApp message with a 1-click apply link to all{" "}
              <strong>{models.filter((m) => m.status === "active").length} active registered models</strong> whose profile specifications match this brief.
            </p>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "16px",
                borderRadius: "3px",
                fontSize: "12px",
                color: "#aaaaaa",
                fontFamily: "monospace",
                marginBottom: "24px",
              }}
            >
              [VISAGE CASTING ALERT]<br />
              New Casting: {blastTargetCasting.title}<br />
              Brand: {blastTargetCasting.brand}<br />
              Rate: {blastTargetCasting.rate}<br />
              Link: https://visagestudio.com/castings?apply={blastTargetCasting.id}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setShowWhatsAppBlastModal(false)}
                style={{ background: "transparent", color: "#aaaaaa", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "8px 16px", borderRadius: "3px", cursor: "pointer" }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDispatchWhatsAppBlast(blastTargetCasting)}
                style={{ backgroundColor: "#ffffff", color: "#000000", border: "none", padding: "8px 20px", fontWeight: 700, borderRadius: "3px", cursor: "pointer" }}
              >
                Dispatch Blast Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          MODAL: TALENT AGREEMENT CONTRACT INSPECTOR
          ============================================================== */}
      {selectedAgreement && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "4px",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#aaaaaa", textTransform: "uppercase" }}>
                  Binding 3-Year Agreement · Ref: {selectedAgreement.id}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--_typography---title-font)",
                    fontSize: "26px",
                    letterSpacing: "0.04em",
                    color: "#ffffff",
                    margin: "4px 0",
                  }}
                >
                  {selectedAgreement.talentName}
                </h2>
                <div style={{ fontSize: "13px", color: "#cccccc" }}>
                  Legal: {selectedAgreement.legalFullName} · NIC/Passport: {selectedAgreement.nicPassport}
                </div>
              </div>

              <button
                onClick={() => setSelectedAgreement(null)}
                style={{ background: "transparent", border: "none", color: "#aaaaaa", fontSize: "20px", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "20px",
                borderRadius: "3px",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#cccccc",
                marginBottom: "20px",
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                <strong>Section 1: 3-Year Exclusivity</strong><br />
                Model acknowledges strictly 36 consecutive months of exclusive representation under VISAGE. Direct bookings or promotions with unauthorized third parties are strictly prohibited.
              </div>
              <div>
                <strong>Section 2: Breach &amp; Liquidated Damages</strong><br />
                Any unauthorized booking shall result in immediate agreement termination and legal recovery of management fees and photoshoot production costs, assessed at{" "}
                <span style={{ color: "#ffffff", fontWeight: 700 }}>LKR {selectedAgreement.recoupmentFineCalculated.toLocaleString()}</span>.
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "12px", color: "#888888" }}>
                Signed: {new Date(selectedAgreement.signedAt).toLocaleDateString()}
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => window.print()}
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    padding: "8px 16px",
                    fontSize: "12px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Print Legal PDF
                </button>
                <button
                  onClick={() => setSelectedAgreement(null)}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "none",
                    padding: "8px 16px",
                    fontSize: "12px",
                    fontWeight: 700,
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
