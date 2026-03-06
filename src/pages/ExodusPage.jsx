import React from 'react'
import Benchmarks from '../components/Benchmarks.jsx'
import Seo from '../components/Seo' // ✅ Added SEO import

export default function ExodusPage() {
  return (
    <>
      {/* ✅ SEO metadata for this model page */}
      <Seo
        title="Chikoro Exodus — Fast, Lightweight AI Model | Scales AI"
        description="Chikoro Exodus is Scales AI’s ultra-efficient AI model built for edge and cloud. With a 64K context window and sub-100ms latency, Exodus enables real-time chatbots, ASR, and edge AI across Africa."
        pathname="/exodus"
        image="/assets/exodus-banner.png"
      />

      <section className="model-detail">
        <div className="container">
          <h1>Chikoro Exodus</h1>
          <p>
            Chikoro Exodus is our lightweight, high-throughput model optimized for 
            real-time inference on edge and cloud, with a 64K context window 
            and sub-100ms latency.
          </p>

          <div className="actions" style={{margin: '2rem 0'}}>
            <a className="btn btn--filled" href="#">Try Exodus</a>
            <a className="btn btn--ghost" href="#">Get API access</a>
          </div>

          <h2>Announcements</h2>
          <article style={{marginBottom: '1.5rem'}}>
            <h3>
              Exodus 1.2 Available <time>Jul 15, 2025</time>
            </h3>
            <p>
              Exodus 1.2 adds support for token-level access control, improved 
              SIMD vectorization, and up to 2× throughput on modern CPUs.
            </p>
            <a href="#">Read more</a>
          </article>

          <h2>Availability &amp; pricing</h2>
          <p>
            Exodus is included in all Chikoro plans and the Chikoro API. Pricing 
            starts at <strong>$5 per million tokens</strong>, making it ideal for 
            latency-sensitive applications.
          </p>

          <h2>Use cases</h2>
          <ul>
            <li><strong>Realtime chatbots:</strong> Sub-100ms replies even under 
              peak load.</li>
            <li><strong>Edge deployments:</strong> Run on ARM and x86 with minimal 
              resource usage.</li>
            <li><strong>Live transcription:</strong> Streaming ASR with low cost per token.</li>
          </ul>

          <h2>Benchmarks</h2>
          <Benchmarks />

          <h2>Trust &amp; Safety</h2>
          <p>
            Exodus has the same safety guardrails as Genesis 2, plus additional 
            real-time monitoring hooks for rapid incident response.
          </p>

          <h2>What customers are saying</h2>
          <blockquote>
            <p>
              “Exodus’s sub-100ms responses transformed our live support chatbot’s 
              user experience.”
            </p>
            <cite>
              Alice Lee<br/><span>Product Lead, ChatFlow</span>
            </cite>
          </blockquote>
        </div>
      </section>
    </>
  )
}
