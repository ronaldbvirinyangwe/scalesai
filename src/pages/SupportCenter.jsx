// src/pages/SupportCenter.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo' // ✅ Added for SEO

const faqs = [
  {
    question: 'How do I get started with the API?',
    answer:
      'You can begin by signing up for an account and generating an API key in your dashboard. Our API docs provide code examples and authentication instructions.',
  },
  {
    question: 'Can I request higher rate limits?',
    answer:
      'Yes. Reach out to our sales team via the Contact Sales page to request custom rate limits based on your use case.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Billing is usage-based by default, with optional monthly invoicing for enterprise clients. You can view your usage and invoices in the billing dashboard.',
  },
  {
    question: 'What is Zero Day Retention?',
    answer:
      'Zero Day Retention means we do not store user inputs or outputs unless explicitly requested for logging or debugging. This is available on enterprise plans.',
  },
  {
    question: 'Do you support BAA agreements?',
    answer:
      'Yes, Business Associate Agreements are available for clients handling protected data. Please contact our legal or compliance team to initiate the process.',
  },
  {
    question: 'How do I integrate with Chikoro in my LMS?',
    answer:
      'We support integration with most Learning Management Systems via LTI or custom API endpoints. Documentation is available in the developer portal.',
  },
]

export default function SupportCenter() {
  return (
    <>
      {/* ✅ SEO metadata for Support Center page */}
      <Seo
        title="Support Center | Scales AI"
        description="Find answers to common questions about Scales AI and Chikoro AI — from API setup, billing, and integrations to rate limits, retention policies, and compliance."
        pathname="/support"
        image="/assets/support-center-banner.png"
      />

      <section className="support-center">
        <div className="container">
          <h1>Support Center</h1>
          <p className="intro">
            Find answers to common questions about Chikoro AI, integrations, billing, and usage.
          </p>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="more-help">
            <p>
              Still need help? <Link to="/sales">Contact our sales team</Link> or email
              <a href="mailto:support@chikoro-ai.com"> support@chikoro-ai.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
