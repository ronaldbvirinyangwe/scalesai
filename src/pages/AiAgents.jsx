import React from 'react'
import Seo from '../components/Seo'

export default function AiAgents() {
  return (
    <section className="solution-page">
      {/* 🧠 SEO Meta Tags */}
      <Seo
        title="AI Agents for Education and Enterprise | Scales AI"
        description="Discover how Scales AI builds intelligent, context-aware agents that teach, assist, and automate — transforming education and businesses across Africa."
        pathname="/ai-agents"
        image="/assets/ai-agents-banner.png"
      />

      <div className="solution-hero blue-gradient">
        <div className="container">
          <h1>🤖 AI Agents for Real-World Impact</h1>
          <p>
            From classrooms to enterprises, Scales AI deploys autonomous, context-aware agents
            that can teach, assist, and automate — built responsibly for African needs.
          </p>
        </div>
        <img
          src="/assets/ai-agents-banner.png"
          alt="AI Agents illustration"
          className="hero-img"
        />
      </div>

      <div className="container solution-grid">
        <div className="solution-card">
          <h3>🎓 Education Agents</h3>
          <p>
            Power Chikoro AI tutors that adapt to each learner’s pace and language —
            Shona-English bilingual support for teachers and students.
          </p>
        </div>
        <div className="solution-card">
          <h3>💬 Conversational Assistants</h3>
          <p>
            Deploy chat-based support for schools and businesses with Genesis 2’s advanced reasoning and multilingual context.
          </p>
        </div>
        <div className="solution-card">
          <h3>📊 Enterprise Automations</h3>
          <p>
            Build agents that handle analytics, scheduling, or reporting for your organization — fully customizable via our API.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h2>Build your own AI Agent with Genesis Code</h2>
        <a href="/api" className="btn btn--filled white">Explore the API</a>
      </div>
    </section>
  )
}
