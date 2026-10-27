"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MODEL_BANK_TALENT, ModelBankTalent } from "@/data/castingData";

const SKIN_TONES = [
  { id: "all", label: "All Tones", color: "transparent" },
  { id: "fair", label: "Fair / Porcelain", color: "#f8e6d8" },
  { id: "light", label: "Warm Light", color: "#e8c8a8" },
  { id: "medium", label: "Olive / Medium", color: "#c59a6f" },
  { id: "tan", label: "Sunlit Tan", color: "#a5734c" },
  { id: "amber", label: "Deep Amber", color: "#6f4327" },
  { id: "ebony", label: "Rich Ebony", color: "#362016" },
];

const DIVISIONS = [
  { id: "all", label: "All Categories" },
  { id: "runway", label: "Runway & Haute Couture" },
  { id: "editorial", label: "Editorial & Covers" },
  { id: "commercial", label: "Commercial & Movement" },
  { id: "alternative", label: "Alternative & Avant-Garde" },
];

const GENDERS = [
  { id: "all", label: "All Genders" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "non-binary", label: "Non-Binary / Fluid" },
];

const AGE_BRACKETS = [
  { id: "all", label: "All Ages" },
  { id: "youth", label: "Youth (18–20)" },
  { id: "prime", label: "Prime (21–34)" },
  { id: "mature", label: "Mature (35–49)" },
  { id: "silver", label: "Silver / Classic (50+)" },
];

const ALL_LANGUAGES = [
  "English",
  "French",
  "Italian",
  "Spanish",
  "German",
  "Portuguese",
  "Japanese",
  "Korean",
  "Swahili",
  "Wolof",
];

export default function ModelBankPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkinTone, setSelectedSkinTone] = useState("all");
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedAgeBracket, setSelectedAgeBracket] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [minHeightCm, setMinHeightCm] = useState<number>(170);

  // Shortlist / Option Basket State
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [shortlistOpen, setShortlistOpen] = useState(false);
  const [shortlistSuccess, setShortlistSuccess] = useState(false);

  // Comp-card modal state
  const [activeCompCard, setActiveCompCard] = useState<ModelBankTalent | null>(null);
  const [activePhotoTab, setActivePhotoTab] = useState<"closeUp" | "midShot" | "fullBody" | "video">("closeUp");

  // Filtered talent
  const filteredTalent = useMemo(() => {
    return MODEL_BANK_TALENT.filter((talent) => {
      if (searchTerm.trim() !== "") {
        const q = searchTerm.toLowerCase();
        const matchesName = talent.name.toLowerCase().includes(q);
        const matchesBureau = talent.bureau.toLowerCase().includes(q);
        const matchesLook = talent.lookAesthetic.toLowerCase().includes(q);
        const matchesLang = talent.languages.some((l) => l.toLowerCase().includes(q));
        if (!matchesName && !matchesBureau && !matchesLook && !matchesLang) {
          return false;
        }
      }

      if (selectedSkinTone !== "all" && talent.skinTone !== selectedSkinTone) {
        return false;
      }

      if (selectedDivision !== "all" && talent.lookAesthetic !== selectedDivision) {
        return false;
      }

      if (selectedGender !== "all" && talent.gender !== selectedGender) {
        return false;
      }

      if (selectedAgeBracket !== "all" && talent.ageBracket !== selectedAgeBracket) {
        return false;
      }

      if (selectedLanguage !== "all" && !talent.languages.includes(selectedLanguage)) {
        return false;
      }

      if (talent.stats.heightCm < minHeightCm) {
        return false;
      }

      return true;
    });
  }, [
    searchTerm,
    selectedSkinTone,
    selectedDivision,
    selectedGender,
    selectedAgeBracket,
    selectedLanguage,
    minHeightCm,
  ]);

  const toggleShortlist = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setShortlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRequestHold = () => {
    setShortlistSuccess(true);
    setTimeout(() => {
      setShortlistSuccess(false);
      setShortlistOpen(false);
      setShortlist([]);
    }, 3200);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSkinTone("all");
    setSelectedDivision("all");
    setSelectedGender("all");
    setSelectedAgeBracket("all");
    setSelectedLanguage("all");
    setMinHeightCm(170);
  };

  const shortlistedModels = useMemo(() => {
    return MODEL_BANK_TALENT.filter((t) => shortlist.includes(t.id));
  }, [shortlist]);

  return (
    <div style={{ backgroundColor: "#050505", color: "#f0f0f0", minHeight: "100vh" }}>
      <Navbar variant="dark" />

      {/* HEADER HERO */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "48px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "#030303",
        }}
      >
        <div className="container" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 12px",
                  borderRadius: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#a0a0a0",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    display: "inline-block",
                  }}
                />
                Director Casting Engine • Verified Live Roster
              </div>
              <h1
                style={{
                  fontSize: "clamp(34px, 5vw, 68px)",
                  fontFamily: "var(--font-big-shoulders, 'Big Shoulders Display', sans-serif)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  lineHeight: 0.95,
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Model Bank &amp; Talent Index
              </h1>
              <p
                style={{
                  maxWidth: "680px",
                  fontSize: "15px",
                  color: "#8c8c8c",
                  marginTop: "16px",
                  lineHeight: 1.6,
                }}
              >
                Filter the VISAGE international roster across skin tones, physical specifications,
                spoken languages, and runway aesthetics. All talent profiles feature 30-day verified
                digital polaroids and direct option availability.
              </p>
            </div>

            {/* Quick Actions & Membership Gate Notice */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: "3px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "13px",
                  color: "#bbbbbb",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 600 }}>Director &amp; Agency Privilege</div>
                  <div style={{ fontSize: "12px", color: "#777777" }}>
                    Verified bookers enjoy full digital comp-cards and priority option holds.
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  href="/contact-us"
                  className="society-division-tab"
                  style={{
                    padding: "9px 18px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "2px",
                  }}
                >
                  Direct Agency Booking ↗
                </Link>
                <Link
                  href="/model-registration"
                  className="society-division-tab is-active"
                  style={{
                    padding: "9px 18px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: "2px",
                  }}
                >
                  Join Roster as Talent +
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS BAR */}
      <section
        style={{
          position: "sticky",
          top: "0px",
          zIndex: 90,
          backgroundColor: "rgba(8, 8, 8, 0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "16px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
          {/* Main search + primary filters row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              alignItems: "center",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search talent name, city, tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 36px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "2px",
                  color: "#ffffff",
                  fontSize: "13px",
                  outline: "none",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#777777",
                  display: "flex",
                  alignItems: "center",
                  pointerEvents: "none",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </div>

            {/* Division Filter */}
            <div>
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "2px",
                  color: "#ffffff",
                  fontSize: "13px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {DIVISIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Gender Filter */}
            <div>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "2px",
                  color: "#ffffff",
                  fontSize: "13px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {GENDERS.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Bracket */}
            <div>
              <select
                value={selectedAgeBracket}
                onChange={(e) => setSelectedAgeBracket(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "2px",
                  color: "#ffffff",
                  fontSize: "13px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {AGE_BRACKETS.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  backgroundColor: "#0d0d0d",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "2px",
                  color: "#ffffff",
                  fontSize: "13px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="all">All Spoken Languages</option>
                {ALL_LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Skin Tone Swatches & Height Filter */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginTop: "14px",
              paddingTop: "14px",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Skin Tone Swatches */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", color: "#777777", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Skin Tone:
              </span>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {SKIN_TONES.map((st) => {
                  const isActive = selectedSkinTone === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedSkinTone(st.id)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 10px",
                        borderRadius: "2px",
                        backgroundColor: isActive ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.03)",
                        border: isActive ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: isActive ? "#ffffff" : "#a0a0a0",
                        fontSize: "11px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {st.id !== "all" && (
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: st.color,
                            display: "inline-block",
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                        />
                      )}
                      <span>{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Height Slider & Clear */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "12px", color: "#777777" }}>
                  Min Height: <strong style={{ color: "#ffffff" }}>{minHeightCm} cm</strong> ({Math.floor(minHeightCm / 30.48)}&apos;{Math.round((minHeightCm % 30.48) / 2.54)}&quot;)
                </span>
                <input
                  type="range"
                  min={168}
                  max={192}
                  value={minHeightCm}
                  onChange={(e) => setMinHeightCm(Number(e.target.value))}
                  style={{ accentColor: "#ffffff", cursor: "pointer" }}
                />
              </div>

              {(selectedSkinTone !== "all" ||
                selectedDivision !== "all" ||
                selectedGender !== "all" ||
                selectedAgeBracket !== "all" ||
                selectedLanguage !== "all" ||
                minHeightCm > 170 ||
                searchTerm.trim() !== "") && (
                <button
                  type="button"
                  onClick={resetFilters}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#ef4444",
                    fontSize: "12px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TALENT GRID */}
      <section style={{ padding: "40px 0 100px" }}>
        <div className="container" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
          {/* Results count & status summary */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: "13px", color: "#8c8c8c" }}>
              Showing <strong style={{ color: "#ffffff" }}>{filteredTalent.length}</strong> verified models in VISAGE roster
            </div>
            <div style={{ fontSize: "11px", color: "#666666", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#10b981" }} />
              All profiles verified within 30-day look cycle
            </div>
          </div>

          {filteredTalent.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                border: "1px dashed rgba(255, 255, 255, 0.15)",
                borderRadius: "4px",
              }}
            >
              <h3 style={{ fontSize: "20px", color: "#ffffff", margin: "0 0 8px" }}>No Models Found</h3>
              <p style={{ color: "#777777", fontSize: "14px", maxWidth: "420px", margin: "0 auto 20px" }}>
                We couldn&apos;t find talent matching that specific combination of criteria. Try loosening your skin tone, age, or height parameters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="society-division-tab is-active"
                style={{ padding: "8px 20px", fontSize: "12px", cursor: "pointer" }}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "28px 20px",
              }}
            >
              {filteredTalent.map((talent) => {
                const isShortlisted = shortlist.includes(talent.id);

                return (
                  <div
                    key={talent.id}
                    className="company-work-card"
                    style={{
                      position: "relative",
                      backgroundColor: "#0a0a0a",
                      borderRadius: "2px",
                      overflow: "hidden",
                      border: isShortlisted ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setActiveCompCard(talent);
                      setActivePhotoTab("closeUp");
                    }}
                  >
                    {/* Top Image Canvas with Hover Swatch */}
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "3/4",
                        width: "100%",
                        overflow: "hidden",
                        backgroundColor: "#141414",
                      }}
                    >
                      <img
                        src={talent.photos.closeUp}
                        alt={talent.name}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top center",
                          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />

                      {/* Division Badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          padding: "3px 8px",
                          borderRadius: "2px",
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          fontSize: "10px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#ffffff",
                        }}
                      >
                        {talent.division}
                      </div>

                      {/* Recertification 30-day Badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          padding: "3px 8px",
                          borderRadius: "2px",
                          backgroundColor: "rgba(16, 185, 129, 0.12)",
                          border: "1px solid rgba(16, 185, 129, 0.35)",
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#34d399",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#34d399" }} />
                        Look Verified
                      </div>

                      {/* Shortlist Pin Button */}
                      <button
                        type="button"
                        aria-label="Toggle shortlist"
                        onClick={(e) => toggleShortlist(talent.id, e)}
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: isShortlisted ? "#ffffff" : "rgba(0, 0, 0, 0.8)",
                          border: isShortlisted ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.25)",
                          color: isShortlisted ? "#000000" : "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        title={isShortlisted ? "Remove from Option Hold" : "Add to Director Option Hold"}
                      >
                        {isShortlisted ? "✓" : "+"}
                      </button>
                    </div>

                    {/* Talent Info Details */}
                    <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontFamily: "var(--font-big-shoulders, 'Big Shoulders Display', sans-serif)",
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.04em",
                              margin: 0,
                              color: "#ffffff",
                            }}
                          >
                            {talent.name}
                          </h3>
                          <span style={{ fontSize: "11px", color: "#8c8c8c" }}>{talent.bureau}</span>
                        </div>

                        <div style={{ fontSize: "12px", color: "#777777", marginBottom: "12px" }}>
                          {talent.recentBooking}
                        </div>

                        {/* Physical Spec Grid */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "8px",
                            padding: "10px",
                            borderRadius: "2px",
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.06)",
                            fontSize: "11px",
                            marginBottom: "14px",
                          }}
                        >
                          <div>
                            <span style={{ color: "#666666", display: "block" }}>Height</span>
                            <span style={{ color: "#ffffff", fontWeight: 600 }}>{talent.stats.heightFt}</span>
                          </div>
                          <div>
                            <span style={{ color: "#666666", display: "block" }}>Hair/Eyes</span>
                            <span style={{ color: "#ffffff", fontWeight: 600 }}>{talent.stats.hair.split(" ")[0]}</span>
                          </div>
                          <div>
                            <span style={{ color: "#666666", display: "block" }}>Bust/Waist</span>
                            <span style={{ color: "#ffffff", fontWeight: 600 }}>{talent.stats.bust}/{talent.stats.waist}</span>
                          </div>
                        </div>

                        {/* Languages pill tags */}
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
                          {talent.languages.map((l) => (
                            <span
                              key={l}
                              style={{
                                fontSize: "10px",
                                padding: "2px 7px",
                                borderRadius: "2px",
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                color: "#aaaaaa",
                              }}
                            >
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action footer */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: "12px",
                          borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#ffffff",
                            fontWeight: 600,
                          }}
                        >
                          View Comp-Card &amp; Reel ↗
                        </span>
                        <span style={{ fontSize: "11px", color: "#666666" }}>{talent.followers}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* FLOATING DIRECTOR OPTION BASKET TRAY */}
      {shortlist.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 999,
            backgroundColor: "#0d0d0d",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
            padding: "16px 20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
              {shortlist.length} {shortlist.length === 1 ? "Model" : "Models"} Selected
            </div>
            <div style={{ fontSize: "11px", color: "#8c8c8c" }}>
              In your Director Option / Hold package
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShortlistOpen(true)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Review Option Holds ↗
          </button>
        </div>
      )}

      {/* SHORTLIST REVIEW MODAL */}
      {shortlistOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(12px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShortlistOpen(false)}
        >
          <div
            style={{
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "4px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "28px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2
                style={{
                  fontSize: "24px",
                  fontFamily: "var(--font-big-shoulders, sans-serif)",
                  textTransform: "uppercase",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Director Option &amp; Hold Shortlist ({shortlistedModels.length})
              </h2>
              <button
                type="button"
                onClick={() => setShortlistOpen(false)}
                style={{ background: "transparent", border: "none", color: "#888888", fontSize: "18px", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            {shortlistSuccess ? (
              <div
                style={{
                  padding: "32px 20px",
                  textAlign: "center",
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: "2px",
                }}
              >
                <div style={{ fontSize: "28px", color: "#10b981", marginBottom: "12px" }}>✓</div>
                <h3 style={{ color: "#ffffff", fontSize: "18px", margin: "0 0 8px" }}>
                  Option Request Transmitted
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: "13px", margin: 0 }}>
                  A VISAGE senior agent will confirm talent availability and option holds within 2 hours.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                  {shortlistedModels.map((t) => (
                    <div
                      key={t.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "10px 14px",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "2px",
                      }}
                    >
                      <img
                        src={t.photos.closeUp}
                        alt={t.name}
                        style={{ width: "48px", height: "58px", objectFit: "cover", borderRadius: "2px" }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>{t.name}</div>
                        <div style={{ fontSize: "12px", color: "#777777" }}>
                          {t.division} • {t.stats.heightFt} ({t.stats.heightCm}cm) • {t.bureau}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleShortlist(t.id)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#ef4444",
                          fontSize: "12px",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="button"
                    onClick={handleRequestHold}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  >
                    Request Option Hold on {shortlistedModels.length} Models ↗
                  </button>
                  <button
                    type="button"
                    onClick={() => setShortlist([])}
                    style={{
                      padding: "12px 16px",
                      backgroundColor: "transparent",
                      color: "#888888",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Clear All
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* INTERACTIVE COMP-CARD LIGHTBOX MODAL */}
      {activeCompCard && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.94)",
            backdropFilter: "blur(18px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setActiveCompCard(null)}
        >
          <div
            style={{
              backgroundColor: "#080808",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "4px",
              maxWidth: "960px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveCompCard(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                background: "transparent",
                border: "none",
                color: "#a0a0a0",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {/* Header / Brand Watermark */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "24px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#888888",
                  }}
                >
                  VISAGE COMPOSITE DIGITAL CARD • {activeCompCard.division}
                </span>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontFamily: "var(--font-big-shoulders, sans-serif)",
                    textTransform: "uppercase",
                    fontWeight: 900,
                    margin: "4px 0 0",
                    color: "#ffffff",
                  }}
                >
                  {activeCompCard.name}
                </h2>
                <div style={{ fontSize: "13px", color: "#777777" }}>
                  {activeCompCard.bureau} • {activeCompCard.instagram} ({activeCompCard.followers})
                </div>
              </div>

              {/* Verified Look Badge */}
              <div
                style={{
                  padding: "6px 12px",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: "2px",
                  fontSize: "11px",
                  color: "#34d399",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textAlign: "right",
                }}
              >
                <div>✓ 30-Day Check-in Verified</div>
                <div style={{ fontSize: "10px", color: "#a7f3d0" }}>
                  {activeCompCard.daysUntilRecertification} days remaining in cycle
                </div>
              </div>
            </div>

            {/* 3 Mandatory Photo Slots + Video Reel Navigation */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <button
                type="button"
                onClick={() => setActivePhotoTab("closeUp")}
                className={`society-division-tab ${activePhotoTab === "closeUp" ? "is-active" : ""}`}
                style={{ padding: "6px 14px", fontSize: "11px", cursor: "pointer" }}
              >
                1. Face Close-Up
              </button>
              <button
                type="button"
                onClick={() => setActivePhotoTab("midShot")}
                className={`society-division-tab ${activePhotoTab === "midShot" ? "is-active" : ""}`}
                style={{ padding: "6px 14px", fontSize: "11px", cursor: "pointer" }}
              >
                2. Mid Shot
              </button>
              <button
                type="button"
                onClick={() => setActivePhotoTab("fullBody")}
                className={`society-division-tab ${activePhotoTab === "fullBody" ? "is-active" : ""}`}
                style={{ padding: "6px 14px", fontSize: "11px", cursor: "pointer" }}
              >
                3. Full Body
              </button>
              {activeCompCard.videoReel && (
                <button
                  type="button"
                  onClick={() => setActivePhotoTab("video")}
                  className={`society-division-tab ${activePhotoTab === "video" ? "is-active" : ""}`}
                  style={{ padding: "6px 14px", fontSize: "11px", cursor: "pointer" }}
                >
                  Walking Video Reel
                </button>
              )}
            </div>

            {/* Main Display Grid: Media Left, Specs Right */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                alignItems: "start",
              }}
            >
              {/* Media viewer */}
              <div
                style={{
                  aspectRatio: "3/4",
                  width: "100%",
                  backgroundColor: "#000000",
                  borderRadius: "2px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                }}
              >
                {activePhotoTab === "video" && activeCompCard.videoReel ? (
                  <video
                    src={activeCompCard.videoReel}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    src={
                      activePhotoTab === "midShot"
                        ? activeCompCard.photos.midShot
                        : activePhotoTab === "fullBody"
                        ? activeCompCard.photos.fullBody
                        : activeCompCard.photos.closeUp
                    }
                    alt={activeCompCard.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>

              {/* Specs & Full Data Sheet */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <h4
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#777777",
                      margin: "0 0 10px",
                    }}
                  >
                    Physical Measurements (Imperial &amp; Metric)
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      padding: "14px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "12px",
                    }}
                  >
                    <div>
                      <span style={{ color: "#777777" }}>Height:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>
                        {activeCompCard.stats.heightFt} ({activeCompCard.stats.heightCm} cm)
                      </strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Bust / Chest:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.stats.bust}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Waist:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.stats.waist}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Hips:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.stats.hips}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Shoe:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.stats.shoe}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Hair:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.stats.hair}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Eyes:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.stats.eyes}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Skin Tone:</span>{" "}
                      <strong style={{ color: "#ffffff" }}>{activeCompCard.skinToneLabel}</strong>
                    </div>
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#777777",
                      margin: "0 0 10px",
                    }}
                  >
                    Body Alterations &amp; Modifications
                  </h4>
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      padding: "12px 14px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div>
                      <span style={{ color: "#777777" }}>Piercings:</span>{" "}
                      <span style={{ color: "#dddddd" }}>{activeCompCard.piercings}</span>
                    </div>
                    <div>
                      <span style={{ color: "#777777" }}>Tattoos:</span>{" "}
                      <span style={{ color: "#dddddd" }}>{activeCompCard.tattoos}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#777777",
                      margin: "0 0 10px",
                    }}
                  >
                    Spoken Languages &amp; Dialects
                  </h4>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {activeCompCard.languages.map((lang) => (
                      <span
                        key={lang}
                        style={{
                          padding: "4px 10px",
                          borderRadius: "2px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "11px",
                          color: "#ffffff",
                        }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions inside modal */}
                <div style={{ display: "flex", gap: "10px", marginTop: "auto", paddingTop: "14px" }}>
                  <button
                    type="button"
                    onClick={(e) => toggleShortlist(activeCompCard.id, e)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: shortlist.includes(activeCompCard.id) ? "#10b981" : "#ffffff",
                      color: shortlist.includes(activeCompCard.id) ? "#ffffff" : "#000000",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  >
                    {shortlist.includes(activeCompCard.id)
                      ? "✓ In Option Hold"
                      : "+ Add to Director Option Hold"}
                  </button>
                  <Link
                    href={`/contact-us?talent=${encodeURIComponent(activeCompCard.name)}`}
                    className="society-division-tab"
                    style={{
                      padding: "12px 18px",
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "2px",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    Book Inquiries ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
