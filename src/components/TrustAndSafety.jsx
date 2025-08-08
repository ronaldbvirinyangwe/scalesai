import React from 'react'

export default function TrustAndSafety() {
  return (
    <section id="trustsafety" className="trust-safety">
      <div className="container">
        <h2>Trust &amp; Safety</h2>
        <p>
          At Scales AI, we prioritize safety and alignment in every stage of
          model development. Chikoro Genesis 2 has undergone rigorous
          evaluations to ensure responsible and reliable deployment.
        </p>

        <ul className="safety-list">
          <li>
            <strong>Adversarial robustness:</strong> Stress-tested with
            red-teaming prompts across sensitive domains to mitigate harmful
            behavior and hallucinations.
          </li>
          <li>
            <strong>Long-context safety:</strong> Audited model behavior across
            lengthy, ambiguous conversations to ensure continuity, coherence,
            and guardrails.
          </li>
          <li>
            <strong>Policy compliance:</strong> Built-in safety classifiers and
            intent filters for handling regulated domains such as healthcare,
            finance, and education.
          </li>
          <li>
            <strong>User privacy:</strong> Inputs and outputs are never stored
            unless explicitly logged by the developer via our API. Full support
            for secure session-based memory.
          </li>
        </ul>

        <p>
          We continuously fine-tune and monitor Genesis 2 for emerging risks.
          Learn more in our <a href="#">comprehensive safety report</a>.
        </p>
      </div>
    </section>
  );
}
