import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'
const slug = 'strive-masiyiwa-the-man-who-built-africas-biggest-tech-empire-from-zimbabwe'
const title = "Strive Masiyiwa: The Man Who Built Africa's Biggest Tech Empire From Zimbabwe"
const description =
  "Strive Masiyiwa fought a government, survived bankruptcy and built Econet Wireless into one of Africa's most consequential technology companies. His story is the defining entrepreneurial narrative of modern Zimbabwe."
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

export default function StriveMasiyiwa() {
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
              <span className="article-tag">Zimbabwe Deep Dives</span>
              <h1>{title}</h1>
              <p className="article-meta">
                <time dateTime={datePublished}>March 9, 2026</time> &middot; Scales AI
              </p>
              <p className="article-lead">
                In the mid-1990s, Strive Masiyiwa applied for a licence to operate a mobile telephone network in Zimbabwe. The government said no. He went to court. The government said no again. He went to a higher court. The government threatened him, pressured his family and made clear that what he was attempting was not going to be permitted. He kept going. Five years of litigation later, in 1998, the Supreme Court of Zimbabwe ruled in his favour. Econet Wireless launched. Within a decade it was the largest telecoms company in Zimbabwe and Masiyiwa had begun building one of Africa's most expansive technology empires. His story is not just a business story. It is a story about what it takes to build something real in a country that does not make it easy.
              </p>
            </header>

            <div className="article-body">
              <h2>The Beginning: Engineering and Faith</h2>
              <p>
                Strive Masiyiwa was born in 1961 in what was then Rhodesia. He grew up partly in the UK, where his family moved to escape the restrictions of the Rhodesian regime and studied electrical engineering at the University of Wales. He returned to Zimbabwe after independence — a young, qualified engineer in a country full of reconstruction ambitions and technological possibility.
              </p>
              <p>
                He worked first in the military, then founded an engineering company, Retrofit, in the early 1990s that provided telecommunications infrastructure services. It was through this work that he understood, viscerally, the bottleneck that fixed-line infrastructure represented for Zimbabwe's development. The state telecoms monopoly, ZPTC, controlled all telephone connections and had neither the resources nor the incentive to extend service to the majority of Zimbabweans. Mobile technology offered a way around this bottleneck. Masiyiwa decided to build it.
              </p>
              <p>
                His faith — he is a deeply committed Christian — is woven through his account of this period. He has spoken extensively about how his religious conviction sustained him through years of government opposition when the rational calculation would have been to give up. Whether one shares that faith or not, the psychological portrait it illuminates is important: this was not a man who was going to stop because the obstacles were large.
              </p>

              <h2>The Five-Year Fight</h2>
              <p>
                The Zimbabwean government's opposition to Econet was not simply bureaucratic. There were personal threats. There were attempts to have Masiyiwa's banking relationships severed. There were interventions designed to make him understand that certain people in power did not want him to succeed. He has been careful in public about the specific details, but the broad outline is documented: he fought a government that controlled every lever it needed to destroy him and he won through the courts.
              </p>
              <p>
                The constitutional argument that ultimately prevailed was about freedom of expression. Masiyiwa's legal team argued, successfully, that the state monopoly on telecommunications was an unconstitutional restriction on Zimbabweans' right to communicate freely. It was a novel legal strategy and it worked — not just for Econet, but for telecommunications liberalisation across the country.
              </p>
              <p>
                The five-year fight also nearly bankrupted him. Retrofit, which had been funding the legal battle, came under severe financial pressure. His family's savings were consumed. He has spoken about periods when he was not sure how he would pay his legal team. The eventual victory came at personal and financial cost that most people would have found prohibitive long before the five-year mark.
              </p>

              <h2>Building Econet</h2>
              <p>
                Econet launched in 1998 and grew rapidly in Zimbabwe's newly liberalised telecommunications market. But Zimbabwe's economic collapse under Robert Mugabe — hyperinflation, land seizures, the disintegration of formal business infrastructure — meant that the domestic market Masiyiwa had fought to serve was itself being destroyed. He made a critical decision: expand beyond Zimbabwe, across Africa and build the continental scale that would make the business resilient to any single country's problems.
              </p>
              <p>
                The Econet Group today spans telecoms, financial services, media, education technology and energy across over a dozen African countries, with significant operations in Zimbabwe, South Africa, Botswana, Lesotho and beyond. EcoCash, the mobile money platform launched in Zimbabwe in 2011, became the dominant digital payments infrastructure in Zimbabwe and a lifeline during the country's cash crises. Cassava Technologies, the Group's digital services arm, operates data centres, cloud platforms and AI infrastructure across Africa. Kwesé TV was a pan-African satellite broadcasting service. Liquid Telecom provides fibre infrastructure connecting major African cities.
              </p>
              <p>
                Each of these ventures represents a bet on African infrastructure at a time when most international investors were not making those bets. Masiyiwa's model has been consistent: identify the infrastructure Africa needs, build it and trust that the continent's growth will eventually reward the investment. That thesis has been broadly vindicated.
              </p>

              <h2>The Philanthropist and the Education Mission</h2>
              <p>
                Masiyiwa's wealth — he is among the wealthiest people in Africa — has been directed with unusual intentionality toward education. The Higherlife Foundation, established with his wife Tsitsi Masiyiwa, has provided scholarships and support to over 250,000 young Zimbabweans, covering school fees, university costs and professional development for students whose families could not otherwise afford them.
              </p>
              <p>
                The Foundation's work is deeply personal. Masiyiwa has spoken about his own experience of receiving support at critical moments in his education — attending school in the UK, accessing opportunities that would not have been available in Zimbabwe — and his determination to provide similar pathways for Zimbabwean young people who have the capability but not the resources. The scale of the Foundation's investment in Zimbabwean education is genuinely significant: a quarter of a million young people whose educational trajectories were changed.
              </p>
              <p>
                Tsitsi Masiyiwa's role in the Foundation and in Zimbabwe's broader education conversation deserves specific recognition. She has been an active public voice on education policy, girls' education and the integration of technology in Zimbabwean schools — advocacy that has influenced not just the Foundation's programmes but the broader policy environment.
              </p>

              <h2>Econet, AI and What Comes Next</h2>
              <p>
                Cassava Technologies — the Econet Group subsidiary focused on digital infrastructure — has made AI one of its explicit strategic priorities. The rationale is straightforward: data centres and cloud infrastructure are the physical substrate that AI runs on. Africa needs AI infrastructure and Cassava is building it.
              </p>
              <p>
                The Distributed Compute Africa initiative, which Cassava has championed, is designed to bring GPU compute — the hardware that AI model training and inference requires — to African data centres rather than forcing African organisations to rely entirely on hyperscalers in Europe and the United States. This matters for the sovereign AI argument: an African organisation that runs its AI workloads on African infrastructure, owned and operated by an African company, has a different relationship to its data and its AI systems than one entirely dependent on foreign cloud providers.
              </p>
              <p>
                Masiyiwa himself has become an increasingly prominent voice on Africa's AI future, sitting on global AI governance boards and speaking at international forums about the continent's stake in how AI develops. His perspective is grounded in four decades of building technology infrastructure in Africa and watching the continent be repeatedly excluded from the decisions that shaped the technologies it was then given no choice but to use. The AI transition, he has argued, is Africa's chance to be a participant from the beginning rather than an afterthought at the end.
              </p>

              <h2>What His Story Means for Zimbabwe</h2>
              <p>
                Strive Masiyiwa is sometimes discussed as a Zimbabwean who succeeded despite Zimbabwe — as if his achievement happened in spite of his country of origin rather than in relationship to it. This framing misses something important. Masiyiwa's deepest commitments — to Zimbabwean education, to Zimbabwean connectivity, to African technology infrastructure — are not separable from his Zimbabwean identity. He fought for the right to build in Zimbabwe, stayed connected to Zimbabwe through decades of the country's worst economic period and has directed more wealth back into Zimbabwe than almost any figure in the country's post-independence history.
              </p>
              <p>
                His story is the answer to a question that Zimbabwean young people ask with increasing urgency: can you build something world-class from here? The answer, which Masiyiwa's life represents, is yes — but it will cost you something, it will require more persistence than you expect and it will require you to fight for the right to build in a system that is not designed to support you. That is not a comfortable answer. It is an honest one and from Masiyiwa, it carries the weight of proof.
              </p>
            </div>

            <footer className="article-footer">
              <p>
                <Link to="/featured/cassava-technologies-how-a-zimbabwean-billionaire-is-building-africas-first-ai-factory">
                  ← Also read: Cassava Technologies — How a Zimbabwean Billionaire Is Building Africa's First AI Factory
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
