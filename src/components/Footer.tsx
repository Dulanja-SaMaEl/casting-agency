"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ASSETS } from "@/data/agencyData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".footer-top-grid > div",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-top-grid",
            start: "top 88%",
          },
        }
      );

      gsap.fromTo(
        ".footer-center-block, .footer-bottom-grid",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-center-block",
            start: "top 92%",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <section ref={footerRef} className="footer-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-main-block">
          <div className="footer-inner-block">
            <div className="w-layout-grid footer-top-grid">
              <div
                id="w-node-_54ba6d8e-8f57-f9b7-f1a7-f6eb8b3f0e06-8b3f0e01"
                className="footer-title-block"
              >
                <div className="footer-title-inner-block">
                  <h2 className="footer-title">Build Your Cast Today</h2>
                </div>
              </div>
              <div
                id="w-node-_54ba6d8e-8f57-f9b7-f1a7-f6eb8b3f0e0a-8b3f0e01"
                className="footer-right-info-block"
              >
                <p className="footer-description">
                  From principal screen leads and haute couture runway lineups to
                  global commercial campaigns—let’s cast your next production.
                </p>
                <div className="primary-button-style">
                  <Link
                    href="/contact-us"
                    className="button-primary-link footer-button w-button"
                  >
                    get started
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-layout-grid footer-center-block">
              <div className="footer-contact-flex-block">
                <Link
                  href="/"
                  className="footer-logo-link-block w-inline-block"
                >
                  <img
                    src={ASSETS.footerLogoIcon}
                    loading="lazy"
                    alt="Reflux Casting Studio Logo"
                    className="footer-logo"
                  />
                </Link>
                <div className="footer-contact-info-block">
                  <a href="tel:+12125550189" className="footer-number">
                    (00) 123 456 789
                  </a>
                  <a
                    href="mailto:casting@refluxstudio.com"
                    className="footer-email"
                  >
                    casting@refluxstudio.com
                  </a>
                </div>
              </div>
              <div className="footer-page-link-block">
                <div className="footer-page-link-inner-block">
                  <Link href="/about-us" className="footer-page-link">
                    about
                  </Link>
                  <Link href="/service" className="footer-page-link">
                    service
                  </Link>
                  <Link href="/portfolio" className="footer-page-link">
                    portfolio
                  </Link>
                  <Link href="/team" className="footer-page-link">
                    team
                  </Link>
                  <Link href="/blog" className="footer-page-link">
                    blog
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-layout-grid footer-bottom-grid">
              <div
                id="w-node-_54ba6d8e-8f57-f9b7-f1a7-f6eb8b3f0e25-8b3f0e01"
                className="footer-copyright-block"
              >
                <div className="copyright-text">
                  © Copyright -{" "}
                  <Link href="/" className="copyright-link">
                    Reflux Casting
                  </Link>{" "}
                  | Talent &amp; Production Studio -{" "}
                  <Link href="/terms-and-conditions" className="copyright-link">
                    Licensing
                  </Link>{" "}
                  Powered by{" "}
                  <a
                    href="https://webflow.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="copyright-link"
                  >
                    Webflow
                  </a>
                </div>
              </div>

              <div
                id="w-node-_54ba6d8e-8f57-f9b7-f1a7-f6eb8b3f0e2f-8b3f0e01"
                className="footer-social-icon-block"
              >
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src={ASSETS.footerSocials.facebook}
                    loading="lazy"
                    alt="Facebook"
                    className="footer-social-image"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src={ASSETS.footerSocials.instagram}
                    loading="lazy"
                    alt="Instagram"
                    className="footer-social-image"
                  />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src={ASSETS.footerSocials.pinterest}
                    loading="lazy"
                    alt="Pinterest"
                    className="footer-social-image"
                  />
                </a>
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Dribbble"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src={ASSETS.footerSocials.dribbble}
                    loading="lazy"
                    alt="Dribbble"
                    className="footer-social-image"
                  />
                </a>
              </div>

              <div className="footer-more-info-link-block">
                <Link
                  href="/terms-and-conditions"
                  className="footer-more-info-link"
                >
                  terms &amp; conditions
                </Link>
                <Link href="/privacy-policy" className="footer-more-info-link">
                  privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
