import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Mission() {
  const siteUrl = "https://scalesai.online"

  // ✅ Schema.org structured data
  const missionSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Scales AI",
    description:
      "Scales AI builds responsible, bilingual AI that empowers education and business across Africa. Through Chikoro AI and Genesis 2, we make learning accessible and innovation ethical.",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Scales AI",
      alternateName: "Chikoro AI",
      url: siteUrl,
      logo: `${siteUrl}/scales.png`,
      sameAs: [
        "https://www.youtube.com/@scalesai",
        "https://linkedin.com/company/scales-ai",
        "https://twitter.com/scales_ai"
      ],
      foundingDate: "2025-03-17",
      founder: {
        "@type": "Person",
        name: "Ronald Bvirinyangwe",
        jobTitle: "Founder & CEO",
      },
      areaServed: "Africa",
      mission:
        "To build transformative, ethical AI that advances learning and enterprise across Africa.",
    },
  }

  return (
    <section id="mission" className="mission" aria-labelledby="mission-heading">
      {/* ✅ SEO + OpenGraph metadata */}
      <Helmet>
        <title>Scales AI</title>
        <meta
          name="description"
          content="At Scales AI, we build responsible, bilingual AI to make learning accessible and empower businesses across Africa — starting with Chikoro AI."
        />
        <meta
          name="keywords"
          content="Scales AI, Chikoro AI, AI Africa, bilingual AI, ethical AI, responsible AI, Zimbabwe, education technology"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Scales AI" />
        <meta property="og:description" content="Building responsible AI for education and enterprise across Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/about`} />
        <meta property="og:image" content={`${siteUrl}/scales.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Mission | Scales AI" />
        <meta name="twitter:description" content="Empowering Africa through responsible, bilingual AI for education and business." />
        <meta name="twitter:image" content={`${siteUrl}/scales.png`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(missionSchema, null, 2)}
        </script>
      </Helmet>

      <div className="container mission__inner">
        <div className="mission__copy">
          <h2 id="mission-heading">
            At Scales AI, we build transformative AI to make learning accessible and empower businesses.
          </h2>

          <p>
            We believe in a future where artificial intelligence unlocks human potential — starting with how we learn.
            Our flagship platform, <strong>Chikoro AI</strong>, is designed to make education more engaging, personalized,
            and available to every learner, anywhere in the world.
          </p>

          <p>
            But our mission goes beyond education. At Scales AI, we develop intelligent agents and systems that help
            businesses work smarter, automate complex tasks, and innovate faster — all while prioritizing ethical
            design and real-world impact.
          </p>

          <p>
            Through research, product development, and responsible deployment, we’re building AI that serves humanity’s
            long-term well-being — with learning as our foundation and empowerment as our goal.
          </p>
        </div>

        {/* ✅ Mission cards */}
        <div className="mission__cards">
          <a className="big-card tooltip" href="/trust-and-safety">
            <strong>Core Views on Safe AI Development</strong>
            <p>
              Discover our principles guiding the design of safe and aligned AI agents —
              especially for educational and societal applications in Africa.
            </p>
            <span className="tooltiptext">
              How we build aligned and safe AI for education and local deployment
            </span>
          </a>

          <a className="big-card tooltip" href="/trust-and-safety">
            <strong>Responsible Scaling Practices for Africa</strong>
            <p>
              Learn how we balance innovation with local constraints — including infrastructure, regulation,
              and community input — to deploy AI responsibly across the continent.
            </p>
            <span className="tooltiptext">
              Our approach to scaling AI responsibly in African contexts
            </span>
          </a>

          <a className="big-card tooltip" href="/genesis2">
            <strong>Explore Chikoro Genesis 2 Capabilities</strong>
            <p>
              Dive into the technical features of our most advanced model yet —
              including multilingual reasoning, long-context understanding, and safe deployment modes.
            </p>
            <span className="tooltiptext">
              Explore model features like multilingual reasoning, long-context workflows, and education-safe alignment.
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
