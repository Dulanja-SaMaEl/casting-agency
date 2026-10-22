import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar variant="light" />
      <div className="utility-page-wrap">
        <div className="utility-page-content">
          <h1 className="_404-title">404</h1>
          <h2 className="_404-not-found-title">Page Not Found</h2>
          <p className="_404-description">
            The casting call or page you are looking for doesn&apos;t exist or
            has been moved.
          </p>
          <div className="primary-button-style">
            <Link href="/" className="button-primary-link w-button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
