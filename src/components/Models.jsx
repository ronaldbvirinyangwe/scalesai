import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Models() {
  const siteUrl = "https://scalesai.online"

  const models = [
    {
      name: 'Genesis 2',
      path: '/genesis2',
      summary:
        'Our most advanced model to date, built for tutoring, agentic workflows, and long-context reasoning.',
      highlights: [
        'Supports multilingual tasks (e.g., Shona, Swahili)',
        'Handles 100K+ token inputs',
        'Optimized for education and research',
        'Improved memory handling and chain-of-thought reasoning',
      ],
    },
    {
      name: 'Exodus',
      path: '/exodus',
      summary:
        'A lightweight, high-speed model designed for efficient local deployment and offline use cases.',
      highlights: [
        'Runs on edge devices (laptops, mobiles)',
        'Ideal for low-connectivity regions',
        'Fast inference with small memory footprint',
        'Tailored for student agents and local AI tutors',
      ],
    },
  ]

  // ✅ Structured data for Schema.org (Genesis 2 and Exodus)
  const modelsSchema = {
    "@context": "https://schema.org",
    "@graph": models.map(m => ({
      "@type": "Product",
      name: `Chikoro ${m.name}`,
      url: `${siteUrl}${m.path}`,
      brand: {
        "@type": "Organization",
        name: "Scales AI",
        url: siteUrl,
      },
      description: m.summary,
      category: "Artificial Intelligence Model",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "0",
        availability: "https://schema.org/InStock",
      },
      additionalProperty: m.highlights.map(h => ({
        "@type": "PropertyValue",
        name: "Feature",
        value: h,
      })),
    })),
  }

  return (
    <section id="models" className="models" aria-labelledby="models-heading">
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Chikoro Genesis 2 & Exodus | Scales AI Models</title>
        <meta
          name="description"
          content="Explore Scales AI’s flagship models — Chikoro Genesis 2 and Exodus — built for tutoring, research, and local AI deployment across Africa."
        />
        <meta
          name="keywords"
          content="Scales AI, Chikoro AI, Genesis 2, Exodus, AI models Africa, education technology, offline AI, bilingual AI"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Chikoro Genesis 2 & Exodus | Scales AI Models" />
        <meta
          property="og:description"
          content="Discover Genesis 2 for reasoning and Exodus for local deployment — the core of Scales AI’s bilingual education technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/models`} />
        <meta property="og:image" content={`${siteUrl}/scales.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chikoro Genesis 2 & Exodus | Scales AI Models" />
        <meta
          name="twitter:description"
          content="Genesis 2 and Exodus — two AI models built for Africa’s education, research, and low-connectivity environments."
        />
        <meta name="twitter:image" content={`${siteUrl}/scales.png`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(modelsSchema, null, 2)}
        </script>
      </Helmet>

      {/* ✅ Models section content */}
      <div className="container models__inner">
        <div className="models__copy">
          <h2 id="models-heading">
            Chikoro Genesis 2<br />and Exodus
          </h2>
          <p>
            Chikoro’s core models unlock powerful AI workflows tailored for Africa — from
            intelligent tutoring to research-grade agents, online and offline.
          </p>
        </div>

        <div className="model-cards" role="list">
          {models.map(({ name, path, summary, highlights }) => (
            <Link
              key={name}
              to={path}
              className="model-card model-card--detailed"
              role="listitem"
              aria-label={`Learn more about ${name}`}
            >
              <div>
                <small>Model details</small>
                <span className="model-card__title">{name}</span>
                <p className="model-card__summary">{summary}</p>
                <ul className="model-card__list">
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
