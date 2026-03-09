import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'
const slug = 'kola-aina-the-vc-who-bet-on-african-founders-before-anyone-else'
const title = "Kola Aina: The VC Who Bet on African Founders Before Anyone Else"
const description =
  "Before African tech was a global story, Kola Aina was writing small cheques into Nigerian founders nobody else was funding. The story of Ventures Platform — and the vision behind it — explains why patient, conviction-driven capital is the most important thing an emerging ecosystem can have."
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

export default function KolaAina() {
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
                In the story of African tech, the founders usually get the attention — and rightly so. But every founder needs capital, and the earliest capital is the hardest to find. Kola Aina, through Ventures Platform, became the VC who was willing to write small cheques into Nigerian startups at a moment when most institutional investors were not yet paying attention to African tech. The portfolio that resulted from those early bets reads today like a who's who of Nigeria's most important technology companies. The conviction that drove those bets is as instructive as the outcomes.
              </p>
            </header>

            <div className="article-body">
              <h2>The Gap He Saw</h2>
              <p>
                When Kola Aina founded Ventures Platform in 2016, the gap in African startup funding was particularly acute at the earliest stages. There were some institutional investors willing to write Series A and B cheques into African startups that had demonstrated real traction — though far fewer than comparable markets outside Africa. There were even fewer willing to write the first serious cheque: the pre-seed or seed funding that a founder needs to go from an idea and a prototype to a business with paying customers and a clear product direction.
              </p>
              <p>
                This gap exists partly because early-stage investing in any market requires a particular kind of judgment — the ability to assess a founding team and a market thesis before there is much evidence to work from — and partly because the institutional structures for early-stage investing in Africa were underdeveloped. Most of the capital flowing into African startups in the mid-2010s was coming from development finance institutions and international VCs who were looking for businesses with enough traction to make a data-driven assessment. The founder who needed $100,000 to find out if their idea was right had very few places to go.
              </p>
              <p>
                Ventures Platform positioned itself explicitly to fill this gap: writing early cheques, being comfortable with the uncertainty of pre-traction companies, and providing support beyond capital — mentorship, network access, operational guidance — in recognition that what early-stage Nigerian founders often needed was not just money but the kind of ecosystem support that Silicon Valley founders could take for granted.
              </p>

              <h2>What the Portfolio Says</h2>
              <p>
                The Ventures Platform portfolio grew to include companies across fintech, healthcare, logistics, agritech and a range of other sectors. Some became prominent: names that appeared in subsequent investment rounds led by international VCs, in media coverage of African tech, in the deal announcements that gave the broader ecosystem confidence that African startups could scale. The composition of the portfolio reflects both Aina's investment thesis and his particular knowledge of the Nigerian market — an understanding of which sectors had genuine structural demand, which founders had the combination of ambition and rigour required to build enduring companies, and which problems were large enough to support a substantial business if solved well.
              </p>
              <p>
                The track record has attracted attention. Ventures Platform raised a dedicated fund from limited partners — including, notably, international development finance institutions that recognised the value of a local manager with deep ecosystem knowledge — and grew its deployment capacity. The fund's development has tracked the maturation of the broader African VC ecosystem: from a period when most African tech investment came from foreign capital with limited local knowledge, toward an era where locally managed funds with deep context are recognised as providing something that foreign capital cannot replicate.
              </p>

              <h2>The Advocacy Dimension</h2>
              <p>
                Like Rebecca Enonchong, Kola Aina has combined the work of running an investment firm with the work of advocating for the conditions African tech needs. His public commentary has been particularly focused on the capital structures of the African tech ecosystem: the need for more local capital, the distortions created by foreign capital with different time horizons and risk tolerances than the businesses and markets being funded, and the importance of building African-owned investment institutions rather than relying on foreign VCs to finance the continent's technology development.
              </p>
              <p>
                These arguments have practical implications. A foreign VC fund investing in African startups is typically managing money on behalf of limited partners who expect returns on a 10-year fund cycle. This creates pressures — for rapid growth, for early exits, for business models that optimise for metrics that foreign investors understand — that may not align with what a company needs to build something sustainable in an African context. A locally managed fund with African limited partners and a longer relationship with the ecosystem may be able to tolerate different timelines and support different kinds of growth. Aina's work has been both to make this argument and to demonstrate it in practice through the Ventures Platform portfolio.
              </p>

              <h2>What Kola Aina Means for Smaller Ecosystems</h2>
              <p>
                The Ventures Platform story has particular relevance for smaller African tech ecosystems like Zimbabwe's. Nigeria has the advantage of scale — the market is large enough that even a modestly successful company can generate significant revenue — and of ecosystem depth, with enough founders, operators and investors that the network effects of being embedded in Lagos's tech community are substantial. Zimbabwe does not have these advantages.
              </p>
              <p>
                But the principle Aina demonstrates is scale-invariant: every ecosystem needs local, early capital willing to back founders before the evidence base is strong enough to attract international investors. In Zimbabwe's context, that means diaspora angel investors willing to write first cheques, local corporates willing to pilot unproven technology, and local investors — however small — willing to back Zimbabwean founders on the basis of founder quality and market judgment rather than waiting for traction metrics. The Ventures Platform model, adapted to Zimbabwe's scale and conditions, is what the Harare ecosystem most acutely needs. Aina's career demonstrates that building that institution — patiently, with conviction, over years — can fundamentally change what an ecosystem is capable of producing.
              </p>
            </div>

            <footer className="article-footer">
              <p>
                <Link to="/featured/how-zimbabwes-diaspora-is-funding-the-countrys-tech-future">
                  ← Also read: How Zimbabwe's Diaspora Is Funding the Country's Tech Future
                </Link>
              </p>
              <p style={{ marginTop: '1rem' }}>
                <Link to="/featured/zimbabwes-tech-hubs-the-spaces-where-the-next-generation-of-founders-is-building">
                  ← Also: Zimbabwe's Tech Hubs
                </Link>
              </p>
            </footer>
          </article>
        </div>
      </section>
    </>
  )
}
