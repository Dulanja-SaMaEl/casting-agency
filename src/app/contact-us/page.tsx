"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ASSETS } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        [".breadcrumb-title", ".breadcrumb-subtitle-block"],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".contact-left-block .section-title-inner-block",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-section-one",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-content-inner-block",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.68,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-content-grid",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-main-block",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-right-block",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-map-block",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-map-block",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef}>
      <Navbar variant="light" />

      {/* BREADCRUMB HERO */}
      <section className="section breadcrumb-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumb-main-block">
            <div className="bredcrumb-inner-block">
              <h1 className="breadcrumb-title">about our casting studio</h1>
              <div className="breadcrumb-subtitle-block">
                <h2 className="breadcrumb-subtitle">contact us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID + FORM SECTION */}
      <section className="section contact-info-section-one">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid contact-info-grid">
            {/* Left Info & Crosshair Grid */}
            <div className="contact-left-block">
              <div className="section-title-main-block">
                <div className="section-title-inner-block title-left">
                  <div className="section-subtitle">fearless minds build</div>
                  <h2 className="section-title two">
                    talent reshapes the screen
                  </h2>
                </div>
              </div>

              <div className="w-layout-grid contact-content-grid">
                <div className="contact-content-inner-block">
                  <div className="contact-content-info-block">
                    <div className="contact-info-icon-block">
                      <img
                        src={ASSETS.contactIcons.email}
                        loading="lazy"
                        alt="Phone Icon"
                        className="contact-info-icon"
                      />
                    </div>
                    <div className="contact-info">
                      <h3 className="contact-info-title">casting desk</h3>
                      <a href="tel:+1246333085" className="contact-info-link">
                        +1 (246) 333-085
                      </a>
                      <a href="tel:+12125550199" className="contact-info-link">
                        +1 (212) 555-0199
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-content-inner-block">
                  <div className="contact-content-info-block">
                    <div className="contact-info-icon-block">
                      <img
                        src={ASSETS.contactIcons.location}
                        loading="lazy"
                        alt="Location Icon"
                        className="contact-info-icon"
                      />
                    </div>
                    <div className="contact-info">
                      <h3 className="contact-info-title">studio</h3>
                      <div className="contact-info-location">
                        321 Mercer Street, 3rd Floor, SoHo, New York
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-content-inner-block">
                  <div className="contact-content-info-block">
                    <div className="contact-info-icon-block">
                      <img
                        src={ASSETS.contactIcons.phone}
                        loading="lazy"
                        alt="Email Icon"
                        className="contact-info-icon"
                      />
                    </div>
                    <div className="contact-info">
                      <h3 className="contact-info-title">email</h3>
                      <a
                        href="mailto:casting@refluxstudio.com"
                        className="contact-info-link"
                      >
                        casting@refluxstudio.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-content-inner-block">
                  <div className="contact-content-info-block">
                    <div className="contact-info-icon-block">
                      <img
                        src={ASSETS.contactIcons.location}
                        loading="lazy"
                        alt="Paris Bureau Icon"
                        className="contact-info-icon"
                      />
                    </div>
                    <div className="contact-info">
                      <h3 className="contact-info-title">paris desk</h3>
                      <a href="tel:+33142685500" className="contact-info-link">
                        +33 1 42 68 55 00
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-line-block" />
                <div className="info-line-block two" />
              </div>
            </div>

            {/* Right Form Block */}
            <div className="contact-right-block">
              <div className="contact-form-main-block">
                <div className="contact-form-inner-block">
                  <h2 className="contact-form-title">send a message</h2>
                  <div className="contact-form w-form">
                    {!submitted ? (
                      <form
                        id="email-form"
                        name="email-form"
                        onSubmit={handleSubmit}
                        className="contact-form-inner"
                      >
                        <div className="contact-form-filed-block">
                          <input
                            className="input-field w-input"
                            maxLength={256}
                            name="firstName"
                            placeholder="First Name*"
                            type="text"
                            required
                          />
                          <input
                            className="input-field w-input"
                            maxLength={256}
                            name="lastName"
                            placeholder="Last Name*"
                            type="text"
                            required
                          />
                        </div>
                        <div className="contact-form-filed-block">
                          <input
                            className="input-field w-input"
                            maxLength={256}
                            name="phone"
                            placeholder="Phone Number*"
                            type="tel"
                            required
                          />
                          <input
                            className="input-field w-input"
                            maxLength={256}
                            name="email"
                            placeholder="Email Address*"
                            type="email"
                            required
                          />
                        </div>
                        <div className="contact-text-area-block">
                          <textarea
                            placeholder="write a casting brief or talent inquiry......"
                            maxLength={5000}
                            name="message"
                            className="text-area w-input"
                            required
                          />
                        </div>
                        <div className="form-submit-button-block">
                          <input
                            type="submit"
                            className="submit-button w-button"
                            value="send now"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </form>
                    ) : (
                      <div
                        className="w-form-done"
                        style={{ display: "block", padding: "30px" }}
                      >
                        <div>
                          Thank you! Your casting inquiry has been received by
                          our producers.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP EMBED */}
      <div className="contact-map-block">
        <div className="contact-map w-embed w-iframe">
          <iframe
            title="Reflux Casting Studio Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.867231884982!2d72.91681337587046!3d20.91766059158395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f7151b6b89df%3A0x58bd1186435b8013!2sPeacefulQode%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743681617959!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
