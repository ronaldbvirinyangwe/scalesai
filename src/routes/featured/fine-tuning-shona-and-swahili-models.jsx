import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function FineTuningLanguages() {
  const siteUrl = 'https://scalesai.online'

  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Fine-tuning Shona & Swahili Models",
    datePublished: "2025-05-27",
    dateModified: "2025-05-27",
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
      "Scales AI releases fine-tuned language models for Shona and Swahili — advancing translation, summarization, and question-answering capabilities for African education and business.",
    url: `${siteUrl}/featured/fine-tuning-shona-and-swahili-models`,
    articleSection: "Language AI",
    keywords: [
      "Shona AI model",
      "Swahili AI model",
      "African languages",
      "multilingual AI",
      "Chikoro AI",
      "Scales AI",
      "fine-tuning LLMs",
      "translation models Africa"
    ],
    image: `${siteUrl}/og/fine-tuning-shona-swahili.jpg`, // optional OG image
  }

  return (
    <section className="article-page">
      {/* ✅ SEO + Metadata */}
      <Helmet>
        <title>Fine-tuning Shona & Swahili Models | Scales AI</title>
        <meta
          name="description"
          content="Scales AI introduces fine-tuned Shona and Swahili language models for translation, summarization, and question-answering — advancing multilingual AI for Africa."
        />
        <meta
          name="keywords"
          content="Shona model, Swahili model, multilingual AI, Chikoro AI, Scales AI, fine-tuned models, translation AI, Africa AI"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Fine-tuning Shona & Swahili Models | Scales AI" />
        <meta
          property="og:description"
          content="New fine-tuned checkpoints for Shona and Swahili enhance multilingual AI for translation, summarization, and education."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${siteUrl}/featured/fine-tuning-shona-and-swahili-models`}
        />
        <meta property="og:image" content={`${siteUrl}/og/fine-tuning-shona-swahili.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fine-tuning Shona & Swahili Models | Scales AI" />
        <meta
          name="twitter:description"
          content="Scales AI fine-tunes Shona and Swahili models for inclusive multilingual AI across Africa."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/og/fine-tuning-shona-swahili.jpg`}
        />
        <meta name="twitter:creator" content="@scales_ai" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      </Helmet>

      <div className="container">
        <h1>Fine-tuning Shona &amp; Swahili Models</h1>
        <p className="meta">Language AI • May 27, 2025</p>

        <p>
          As part of our mission to make AI inclusive, we’ve released new fine-tuned
          checkpoints for <strong>Shona</strong> and <strong>Swahili</strong> — covering
          translation, summarization, and question-answering.
        </p>

        <p>
          Built using curated Wikimedia, textbook, and government datasets, these models
          reduce bias, increase fluency, and support multilingual tutoring use cases
          across the continent.
        </p>

        <p>
          Developers can access models via API or fine-tune further using our open pipeline.
        </p>
      </div>
    </section>
  )
}
