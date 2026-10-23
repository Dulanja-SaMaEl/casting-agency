"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, SERVICES, TALENT_BOARD, TEAM_MEMBERS } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM_NODE_IDS = [
  "w-node-_158cc2ed-9a55-9c42-d22e-26f6b5f8b4e9-813d588b",
  "w-node-_0039f555-5892-0dc3-3a47-0d37ff5d6722-813d588b",
  "w-node-d73fc429-b90b-2485-7119-f5da7d1ae41f-813d588b",
  "w-node-_1a3e6a61-7f04-9b97-33d1-d321a156fdc0-813d588b",
  "w-node-c5a226c3-45e1-cd97-8598-605782b11d29-813d588b",
];

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState<number | null>(
    null
  );
  const [hoveredTeamIdx, setHoveredTeamIdx] = useState<number | null>(null);
  const [teamMouseOffset, setTeamMouseOffset] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [hoveredBlogIdx, setHoveredBlogIdx] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 1. 3D Z-Axis Perspective Tunnel Hero (a-27) on Desktop (>=992px)
      mm.add("(min-width: 992px)", () => {
        gsap.set(".frame-item.two:not(.responsive-image)", { opacity: 1 });
        gsap.set(".frame-item.five", { opacity: 1 });
        gsap.set(
          [
            ".frame-item.three",
            ".frame-item.four",
            ".frame-item.six",
            ".frame-item.seven",
          ],
          { opacity: 0 }
        );

        const tunnelTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });

        tunnelTl.fromTo(
          ".about-wrapper",
          { z: "0rem" },
          { z: "200rem", duration: 1, ease: "none" },
          0
        );

        tunnelTl
          .to(
            ".frame-item.two:not(.responsive-image)",
            { opacity: 0, duration: 0.15, ease: "none" },
            0.05
          )
          .to(
            ".frame-item.five",
            { opacity: 0, duration: 0.15, ease: "none" },
            0.05
          )
          .to(
            ".frame-item.three",
            { opacity: 1, duration: 0.18, ease: "none" },
            0.08
          )
          .to(
            ".frame-item.four",
            { opacity: 1, duration: 0.18, ease: "none" },
            0.12
          )
          .to(
            ".frame-item.three",
            { opacity: 0, duration: 0.18, ease: "none" },
            0.35
          )
          .to(
            ".frame-item.four",
            { opacity: 0, duration: 0.18, ease: "none" },
            0.55
          )
          .to(
            ".frame-item.six",
            { opacity: 1, duration: 0.2, ease: "none" },
            0.35
          )
          .to(
            ".frame-item.seven",
            { opacity: 1, duration: 0.2, ease: "none" },
            0.45
          )
          .to(
            ".frame-item.six",
            { opacity: 0, duration: 0.2, ease: "none" },
            0.78
          )
          .to(
            ".frame-item.seven",
            { opacity: 0, duration: 0.2, ease: "none" },
            0.85
          );
      });

      // 1B. Tablet & Mobile Hero Entrance + Spatial Parallax (<=991px)
      mm.add("(max-width: 991px)", () => {
        gsap.fromTo(
          [".about-hero-subtitle", ".about-hero-title"],
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          ".frame-item.two.responsive-image",
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            delay: 0.2,
            stagger: 0.15,
            ease: "power3.out",
          }
        );

        gsap.to(".frame-item.two.responsive-image.one", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });

        gsap.to(".frame-item.two.responsive-image.hero-responsive-image-two", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      });

      // 2. Creative Editorial Divisions Matrix Smooth Scroll-In Reveal
      gsap.fromTo(
        ".service-title-grid > div",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.72,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-two-section",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      const divisionCards = gsap.utils.toArray<HTMLElement>(
        ".creative-division-card"
      );
      divisionCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 38, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            delay: (i % 3) * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );

        const lookbookFrame = card.querySelector(".division-card-lookbook");
        if (lookbookFrame) {
          gsap.fromTo(
            lookbookFrame,
            { clipPath: "inset(12% 6% 12% 6%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.85,
              delay: (i % 3) * 0.06,
              ease: "expo.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // 3. Team Pills Section Early & Smooth Scroll-In Reveal
      gsap.fromTo(
        ".team-title-grid > div",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".team-list-wrapper",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.68,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Dark Blog Cards Early & Smooth Reveal on Scroll
      gsap.fromTo(
        ".blog-section .section-title-inner-block",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-section",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".about-blog-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.72,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-list",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const handleTeamMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTeamMouseOffset({
      x: relX * 60,
      y: relY * 60,
    });
  };

  const sixServices = SERVICES.slice(0, 6);
  const fiveTeam = TEAM_MEMBERS.slice(0, 5);
  const threeBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div ref={containerRef}>
      <Navbar variant="dark" />

      {/* 3D Z-AXIS PERSPECTIVE TUNNEL HERO SECTION */}
      <section className="section about-hero-section">
        <div className="about-hero-sticky-block">
          <div className="about-frame-wrapper">
            <div className="about-hero-title-block">
              <div className="about-hero-subtitle">
                global model management (demo)
              </div>
              <h1 className="about-hero-title">about our model agency</h1>
              <div className="frame-item two responsive-image one">
                <img
                  src={TALENT_BOARD[0].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[0].name}
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item two responsive-image hero-responsive-image-two">
                <img
                  src={TALENT_BOARD[2].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[2].name}
                  className="about-hero-image"
                />
              </div>
            </div>

            <div className="about-wrapper">
              <div className="frame-item seven">
                <img
                  src={TALENT_BOARD[5].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[5].name}
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item six">
                <img
                  src={TALENT_BOARD[4].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[4].name}
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item four">
                <img
                  src={TALENT_BOARD[3].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[3].name}
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item three">
                <img
                  src={TALENT_BOARD[2].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[2].name}
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item five">
                <img
                  src={TALENT_BOARD[1].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[1].name}
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item two">
                <img
                  src={TALENT_BOARD[0].primaryImage}
                  loading="lazy"
                  alt={TALENT_BOARD[0].name}
                  className="about-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE 3x2 EDITORIAL MODEL DIVISIONS MATRIX SECTION */}
      <section className="section service-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-two-main-block">
            <div className="w-layout-grid service-title-grid">
              <div className="section-title-main-block">
                <div className="section-title-inner-block title-left">
                  <div className="society-eyebrow-row" style={{ marginBottom: "8px" }}>
                    <span
                      className="society-eyebrow-pill"
                      style={{ backgroundColor: "#a7d8de" }}
                    >
                      REPRESENTATION &amp; CASTING DIVISIONS (DEMO)
                    </span>
                    <span className="society-eyebrow-code">
                      HOVER ANY DIVISION TO PREVIEW CAMPAIGN REEL
                    </span>
                  </div>
                  <h2 className="section-title">
                    divisions that shape fashion
                  </h2>
                </div>
              </div>
              <div
                id="w-node-b45745eb-cb8f-0dfc-81c9-3dabb9f13390-813d588b"
                className="secrvice-subtext-right-block"
              >
                <div className="section-title-subtext-inner-block two">
                  <h3 className="section-subtext">divisions</h3>
                </div>
              </div>
            </div>

            {/* Creative 3x2 Interactive Division Lookbook Grid */}
            <div className="creative-division-grid">
              {sixServices.map((service, i) => {
                const isHovered = hoveredServiceIdx === i;
                const primaryStat = service.stats[0];
                return (
                  <article
                    key={service.id}
                    onMouseEnter={() => setHoveredServiceIdx(i)}
                    onMouseLeave={() => setHoveredServiceIdx(null)}
                    className={`creative-division-card ${
                      isHovered ? "is-hovered" : ""
                    }`}
                    style={
                      {
                        "--div-accent": service.color,
                      } as React.CSSProperties
                    }
                  >
                    <Link
                      href={`/service/${service.slug}`}
                      className="creative-division-link"
                    >
                      {/* Full-Bleed Hover Curtain Backdrop */}
                      <div className="division-card-backdrop" aria-hidden="true">
                        <img
                          src={service.altImage}
                          loading="lazy"
                          alt=""
                          className="division-card-backdrop-img"
                        />
                        <div className="division-card-backdrop-scrim" />
                      </div>

                      {/* Top Minimalist Index Header */}
                      <div className="division-card-top">
                        <span className="division-card-index-pill">
                          0{i + 1} / DIVISION
                        </span>
                        {primaryStat && (
                          <span className="division-card-stat-pill">
                            {primaryStat.value}{" "}
                            {primaryStat.label.replace(" (Demo)", "")}
                          </span>
                        )}
                      </div>

                      {/* Center Framed Editorial Model Lookbook Window */}
                      <div className="division-card-lookbook">
                        <img
                          src={service.image}
                          loading="lazy"
                          alt={service.title}
                          className="division-card-lookbook-img primary"
                        />
                        <img
                          src={service.altImage}
                          loading="lazy"
                          alt={`${service.title} Campaign`}
                          className="division-card-lookbook-img secondary"
                        />
                      </div>

                      {/* Bottom Typography, Deliverables & Magnetic Arrow */}
                      <div className="division-card-bottom">
                        <div className="division-card-title-row">
                          <h3 className="division-card-title">
                            {service.shortTitle}
                          </h3>
                          <span className="division-card-arrow">↗</span>
                        </div>

                        <p className="division-card-desc">
                          {service.shortDesc}
                        </p>

                        <div className="division-card-tags">
                          {service.deliverables.slice(0, 2).map((item, dIdx) => (
                            <span key={dIdx} className="division-card-tag-chip">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FIXED PARALLAX IMAGE BANNER */}
      <section className="section about-video-section">
        <div className="about-image-single-block" />
      </section>

      {/* DIRECTORS & SCOUTING LEADERSHIP SECTION */}
      <section className="section team-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="team-mein-block">
            <div className="w-layout-grid team-title-grid">
              <div
                id="w-node-c3ed53bc-f64b-88ac-73f7-6a3120714daf-813d588b"
                className="section-title-main-block"
              >
                <div className="section-title-inner-block title-left">
                  <h2 className="section-title">DIRECTORS &amp; SCOUTING LEADERSHIP</h2>
                </div>
              </div>
              <div
                id="w-node-aeb8bb79-9f88-2d90-9d75-14c98e488760-813d588b"
                className="secrvice-subtext-right-block"
              >
                <div className="section-title-subtext-inner-block bg-dark">
                  <h3 className="section-subtext">EXECUTIVE BOARD</h3>
                </div>
              </div>
            </div>

            <div className="w-layout-grid team-grid">
              {fiveTeam.map((member, idx) => {
                const isHovered = hoveredTeamIdx === idx;
                return (
                  <div
                    key={member.id}
                    id={TEAM_NODE_IDS[idx]}
                    onMouseEnter={() => setHoveredTeamIdx(idx)}
                    onMouseLeave={() => {
                      setHoveredTeamIdx(null);
                      setTeamMouseOffset({ x: 0, y: 0 });
                    }}
                    onMouseMove={handleTeamMouseMove}
                    className="team-list-wrapper w-dyn-list"
                  >
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="team-info-main-block">
                          <Link
                            href={`/team/${member.slug}`}
                            className={`team-info-link-block w-inline-block ${
                              isHovered ? "is-hovered" : ""
                            }`}
                          >
                            <div className="team-info-block">
                              <span className="team-index-kicker">0{idx + 1}</span>
                              <img
                                src={member.image}
                                loading="lazy"
                                alt={member.name}
                                className="team-mobile-avatar"
                              />
                              <div className="team-info-text-wrap">
                                <h3 className="team-members-name">
                                  {member.name}
                                </h3>
                                <div className="team-job-title">
                                  {member.role}
                                </div>
                              </div>
                            </div>
                            <img
                              src={member.image}
                              loading="lazy"
                              alt={member.name}
                              className="team-image"
                              style={{
                                display: isHovered ? "block" : "none",
                                transform: isHovered
                                  ? `translate3d(${teamMouseOffset.x}px, ${teamMouseOffset.y}px, 0) scale3d(1, 1, 1)`
                                  : "translate3d(0px, 0px, 0) scale3d(0.9, 0.9, 1)",
                                transition: "transform 0.15s ease-out",
                                zIndex: 20,
                                pointerEvents: "none",
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DARK BLOG SECTION */}
      <section className="section blog-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="blog-main-block">
            <div className="section-title-main-block">
              <div className="section-title-inner-block">
                <div className="section-subtitle text-white">
                  Casting Insights
                </div>
                <h2 className="section-title text-white">
                  Ideas That Shape Cinema
                </h2>
              </div>
            </div>

            <div className="blog-list-wrapper w-dyn-list">
              <div role="list" className="blog-list w-dyn-items">
                {threeBlogs.map((post, idx) => {
                  const isHovered = hoveredBlogIdx === idx;
                  return (
                    <div
                      key={post.id}
                      role="listitem"
                      onMouseEnter={() => setHoveredBlogIdx(idx)}
                      onMouseLeave={() => setHoveredBlogIdx(null)}
                      className="blog-list-item w-dyn-item about-blog-card"
                    >
                      <div className="blog-info-block">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="blog-info-link-block w-inline-block"
                        >
                          <div className="blog-image-block">
                            <img
                              src={post.image}
                              loading="lazy"
                              alt={post.title}
                              className="blog-image"
                              style={{
                                transform: isHovered
                                  ? "scale3d(1.1, 1.1, 1)"
                                  : "scale3d(1, 1, 1)",
                                transition:
                                  "transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                              }}
                            />
                          </div>
                          <div className="blog-info-date-block">
                            <div className="blog-tage">{post.category}</div>
                            <div className="blog-date">{post.date}</div>
                          </div>
                          <h3 className="update-blog-name">{post.title}</h3>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
