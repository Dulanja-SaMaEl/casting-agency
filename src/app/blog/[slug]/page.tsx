import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/agencyData";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <Navbar variant="light" />

      <section className="section blog-single-section">
        <div className="w-layout-blockcontainer container-small w-container">
          <div className="blog-single-main-block">
            <div className="blog-ipdate-info-block">
              <div className="blog-date-text">{post.date}</div>
              <div className="blog-des">-</div>
              <div className="blog-tag">{post.category}</div>
            </div>
            <h1 className="blog-name">{post.title}</h1>

            <img
              src={post.image}
              alt={post.title}
              className="portfolio-single-image"
            />

            <div className="blog-richtext-one w-richtext">
              <p>
                <strong>By {post.author}</strong> — {post.readTime}
              </p>
              {post.content.map((para, i) => (
                <p key={i} style={{ marginTop: "20px" }}>
                  {para}
                </p>
              ))}
              <blockquote style={{ marginTop: "30px", marginBottom: "30px" }}>
                {post.excerpt}
              </blockquote>
            </div>

            <div className="blog-extra-image-list-wrapper">
              <div className="blog-extra-image-list">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="w-inline-block"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="blog-lightbox-image"
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
