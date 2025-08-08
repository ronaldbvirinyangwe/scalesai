// src/pages/ArticlePage.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Import article components manually
import Genesis21Released from '../routes/featured/genesis-21-released.jsx'
import SafetyReport from '../routes/featured/chikoro-safety-report.jsx'
import AfricaFirstAgents from '../routes/featured/building-africa-first-agents.jsx'
import ExodusArticle from '../routes/featured/exodus-lightweight-fast-local.jsx'
import EduTechAfrica from '../routes/featured/chikoro-at-edutech-africa-2025.jsx'
import FineTuningLanguages from '../routes/featured/fine-tuning-shona-and-swahili-models.jsx'

// Map slug → component
const articleComponents = {
  'genesis-21-released': Genesis21Released,
  'chikoro-safety-report': SafetyReport,
  'building-africa-first-agents': AfricaFirstAgents,
  'exodus-lightweight-fast-local': ExodusArticle,
  'chikoro-at-edutech-africa-2025': EduTechAfrica,
  'fine-tuning-shona-and-swahili-models': FineTuningLanguages,
}

export default function ArticlePage() {
  const { slug } = useParams()
  const ArticleComponent = articleComponents[slug]

  if (!ArticleComponent) {
    return (
      <section className="article-page">
        <div className="container" style={{ padding: '4rem 0' }}>
          <h2>Article not found</h2>
          <Link to="/">← Back to Home</Link>
        </div>
      </section>
    )
  }

  return <ArticleComponent />
}
