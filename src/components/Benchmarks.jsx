import React from 'react'
import { Helmet } from 'react-helmet-async' // ✅ allows semantic markup for Google

export default function Benchmarks() {
  const columns = [
    'Chikoro Genesis 2',
    'Chikoro Exodus',
    'Claude Opus 4',
    'Claude Sonnet 4',
    'OpenAI o3',
    'Gemini 2.5 Pro',
  ]

  const rows = [
    {
      metric: 'Agentic coding',
      sub: 'SWE-bench Verified',
      values: ['76.3%', '72.5%', '72.5%', '72.7%', '69.1%', '63.2%'],
    },
    {
      metric: 'Agentic terminal coding',
      sub: 'Terminal-Bench',
      values: ['46.8%', '39.2%', '43.2%', '42.1%', '30.2%', '25.3%'],
    },
    {
      metric: 'Graduate-level reasoning',
      sub: 'GPQA Diamond',
      values: ['82.4%', '79.6%', '—', '75.4%', '83.3%', '86.4%'],
    },
    {
      metric: 'Agentic tool use',
      sub: 'TAU-bench',
      values: [
        <>
          Retail<br />
          <strong className="highlight">85.1%</strong><br />
          Airline<br />
          <strong className="highlight">59.8%</strong>
        </>,
        <>
          Retail<br />
          <strong>81.4%</strong><br />
          Airline<br />
          <strong>59.6%</strong>
        </>,
        <>—</>,
        <>—</>,
        <>
          Retail<br />
          <strong>70.4%</strong><br />
          Airline<br />
          <strong>52.0%</strong>
        </>,
        <>—</>,
      ],
    },
    {
      metric: 'Multilingual Q&A',
      sub: 'MMLU',
      values: ['91.2%', '88.8%', '89.0%', '88.5%', '88.8%', '—'],
    },
    {
      metric: 'Visual reasoning',
      sub: 'MMMVU (validation)',
      values: ['83.5%', '76.5%', '84.2%', '82.3%', '82.9%', '82%'],
    },
    {
      metric: 'High school math competition',
      sub: 'AIME 2025',
      values: ['85.0%', '75.5%', '88.0%', '85.2%', '88.9%', '88%'],
    },
  ]

  // ✅ Structured data: performance results for Google rich snippets
  const benchmarkSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "AI Model Benchmark Comparison 2025",
    description:
      "Benchmark comparison of Scales AI models (Chikoro Genesis 2 and Chikoro Exodus) against leading global models across coding, reasoning, and multilingual tasks.",
    creator: {
      "@type": "Organization",
      name: "Scales AI",
      url: "https://scalesai.online",
    },
    citation: "Scales AI Benchmarks 2025 Internal Report",
    variableMeasured: rows.map(r => ({
      "@type": "PropertyValue",
      name: `${r.metric} (${r.sub})`,
      value: {
        "Chikoro Genesis 2": r.values[0],
        "Chikoro Exodus": r.values[1],
        "Claude Opus 4": r.values[2],
        "Claude Sonnet 4": r.values[3],
        "OpenAI o3": r.values[4],
        "Gemini 2.5 Pro": r.values[5],
      },
    })),
    dateModified: "2025-10-07",
    license: "https://creativecommons.org/licenses/by/4.0/",
  }

  return (
    <section className="benchmarks">
      {/* ✅ Adds semantic data for search engines */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(benchmarkSchema, null, 2)}
        </script>
      </Helmet>

      <div className="container desktop-table">
        <table>
          <thead>
            <tr>
              <th></th>
              {columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.metric}>
                <td className="metric">
                  {row.metric}
                  <br />
                  <span className="sub">{row.sub}</span>
                </td>
                {row.values.map((val, i) => (
                  <td
                    key={i}
                    className={i === 0 && String(val).includes('%') ? 'highlight' : ''}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-cards">
        {rows.map(row => (
          <div className="benchmark-card" key={row.metric}>
            <h3>{row.metric}</h3>
            <p className="sub">{row.sub}</p>
            <ul>
              {columns.map((col, i) => (
                <li key={col}>
                  <span>{col}</span>
                  <strong
                    className={
                      i === 0 && String(row.values[i]).includes('%') ? 'highlight' : ''
                    }
                  >
                    {row.values[i]}
                  </strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
