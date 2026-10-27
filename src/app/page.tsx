"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ASSETS,
  PROJECTS,
  RUNWAY_SHOW_STRIP,
  SERVICES,
  TALENT_BOARD,
  TalentCompCard,
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
    label: "years of model management (demo)",
    accent: "#a7d8de",
    col1: ["3", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["9", "2", "3", "4", "5", "6", "7", "8", "9", "9"],
  },
  {
    id: "counter-2",
    label: "vogue & Harper's covers (demo)",
    accent: "#f5a3a3",
    col1: ["6", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["8", "2", "3", "4", "5", "6", "7", "8", "9", "8"],
  },
  {
    id: "counter-3",
    label: "global runway exclusives (demo)",
    accent: "#f8c794",
    col1: ["2", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["7", "2", "3", "4", "5", "6", "7", "8", "9", "7"],
  },
  {
    id: "counter-4",
    label: "luxury fashion houses cast (demo)",
    accent: "#cbb7f6",
    col1: ["9", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    col2: ["4", "2", "3", "4", "5", "6", "7", "8", "9", "4"],
  },
];

const DIVISION_FILTERS = [
  { key: "ALL", label: "All Models (Demo)", count: "08", color: "#a7d8de" },
  {
    key: "VISAGE WOMEN",
    label: "Visage Women",
    count: "04",
    color: "#f5a3a3",
  },
  { key: "VISAGE MEN", label: "Visage Men", count: "02", color: "#f8c794" },
  { key: "DEVELOPMENT", label: "Development", count: "02", color: "#cbb7f6" },
] as const;

const MARQUEE_ITEMS = [
  { text: "VISAGE WOMEN — DEMO ROSTER", color: "#a7d8de" },
  { text: "VISAGE MEN — DEMO ROSTER", color: "#f5a3a3" },
  { text: "NEW FACES & DEVELOPMENT (DEMO)", color: "#f8c794" },
  { text: "PARIS · MILAN · NEW YORK · LONDON", color: "#cbb7f6" },
  { text: "HAUTE COUTURE RUNWAY CASTING (DEMO)", color: "#a7d8de" },
  { text: "DIGITAL COMP CARDS & POLAROIDS (DEMO)", color: "#f5a3a3" },
];

const FRACTAL_HERO_FRAMES = [
  {
    slot: "_1",
    modelIndex: 0,
    desktopX: "31vw",
    desktopY: "7.5vw",
    mobileX: "31vw",
    mobileY: "11vw",
    delay: 0.36,
    hasVideo: false,
    depthLayer: false,
  },
  {
    slot: "_2",
    modelIndex: 1,
    desktopX: "-22vw",
    desktopY: "10.5vw",
    mobileX: "-25vw",
    mobileY: "16vw",
    delay: 0.48,
    hasVideo: false,
    depthLayer: true,
  },
  {
    slot: "_3",
    modelIndex: 2,
    desktopX: "9.5vw",
    desktopY: "15.5vw",
    mobileX: "12vw",
    mobileY: "21vw",
    delay: 0.58,
    hasVideo: false,
    depthLayer: false,
  },
  {
    slot: "_4",
    modelIndex: 3,
    desktopX: "-13vw",
    desktopY: "-15.5vw",
    mobileX: "-18vw",
    mobileY: "-18vw",
    delay: 0.38,
    hasVideo: false,
    depthLayer: false,
  },
  {
    slot: "_5",
    modelIndex: 4,
    desktopX: "37vw",
    desktopY: "-15.5vw",
    mobileX: "32vw",
    mobileY: "-16vw",
    delay: 0.5,
    hasVideo: false,
    depthLayer: true,
  },
  {
    slot: "_6",
    modelIndex: 5,
    desktopX: "20vw",
    desktopY: "-13.5vw",
    mobileX: "15vw",
    mobileY: "-19vw",
    delay: 0.62,
    hasVideo: false,
    depthLayer: false,
  },
  {
    slot: "_7",
    modelIndex: 6,
    desktopX: "-36vw",
    desktopY: "-13.5vw",
    mobileX: "-34vw",
    mobileY: "-12vw",
    delay: 0.72,
    hasVideo: false,
    depthLayer: true,
  },
  {
    slot: "_8",
    modelIndex: 7,
    desktopX: "-39vw",
    desktopY: "5.5vw",
    mobileX: "-35vw",
    mobileY: "10vw",
    delay: 0.68,
    hasVideo: false,
    depthLayer: false,
  },
] as const;

// Quick toggle to show/hide the floating model photo constellation in the hero banner
// (Hidden for now as requested; ready to be swapped with future visuals/canvases/interactive elements)
const SHOW_HERO_PHOTOS = false;

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerMaskingRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeDivision, setActiveDivision] = useState<string>("ALL");
  const [hoveredTalent, setHoveredTalent] = useState<string | null>(null);
  const [hoveredRunway, setHoveredRunway] = useState<string | null>(null);
  const [hoveredHeroPolaroid, setHoveredHeroPolaroid] =
    useState<TalentCompCard | null>(null);
  const [selectedModel, setSelectedModel] = useState<TalentCompCard | null>(
    null
  );

  // 60fps Kitpro Fractal Mouse Parallax + Dynamic Optical Depth-of-Field Blur (a-18 / a-52)
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!SHOW_HERO_PHOTOS || !innerMaskingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to +0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to +0.5

    gsap.to(innerMaskingRef.current, {
      x: -normX * 52,
      y: -normY * 38,
      duration: 0.55,
      ease: "power2.out",
      overwrite: "auto",
    });

    const blurAmount = Math.min(3.2, Math.hypot(normX, normY) * 4.2);
    gsap.to(".wrapper-main-hero.is-depth-layer:not(:hover)", {
      filter: `blur(${blurAmount.toFixed(2)}px)`,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleHeroMouseLeave = () => {
    setHoveredHeroPolaroid(null);
    if (!SHOW_HERO_PHOTOS) return;
    if (innerMaskingRef.current) {
      gsap.to(innerMaskingRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
    gsap.to(".wrapper-main-hero.is-depth-layer", {
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const filteredTalent =
    activeDivision === "ALL"
      ? TALENT_BOARD
      : TALENT_BOARD.filter((t) => t.division === activeDivision);

  // Close Comp-Card Modal on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedModel(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleDivisionChange = (divKey: string, scrollToBoard = false) => {
    setActiveDivision(divKey);
    if (scrollToBoard && typeof window !== "undefined") {
      const boardEl = document.getElementById("model-board");
      if (boardEl) {
        boardEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    requestAnimationFrame(() => {
      gsap.fromTo(
        ".society-comp-card",
        { y: 20, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.04,
          ease: "power2.out",
          clearProps: "transform,scale",
          overwrite: "auto",
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        }
      );
      ScrollTrigger.refresh();
    });
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 1. Kitpro Fractal Hero Load Choreography (t-ed5e411c + t-17bd54a9)
      // A. Horizontal Architectural Framing Lines (.line-hero.left & .line-hero.right)
      gsap.fromTo(
        ".line-hero.left",
        { opacity: 0, xPercent: 0 },
        {
          opacity: 1,
          xPercent: -60,
          duration: 0.85,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".line-hero.right",
        { opacity: 0, xPercent: 0 },
        {
          opacity: 1,
          xPercent: 60,
          duration: 0.85,
          ease: "power3.out",
        }
      );

      // B. Center Giant Wordmark 3D Character Flip (.text-hero -> .fractal-hero-char)
      gsap.fromTo(
        ".fractal-hero-char",
        { opacity: 0, rotateY: 360, rotateX: 0, y: 18 },
        {
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          y: 0,
          duration: 0.85,
          delay: 0.25,
          stagger: 0.05,
          ease: "back.out(1.35)",
        }
      );

      // C. Line-Masked .paragraph-hero Reveal (t-17bd54a9)
      gsap.fromTo(
        ".paragraph-hero",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.45,
          ease: "power3.out",
        }
      );

      // D. 8 Radial Floating Model Frames Burst Outward from Center (Desktop vs Tablet/Mobile)
      if (SHOW_HERO_PHOTOS) {
        mm.add("(min-width: 992px)", () => {
          FRACTAL_HERO_FRAMES.forEach((frame) => {
            gsap.fromTo(
              `.wrapper-main-hero.${frame.slot}`,
              { opacity: 0, x: "0vw", y: "0vw", scale: 0 },
              {
                opacity: 1,
                x: frame.desktopX,
                y: frame.desktopY,
                scale: 1,
                duration: 1.05,
                delay: frame.delay,
                ease: "expo.out",
              }
            );
          });
        });

        mm.add("(max-width: 991px)", () => {
          FRACTAL_HERO_FRAMES.forEach((frame) => {
            gsap.fromTo(
              `.wrapper-main-hero.${frame.slot}`,
              { opacity: 0, x: "0vw", y: "0vw", scale: 0 },
              {
                opacity: 1,
                x: frame.mobileX,
                y: frame.mobileY,
                scale: 1,
                duration: 1,
                delay: frame.delay,
                ease: "expo.out",
              }
            );
          });
        });

        // E. Continuous Weightless Yoyo Float on Frame Inner Media (t-17bd54a9)
        gsap.to(".fractal-frame-float-inner", {
          y: -5,
          duration: 1.7,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.2,
          },
          ease: "sine.inOut",
        });
      }

      // 2. The Society Model Board (Demo Roster) Early & Buttery Scroll-In
      gsap.fromTo(
        ".society-board-header-reveal",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".society-board-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      const compCards = gsap.utils.toArray<HTMLElement>(".society-comp-card");
      compCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            delay: (i % 4) * 0.04,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. The Society 4-Panel Runway Shows Strip Early & Smooth Reveal
      gsap.fromTo(
        ".society-runway-header-reveal",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".society-runway-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".society-runway-panel",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.58,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".society-runway-strip",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Service Section Early & Smooth Scroll-In Choreography
      gsap.fromTo(
        ".service-section .section-title-inner-block",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".service-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".service-card-entrance",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.58,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 5. Desktop-Only Sticky Scroll Choreographies (>=992px)
      mm.add("(min-width: 992px)", () => {
        // A. Horizontal Scroll Projects Section (Immediate 1:1 Response, Zero Dead Zone)
        gsap.set(".projects-horizontal-bg-block.one", { opacity: 1 });
        gsap.set(".projects-horizontal-bg-block.two", { opacity: 0 });
        gsap.set(".projects-horizontal-bg-block.three", { opacity: 0 });
        gsap.set(".projects-horizontal-bg-block.four", { opacity: 0 });

        const projectsTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
            invalidateOnRefresh: true,
          },
        });

        projectsTl.fromTo(
          ".projects-letter-3d",
          { rotateY: 0 },
          { rotateY: 90, duration: 0.08, ease: "none", stagger: 0.004 },
          0.02
        );

        projectsTl
          .fromTo(
            ".projects-info-inner-block",
            { xPercent: 0 },
            { xPercent: -22, duration: 0.28, ease: "none" },
            0.04
          )
          .to(
            ".projects-horizontal-bg-block.one",
            { opacity: 0, duration: 0.18, ease: "none" },
            0.14
          )
          .to(
            ".projects-horizontal-bg-block.two",
            { opacity: 1, duration: 0.18, ease: "none" },
            0.14
          )
          .to(
            ".projects-info-inner-block",
            { xPercent: -46, duration: 0.3, ease: "none" },
            0.32
          )
          .to(
            ".projects-horizontal-bg-block.two",
            { opacity: 0, duration: 0.18, ease: "none" },
            0.44
          )
          .to(
            ".projects-horizontal-bg-block.three",
            { opacity: 1, duration: 0.18, ease: "none" },
            0.44
          )
          .to(
            ".projects-info-inner-block",
            { xPercent: -70, duration: 0.32, ease: "none" },
            0.62
          )
          .to(
            ".projects-horizontal-bg-block.three",
            { opacity: 0, duration: 0.18, ease: "none" },
            0.72
          )
          .to(
            ".projects-horizontal-bg-block.four",
            { opacity: 1, duration: 0.18, ease: "none" },
            0.72
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
            start: "top 92%",
            end: "bottom 42%",
            scrub: 0.2,
            invalidateOnRefresh: true,
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

        // C. Sticky Testimonial Stack (Immediate Start on Pin)
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
            scrub: 0.2,
            invalidateOnRefresh: true,
          },
        });

        testTl
          .to(
            ".testimonial-inner-info-block.one",
            { yPercent: 0, rotate: 10, duration: 0.2, ease: "none" },
            0.03
          )
          .to(
            ".testimonial-inner-info-block.two",
            { yPercent: 0, rotate: -10, duration: 0.2, ease: "none" },
            0.27
          )
          .to(
            ".testimonial-inner-info-block.three",
            { yPercent: 0, rotate: 10, duration: 0.2, ease: "none" },
            0.51
          )
          .to(
            ".testimonial-inner-info-block.four",
            { yPercent: 0, rotate: -10, duration: 0.2, ease: "none" },
            0.75
          );
      });

      // 5B. Tablet & Mobile Scroll Choreographies (<=991px)
      mm.add("(max-width: 991px)", () => {
        gsap.fromTo(
          ".projects-letter-3d",
          { rotateY: 55, y: 16, opacity: 0 },
          {
            rotateY: 0,
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.03,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: ".projects-text-block",
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        const mobileProjectCards = gsap.utils.toArray<HTMLElement>(
          ".projects-card-block"
        );
        mobileProjectCards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.58,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );

          const img = card.querySelector(".projects-right-image");
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.08 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.25,
                },
              }
            );
          }
        });

        gsap.fromTo(
          ".about-section-title",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: ".about-section-title-block",
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        const mobileTestimonialCards = gsap.utils.toArray<HTMLElement>(
          ".testimonial-inner-info-block"
        );
        mobileTestimonialCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              delay: (i % 2) * 0.04,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      // 6. About Badge & Description Early & Smooth Scroll-In Reveal
      gsap.fromTo(
        ".about-subtext-block",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".about-title-grid",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".about-desc-reveal",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.58,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".about-info-grid-two",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 7. Slot-Machine Odometer Counters (a-25)
      gsap.set(".about-counter-frist-number-block", { yPercent: -90 });
      gsap.set(".about-counter-secend-number-block", { yPercent: 0 });

      ScrollTrigger.create({
        trigger: ".about-counter-grid",
        start: "top 88%",
        onEnter: () => {
          gsap.fromTo(
            ".about-counter-box",
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              stagger: 0.05,
              ease: "power2.out",
              clearProps: "transform",
            }
          );
          gsap.to(".about-counter-frist-number-block", {
            yPercent: 0,
            duration: 1.4,
            ease: "power2.inOut",
          });
          gsap.to(".about-counter-secend-number-block", {
            yPercent: -90,
            duration: 1.4,
            ease: "power2.inOut",
          });
        },
      });

      // 8. Video, Testimonial Header & Contact Section Early & Smooth Reveal
      gsap.fromTo(
        ".video-section",
        { y: 20, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          duration: 0.58,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".video-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".testimonial-inner-block",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".concat-info-block",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.58,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".contact-info-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Keep ScrollTrigger positions 100% synced as images/videos settle
      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);

      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);

      return () => {
        window.clearTimeout(refreshTimer);
        window.removeEventListener("load", handleLoad);
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  const homeServices = SERVICES.slice(0, 4);
  const homeProjects = PROJECTS.slice(0, 4);
  const bgClasses = ["bg-one", "bg-two", "bg-three", "bg-four"];
  const boxClasses = ["box-1", "box-2", "box-3", "box-4"];

  return (
    <div ref={containerRef} className="editorial-page-shell">
      <Navbar variant="dark" />

      {/* =====================================================================
          HERO SECTION (KITPRO FRACTAL PURE MINIMALIST DARK CONSTELLATION HERO)
         ===================================================================== */}
      <section
        id="hero-section"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="section hero fractal-hero-section"
      >
        <div className="wrapper-hero">
          {/* Ambient Monochrome Fluid/Smoke Video Background (Layer 0 - The Society Management) */}
          <div className="fractal-hero-ambient-video-layer" aria-hidden="true">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="fractal-hero-ambient-video"
            >
              <source
                src={ASSETS.videoMp4}
                type="video/mp4"
              />
            </video>
            <div className="fractal-hero-video-vignette" />
          </div>

          {/* Center Giant Minimalist Display Typography (.wrapper-conotent-one -> .text-hero) */}
          <div className="wrapper-conotent-one">
            <div className="inner-content-text-hero">
              <h1 className="text-hero" aria-label="VISAGE">
                {"VISAGE".split("").map((char, idx) => (
                  <span key={idx} className="fractal-hero-char">
                    {char}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          {/* Bottom-Right Minimalist Statement (.wrapper-content-two -> .paragraph-hero) */}
          <div className="wrapper-content-two">
            <div className="wrapper-paragraph-herp fractal-paragraph-mask">
              <p className="paragraph-hero">
                Curating iconic faces and haute couture runway exclusives across
                Paris, Milan, New York &amp; London.
              </p>
            </div>
          </div>

          {/* Architectural Framing Lines (.outer-lline-hero) & Optional Radial Frames */}
          <div className="wrapper-masking-hero">
            <div className="outer-lline-hero" aria-hidden="true">
              <div className="line-hero left" />
              <div className="line-hero right" />
            </div>

            {SHOW_HERO_PHOTOS && (
              <div className="outer-masking-hero">
                <div ref={innerMaskingRef} className="inner-masking-hero">
                  {FRACTAL_HERO_FRAMES.map((frame) => {
                    const model =
                      TALENT_BOARD[frame.modelIndex] || TALENT_BOARD[0];
                    const isHovered = hoveredHeroPolaroid?.id === model.id;

                    return (
                      <div
                        key={frame.slot}
                        onMouseEnter={() => setHoveredHeroPolaroid(model)}
                        onMouseLeave={() => setHoveredHeroPolaroid(null)}
                        onClick={() => setSelectedModel(model)}
                        className={`wrapper-main-hero ${frame.slot} ${
                          frame.depthLayer ? "is-depth-layer" : ""
                        } ${isHovered ? "is-hovered" : ""}`}
                      >
                        <div className="fractal-frame-media fractal-frame-float-inner">
                          <img
                            src={model.primaryImage}
                            alt={model.name}
                            className="image-hero primary"
                          />
                          <img
                            src={model.secondaryImage}
                            alt={`${model.name} Lookbook`}
                            className="image-hero secondary"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          THE SOCIETY MODEL BOARD (MINIMALIST DARK ROSTER)
         ===================================================================== */}
      <section id="model-board" className="section society-board-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="society-board-header">
            <div className="society-board-title-wrap society-board-header-reveal">
              <div className="section-subtitle">model board · demo</div>
              <h2 className="section-title">the visage roster</h2>
            </div>

            {/* Minimalist Architectural Division Switcher */}
            <div
              className="society-division-tabs society-board-header-reveal"
              role="tablist"
              aria-label="Model Divisions"
            >
              {DIVISION_FILTERS.map((tab) => {
                const isActive = activeDivision === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleDivisionChange(tab.key)}
                    className={`society-division-tab ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    <span className="society-tab-label">{tab.label}</span>
                    <span className="society-tab-count">[{tab.count}]</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4-Column Frameless Dark-Theme Model Comp-Card Grid */}
          <div className="society-comp-grid">
            {filteredTalent.map((talent, idx) => {
              const isCardHovered = hoveredTalent === talent.id;
              const offsetClass =
                idx % 4 === 1
                  ? "society-card-offset-mid"
                  : idx % 4 === 3
                  ? "society-card-offset-right"
                  : "";
              return (
                <article
                  key={talent.id}
                  onMouseEnter={() => setHoveredTalent(talent.id)}
                  onMouseLeave={() => setHoveredTalent(null)}
                  onClick={() => setSelectedModel(talent)}
                  className={`society-comp-card ${offsetClass}`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="society-comp-card-link">
                    {/* Dual-Image Lookbook Viewport (Portrait <-> Runway/Campaign Crossfade) */}
                    <div className="society-card-media-mask">
                      <img
                        src={talent.primaryImage}
                        loading="lazy"
                        alt={`${talent.name} — ${talent.division}`}
                        className="society-card-img primary"
                        style={{
                          transform: isCardHovered
                            ? "scale3d(1.06, 1.06, 1)"
                            : "scale3d(1, 1, 1)",
                          opacity: isCardHovered ? 0 : 1,
                        }}
                      />
                      <img
                        src={talent.secondaryImage}
                        loading="lazy"
                        alt={`${talent.name} Campaign Look`}
                        className="society-card-img secondary"
                        style={{
                          transform: isCardHovered
                            ? "scale3d(1.01, 1.01, 1)"
                            : "scale3d(1.08, 1.08, 1)",
                          opacity: isCardHovered ? 1 : 0,
                        }}
                      />
                    </div>

                    {/* Minimalist Dark-Mode Comp-Card Typography & Measurements */}
                    <div className="society-card-footer">
                      <div className="society-card-name-row">
                        <div>
                          <h3 className="society-card-name">{talent.name}</h3>
                          <div className="society-card-sub-bureau">
                            {talent.division} · {talent.bureau} · DEMO
                          </div>
                        </div>
                        <span className="society-card-arrow">↗</span>
                      </div>

                      <div className="society-card-specs-grid">
                        <div className="society-spec-cell">
                          <span className="society-spec-key">HEIGHT</span>
                          <span className="society-spec-val">
                            {talent.stats.height}
                          </span>
                        </div>
                        <div className="society-spec-cell">
                          <span className="society-spec-key">BUST / CHEST</span>
                          <span className="society-spec-val">
                            {talent.stats.bust}
                          </span>
                        </div>
                        <div className="society-spec-cell">
                          <span className="society-spec-key">WAIST</span>
                          <span className="society-spec-val">
                            {talent.stats.waist}
                          </span>
                        </div>
                        <div className="society-spec-cell">
                          <span className="society-spec-key">HIPS</span>
                          <span className="society-spec-val">
                            {talent.stats.hips}
                          </span>
                        </div>
                        <div className="society-spec-cell">
                          <span className="society-spec-key">SHOE</span>
                          <span className="society-spec-val">
                            {talent.stats.shoe}
                          </span>
                        </div>
                        <div className="society-spec-cell">
                          <span className="society-spec-key">EYES / HAIR</span>
                          <span className="society-spec-val">
                            {talent.stats.eyes} · {talent.stats.hair}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          THE SOCIETY 4-PANEL RUNWAY SHOWS STRIP
         ===================================================================== */}
      <section
        id="runway-shows"
        className="section society-runway-section"
        style={{ paddingTop: "10px", paddingBottom: "140px" }}
      >
        <div className="w-layout-blockcontainer container w-container">
          <div className="society-board-header society-runway-header-reveal">
            <div className="society-board-title-wrap">
              <div className="section-subtitle">
                paris · milan · new york · london (demo)
              </div>
              <h2 className="section-title">season runway shows</h2>
            </div>
            <Link href="/portfolio" className="society-division-tab">
              <span>View Archive</span>
              <span>↗</span>
            </Link>
          </div>

          {/* 4-Panel Expanding Catwalk Strip */}
          <div className="society-runway-strip">
            {RUNWAY_SHOW_STRIP.map((look) => {
              const isHovered = hoveredRunway === look.id;
              return (
                <Link
                  key={look.id}
                  href="/portfolio"
                  onMouseEnter={() => setHoveredRunway(look.id)}
                  onMouseLeave={() => setHoveredRunway(null)}
                  className={`society-runway-panel ${
                    isHovered ? "is-expanded" : ""
                  }`}
                >
                  <img
                    src={look.image}
                    loading="lazy"
                    alt={look.designer}
                    className="society-runway-img"
                  />
                  <div className="society-runway-overlay">
                    <div className="society-runway-top">
                      <span className="society-runway-tag">
                        {look.lookNumber}
                      </span>
                      <span className="society-runway-city">{look.city}</span>
                    </div>
                    <div className="society-runway-bottom">
                      <div className="society-runway-walker">
                        {look.modelName}
                      </div>
                      <h3 className="society-runway-designer">
                        {look.designer}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          MODEL CASTING DIVISIONS SECTION
         ===================================================================== */}
      <section className="section service-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-main-block">
            <div className="section-title-main-block">
              <div className="section-title-inner-block">
                <div className="section-subtitle">
                  representation &amp; casting divisions (demo)
                </div>
                <h2 className="section-title">
                  models that define the season
                </h2>
              </div>
            </div>

            <div className="w-layout-grid service-grid">
              {homeServices.map((service, idx) => {
                const isHovered = hoveredService === idx;
                return (
                  <div key={service.id} className="service-card-entrance">
                    <div
                      onMouseEnter={() => setHoveredService(idx)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`service-box ${boxClasses[idx]}`}
                      style={
                        {
                          transform: isHovered
                            ? "translate3d(0, -32px, 0)"
                            : "translate3d(0, 0px, 0)",
                          transition:
                            "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                        } as React.CSSProperties
                      }
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
                            ? "#1a1a1a"
                            : "transparent",
                          transform: isHovered
                            ? "scale3d(0.97, 0.97, 1)"
                            : "scale3d(1, 1, 1)",
                          transition:
                            "background-color 0.45s ease, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          width: "100%",
                          position: "relative",
                          zIndex: 1,
                          marginBottom: "14px",
                        }}
                      >
                        <span className="service-card-kicker">
                          {idx === 0
                            ? "CATWALK EXCLUSIVES"
                            : idx === 1
                            ? "MAGAZINE COVERS"
                            : idx === 2
                            ? "LUXURY CAMPAIGNS"
                            : "NEW FACES SCOUTING"}
                        </span>
                        <span className="editorial-card-index">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Matching High-Fashion Demo Image Window */}
                      <div className="service-card-image-box">
                        <img
                          src={service.image}
                          loading="lazy"
                          alt={service.title}
                          className="service-card-image"
                        />
                      </div>

                      <div
                        className="service-box-content-block"
                        style={{
                          maxHeight: isHovered ? "170px" : "46px",
                          transition:
                            "max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                          position: "relative",
                          zIndex: 1,
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
                            transition: "opacity 0.45s ease",
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

      {/* =====================================================================
          HORIZONTAL SCROLL CAMPAIGNS & COVERS SECTION
         ===================================================================== */}
      <section className="section projects-section">
        <div className="portfolio-stikcy-block">
          <div className="projects-horizontal-main">
            <div className="projects-horizontal-main-wrapper">
              {/* 4 Crossfading Full-Bleed High-Fashion Model Backgrounds */}
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
                          style={{ overflow: "hidden", position: "relative" }}
                        >
                          <img
                            src={project.image}
                            loading="lazy"
                            alt={project.title}
                            className="projects-right-image"
                            style={{
                              transform: isProjHovered
                                ? "scale3d(0.94, 0.94, 1)"
                                : "scale3d(1, 1, 1)",
                              transition:
                                "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
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

      {/* =====================================================================
          COMPANY ADVERTISING & CASTING COMMISSIONS (WORKS DONE WITH COMPANIES)
         ===================================================================== */}
      <section id="company-works" className="company-works-section">
        <div className="w-layout-blockcontainer container w-container">
          {/* Section Header */}
          <div className="section-title-main-block" style={{ marginBottom: "20px" }}>
            <div className="section-title-inner-block">
              <div className="section-subtitle">
                commercial advertising &amp; brand commissions · selected works
              </div>
              <h2 className="section-title">
                casting campaigns for global companies
              </h2>
            </div>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#888888",
              maxWidth: "680px",
              marginBottom: "32px",
            }}
          >
            From high-fashion magazine covers to worldwide commercial advertising buyouts, explore recent casting assignments produced in collaboration with international fashion houses and creative agencies.
          </p>

          {/* Client Brand Logo Marquee / Ticker */}
          <div className="company-brand-ticker" aria-label="Brand Partners & Clients">
            {["PRADA", "GIVENCHY", "GAP", "VOGUE", "SAINT LAURENT", "MAISON SOLARIS", "DAZED", "HARPER'S BAZAAR"].map(
              (brand) => (
                <span key={brand} className="company-brand-pill">
                  {brand}
                </span>
              )
            )}
          </div>

          {/* 4 Featured Company Casting Works Grid */}
          <div className="company-works-grid">
            {/* WORK 1: GAP GLOBAL DENIM */}
            <article className="company-work-card">
              <div className="company-work-media-mask">
                <img
                  src="https://booker-media.elitemodelmanagement.com/Library/12381/20260428_-7eAuAT5wneC3C.jpg"
                  loading="lazy"
                  alt="GAP Global Denim Commercial Campaign"
                  className="company-work-img"
                />
              </div>
              <div className="company-work-body">
                <div>
                  <div className="company-work-kicker-row">
                    <span className="company-work-client-tag">GAP Worldwide · New York</span>
                    <span className="company-work-cat-tag">Commercial Advertising</span>
                  </div>
                  <h3 className="company-work-title">
                    GAP Autumn/Winter Global Denim Campaign
                  </h3>
                  <p className="company-work-deliverables">
                    Principal street and agency casting across NYC and London. Cast 4 fresh faces representing all ages and diverse backgrounds for multi-channel TVC, digital billboards, and global in-store displays.
                  </p>
                </div>
                <div className="company-work-footer-row">
                  <div>
                    Talent Cast: <span className="company-work-talent-tag">Alton Mason &amp; New Faces</span>
                  </div>
                  <Link href="/portfolio/maison-solaris-aw25" className="society-card-arrow" aria-label="View GAP Campaign">
                    ↗
                  </Link>
                </div>
              </div>
            </article>

            {/* WORK 2: VOGUE ITALIA COVER */}
            <article className="company-work-card">
              <div className="company-work-media-mask">
                <img
                  src="https://booker-media.elitemodelmanagement.com/Library/1/20250307_YouO3fnJH90cWw.jpg"
                  loading="lazy"
                  alt="Vogue Italia Editorial Cover Story"
                  className="company-work-img"
                />
              </div>
              <div className="company-work-body">
                <div>
                  <div className="company-work-kicker-row">
                    <span className="company-work-client-tag">Condé Nast · Milan &amp; Paris</span>
                    <span className="company-work-cat-tag">Editorial Cover Story</span>
                  </div>
                  <h3 className="company-work-title">
                    Vogue Italia — Velvet Nocturne
                  </h3>
                  <p className="company-work-deliverables">
                    Lead supermodel booking and on-set movement direction for a 16-page gatefold editorial spread and 35mm cinema motion piece directed by studio team.
                  </p>
                </div>
                <div className="company-work-footer-row">
                  <div>
                    Talent Cast: <span className="company-work-talent-tag">Adriana Lima (VISAGE Women)</span>
                  </div>
                  <Link href="/portfolio/velvet-nocturne" className="society-card-arrow" aria-label="View Vogue Campaign">
                    ↗
                  </Link>
                </div>
              </div>
            </article>

            {/* WORK 3: MAISON SOLARIS CATWALK */}
            <article className="company-work-card">
              <div className="company-work-media-mask">
                <img
                  src="https://booker-media.elitemodelmanagement.com/Library/12381/20260905_gOcBTP9tqMcHPU.jpg"
                  loading="lazy"
                  alt="Maison Solaris AW25 Runway Show"
                  className="company-work-img"
                />
              </div>
              <div className="company-work-body">
                <div>
                  <div className="company-work-kicker-row">
                    <span className="company-work-client-tag">Maison Solaris · Paris Fashion Week</span>
                    <span className="company-work-cat-tag">Runway Show Production</span>
                  </div>
                  <h3 className="company-work-title">
                    Maison Solaris AW25 Couture Catwalk
                  </h3>
                  <p className="company-work-deliverables">
                    Complete runway casting of 60 international models, wardrobe fitting logistics, and show choreography at Palais de Tokyo, opened by VISAGE Men talent.
                  </p>
                </div>
                <div className="company-work-footer-row">
                  <div>
                    Talent Cast: <span className="company-work-talent-tag">60 Models Cast (Full Board)</span>
                  </div>
                  <Link href="/portfolio/maison-solaris-aw25" className="society-card-arrow" aria-label="View Solaris Runway">
                    ↗
                  </Link>
                </div>
              </div>
            </article>

            {/* WORK 4: ATELIER HOMME TAILORING */}
            <article className="company-work-card">
              <div className="company-work-media-mask">
                <img
                  src="https://booker-media.elitemodelmanagement.com/Library/3148/20260204_1iSlf7Z50wKUE3.jpg"
                  loading="lazy"
                  alt="Atelier Homme Menswear Tailoring Campaign"
                  className="company-work-img"
                />
              </div>
              <div className="company-work-body">
                <div>
                  <div className="company-work-kicker-row">
                    <span className="company-work-client-tag">Atelier Homme · Paris &amp; Zurich</span>
                    <span className="company-work-cat-tag">Luxury Menswear Advertising</span>
                  </div>
                  <h3 className="company-work-title">
                    Atelier Tailoring AW25 Campaign
                  </h3>
                  <p className="company-work-deliverables">
                    Casting lead male faces with high-fashion tailoring proportions for outdoor 16mm cinema footage, digital lookbook, and international billboard buyouts.
                  </p>
                </div>
                <div className="company-work-footer-row">
                  <div>
                    Talent Cast: <span className="company-work-talent-tag">Alexandre Cunha &amp; Archie Cranch</span>
                  </div>
                  <Link href="/portfolio/kinetix-gt-launch" className="society-card-arrow" aria-label="View Atelier Campaign">
                    ↗
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* DUAL ACTION BANNER: MODEL REGISTRATION VS DIRECTOR POSTING */}
          <div className="company-action-banner">
            {/* For Models */}
            <div className="company-action-card">
              <div>
                <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888888", marginBottom: "8px" }}>
                  For Aspiring &amp; Professional Models
                </div>
                <h3 style={{ fontFamily: "var(--_typography---title-font)", fontSize: "32px", letterSpacing: "0.04em", textTransform: "uppercase", color: "#ffffff", marginBottom: "12px" }}>
                  Join The VISAGE Roster
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#999999", margin: "0 0 20px 0" }}>
                  Submit your 3 mandatory photos (Face close-up, mid shot, full body). Free membership allows viewing public briefs; registered members get instant WhatsApp casting alerts, included studio shoots, and direct applications.
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link
                  href="/model-registration"
                  className="society-division-tab is-active"
                  style={{ display: "inline-block", textDecoration: "none", padding: "12px 20px" }}
                >
                  Start Model Registration ↗
                </Link>
                <Link
                  href="/castings"
                  className="society-division-tab"
                  style={{ display: "inline-block", textDecoration: "none", padding: "12px 20px" }}
                >
                  View Live Castings ↗
                </Link>
              </div>
            </div>

            {/* For Directors & Companies */}
            <div className="company-action-card">
              <div>
                <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888888", marginBottom: "8px" }}>
                  For Casting Directors &amp; Brands
                </div>
                <h3 style={{ fontFamily: "var(--_typography---title-font)", fontSize: "32px", letterSpacing: "0.04em", textTransform: "uppercase", color: "#ffffff", marginBottom: "12px" }}>
                  Cast With VISAGE
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#999999", margin: "0 0 20px 0" }}>
                  Access our curated model bank filtered by skin tone, age, height, look, and language. Post dedicated casting calls with admin verification, secure payments, and instant WhatsApp talent dispatch.
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link
                  href="/model-bank"
                  className="society-division-tab is-active"
                  style={{ display: "inline-block", textDecoration: "none", padding: "12px 20px" }}
                >
                  Explore Model Bank ↗
                </Link>
                <Link
                  href="/castings"
                  className="society-division-tab"
                  style={{ display: "inline-block", textDecoration: "none", padding: "12px 20px" }}
                >
                  Post Casting Call +
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ABOUT SECTION & SLOT-MACHINE COUNTERS
         ===================================================================== */}
      <section className="section about-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="about-main-block">
            <div className="w-layout-grid about-title-grid">
              <div className="about-section-title-block">
                <h2 className="about-section-title">
                  We represent iconic runway walkers and new editorial faces that
                  command global fashion weeks and luxury campaigns.
                </h2>
                <div className="text-overlay row-one" />
                <div className="text-overlay row-two" />
                <div className="text-overlay row-three" />
              </div>
              <div className="about-subtext-block">
                <div className="section-title-subtext-inner-block">
                  <h2 className="section-subtext">the agency</h2>
                </div>
              </div>
            </div>

            <div className="w-layout-grid about-info-grid-two">
              <div className="about-left-block" />
              <div className="about-right-block about-desc-reveal">
                <p className="about-description-two">
                  Operating across New York, Paris, Milan, and London, our model
                  management and casting bureau scouts, develops, and books
                  extraordinary talent. From exclusive Paris Haute Couture
                  openings to global fragrance and cover campaigns, every face on
                  our board tells an unforgettable story.
                </p>
              </div>
            </div>

            <div className="about-counter-block">
              <div className="w-layout-grid about-counter-grid">
                {COUNTERS.map((counter, idx) => (
                  <div
                    key={counter.id}
                    className="about-counter-box editorial-counter-card"
                  >
                    <span className="about-counter-kicker">0{idx + 1}</span>
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
                    <div className="about-counter-text">{counter.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          HIGH-FASHION RUNWAY VIDEO SECTION
         ===================================================================== */}
      <section className="section video-section" style={{ position: "relative" }}>
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

      {/* =====================================================================
          TESTIMONIAL STICKY STACK SECTION
         ===================================================================== */}
      <section className="section testimonial-section">
        <div className="testimonial-stciky-block">
          <div className="w-layout-blockcontainer container w-container">
            <div className="testimonial-main-block">
              <div className="testimonial-inner-block">
                <h1 className="testimonial-title">word of love</h1>
                <div className="testimonial-subtext-block">
                  <h2 className="testimonial-subtext">fashion houses</h2>
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

      {/* =====================================================================
          CONTACT INFO STICKY BANNER SECTION
         ===================================================================== */}
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
                  <h2 className="contact-title">book models</h2>
                  <p className="contact-description">
                    Request digital comp-card packages, option holds, or
                    go-see casting sessions for your upcoming runway show or
                    campaign shoot.
                  </p>
                  <div className="primary-button-style">
                    <Link
                      href="/contact-us"
                      className="button-primary-link w-button"
                    >
                      booking desk (demo)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE DIGITAL COMP-CARD & RUNWAY VIDEO MODAL (DARK MINIMALIST)
         ===================================================================== */}
      {selectedModel && (
        <div
          className="comp-modal-backdrop"
          onClick={() => setSelectedModel(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedModel.name} Digital Comp Card (Demo)`}
        >
          <div
            className="comp-modal-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="comp-modal-topbar">
              <div className="comp-modal-topbar-left">
                <span className="comp-modal-division">
                  {selectedModel.division} · {selectedModel.bureau} · DEMO
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModel(null)}
                className="comp-modal-close"
                aria-label="Close Digital Comp Card"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Modal Body */}
            <div className="comp-modal-body">
              {/* 3-Column Media Strip: Portrait 1 + Portrait 2 + Runway Motion Video */}
              <div className="comp-modal-media-grid">
                <div className="comp-modal-media-cell">
                  <img
                    src={selectedModel.primaryImage}
                    alt={`${selectedModel.name} Studio Polaroid`}
                    className="comp-modal-img"
                  />
                </div>
                <div className="comp-modal-media-cell">
                  <img
                    src={selectedModel.secondaryImage}
                    alt={`${selectedModel.name} Editorial Look`}
                    className="comp-modal-img"
                  />
                </div>
                <div className="comp-modal-media-cell">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={selectedModel.primaryImage}
                    className="comp-modal-img"
                  >
                    <source
                      src={selectedModel.videoPreview || ASSETS.heroVideo1}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              {/* Model Info & Full Measurements Table */}
              <div className="comp-modal-details-row">
                <div className="comp-modal-title-col">
                  <h2 className="comp-modal-name">{selectedModel.name}</h2>
                  <p className="comp-modal-booking">
                    Latest Campaign: <strong>{selectedModel.latestBooking}</strong>
                  </p>
                  <p className="comp-modal-ig">
                    Instagram:{" "}
                    <strong>{selectedModel.instagramHandle}</strong> (
                    {selectedModel.followers})
                  </p>
                </div>

                <div className="comp-modal-stats-table">
                  <div className="comp-modal-stat-box">
                    <span className="society-spec-key">HEIGHT</span>
                    <span className="society-spec-val">
                      {selectedModel.stats.height}
                    </span>
                  </div>
                  <div className="comp-modal-stat-box">
                    <span className="society-spec-key">BUST / CHEST</span>
                    <span className="society-spec-val">
                      {selectedModel.stats.bust}
                    </span>
                  </div>
                  <div className="comp-modal-stat-box">
                    <span className="society-spec-key">WAIST</span>
                    <span className="society-spec-val">
                      {selectedModel.stats.waist}
                    </span>
                  </div>
                  <div className="comp-modal-stat-box">
                    <span className="society-spec-key">HIPS</span>
                    <span className="society-spec-val">
                      {selectedModel.stats.hips}
                    </span>
                  </div>
                  <div className="comp-modal-stat-box">
                    <span className="society-spec-key">SHOE</span>
                    <span className="society-spec-val">
                      {selectedModel.stats.shoe}
                    </span>
                  </div>
                  <div className="comp-modal-stat-box">
                    <span className="society-spec-key">HAIR / EYES</span>
                    <span className="society-spec-val">
                      {selectedModel.stats.hair} · {selectedModel.stats.eyes}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA Buttons */}
              <div className="comp-modal-actions">
                <Link
                  href="/contact-us"
                  className="comp-modal-btn primary"
                >
                  Place Casting Option / Hold (Demo) ↗
                </Link>
                <Link
                  href={`/portfolio/${selectedModel.projectSlug}`}
                  className="comp-modal-btn secondary"
                >
                  View Campaign Portfolio (Demo) ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
