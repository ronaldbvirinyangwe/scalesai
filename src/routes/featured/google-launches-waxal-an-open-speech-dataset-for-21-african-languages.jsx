import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'
const slug = 'google-launches-waxal-an-open-speech-dataset-for-21-african-languages'
const title = 'Google Launches WAXAL: An Open Speech Dataset for 21 African Languages'
const description =
  "Google Research Africa has released WAXAL — 11,000+ hours of speech data across 21 African languages, owned by African institutions, free to use. It could reshape how AI hears and speaks to over 100 million Africans."
const datePublished = '2026-02-03'

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

export default function GoogleWAXAL() {
  return (
    <>
      <Helmet>
        <title>{title} | Scales AI</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/featured/${slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} | Scales AI`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/featured/${slug}`} />
        <meta property="og:image" content={`${siteUrl}/assets/featured-banner.png`} />
        <meta property="og:site_name" content="Scales AI" />
        <meta property="article:published_time" content={datePublished} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Scales AI`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/assets/featured-banner.png`} />
        <meta name="twitter:creator" content="@ScalesAI_" />

        <script type="application/ld+json">{JSON.stringify(schema, null, 2)}</script>
      </Helmet>

      <section className="article-page">
        <div className="container article-container">
          <article>
            <header className="article-header">
              <span className="article-tag">AI &amp; Language</span>
              <h1>{title}</h1>
              <p className="article-meta">
                <time dateTime={datePublished}>February 3, 2026</time> &middot; Scales AI
              </p>
              <p className="article-lead">
                Google Research Africa has released WAXAL — a word taken from Wolof, meaning "to speak" — a massive open-source speech dataset covering 21 African languages, containing over 11,000 hours of audio. The dataset is free to use, owned by African partner institutions, and designed to power the next generation of AI tools that can actually hear and respond to African voices. It is one of the most consequential AI infrastructure releases for the continent in years.
              </p>
            </header>

            <div className="article-body">
              <h2>The Problem WAXAL Is Solving</h2>
              <p>
                Every modern voice AI system — from speech-to-text transcription to voice assistants to phone-based customer service bots — relies on training data: recordings of people speaking, paired with accurate transcriptions of what they said. The more data you have in a given language, the better your model performs in that language.
              </p>
              <p>
                English has hundreds of thousands of hours of this data. Mandarin has tens of thousands. Most African languages have almost none. The consequence is visible every time someone tries to use voice AI in Hausa, Luganda, Yoruba or Kikuyu and finds that the system either fails entirely or produces transcriptions full of errors.
              </p>
              <p>
                This is not a technical limitation of the AI models themselves. It is a data problem. And data problems can be solved — if someone is willing to do the unglamorous work of collecting, transcribing, verifying and releasing the recordings in a format that the research community can actually use.
              </p>
              <p>
                WAXAL is that work, done at scale, for 21 African languages at once.
              </p>

              <h2>What Is in the Dataset</h2>
              <p>
                The WAXAL dataset contains over 11,000 hours of audio across 21 languages including Hausa, Yoruba, Luganda, Acholi, Luo, Kikuyu, Swahili, Kinyarwanda and others spanning East, West and Central Africa. Of that total, approximately 1,250 hours are fully transcribed — meaning each audio clip is paired with a written text of what was said — making them immediately usable for training automatic speech recognition (ASR) models. A further 20+ hours are studio-quality recordings suitable for training text-to-speech (TTS) synthesis models, so AI can not only understand these languages but speak them back naturally.
              </p>
              <p>
                The dataset is hosted on Hugging Face under an open licence, meaning any researcher, developer or company can download it, use it and build on it without payment or permission.
              </p>

              <h2>Who Owns It — and Why That Matters</h2>
              <p>
                The most important detail about WAXAL is not the size of the dataset. It is who owns it.
              </p>
              <p>
                The data was collected in partnership with African institutions: Makerere University in Uganda, the University of Ghana, Digital Umuganda in Rwanda and other regional partners. Crucially, those partner institutions — not Google — own the dataset. Google facilitated the collection, provided the infrastructure and released it publicly, but the intellectual property resides with the African universities and organisations that contributed to building it.
              </p>
              <p>
                This design choice is significant. One of the central concerns in the debate around AI and Africa is data extraction: the worry that African voices, images, text and cultural content will be collected by foreign technology companies, used to train commercially valuable models and never returned to the communities that generated it. WAXAL is an explicit attempt to operate differently — to build AI infrastructure that belongs to Africa, not merely benefits Africa temporarily before the upstream owner decides to change its terms.
              </p>
              <p>
                Whether this model becomes a template for future AI data partnerships on the continent remains to be seen. But it sets a standard that other organisations — and other projects — will now be measured against.
              </p>

              <h2>What WAXAL Makes Possible</h2>
              <p>
                With WAXAL available, developers building for African markets can now train speech recognition models that work accurately in Yoruba, Hausa and Kikuyu — not just in English with a rough approximation of African phonetics. This opens up a range of practical applications that have been technically possible in theory but impossible in practice for lack of training data.
              </p>
              <p>
                Voice-based agricultural advisory services that work in the languages farmers actually speak. Healthcare chatbots that a patient in rural Uganda can talk to in Luganda. Educational tools — including AI tutors like Chikoro AI — that can extend voice interaction capabilities to languages beyond English and Shona. Customer service systems that don't force rural Kenyans to speak broken English to get a result. Accessibility tools that make smartphones genuinely usable for people who are not literate in a Latin-script language.
              </p>
              <p>
                Each of these use cases already has developers working on it. What they lacked was the data. WAXAL changes that.
              </p>

              <h2>The Languages Not Yet Covered</h2>
              <p>
                Africa has over 2,000 languages. WAXAL covers 21. That leaves more than 1,980 languages without meaningful speech AI coverage — including languages with tens of millions of speakers, including Zulu, Shona, Ndebele, Amharic, Oromo, Tigrinya and dozens of others.
              </p>
              <p>
                WAXAL is a beginning, not a solution. The continent's language diversity — which is simultaneously one of its greatest cultural richnesses and one of the biggest practical challenges for building AI systems that work across it — is a problem that will take years of sustained, distributed effort to address.
              </p>
              <p>
                But the approach matters. Open data, institution-owned, freely usable — if that model is replicated for Shona, Zulu, Amharic and the other major languages currently unserved, the cumulative effect will be transformative. WAXAL shows that it can be done. The question now is whether others will follow.
              </p>

              <h2>Google's Broader Africa AI Commitment</h2>
              <p>
                WAXAL is part of a larger pattern of Google's engagement with Africa's AI ecosystem. Google Research Africa, headquartered in Accra, has been running since 2019 and has produced research on language models, medical AI and agricultural technology tailored to African contexts. The WAXAL release represents perhaps the most practically impactful output of that research programme to date — not a paper, not a proof of concept, but a deployable, open dataset that developers can use right now.
              </p>
              <p>
                For Africa's AI builders, the message is unambiguous: the infrastructure gap is closing. The data that was missing is starting to arrive. The excuse of "we cannot build good voice AI for African languages because there is no training data" has become materially less true today than it was last month. What happens next depends on what Africa's developers build with it.
              </p>
            </div>

            <footer className="article-footer">
              <p>
                <Link to="/featured/why-africas-language-diversity-is-both-ais-biggest-challenge-and-biggest-opportunity">
                  ← Also read: Why Africa's Language Diversity Is Both AI's Biggest Challenge and Biggest Opportunity
                </Link>
              </p>
              <p style={{ marginTop: '1rem' }}>
                <Link to="/featured/which-african-languages-can-ai-understand-in-2026">
                  ← Also read: Which African Languages Can AI Understand in 2026?
                </Link>
              </p>
            </footer>
          </article>
        </div>
      </section>
    </>
  )
}
