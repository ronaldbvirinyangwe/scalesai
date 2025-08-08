import React from 'react'

export default function Mission() {
  return (
    <section id="mission" className="mission">
      <div className="container mission__inner">
       <div className="mission__copy">
  <h2>
    At Scales AI, we build transformative AI to make learning accessible and empower businesses.
  </h2>
  <p>
    We believe in a future where artificial intelligence unlocks human potential — starting with how we learn.
    Our flagship platform, <strong>Chikoro AI</strong>, is designed to make education more engaging, personalized,
    and available to every learner, anywhere in the world.
  </p>
  <p>
    But our mission goes beyond education. At Scales AI, we develop intelligent agents and systems that help
    businesses work smarter, automate complex tasks, and innovate faster — all while prioritizing ethical
    design and real-world impact.
  </p>
  <p>
    Through research, product development, and responsible deployment, we’re building AI that serves humanity’s
    long-term well-being — with learning as our foundation and empowerment as our goal.
  </p>
</div>


        <div className="mission__cards">
         <a className="big-card tooltip" href="/trust-and-safety">
  <strong>Core Views on Safe AI Development</strong>
  <p>
    Discover our principles guiding the design of safe and aligned AI agents —
    especially for educational and societal applications in Africa.
  </p>
  <span className="tooltiptext">
    How we build aligned and safe AI for education and local deployment
  </span>
</a>

<a className="big-card tooltip" href="/trust-and-safety">
  <strong>Responsible Scaling Practices for Africa</strong>
  <p>
    Learn how we balance innovation with local constraints — including infrastructure, regulation,
    and community input — to deploy AI responsibly across the continent.
  </p>
  <span className="tooltiptext">
    Our approach to scaling AI responsibly in African contexts
  </span>
</a>

<a className="big-card tooltip" href="/genesis2">
  <strong>Explore Chikoro Genesis 2 Capabilities</strong>
  <p>
    Dive into the technical features of our most advanced model yet —
    including multilingual reasoning, long-context understanding, and safe deployment modes.
  </p>
  <span className="tooltiptext">
    Explore model features like multilingual reasoning, long-context workflows, and education-safe alignment.
  </span>
</a>


        </div>
      </div>
    </section>
  )
}
