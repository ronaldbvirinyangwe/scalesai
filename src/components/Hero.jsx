import React from 'react'
import scalessImg from '../assets/scaless.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1>
  Driving <span className="uline">AI innovation</span> and{' '}
  <span className="uline">growth</span> across Africa — safely and responsibly
</h1>


          <div className="hero__cards">
            <article className="card">
              <header>Chikoro AI</header>
              <h2>Meet Genesis 2</h2>
              <p>
  Chikoro Genesis 2 is here — our most advanced model yet, built to power the next chapter of AI innovation across Africa.
</p>
    
              <a className="btn btn--filled" href="https://chikoro-ai.com">
                Talk to Genesis
              </a>
            </article>
             

            <article className="card">
              <header>API</header>
              <h2>Build with Genesis Code</h2>
              <p>
                Create AI-powered applications and custom experiences using
                Genesis with our powerful API. Build custom solutions and
                integrate AI into your applications with ease.
              </p>
              <a 
  href="/api" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn btn--ghost"
>
  Learn more
</a>
            </article>
          </div>
        </div>

        <figure className="hero__art">
          <img src={scalessImg} alt="Scales graphic" />
        </figure>
      </div>
    </section>
  )
}
