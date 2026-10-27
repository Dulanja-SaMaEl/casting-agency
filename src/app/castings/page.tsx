"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASTING_CALLS, CastingCall } from "@/data/castingData";

const CATEGORIES = [
  "All Opportunities",
  "Editorial",
  "Runway",
  "Commercial",
  "Film & Video",
  "Alternative",
];

export default function CastingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Opportunities");
  const [memberRole, setMemberRole] = useState<"free" | "registered">("registered");
  const [searchQuery, setSearchQuery] = useState("");

  // Apply modal state
  const [applyingCall, setApplyingCall] = useState<CastingCall | null>(null);
  const [talentIdInput, setTalentIdInput] = useState("VSG-2026-7842");
  const [applySuccess, setApplySuccess] = useState(false);

  // Director Post Casting Modal State
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [postForm, setPostForm] = useState({
    title: "",
    brand: "",
    category: "Editorial",
    rate: "$3,500 / Day",
    location: "New York Studio",
    shootDates: "Dec 15 – Dec 18, 2026",
    deadline: "Dec 01, 2026",
    gender: "All Genders",
    heightMin: "5'9\"+",
    description: "",
  });
  const [postSubmitted, setPostSubmitted] = useState(false);

  // WhatsApp Alert Simulation Modal
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppTargetCall, setWhatsAppTargetCall] = useState<CastingCall | null>(null);

  // Filtered Calls
  const filteredCalls = useMemo(() => {
    return CASTING_CALLS.filter((call) => {
      if (
        selectedCategory !== "All Opportunities" &&
        call.category !== selectedCategory
      ) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = call.title.toLowerCase().includes(q);
        const matchesBrand = call.brand.toLowerCase().includes(q);
        const matchesLocation = call.location.toLowerCase().includes(q);
        if (!matchesTitle && !matchesBrand && !matchesLocation) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyingCall(null);
    }, 2800);
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPostSubmitted(true);
    setTimeout(() => {
      setPostSubmitted(false);
      setPostModalOpen(false);
    }, 3200);
  };

  const openWhatsAppPreview = (call: CastingCall) => {
    setWhatsAppTargetCall(call);
    setWhatsAppModalOpen(true);
  };

  return (
    <div style={{ backgroundColor: "#060606", color: "#f3f3f3", minHeight: "100vh" }}>
      <Navbar variant="dark" />

      {/* HERO BANNER */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "52px",
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
              gap: "28px",
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
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
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
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    display: "inline-block",
                  }}
                />
                Live Production &amp; Fashion Casting Board
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
                Casting Calls &amp; Opportunities
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
                Verified casting opportunities from top fashion houses, editorial publications, and
                commercial brands. Registered VISAGE members apply with 1-click and receive direct
                WhatsApp casting broadcasts when postings match their look specs.
              </p>
            </div>

            {/* Membership Switcher Simulation Pill + Post Casting Button */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              {/* Simulation Mode Toggle */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "6px 10px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "4px",
                }}
              >
                <span style={{ fontSize: "11px", color: "#888888", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Membership Mode:
                </span>
                <button
                  type="button"
                  onClick={() => setMemberRole("registered")}
                  style={{
                    padding: "5px 12px",
                    fontSize: "11px",
                    borderRadius: "2px",
                    border: "none",
                    backgroundColor: memberRole === "registered" ? "#ffffff" : "transparent",
                    color: memberRole === "registered" ? "#000000" : "#888888",
                    fontWeight: memberRole === "registered" ? 700 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Registered Member (Direct Apply)
                </button>
                <button
                  type="button"
                  onClick={() => setMemberRole("free")}
                  style={{
                    padding: "5px 12px",
                    fontSize: "11px",
                    borderRadius: "2px",
                    border: "none",
                    backgroundColor: memberRole === "free" ? "#ffffff" : "transparent",
                    color: memberRole === "free" ? "#000000" : "#888888",
                    fontWeight: memberRole === "free" ? 700 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Free Tier (Preview Only)
                </button>
              </div>

              {/* Director Action */}
              <button
                type="button"
                onClick={() => setPostModalOpen(true)}
                className="society-division-tab active"
                style={{
                  padding: "10px 22px",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "3px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Post a Casting Call (Directors)</span>
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS & SEARCH */}
      <section
        style={{
          position: "sticky",
          top: "0px",
          zIndex: 90,
          backgroundColor: "rgba(10, 10, 10, 0.94)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "16px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            {/* Category tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`society-division-tab ${isActive ? "active" : ""}`}
                    style={{
                      padding: "8px 16px",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      cursor: "pointer",
                      borderRadius: "3px",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword search input */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <input
                type="text"
                placeholder="Search brief, brand, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 14px 8px 32px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "3px",
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
          </div>
        </div>
      </section>

      {/* CASTINGS LIST */}
      <section style={{ padding: "40px 0 100px" }}>
        <div className="container" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
          {/* Member Banner Prompt if in Free Mode */}
          {memberRole === "free" && (
            <div
              style={{
                marginBottom: "32px",
                padding: "20px 24px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "4px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                  Currently Browsing as: Free Model Tier (View Only)
                </div>
                <div style={{ fontSize: "13px", color: "#8c8c8c", maxWidth: "680px" }}>
                  Free accounts can browse active castings. To unlock direct 1-click apply, included studio
                  digitals, and instant WhatsApp casting alerts, complete the model registration portal.
                </div>
              </div>
              <Link
                href="/model-registration"
                className="society-division-tab active"
                style={{
                  padding: "10px 20px",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  borderRadius: "3px",
                  whiteSpace: "nowrap",
                }}
              >
                Register &amp; Unlock Direct Apply ↗
              </Link>
            </div>
          )}

          {/* Cards Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {filteredCalls.map((call) => (
              <div
                key={call.id}
                style={{
                  backgroundColor: "#0d0d0d",
                  border: call.featured
                    ? "1px solid rgba(255, 255, 255, 0.22)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "4px",
                  padding: "28px 32px",
                  position: "relative",
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Header row: Category + Rate + Deadline */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: "2px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      {call.category}
                    </span>
                    <span style={{ fontSize: "12px", color: "#666666" }}>
                      Ref #{call.id} • {call.applicantCount} applicants submitted
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#10b981" }}>
                      {call.rate}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#ef4444",
                        padding: "3px 8px",
                        borderRadius: "2px",
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        border: "1px solid rgba(239, 68, 68, 0.25)",
                      }}
                    >
                      Closes: {call.deadline}
                    </div>
                  </div>
                </div>

                {/* Title & Brand */}
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#888888",
                      marginBottom: "4px",
                    }}
                  >
                    {call.brand}
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontFamily: "var(--font-big-shoulders, sans-serif)",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      margin: 0,
                      color: "#ffffff",
                    }}
                  >
                    {call.title}
                  </h2>
                </div>

                {/* Description */}
                <p style={{ fontSize: "14px", color: "#a0a0a0", lineHeight: 1.6, margin: "0 0 20px" }}>
                  {call.description}
                </p>

                {/* Specs & Shoot Info Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    padding: "16px",
                    borderRadius: "3px",
                    fontSize: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <span style={{ color: "#666666", display: "block" }}>Location:</span>
                    <strong style={{ color: "#ffffff" }}>{call.location}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#666666", display: "block" }}>Shoot Dates:</span>
                    <strong style={{ color: "#ffffff" }}>{call.shootDates}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#666666", display: "block" }}>Height Spec:</span>
                    <strong style={{ color: "#ffffff" }}>{call.demographics.heightMin}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#666666", display: "block" }}>Target Looks:</span>
                    <strong style={{ color: "#ffffff" }}>{call.demographics.complexion}</strong>
                  </div>
                </div>

                {/* Requirements bullet list */}
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#777777",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Production Requirements:
                  </span>
                  <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", color: "#8c8c8c" }}>
                    {call.requirements.map((req, idx) => (
                      <li key={idx} style={{ marginBottom: "4px" }}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Row */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "14px",
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {/* WhatsApp Simulation Trigger */}
                  <button
                    type="button"
                    onClick={() => openWhatsAppPreview(call)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#10b981",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Preview Model WhatsApp Broadcast Alert ↗</span>
                  </button>

                  {/* Apply Actions based on Member Tier */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    {memberRole === "registered" ? (
                      <button
                        type="button"
                        onClick={() => setApplyingCall(call)}
                        style={{
                          padding: "10px 24px",
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          fontWeight: 700,
                          fontSize: "12px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          border: "none",
                          borderRadius: "2px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span>1-Click Direct Apply</span>
                        <span>↗</span>
                      </button>
                    ) : (
                      <Link
                        href="/model-registration"
                        className="society-division-tab"
                        style={{
                          padding: "10px 20px",
                          fontSize: "12px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRadius: "2px",
                          color: "#aaaaaa",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span>Register as Model to Direct Apply</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1-CLICK APPLY MODAL */}
      {applyingCall && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(14px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setApplyingCall(null)}
        >
          <div
            style={{
              backgroundColor: "#0d0d0d",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "6px",
              maxWidth: "540px",
              width: "100%",
              padding: "32px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setApplyingCall(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "18px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#888888",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {applySuccess ? (
              <div style={{ textAlign: "center", padding: "28px 10px" }}>
                <div style={{ fontSize: "40px", color: "#10b981", marginBottom: "14px" }}>✓</div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontFamily: "var(--font-big-shoulders, sans-serif)",
                    textTransform: "uppercase",
                    margin: "0 0 8px",
                    color: "#ffffff",
                  }}
                >
                  Application Transmitted
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
                  Your verified 3-shot comp-card and video reel have been submitted to{" "}
                  <strong style={{ color: "#ffffff" }}>{applyingCall.brand}</strong>. A casting confirmation
                  has been routed to your WhatsApp number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit}>
                <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888888" }}>
                  1-Click Talent Submission
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontFamily: "var(--font-big-shoulders, sans-serif)",
                    textTransform: "uppercase",
                    margin: "4px 0 16px",
                    color: "#ffffff",
                  }}
                >
                  {applyingCall.title}
                </h3>

                {/* Talent Verification Summary */}
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "4px",
                    padding: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "#777777",
                      marginBottom: "6px",
                    }}
                  >
                    Your Registered Talent Reference ID:
                  </label>
                  <input
                    type="text"
                    required
                    value={talentIdInput}
                    onChange={(e) => setTalentIdInput(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "#141414",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "3px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                      outline: "none",
                      marginBottom: "12px",
                    }}
                  />

                  {/* 30-Day Check-in Status */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#10b981" }}>
                    <span>✓</span>
                    <span>30-Day Look Recertification: ACTIVE (24 Days Remaining)</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#10b981", marginTop: "4px" }}>
                    <span>✓</span>
                    <span>3 Mandatory Photos Attached (Face, Mid, Full Body)</span>
                  </div>
                </div>

                <p style={{ fontSize: "12px", color: "#777777", margin: "0 0 20px", lineHeight: 1.5 }}>
                  By applying, you authorize the VISAGE booking department to submit your comp-card, measurements,
                  and option availability for <strong>{applyingCall.shootDates}</strong>.
                </p>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Confirm &amp; Transmit Application ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* DIRECTOR POST CASTING MODAL */}
      {postModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(14px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setPostModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: "#0d0d0d",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "6px",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPostModalOpen(false)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "18px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#888888",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {postSubmitted ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div style={{ fontSize: "42px", color: "#10b981", marginBottom: "16px" }}>✓</div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontFamily: "var(--font-big-shoulders, sans-serif)",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                    color: "#ffffff",
                  }}
                >
                  Casting Call Submitted to Admin Queue
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: "14px", lineHeight: 1.6, maxWidth: "500px", margin: "0 auto 20px" }}>
                  Your project brief has been recorded. As per VISAGE security policy, casting calls go live
                  and trigger automatic WhatsApp broadcasts to qualified models after listing fee receipt
                  and admin legitimacy verification.
                </p>
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    fontSize: "12px",
                    color: "#34d399",
                  }}
                >
                  Status: Pending Admin Moderation • Verification ETA &lt; 2 Hours
                </div>
              </div>
            ) : (
              <form onSubmit={handlePostSubmit}>
                <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888888" }}>
                  Director &amp; Agency Portal
                </div>
                <h2
                  style={{
                    fontSize: "28px",
                    fontFamily: "var(--font-big-shoulders, sans-serif)",
                    textTransform: "uppercase",
                    margin: "4px 0 16px",
                    color: "#ffffff",
                  }}
                >
                  Create &amp; Publish Casting Call
                </h2>

                {/* Form fields */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Winter Haute Couture Campaign"
                      value={postForm.title}
                      onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Client / Brand / Agency *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prada, Vogue, Apple"
                      value={postForm.brand}
                      onChange={(e) => setPostForm({ ...postForm, brand: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Category
                    </label>
                    <select
                      value={postForm.category}
                      onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    >
                      <option value="Editorial">Editorial</option>
                      <option value="Runway">Runway</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Film & Video">Film &amp; Video</option>
                      <option value="Alternative">Alternative</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Day Rate / Buyout *
                    </label>
                    <input
                      type="text"
                      required
                      value={postForm.rate}
                      onChange={(e) => setPostForm({ ...postForm, rate: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Target Gender
                    </label>
                    <select
                      value={postForm.gender}
                      onChange={(e) => setPostForm({ ...postForm, gender: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    >
                      <option value="All Genders">All Genders</option>
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                      <option value="Non-Binary">Non-Binary</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Shoot Location
                    </label>
                    <input
                      type="text"
                      value={postForm.location}
                      onChange={(e) => setPostForm({ ...postForm, location: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                      Shoot Dates
                    </label>
                    <input
                      type="text"
                      value={postForm.shootDates}
                      onChange={(e) => setPostForm({ ...postForm, shootDates: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "3px",
                        color: "#ffffff",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "12px", color: "#777777", marginBottom: "6px" }}>
                    Project Brief &amp; Required Looks *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the aesthetic, tone, required hair/eyes/height, and casting directions..."
                    value={postForm.description}
                    onChange={(e) => setPostForm({ ...postForm, description: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "#141414",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "3px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Admin moderation notice */}
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "2px",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "12px",
                    color: "#888888",
                    marginBottom: "20px",
                  }}
                >
                  <strong style={{ color: "#ffffff" }}>Admin Verification Policy:</strong> Casting calls require agency payment clearance and admin verification before publication. Upon approval, an automated WhatsApp alert is dispatched immediately to all matching registered models.
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Submit Casting for Admin Approval ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* WHATSAPP BROADCAST SIMULATION MODAL */}
      {whatsAppModalOpen && whatsAppTargetCall && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(14px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setWhatsAppModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: "#111b21",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "16px",
              maxWidth: "420px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0,0,0,0.9)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* WhatsApp Header */}
            <div
              style={{
                backgroundColor: "#202c33",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "#00a884",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  V
                </div>
                <div>
                  <div style={{ color: "#e9edef", fontSize: "14px", fontWeight: 600 }}>
                    VISAGE Casting Alerts
                  </div>
                  <div style={{ color: "#8696a0", fontSize: "11px" }}>Official Verified Agency Bot</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setWhatsAppModalOpen(false)}
                style={{ background: "transparent", border: "none", color: "#8696a0", fontSize: "18px", cursor: "pointer" }}
              >
                ✕
              </button>
            </div>

            {/* WhatsApp Chat Body */}
            <div
              style={{
                padding: "20px 16px",
                backgroundColor: "#0b141a",
                backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)",
                backgroundSize: "16px 16px",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {/* WhatsApp Message Bubble */}
              <div
                style={{
                  backgroundColor: "#005c4b",
                  color: "#e9edef",
                  borderRadius: "8px 8px 8px 0px",
                  padding: "12px 14px",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  maxWidth: "92%",
                  alignSelf: "flex-start",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ fontWeight: 700, color: "#25d366", marginBottom: "4px", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  NEW CASTING SPECIFICATION MATCH
                </div>
                <div>
                  Hello! A new verified casting matching your measurements and portfolio look has just been
                  approved by VISAGE:
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    padding: "10px",
                    borderRadius: "6px",
                    margin: "10px 0",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#ffffff" }}>{whatsAppTargetCall.title}</div>
                  <div style={{ fontSize: "12px", color: "#aebac1" }}>Client: {whatsAppTargetCall.brand}</div>
                  <div style={{ fontSize: "12px", color: "#25d366", fontWeight: 600 }}>Rate: {whatsAppTargetCall.rate}</div>
                  <div style={{ fontSize: "11px", color: "#8696a0" }}>Dates: {whatsAppTargetCall.shootDates}</div>
                  <div style={{ fontSize: "11px", color: "#8696a0" }}>Location: {whatsAppTargetCall.location}</div>
                </div>
                <div>
                  Tap below to direct-submit your verified 30-day comp-card with 1 click:
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    paddingTop: "8px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#53bdeb", fontWeight: 600, fontSize: "12px" }}>
                    visage.agency/apply?id={whatsAppTargetCall.id}
                  </span>
                  <span style={{ fontSize: "10px", color: "#8696a0" }}>10:42 AM</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div
              style={{
                backgroundColor: "#202c33",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setWhatsAppModalOpen(false);
                  setApplyingCall(whatsAppTargetCall);
                }}
                style={{
                  backgroundColor: "#00a884",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "12px",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Simulate Direct WhatsApp Apply Click ↗
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
