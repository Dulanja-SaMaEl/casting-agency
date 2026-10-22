# Reflux — Casting & Talent Agency

A Next.js 15, Tailwind CSS, and GSAP (`ScrollTrigger`) web application built with a high-craft editorial aesthetic and scroll-driven 3D animations for a Casting & Talent Agency.

## Features

- **3D Perspective & Scroll-Scrubbed Animations**:
  - Staggered 3D `rotateX` Hero headline letter flips & continuous 3D spinning `BOOK NOW` badge.
  - `500vh` Sticky Horizontal Scroll Projects showcase with 3D `rotateY` letter reveals and 4 crossfading full-bleed background images.
  - Progressive 3-line scroll-scrubbed text unmasking & slot-machine rolling number counters (`39+`, `68+`, `27+`, `94+`).
  - Interactive Video Showcase with custom cursor tracking, background parallax, and modal player.
  - `500vh` Sticky `WORD OF LOVE` Testimonial card stack flying in at alternating `+10deg` / `-10deg` angles.
  - `480vh` 3D Z-Axis Perspective Tunnel (`translateZ(-1000px -> 750px)`) on the About Us page.
  - 2-Column Opposite-Direction Vertical Image Parallax (`-12% <-> +12%`) on Portfolio and Blog grids.
- **Complete Multi-Page Architecture**:
  - `/` — Home (Hero, Casting Services, Sticky Horizontal Projects, About Studio, Showreel Video, Sticky Testimonials, Sticky Contact Card)
  - `/about-us` — 3D Z-Axis Tunnel Hero, Studio Story, Industry Recognition Table, Casting Directors Team Grid
  - `/service` & `/service/[slug]` — Casting Disciplines & Dynamic Detail Pages
  - `/portfolio` & `/portfolio/[slug]` — 2-Column Opposite-Parallax Case Studies & Dynamic Production Pages
  - `/blog` & `/blog/[slug]` — Editorial Insights & Dynamic Article Pages
  - `/contact-us` — Crosshair Contact Grid, Inquiry Form, and Studio Map

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
