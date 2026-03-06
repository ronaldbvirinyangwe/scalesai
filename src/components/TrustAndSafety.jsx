import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function TrustAndSafety() {
  const siteUrl = "https://scalesai.online"

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Trust and Safety | Scales AI",
    url: `${siteUrl}/trust-and-safety`,
    description:
      "Scales AI ensures safety, alignment, and privacy across all AI systems, including Chikoro Genesis 2. We emphasize adversarial robustness, compliance, and user protection.",
    mainEntity: {
      "@type": "Organization",
      name: "Scales AI",
      url: siteUrl,
      logo: `${siteUrl}/scales.png`,
      sameAs: [
        "https://www.linkedin.com/company/scales-ai",
        "https://twitter.com/scales_ai",
        "https://www.youtube.com/@scalesai"
      ],
    },
    mainEntityOfPage: {
      "@type": "CreativeWork",
      name: "Chikoro Genesis 2 Safety Framework",
      author: {
        "@type": "Organization",
        name: "Scales AI",
      },
      about: [
        "Adversarial robustness",
        "Policy compliance",
        "Privacy and data protection",
        "Long-context safety"
      ],
    },
  }

  return (
    <section id="trustsafety" className="trust-safety" aria-labelledby="trust-safety-heading">
      {/* ✅ SEO metadata */}
      <Helmet>
        <title>Trust & Safety | Scales AI</title>
        <meta
          name="description"
          content="Learn how Scales AI builds safe, aligned, and privacy-preserving AI systems. Explore our commitment to responsible AI through audits, compliance, and continuous monitoring."
        />
        <meta
          name="keywords"
          content="Scales AI, Trust and Safety, Responsible AI, Safe AI, Chikoro Genesis 2, AI compliance, ethical AI Africa"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Trust & Safety | Scales AI" />
        <meta
          property="og:description"
          content="Scales AI ensures safety, robustness, and privacy in Chikoro Genesis 2 and all deployed AI systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/trust-and-safety`} />
        <meta property="og:image" content={`${siteUrl}/scales.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trust & Safety | Scales AI" />
        <meta
          name="twitter:description"
          content="Responsible AI, tested for safety, alignment, and compliance — learn about Scales AI’s approach."
        />
        <meta name="twitter:image" content={`${siteUrl}/scales.png`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h2 id="trust-safety-heading">Trust &amp; Safety</h2>
        <p>
          At Scales AI, we prioritize safety and alignment in every stage of
          model development. Chikoro Genesis 2 has undergone rigorous
          evaluations to ensure responsible and reliable deployment.
        </p>

        <ul className="safety-list">
          <li>
            <strong>Adversarial robustness:</strong> Stress-tested with
            red-teaming prompts across sensitive domains to mitigate harmful
            behavior and hallucinations.
          </li>
          <li>
            <strong>Long-context safety:</strong> Audited model behavior across
            lengthy, ambiguous conversations to ensure continuity, coherence,
            and guardrails.
          </li>
          <li>
            <strong>Policy compliance:</strong> Built-in safety classifiers and
            intent filters for handling regulated domains such as healthcare,
            finance, and education.
          </li>
          <li>
            <strong>User privacy:</strong> Inputs and outputs are never stored
            unless explicitly logged by the developer via our API. Full support
            for secure session-based memory.
          </li>
        </ul>

        <p>
          We continuously fine-tune and monitor Genesis 2 for emerging risks.
          Learn more in our{' '}
          <a href="/featured/chikoro-safety-report">comprehensive safety report</a>.
        </p>
      </div>
    </section>
  )
}
