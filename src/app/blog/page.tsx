"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Breadcrumb header entrance
      gsap.fromTo(
        ".breadcrumb-title",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }
      );

      // Individual blog cards early & smooth entrance on scroll
      const blogCards = gsap.utils.toArray<HTMLElement>(
        ".portfolio-inner-blog-main-block"
      );
      blogCards.forEach((card) => {
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
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        // Left column parallax: -12% -> +12% (a-43)
        const leftImgs = gsap.utils.toArray<HTMLElement>(".blog-parallax-left");
        leftImgs.forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -12 },
            {
              yPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
              },
            }
          );
        });

        // Right column parallax: +12% -> -12% (a-44)
        const rightImgs = gsap.utils.toArray<HTMLElement>(
          ".blog-parallax-right"
        );
        rightImgs.forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: 12 },
            {
              yPercent: -12,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
              },
            }
          );
        });
      });

      mm.add("(max-width: 991px)", () => {
        const mobileBlogImgs = gsap.utils.toArray<HTMLElement>(
          ".blog-inner-image"
        );
        mobileBlogImgs.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const leftPosts = BLOG_POSTS.filter((p) => p.column === "left");
  const rightPosts = BLOG_POSTS.filter((p) => p.column === "right");

  return (
    <div ref={containerRef}>
      <Navbar variant="dark" />

      {/* BREADCRUMB HERO */}
      <section className="section breadcrumb-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumbtwo-title-block">
            <h1 className="breadcrumb-title">update blogs</h1>
          </div>
        </div>
      </section>

      {/* 2-COLUMN OPPOSITE PARALLAX BLOG GRID */}
      <section className="section inner-blog-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-blog-main-block">
            <div className="w-layout-grid inner-blog-grid">
              {/* Left Column (5 Posts) */}
              <div className="w-dyn-list">
                <div
                  role="list"
                  className="blog-inner-list-flex-block w-dyn-items"
                >
                  {leftPosts.map((post) => (
                    <div key={post.id} role="listitem" className="w-dyn-item">
                      <div className="portfolio-inner-blog-main-block">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="portfolio-inner-link-block w-inline-block"
                        >
                          <div className="blog-inner-image-main-block">
                            <div className="blog-inner-image-block blog-parallax-left">
                              <img
                                src={post.image}
                                loading="lazy"
                                alt={post.title}
                                className="blog-inner-image"
                              />
                            </div>
                          </div>
                          <div className="blog-inner-info-block">
                            <div className="blog-ipdate-info-block">
                              <div className="blog-date-text">{post.date}</div>
                              <div className="blog-des">-</div>
                              <div className="blog-tage-block">
                                {post.category}
                              </div>
                            </div>
                            <h3 className="update-blog-names">{post.title}</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (4 Posts) */}
              <div className="w-dyn-list">
                <div
                  role="list"
                  className="blog-inner-list-flex-block w-dyn-items"
                >
                  {rightPosts.map((post) => (
                    <div key={post.id} role="listitem" className="w-dyn-item">
                      <div className="portfolio-inner-blog-main-block">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="portfolio-inner-link-block w-inline-block"
                        >
                          <div className="blog-inner-image-main-block">
                            <div className="blog-inner-image-block blog-parallax-right">
                              <img
                                src={post.image}
                                loading="lazy"
                                alt={post.title}
                                className="blog-inner-image two"
                              />
                            </div>
                          </div>
                          <div className="blog-inner-info-block">
                            <div className="blog-ipdate-info-block">
                              <div className="blog-date-text">{post.date}</div>
                              <div className="blog-des">-</div>
                              <div className="blog-tage-block">
                                {post.category}
                              </div>
                            </div>
                            <h3 className="update-blog-names">{post.title}</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
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
