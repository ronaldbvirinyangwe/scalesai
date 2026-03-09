import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'
const slug = 'shola-akinlade-how-paystacks-founder-sold-to-stripe-and-changed-african-fintech'
const title = "Shola Akinlade: How Paystack's Founder Sold to Stripe and Changed African Fintech"
const description =
  "In 2020, Stripe acquired Paystack for over $200 million — the largest acquisition of an African startup at the time. The story of how Shola Akinlade built a Nigerian payment company that caught the attention of the world's most admired fintech firm tells you everything about what African tech is capable of."
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

export default function SholaAkinlade() {
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
                When Stripe acquired Paystack in October 2020 for a reported $200 million, the deal sent a signal through the African tech ecosystem that had not been heard before at that volume: a world-class global technology company had decided that the best way to enter African payments was to buy the best African payments company, rather than build its own. For Shola Akinlade, who co-founded Paystack with Ezra Olubi in 2015, the acquisition was validation at a scale that rewrote what African founders thought was possible. But it was not the end of the story.
              </p>
            </header>

            <div className="article-body">
              <h2>The Problem Paystack Solved</h2>
              <p>
                When Shola Akinlade and Ezra Olubi started Paystack, Nigerian online payments were a genuinely painful experience. Businesses trying to accept payments online faced a landscape of unreliable gateways, high failure rates, poor developer tools and customer experiences that drove potential buyers away before a transaction completed. In an economy the size of Nigeria's — the largest in Africa, with a rapidly growing digital middle class and an increasingly active e-commerce sector — the quality of payment infrastructure was a significant brake on digital economic growth.
              </p>
              <p>
                Paystack's proposition was straightforward: excellent payment infrastructure for Nigerian businesses, built to the quality standards that developers and businesses expected from the best global payment tools. The comparison point Akinlade had in mind was Stripe itself — the company that had transformed online payments in the United States and Europe by making them simple, reliable and developer-friendly. The question was whether you could build something comparable for Nigeria, in Nigeria's specific regulatory and banking environment, with all of its peculiar complexity.
              </p>
              <p>
                The answer, it turned out, was yes. Paystack was accepted into Y Combinator's Winter 2016 batch — becoming one of the first Nigerian companies to go through the world's most prestigious startup accelerator — and from that point grew rapidly. The product was reliably better than what Nigerian businesses had previously been using, and the market rewarded that quality with adoption.
              </p>

              <h2>Why Stripe Came Calling</h2>
              <p>
                Stripe's acquisition of Paystack was motivated by a clear strategic logic. Stripe had been watching the African market and understood that the opportunity was real: Africa's digital economy was growing, the mobile money infrastructure was maturing, and the demographic characteristics of the continent — young, urbanising, increasingly connected — pointed toward a very large payments market in the medium term. The question for Stripe was how to enter that market efficiently.
              </p>
              <p>
                The answer the Collison brothers landed on was to buy the best existing player rather than try to replicate locally what had taken Paystack years to build. Paystack had something that Stripe could not easily reproduce quickly: deep knowledge of Nigeria's specific banking relationships, regulatory environment and customer behaviour, combined with an existing customer base and a strong brand among Nigerian developers. These were not things that could be acquired through a market entry strategy. They required years of operating in the market, building relationships and earning trust.
              </p>
              <p>
                The acquisition price — over $200 million for a company that was less than five years old at the time — was the number that African tech observers focused on. For a generation of African founders, it provided evidence that African technology companies could achieve exit outcomes comparable to startups in more developed markets. It changed what people believed was possible.
              </p>

              <h2>After the Acquisition</h2>
              <p>
                Shola Akinlade stayed on to run Paystack within Stripe after the acquisition, which is itself significant. Many founder acquisitions end with the founder departing once the earn-out period concludes. Akinlade's continued leadership of Paystack as a Stripe subsidiary reflected both his commitment to the mission he had started and Stripe's understanding that the company's performance was tied to his continued involvement.
              </p>
              <p>
                Under Akinlade's continued leadership, Paystack has expanded beyond Nigeria into Ghana, South Africa, Kenya and other African markets — pursuing the pan-African payments vision that Paystack's founders had held from the beginning but needed Stripe's resources to execute at scale. The acquisition, in this sense, was less a conclusion to the Paystack story than a chapter transition: from bootstrapped Nigerian startup to the African arm of a global payments infrastructure company, with resources and relationships that the independent company could never have accessed.
              </p>
              <p>
                The relationship between founder-built African companies and global acquirers is a live question in the ecosystem. Some argue that African tech companies should be building toward independence and African ownership rather than acquisition by foreign companies. Others argue that acquisitions by global technology leaders bring resources, networks and market access that accelerate what African companies can achieve. Akinlade's trajectory — building something genuinely excellent, achieving a landmark acquisition, and continuing to drive the company's African expansion — does not fully resolve this debate, but it demonstrates that the outcome of such an acquisition is not predetermined. What you build with the resources matters.
              </p>

              <h2>What Akinlade Represents</h2>
              <p>
                Shola Akinlade's profile in African tech has been shaped by his relative reticence compared to some of his peers. He has not been a prominent public commentator on African tech policy or a frequent conference speaker in the way that some other prominent African founders have been. The Paystack story is primarily told through the product and the business outcomes rather than through personal branding. In an ecosystem where personal narrative is often central to how founders build credibility, his approach is a useful reminder that building an excellent product and running a well-managed company are themselves the most powerful form of advocacy.
              </p>
              <p>
                For African founders, the Paystack story offers a particular kind of inspiration: the possibility that you can build something in your own market, focused on a specific local problem, to the highest quality standards, and have that quality be recognised not just by the customers you serve but by the most sophisticated players in the global technology industry. That is a different kind of evidence than a large fundraising round or a high valuation. It is evidence that what you built was genuinely excellent. And excellent things, it turns out, attract serious attention from everywhere.
              </p>
            </div>

            <footer className="article-footer">
              <p>
                <Link to="/featured/flutterwave-paystack-and-the-african-fintech-revolution">
                  ← Also read: Flutterwave, Paystack and the African Fintech Revolution
                </Link>
              </p>
              <p style={{ marginTop: '1rem' }}>
                <Link to="/featured/m-pesa-at-20-how-kenyas-mobile-money-giant-changed-africa-forever">
                  ← Also: M-Pesa at 20
                </Link>
              </p>
            </footer>
          </article>
        </div>
      </section>
    </>
  )
}
