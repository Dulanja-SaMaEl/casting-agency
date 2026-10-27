"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface UploadedPhoto {
  file: File | null;
  previewUrl: string | null;
  slotName: string;
  requiredName: string;
  description: string;
  aspectRatio: string;
}

const AGE_BRACKETS = [
  "Under 18 (Youth / Teen)",
  "18 – 24 (New Face / Young Adult)",
  "25 – 34 (Editorial / Main Board)",
  "35 – 49 (Classic / Commercial)",
  "50+ (Silver / Timeless Character)",
];

const GENDER_OPTIONS = [
  "Female",
  "Male",
  "Non-Binary",
  "Gender-Fluid",
  "Prefer not to say",
];

const POPULAR_LANGUAGES = [
  "English",
  "French",
  "Italian",
  "Spanish",
  "German",
  "Japanese",
  "Mandarin",
  "Arabic",
  "Portuguese",
  "Korean",
  "Hindi",
];

const SKIN_TONES = [
  "Fair / Porcelain",
  "Light / Ivory",
  "Medium / Olive",
  "Tan / Caramel",
  "Deep / Rich Warm",
  "Ebony / Deep Cool",
];

const EXPERIENCE_LEVELS = [
  "Aspiring / Fresh Face (No Prior Experience Required)",
  "Commercial & Print Model (1–3 Years)",
  "Runway & Fashion Week Pro (3+ Years)",
  "Actor / Performing Artist Crossing Over",
];

export default function ModelRegistrationPage() {
  // Step tracker
  const [submitted, setSubmitted] = useState(false);
  const [talentId, setTalentId] = useState("");

  // 3 Mandatory Photos State
  const [photos, setPhotos] = useState<Record<string, UploadedPhoto>>({
    closeup: {
      file: null,
      previewUrl: null,
      slotName: "Photo 01: Face Close-Up",
      requiredName: "Natural Headshot / Beauty Portrait",
      description: "Clean skin, neutral expression, eye-level, no filters or heavy makeup.",
      aspectRatio: "3 / 4",
    },
    midshot: {
      file: null,
      previewUrl: null,
      slotName: "Photo 02: Mid Shot",
      requiredName: "Waist-Up Fashion Silhouette",
      description: "Form-fitting black or neutral top, natural posture, relaxed shoulders.",
      aspectRatio: "4 / 5",
    },
    fullbody: {
      file: null,
      previewUrl: null,
      slotName: "Photo 03: Full Body",
      requiredName: "Head-to-Toe Silhouette & Stature",
      description: "Plain background, barefoot or simple heels, clear body proportions.",
      aspectRatio: "9 / 16",
    },
  });

  // Personal Info Form State
  const [fullName, setFullName] = useState("");
  const [stageName, setStageName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [ageBracket, setAgeBracket] = useState(AGE_BRACKETS[1]);
  const [gender, setGender] = useState(GENDER_OPTIONS[0]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["English"]);
  const [customLanguage, setCustomLanguage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [instagram, setInstagram] = useState("");

  // Specs & Measurements
  const [heightFeet, setHeightFeet] = useState("5'10\"");
  const [heightCm, setHeightCm] = useState("178");
  const [bust, setBust] = useState("34\"");
  const [waist, setWaist] = useState("24\"");
  const [hips, setHips] = useState("35\"");
  const [shoeSize, setShoeSize] = useState("9 US / 40 EU");
  const [eyeColor, setEyeColor] = useState("Brown");
  const [naturalHairColor, setNaturalHairColor] = useState("Dark Brown");
  const [currentHairColor, setCurrentHairColor] = useState("Dark Brown");
  const [skinTone, setSkinTone] = useState(SKIN_TONES[2]);
  const [hasPiercings, setHasPiercings] = useState("No");
  const [piercingDetails, setPiercingDetails] = useState("");
  const [hasTattoos, setHasTattoos] = useState("No");
  const [tattooDetails, setTattooDetails] = useState("");
  const [experience, setExperience] = useState(EXPERIENCE_LEVELS[0]);
  const [bio, setBio] = useState("");

  // Policies Agreements
  const [agreedToMonthlyLookCheck, setAgreedToMonthlyLookCheck] = useState(false);
  const [agreedToAuthenticPhotos, setAgreedToAuthenticPhotos] = useState(false);
  const [agreedToWhatsAppAlerts, setAgreedToWhatsAppAlerts] = useState(true);

  // Validation Error
  const [errorMessage, setErrorMessage] = useState("");

  // Hidden file input refs
  const closeupInputRef = useRef<HTMLInputElement>(null);
  const midshotInputRef = useRef<HTMLInputElement>(null);
  const fullbodyInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoSelect = (slotKey: "closeup" | "midshot" | "fullbody", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select a valid image file (JPEG, PNG, or WEBP).");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPhotos((prev) => ({
      ...prev,
      [slotKey]: {
        ...prev[slotKey],
        file,
        previewUrl,
      },
    }));
    setErrorMessage("");
  };

  const removePhoto = (slotKey: "closeup" | "midshot" | "fullbody") => {
    setPhotos((prev) => ({
      ...prev,
      [slotKey]: {
        ...prev[slotKey],
        file: null,
        previewUrl: null,
      },
    }));
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const addCustomLanguage = () => {
    if (customLanguage.trim() && !selectedLanguages.includes(customLanguage.trim())) {
      setSelectedLanguages((prev) => [...prev, customLanguage.trim()]);
      setCustomLanguage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verify 3 Mandatory Photos
    if (!photos.closeup.previewUrl) {
      setErrorMessage("Photo 01: Face Close-up is mandatory. Please upload your natural headshot.");
      window.scrollTo({ top: 380, behavior: "smooth" });
      return;
    }
    if (!photos.midshot.previewUrl) {
      setErrorMessage("Photo 02: Mid Shot is mandatory. Please upload your waist-up posture photo.");
      window.scrollTo({ top: 380, behavior: "smooth" });
      return;
    }
    if (!photos.fullbody.previewUrl) {
      setErrorMessage("Photo 03: Full Body Shot is mandatory. Please upload your head-to-toe photo.");
      window.scrollTo({ top: 380, behavior: "smooth" });
      return;
    }

    if (!agreedToMonthlyLookCheck) {
      setErrorMessage("You must accept the Monthly Look Recertification policy to register.");
      return;
    }
    if (!agreedToAuthenticPhotos) {
      setErrorMessage("Please confirm that your submitted photos are authentic and current.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `VSG-2026-${randomNum}`;
    setTalentId(newId);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="editorial-page-shell" style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#ffffff" }}>
      <Navbar variant="dark" />

      {/* HEADER SECTION */}
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "40px" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                fontSize: "12px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "20px",
              }}
            >
              <span>VISAGE TALENT ACQUISITION</span>
              <span>·</span>
              <span style={{ color: "#ffffff" }}>MODEL REGISTRATION</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--_typography---title-font)",
                fontSize: "clamp(46px, 7vw, 92px)",
                lineHeight: 0.95,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                marginBottom: "22px",
              }}
            >
              Step Onto The Global Board
            </h1>

            <p
              style={{
                fontFamily: "var(--_typography---body-font)",
                fontSize: "17px",
                lineHeight: 1.6,
                color: "#999999",
                maxWidth: "680px",
                margin: "0 auto 28px",
              }}
            >
              Open to <strong>all age groups, genders, and languages</strong>. Free membership allows viewing public casting calls; registered members unlock direct applications, professional portfolio studio shoot, intro video reel, and instant WhatsApp casting alerts.
            </p>

            {/* DIVERSITY PILLS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "36px",
              }}
            >
              <span className="diversity-badge">✓ All Age Groups</span>
              <span className="diversity-badge">✓ All Genders</span>
              <span className="diversity-badge">✓ All Languages &amp; Dialects</span>
              <span className="diversity-badge">✓ Instant WhatsApp Castings</span>
              <span className="diversity-badge">✓ Studio Shoot &amp; Video Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIRMATION STATE */}
      {submitted ? (
        <section className="section" style={{ paddingBottom: "140px" }}>
          <div className="w-layout-blockcontainer container w-container">
            <div
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                padding: "clamp(32px, 5vw, 56px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "24px",
                  color: "#ffffff",
                }}
              >
                ✓
              </div>

              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.16em",
                  color: "#888888",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Application Successfully Logged
              </div>

              <h2
                style={{
                  fontFamily: "var(--_typography---title-font)",
                  fontSize: "44px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Welcome to VISAGE, {fullName || "Talent"}
              </h2>

              <div
                style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                  color: "#ffffff",
                  marginBottom: "32px",
                }}
              >
                TALENT ID: {talentId}
              </div>

              {/* Submitted Photos Preview Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "14px",
                  marginBottom: "36px",
                }}
              >
                {Object.entries(photos).map(([key, item]) => (
                  <div
                    key={key}
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "4px",
                      overflow: "hidden",
                      backgroundColor: "#111111",
                      textAlign: "left",
                    }}
                  >
                    {item.previewUrl && (
                      <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                        <img
                          src={item.previewUrl}
                          alt={item.slotName}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "8px",
                            left: "8px",
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            padding: "3px 8px",
                            borderRadius: "2px",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          Verified
                        </div>
                      </div>
                    )}
                    <div style={{ padding: "10px 12px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "#ffffff" }}>
                        {item.slotName.split(":")[1]?.trim()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What Happens Next Card */}
              <div
                style={{
                  textAlign: "left",
                  padding: "24px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "4px",
                  marginBottom: "36px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#ffffff",
                  }}
                >
                  Onboarding &amp; Membership Activation Next Steps:
                </div>
                <ul
                  style={{
                    paddingLeft: "20px",
                    fontSize: "14px",
                    color: "#aaaaaa",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  <li>
                    <strong>WhatsApp Casting Dispatch:</strong> Our booking desk will dispatch verified casting alerts to <strong>{countryCode} {whatsappNumber || "your number"}</strong>.
                  </li>
                  <li>
                    <strong>Studio Photoshoot &amp; Intro Reel:</strong> Your onboarding membership package includes your initial in-studio digitals and video introduction shoot.
                  </li>
                  <li>
                    <strong>3-Year Exclusive Contract:</strong> Review and sign your online representation agreement to ensure all TVC, film, and promo bookings route through VISAGE.
                  </li>
                  <li>
                    <strong>Monthly Look Rule:</strong> Remember to submit updated current-look photos every 30 days to avoid your profile being marked <em>On Hold</em>.
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/talent-agreement"
                  className="society-division-tab is-active"
                  style={{ padding: "12px 28px", textDecoration: "none" }}
                >
                  Sign 3-Year Agreement Online ↗
                </Link>
                <Link
                  href="/castings"
                  className="society-division-tab"
                  style={{ padding: "12px 28px", textDecoration: "none" }}
                >
                  Browse Casting Calls
                </Link>
                <Link
                  href="/"
                  className="society-division-tab"
                  style={{ padding: "12px 28px", textDecoration: "none" }}
                >
                  Return to Home
                </Link>
                <Link
                  href="/contact-us"
                  className="society-division-tab is-active"
                  style={{ padding: "12px 28px", textDecoration: "none" }}
                >
                  Book Consultation Appointment ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* REGISTRATION FORM */
        <section className="section" style={{ paddingBottom: "140px" }}>
          <div className="w-layout-blockcontainer container w-container">
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: "960px",
                margin: "0 auto",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: "6px",
                padding: "clamp(24px, 4vw, 48px)",
              }}
            >
              {/* MEMBERSHIP TIER NOTICE BANNER */}
              <div
                style={{
                  padding: "20px 24px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  borderRadius: "4px",
                  marginBottom: "44px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>ℹ</span>
                  <div
                    style={{
                      fontFamily: "var(--_typography---title-font)",
                      fontSize: "20px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                    }}
                  >
                    Membership Structure &amp; Casting Access
                  </div>
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.7, color: "#aaaaaa" }}>
                  <p style={{ margin: "0 0 8px 0" }}>
                    • <strong>Free Membership:</strong> View public casting call briefs only.
                  </p>
                  <p style={{ margin: "0 0 8px 0" }}>
                    • <strong>Registered Model Membership:</strong> Apply directly to all casting briefs, receive portfolio studio shoots &amp; introduction video from the membership fee, and receive instant <strong>WhatsApp alerts</strong> with 1-click apply links.
                  </p>
                  <p style={{ margin: "0" }}>
                    • <strong>3-Year Exclusive Agreement:</strong> To join the active board, models sign our binding online agreement ensuring all promo, TVC, film, and teledramas route exclusively through VISAGE. <Link href="/talent-agreement" style={{ color: "#10b981", textDecoration: "underline", marginLeft: "4px" }}>Sign 3-Year Agreement Online ↗</Link>
                  </p>
                </div>
              </div>

              {/* ============================================================
                  SECTION 1: 3 MANDATORY PHOTOS (CORE TASK REQUIREMENT)
                 ============================================================ */}
              <div style={{ marginBottom: "50px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--_typography---title-font)",
                      fontSize: "30px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    1. Mandatory Current Look Photos (3 Required)
                  </h2>
                  <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#f5a3a3", textTransform: "uppercase" }}>
                    * All 3 Photos Mandatory
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#888888", marginBottom: "24px" }}>
                  Upload raw, candid digitals taken in natural daylight. No sunglasses, hats, heavy makeup, or social media beauty filters.
                </p>

                {/* 3 Upload Slots Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {/* SLOT 1: FACE CLOSE-UP */}
                  <div className="photo-upload-slot">
                    <input
                      type="file"
                      ref={closeupInputRef}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handlePhotoSelect("closeup", e)}
                    />
                    <div className="photo-slot-header">
                      <span className="photo-slot-badge">01. Close-Up</span>
                      <span className="photo-slot-label">Headshot</span>
                    </div>

                    <div
                      className="photo-slot-canvas"
                      onClick={() => !photos.closeup.previewUrl && closeupInputRef.current?.click()}
                      style={{ aspectRatio: photos.closeup.aspectRatio }}
                    >
                      {photos.closeup.previewUrl ? (
                        <>
                          <img
                            src={photos.closeup.previewUrl}
                            alt="Face Close-up preview"
                            className="photo-slot-img"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removePhoto("closeup");
                            }}
                            className="photo-slot-remove-btn"
                            aria-label="Remove photo"
                          >
                            ✕ Remove
                          </button>
                        </>
                      ) : (
                        <div className="photo-slot-placeholder">
                          <div className="photo-slot-icon">👤</div>
                          <div className="photo-slot-instruction">Face Close-Up</div>
                          <div className="photo-slot-hint">Direct eye contact, neutral face</div>
                          <div className="photo-slot-cta">+ Upload Image</div>
                        </div>
                      )}
                    </div>
                    <div className="photo-slot-footer">
                      {photos.closeup.description}
                    </div>
                  </div>

                  {/* SLOT 2: MID SHOT */}
                  <div className="photo-upload-slot">
                    <input
                      type="file"
                      ref={midshotInputRef}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handlePhotoSelect("midshot", e)}
                    />
                    <div className="photo-slot-header">
                      <span className="photo-slot-badge">02. Mid Shot</span>
                      <span className="photo-slot-label">Waist-Up</span>
                    </div>

                    <div
                      className="photo-slot-canvas"
                      onClick={() => !photos.midshot.previewUrl && midshotInputRef.current?.click()}
                      style={{ aspectRatio: photos.midshot.aspectRatio }}
                    >
                      {photos.midshot.previewUrl ? (
                        <>
                          <img
                            src={photos.midshot.previewUrl}
                            alt="Mid shot preview"
                            className="photo-slot-img"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removePhoto("midshot");
                            }}
                            className="photo-slot-remove-btn"
                            aria-label="Remove photo"
                          >
                            ✕ Remove
                          </button>
                        </>
                      ) : (
                        <div className="photo-slot-placeholder">
                          <div className="photo-slot-icon">👕</div>
                          <div className="photo-slot-instruction">Mid Shot</div>
                          <div className="photo-slot-hint">Waist to top of head, natural posture</div>
                          <div className="photo-slot-cta">+ Upload Image</div>
                        </div>
                      )}
                    </div>
                    <div className="photo-slot-footer">
                      {photos.midshot.description}
                    </div>
                  </div>

                  {/* SLOT 3: FULL BODY */}
                  <div className="photo-upload-slot">
                    <input
                      type="file"
                      ref={fullbodyInputRef}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handlePhotoSelect("fullbody", e)}
                    />
                    <div className="photo-slot-header">
                      <span className="photo-slot-badge">03. Full Body</span>
                      <span className="photo-slot-label">Stature</span>
                    </div>

                    <div
                      className="photo-slot-canvas"
                      onClick={() => !photos.fullbody.previewUrl && fullbodyInputRef.current?.click()}
                      style={{ aspectRatio: photos.fullbody.aspectRatio }}
                    >
                      {photos.fullbody.previewUrl ? (
                        <>
                          <img
                            src={photos.fullbody.previewUrl}
                            alt="Full body preview"
                            className="photo-slot-img"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removePhoto("fullbody");
                            }}
                            className="photo-slot-remove-btn"
                            aria-label="Remove photo"
                          >
                            ✕ Remove
                          </button>
                        </>
                      ) : (
                        <div className="photo-slot-placeholder">
                          <div className="photo-slot-icon">🧍</div>
                          <div className="photo-slot-instruction">Full Body</div>
                          <div className="photo-slot-hint">Head to toe, upright posture</div>
                          <div className="photo-slot-cta">+ Upload Image</div>
                        </div>
                      )}
                    </div>
                    <div className="photo-slot-footer">
                      {photos.fullbody.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================
                  SECTION 2: PERSONAL & DIVERSITY ATTRIBUTES
                 ============================================================ */}
              <div style={{ marginBottom: "50px", borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: "40px" }}>
                <h2
                  style={{
                    fontFamily: "var(--_typography---title-font)",
                    fontSize: "30px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  2. Personal &amp; Diversity Demographics
                </h2>
                <p style={{ fontSize: "14px", color: "#888888", marginBottom: "28px" }}>
                  VISAGE actively represents talent across all ages, backgrounds, languages, and identities.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label className="reg-field-label">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Elena Vance"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Stage / Booking Name (Optional)</label>
                    <input
                      type="text"
                      value={stageName}
                      onChange={(e) => setStageName(e.target.value)}
                      placeholder="Leave blank if same as legal name"
                      className="reg-input"
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label className="reg-field-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="talent@example.com"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">WhatsApp Number (For Direct Casting Alerts) *</label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="reg-input"
                        style={{ width: "95px", flexShrink: 0 }}
                      >
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+33">+33 (FR)</option>
                        <option value="+39">+39 (IT)</option>
                        <option value="+49">+49 (DE)</option>
                        <option value="+81">+81 (JP)</option>
                        <option value="+86">+86 (CN)</option>
                        <option value="+971">+971 (AE)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+61">+61 (AU)</option>
                      </select>
                      <input
                        type="tel"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="e.g. 212 555 0192"
                        className="reg-input"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "24px" }}>
                  <div>
                    <label className="reg-field-label">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Age Bracket Category *</label>
                    <select
                      value={ageBracket}
                      onChange={(e) => setAgeBracket(e.target.value)}
                      className="reg-input"
                    >
                      {AGE_BRACKETS.map((bracket) => (
                        <option key={bracket} value={bracket}>
                          {bracket}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="reg-field-label">Gender Identity *</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="reg-input"
                    >
                      {GENDER_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* LANGUAGES (ALL LANGUAGES SUPPORT) */}
                <div style={{ marginBottom: "24px" }}>
                  <label className="reg-field-label">Spoken Languages &amp; Dialects (Select all that apply) *</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    {POPULAR_LANGUAGES.map((lang) => {
                      const isSelected = selectedLanguages.includes(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => toggleLanguage(lang)}
                          className={`lang-pill ${isSelected ? "is-selected" : ""}`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {lang}
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ display: "flex", gap: "10px", maxWidth: "420px" }}>
                    <input
                      type="text"
                      value={customLanguage}
                      onChange={(e) => setCustomLanguage(e.target.value)}
                      placeholder="Add another language..."
                      className="reg-input"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addCustomLanguage();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={addCustomLanguage}
                      className="society-division-tab"
                      style={{ padding: "0 18px", whiteSpace: "nowrap" }}
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                  <div>
                    <label className="reg-field-label">Current City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. New York, Paris, Milan"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Country *</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. United States"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Instagram Handle</label>
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      placeholder="@yourhandle"
                      className="reg-input"
                    />
                  </div>
                </div>
              </div>

              {/* ============================================================
                  SECTION 3: PHYSICAL SPECS & MODEL BANK SEARCH TAGS
                 ============================================================ */}
              <div style={{ marginBottom: "50px", borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: "40px" }}>
                <h2
                  style={{
                    fontFamily: "var(--_typography---title-font)",
                    fontSize: "30px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  3. Physical Specs &amp; Appearance Details
                </h2>
                <p style={{ fontSize: "14px", color: "#888888", marginBottom: "28px" }}>
                  These specs populate the Director Model Bank search engine for precision casting calls.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "24px" }}>
                  <div>
                    <label className="reg-field-label">Height (Ft/In) *</label>
                    <input
                      type="text"
                      required
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      placeholder={'5\'10"'}
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Height (cm)</label>
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      placeholder="178"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Bust / Chest *</label>
                    <input
                      type="text"
                      required
                      value={bust}
                      onChange={(e) => setBust(e.target.value)}
                      placeholder={'34"'}
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Waist *</label>
                    <input
                      type="text"
                      required
                      value={waist}
                      onChange={(e) => setWaist(e.target.value)}
                      placeholder={'24"'}
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Hips *</label>
                    <input
                      type="text"
                      required
                      value={hips}
                      onChange={(e) => setHips(e.target.value)}
                      placeholder={'35"'}
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Shoe Size *</label>
                    <input
                      type="text"
                      required
                      value={shoeSize}
                      onChange={(e) => setShoeSize(e.target.value)}
                      placeholder="9 US / 40 EU"
                      className="reg-input"
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "24px" }}>
                  <div>
                    <label className="reg-field-label">Skin Tone / Complexion Category *</label>
                    <select
                      value={skinTone}
                      onChange={(e) => setSkinTone(e.target.value)}
                      className="reg-input"
                    >
                      {SKIN_TONES.map((tone) => (
                        <option key={tone} value={tone}>
                          {tone}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="reg-field-label">Eye Color *</label>
                    <input
                      type="text"
                      required
                      value={eyeColor}
                      onChange={(e) => setEyeColor(e.target.value)}
                      placeholder="e.g. Green, Dark Brown, Blue"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Natural Hair Color *</label>
                    <input
                      type="text"
                      required
                      value={naturalHairColor}
                      onChange={(e) => setNaturalHairColor(e.target.value)}
                      placeholder="e.g. Black, Dark Brown, Blonde"
                      className="reg-input"
                    />
                  </div>

                  <div>
                    <label className="reg-field-label">Current Hair Color (If Altered/Dyed)</label>
                    <input
                      type="text"
                      value={currentHairColor}
                      onChange={(e) => setCurrentHairColor(e.target.value)}
                      placeholder="e.g. Platinum Blonde, Copper"
                      className="reg-input"
                    />
                  </div>
                </div>

                {/* MODIFICATIONS (PIERCINGS & TATTOOS) */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "24px" }}>
                  <div>
                    <label className="reg-field-label">Do you have Piercings?</label>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                      {["No", "Yes"].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setHasPiercings(val)}
                          className={`lang-pill ${hasPiercings === val ? "is-selected" : ""}`}
                          style={{ flex: 1, justifyContent: "center" }}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                    {hasPiercings === "Yes" && (
                      <input
                        type="text"
                        value={piercingDetails}
                        onChange={(e) => setPiercingDetails(e.target.value)}
                        placeholder="Mention locations: e.g. Ears, Septum, Nostril"
                        className="reg-input"
                      />
                    )}
                  </div>

                  <div>
                    <label className="reg-field-label">Do you have Visible Tattoos?</label>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                      {["No", "Yes"].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setHasTattoos(val)}
                          className={`lang-pill ${hasTattoos === val ? "is-selected" : ""}`}
                          style={{ flex: 1, justifyContent: "center" }}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                    {hasTattoos === "Yes" && (
                      <input
                        type="text"
                        value={tattooDetails}
                        onChange={(e) => setTattooDetails(e.target.value)}
                        placeholder="Mention locations: e.g. Left forearm, collarbone"
                        className="reg-input"
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className="reg-field-label">Experience Level *</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="reg-input"
                    style={{ marginBottom: "20px" }}
                  >
                    {EXPERIENCE_LEVELS.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        {lvl}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="reg-field-label">Short Bio / Casting Goals (Optional)</label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell our booking desk about your creative background, runway experience, acting skills, or aspirations..."
                    className="reg-input"
                    style={{ resize: "vertical" }}
                  />
                </div>
              </div>

              {/* ============================================================
                  SECTION 4: MONTHLY LOOK RECERTIFICATION (CLIENT RULE)
                 ============================================================ */}
              <div
                style={{
                  marginBottom: "40px",
                  border: "1px solid rgba(245, 163, 163, 0.4)",
                  backgroundColor: "rgba(245, 163, 163, 0.04)",
                  borderRadius: "4px",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ color: "#f5a3a3", fontSize: "20px" }}>⚠️</span>
                  <div
                    style={{
                      fontFamily: "var(--_typography---title-font)",
                      fontSize: "20px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                    }}
                  >
                    Monthly Current-Look Recertification Policy (Mandatory)
                  </div>
                </div>

                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#dddddd", margin: "0 0 16px 0" }}>
                  To maintain absolute accuracy for casting directors, <strong>every month new photos reflecting your current look must be submitted</strong>. If new digitals are not provided within 30 days, your profile will automatically be placed <strong>ON HOLD</strong> and locked from submitting to new casting opportunities until refreshed. Any physical alterations (haircut, new hair color, piercings, or tattoos) must be reported immediately.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", fontSize: "14px", color: "#ffffff" }}>
                    <input
                      type="checkbox"
                      required
                      checked={agreedToMonthlyLookCheck}
                      onChange={(e) => setAgreedToMonthlyLookCheck(e.target.checked)}
                      style={{ marginTop: "4px", accentColor: "#ffffff" }}
                    />
                    <span>
                      I understand and agree that <strong>new photos must be submitted monthly</strong> to keep my casting profile active, or else my profile will be placed on hold.
                    </span>
                  </label>

                  <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", fontSize: "14px", color: "#ffffff" }}>
                    <input
                      type="checkbox"
                      required
                      checked={agreedToAuthenticPhotos}
                      onChange={(e) => setAgreedToAuthenticPhotos(e.target.checked)}
                      style={{ marginTop: "4px", accentColor: "#ffffff" }}
                    />
                    <span>
                      I confirm that the 3 photos uploaded above are recent, unfiltered, and accurately reflect my current physical look.
                    </span>
                  </label>

                  <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", fontSize: "14px", color: "#ffffff" }}>
                    <input
                      type="checkbox"
                      checked={agreedToWhatsAppAlerts}
                      onChange={(e) => setAgreedToWhatsAppAlerts(e.target.checked)}
                      style={{ marginTop: "4px", accentColor: "#ffffff" }}
                    />
                    <span>
                      Opt-in to <strong>instant WhatsApp casting alerts</strong> when new casting briefs matching my look and age category are uploaded.
                    </span>
                  </label>
                </div>
              </div>

              {/* ERROR MESSAGE DISPLAY */}
              {errorMessage && (
                <div
                  style={{
                    padding: "14px 18px",
                    backgroundColor: "rgba(255, 75, 75, 0.15)",
                    border: "1px solid rgba(255, 75, 75, 0.5)",
                    borderRadius: "4px",
                    color: "#ff8888",
                    fontSize: "14px",
                    marginBottom: "24px",
                  }}
                >
                  ⚠ {errorMessage}
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className="society-division-tab is-active"
                  style={{
                    padding: "18px 48px",
                    fontSize: "15px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Submit Model Registration &amp; Activate Profile ↗
                </button>
                <div style={{ marginTop: "12px", fontSize: "13px", color: "#666666" }}>
                  Your profile and photos will be reviewed by VISAGE booking directors within 24 hours.
                </div>
              </div>
            </form>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
