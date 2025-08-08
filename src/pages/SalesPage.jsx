import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SalesPage() {
  const [topic, setTopic] = useState('')
  const options = [
    'Contact Sales',
    'Increase Rate Limits',
    'Business Associate Agreement',
    'Zero Day Retention',
    'Monthly Invoicing',
    'Product Support',
  ]

  const handleChange = e => setTopic(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up your submission logic
    console.log('Request topic:', topic)
  }

  return (
    <section className="sales-page">
      <div className="container sales-page__inner">
        {/* Info column */}
        <div className="sales-page__info">
          <h1>Contact our Sales</h1>
          <p>
  Connect with our sales team for tailored support and resources as you grow your usage through the API and enterprise tools.
</p>

          <p>
            Want a little help? Our{' '}
            <Link to="/support" className="sales-page__link">
              Support Center
            </Link>{' '}
            has answers to technical questions and product details.
          </p>
        </div>

        {/* Form column */}
        <div className="sales-page__form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="help-topic">
              What can we help you with?<span className="required">*</span>
            </label>
            <select
              id="help-topic"
              value={topic}
              onChange={handleChange}
              required
            >
              <option value="" disabled>– Please select –</option>
              {options.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <button type="submit" className="btn btn--filled">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
