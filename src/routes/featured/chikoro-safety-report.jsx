import React from 'react'

export default function SafetyReport() {
  return (
    <section className="article-page">
      <div className="container">
        <h1>Chikoro Safety Report v1.0</h1>
        <p className="meta">Trust &amp; Safety • Aug 3, 2025</p>
        <p>
          Our first public safety report outlines the principles, testing, and risk
          mitigation strategies behind Chikoro Genesis 2 and Exodus. The report covers
          adversarial prompt resistance, privacy safeguards, and policy compliance
          standards adapted for educational and agentic use in Africa.
        </p>
        <ul>
          <li>Red-teaming results across sensitive domains</li>
          <li>Transparency on fine-tuning datasets</li>
          <li>Deployment sandboxing for agents</li>
        </ul>
        <p><a href="#">Read the full report →</a></p>
      </div>
    </section>
  )
}
