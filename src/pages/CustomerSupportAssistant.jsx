import React from 'react'
import Seo from '../components/Seo' // ✅ Added for SEO

export default function CustomerSupportAssistant() {
  return (
    <>
      {/* ✅ SEO metadata for this page */}
      <Seo
        title="AI Customer Support Assistants | Scales AI"
        description="Deliver 24/7 multilingual customer support with Scales AI — powered by Genesis 2 agents for empathetic, real-time, and data-driven service in Africa."
        pathname="/customer-support-assistant"
        image="/assets/support-banner.png"
      />

      <section className="solution-page">
        <div className="solution-hero green-gradient">
          <div className="container">
            <h1>💬 AI Customer Support Assistants</h1>
            <p>
              Scales AI delivers AI agents that provide 24/7 multilingual support — improving response times, empathy, and customer experience.
            </p>
          </div>
          <img src="" alt="AI support assistant" className="hero-img" />
        </div>

        <div className="container solution-grid">
          <div className="solution-card">
            <h3>🌍 Multilingual Understanding</h3>
            <p>Switch seamlessly between English, Shona, and other local languages for context-rich support experiences.</p>
          </div>
          <div className="solution-card">
            <h3>📞 Seamless Integration</h3>
            <p>Connect directly with WhatsApp, web widgets, or SMS — your customers get instant AI-driven assistance.</p>
          </div>
          <div className="solution-card">
            <h3>📈 Insights & Analytics</h3>
            <p>Monitor interactions and sentiment with our dashboard to continuously improve customer experience.</p>
          </div>
        </div>

        <div className="cta-banner">
          <h2>Enhance your customer experience with AI</h2>
          <a href="/contact" className="btn btn--filled white">Request a Demo</a>
        </div>
      </section>
    </>
  )
}
