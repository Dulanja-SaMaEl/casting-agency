"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, SERVICES, TEAM_MEMBERS } from "@/data/agencyData";

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

      // 2. Service Two Section Scroll-In Reveal
      gsap.fromTo(
        ".service-title-grid > div",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-two-section",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".service-info-main-block",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-two-grid.one",
            start: "top 85%",
          },
        }
      );

      // 3. Team Pills Section Scroll-In Reveal
      gsap.fromTo(
        ".team-title-grid > div",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".team-list-wrapper",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 85%",
          },
        }
      );

      // 4. Dark Blog Cards growIn on Scroll
      gsap.fromTo(
        ".blog-section .section-title-inner-block",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-section",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".about-blog-card",
        { scale: 0.75, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.65,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".blog-list",
            start: "top 82%",
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
                provide talent direction
              </div>
              <h1 className="about-hero-title">about our casting studio</h1>
              <div className="frame-item two responsive-image one">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f5c288ecbde7adb14_Portfolio%20Image%20Two.png"
                  loading="lazy"
                  alt="About Hero"
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item two responsive-image hero-responsive-image-two">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f5c288ecbde7adb14_Portfolio%20Image%20Two.png"
                  loading="lazy"
                  alt="About Hero"
                  className="about-hero-image"
                />
              </div>
            </div>

            <div className="about-wrapper">
              <div className="frame-item seven">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688ddcba2ce52119112f38b3_about%20hero%20image%20(2).webp"
                  loading="lazy"
                  alt="Casting Tunnel Frame 7"
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item six">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688ddcba4a5b551e662869e8_about%20hero%20image%20(1).webp"
                  loading="lazy"
                  alt="Casting Tunnel Frame 6"
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item four">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f5c288ecbde7adb14_Portfolio%20Image%20Two.png"
                  loading="lazy"
                  alt="Casting Tunnel Frame 4"
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item three">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688b119f5c288ecbde7adb14_Portfolio%20Image%20Two.png"
                  loading="lazy"
                  alt="Casting Tunnel Frame 3"
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item five">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688ddcba4a5b551e662869e8_about%20hero%20image%20(1).webp"
                  loading="lazy"
                  alt="Casting Tunnel Frame 5"
                  className="about-hero-image"
                />
              </div>
              <div className="frame-item two">
                <img
                  src="https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/688ddcba2ce52119112f38b3_about%20hero%20image%20(2).webp"
                  loading="lazy"
                  alt="Casting Tunnel Frame 2"
                  className="about-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TWO 2x3 BORDERED GRID SECTION */}
      <section className="section service-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-two-main-block">
            <div className="w-layout-grid service-title-grid">
              <div className="section-title-main-block">
                <div className="section-title-inner-block title-left">
                  <div className="section-subtitle">fearless minds build</div>
                  <h2 className="section-title">
                    talent reshapes the screen
                  </h2>
                </div>
              </div>
              <div
                id="w-node-b45745eb-cb8f-0dfc-81c9-3dabb9f13390-813d588b"
                className="secrvice-subtext-right-block"
              >
                <div className="section-title-subtext-inner-block two">
                  <h3 className="section-subtext">service</h3>
                </div>
              </div>
            </div>

            {/* Row 1 */}
            <div className="w-layout-grid service-two-grid one">
              {sixServices.slice(0, 3).map((service, i) => {
                const isHovered = hoveredServiceIdx === i;
                const cellClass =
                  i === 0 ? "" : i === 1 ? "two" : "last";
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredServiceIdx(i)}
                    onMouseLeave={() => setHoveredServiceIdx(null)}
                    className={`service-info-main-block ${cellClass}`}
                  >
                    <Link
                      href={`/service/${service.slug}`}
                      className="service-info-link-block w-inline-block"
                    >
                      <div
                        className="service-name-block"
                        style={{ position: "relative", zIndex: 2 }}
                      >
                        <h2
                          className="service-name"
                          style={{
                            transform: isHovered
                              ? "translate3d(0, 40px, 0)"
                              : "translate3d(0, 0px, 0)",
                            transition:
                              "transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                          }}
                        >
                          {service.shortTitle}
                        </h2>
                      </div>
                      <img
                        src={service.altImage}
                        loading="lazy"
                        alt={service.title}
                        className="service-image"
                        style={{
                          height: isHovered ? "100%" : "0%",
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered
                            ? "scale3d(1.1, 1.1, 1)"
                            : "scale3d(1, 1, 1)",
                          transition:
                            "height 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.5s ease, transform 0.5s ease",
                        }}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="w-layout-grid service-two-grid two">
              {sixServices.slice(3, 6).map((service, idx) => {
                const i = idx + 3;
                const isHovered = hoveredServiceIdx === i;
                const cellClass =
                  idx === 0 ? "" : idx === 1 ? "two" : "last";
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredServiceIdx(i)}
                    onMouseLeave={() => setHoveredServiceIdx(null)}
                    className={`service-info-main-block ${cellClass}`}
                  >
                    <Link
                      href={`/service/${service.slug}`}
                      className="service-info-link-block w-inline-block"
                    >
                      <div
                        className="service-name-block"
                        style={{ position: "relative", zIndex: 2 }}
                      >
                        <h2
                          className="service-name"
                          style={{
                            transform: isHovered
                              ? "translate3d(0, 40px, 0)"
                              : "translate3d(0, 0px, 0)",
                            transition:
                              "transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                          }}
                        >
                          {service.shortTitle}
                        </h2>
                      </div>
                      <img
                        src={service.altImage}
                        loading="lazy"
                        alt={service.title}
                        className="service-image"
                        style={{
                          height: isHovered ? "100%" : "0%",
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered
                            ? "scale3d(1.1, 1.1, 1)"
                            : "scale3d(1, 1, 1)",
                          transition:
                            "height 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.5s ease, transform 0.5s ease",
                        }}
                      />
                    </Link>
                  </div>
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

      {/* INTERACTIVE TEAM PILLS SECTION */}
      <section className="section team-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="team-mein-block">
            <div className="w-layout-grid team-title-grid">
              <div
                id="w-node-c3ed53bc-f64b-88ac-73f7-6a3120714daf-813d588b"
                className="section-title-main-block"
              >
                <div className="section-title-inner-block title-left">
                  <h2 className="section-title">wonderful directors</h2>
                </div>
              </div>
              <div
                id="w-node-aeb8bb79-9f88-2d90-9d75-14c98e488760-813d588b"
                className="secrvice-subtext-right-block"
              >
                <div className="section-title-subtext-inner-block bg-dark">
                  <h3 className="section-subtext">teammates</h3>
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
                            className="team-info-link-block w-inline-block"
                            style={{
                              backgroundColor: isHovered
                                ? "#000000"
                                : "transparent",
                              transition: "background-color 0.3s ease",
                            }}
                          >
                            <div className="team-info-block">
                              <h3
                                className="team-members-name"
                                style={{
                                  color: isHovered ? "#ffffff" : "#000000",
                                  transition: "color 0.3s ease",
                                }}
                              >
                                {member.name}
                              </h3>
                              <div
                                className="team-job-title"
                                style={{
                                  color: isHovered ? "#ffffff" : "#000000",
                                  transition: "color 0.3s ease",
                                }}
                              >
                                {member.role}
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
