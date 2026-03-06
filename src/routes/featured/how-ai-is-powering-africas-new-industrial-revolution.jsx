import React from 'react';

/**
 * Design Tokens & Styles
 * Integrated from the user-provided "Scales AI" CSS
 */
const customStyles = `
  :root {
    --c-bg: #f7f5f0; --c-bg-dark: #111111; --c-card: #ffffff;
    --c-beige: #ede9e1; --c-accent: #e06f4a; --c-accent-dk: #c45a35;
    --c-border: #e4e0d8; --c-text: #1a1a1a; --c-muted: #666666;
    --c-subtle: #999999; --max-w: 1200px; --gutter: clamp(1.25rem, 4vw, 2.5rem);
    --radius: 12px; --radius-lg: 20px;
    --fs-xs: 0.72rem; --fs-sm: 0.85rem; --fs-base: 1rem; --fs-md: 1.05rem; --fs-lg: 1.2rem;
    --fs-xl: clamp(1.5rem, 3vw, 2rem); --fs-2xl: clamp(2rem, 4vw, 2.75rem); --fs-3xl: clamp(2.5rem, 5vw, 3.5rem);
  }

  .article-page { background: var(--c-bg); min-height: 100vh; font-family: "Inter", sans-serif; color: var(--c-text); padding-bottom: 5rem; }
  .article-container { max-width: 740px; margin: 0 auto; padding: 0 var(--gutter); }
  
  .article-header { padding: clamp(2.5rem, 5vw, 4.5rem) 0 2rem; border-bottom: 1px solid var(--c-border); margin-bottom: 3rem; }
  .article-tag { display: inline-flex; align-items: center; font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--c-accent); margin-bottom: 1rem; gap: 0.5rem; }
  .article-tag::before { content: ''; display: inline-block; width: 20px; height: 2px; background: var(--c-accent); border-radius: 2px; }
  
  h1 { font-size: clamp(1.85rem, 4.5vw, 2.75rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.15; color: var(--c-text); margin-bottom: 1.25rem; }
  .article-meta { font-size: var(--fs-sm); color: var(--c-subtle); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
  .article-meta::before { content: ''; width: 6px; height: 6px; background: var(--c-accent); border-radius: 50%; }
  
  .article-lead { font-size: clamp(1.05rem, 2.2vw, 1.25rem); color: var(--c-muted); line-height: 1.7; font-weight: 400; margin-bottom: 1.5rem; }
  
  .article-body h2 { font-size: clamp(1.4rem, 3vw, 1.85rem); font-weight: 800; border-bottom: 2px solid var(--c-beige); padding-bottom: 0.5rem; margin: 3rem 0 1rem; }
  .article-body h3 { font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-weight: 700; margin: 2rem 0 0.75rem; color: var(--c-text); }
  .article-body p { margin-bottom: 1.5rem; line-height: 1.8; color: #2a2a2a; }
  
  .spotlight { background: var(--c-beige); padding: 2rem; border-left: 4px solid var(--c-accent); border-radius: 0 var(--radius) var(--radius) 0; font-style: italic; margin: 2.5rem 0; }
  .spotlight h3 { margin-top: 0; color: var(--c-accent); font-style: normal; }
  
  ul { margin-bottom: 1.5rem; padding-left: 0; list-style: none; }
  li { position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; line-height: 1.7; }
  li::before { content: ''; position: absolute; left: 0; top: 0.65em; width: 6px; height: 6px; background: var(--c-accent); border-radius: 50%; }
  
  .startup-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem; }
  .startup-card { background: #fff; border: 1px solid var(--c-border); padding: 1rem; border-radius: 8px; font-size: 0.9rem; }
  .startup-card strong { color: var(--c-accent); display: block; margin-bottom: 0.2rem; }

  .footer-cta { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--c-border); text-align: center; }
  .btn--primary { display: inline-block; background: #fff; color: #fff; padding: 0.85rem 2rem; border-radius: 99px; font-weight: 700; text-decoration: none; transition: transform 0.2s; }
  .btn--primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(224, 111, 74, 0.3); }
`;

export default function App() {
  return (
    <div className="article-page">
      <style>{customStyles}</style>

      <div className="article-container">
        <header className="article-header">
          <span className="article-tag">Technology & Infrastructure</span>
          <h1>The Code and the Continent: How AI is Powering Africa’s New Industrial Revolution</h1>
          <div className="article-meta">March 5, 2026 · 15 min read</div>
          <p className="article-lead">
            For decades, the narrative of African development was written in the language of raw materials and commodity exports. Today, that script is being rewritten in Python and C++.
          </p>
          <p className="article-lead">
            Across the continent—and particularly in the bustling tech hubs of Harare, Lagos, Nairobi and Cairo—a new generation of "mind-miners" is using Artificial Intelligence (AI) to solve local problems with global precision.
          </p>
        </header>

        <article className="article-body">
          <p>
            Africa isn't just catching the AI wave; it's playing a different game. This is an "Invisible AI Layer" where machine learning isn't a buzzword but the engine under the hood of fintech, agritech and healthcare solutions. From student-led educational bots to billionaire-backed "AI factories," here is how 50+ pioneering entities are shaping the future.
          </p>

          <h2>Zimbabwe: Heritage-Based Innovation</h2>
          <p>
            In Zimbabwe, the AI movement is anchored by a philosophy known as <strong>Education 5.0</strong>, which pushes universities to move from traditional research to industrialization.
          </p>

          <h3>The Titans and the Infrastructure</h3>
          <p>
            Leading the charge is <strong>Cassava Technologies</strong>, which recently announced a $720 million investment to build five "AI factories" across Africa. These facilities, equipped with thousands of NVIDIA GPUs, aim to provide the high-performance computing (HPC) power necessary for African researchers to train models locally.
          </p>
          <p>
            Not far behind is <strong>Econet Wireless Zimbabwe</strong>, which has integrated AI into its core operating model. Their <em>Yamurai</em> assistant and <em>EcoChat AI</em> provide multilingual support in Shona and English, ensuring that even those without high-speed data can access intelligent guidance via USSD and SMS.
          </p>

          <section className="spotlight">
            <h3>Spotlight: Chikoro AI – The Classroom of the Future</h3>
            <p>
              Perhaps the most inspiring story in the Zimbabwean ecosystem is <strong>Chikoro AI</strong>. Founded by Ronald, a local student, this platform is a "made-for-Zim" educational companion.
            </p>
            <p>
              It leverages natural language processing to help students tackle homework and exam prep specifically tailored to the <strong>Zimsec and Cambridge curricula</strong>. What makes Chikoro AI a game-changer is its accessibility; it is designed to work in areas with limited internet connectivity and supports learning in both Shona and English. It isn't just an app; it's an 24/7 on-demand support system helping to bridge the gap for students who lack personalized tutoring.
            </p>
          </section>

          <h3>Niche Disruptors in Harare and Beyond</h3>
          <ul>
            <li><strong>NeedEnergy:</strong> Profiles energy needs and manages smart grids using machine learning.</li>
            <li><strong>Ocular AI:</strong> (Y Combinator W24) Helps organizations search and automate complex data workflows.</li>
            <li><strong>Magara AI:</strong> Developing <em>ellanna</em>, the first Zimbabwean model focused on Artificial General Intelligence (AGI).</li>
            <li><strong>eAgro:</strong> Their <em>CropFix</em> app uses image recognition trained on 25,000+ local images to diagnose pests.</li>
            <li><strong>Talazo Agritech:</strong> Specialized drone-powered precision agriculture in Manicaland.</li>
          </ul>

          <h3>The University Engine</h3>
          <p>The innovation hubs at UZ and HIT are churning out specialized AI spinoffs:</p>
          <ul>
            <li><strong>Afrainity Technologies (HIT):</strong> Focused on language diversity and local AI tools.</li>
            <li><strong>Zimrobotelia (UZ):</strong> Developing autonomous, battery-powered "Lawnbots."</li>
            <li><strong>Inturistic (UZ):</strong> Built a "Smart Blind-Walking Stick" using AI-driven haptic feedback for artificial vision.</li>
          </ul>

          <h2>The Continental Vanguard: From Cairo to Cape Town</h2>
          <p>
            The AI revolution doesn't stop at the Limpopo. Across the continent, startups are securing hundreds of millions in funding to build infrastructure and trust.
          </p>

          <h3>Infrastructure & Developer Tools</h3>
          <div className="startup-grid">
            <div className="startup-card"><strong>InstaDeep (Tunisia)</strong> Global leader in deep learning and decision-making systems.</div>
            <div className="startup-card"><strong>Cerebrium (South Africa)</strong> Serverless AI infrastructure for ML engineers.</div>
            <div className="startup-card"><strong>Infinilink (Egypt)</strong> Semiconductor startup building AI-driven data center chips.</div>
            <div className="startup-card"><strong>Better Auth (Ethiopia)</strong> Open-source authentication framework for AI startups.</div>
            <div className="startup-card"><strong>Aya Data (Ghana)</strong> Ethical data annotation for LLM training.</div>
          </div>

          <h3>Fintech and Trust</h3>
          <div className="startup-grid">
            <div className="startup-card"><strong>Pastel (Nigeria)</strong> Sigma platform for real-time fraud detection.</div>
            <div className="startup-card"><strong>Moniepoint (Nigeria)</strong> ML-driven underwriting for 70,000+ small businesses.</div>
            <div className="startup-card"><strong>Naked Insurance (RSA)</strong> Instant digital insurance with AI underwriting.</div>
            <div className="startup-card"><strong>Curacel (Nigeria)</strong> Automates claims and fraud detection across markets.</div>
            <div className="startup-card"><strong>Nosible (RSA)</strong> AI-driven asset management agents to reduce costs.</div>
          </div>

          <h3>Agriculture & Climate</h3>
          <div className="startup-grid">
            <div className="startup-card"><strong>Apollo Agriculture (Kenya)</strong> Satellite imagery + ML for farmer credit.</div>
            <div className="startup-card"><strong>Amini (Kenya)</strong> High-resolution environmental intelligence.</div>
            <div className="startup-card"><strong>Klima360 (Rwanda)</strong> Forecasts climate risks using soil and market data.</div>
            <div className="startup-card"><strong>Aerobotics (RSA)</strong> AI-powered drone imagery for tree crop health.</div>
            <div className="startup-card"><strong>AFRIKABAL (Rwanda)</strong> Blockchain + AI for transparent crop trading.</div>
            <div className="startup-card"><strong>Smartel Agri Tech (Rwanda)</strong> Solar-powered AI for pest detection.</div>
            <div className="startup-card"><strong>Shamba Records (Kenya)</strong> AI-driven credit access for thousands of farmers.</div>
          </div>

          <h3>Healthcare</h3>
          <div className="startup-grid">
            <div className="startup-card"><strong>Ubenwa (Nigeria)</strong> Recognizes infant cries to diagnose health issues.</div>
            <div className="startup-card"><strong>RxAll (Nigeria)</strong> Deep learning for instant drug authentication.</div>
            <div className="startup-card"><strong>Neural Labs (Kenya)</strong> Clinical AI trained on African X-ray data.</div>
            <div className="startup-card"><strong>Dawa Health (Zim)</strong> Multimodal AI detecting pre-cancerous lesions (96% accuracy).</div>
            <div className="startup-card"><strong>YeneHealth (Ethiopia)</strong> Women's healthcare streamlining app.</div>
          </div>

          <h3>Additional Noteworthy Players</h3>
          <ul>
            <li><strong>Fastagger (Kenya):</strong> Specializes in "TinyML" for low-cost devices without cloud.</li>
            <li><strong>Intella (Egypt):</strong> Voice analysis infrastructure for Arabic dialects.</li>
            <li><strong>Solve.AI (Nigeria):</strong> AI-powered agents for business lead qualification.</li>
            <li><strong>YarnGPT (Nigeria):</strong> Multilingual speech tool for African accents.</li>
            <li><strong>Gebeya Dala (Ethiopia):</strong> Code with plain language builder.</li>
            <li><strong>Synapse Analytics (Egypt):</strong> Bank-focused ML production platform (Konan).</li>
            <li><strong>Rapid Human AI (RSA):</strong> Transform ideas into code using design-thinking AI.</li>
            <li><strong>Regulon (Ghana):</strong> Compliance and onboarding automation.</li>
          </ul>

          <h2>Conclusion: The African Accent</h2>
          <p>
            The future of technology for once will have an African accent. Whether it is <strong>Chikoro AI</strong> helping a student in Harare pass their O-Levels or <strong>Pastel</strong> stopping a multi-million naira fraud attempt in Lagos, AI in Africa is about "mind over matter." 
          </p>
          <p>
            These 50+ entities are proof that the continent is no longer just a consumer of global tech—it is a laboratory for humanity’s most critical solutions.
          </p>

          <footer className="footer-cta">
            <p className="article-footer__cta">Join the revolution with the tutor that knows your syllabus.</p>
            <a href="https://www.chikoro-ai.com" className="btn--primary">Try Chikoro AI Free →</a>
          </footer>
        </article>
      </div>
    </div>
  );
}