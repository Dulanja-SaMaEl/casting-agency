import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <div>
      <Navbar variant="dark" />

      <section className="section breadcrumb-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumbtwo-title-block">
            <h1 className="breadcrumb-title">terms &amp; conditions</h1>
          </div>
        </div>
      </section>

      <section className="section personal-info-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="personal-info-main-block">
            <div className="personal-info">
              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">Casting &amp; Talent Services</h2>
                </div>
                <p>
                  Outlines the casting direction, talent scouting, callback
                  studio sessions, and deal memo services provided by Reflux
                  Casting Studio across film, runway, commercial, and voiceover
                  productions.
                </p>
              </div>

              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">Booking &amp; Payment Terms</h2>
                </div>
                <div className="main-personal-info">
                  <ul role="list" className="personal-info-list">
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Casting Retainer: 30–50% upfront upon greenlight of
                        breakdown.
                      </div>
                    </li>
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Talent session fees and usage buyouts due per SAG-AFTRA
                        or applicable union/non-union schedules.
                      </div>
                    </li>
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Late payments may attract statutory interest or delay
                        usage clearance release.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">Audition Scope &amp; Callbacks</h2>
                </div>
                <div className="main-personal-info">
                  <ul role="list" className="personal-info-list">
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Includes initial self-tape curation, director selects,
                        and two live or remote chemistry callback rounds.
                      </div>
                    </li>
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Additional studio days or re-briefed character specs are
                        billed at standard studio day rates.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">
                    Usage Rights, Buyouts &amp; Biometric Protection
                  </h2>
                </div>
                <div className="main-personal-info">
                  <ul role="list" className="personal-info-list">
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Territorial broadcast, print, and digital usage rights
                        transfer upon full settlement of talent buyouts.
                      </div>
                    </li>
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        No performer likeness, voice stem, or 3D scan may be
                        used for AI training or synthetic replication without an
                        explicitly executed Biometric Rider.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">
                    Confidentiality &amp; Script Protection
                  </h2>
                </div>
                <p>
                  Both parties agree to safeguard unreleased screenplays,
                  embargoed couture collections, and audition tapes under strict
                  NDA and GDPR/CCPA data protection protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
