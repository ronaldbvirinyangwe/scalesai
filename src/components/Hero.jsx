import React from 'react'
import { Helmet } from 'react-helmet-async'
import scalessImg from '../assets/scaless.png'

export default function Hero() {
  const siteUrl = "https://scalesai.online"

  // ✅ Structured data for SEO
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TechnologyOrganization",
    name: "Scales AI",
    alternateName: "Chikoro AI",
    url: siteUrl,
    logo: `${siteUrl}/scales.png`,
    description:
      "Scales AI builds bilingual, curriculum-aligned artificial intelligence solutions for Africa — including Chikoro AI and Genesis 2, driving responsible innovation in education and enterprise.",
    sameAs: [
      "https://www.youtube.com/@scalesai",
      "https://linkedin.com/company/scales-ai",
      "https://twitter.com/scales_ai"
    ],
    foundingDate: "2025-03-19",
    founder: {
      "@type": "Person",
      name: "Ronald Bvirinyangwe",
      jobTitle: "Founder & CEO",
      url: "https://scalesai.online/about"
    },
    areaServed: "Africa",
    slogan: "Driving AI innovation and growth across Africa — safely and responsibly"
  }

  return (
    <section className="hero" role="banner" aria-label="Scales AI homepage hero">
      {/* ✅ SEO metadata */}
      <Helmet>
        <title>Scales AI | Driving AI Innovation Across Africa</title>
        <meta
          name="description"
          content="Scales AI builds responsible, bilingual AI solutions such as Chikoro AI and Genesis 2 to transform education and enterprise across Africa."
        />
        <meta name="keywords" content="Scales AI, Chikoro AI, Genesis 2, African AI, bilingual AI, education technology, Zimbabwe, AI API" />
        <meta name="author" content="Scales AI" />

        {/* ✅ Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:title" content="Scales AI | Driving AI Innovation Across Africa" />
        <meta property="og:description" content="Building bilingual, curriculum-aligned AI for education and enterprise across Africa — safely and responsibly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/scales.png`} />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scales AI | Driving AI Innovation Across Africa" />
        <meta name="twitter:description" content="Scales AI empowers Africa through safe, bilingual AI — including Chikoro AI and Genesis 2." />
        <meta name="twitter:image" content={`${siteUrl}/scales.png`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(orgSchema, null, 2)}
        </script>
      </Helmet>

      {/* ✅ Hero Content */}
      <div className="container hero__grid">
        <div className="hero__content">
          <h1>
            Driving <span className="uline">AI innovation</span> and{' '}
            <span className="uline">growth</span> across Africa — safely and responsibly
          </h1>

          <div className="hero__cards">
            <article className="card">
              <header>Chikoro AI</header>
              <h2>Meet Genesis 2</h2>
              <p>
                Chikoro Genesis 2 is here — our most advanced model yet, built to power the next
                chapter of AI innovation across Africa.
              </p>
              <a className="btn btn--filled" href="https://chikoro-ai.com">
                Talk to Genesis
              </a>
            </article>

            <article className="card">
              <header>API</header>
              <h2>Build with Genesis Code</h2>
              <p>
                Create AI-powered applications and custom experiences using Genesis with our
                powerful API. Integrate intelligence into your tools and platforms with ease.
              </p>
              <a
                href="/api"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Learn more
              </a>
            </article>
          </div>

          {/* 🟢 Fundraising Highlight Section */}
          <div className="fundraising-banner">
            <h3>🚀 We’re Raising Funds to Scale African AI Innovation</h3>
            <p>
              Scales AI is currently raising funds to expand <strong>Chikoro AI</strong> and our
              ecosystem — empowering African education and innovation through responsible AI.
            </p>
            <div className="fundraising-actions">
              <a href="/fundraising" className="btn btn--filled white">
                Learn More
              </a>
              <a
                href="mailto:founder@scalesai.online?subject=Funding Inquiry - Scales AI"
                className="btn btn--ghost white"
              >
                Contact the Founder
              </a>
            </div>
          </div>
        </div>

        <figure className="hero__art">
          <img src={scalessImg} alt="Scales AI abstract illustration" />
        </figure>
      </div>
    </section>
  )
}
