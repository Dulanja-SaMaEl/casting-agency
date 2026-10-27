"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/data/agencyData";

interface NavbarProps {
  variant?: "light" | "dark";
}

const DROPDOWN_LINKS = [
  { href: "/model-bank", label: "model bank" },
  { href: "/castings", label: "casting calls" },
  { href: "/model-registration", label: "model registration" },
  { href: "/talent-agreement", label: "representation agreement" },
  { href: "/consultations", label: "appointments & desk" },
  { href: "/admin", label: "admin command console" },
  { href: "/service", label: "service" },
  { href: "/team", label: "team" },
  { href: "/blog", label: "blog" },
  { href: "/terms-and-conditions", label: "terms & conditions" },
  { href: "/privacy-policy", label: "privacy policy" },
];

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/model-bank", label: "Model Bank" },
  { href: "/castings", label: "Casting Calls" },
  { href: "/model-registration", label: "Model Registration" },
  { href: "/talent-agreement", label: "Talent Agreement (3-Year)" },
  { href: "/consultations", label: "Appointments & Meetings" },
  { href: "/admin", label: "Admin Console" },
  { href: "/about-us", label: "About Us" },
  { href: "/service", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Casting Directors" },
  { href: "/blog", label: "Editorial Blog" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const pathname = usePathname();
  const isDark = variant !== "light" || true;

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState<string | null>(
    null
  );
  const [dotsHovered, setDotsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryColor = isDark ? "#ffffff" : "#000000";

  // Close menus on route change or Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
    setSidebarOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSidebarOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      id="Top"
      role="banner"
      data-collapse="medium"
      className={`${isDark ? "navbar-style-two" : "navbar"} w-nav`}
      style={{ position: "relative", zIndex: 1000 }}
    >
      {/* Slide-over Sidebar Backdrop */}
      <div
        onClick={() => setSidebarOpen(false)}
        className="sidebar-open-layout"
        style={{
          display: sidebarOpen ? "block" : "none",
          opacity: sidebarOpen ? 1 : 0,
          transition: "opacity 0.35s ease",
          zIndex: 1001,
          cursor: "pointer",
        }}
      />

      {/* Lightweight Mobile Menu Tap-Outside Backdrop (No GPU-heavy blur) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.18)",
            zIndex: 1002,
          }}
        />
      )}

      {/* Slide-over Sidebar Drawer (Dark Theme) */}
      <aside
        aria-label="Agency Information Drawer"
        className="sidebar-block"
        style={{
          opacity: sidebarOpen ? 1 : 0,
          transform: sidebarOpen
            ? "translate3d(0%, 0, 0)"
            : "translate3d(100%, 0, 0)",
          transition:
            "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
          zIndex: 1005,
          pointerEvents: sidebarOpen ? "auto" : "none",
          width: "min(400px, 90vw)",
          overflowY: "auto",
          backgroundColor: "#0a0a0a",
          borderLeft: "1px solid rgba(255, 255, 255, 0.14)",
        }}
      >
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Sidebar"
          className="sidebar-close-button w-inline-block"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            minWidth: "44px",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ASSETS.closeIconWhite}
            loading="lazy"
            width="21"
            alt="Sidebar Close Icon"
            className="sidebar-close-icon"
          />
        </button>

        <div className="sidebar-inner-block">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="sidebar-logo-link w-inline-block"
            aria-label="VISAGE Home"
            style={{ textDecoration: "none" }}
          >
            <span
              className="visage-brand-logo-text"
              style={{ fontSize: "34px", letterSpacing: "0.2em" }}
            >
              VISAGE
            </span>
          </Link>
          <div className="sidebar-description-block">
            <p className="sidebar-description">
              Shaping cinema, couture runway, and global campaigns with iconic
              talent that moves, inspires, and disrupts.
            </p>
          </div>
          <div className="sidebar-image-block">
            <img
              src={ASSETS.sidebarImage}
              loading="lazy"
              alt="Casting Studio Session"
              className="sidebar-image"
            />
          </div>
          <div className="sidebar-cntact-info-block">
            <div className="sidebar-address-text">
              321 Mercer Street, Suite 456, SoHo, NY.
            </div>
            <a
              href="mailto:casting@visagestudio.com"
              className="sidebar-cotact-email"
            >
              casting@visagestudio.com
            </a>
            <a href="tel:+18001234567890" className="sidebar-contact-number">
              +1 (212) 555-0199
            </a>
          </div>
          <div className="sidebar-social-block">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
              className="sidebar-social-link-block w-inline-block"
            >
              <img
                src={ASSETS.socialWhite.dribbble}
                loading="lazy"
                alt="Dribbble"
                className="sidebar-social-icon"
              />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className="sidebar-social-link-block w-inline-block"
            >
              <img
                src={ASSETS.socialWhite.behance}
                loading="lazy"
                alt="Behance"
                className="sidebar-social-icon"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="sidebar-social-link-block w-inline-block"
            >
              <img
                src={ASSETS.socialWhite.instagram}
                loading="lazy"
                alt="Instagram"
                className="sidebar-social-icon"
              />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navbar Container */}
      <div
        className="container w-container"
        style={{ position: "relative", zIndex: 1004 }}
      >
        <div
          className={
            isDark ? "navbar-style-2-main-wrapper" : "navbar-main-wrapper"
          }
        >
          <Link
            href="/"
            className={`${
              isDark ? "nav-style-two-logo-link" : "navbar-logo-link"
            } w-nav-brand`}
            aria-label="VISAGE Home"
            style={{ textDecoration: "none" }}
          >
            <span className="visage-brand-logo-text">VISAGE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            className={`${
              isDark ? "navbarmenu-style-two-block" : "navbar-menu-block"
            } w-nav-menu desktop-nav-menu`}
          >
            {/* HOME */}
            <div
              className="navbar-menu-link-block"
              onMouseEnter={() => setHoveredNav("home")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="navbar-menu-inner-link-block">
                <div
                  className={`navbar-hover-line-block one ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "home" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  className={`navbar-menu-link ${
                    isDark ? "nav-style-2-link" : ""
                  } w-nav-link ${pathname === "/" ? "w--current" : ""}`}
                >
                  Home
                </Link>
              </div>
            </div>

            {/* ABOUT US */}
            <div
              className="navbar-menu-link-block"
              onMouseEnter={() => setHoveredNav("about")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="navbar-menu-inner-link-block">
                <div
                  className={`navbar-hover-line-block ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "about" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
                <Link
                  href="/about-us"
                  aria-current={pathname === "/about-us" ? "page" : undefined}
                  className={`navbar-menu-link ${
                    isDark ? "nav-style-2-link" : ""
                  } w-nav-link ${pathname === "/about-us" ? "w--current" : ""}`}
                >
                  about us
                </Link>
              </div>
            </div>

            {/* PAGES DROPDOWN */}
            <div
              className={`navbar-menu-link-block ${
                isDark ? "menu-style-2-dropdown" : ""
              } w-dropdown`}
              onMouseEnter={() => {
                setHoveredNav("pages");
                setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                setHoveredNav(null);
                setDropdownOpen(false);
              }}
            >
              <div
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`navbar-menu-link ${
                  isDark ? "nav-style-2-link" : ""
                } w-dropdown-toggle`}
                style={{ paddingRight: "15px" }}
              >
                <div>pages</div>
                <div
                  className={`navbar-hover-line-block one ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "pages" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>

              <nav
                className={`menu-dropdown ${
                  isDark ? "nav-style-2-dropdown" : ""
                } w-dropdown-list ${dropdownOpen ? "w--open" : ""}`}
                style={{
                  display: dropdownOpen ? "block" : "none",
                  zIndex: 1005,
                }}
              >
                {DROPDOWN_LINKS.map((item) => {
                  const isItemHovered = hoveredDropdownItem === item.href;
                  return (
                    <div
                      key={item.href}
                      className={`dropdown-link-block ${
                        isDark ? "dropdown-link-block-style-2" : ""
                      }`}
                      onMouseEnter={() => setHoveredDropdownItem(item.href)}
                      onMouseLeave={() => setHoveredDropdownItem(null)}
                    >
                      <div
                        className={`dropdown-link-inner-block ${
                          isDark ? "dropdown-link-inner-block-style-two" : ""
                        }`}
                        style={{
                          transform: isItemHovered
                            ? "translate3d(0px, 0, 0)"
                            : "translate3d(-15px, 0, 0)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <div
                          className={`link-dot ${
                            isDark ? "link-dot-style-2" : ""
                          }`}
                          style={{
                            transform: isItemHovered
                              ? "scale3d(1, 1, 1)"
                              : "scale3d(0, 0, 1)",
                            transition: "transform 0.4s ease",
                          }}
                        />
                        <Link
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`dropdown-link ${
                            isDark ? "dropdown-link-style-2" : ""
                          } w-dropdown-link ${
                            pathname === item.href ? "w--current" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* MODEL BANK */}
            <div
              className="navbar-menu-link-block"
              onMouseEnter={() => setHoveredNav("model-bank")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="navbar-menu-inner-link-block">
                <div
                  className={`navbar-hover-line-block ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "model-bank" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
                <Link
                  href="/model-bank"
                  aria-current={
                    pathname.startsWith("/model-bank") ? "page" : undefined
                  }
                  className={`navbar-menu-link ${
                    isDark ? "nav-style-2-link" : ""
                  } w-nav-link ${
                    pathname.startsWith("/model-bank") ? "w--current" : ""
                  }`}
                >
                  model bank
                </Link>
              </div>
            </div>

            {/* CASTINGS */}
            <div
              className="navbar-menu-link-block"
              onMouseEnter={() => setHoveredNav("castings")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="navbar-menu-inner-link-block">
                <div
                  className={`navbar-hover-line-block ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "castings" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
                <Link
                  href="/castings"
                  aria-current={
                    pathname.startsWith("/castings") ? "page" : undefined
                  }
                  className={`navbar-menu-link ${
                    isDark ? "nav-style-2-link" : ""
                  } w-nav-link ${
                    pathname.startsWith("/castings") ? "w--current" : ""
                  }`}
                >
                  castings
                </Link>
              </div>
            </div>

            {/* PORTFOLIO */}
            <div
              className="navbar-menu-link-block"
              onMouseEnter={() => setHoveredNav("portfolio")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="navbar-menu-inner-link-block">
                <div
                  className={`navbar-hover-line-block ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "portfolio" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
                <Link
                  href="/portfolio"
                  aria-current={
                    pathname.startsWith("/portfolio") ? "page" : undefined
                  }
                  className={`navbar-menu-link ${
                    isDark ? "nav-style-2-link" : ""
                  } w-nav-link ${
                    pathname.startsWith("/portfolio") ? "w--current" : ""
                  }`}
                >
                  portfolio
                </Link>
              </div>
            </div>

            {/* CONTACT US */}
            <div
              className="navbar-menu-link-block"
              onMouseEnter={() => setHoveredNav("contact")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="navbar-menu-inner-link-block">
                <div
                  className={`navbar-hover-line-block ${
                    isDark ? "nav-style-2-link-line" : ""
                  }`}
                  style={{
                    width: hoveredNav === "contact" ? "20px" : "0px",
                    height: "1px",
                    transition: "width 0.3s ease",
                  }}
                />
                <Link
                  href="/contact-us"
                  aria-current={pathname === "/contact-us" ? "page" : undefined}
                  className={`navbar-menu-link ${
                    isDark ? "nav-style-2-link" : ""
                  } w-nav-link ${
                    pathname === "/contact-us" ? "w--current" : ""
                  }`}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Action Controls (Model Reg CTA + 6-Dot Trigger + Mobile Menu Button) */}
          <div
            className="navbar-right-controls"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              justifySelf: "end",
            }}
          >
            {/* Quick Model Registration Direct CTA */}
            <Link
              href="/model-registration"
              className="society-division-tab"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "3px",
                border: "1px solid rgba(255, 255, 255, 0.28)",
                whiteSpace: "nowrap",
              }}
            >
              <span>Join as Model</span>
              <span style={{ opacity: 0.7 }}>↗</span>
            </Link>

            {/* 6-Dot Morphing Sidebar Trigger Button */}
            <button
              type="button"
              aria-label="Open Studio Drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                setSidebarOpen(true);
              }}
              onMouseEnter={() => setDotsHovered(true)}
              onMouseLeave={() => setDotsHovered(false)}
              className="nav-sidebar-logo-block"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                minWidth: "44px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="w-layout-grid nav-sidebar-logo-inner-block">
                <div
                  className={`nav-sidebar-logo-dot ${
                    isDark ? "bg-white" : ""
                  } one`}
                  style={{
                    backgroundColor: dotsHovered ? "transparent" : primaryColor,
                    transition: "background-color 0.25s ease",
                  }}
                />
                <div
                  className={`nav-sidebar-logo-dot ${
                    isDark ? "bg-white" : ""
                  } two`}
                  style={{
                    backgroundColor: dotsHovered ? primaryColor : "transparent",
                    transition: "background-color 0.35s ease",
                  }}
                />
                <div
                  className={`nav-sidebar-logo-dot ${
                    isDark ? "bg-white" : ""
                  } three`}
                  style={{
                    backgroundColor: dotsHovered ? primaryColor : "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                />
                <div
                  className={`nav-sidebar-logo-dot ${
                    isDark ? "bg-white" : ""
                  } four`}
                  style={{
                    backgroundColor: dotsHovered ? primaryColor : "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                />
                <div
                  className={`nav-sidebar-logo-dot ${
                    isDark ? "bg-white" : ""
                  } five`}
                  style={{
                    backgroundColor: dotsHovered ? primaryColor : "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                />
                <div
                  className={`nav-sidebar-logo-dot ${
                    isDark ? "bg-white" : ""
                  } six`}
                  style={{
                    backgroundColor: dotsHovered ? "transparent" : primaryColor,
                    transition: "background-color 0.25s ease",
                  }}
                />
              </div>
            </button>

            {/* Mobile Hamburger Menu Button with Morphing SVG */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => {
                setSidebarOpen(false);
                setMobileMenuOpen((prev) => !prev);
              }}
              className={`dropdown-menu-button ${
                isDark ? "style-two-menu-button" : ""
              } w-nav-button ${mobileMenuOpen ? "w--open" : ""}`}
              style={{
                background: "transparent",
                minWidth: "46px",
                minHeight: "46px",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line
                  x1="1"
                  y1={mobileMenuOpen ? "8" : "2"}
                  x2="21"
                  y2={mobileMenuOpen ? "8" : "2"}
                  stroke={primaryColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "11px 8px",
                    transform: mobileMenuOpen
                      ? "rotate(45deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.22s ease",
                  }}
                />
                <line
                  x1="1"
                  y1="8"
                  x2="21"
                  y2="8"
                  stroke={primaryColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    transition: "opacity 0.15s ease",
                  }}
                />
                <line
                  x1="1"
                  y1={mobileMenuOpen ? "8" : "14"}
                  x2="21"
                  y2={mobileMenuOpen ? "8" : "14"}
                  stroke={primaryColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "11px 8px",
                    transform: mobileMenuOpen
                      ? "rotate(-45deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.22s ease",
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Unclipped, Zero-Lag Mobile Menu Dropdown */}
      <div
        className="mobile-nav-drawer-overlay"
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          zIndex: 1004,
          padding: "8px 15px 16px",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          opacity: mobileMenuOpen ? 1 : 0,
          transform: mobileMenuOpen
            ? "translate3d(0, 0px, 0)"
            : "translate3d(0, -8px, 0)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          willChange: "transform, opacity",
        }}
      >
        <nav
          role="navigation"
          aria-label="Mobile Navigation"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            padding: "12px 18px",
            backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
            border: isDark
              ? "1px solid rgba(255, 255, 255, 0.22)"
              : "1px solid #000000",
            borderRadius: "6px",
            boxShadow: "0 16px 36px -8px rgba(0, 0, 0, 0.18)",
          }}
        >
          {MOBILE_NAV_LINKS.map((item, idx) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`navbar-menu-link ${
                  isDark ? "nav-style-2-link" : ""
                } w-nav-link`}
                style={{
                  width: "100%",
                  textAlign: "left",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 6px",
                  margin: 0,
                  borderBottom:
                    idx < MOBILE_NAV_LINKS.length - 1
                      ? isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.07)"
                      : "none",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: primaryColor,
                      display: "inline-block",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
