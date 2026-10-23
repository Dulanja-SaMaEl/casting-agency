"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".breadcrumb-title",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }
      );

      const items = gsap.utils.toArray<HTMLElement>(".portfolio-grid-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: (i % 3) * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 96%",
              toggleActions: "play none none none",
            },
          }
        );

        const img = item.querySelector(".portfolio-inner-info-image");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.25,
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Navbar variant="dark" />

      {/* BREADCRUMB HERO */}
      <section className="section breadcrumb-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumbtwo-title-block two">
            <h1 className="breadcrumb-title">Our Work</h1>
          </div>
        </div>
      </section>

      {/* 3x3 PORTFOLIO GRID */}
      <section className="section portfolio-inner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="portfolio-inner-main-block">
            <div className="w-dyn-list">
              <div role="list" className="portfolio-inner-grid w-dyn-items">
                {PROJECTS.map((project, idx) => {
                  const isHovered = hoveredIdx === idx;
                  return (
                    <div
                      key={project.id}
                      role="listitem"
                      className="w-dyn-item portfolio-grid-item"
                    >
                      <div className="portfolio-inner-info-main-block">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          onMouseEnter={() => setHoveredIdx(idx)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          className="portfolio-inner-link w-inline-block"
                        >
                          <div className="portfolio-inner-info-image-block">
                            <img
                              src={project.gridImage}
                              loading="lazy"
                              alt={project.title}
                              className="portfolio-inner-info-image"
                            />
                          </div>

                          {/* White Overlay Panel */}
                          <div
                            className="portfolio-more-info-inner-block"
                            style={{
                              opacity: isHovered ? 1 : undefined,
                              transition: "opacity 0.4s ease",
                            }}
                          >
                            <div className="portfolio-inner-title-block">
                              <div className="portfolio-tage">
                                {project.categories[0]}
                              </div>
                              <h3 className="portfolio-name">
                                {project.title}
                              </h3>
                            </div>
                          </div>

                          {/* 4 Drawing Border Lines (a-45 / a-46) */}
                          <div
                            className="portfolio-hover-line-block top"
                            style={{
                              width: isHovered ? "100%" : "0%",
                              height: "1px",
                              transition: isHovered
                                ? "width 0.4s ease 0.3s"
                                : "width 0.4s ease",
                            }}
                          />
                          <div
                            className="portfolio-hover-line-block bottom"
                            style={{
                              width: isHovered ? "100%" : "0%",
                              height: "1px",
                              transition: isHovered
                                ? "width 0.4s ease 0.3s"
                                : "width 0.4s ease",
                            }}
                          />
                          <div
                            className="portfolio-hover-line-block left"
                            style={{
                              width: "1px",
                              height: isHovered ? "100%" : "0%",
                              transition: isHovered
                                ? "height 0.4s ease 0.3s"
                                : "height 0.4s ease",
                            }}
                          />
                          <div
                            className="portfolio-hover-line-block right"
                            style={{
                              width: "1px",
                              height: isHovered ? "100%" : "0%",
                              transition: isHovered
                                ? "height 0.4s ease 0.3s"
                                : "height 0.4s ease",
                            }}
                          />
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
