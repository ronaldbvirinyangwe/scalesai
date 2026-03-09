import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'
const slug = 'odunayo-eweniyi-building-financial-inclusion-from-lagos-one-piggybank-at-a-time'
const title = "Odunayo Eweniyi: Building Financial Inclusion From Lagos One Piggybank at a Time"
const description =
  "PiggyVest started as a simple tool to help Nigerians save money. Under Odunayo Eweniyi's co-leadership, it grew into the most-used personal finance platform in Africa. Her story is about building products Africans actually need — and the power of starting with one genuinely useful thing."
const datePublished = '2026-03-09'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  datePublished,
  author: { '@type': 'Organization', name: 'Scales AI', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'Scales AI',
    url: siteUrl,
    logo: { '@type': 'ImageObject', url: `${siteUrl}/scales.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/featured/${slug}` },
}

export default function OdunayoEweniyi() {
  return (
    <>
      <Helmet>
        <title>{title} | Scales AI</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/featured/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema, null, 2)}</script>
      </Helmet>

      <section className="article-page">
        <div className="container article-container">
          <article>
            <header className="article-header">
              <span className="article-tag">African Tech Profiles</span>
              <h1>{title}</h1>
              <p className="article-meta">
                <time dateTime={datePublished}>March 9, 2026</time> &middot; Scales AI
              </p>
              <p className="article-lead">
                PiggyVest does something that sounds almost too simple to be a technology company: it helps Nigerians save money. You put money away, it is locked so you cannot spend it impulsively, and you withdraw it when you need it. The insight behind this was that Nigeria — like most African countries — had tens of millions of working people who wanted to save but had no financial product designed to help them do it well. Odunayo Eweniyi co-built the solution to that problem, and in doing so reached more African retail financial customers than almost any other fintech on the continent.
              </p>
            </header>

            <div className="article-body">
              <h2>The Savings Problem</h2>
              <p>
                Financial inclusion in Africa is often framed as a payments problem: can people send and receive money, pay bills, access their funds? Mobile money, from M-Pesa to EcoCash, has made significant progress on this dimension. But the savings dimension of financial inclusion is less discussed and arguably more consequential for the long-term financial health of individuals and households. Being able to save money — to set it aside in a way that reduces the temptation to spend it, earns some return, and is accessible when genuinely needed — is the foundation of financial security. And most working Nigerians in 2016 had no good tool for doing this.
              </p>
              <p>
                The formal banking system served this need poorly for the mass market. Banks had minimum balance requirements, fees that ate into small savings and branch networks that were inconvenient for many customers. The informal savings traditions that Nigerians actually used — the ajo (rotating savings group) and similar community savings mechanisms — worked, but they were manual, relationship-dependent and limited in scale. What was missing was a digital product that captured the behavioural insight behind community savings — committing to save, having the commitment enforced by a mechanism outside your own willpower — and made it accessible on a smartphone.
              </p>
              <p>
                Eweniyi and her co-founders built exactly that. PiggyVest — originally called PiggyBank.ng — launched in 2016 with a single core function: you set a saving target, money is withdrawn from your account automatically at whatever frequency you choose, and you cannot withdraw it until the date you specified. The lock-up mechanism, which initially seemed like a strange limitation, turned out to be the product's most valuable feature. It solved the behavioural problem that made saving hard: the temptation to dip into savings for short-term spending.
              </p>

              <h2>From Savings to Financial Platform</h2>
              <p>
                PiggyVest grew rapidly from that simple foundation. The product added investment features — allowing users to earn higher returns on their locked savings — and eventually a broader suite of financial products. The platform expanded to include Investify, which allowed users to invest in vetted opportunities across agriculture, real estate and other asset classes with small minimum investments. The company rebranded from PiggyBank.ng to PiggyVest to reflect this broader positioning.
              </p>
              <p>
                By any metric, the growth was striking. PiggyVest accumulated millions of users and became the most widely used personal finance platform in Nigeria and one of the largest in Africa. The sums of money flowing through the platform — users' collective savings and investments — grew into the billions of naira and then into dollar-equivalent figures that made PiggyVest a significant participant in Nigeria's retail financial system. All of this from a product that started with one simple, genuinely useful thing.
              </p>
              <p>
                Eweniyi's co-leadership role has been particularly focused on the product and marketing dimensions of the company. Her presence on social media — where she has built a substantial following among Nigerian millennials interested in personal finance and entrepreneurship — has been an important channel for the company's growth. She has been unusually candid about the realities of building a company: the financial pressures of early-stage startup life, the challenges of managing rapid growth, the specific difficulties of being a young woman in a male-dominated industry.
              </p>

              <h2>The Financial Inclusion Agenda</h2>
              <p>
                PiggyVest's significance extends beyond its own metrics. The company demonstrated that there was a large, underserved market for well-designed retail financial products among Nigeria's working population — young, urban, increasingly digital, but largely ignored by traditional financial institutions. The product's success changed what investors believed was possible in African retail fintech and contributed to the broader wave of consumer fintech investment that followed across the continent.
              </p>
              <p>
                The model has direct relevance to markets like Zimbabwe. The informal savings tradition is strong across sub-Saharan Africa — the logic of locking money away to prevent impulsive spending is universal. EcoCash's penetration creates the payments infrastructure that a PiggyVest-equivalent for Zimbabwe would require. The working population that would benefit from better savings tools is large. What has been missing in Zimbabwe, as in Nigeria before PiggyVest, is the product that understands the specific behavioural and financial context and designs for it. Eweniyi's work suggests that the opportunity is real and the approach is replicable.
              </p>

              <h2>What Her Career Demonstrates</h2>
              <p>
                Odunayo Eweniyi's trajectory illustrates several things that are worth noting for anyone building in African tech. The first is the power of product-market fit achieved through deep understanding of the customer. PiggyVest's founders understood how Nigerians actually behave around money — the informal savings traditions, the temptation dynamics, the distrust of formal financial institutions — and designed a product that worked with those realities rather than against them.
              </p>
              <p>
                The second is the compounding effect of starting with something genuinely useful. PiggyVest's early users became the most effective marketing channel the company had — people recommended it to their friends because it actually helped them. That kind of organic growth, driven by genuine customer satisfaction rather than paid acquisition, is the most sustainable form of growth a consumer product can achieve. Eweniyi built something that people wanted to tell their friends about. Everything else followed from that.
              </p>
            </div>

            <footer className="article-footer">
              <p>
                <Link to="/featured/m-pesa-at-20-how-kenyas-mobile-money-giant-changed-africa-forever">
                  ← Also read: M-Pesa at 20
                </Link>
              </p>
              <p style={{ marginTop: '1rem' }}>
                <Link to="/featured/africas-female-ai-founders-the-women-building-the-continents-tech-future">
                  ← Also: Africa's Female AI Founders
                </Link>
              </p>
            </footer>
          </article>
        </div>
      </section>
    </>
  )
}
