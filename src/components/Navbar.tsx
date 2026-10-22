"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ASSETS } from "@/data/agencyData";

interface NavbarProps {
  variant?: "light" | "dark";
}

const DROPDOWN_LINKS = [
  { href: "/service", label: "service" },
  { href: "/team", label: "team" },
  { href: "/blog", label: "blog" },
  { href: "/terms-and-conditions", label: "terms & conditions" },
  { href: "/privacy-policy", label: "privacy policy" },
];

export default function Navbar({ variant = "light" }: NavbarProps) {
  const pathname = usePathname();
  const isDark = variant === "dark";

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState<string | null>(
    null
  );
  const [dotsHovered, setDotsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryColor = isDark ? "#ffffff" : "#000000";

  return (
    <div
      id="Top"
      role="banner"
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
          transition: "opacity 0.5s ease",
          zIndex: 1001,
          cursor: "pointer",
        }}
      />

      {/* Slide-over Sidebar Drawer */}
      <aside
        aria-label="Agency Information Drawer"
        className={`sidebar-block ${isDark ? "sidebar-style-two" : ""}`}
        style={{
          opacity: sidebarOpen ? 1 : 0,
          transform: sidebarOpen ? "translate3d(0%, 0, 0)" : "translate3d(100%, 0, 0)",
          transition:
            "transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.5s ease",
          zIndex: 1002,
          pointerEvents: sidebarOpen ? "auto" : "none",
        }}
      >
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Sidebar"
          className="sidebar-close-button w-inline-block"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <img
            src={isDark ? ASSETS.closeIconDark : ASSETS.closeIconWhite}
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
          >
            <img
              src={isDark ? ASSETS.sidebarLogoDark : ASSETS.sidebarLogoWhite}
              loading="lazy"
              alt="Reflux Sidebar Logo"
              className="sidebar-logo"
            />
          </Link>
          <div className="sidebar-description-block">
            <p className={`sidebar-description ${isDark ? "text-dark" : ""}`}>
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
            <div
              className={`sidebar-address-text ${isDark ? "text-dark" : ""}`}
            >
              321 Mercer Street, Suite 456, SoHo, NY.
            </div>
            <a
              href="mailto:casting@refluxstudio.com"
              className={`sidebar-cotact-email ${isDark ? "text-dark" : ""}`}
            >
              casting@refluxstudio.com
            </a>
            <a
              href="tel:+18001234567890"
              className={`sidebar-contact-number ${isDark ? "text-dark" : ""}`}
            >
              +1 8000 123 456 7890
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
                src={
                  isDark
                    ? ASSETS.socialDark.dribbble
                    : ASSETS.socialWhite.dribbble
                }
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
                src={
                  isDark
                    ? ASSETS.socialDark.behance
                    : ASSETS.socialWhite.behance
                }
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
                src={
                  isDark
                    ? ASSETS.socialDark.instagram
                    : ASSETS.socialWhite.instagram
                }
                loading="lazy"
                alt="Instagram"
                className="sidebar-social-icon"
              />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navbar Container */}
      <div className="container w-container">
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
          >
            <img
              src={isDark ? ASSETS.headerLogoWhite : ASSETS.headerLogoDark}
              loading="lazy"
              alt="Reflux Casting Logo"
              className={isDark ? "nav-style-two-logo" : "nav-logo"}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            className={`${
              isDark ? "navbarmenu-style-two-block" : "navbar-menu-block"
            } w-nav-menu`}
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

          {/* 6-Dot Morphing Sidebar Trigger Button */}
          <button
            type="button"
            aria-label="Open Studio Drawer"
            onClick={() => setSidebarOpen(true)}
            onMouseEnter={() => setDotsHovered(true)}
            onMouseLeave={() => setDotsHovered(false)}
            className="nav-sidebar-logo-block"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <div className="w-layout-grid nav-sidebar-logo-inner-block">
              {/* Dot 1: Filled by default -> Hollow on hover */}
              <div
                className={`nav-sidebar-logo-dot ${
                  isDark ? "bg-white" : ""
                } one`}
                style={{
                  backgroundColor: dotsHovered ? "transparent" : primaryColor,
                  transition: "background-color 0.3s ease",
                }}
              />
              {/* Dot 2: Hollow by default -> Filled on hover */}
              <div
                className={`nav-sidebar-logo-dot ${
                  isDark ? "bg-white" : ""
                } two`}
                style={{
                  backgroundColor: dotsHovered ? primaryColor : "transparent",
                  transition: "background-color 0.5s ease",
                }}
              />
              {/* Dot 3: Hollow by default -> Filled on hover */}
              <div
                className={`nav-sidebar-logo-dot ${
                  isDark ? "bg-white" : ""
                } three`}
                style={{
                  backgroundColor: dotsHovered ? primaryColor : "transparent",
                  transition: "background-color 0.4s ease",
                }}
              />
              {/* Dot 4: Hollow by default -> Filled on hover */}
              <div
                className={`nav-sidebar-logo-dot ${
                  isDark ? "bg-white" : ""
                } four`}
                style={{
                  backgroundColor: dotsHovered ? primaryColor : "transparent",
                  transition: "background-color 0.4s ease",
                }}
              />
              {/* Dot 5: Hollow by default -> Filled on hover */}
              <div
                className={`nav-sidebar-logo-dot ${
                  isDark ? "bg-white" : ""
                } five`}
                style={{
                  backgroundColor: dotsHovered ? primaryColor : "transparent",
                  transition: "background-color 0.4s ease",
                }}
              />
              {/* Dot 6: Filled by default -> Hollow on hover */}
              <div
                className={`nav-sidebar-logo-dot ${
                  isDark ? "bg-white" : ""
                } six`}
                style={{
                  backgroundColor: dotsHovered ? "transparent" : primaryColor,
                  transition: "background-color 0.3s ease",
                }}
              />
            </div>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`dropdown-menu-button ${
              isDark ? "style-two-menu-button" : ""
            } w-nav-button ${mobileMenuOpen ? "w--open" : ""}`}
            style={{ background: "transparent" }}
          >
            <div className="w-icon-nav-menu" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="w-nav-overlay"
          style={{
            display: "block",
            height: "auto",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1004,
            padding: "10px 15px",
          }}
        >
          <nav
            role="navigation"
            data-nav-menu-open
            className={
              isDark ? "navbarmenu-style-two-block" : "navbar-menu-block"
            }
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
              backgroundColor: isDark ? "#000000" : "#ffffff",
              border: isDark ? "1px solid #ffffff33" : "1px solid #000000",
              borderRadius: "5px",
            }}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/service", label: "Service" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/team", label: "Team" },
              { href: "/blog", label: "Blog" },
              { href: "/contact-us", label: "Contact Us" },
              { href: "/terms-and-conditions", label: "Terms & Conditions" },
              { href: "/privacy-policy", label: "Privacy Policy" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`navbar-menu-link ${
                  isDark ? "nav-style-2-link" : ""
                } w-nav-link`}
                style={{ width: "100%", textAlign: "left" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
