import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SafetyReport() {
  const siteUrl = 'https://scalesai.online'

  const schema = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: "Chikoro Safety Report v1.0",
    datePublished: "2025-08-03",
    dateModified: "2025-08-03",
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
      "The Chikoro Safety Report v1.0 outlines testing, risk mitigation, and safety mechanisms within Genesis 2 and Exodus — addressing alignment, privacy, and compliance for African educational AI.",
    url: `${siteUrl}/featured/chikoro-safety-report`,
    articleSection: "Trust & Safety",
    keywords: [
      "Chikoro AI Safety Report",
      "AI safety Africa",
      "Scales AI",
      "Genesis 2",
      "Exodus model",
      "responsible AI",
      "AI transparency",
      "education safety AI"
    ],
    image: `${siteUrl}/og/chikoro-safety.jpg`, // optional OG image
  }

  return (
    <section className="article-page">
      {/* ✅ SEO + Structured Metadata */}
      <Helmet>
        <title>Chikoro Safety Report v1.0 | Scales AI</title>
        <meta
          name="description"
          content="The Chikoro Safety Report v1.0 details the principles and risk mitigation strategies behind Genesis 2 and Exodus — ensuring safe AI for education and research in Africa."
        />
        <meta
          name="keywords"
          content="Chikoro Safety Report, Scales AI, AI safety, responsible AI Africa, Genesis 2, Exodus, AI transparency, data ethics"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Chikoro Safety Report v1.0 | Scales AI" />
        <meta
          property="og:description"
          content="Our first public safety report covers testing, transparency, and alignment for AI education models across Africa."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/featured/chikoro-safety-report`} />
        <meta property="og:image" content={`${siteUrl}/og/chikoro-safety.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chikoro Safety Report v1.0 | Scales AI" />
        <meta
          name="twitter:description"
          content="Explore Chikoro AI’s commitment to safety, privacy, and compliance in education — detailed in our first public safety report."
        />
        <meta name="twitter:image" content={`${siteUrl}/og/chikoro-safety.jpg`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h1>Chikoro Safety Report v1.0</h1>
        <p className="meta">Trust &amp; Safety • Aug 3, 2025</p>

        <p>
          Our first public safety report outlines the principles, testing, and risk
          mitigation strategies behind <strong>Chikoro Genesis 2</strong> and <strong>Exodus</strong>.
          The report covers adversarial prompt resistance, privacy safeguards, and policy
          compliance standards adapted for educational and agentic use in Africa.
        </p>

        <ul>
          <li>🔍 Red-teaming results across sensitive domains</li>
          <li>📊 Transparency on fine-tuning datasets</li>
          <li>🧩 Deployment sandboxing for agents</li>
        </ul>

        <p>
          <a href="#" className="btn btn--ghost">
            Read the full report →
          </a>
        </p>
      </div>
    </section>
  )
}
