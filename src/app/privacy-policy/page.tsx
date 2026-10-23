import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar variant="dark" />

      <section className="section breadcrumb-two-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumbtwo-title-block">
            <h1 className="breadcrumb-title">privacy policy</h1>
          </div>
        </div>
      </section>

      <section className="section personal-info-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="personal-info-main-block">
            <div className="personal-info">
              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">
                    1. Talent &amp; Client Data We Collect
                  </h2>
                </div>
                <p>
                  We collect information submitted through casting inquiries,
                  digital comp cards, self-tapes, agency representations, and
                  production briefs—including contact details, union status,
                  sizing/vocal specs, and audition recordings.
                </p>
              </div>

              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">
                    2. How Audition Tapes &amp; Comp Cards Are Used
                  </h2>
                </div>
                <div className="main-personal-info">
                  <ul role="list" className="personal-info-list">
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Shared exclusively via encrypted, password-protected
                        casting links with accredited directors, producers, and
                        brand clients for the specific project auditioned.
                      </div>
                    </li>
                    <li className="personal-info-item">
                      <div className="personal-info-item-text">
                        Never sold, licensed to third-party data brokers, or
                        used for generative AI training.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="personal-title-block">
                <div className="inner-section-title">
                  <h2 className="personal-title">
                    3. Data Retention &amp; Deletion Rights
                  </h2>
                </div>
                <p>
                  Talent and clients may request immediate access, correction,
                  or permanent deletion of their audition archives or personal
                  data at any time by contacting privacy@refluxstudio.com.
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
