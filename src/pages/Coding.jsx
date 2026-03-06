import React from 'react'
import Seo from '../components/Seo' // ✅ added for SEO

export default function Coding() {
  return (
    <>
      {/* ✅ SEO metadata for this page */}
      <Seo
        title="AI-Powered Coding Tools | Scales AI"
        description="Discover how Scales AI and Genesis 2 are empowering African developers with AI-assisted coding, debugging, and rapid project generation — built for real-world innovation."
        pathname="/coding"
        image="/assets/coding-banner.png"
      />

      <section className="solution-page">
        <div className="solution-hero purple-gradient">
          <div className="container">
            <h1>💻 AI-Powered Coding & Developer Tools</h1>
            <p>
              Empower African developers with AI that accelerates coding, debugging, and project generation — built with Genesis 2 intelligence.
            </p>
          </div>
          <img src="" alt="AI coding assistant" className="hero-img" />
        </div>

        <div className="container solution-grid">
          <div className="solution-card">
            <h3>⚡ Code Generation</h3>
            <p>Instantly scaffold web or mobile projects using AI prompts aligned to your preferred stack (React, FastAPI, Node, etc.).</p>
          </div>
          <div className="solution-card">
            <h3>🧠 Smart Debugging</h3>
            <p>Genesis 2 understands context and explains bugs in simple English or Shona — perfect for learning and rapid dev cycles.</p>
          </div>
          <div className="solution-card">
            <h3>🔗 API Integration</h3>
            <p>Access the Genesis Code API to embed AI completion, translation, and code analysis directly into your tools.</p>
          </div>
        </div>

        <div className="cta-banner">
          <h2>Get early access to Genesis Code</h2>
          <a href="/api" className="btn btn--filled white">Join Beta</a>
        </div>
      </section>
    </>
  )
}
