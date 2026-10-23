"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ASSETS, TEAM_MEMBERS } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        [".breadcrumb-title", ".breadcrumb-subtitle-block"],
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      const rows = gsap.utils.toArray<HTMLElement>(".team-row-reveal");
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  const socialIconList = [
    { src: ASSETS.teamSocials.facebook, label: "Facebook" },
    { src: ASSETS.teamSocials.instagram, label: "Instagram" },
    { src: ASSETS.teamSocials.pinterest, label: "Pinterest" },
    { src: ASSETS.teamSocials.dribbble, label: "Dribbble" },
  ];

  return (
    <div ref={containerRef}>
      <Navbar variant="light" />

      {/* BREADCRUMB HERO */}
      <section className="section breadcrumb-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumb-main-block">
            <div className="bredcrumb-inner-block breadcrumb-two-main-block">
              <h1 className="breadcrumb-title">Meet the minds behind this</h1>
              <div className="breadcrumb-subtitle-block bg-2">
                <h2 className="breadcrumb-subtitle">Our Team</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATING TEAM ROWS */}
      <section className="section team-inner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="team-inner-main-block">
            <div className="team-inner-flex-block">
              {TEAM_MEMBERS.map((member, idx) => {
                const isEvenRow = idx % 2 === 1;
                return (
                  <div
                    key={member.id}
                    className={`team-inner-list-wrapper w-dyn-list team-row-reveal ${
                      idx === TEAM_MEMBERS.length - 1 ? "last" : ""
                    }`}
                  >
                    <div role="list" className="team-inner-list w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        {!isEvenRow ? (
                          <Link
                            href={`/team/${member.slug}`}
                            className="team-inner-link w-inline-block"
                          >
                            <div className="team-image-block">
                              <img
                                src={member.image}
                                loading="lazy"
                                alt={member.name}
                                className="team-image-inner"
                              />
                            </div>
                            <div className="team-member-info-block">
                              <h2 className="team-member-name">
                                {member.name}
                              </h2>
                              <div className="team-member-jobtitle">
                                {member.role}
                              </div>
                              <p className="team-member-description">
                                {member.extendedBio}
                              </p>
                              <div className="team-social-icon-block">
                                {socialIconList.map((soc, i) => (
                                  <div
                                    key={i}
                                    className="team-social-icon-inner-block"
                                  >
                                    <img
                                      src={soc.src}
                                      loading="lazy"
                                      alt={soc.label}
                                      className="team-social-icon"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            href={`/team/${member.slug}`}
                            className="team-inner-link two w-inline-block"
                          >
                            <div className="team-member-info-block two">
                              <h2 className="team-member-name">
                                {member.name}
                              </h2>
                              <div className="team-member-jobtitle">
                                {member.role}
                              </div>
                              <p className="team-member-description two">
                                {member.extendedBio}
                              </p>
                              <div className="team-social-icon-block two">
                                {socialIconList.map((soc, i) => (
                                  <div
                                    key={i}
                                    className="team-social-icon-inner-block"
                                  >
                                    <img
                                      src={soc.src}
                                      loading="lazy"
                                      alt={soc.label}
                                      className="team-social-icon"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="team-image-block">
                              <img
                                src={member.image}
                                loading="lazy"
                                alt={member.name}
                                className="team-image-inner"
                              />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
