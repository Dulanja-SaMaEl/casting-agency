import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TEAM_MEMBERS } from "@/data/agencyData";

export function generateStaticParams() {
  return TEAM_MEMBERS.map((m) => ({ slug: m.slug }));
}

export default async function TeamSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div>
      <Navbar variant="light" />

      <section className="section team-single-section">
        <div className="w-layout-blockcontainer container-small w-container">
          <div className="w-layout-grid team-single-grid">
            <div className="team-single-image-block">
              <img
                src={member.image}
                alt={member.name}
                className="team-single-image"
              />
            </div>

            <div className="team-single-content-block">
              <div className="team-member-jobtitle-one">{member.role}</div>
              <h1 className="team-member-name-single">{member.name}</h1>
              <p className="team-member-summary">{member.extendedBio}</p>

              <div className="team-reachout-block">
                <h2 className="team-reachout-title">Specialty Desk</h2>
                <div>{member.specialty}</div>
              </div>

              <div className="team-reachout-block">
                <h2 className="team-reachout-title">Selected Credits</h2>
                <ul>
                  {member.credits.map((credit, i) => (
                    <li key={i}>{credit}</li>
                  ))}
                </ul>
              </div>

              <div className="team-reachout-block last">
                <h2 className="team-reachout-title">Direct Casting Desk</h2>
                <a
                  href={`mailto:${member.slug}@refluxstudio.com`}
                  className="team-reachout-link"
                >
                  {member.slug}@refluxstudio.com
                </a>
              </div>
            </div>
          </div>

          <div className="submit-button-block">
            <Link href="/contact-us" className="button-primary-link w-button">
              Schedule Audition Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
