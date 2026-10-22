import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/agencyData";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServiceSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      <Navbar variant="light" />

      <section className="section service-single-section">
        <div className="w-layout-blockcontainer container-small w-container">
          <div className="service-single-main-block">
            <h1 className="service-name-single">{service.title}</h1>
            <p className="service-summary">{service.shortDesc}</p>

            <img
              src={service.image}
              alt={service.title}
              className="service-single-image"
            />

            <div className="service-rictext-one w-richtext">
              <h2>Overview &amp; Casting Methodology</h2>
              <p>{service.fullDesc}</p>
              <h3>Key Deliverables</h3>
              <ul>
                {service.deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <blockquote>
                Every role—from lead protagonist to atmospheric ensemble—shapes
                the emotional gravity of the frame.
              </blockquote>
            </div>

            <div className="service-single-more-image-list-wrapper">
              <div className="service-single-more-image-list">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/service/${rel.slug}`}
                    className="w-inline-block"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="service-lightbox-link-image"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="submit-button-block" style={{ marginTop: "45px" }}>
              <Link href="/contact-us" className="button-primary-link w-button">
                Book This Casting Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
