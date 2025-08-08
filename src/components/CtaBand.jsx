import React from 'react'
import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2>Want to help us build the future of safe AI?</h2>
        <div className="cta-buttons">
          <Link to="/sales"className="btn btn--ghost">Contact our sales</Link>
        </div>
      </div>
    </section>
  )
}
