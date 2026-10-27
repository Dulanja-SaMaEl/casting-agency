"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CONSULTATION_SERVICES,
  CONSULTATION_AGENTS,
  ConsultationService,
  ConsultationAgent,
} from "@/data/castingData";

const AVAILABLE_DAYS = [
  { day: "Thu", date: "Oct 29", fullDate: "2026-10-29" },
  { day: "Fri", date: "Oct 30", fullDate: "2026-10-30" },
  { day: "Mon", date: "Nov 02", fullDate: "2026-11-02" },
  { day: "Tue", date: "Nov 03", fullDate: "2026-11-03" },
  { day: "Wed", date: "Nov 04", fullDate: "2026-11-04" },
  { day: "Thu", date: "Nov 05", fullDate: "2026-11-05" },
];

const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:15 PM",
  "04:30 PM",
  "05:15 PM",
];

export default function ConsultationsPage() {
  const [selectedService, setSelectedService] = useState<ConsultationService>(
    CONSULTATION_SERVICES[0]
  );
  const [selectedAgent, setSelectedAgent] = useState<ConsultationAgent>(
    CONSULTATION_AGENTS[0]
  );
  const [selectedDay, setSelectedDay] = useState(AVAILABLE_DAYS[0]);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [meetingFormat, setMeetingFormat] = useState<"Studio" | "Video">("Studio");

  // Model Form State
  const [talentId, setTalentId] = useState("VSG-2026-4921");
  const [modelName, setModelName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [notes, setNotes] = useState("");

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `VSG-APT-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setModelName("");
    setWhatsapp("");
    setNotes("");
  };

  return (
    <div style={{ backgroundColor: "#060606", color: "#f3f3f3", minHeight: "100vh" }}>
      <Navbar variant="dark" />

      {/* HERO SECTION */}
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
            Model Concierge &amp; Agent Advisory Desk
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
            Book Model Consultations &amp; Issue Desk
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
            Schedule 1-on-1 advisory sessions with VISAGE bookers and talent advocates. Whether you need
            a comp-card architectural review, contract guidance, monthly look recertification, or
            urgent resolution for an active casting issue, our agency desk is here to advocate for you.
          </p>
        </div>
      </section>

      {/* BOOKING WORKFLOW FORM */}
      <section style={{ padding: "50px 0 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          {bookingConfirmed ? (
            /* CONFIRMATION SCREEN */
            <div
              style={{
                backgroundColor: "#0d0d0d",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: "6px",
                padding: "48px 36px",
                textAlign: "center",
                maxWidth: "680px",
                margin: "0 auto",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  color: "#10b981",
                  margin: "0 auto 20px",
                }}
              >
                ✓
              </div>

              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#34d399", marginBottom: "6px" }}>
                Appointment Confirmed
              </div>
              <h2
                style={{
                  fontSize: "36px",
                  fontFamily: "var(--font-big-shoulders, sans-serif)",
                  textTransform: "uppercase",
                  fontWeight: 900,
                  margin: "0 0 12px",
                  color: "#ffffff",
                }}
              >
                Ref Code: {confirmationCode}
              </h2>
              <p style={{ color: "#a0a0a0", fontSize: "15px", lineHeight: 1.6, margin: "0 auto 28px", maxWidth: "480px" }}>
                Your consultation has been reserved with <strong style={{ color: "#ffffff" }}>{selectedAgent.name}</strong> on{" "}
                <strong style={{ color: "#ffffff" }}>{selectedDay.day}, {selectedDay.date}</strong> at{" "}
                <strong style={{ color: "#ffffff" }}>{selectedTime}</strong>.
              </p>

              {/* Appointment summary card */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "4px",
                  padding: "20px",
                  textAlign: "left",
                  marginBottom: "28px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                  fontSize: "13px",
                }}
              >
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Consultation Category:</span>
                  <strong style={{ color: "#ffffff" }}>{selectedService.title}</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Format / Location:</span>
                  <strong style={{ color: "#ffffff" }}>
                    {meetingFormat === "Studio" ? "SoHo Studio (321 Mercer St)" : "Encrypted Zoom / WhatsApp Video"}
                  </strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>Model Name &amp; ID:</span>
                  <strong style={{ color: "#ffffff" }}>{modelName || "Registered Talent"} ({talentId})</strong>
                </div>
                <div>
                  <span style={{ color: "#777777", display: "block" }}>WhatsApp Alerts:</span>
                  <strong style={{ color: "#10b981" }}>Confirmed ({whatsapp || "+1 (Verified)"})</strong>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => alert("Calendar invitation (.ics) downloaded!")}
                  className="society-division-tab active"
                  style={{ padding: "10px 22px", fontSize: "12px", letterSpacing: "0.1em", cursor: "pointer" }}
                >
                  Add to Calendar (.ics) 📅
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="society-division-tab"
                  style={{
                    padding: "10px 20px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Book Another Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "36px",
                  alignItems: "start",
                }}
              >
                {/* LEFT COLUMN: Service Selection + Agent Selection */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  {/* STEP 1: Select Service */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          fontWeight: 800,
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        1
                      </span>
                      <h2
                        style={{
                          fontSize: "20px",
                          fontFamily: "var(--font-big-shoulders, sans-serif)",
                          textTransform: "uppercase",
                          margin: 0,
                          color: "#ffffff",
                        }}
                      >
                        Select Consultation Type
                      </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
                      {CONSULTATION_SERVICES.map((srv) => {
                        const isSelected = selectedService.id === srv.id;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setSelectedService(srv)}
                            style={{
                              padding: "18px 20px",
                              borderRadius: "4px",
                              backgroundColor: isSelected ? "rgba(255, 255, 255, 0.08)" : "#0d0d0d",
                              border: isSelected
                                ? "1px solid #ffffff"
                                : "1px solid rgba(255, 255, 255, 0.1)",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                              <h3 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                                {srv.title}
                              </h3>
                              <span
                                style={{
                                  fontSize: "10px",
                                  padding: "3px 8px",
                                  borderRadius: "2px",
                                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                                  color: "#aaaaaa",
                                  letterSpacing: "0.1em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {srv.duration} • {srv.format}
                              </span>
                            </div>
                            <p style={{ fontSize: "13px", color: "#8c8c8c", margin: "0 0 8px", lineHeight: 1.5 }}>
                              {srv.description}
                            </p>
                            <div style={{ fontSize: "11px", color: "#666666" }}>
                              Ideal for: <span style={{ color: "#aaaaaa" }}>{srv.idealFor}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: Choose Booker / Agent */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          fontWeight: 800,
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        2
                      </span>
                      <h2
                        style={{
                          fontSize: "20px",
                          fontFamily: "var(--font-big-shoulders, sans-serif)",
                          textTransform: "uppercase",
                          margin: 0,
                          color: "#ffffff",
                        }}
                      >
                        Choose VISAGE Booker or Advocate
                      </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      {CONSULTATION_AGENTS.map((agent) => {
                        const isSelected = selectedAgent.id === agent.id;
                        return (
                          <div
                            key={agent.id}
                            onClick={() => setSelectedAgent(agent)}
                            style={{
                              padding: "16px",
                              borderRadius: "4px",
                              backgroundColor: isSelected ? "rgba(255, 255, 255, 0.08)" : "#0d0d0d",
                              border: isSelected
                                ? "1px solid #ffffff"
                                : "1px solid rgba(255, 255, 255, 0.1)",
                              cursor: "pointer",
                              display: "flex",
                              gap: "14px",
                              alignItems: "center",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <img
                              src={agent.avatar}
                              alt={agent.name}
                              style={{
                                width: "52px",
                                height: "52px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                              }}
                            />
                            <div>
                              <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                                {agent.name}
                              </div>
                              <div style={{ fontSize: "11px", color: "#8c8c8c" }}>{agent.title}</div>
                              <div style={{ fontSize: "10px", color: "#666666", marginTop: "4px" }}>
                                {agent.availability}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Date/Time + Model Details + Confirmation */}
                <div
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "6px",
                    padding: "28px",
                    position: "sticky",
                    top: "90px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontWeight: 800,
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      3
                    </span>
                    <h2
                      style={{
                        fontSize: "20px",
                        fontFamily: "var(--font-big-shoulders, sans-serif)",
                        textTransform: "uppercase",
                        margin: 0,
                        color: "#ffffff",
                      }}
                    >
                      Select Schedule &amp; Format
                    </h2>
                  </div>

                  {/* Format Toggle */}
                  <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                    <button
                      type="button"
                      onClick={() => setMeetingFormat("Studio")}
                      className={`society-division-tab ${meetingFormat === "Studio" ? "active" : ""}`}
                      style={{ flex: 1, padding: "8px", fontSize: "11px", cursor: "pointer", textAlign: "center" }}
                    >
                      🏢 Studio In-Person
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeetingFormat("Video")}
                      className={`society-division-tab ${meetingFormat === "Video" ? "active" : ""}`}
                      style={{ flex: 1, padding: "8px", fontSize: "11px", cursor: "pointer", textAlign: "center" }}
                    >
                      📹 Encrypted Video
                    </button>
                  </div>

                  {/* Date Picker Grid */}
                  <div style={{ marginBottom: "18px" }}>
                    <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "8px", textTransform: "uppercase" }}>
                      Choose Day:
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                      {AVAILABLE_DAYS.map((d) => {
                        const isDaySelected = selectedDay.fullDate === d.fullDate;
                        return (
                          <button
                            key={d.fullDate}
                            type="button"
                            onClick={() => setSelectedDay(d)}
                            style={{
                              padding: "8px 4px",
                              backgroundColor: isDaySelected ? "#ffffff" : "rgba(255, 255, 255, 0.04)",
                              color: isDaySelected ? "#000000" : "#a0a0a0",
                              border: isDaySelected ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.1)",
                              borderRadius: "3px",
                              cursor: "pointer",
                              fontSize: "11px",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ display: "block", fontWeight: 700 }}>{d.day}</span>
                            <span style={{ fontSize: "10px" }}>{d.date}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div style={{ marginBottom: "22px" }}>
                    <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "8px", textTransform: "uppercase" }}>
                      Choose Time Slot (EST):
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                      {TIME_SLOTS.map((t) => {
                        const isTimeSelected = selectedTime === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            style={{
                              padding: "6px 4px",
                              backgroundColor: isTimeSelected ? "#10b981" : "rgba(255, 255, 255, 0.04)",
                              color: isTimeSelected ? "#ffffff" : "#a0a0a0",
                              border: isTimeSelected ? "1px solid #10b981" : "1px solid rgba(255, 255, 255, 0.1)",
                              borderRadius: "3px",
                              cursor: "pointer",
                              fontSize: "11px",
                            }}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Model Credentials */}
                  <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "18px", marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "11px", color: "#777777", marginBottom: "6px", textTransform: "uppercase" }}>
                      Model Details:
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <input
                        type="text"
                        placeholder="Talent ID (e.g. #VSG-2026-XXXX)"
                        required
                        value={talentId}
                        onChange={(e) => setTalentId(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          color: "#ffffff",
                          fontSize: "12px",
                          outline: "none",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Model Full Name *"
                        required
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          color: "#ffffff",
                          fontSize: "12px",
                          outline: "none",
                        }}
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Number for Reminders *"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          color: "#ffffff",
                          fontSize: "12px",
                          outline: "none",
                        }}
                      />
                      <textarea
                        rows={2}
                        placeholder="Brief summary of topic / issue..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          backgroundColor: "#141414",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "3px",
                          color: "#ffffff",
                          fontSize: "12px",
                          outline: "none",
                          resize: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Booking */}
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "14px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Confirm Consultation Booking ↗
                  </button>

                  <div style={{ textAlign: "center", marginTop: "12px", fontSize: "11px", color: "#666666" }}>
                    Direct WhatsApp reminder dispatch included for registered models.
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
