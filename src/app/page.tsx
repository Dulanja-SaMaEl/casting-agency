"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ASSETS,
  PROJECTS,
  SERVICES,
  TESTIMONIALS,
} from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIAL_NODE_IDS = [
  "w-node-_7b74d89c-7046-19c6-ef5c-beb5949ea906-21421efe",
  "w-node-_714a00c9-b486-dee6-e827-9839600af429-21421efe",
  "w-node-_33ff8fc0-2bb5-6224-c52e-090badc2e52a-21421efe",
  "w-node-_6cb21468-a851-654c-eb5b-981dc9f66fdf-21421efe",
];

const TESTIMONIAL_QUOTE_ICONS = [
  "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d7e785817aa6b97eb_1%20(3).svg",
  "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3dad430c3f5702f503_1%20(1).svg",
  "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d7ccfd9626d9cf79d_1%20(2).svg",
  "https://cdn.prod.website-files.com/6889a6303ae9dc8c21421ef8/68999b3d8b6be83b0d23f1da_1%20(4).svg",
];

const COUNTERS = [
  {
    id: "counter-1",
    label: "years of experience",
    col1: ["3", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["9", "2", "3", "4", "5", "6", "7", "8", "9", "9"],
  },
  {
    id: "counter-2",
    label: "casting awards earned",
    col1: ["6", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["8", "2", "3", "4", "5", "6", "7", "8", "9", "8"],
  },
  {
    id: "counter-3",
    label: "global productions cast",
    col1: ["2", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["7", "2", "3", "4", "5", "6", "7", "8", "9", "7"],
  },
  {
    id: "counter-4",
    label: "studios served globally",
    col1: ["9", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["4", "2", "3", "4", "5", "6", "7", "8", "9", "4"],
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 1. Hero Entrance Animation (a-11)
      gsap.fromTo(
        ".hero-title",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }
      );

      gsap.fromTo(
        ".hero-badge-anim",
        { y: 130, rotate: -15, opacity: 0 },
        {
          y: 0,
          rotate: -15,
          opacity: 1,
          duration: 0.6,
          delay: 0.25,
          ease: "power3.out",
          stagger: 0.1,
        }
      );

      gsap.fromTo(
        ".hero-centar-block",
        { width: "0%" },
        {
          width: "100%",
          duration: 1.0,
          delay: 0.6,
          ease: "power3.inOut",
          stagger: 0.12,
        }
      );

      gsap.fromTo(
        ".hero-inner-info-block",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.85,
          ease: "power3.out",
        }
      );

      // 2. Service Section Scroll-In Reveal
      gsap.fromTo(
        ".service-section .section-title-inner-block",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-section",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".service-card-entrance",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 85%",
          },
        }
      );

      // 3. Desktop-Only Sticky Scroll Choreographies (>=992px)
      mm.add("(min-width: 992px)", () => {
        // A. Horizontal Scroll Projects Section (a-23)
        gsap.set(".projects-horizontal-bg-block.one", { opacity: 1 });
        gsap.set(".projects-horizontal-bg-block.two", { opacity: 0 });
        gsap.set(".projects-horizontal-bg-block.three", { opacity: 0 });
        gsap.set(".projects-horizontal-bg-block.four", { opacity: 0 });

        const projectsTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });

        // 20% -> 25%: Letters rotateY(0deg -> 90deg)
        projectsTl.fromTo(
          ".projects-letter-3d",
          { rotateY: 0 },
          { rotateY: 90, duration: 0.06, ease: "none", stagger: 0.004 },
          0.18
        );

        // 20% -> 40%: Track moves 0% -> -20%, bg 1 -> bg 2
        projectsTl
          .fromTo(
            ".projects-info-inner-block",
            { xPercent: 0 },
            { xPercent: -20, duration: 0.2, ease: "none" },
            0.2
          )
          .to(
            ".projects-horizontal-bg-block.one",
            { opacity: 0, duration: 0.15, ease: "none" },
            0.25
          )
          .to(
            ".projects-horizontal-bg-block.two",
            { opacity: 1, duration: 0.15, ease: "none" },
            0.25
          )
          // 40% -> 60%: Track moves -20% -> -42%, bg 2 -> bg 3
          .to(
            ".projects-info-inner-block",
            { xPercent: -42, duration: 0.2, ease: "none" },
            0.4
          )
          .to(
            ".projects-horizontal-bg-block.two",
            { opacity: 0, duration: 0.15, ease: "none" },
            0.45
          )
          .to(
            ".projects-horizontal-bg-block.three",
            { opacity: 1, duration: 0.15, ease: "none" },
            0.45
          )
          // 60% -> 80%: Track moves -42% -> -70%, bg 3 -> bg 4
          .to(
            ".projects-info-inner-block",
            { xPercent: -70, duration: 0.25, ease: "none" },
            0.6
          )
          .to(
            ".projects-horizontal-bg-block.three",
            { opacity: 0, duration: 0.15, ease: "none" },
            0.65
          )
          .to(
            ".projects-horizontal-bg-block.four",
            { opacity: 1, duration: 0.15, ease: "none" },
            0.65
          );

        // B. About Section 3-Line Text Unmask (a-24)
        gsap.set(
          [
            ".text-overlay.row-one",
            ".text-overlay.row-two",
            ".text-overlay.row-three",
          ],
          { width: "100%" }
        );

        const unmaskTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-section-title-block",
            start: "top 85%",
            end: "bottom 25%",
            scrub: 0.5,
          },
        });

        unmaskTl
          .to(".text-overlay.row-one", {
            width: "0%",
            duration: 0.33,
            ease: "none",
          })
          .to(".text-overlay.row-two", {
            width: "0%",
            duration: 0.33,
            ease: "none",
          })
          .to(".text-overlay.row-three", {
            width: "0%",
            duration: 0.34,
            ease: "none",
          });

        // C. Sticky Testimonial Stack (a-26)
        gsap.set(".testimonial-inner-info-block.one", {
          yPercent: 270,
          rotate: 10,
        });
        gsap.set(".testimonial-inner-info-block.two", {
          yPercent: 270,
          rotate: -10,
        });
        gsap.set(".testimonial-inner-info-block.three", {
          yPercent: 270,
          rotate: 10,
        });
        gsap.set(".testimonial-inner-info-block.four", {
          yPercent: 270,
          rotate: -10,
        });

        const testTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });

        testTl
          .to(
            ".testimonial-inner-info-block.one",
            { yPercent: 0, rotate: 10, duration: 0.18, ease: "none" },
            0.12
          )
          .to(
            ".testimonial-inner-info-block.two",
            { yPercent: 0, rotate: -10, duration: 0.18, ease: "none" },
            0.32
          )
          .to(
            ".testimonial-inner-info-block.three",
            { yPercent: 0, rotate: 10, duration: 0.2, ease: "none" },
            0.52
          )
          .to(
            ".testimonial-inner-info-block.four",
            { yPercent: 0, rotate: -10, duration: 0.2, ease: "none" },
            0.72
          );
      });

      // 4. About Badge & Description Scroll-In Reveal
      gsap.fromTo(
        ".about-subtext-block",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-desc-reveal",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-info-grid-two",
            start: "top 85%",
          },
        }
      );

      // 5. Slot-Machine Odometer Counters (a-25)
      gsap.set(".about-counter-frist-number-block", { yPercent: -90 });
      gsap.set(".about-counter-secend-number-block", { yPercent: 0 });

      ScrollTrigger.create({
        trigger: ".about-counter-grid",
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            ".about-counter-box",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            }
          );
          gsap.to(".about-counter-frist-number-block", {
            yPercent: 0,
            duration: 2.0,
            ease: "power2.inOut",
          });
          gsap.to(".about-counter-secend-number-block", {
            yPercent: -90,
            duration: 2.0,
            ease: "power2.inOut",
          });
        },
      });

      // 6. Video & Contact Section Scroll-In Reveal
      gsap.fromTo(
        ".video-section",
        { scale: 0.96, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".video-section",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".testimonial-inner-block",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".concat-info-block",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-section",
            start: "top 80%",
          },
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const homeServices = SERVICES.slice(0, 4);
  const homeProjects = PROJECTS.slice(0, 4);
  const bgClasses = ["bg-one", "bg-two", "bg-three", "bg-four"];
  const boxClasses = ["box-1", "box-2", "box-3", "box-4"];

  return (
    <div ref={containerRef}>
      <Navbar variant="light" />

      {/* HERO SECTION */}
      <section className="section hero-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-main-block">
            <div className="hero-inner-block">
              {/* Row 1: RE + Image 1 + CREATE */}
              <div className="w-layout-grid hero-grid-block">
                <div className="hero-text-left-block">
                  <h1 className="hero-title">re</h1>
                  <div className="hero-text-small-text-block hero-badge-anim">
                    <h2 className="hero-small-text">casting</h2>
                  </div>
                </div>
                <div className="hero-centar-block" style={{ overflow: "hidden" }}>
                  <img
                    src={ASSETS.heroImage1}
                    loading="eager"
                    alt="Principal Talent Portrait"
                    className="hero-image"
                  />
                </div>
                <div className="hero-text-right-block">
                  <h1 className="hero-title">create</h1>
                </div>
              </div>

              {/* Row 2: IDENTITIES + Image 2 */}
              <div className="w-layout-grid hero-grid-block two">
                <div className="hero-text-right-block">
                  <h1 className="hero-title">identities</h1>
                  <div className="hero-text-small-text-block two hero-badge-anim">
                    <h2 className="hero-small-text">talent</h2>
                  </div>
                </div>
                <div className="hero-centar-block" style={{ overflow: "hidden" }}>
                  <img
                    src={ASSETS.heroImage2}
                    loading="eager"
                    alt="Editorial Runway Casting"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>

            {/* Hero Bottom Bar */}
            <div className="hero-inner-info-block">
              <div className="hero-description-block">
                <p className="hero-description">
                  Your production deserves more than a standard roster—it needs a
                  pulse. We cast magnetic screen leads, sculptural runway walkers,
                  and authentic faces that stay unforgettable.
                </p>
              </div>
              <div className="hero-icon-block">
                <Link
                  href="/contact-us"
                  aria-label="Start a Casting Inquiry"
                  className="hero-icon-inner-block w-inline-block"
                >
                  <img
                    src={ASSETS.heroButtonIcon}
                    loading="lazy"
                    alt="Arrow Icon"
                    className="hero-button-icon"
                  />
                </Link>
                <div className="hero-side-icon-block" />
                <div className="hero-side-icon-block two" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section service-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-main-block">
            <div className="section-title-main-block">
              <div className="section-title-inner-block">
                <div className="section-subtitle">
                  fearless minds build
                </div>
                <h2 className="section-title">
                  talent reshapes the screen
                </h2>
              </div>
            </div>

            <div className="w-layout-grid service-grid">
              {homeServices.map((service, idx) => {
                const isHovered = hoveredService === idx;
                return (
                  <div
                    key={service.id}
                    className="service-card-entrance"
                  >
                    <div
                      onMouseEnter={() => setHoveredService(idx)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`service-box ${boxClasses[idx]}`}
                      style={{
                        transform: isHovered
                          ? "translate3d(0, -50px, 0)"
                          : "translate3d(0, 0px, 0)",
                        transition:
                          "transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                      }}
                    >
                      <Link
                        href={`/service/${service.slug}`}
                        aria-label={service.title}
                        className="service-card-link w-inline-block"
                        style={{ zIndex: 2 }}
                      />
                      <div
                        className={`service-box-hover-bg-color ${bgClasses[idx]}`}
                        style={{
                          backgroundColor: isHovered
                            ? service.color
                            : "transparent",
                          transform: isHovered
                            ? "scale3d(0.95, 0.95, 1)"
                            : "scale3d(1, 1, 1)",
                          transition:
                            "background-color 0.4s ease, transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                        }}
                      />
                      <div className="service-icon-box">
                        <img
                          src={service.icon}
                          loading="lazy"
                          alt={service.title}
                          className="service-icon"
                        />
                      </div>
                      <div
                        className="service-box-content-block"
                        style={{
                          maxHeight: isHovered ? "160px" : "40px",
                          transition:
                            "max-height 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                        }}
                      >
                        <div className="service-box-title-block">
                          <h3 className="service-box-title">
                            {service.shortTitle}
                          </h3>
                        </div>
                        <div
                          className="service-box-description-block"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            transition: "opacity 0.4s ease",
                          }}
                        >
                          <p className="service-box-description">
                            {service.shortDesc}
                          </p>
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

      {/* HORIZONTAL SCROLL PROJECTS SECTION */}
      <section className="section projects-section">
        <div className="portfolio-stikcy-block">
          <div className="projects-horizontal-main">
            <div className="projects-horizontal-main-wrapper">
              {/* 4 Crossfading Full-Bleed Backgrounds */}
              <div className="projects-horizontal-bg-block one">
                <img
                  src={homeProjects[0].bgImage}
                  loading="lazy"
                  alt={homeProjects[0].title}
                  className="projects-horizontal-bg-image"
                />
              </div>
              <div className="projects-horizontal-bg-block two">
                <img
                  src={homeProjects[1].bgImage}
                  loading="lazy"
                  alt={homeProjects[1].title}
                  className="projects-horizontal-bg-image"
                />
              </div>
              <div className="projects-horizontal-bg-block three">
                <img
                  src={homeProjects[2].bgImage}
                  loading="lazy"
                  alt={homeProjects[2].title}
                  className="projects-horizontal-bg-image"
                />
              </div>
              <div className="projects-horizontal-bg-block four">
                <img
                  src={homeProjects[3].bgImage}
                  loading="lazy"
                  alt={homeProjects[3].title}
                  className="projects-horizontal-bg-image"
                />
              </div>

              {/* Horizontal Track */}
              <div className="projects-info-inner-block">
                <div className="projects-text-block">
                  {["p", "r", "o", "j", "e", "c", "t", "s"].map(
                    (letter, i) => (
                      <h2
                        key={i}
                        className="projects-name projects-letter-3d"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {letter}
                      </h2>
                    )
                  )}
                </div>

                {homeProjects.map((project, idx) => {
                  const cardNumClass =
                    idx === 0
                      ? ""
                      : idx === 1
                      ? "two"
                      : idx === 2
                      ? "three"
                      : "four";
                  const isProjHovered = hoveredProject === idx;
                  return (
                    <div
                      key={project.id}
                      onMouseEnter={() => setHoveredProject(idx)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`projects-card-block ${cardNumClass}`}
                    >
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="projects-side-card-link w-inline-block"
                      >
                        <div
                          className="projects-right-image-block"
                          style={{ overflow: "hidden" }}
                        >
                          <img
                            src={project.image}
                            loading="lazy"
                            alt={project.title}
                            className="projects-right-image"
                            style={{
                              transform: isProjHovered
                                ? "scale3d(0.9, 0.9, 1)"
                                : "scale3d(1, 1, 1)",
                              transition:
                                "transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                            }}
                          />
                        </div>
                        <div className="projects-side-info-block">
                          <h2 className="horizontal-projects-titles">
                            {project.title}
                          </h2>
                          <div className="projects-side-text-block">
                            <div className="w-layout-grid projects-text-grid">
                              <div className="project-slide-text">
                                {project.categories[0]}
                              </div>
                              <div className="projects-text-line" />
                              <div className="project-slide-text">
                                {project.categories[1]}
                              </div>
                              <div className="projects-text-line" />
                              <div className="project-slide-text">
                                {project.categories[2]}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="about-main-block">
            <div className="w-layout-grid about-title-grid">
              <div className="about-section-title-block">
                <h2 className="about-section-title">
                  We bring screenplays and luxury campaigns to life through
                  fearless casting that speaks with clarity and emotion.
                </h2>
                <div className="text-overlay row-one" />
                <div className="text-overlay row-two" />
                <div className="text-overlay row-three" />
              </div>
              <div className="about-subtext-block">
                <div className="section-title-subtext-inner-block">
                  <h2 className="section-subtext">about us</h2>
                </div>
              </div>
            </div>

            <div className="w-layout-grid about-info-grid-two">
              <div className="about-left-block" />
              <div className="about-right-block about-desc-reveal">
                <p className="about-description-two">
                  Operating across New York, Paris, London, and Tokyo, Reflux
                  is a full-service casting and talent direction studio. Whether
                  discovering raw street-cast newcomers for an A24 feature or
                  choreographing a 60-look Paris couture runway, we turn
                  auditions into culturally defining moments.
                </p>
              </div>
            </div>

            <div className="about-counter-block">
              <div className="w-layout-grid about-counter-grid">
                {COUNTERS.map((counter) => (
                  <div key={counter.id} className="about-counter-box">
                    <div className="about-counter-text">{counter.label}</div>
                    <div className="about-counter-inner-block">
                      <div className="about-counter-frist-number-block">
                        {counter.col1.map((digit, i) => (
                          <h2 key={i} className="about-count-number">
                            {digit}
                          </h2>
                        ))}
                      </div>
                      <div className="about-counter-secend-number-block">
                        {counter.col2.map((digit, i) => (
                          <h2 key={i} className="about-count-number">
                            {digit}
                          </h2>
                        ))}
                      </div>
                      <h2 className="about-count-number">+</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section video-section">
        <div className="background-video-block w-background-video w-background-video-atom">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              backgroundImage: `url("${ASSETS.heroImage1}")`,
            }}
          >
            <source src={ASSETS.videoMp4} />
            <source src={ASSETS.videoWebm} />
          </video>
        </div>
      </section>

      {/* TESTIMONIAL STICKY STACK SECTION */}
      <section className="section testimonial-section">
        <div className="testimonial-stciky-block">
          <div className="w-layout-blockcontainer container w-container">
            <div className="testimonial-main-block">
              <div className="testimonial-inner-block">
                <h1 className="testimonial-title">word of love</h1>
                <div className="testimonial-subtext-block">
                  <h2 className="testimonial-subtext">testimonial</h2>
                </div>
              </div>

              <div className="testimonial-info-block">
                {TESTIMONIALS.map((item, idx) => {
                  const numWord =
                    idx === 0
                      ? "one"
                      : idx === 1
                      ? "two"
                      : idx === 2
                      ? "three"
                      : "four";
                  return (
                    <div
                      key={item.id}
                      id={TESTIMONIAL_NODE_IDS[idx]}
                      className={`testimonial-inner-info-block ${numWord}`}
                    >
                      <div className="testimonial-content-block">
                        <div className="testimonial-quote-image-block">
                          <img
                            src={TESTIMONIAL_QUOTE_ICONS[idx]}
                            loading="lazy"
                            alt="Testimonial Quote Icon"
                            className="testimonial-quote-image"
                          />
                        </div>
                        <div className="testimonial-content-inner-block">
                          <p className="testimonial-description">
                            {item.quote}
                          </p>
                          <div className="testimonial-author-name-block">
                            <h2 className="testimonial-author-name">
                              {item.author} /{" "}
                              <span className="testimonial-work">
                                {item.role}
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO STICKY BANNER SECTION */}
      <section className="section contact-info-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="contact-main-block">
            <div className="w-layout-grid contact-block-grid">
              <div className="contact-left-block" />
              <div
                id="w-node-eb3cd5e3-5117-b683-f174-2c6724c7d633-21421f01"
                className="concat-info-block"
              >
                <div className="contact-inner-info-block">
                  <h2 className="contact-title">start project</h2>
                  <p className="contact-description">
                    Send us your script breakdown, lookbook brief, or campaign
                    schedule to book an audition studio session.
                  </p>
                  <div className="primary-button-style">
                    <Link
                      href="/contact-us"
                      className="button-primary-link w-button"
                    >
                      contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
