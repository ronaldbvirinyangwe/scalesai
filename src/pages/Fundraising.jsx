import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo' 

export default function Fundraising() {
  return (
    <>
      <Seo
        title="Invest in Scales AI | Pre-Seed Fundraising Round"
        description="Scales AI is raising a Pre-Seed round to expand Chikoro AI — the first bilingual, curriculum-aligned AI education platform for Zimbabwe and Africa."
        pathname="/fundraising"
        image="/assets/fundraising-banner.png"
      />

      <section className="fundraising-page">
        {/* Hero Banner */}
        <div className="fundraising-hero">
          <div className="fundraising-hero-content">
            <div className="status-indicator">
              <span className="dot"></span> Open for Investment
            </div>
            
            <h1>The Future of African Education is <span>Bilingual AI</span></h1>
            
            <p className="hero-lead">
              We are scaling <strong>Chikoro AI</strong>—the first localised LLM platform 
              built for the 100M+ students across the SADC region. Bridging the gap between 
              local languages and global curriculum standards.
            </p>

            <div className="stats-strip">
              <div className="stat-item">
                <span className="stat-value">1,000+</span>
                <span className="stat-label">Active Pilots</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">ZIMSEC and Cambridge</span>
                <span className="stat-label">Aligned LLM</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">60%</span>
                <span className="stat-label">Cost Reduction</span>
              </div>
            </div>

            <div className="fundraising-hero-buttons">
              <a
                href="mailto:founder@scalesai.online?subject=Scales AI Funding Inquiry"
                className="btn btn-primary-hero"
              >
                Contact the Founder
              </a>
              {/* <a 
                href="#deck" 
                className="btn btn-outline-hero"
              >
                View Investment Pitch
              </a> */}
            </div>
          </div>

          <div className="hero-visual-box">
             <div className="investment-card-preview">
                <h3>Pre-Seed Round</h3>
                <div className="goal-bar">
                    <div className="goal-progress" style={{width: '15%'}}></div>
                </div>
                <div className="goal-labels">
                    <span>Target: <strong>$100,000</strong></span>
                    <span>Status: <strong>Early Stage</strong></span>
                </div>
             </div>
          </div>
        </div>

        {/* Funding Details */}
        <div className="funding-details container">
          <div className="fundraising-section-header">
            <h2>Our Funding Goal</h2>
            <div className="goal-amount-text">$100,000 USD</div>
            <p>Strategic capital to scale infrastructure and local language LLMs.</p>
          </div>

          <div className="funding-grid">
            <div className="funding-card">
              <div className="fundraising-icon">⚙️</div>
              <h3>Product Development — 40%</h3>
              <p>Strengthen Chikoro AI LLM, improve multimodal features (OCR, speech, vision), and refine the Genesis 2 API.</p>
            </div>
            <div className="funding-card">
              <div className="fundraising-icon">🏫</div>
              <h3>Deployment — 10%</h3>
              <p>Expanding adoption at Wisetech College and Ridgeview while training teachers on AI integration.</p>
            </div>
            <div className="funding-card">
              <div className="fundraising-icon">📈</div>
              <h3>Marketing — 20%</h3>
              <p>Building brand visibility and launching local campaigns to grow our pan-African user community.</p>
            </div>
            <div className="funding-card">
              <div className="fundraising-icon">👥</div>
              <h3>Operations — 30%</h3>
              <p>Supporting team growth, server infrastructure, and regional compliance for AI deployment.</p>
            </div>
          </div>
        </div>

        {/* Traction Section */}
        <div className="traction-section-bg">
          <div className="traction container">
            <h2>Our Traction So Far</h2>
            <div className="traction-list-grid">
                <div className="traction-pill">
                    <span className="check-mark">✓</span>
                    <p>Chikoro AI Teacher Dashboard live</p>
                </div>
                <div className="traction-pill">
                    <span className="check-mark">✓</span>
                    <p>Adopted by Wisetech College</p>
                </div>
                <div className="traction-pill">
                    <span className="check-mark">✓</span>
                    <p>Genesis 2 LLM tested on ZIMSEC curriculum</p>
                </div>
                <div className="traction-pill">
                    <span className="check-mark">✓</span>
                    <p>1,000+ students & teachers in pilot</p>
                </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision container">
          <h2>Our Vision</h2>
          <p className="vision-text">
            To build the continent’s most trusted AI education platform — bridging digital gaps in learning through bilingual AI, accessible hardware, and local context understanding.
          </p>
        </div>

        {/* Call to Action */}
        <div className="fundraising-cta container">
          <h2>Join Us in Scaling Africa’s AI Innovation</h2>
          <p>Let’s build the future of education together. Your investment fuels real impact.</p>
          <a
            href="mailto:ronaldbvirinyangwe@icloud.com?subject=Scales AI Funding Inquiry"
            className="btn white big-cta"
          >
            Request Investor Deck
          </a>
        </div>
      </section>
    </>
  )
}