"use client";

import React, { useEffect, useState } from "react";
import { ASSETS } from "@/data/agencyData";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setVisible(scrollPercent >= 12 || scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#Top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top w-inline-block"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955), transform 0.3s ease",
        zIndex: 999,
      }}
    >
      <img
        src={ASSETS.backToTopIcon}
        loading="lazy"
        alt="Back to top arrow"
        className="back-to-top-icon"
      />
    </a>
  );
}
