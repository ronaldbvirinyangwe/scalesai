import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function EduTechAfrica() {
  const siteUrl = 'https://scalesai.online'

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Chikoro at EduTech Africa 2025",
    datePublished: "2025-06-13",
    dateModified: "2025-06-13",
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
      "Chikoro AI showcased its bilingual AI tutoring and school automation tools at EduTech Africa 2025 — highlighting real classroom use of Genesis and Exodus models.",
    url: `${siteUrl}/featured/chikoro-at-edutech-africa-2025`,
    articleSection: "Events",
    keywords: [
      "EduTech Africa 2025",
      "Chikoro AI",
      "Scales AI",
      "education technology Africa",
      "AI in classrooms",
      "Genesis model",
      "Exodus model",
    ],
    image: `${siteUrl}/og/edutech-africa.jpg`, // optional OG banner
  }

  return (
    <section className="article-page">
      {/* ✅ SEO + Meta */}
      <Helmet>
        <title>Chikoro at EduTech Africa 2025 | Scales AI</title>
        <meta
          name="description"
          content="Chikoro AI showcased its bilingual tutoring and AI-powered classroom tools at EduTech Africa 2025, inspiring collaboration among teachers and innovators."
        />
        <meta
          name="keywords"
          content="Chikoro AI, EduTech Africa 2025, Scales AI, education AI, Genesis model, Exodus model, AI in schools, African innovation"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Chikoro at EduTech Africa 2025 | Scales AI" />
        <meta
          property="og:description"
          content="Chikoro AI joined 4,000 innovators at EduTech Africa 2025 to showcase bilingual AI for African classrooms."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/featured/chikoro-at-edutech-africa-2025`} />
        <meta property="og:image" content={`${siteUrl}/og/edutech-africa.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chikoro at EduTech Africa 2025 | Scales AI" />
        <meta
          name="twitter:description"
          content="Chikoro AI demonstrated AI models Genesis and Exodus in real classrooms at EduTech Africa 2025."
        />
        <meta name="twitter:image" content={`${siteUrl}/og/edutech-africa.jpg`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h1>Chikoro at EduTech Africa 2025</h1>
        <p className="meta">Events • Jun 13, 2025</p>

        <p>
          <strong>Chikoro AI</strong> joined over 4,000 innovators at <em>EduTech Africa 2025</em> 
          to showcase how large language models can reshape classrooms, curriculum delivery, and
          self-paced learning in African schools.
        </p>

        <ul>
          <li>✨ <strong>Genesis</strong> answering STEM exam questions</li>
          <li>⚡ <strong>Exodus</strong> running on low-cost Chromebooks</li>
          <li>🤖 Agentic tools for school admins and teachers</li>
        </ul>

        <p>
          Thank you to all educators who gave feedback — your insights continue to guide our
          mission to make learning more accessible, adaptive, and locally relevant.
        </p>

        <p>
          <em>See more highlights on our official channels:</em>{' '}
          <a href="https://linkedin.com/company/scales-ai" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="https://www.youtube.com/@scalesai" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          .
        </p>
      </div>
    </section>
  )
}
