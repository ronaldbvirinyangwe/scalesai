import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function ExodusArticle() {
  const siteUrl = 'https://scalesai.online'

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Exodus: Lightweight, Fast, Local",
    datePublished: "2025-07-02",
    dateModified: "2025-07-02",
    author: {
      "@type": "Organization",
      name: "Scales AI",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Scales AI",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/scales.png`,
      },
    },
    description:
      "Exodus is Chikoro AI’s compact, high-speed model for on-device learning and offline inference — engineered for Africa’s bandwidth and infrastructure realities.",
    url: `${siteUrl}/featured/exodus-lightweight-fast-local`,
    articleSection: "Deployment",
    keywords: [
      "Chikoro Exodus",
      "Scales AI",
      "edge AI Africa",
      "offline AI",
      "4-bit quantized model",
      "local deployment",
      "low-latency inference",
      "education technology Africa"
    ],
    image: `${siteUrl}/og/exodus-fast-local.jpg`, // optional OG image
  }

  return (
    <section className="article-page">
      {/* ✅ SEO + Structured Metadata */}
      <Helmet>
        <title>Exodus: Lightweight, Fast, Local | Scales AI</title>
        <meta
          name="description"
          content="Discover Chikoro Exodus — the lightweight AI model optimized for local and offline deployment, enabling low-latency learning on mobile and edge devices."
        />
        <meta
          name="keywords"
          content="Chikoro Exodus, Scales AI, offline AI, local inference, edge AI, 4-bit quantized transformer, education AI, Africa technology"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Exodus: Lightweight, Fast, Local | Scales AI" />
        <meta
          property="og:description"
          content="Chikoro Exodus is a compact, fast AI model enabling offline learning and edge deployment for African education and enterprise."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/featured/exodus-lightweight-fast-local`} />
        <meta property="og:image" content={`${siteUrl}/og/exodus-fast-local.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exodus: Lightweight, Fast, Local | Scales AI" />
        <meta
          name="twitter:description"
          content="Exodus brings fast, low-latency, offline AI to mobile and classroom devices — built for Africa’s connectivity realities."
        />
        <meta name="twitter:image" content={`${siteUrl}/og/exodus-fast-local.jpg`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h1>Exodus: Lightweight, Fast, Local</h1>
        <p className="meta">Deployment • Jul 2, 2025</p>

        <p>
          <strong>Chikoro Exodus</strong> is our compact, efficient model for local deployment.
          It powers on-device learning, offline agent tasks, and mobile-first inference — all
          optimized for Africa’s bandwidth and infrastructure constraints.
        </p>

        <p>
          With Exodus, students and businesses can run AI locally on smartphones,
          Raspberry Pi, or edge devices, with no cloud connection required.
        </p>

        <ul>
          <li>⚙️ Quantized 4-bit transformer core</li>
          <li>⚡ Token streaming with 50ms latency</li>
          <li>🧠 Context support up to 32K</li>
        </ul>
      </div>
    </section>
  )
}
