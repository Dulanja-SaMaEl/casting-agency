"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MODEL_AGREEMENT_DATA } from "@/data/castingData";

export default function TalentAgreementPage() {
  const [legalName, setLegalName] = useState("");
  const [govId, setGovId] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [talentId, setTalentId] = useState("VSG-2026-");

  // Agreement Checkboxes
  const [agree3Years, setAgree3Years] = useState(false);
  const [agreeProductionRouting, setAgreeProductionRouting] = useState(false);
  const [agreePenaltyTermination, setAgreePenaltyTermination] = useState(false);
  const [agreeMonthlyPhotos, setAgreeMonthlyPhotos] = useState(false);

  // Signature Type vs Canvas
  const [signMethod, setSignMethod] = useState<"draw" | "type">("draw");
  const [typedSignature, setTypedSignature] = useState("");
  const [hasDrawn, setHasDrawn] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  // Executed State
  const [isExecuted, setIsExecuted] = useState(false);
  const [contractCode, setContractCode] = useState("");
  const [executionDate, setExecutionDate] = useState("");

  // Canvas drawing handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [signMethod]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    setHasDrawn(true);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const handleExecuteContract = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree3Years || !agreeProductionRouting || !agreePenaltyTermination || !agreeMonthlyPhotos) {
      alert("Please check all 4 mandatory legal acknowledgment boxes to proceed with agreement execution.");
      return;
    }
    if (signMethod === "draw" && !hasDrawn) {
      alert("Please provide your digital signature in the signature box before executing.");
      return;
    }
    if (signMethod === "type" && typedSignature.trim() === "") {
      alert("Please type your legal signature before executing.");
      return;
    }

    const randomHash = Math.random().toString(36).substring(2, 10).toUpperCase();
    const code = `VSG-AGR-2026-${randomHash}`;
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setContractCode(code);
    setExecutionDate(today);
    setIsExecuted(true);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#060606", color: "#f3f3f3", minHeight: "100vh" }}>
      <Navbar variant="dark" />

      {/* HEADER SECTION */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "48px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "#030303",
        }}
      >
        <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
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
            Official Legal Portal • 3-Year Exclusive Representation
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
            Online Representation Agreement
          </h1>
          <p
            style={{
              maxWidth: "760px",
              fontSize: "15px",
              color: "#8c8c8c",
              marginTop: "16px",
              lineHeight: 1.6,
            }}
          >
            To be rostered and officially represented by VISAGE (&quot;Casting &amp; Co&quot;), all aspiring
            and professional models must execute this binding 3-Year Representation Agreement. All photo,
            promo, digital, TVC, film, and teledrama productions must route through the agency at all times.
          </p>
        </div>
      </section>

      {/* MAIN AGREEMENT CONTENT */}
      <section style={{ padding: "50px 0 100px" }}>
        <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
          {isExecuted ? (
            /* EXECUTED CERTIFICATE OF SIGNING */
            <div
              style={{
                backgroundColor: "#0d0d0d",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                borderRadius: "6px",
                padding: "48px 36px",
                maxWidth: "780px",
                margin: "0 auto",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  color: "#10b981",
                  margin: "0 auto 20px",
                }}
              >
                ✓
              </div>

              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#34d399", textAlign: "center", marginBottom: "8px" }}>
                Legally Executed &amp; Recorded
              </div>
              <h2
                style={{
                  fontSize: "32px",
                  fontFamily: "var(--font-big-shoulders, sans-serif)",
                  textTransform: "uppercase",
                  fontWeight: 900,
                  margin: "0 0 12px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Certificate of Talent Representation
              </h2>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "monospace",
                  fontSize: "13px",
                  color: "#10b981",
                  letterSpacing: "0.1em",
                  marginBottom: "28px",
                }}
              >
                CONTRACT CODE: {contractCode}
              </div>

              {/* Execution Summary Table */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  padding: "24px",
                  marginBottom: "28px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  fontSize: "13px",
                }}
              >
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Talent Legal Name:</span>
                  <strong style={{ color: "#ffffff", fontSize: "15px" }}>{legalName}</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Government ID / Passport:</span>
                  <strong style={{ color: "#ffffff" }}>{govId}</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Assigned Talent ID:</span>
                  <strong style={{ color: "#ffffff", fontFamily: "monospace" }}>{talentId || "#VSG-2026-CONFIRMED"}</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Contract Term:</span>
                  <strong style={{ color: "#ffffff" }}>3 Years (2026 – 2029) Exclusive</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Execution Timestamp:</span>
                  <strong style={{ color: "#ffffff" }}>{executionDate} • 00:54 UTC</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Digital Verification:</span>
                  <strong style={{ color: "#10b981" }}>E-Signed &amp; Cryptographically Sealed</strong>
                </div>
              </div>

              {/* Dual Signature Block */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  padding: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px dashed rgba(255, 255, 255, 0.15)",
                  borderRadius: "4px",
                  marginBottom: "32px",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#777777", textTransform: "uppercase", marginBottom: "8px" }}>
                    Talent Signature:
                  </div>
                  <div
                    style={{
                      fontFamily: "'Brush Script MT', 'cursive', sans-serif",
                      fontSize: "26px",
                      color: "#ffffff",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                      paddingBottom: "8px",
                    }}
                  >
                    {signMethod === "type" ? typedSignature : legalName}
                  </div>
                  <div style={{ fontSize: "11px", color: "#666666", marginTop: "4px" }}>
                    Online Electronic Signer: {legalName}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "11px", color: "#777777", textTransform: "uppercase", marginBottom: "8px" }}>
                    Agency Countersignature:
                  </div>
                  <div
                    style={{
                      fontFamily: "'Brush Script MT', 'cursive', sans-serif",
                      fontSize: "26px",
                      color: "#10b981",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                      paddingBottom: "8px",
                    }}
                  >
                    Elena Rostova
                  </div>
                  <div style={{ fontSize: "11px", color: "#666666", marginTop: "4px" }}>
                    For &amp; On Behalf of: VISAGE Casting Management
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => alert("Executed 3-Year Agreement copy (.pdf) generated & downloaded!")}
                  className="society-division-tab active"
                  style={{ padding: "12px 24px", fontSize: "12px", letterSpacing: "0.1em", cursor: "pointer" }}
                >
                  Download Signed Agreement (.PDF) 📥
                </button>
                <Link
                  href="/model-registration"
                  className="society-division-tab"
                  style={{
                    padding: "12px 24px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Upload Mandatory Photos ↗
                </Link>
                <Link
                  href="/castings"
                  className="society-division-tab"
                  style={{
                    padding: "12px 24px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Browse Casting Calls ↗
                </Link>
              </div>
            </div>
          ) : (
            /* CONTRACT REVIEW & SIGNING FORM */
            <form onSubmit={handleExecuteContract}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "36px",
                  alignItems: "start",
                }}
              >
                {/* LEFT: CONTRACT CLAUSES VIEWER */}
                <div
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "6px",
                    padding: "36px",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      paddingBottom: "20px",
                      marginBottom: "28px",
                    }}
                  >
                    <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888888" }}>
                      Document Ref: {MODEL_AGREEMENT_DATA.version}
                    </div>
                    <h2
                      style={{
                        fontSize: "28px",
                        fontFamily: "var(--font-big-shoulders, sans-serif)",
                        textTransform: "uppercase",
                        fontWeight: 900,
                        margin: "6px 0 10px",
                        color: "#ffffff",
                      }}
                    >
                      {MODEL_AGREEMENT_DATA.contractTitle}
                    </h2>
                    <p style={{ color: "#a0a0a0", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                      {MODEL_AGREEMENT_DATA.summary}
                    </p>
                  </div>

                  {/* CLAUSES STACK */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    {MODEL_AGREEMENT_DATA.clauses.map((clause) => (
                      <div
                        key={clause.id}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.02)",
                          border: "1px solid rgba(255, 255, 255, 0.07)",
                          borderRadius: "4px",
                          padding: "22px",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "16px",
                            fontFamily: "var(--font-big-shoulders, sans-serif)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "#ffffff",
                            margin: "0 0 10px",
                          }}
                        >
                          {clause.title}
                        </h3>
                        <p style={{ fontSize: "13px", color: "#b0b0b0", lineHeight: 1.6, margin: "0 0 14px" }}>
                          {clause.content}
                        </p>
                        <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#8c8c8c" }}>
                          {clause.bulletPoints.map((bp, i) => (
                            <li key={i} style={{ marginBottom: "4px" }}>
                              {bp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: MODEL IDENTITY & SIGNATURE CONSOLE */}
                <div
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "6px",
                    padding: "30px",
                    position: "sticky",
                    top: "90px",
                  }}
                >
                  <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888888", marginBottom: "4px" }}>
                    Execution Step
                  </div>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontFamily: "var(--font-big-shoulders, sans-serif)",
                      textTransform: "uppercase",
                      margin: "0 0 18px",
                      color: "#ffffff",
                    }}
                  >
                    Talent Credentials &amp; E-Sign
                  </h2>

                  {/* Personal details inputs */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "4px" }}>
                        Full Legal Name (as on ID/Passport) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Alexandra Vance"
                        value={legalName}
                        onChange={(e) => setLegalName(e.target.value)}
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

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "4px" }}>
                          Gov ID / Passport # *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. P1829471"
                          value={govId}
                          onChange={(e) => setGovId(e.target.value)}
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
                        <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "4px" }}>
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          required
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
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

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "4px" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="model@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "4px" }}>
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
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
                  </div>

                  {/* MANDATORY CHECKBOXES MATCHING LINES 24 & 25 */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "18px 0",
                      marginBottom: "22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {/* Checkbox 1: 3-Year Contract */}
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "12px", color: "#d0d0d0", lineHeight: 1.5 }}>
                      <input
                        type="checkbox"
                        checked={agree3Years}
                        onChange={(e) => setAgree3Years(e.target.checked)}
                        style={{ accentColor: "#10b981", marginTop: "3px", cursor: "pointer" }}
                      />
                      <span>
                        <strong>3-Year Exclusive Term:</strong> I agree to a binding 3-year contract. I cannot work on brands or other promotions which come from outside companies; I will stick to VISAGE (Casting &amp; Co) at all times to maximize casting opportunities and official representation.
                      </span>
                    </label>

                    {/* Checkbox 2: Production Routing */}
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "12px", color: "#d0d0d0", lineHeight: 1.5 }}>
                      <input
                        type="checkbox"
                        checked={agreeProductionRouting}
                        onChange={(e) => setAgreeProductionRouting(e.target.checked)}
                        style={{ accentColor: "#10b981", marginTop: "3px", cursor: "pointer" }}
                      />
                      <span>
                        <strong>Universal Production Routing:</strong> All product, photo, promo, digital, TVC, film, teledrama, or any sort of production I am involved in must strictly go through VISAGE.
                      </span>
                    </label>

                    {/* Checkbox 3: Penalty & Immediate Termination Clause */}
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "12px", color: "#d0d0d0", lineHeight: 1.5 }}>
                      <input
                        type="checkbox"
                        checked={agreePenaltyTermination}
                        onChange={(e) => setAgreePenaltyTermination(e.target.checked)}
                        style={{ accentColor: "#ef4444", marginTop: "3px", cursor: "pointer" }}
                      />
                      <span>
                        <strong>Breach &amp; Fine Recoupment Clause:</strong> If anyone goes beyond this agreement, representation will be terminated immediately and a fine for service charges will be collected (calculated based on agency photoshoots, reels, and the cost of services for my profile).
                      </span>
                    </label>

                    {/* Checkbox 4: 30-day look check-in */}
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "12px", color: "#d0d0d0", lineHeight: 1.5 }}>
                      <input
                        type="checkbox"
                        checked={agreeMonthlyPhotos}
                        onChange={(e) => setAgreeMonthlyPhotos(e.target.checked)}
                        style={{ accentColor: "#10b981", marginTop: "3px", cursor: "pointer" }}
                      />
                      <span>
                        <strong>Monthly Look Check-In:</strong> I agree to submit updated candid photos every month or have my profile placed on hold for active casting submissions.
                      </span>
                    </label>
                  </div>

                  {/* SIGNATURE PAD */}
                  <div style={{ marginBottom: "22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "11px", color: "#777777", textTransform: "uppercase" }}>
                        Digital Signature:
                      </span>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          type="button"
                          onClick={() => setSignMethod("draw")}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: signMethod === "draw" ? "#ffffff" : "#666666",
                            fontSize: "11px",
                            cursor: "pointer",
                            textDecoration: signMethod === "draw" ? "underline" : "none",
                          }}
                        >
                          Draw
                        </button>
                        <span style={{ color: "#444444" }}>|</span>
                        <button
                          type="button"
                          onClick={() => setSignMethod("type")}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: signMethod === "type" ? "#ffffff" : "#666666",
                            fontSize: "11px",
                            cursor: "pointer",
                            textDecoration: signMethod === "type" ? "underline" : "none",
                          }}
                        >
                          Type
                        </button>
                      </div>
                    </div>

                    {signMethod === "draw" ? (
                      <div>
                        <div
                          style={{
                            backgroundColor: "#000000",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "4px",
                            position: "relative",
                          }}
                        >
                          <canvas
                            ref={canvasRef}
                            width={340}
                            height={110}
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            onTouchStart={startDrawing}
                            onTouchMove={draw}
                            onTouchEnd={stopDrawing}
                            style={{
                              width: "100%",
                              height: "110px",
                              cursor: "crosshair",
                              display: "block",
                            }}
                          />
                          {!hasDrawn && (
                            <span
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "#444444",
                                fontSize: "12px",
                                pointerEvents: "none",
                              }}
                            >
                              Draw signature here with mouse / finger
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}>
                          <button
                            type="button"
                            onClick={clearCanvas}
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#888888",
                              fontSize: "11px",
                              cursor: "pointer",
                            }}
                          >
                            Clear Signature ✕
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <input
                          type="text"
                          placeholder="Type legal name to generate digital signature..."
                          value={typedSignature}
                          onChange={(e) => setTypedSignature(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#000000",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "4px",
                            fontFamily: "'Brush Script MT', 'cursive', sans-serif",
                            fontSize: "24px",
                            color: "#ffffff",
                            outline: "none",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* EXECUTE BUTTON */}
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "16px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    Execute 3-Year Agreement Online ↗
                  </button>

                  <div style={{ fontSize: "11px", color: "#666666", textAlign: "center", marginTop: "12px" }}>
                    Legally enforceable under the Electronic Signatures in Global and National Commerce Act.
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
