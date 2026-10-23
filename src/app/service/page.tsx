"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePercent, setMousePercent] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".breadcrumb-title",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }
      );

      const items = gsap.utils.toArray<HTMLElement>(".service-grid-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            delay: (i % 3) * 0.04,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        const img = item.querySelector(".service-image-inner");
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

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePercent({
      x: relX * 70, // -35% to +35%
      y: relY * 90, // -45% to +45%
    });
  };

  return (
    <div ref={containerRef}>
      <Navbar variant="dark" />

      {/* BREADCRUMB HERO SECTION */}
      <section className="section breadcrumb-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumbtwo-title-block two">
            <h1 className="breadcrumb-title">Our best services</h1>
          </div>
        </div>
      </section>

      {/* 3x3 SERVICE GRID SECTION */}
      <section className="section service-inner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-inner-main-block">
            <div className="w-dyn-list">
              <div
                role="list"
                className="service-inner-list-wrapper w-dyn-items"
              >
                {SERVICES.map((service, idx) => {
                  const isHovered = hoveredIdx === idx;
                  return (
                    <div
                      key={service.id}
                      role="listitem"
                      className="w-dyn-item service-grid-item"
                    >
                      <div className="service-inner-info-main-block">
                        <Link
                          href={`/service/${service.slug}`}
                          onMouseEnter={() => setHoveredIdx(idx)}
                          onMouseLeave={() => {
                            setHoveredIdx(null);
                            setMousePercent({ x: 0, y: 0 });
                          }}
                          onMouseMove={handleMouseMove}
                          className="service-inner-info-link w-inline-block"
                        >
                          <div className="service-image-block">
                            <img
                              src={service.image}
                              loading="lazy"
                              alt={service.title}
                              className="service-image-inner"
                              style={{
                                transform: isHovered
                                  ? "scale3d(1.1, 1.1, 1)"
                                  : "scale3d(1, 1, 1)",
                                transition:
                                  "transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                              }}
                            />
                            <div
                              className="service-inner-image-leyout"
                              style={{
                                backgroundColor: isHovered
                                  ? "rgba(0, 0, 0, 0.5)"
                                  : "rgba(0, 0, 0, 0)",
                                transition: "background-color 0.4s ease",
                              }}
                            />
                          </div>
                          <div
                            className="service-inner-title-block"
                            style={{
                              transform: isHovered
                                ? `translate3d(${mousePercent.x}%, ${mousePercent.y}%, 0) scale3d(1, 1, 1)`
                                : "translate3d(0%, 0%, 0) scale3d(0, 0, 1)",
                              transition: isHovered
                                ? "transform 0.18s ease-out"
                                : "transform 0.4s ease",
                              pointerEvents: "none",
                            }}
                          >
                            <h3 className="service-name-inner">
                              {service.shortTitle}
                            </h3>
                          </div>
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
