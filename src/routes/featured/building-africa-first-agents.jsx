import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AfricaFirstAgents() {
  const siteUrl = "https://scalesai.online"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Building Africa-first Agents",
    datePublished: "2025-07-18",
    dateModified: "2025-07-18",
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
      "Chikoro AI’s research into Africa-first agents focuses on multilingual reasoning, contextual grounding, and ethical design — creating AI systems built for Africa’s realities.",
    url: `${siteUrl}/featured/building-africa-first-agents`,
    mainEntityOfPage: `${siteUrl}/featured/building-africa-first-agents`,
    articleSection: "Research",
    keywords: [
      "Africa-first AI",
      "Chikoro AI",
      "AI agents Africa",
      "multilingual AI",
      "Shona AI",
      "Scales AI research",
      "ethical AI Africa"
    ],
    image: `${siteUrl}/og/africa-agents.jpg`, // optional OG banner image if available
  }

  return (
    <section className="article-page">
      {/* ✅ SEO + Meta */}
      <Helmet>
        <title>Building Africa-first Agents | Scales AI</title>
        <meta
          name="description"
          content="Chikoro AI is pioneering Africa-first agents that understand local languages, respect regional contexts, and operate reliably in African environments."
        />
        <meta
          name="keywords"
          content="Africa-first AI, multilingual agents, Shona AI, Scales AI, Chikoro AI, African innovation, responsible AI"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Building Africa-first Agents | Scales AI" />
        <meta
          property="og:description"
          content="Chikoro AI is building multilingual, context-aware agents rooted in Africa’s strengths, values, and voices."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/featured/building-africa-first-agents`} />
        <meta property="og:image" content={`${siteUrl}/og/africa-agents.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Building Africa-first Agents | Scales AI" />
        <meta
          name="twitter:description"
          content="Discover how Scales AI and Chikoro AI are developing multilingual, ethical, and context-aware agents designed for Africa."
        />
        <meta name="twitter:image" content={`${siteUrl}/og/africa-agents.jpg`} />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h1>Building Africa-first Agents</h1>
        <p className="meta">Research • Jul 18, 2025</p>

        <p>
          At <strong>Chikoro AI</strong>, we believe that AI development in Africa should not be an afterthought—it should be a frontier of innovation.
          Building truly Africa-first agents means designing systems that understand local languages, respect regional contexts,
          and operate reliably in the environments where they are most needed.
        </p>

        <p>
          Our research team has been working to train and deploy agentic models that respond naturally to the needs of learners,
          educators, and small businesses across the continent. Whether it’s offering tutoring in Shona, guiding local entrepreneurs
          through inventory planning, or automating processes in rural education settings, our AI agents are built to serve where
          global models often fall short.
        </p>

        <h3>Core principles of our agent design</h3>
        <ul>
          <li>
            <strong>Multilingual reasoning:</strong> Our models support tasks in Shona, Zulu, and Swahili — enabling students and users
            to interact with AI in languages they are most comfortable using.
          </li>
          <li>
            <strong>Contextual grounding:</strong> We fine-tune agents on region-specific curriculum data, public policy documents,
            and infrastructure norms to ensure relevant outputs across diverse African contexts.
          </li>
          <li>
            <strong>Responsibility by design:</strong> Agents are equipped with intent-aware filters, ethical task planning,
            and built-in cultural sensitivity to minimize misuse and misunderstanding.
          </li>
        </ul>

        <p>
          These Africa-first agents are not limited to education. We're actively prototyping agent-based tools for agriculture forecasting,
          local government digitalization, and healthcare triage in under-resourced clinics. By grounding our agents in local realities,
          we aim to create AI systems that don’t just work in Africa—they thrive here.
        </p>

        <p>
          As we continue research and development, we invite collaboration with African educators, linguists, developers, and policymakers.
          Together, we can build a future where AI is not just imported, but rooted in Africa’s strengths, values, and voices.
        </p>
      </div>
    </section>
  )
}
