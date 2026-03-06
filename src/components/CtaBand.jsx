import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async' // for optional structured data

export default function CtaBand() {
  // Optional structured data so search engines understand the CTA context
  const ctaSchema = {
    "@context": "https://schema.org",
    "@type": "CallToAction",
    name: "Join Scales AI",
    description: "Connect with the Scales AI team to explore safe and responsible AI deployment across Africa.",
    url: "https://scalesai.online/sales",
    actionStatus: "PotentialActionStatus",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://scalesai.online/sales",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }

  return (
    <section className="cta-band" role="region" aria-labelledby="cta-title">
      {/* Optional semantic structured data for SEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(ctaSchema, null, 2)}
        </script>
      </Helmet>

      <div className="container cta-band__inner">
        <h2 id="cta-title">Want to help us build the future of safe AI?</h2>
        <div className="cta-buttons">
          <Link to="/sales" className="btn btn--ghost">
            Contact our sales
          </Link>
        </div>
      </div>
    </section>
  )
}
