import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/agencyData";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <Navbar variant="light" />

      <section className="section portfolio-single-section">
        <div className="w-layout-blockcontainer container-small w-container">
          <div className="portfolio-single-main-block">
            <div className="protfolio-tag">
              {project.categories.join("  •  ")} — {project.year}
            </div>
            <h1 className="portfolio-name-single">{project.title}</h1>
            <p className="portfolio-summary">{project.summary}</p>

            <img
              src={project.bgImage}
              alt={project.title}
              className="portfolio-single-image"
            />

            <div className="portfolio-richtext-one w-richtext">
              <h2>Production Brief &amp; Casting Challenge</h2>
              <p>{project.challenge}</p>
              <h3>Scouting &amp; Callback Execution</h3>
              <p>{project.execution}</p>
              <blockquote>
                Client: {project.client} &nbsp;|&nbsp; Director:{" "}
                {project.director} &nbsp;|&nbsp; Location: {project.location}
              </blockquote>
            </div>

            <div className="portfolio-list-wrapper">
              <div className="portfolio-list">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/portfolio/${rel.slug}`}
                    className="portfolio-lightbox w-inline-block"
                  >
                    <img
                      src={rel.gridImage}
                      alt={rel.title}
                      className="portfolio-lightbox-image"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
