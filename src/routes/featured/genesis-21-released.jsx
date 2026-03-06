import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Genesis21Released() {
  const siteUrl = 'https://scalesai.online'

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Chikoro Genesis 2.1 Released",
    datePublished: "2025-08-05",
    dateModified: "2025-08-05",
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
      "Chikoro Genesis 2.1 brings major improvements to hybrid reasoning, deterministic coding, and long-context safety — powering next-generation educational and research AI for Africa.",
    url: `${siteUrl}/featured/genesis-21-released`,
    articleSection: "Model Update",
    keywords: [
      "Genesis 2.1",
      "Chikoro AI",
      "Scales AI",
      "LLM Africa",
      "educational AI",
      "hybrid reasoning",
      "agentic workflows",
      "safe AI models"
    ],
    image: `${siteUrl}/og/genesis-21-release.jpg`, // optional OG/social image
  }

  return (
    <section className="article-page">
      {/* ✅ SEO + Metadata */}
      <Helmet>
        <title>Chikoro Genesis 2.1 Released | Scales AI</title>
        <meta
          name="description"
          content="Chikoro Genesis 2.1 delivers enhanced reasoning, stability, and safety for Africa’s educational and research AI — setting a new benchmark for agentic workflows."
        />
        <meta
          name="keywords"
          content="Genesis 2.1, Chikoro AI, Scales AI, African AI, LLM, reasoning models, safe AI, Genesis release"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Chikoro Genesis 2.1 Released | Scales AI" />
        <meta
          property="og:description"
          content="The latest update to Chikoro Genesis introduces advanced hybrid reasoning and safety layers for more reliable agentic AI systems."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/featured/genesis-21-released`} />
        <meta property="og:image" content={`${siteUrl}/og/genesis-21-release.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chikoro Genesis 2.1 Released | Scales AI" />
        <meta
          name="twitter:description"
          content="Chikoro Genesis 2.1: advancing reasoning, reliability, and safety in educational and research AI."
        />
        <meta name="twitter:image" content={`${siteUrl}/og/genesis-21-release.jpg`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h1>Chikoro Genesis 2.1 Released</h1>
        <p className="meta">Model Update • Aug 5, 2025</p>

        <p>
          <strong>Chikoro Genesis 2.1</strong> introduces significant advancements in hybrid reasoning,
          precision coding, and long-context reliability. With improvements to memory
          handling and fine-tuned safety layers, Genesis 2.1 handles deeper agentic
          workflows, enabling developers and researchers to deploy more confident,
          autonomous systems across education, research, and enterprise domains in Africa.
        </p>

        <ul>
          <li>Reduced hallucinations in extended prompts (&gt;100K tokens)</li>
          <li>More deterministic reasoning chains</li>
          <li>Improved performance on SWE-Bench and TAU-bench tasks</li>
        </ul>

        <p>
          <a href="#" className="btn btn--ghost">
            Read the full changelog →
          </a>
        </p>
      </div>
    </section>
  )
}
