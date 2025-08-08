import React from 'react'
import { Link } from 'react-router-dom'

export default function Models() {
  const models = [
    {
      name: 'Genesis 2',
      path: '/genesis2',
      summary:
        'Our most advanced model to date, built for tutoring, agentic workflows, and long-context reasoning.',
      highlights: [
        'Supports multilingual tasks (e.g., Shona, Swahili)',
        'Handles 100K+ token inputs',
        'Optimized for education and research',
        'Improved memory handling and chain-of-thought reasoning',
      ],
    },
    {
      name: 'Exodus',
      path: '/exodus',
      summary:
        'A lightweight, high-speed model designed for efficient local deployment and offline use cases.',
      highlights: [
        'Runs on edge devices (laptops, mobiles)',
        'Ideal for low-connectivity regions',
        'Fast inference with small memory footprint',
        'Tailored for student agents and local AI tutors',
      ],
    },
  ]

  return (
    <section id="models" className="models">
      <div className="container models__inner">
        <div className="models__copy">
          <h2>Chikoro Genesis 2<br/>and Exodus</h2>
          <p>
            Chikoro’s core models unlock powerful AI workflows tailored for Africa —
            from intelligent tutoring to research-grade agents, online and offline.
          </p>
        </div>

        <div className="model-cards">
          {models.map(({ name, path, summary, highlights }) => (
            <Link key={name} to={path} className="model-card model-card--detailed">
              <div>
                <small>Model details</small>
                <span className="model-card__title">{name}</span>
                <p className="model-card__summary">{summary}</p>
                <ul className="model-card__list">
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
