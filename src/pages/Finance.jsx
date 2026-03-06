import React from 'react'
import Seo from '../components/Seo' // ✅ Added for SEO

export default function Finance() {
  return (
    <>
      {/* ✅ SEO metadata for this page */}
      <Seo
        title="AI in Financial Services | Scales AI"
        description="Automate school fee analytics, secure payments, and predictive financial insights with Scales AI — bringing smart automation to African education and finance ecosystems."
        pathname="/finance"
        image="/assets/finance-banner.png"
      />

      <section className="solution-page">
        <div className="solution-hero yellow-gradient">
          <div className="container">
            <h1>💰 AI in Financial Services</h1>
            <p>
              Bring intelligence and automation to your financial operations — from school fee analytics to secure payment management, powered by Scales AI.
            </p>
          </div>
          <img src="" alt="AI finance solutions" className="hero-img" />
        </div>

        <div className="container solution-grid">
          <div className="solution-card">
            <h3>📊 Predictive Analytics</h3>
            <p>Forecast cash flows, identify defaulters, and optimize budgeting with AI-driven insights.</p>
          </div>
          <div className="solution-card">
            <h3>💸 Automated Fee Management</h3>
            <p>Integrated with Mirilax-Scales School Management to track and notify parents, generate receipts, and record payments instantly.</p>
          </div>
          <div className="solution-card">
            <h3>🔐 Security & Compliance</h3>
            <p>Built with privacy and data-integrity first — compliant with regional data-protection standards.</p>
          </div>
        </div>

        <div className="cta-banner">
          <h2>Transform your financial operations with AI</h2>
          <a href="/fundraising" className="btn btn--filled white">Partner with Us</a>
        </div>
      </section>
    </>
  )
}
