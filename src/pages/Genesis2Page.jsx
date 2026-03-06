import React from 'react'
import Benchmarks from '../components/Benchmarks.jsx'
import TrustAndSafety from '../components/TrustAndSafety.jsx'
import Seo from '../components/Seo'

export default function Genesis2Page() {
  return (
    <>
      {/* ✅ SEO metadata for this model page */}
      <Seo
        title="Chikoro Genesis 2 — Advanced Reasoning AI Model | Scales AI"
        description="Chikoro Genesis 2 is Scales AI’s hybrid reasoning model built for autonomous agents, coding, and research workflows. With a 200K token context window, it delivers long-form coherence and real-world precision across Africa."
        pathname="/genesis2"
        image="/assets/genesis2-banner.png"
      />

      <section className="model-detail">
        <div className="container">
          <h1>Chikoro Genesis 2</h1>

          <p>
            Chikoro Genesis 2 is our next-generation hybrid reasoning model designed for advanced coding and autonomous AI agents.
            With a powerful <strong>200K token context window</strong>, it excels at managing extended workflows, solving complex
            multi-step problems, and executing domain-specific tasks with remarkable accuracy and coherence — even over hours-long sessions.
          </p>

          <div className="actions" style={{ margin: '2rem 0' }}>
            <a className="btn btn--filled" href="#">Try Genesis 2</a>
            <a className="btn btn--ghost" href="#">Get early API access</a>
          </div>

          {/* --- Availability & Pricing --- */}
          <h2>Availability &amp; Pricing</h2>
          <p>
            Genesis 2 is available for developers and businesses via our API starting on <strong>September 15, 2025</strong>.
          </p>

          {/* --- Use Cases --- */}
          <h2>Use Cases</h2>
          <ul>
            <li>
              <strong>AI Agents:</strong> Autonomous orchestration of marketing campaigns, multi-step business processes, and cross-system workflows.
            </li>
            <li>
              <strong>Advanced Coding:</strong> Days-long code-refactoring tasks, context-aware generation, and style-specific customizations on large bases.
            </li>
            <li>
              <strong>Agentic Search:</strong> Synthesize insights from patent databases, academic papers, and internal docs into strategic summaries.
            </li>
            <li>
              <strong>Content Creation:</strong> Rich, narrative-level writing, character-driven stories, and marketing copy with human-like tone.
            </li>
          </ul>

          {/* --- Benchmarks --- */}
          <h2>Benchmarks</h2>
          <Benchmarks />

          {/* --- Trust & Safety --- */}
          <TrustAndSafety />
        </div>
      </section>
    </>
  )
}