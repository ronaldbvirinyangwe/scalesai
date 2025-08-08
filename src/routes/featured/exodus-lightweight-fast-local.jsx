import React from 'react'

export default function ExodusArticle() {
  return (
    <section className="article-page">
      <div className="container">
        <h1>Exodus: Lightweight, Fast, Local</h1>
        <p className="meta">Deployment • Jul 2, 2025</p>
        <p>
          Chikoro Exodus is our compact, efficient model for local deployment. It powers
          on-device learning, offline agent tasks, and mobile-first inference — all
          optimized for African bandwidth and infrastructure constraints.
        </p>
        <p>
          With Exodus, students and businesses can run AI locally on smartphones,
          Raspberry Pi, or edge devices, with no cloud connection required.
        </p>
        <ul>
          <li>Quantized 4-bit transformer core</li>
          <li>Token streaming with 50ms latency</li>
          <li>Context support up to 32K</li>
        </ul>
      </div>
    </section>
  )
}
