// src/components/Seo.jsx
import React from "react"
import { Helmet } from "react-helmet-async"

const SITE_NAME = "Scales AI"
const BASE_URL = "https://scalesai.online"
const DEFAULT_IMAGE = "/assets/scales.png"
const DEFAULT_DESCRIPTION =
  "Scales AI builds responsible, Africa-first AI systems including Chikoro AI — a bilingual, curriculum-aligned education platform transforming learning across the continent."

export default function Seo({
  title,
  description,
  image,
  pathname,
  schema,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const pageDescription = description || DEFAULT_DESCRIPTION
  const pageUrl = `${BASE_URL}${pathname || ""}`
  const pageImage = image || DEFAULT_IMAGE

  // --- JSON-LD structured data ---
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scales AI",
    url: BASE_URL,
    logo: `${BASE_URL}/assets/scales-logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/scales-ai/",
      "https://www.twitter.com/scalesai",
      "https://www.youtube.com/@scalesAI",
    ],
    founder: {
      "@type": "Person",
      name: "Ronald Bvirinyangwe",
      jobTitle: "Founder & CEO",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "ceo@scalesai.online",
        contactType: "sales",
        areaServed: "Africa",
        availableLanguage: ["en", "sn"],
      },
      {
        "@type": "ContactPoint",
        email: "support@chikoro-ai.com",
        contactType: "customer support",
      },
    ],
    ...(schema || {}),
  }

  return (
    <Helmet>
      {/* --- Basic meta --- */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* --- OpenGraph --- */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content="@ScalesAI_" />

      {/* --- Favicon & theme --- */}
      <link rel="icon" href="/scales.png" />
      <meta name="theme-color" content="#2B0A3D" />

      {/* --- JSON-LD Schema --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  )
}
