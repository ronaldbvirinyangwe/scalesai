import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'
const slug = 'iyinoluwa-aboyeji-the-man-who-built-andela-and-flutterwave-and-isnt-done-yet'
const title = "Iyinoluwa Aboyeji: The Man Who Built Andela and Flutterwave and Isn't Done Yet"
const description =
  "Iyinoluwa 'E' Aboyeji co-founded two of Africa's most transformative technology companies — Andela and Flutterwave. Then he left both to build something bigger. His story is the defining narrative of what African tech ambition looks like in the 2020s."
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

export default function IyinoluwaAboyeji() {
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
                Most people in technology spend their careers building one significant company. Iyinoluwa Aboyeji — known almost universally as "E" — co-founded two that reshaped African tech, left both before their biggest moments of external recognition, and is now running a third venture that he believes will matter more than either of them. He is in his early thirties. The Nigerian entrepreneur's trajectory is one of the most instructive in African technology: not just because of what he built, but because of the choices he made about what to build next, and why.
              </p>
            </header>

            <div className="article-body">
              <h2>The Andela Bet</h2>
              <p>
                When Iyinoluwa Aboyeji co-founded Andela in 2014, the central proposition seemed counterintuitive to many in global tech: that African software engineers, given the right training and environment, could work on elite international engineering teams. This was not a universally held view at the time. The narrative that African talent was inherently inferior — or that the infrastructure challenges of the continent made remote software development impractical — was common enough that Andela had to argue against it in every early fundraising conversation.
              </p>
              <p>
                Andela's model was rigorous: a highly selective intake process, intensive training, placement with international technology companies on a placement model. It was not a coding bootcamp. It was an attempt to build a talent institution for Africa comparable to what India's technical universities had done for Indian software engineering — creating a large, credentialled, globally deployable technical workforce. The results were significant: Andela trained thousands of engineers across Nigeria, Kenya, Uganda, Rwanda and Egypt, placed them with companies like Microsoft, GitHub and Salesforce, and in doing so changed the perceptions of African technical talent held by a generation of global tech hiring managers.
              </p>
              <p>
                Aboyeji left Andela in 2017, before the company's highest-profile fundraising rounds and before it became a widely recognised name outside Africa's tech community. The departure was not a failure — it reflected a disposition that has characterised his entire career: a preference for building new things over managing growing ones, and a consistent willingness to move on when he believes the most important problem has shifted.
              </p>

              <h2>Building Flutterwave</h2>
              <p>
                Almost immediately after leaving Andela, Aboyeji co-founded Flutterwave with Olugbenga Agboola. The problem they identified was one that anyone who had tried to build a scalable African business knew intimately: African payments were broken. The fragmentation of payment systems across fifty-four countries — different currencies, different banking infrastructure, different mobile money networks, different regulatory environments — meant that a company trying to operate across African borders faced payments complexity that was orders of magnitude worse than anything a comparable business in Europe or North America would encounter.
              </p>
              <p>
                Flutterwave's ambition was to build the payments infrastructure layer that would allow African businesses to transact across borders as easily as businesses in the European Union. By creating a single API that handled the complexity of African payments behind the scenes, Flutterwave enabled African businesses to scale in ways that had previously required building custom payment integrations country by country. The company grew rapidly, raised hundreds of millions of dollars, achieved unicorn status and became one of the defining African fintech companies of its era.
              </p>
              <p>
                Aboyeji left Flutterwave in 2019. Again, the departure came before the company's biggest fundraises and its unicorn designation. Again, it reflected the same pattern: he had identified the problem, helped design the solution, seen the company on a clear trajectory, and was already thinking about the next thing.
              </p>

              <h2>Future Africa</h2>
              <p>
                What Aboyeji turned to after Flutterwave was a question he had been living with throughout his career in African tech: why was there so little capital available to African founders at the earliest stages, when they needed it most? The seed funding infrastructure that allows a founder in San Francisco to raise a few hundred thousand dollars on the basis of an idea and a credible founding team — the angel investor networks, the pre-seed funds, the accelerators with meaningful checks — barely existed in Africa. The consequence was that African founders with excellent ideas had to prove far more before accessing capital, and many never got capital at all.
              </p>
              <p>
                Future Africa, which Aboyeji launched in 2019, is both an investment fund and a community. It writes small checks into very early-stage African startups, and provides founders with network access, mentorship and operational support. The community aspect — a network of African founders, operators and investors who share knowledge and make introductions — is in some ways the more important innovation. Aboyeji's conviction is that what African tech needs at this stage is not just more capital but better infrastructure for the human networks through which knowledge, introductions and opportunities flow.
              </p>
              <p>
                Future Africa has backed dozens of African startups across a wide range of sectors. More important than any individual investment is the model it represents: patient, founder-aligned, community-embedded early-stage support from someone who has built at the frontier of African tech and understands what founders actually need in the earliest, most difficult stages of company building.
              </p>

              <h2>What E Represents</h2>
              <p>
                Iyinoluwa Aboyeji is not simply a successful African entrepreneur. He is a particular kind of successful African entrepreneur — one who has made explicit choices about what kind of success to pursue and why, who has consistently prioritised building new things over accumulating ownership in things already built, and who has used his platform to articulate a vision of what African tech can become.
              </p>
              <p>
                His public writing and speaking have been unusually candid about the tensions in African tech: the gap between the scale of the problems the continent faces and the scale of the solutions being built, the limits of a funding ecosystem dominated by foreign investors with limited understanding of African contexts, the challenge of building companies that serve African customers rather than simply extracting value from African markets for foreign shareholders.
              </p>
              <p>
                For the next generation of African founders — and for the Zimbabwean founders building in Harare's tech hubs, trying to understand what ambition looks like in practice — Aboyeji's career is instructive not primarily as a success story but as a demonstration that it is possible to think clearly about what African tech needs, act on that thinking, and build something that moves the needle. The lesson is not simply that he succeeded. The lesson is how he thought about what success should mean.
              </p>
            </div>

            <footer className="article-footer">
              <p>
                <Link to="/featured/andela-the-company-that-proved-african-developers-can-compete-with-anyone">
                  ← Also read: Andela — The Company That Proved African Developers Can Compete With Anyone
                </Link>
              </p>
              <p style={{ marginTop: '1rem' }}>
                <Link to="/featured/flutterwave-paystack-and-the-african-fintech-revolution">
                  ← Also: Flutterwave, Paystack and the African Fintech Revolution
                </Link>
              </p>
            </footer>
          </article>
        </div>
      </section>
    </>
  )
}
