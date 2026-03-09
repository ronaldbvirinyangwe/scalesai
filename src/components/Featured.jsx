import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'

// All posts — newest first
const posts = [
  {
    title: "Ronald Bvirinyangwe: The Zimbabwean Student Who Built an AI Tutor for His Country",
    category: "Startup Stories",
    date: "Mar 9, 2026",
    excerpt: "Most people who see a gap in the education system write about it. Ronald Bvirinyangwe built a solution. From Harare, he created Chikoro AI — Zimbabwe's first AI tutor that works in Shona — and changed what AI-assisted learning looks like for an entire country.",
  },
  {
    title: "Why Africa's Language Diversity Is Both AI's Biggest Challenge and Biggest Opportunity",
    category: "Everyday Life",
    date: "Mar 9, 2026",
    excerpt: "Africa has over 2,000 languages. Most AI systems work in English or French. Bridging this gap is the hardest NLP challenge in the world — and solving it would unlock AI for a billion more people.",
  },
  {
    title: "How African Farmers Are Using Satellites and AI to Fight Climate Change",
    category: "Everyday Life",
    date: "Mar 9, 2026",
    excerpt: "Africa's smallholder farmers bear the cost of a climate crisis they did not cause. Satellite imagery and AI are giving them tools to adapt — early warnings, soil health data and precision advice — that no previous generation of farmers has had.",
  },
  {
    title: "AI in African Agriculture: From Soil Tests to Market Prices",
    category: "Everyday Life",
    date: "Mar 9, 2026",
    excerpt: "Agriculture employs 60% of Africa's workforce. AI is changing what farmers can know about their soil, their crops, the weather and the markets — and it is reaching them on the phones they already own.",
  },
  {
    title: "How AI Is Changing Healthcare for Rural Africans",
    category: "Everyday Life",
    date: "Mar 9, 2026",
    excerpt: "Africa has 25% of the world's disease burden and 3% of its health workers. AI cannot fix this ratio — but it is changing what healthcare looks like in rural communities that previously had almost none.",
  },
  {
    title: "Africa's Female AI Founders: The Women Building the Continent's Tech Future",
    category: "Startup Stories",
    date: "Mar 9, 2026",
    excerpt: "Across Nigeria, Kenya, South Africa and beyond, a generation of African women founders are building AI companies that solve real African problems — in mental health, financial inclusion, agriculture and more.",
  },
  {
    title: "Flutterwave, Paystack and the African Fintech Revolution",
    category: "Startup Stories",
    date: "Mar 9, 2026",
    excerpt: "Two Nigerian startups rewrote the rules of African payments — building the infrastructure that allowed a continent's digital economy to take off. Here is how Flutterwave and Paystack changed Africa forever.",
  },
  {
    title: "Andela: The Company That Proved African Developers Can Compete With Anyone",
    category: "Startup Stories",
    date: "Mar 9, 2026",
    excerpt: "Andela was founded on a bet that African engineers, with the right training, could work on globally competitive teams. It won that bet — and changed how the world thinks about African technical talent.",
  },
  {
    title: "M-Pesa at 20: How Kenya's Mobile Money Giant Changed Africa Forever",
    category: "Startup Stories",
    date: "Mar 9, 2026",
    excerpt: "M-Pesa launched in 2007 as a simple way to transfer money by text message. Twenty years on, it has transformed financial inclusion across Africa and written the playbook for how a continent leapfrogs broken infrastructure.",
  },
  {
    title: "What ZIMSEC Reform Could Look Like in an AI Age",
    category: "Education",
    date: "Mar 9, 2026",
    excerpt: "Zimbabwe's examination system has served the country for decades. But a world where AI is reshaping what skills matter demands a new conversation about what ZIMSEC should become — from computational thinking to multilingual assessment.",
  },
  {
    title: "The African Students Using AI to Get Into Global Universities",
    category: "Education",
    date: "Mar 9, 2026",
    excerpt: "Getting into Oxford, MIT or the University of Toronto from a school in Harare or Lagos is harder than it looks. AI is changing how talented African students close the gap — from personal statement feedback to scholarship research to interview practice.",
  },
  {
    title: "How AI Is Helping Teachers in Overcrowded African Classrooms",
    category: "Teachers",
    date: "Mar 9, 2026",
    excerpt: "Sixty students, one teacher, no teaching assistant. AI tools are not replacing these teachers — they are giving them something they have never had: a way to differentiate instruction at scale.",
  },
  {
    title: "Why Zimbabwe Has One of Africa's Highest Literacy Rates — and What Threatens It",
    category: "Education",
    date: "Mar 9, 2026",
    excerpt: "Zimbabwe's literacy rate is among the highest in sub-Saharan Africa — a legacy of post-independence investment in education. But infrastructure decay, teacher shortages and brain drain are creating new pressures. AI is emerging as one response.",
  },
  {
    title: "What Sovereign AI Means — and Why Africa Needs It",
    category: "Future of Technology",
    date: "Mar 9, 2026",
    excerpt: "Sovereign AI is the idea that a country should own and control the AI that shapes its citizens' lives. For Africa, it is not just a principle — it is a question of who decides what AI does, in whose language, in service of whose values.",
  },
  {
    title: "Africa's AI Talent Pipeline: Where the Next Generation of Engineers Is Coming From",
    category: "Future of Technology",
    date: "Mar 9, 2026",
    excerpt: "Africa needs millions of AI engineers over the next two decades. The bootcamps, competitions and communities building that talent — from Andela to ALX to Zindi to Deep Learning Indaba — are the continent's most consequential investment.",
  },
  {
    title: "How African Governments Are Responding to AI — Country by Country",
    category: "Future of Technology",
    date: "Mar 9, 2026",
    excerpt: "Rwanda is building sovereign AI infrastructure. Kenya created the regulatory environment that attracted Google. South Africa has the continent's most sophisticated AI ethics framework. Here is where every major African country stands.",
  },
  {
    title: "Why Africa Will Be the World's Biggest AI Market by 2040",
    category: "Future of Technology",
    date: "Mar 9, 2026",
    excerpt: "By 2040, Africa will have the world's largest workforce, youngest population and fastest-growing middle class. The continent the tech industry ignored for decades is becoming its most important future market — and AI is at the centre of it.",
  },
  {
    title: "The African AI Companies You've Never Heard Of — But Should Know",
    category: "Future of Technology",
    date: "Mar 9, 2026",
    excerpt: "Beyond M-Pesa and Flutterwave, a new generation of African AI companies is quietly solving the continent's hardest problems — from diagnosing birth asphyxia by sound to delivering blood by drone. These are the companies building technology the rest of the world will copy.",
  },
  {
    title: "How to Talk to Your Child About AI",
    category: "Parents",
    date: "Mar 9, 2026",
    excerpt: "Your child is already using AI — whether you know it or not. A practical guide for parents on how to start the conversation, what to say, what to watch for, and how to help your child use AI in a way that helps them grow.",
  },
  {
    title: "How Africa Is Leapfrogging in AI",
    category: "Future of Technology",
    date: "Mar 9, 2026",
    excerpt: "Africa didn't wait for the world to build AI for it. From healthcare to agriculture to education, the continent is building AI solutions designed for African problems — and leapfrogging older technology entirely.",
  },
  {
    title: "ZimSmart Villages: The Project Bringing AI and Telemedicine to Rural Zimbabwe",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Two-thirds of Zimbabwe's population lives in rural areas — largely left out of the technology revolution. ZimSmart Villages is a coordinated programme bringing internet, telemedicine, AI tutoring and smart agriculture to the countryside.",
  },
  {
    title: "Paynow: The Payment Gateway Powering Zimbabwe's Digital Economy",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Behind most digital transactions in Zimbabwe sits Paynow — the payment infrastructure connecting online businesses to EcoCash, Zimswitch and every major bank. Here is who they are and why they matter.",
  },
  {
    title: "Vaya Technologies: How Econet Built Zimbabwe's Super-App",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Vaya started as a ride-hailing app. Today it handles rides, deliveries, remittances, payments and logistics across Zimbabwe. Here is how Econet built the country's most ambitious super-app — and where AI fits in.",
  },
  {
    title: "Kenya vs Nigeria vs South Africa vs Zimbabwe: Which Country Is Winning the EdTech Race?",
    category: "Future of Technology",
    date: "Mar 8, 2026",
    excerpt: "Four African countries, four very different EdTech ecosystems. A detailed comparison of who is leading, what each country is building in education technology, and what it means for students across the continent.",
  },
  {
    title: "Top African Countries Leading the AI Race in 2026",
    category: "Future of Technology",
    date: "Mar 8, 2026",
    excerpt: "Kenya, Nigeria, South Africa, Egypt, Rwanda — and a surprising entry from Zimbabwe. A country-by-country breakdown of who is building the strongest AI ecosystems on the continent and why it matters.",
  },
  {
    title: "How AI Is Changing STEM Education in Africa",
    category: "Future of Technology",
    date: "Mar 8, 2026",
    excerpt: "Africa has the youngest population on earth. Whether that becomes a dividend or a crisis depends on STEM education. AI is now changing what is possible — from personalised maths tutors to virtual laboratories in schools that have none.",
  },
  {
    title: "Chikoro AI vs Khan Academy: Which Is Better for Zimbabwe Students?",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "Khan Academy is free, globally trusted and used by millions. Chikoro AI is built for the ZIMSEC curriculum in Shona and English. For Zimbabwean students, the choice is not obvious — here is an honest comparison.",
  },
  {
    title: "How to Use AI to Pass ZIMSEC A-Level Exams",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "A-Level exams test your thinking, not just your memory. A subject-by-subject guide for Zimbabwe students on how to use AI tools to revise smarter, sharpen your arguments and walk into your exams ready.",
  },
  {
    title: "Diaspora Parents: How to Support Your Child's Education in Zimbabwe With AI",
    category: "Parents",
    date: "Mar 8, 2026",
    excerpt: "You are in the UK, South Africa, or the United States. Your child is in Zimbabwe studying for ZIMSEC exams. Here is how AI tools are changing what remote parental support looks like.",
  },
  {
    title: "Should Schools in Zimbabwe Allow AI? A Teacher's Guide",
    category: "Teachers",
    date: "Mar 8, 2026",
    excerpt: "AI tools are already in your students' pockets. The question is no longer whether students will use AI — it is whether schools will respond with a policy that helps students use it well, or a ban that drives it underground.",
  },
  {
    title: "How to Improve Your English With AI",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "For millions of Zimbabwean students, English is a second language — but it is the language of every exam. AI tools can now give you a personal English tutor available 24 hours a day.",
  },
  {
    title: "Best Free AI Tools for Zimbabwe Students in 2026",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "You do not need to pay for expensive software to use AI for your studies. Here are the best free AI tools available to Zimbabwe students right now — what each one does and which tasks it is best suited for.",
  },
  {
    title: "How Africa Leapfrogged With Mobile Money — and Is Doing It Again With AI",
    category: "Future of Technology",
    date: "Mar 8, 2026",
    excerpt: "Africa skipped landlines and went straight to mobile phones. It skipped bank branches and went straight to mobile money. Now it is skipping legacy AI infrastructure and building something entirely its own.",
  },
  {
    title: "Is Using AI for Homework Cheating? A Guide for Zimbabwe Students",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "The question every student in Zimbabwe is asking. The answer depends entirely on how you use AI — there is a clear line between using AI to understand and using it to deceive, and that line matters enormously.",
  },
  {
    title: "Chikoro AI vs ChatGPT: Which Is Better for Zimbabwe Students?",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "ChatGPT is one of the most powerful AI tools in the world. Chikoro AI is built specifically for the ZIMSEC curriculum. For Zimbabwean students, the choice matters — here is an honest comparison.",
  },
  {
    title: "Chikoro AI vs Akello: Which EdTech Platform Is Right for Zimbabwean Students?",
    category: "Education",
    date: "Mar 8, 2026",
    excerpt: "Two Zimbabwean EdTech platforms, two very different approaches. One is a structured digital curriculum backed by Econet. The other is a conversational AI tutor in Shona and English. Here is an honest comparison.",
  },
  {
    title: "Cassava Technologies: How a Zimbabwean Billionaire Is Building Africa's First AI Factory",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Strive Masiyiwa fought the Zimbabwean government for five years to get a phone licence. Now he is partnering with NVIDIA on a $720 million bet to build Africa's AI infrastructure — and ensure the continent owns its AI future.",
  },
  {
    title: "BigDot.ai: The Startup Using Blockchain to Help Zimbabwe's SMEs Go Digital",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Most of Zimbabwe's small businesses still run on cash and notebooks. BigDot.ai is building blockchain-powered checkout and financial management tools to bring them into the digital economy — and Visa just backed them.",
  },
  {
    title: "BatsiHealth: The Smart Kiosk Startup Bringing Doctors to Rural Zimbabwe",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "In rural Zimbabwe, the nearest doctor may be hours away. BatsiHealth is placing smart telemedicine kiosks in villages and agent shops, letting patients consult a doctor via video link without leaving their community.",
  },
  {
    title: "Farmhut: The Zimbabwean Agritech Startup Connecting Farmers to Fair Markets",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Smallholder farmers grow most of Zimbabwe's food but earn the least from it. Farmhut is using AI and a WhatsApp chatbot to connect 140,000 rural farmers directly to buyers, fair prices and financial services.",
  },
  {
    title: "NeedEnergy: How a Bulawayo Startup Is Using AI to Solve Zimbabwe's Power Crisis",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "Zimbabwe loses up to 18 hours of power a day in some areas. NeedEnergy is using AI-coordinated solar microgrids and peer-to-peer energy trading to fight back — and the World Energy Council has taken notice.",
  },
  {
    title: "ChatCash: The Zimbabwean Startup Turning WhatsApp Into a Business Operating System",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "A Harare startup has built AI-powered commerce directly inside WhatsApp — letting businesses sell, collect payments and manage customers in Shona and Ndebele, on any phone, with no app required.",
  },
  {
    title: "Hurudza AI: The Startup Bringing Real-Time Farm Advice to Zimbabwean Farmers",
    category: "News",
    date: "Mar 8, 2026",
    excerpt: "A Zimbabwean startup is using voice AI to deliver real-time agricultural advice to farmers — in Shona, via SMS or phone call, on a 2G network. Here is what Hurudza AI is building.",
  },
  {
    title: "50+ AI Startups in Africa: The Ultimate 2026 Sectoral Review",
    category: "News",
    date: "Mar 6, 2026",
    excerpt: "Mapping the AI Frontier: A Sectoral Review of 50+ African Startups",
  },
  {
    title: "How AI is Powering Africa’s New Industrial Revolution",
    category: "News",
    date: "Mar 6, 2026",
    excerpt: "A deep dive into the 50 most innovative AI startups across the continent, transforming education, agriculture, healthcare and finance in 2026.",
  },
  {
    title: "AI Startups Africa 2026",
    category: "News",
    date: "Mar 6, 2026",
    excerpt: "The Silicon Savannah Rising: 50 AI Companies Shaping Africa's Future — from education to agriculture, healthcare to finance. A comprehensive list of the startups transforming the continent with AI in 2026.",
  },
  {
    title: "How to Set Homework That Students Actually Complete",
    category: "Teachers",
    date: "Mar 6, 2026",
    excerpt: "Low submission rates are rarely about laziness. A practical guide to designing homework students engage with — and how AI tools are transforming completion rates in African schools.",
  },
  {
    title: "How to Identify Students Who Are Falling Behind",
    category: "Teachers",
    date: "Mar 6, 2026",
    excerpt: "Falling behind rarely announces itself dramatically. Here are the warning signs to watch for — and how AI can flag at-risk students automatically before the gap becomes a crisis.",
  },
  {
    title: "Which African Languages Can AI Understand in 2026?",
    category: "Future of Technology",
    date: "Mar 6, 2026",
    excerpt: "Swahili, Shona, Ndebele, Zulu — how well does AI actually handle Africa's languages today? A breakdown of what's possible, what's still missing and which platforms are leading the way.",
  },
  {
    title: "How Parents Can Track Their Child's Progress at School",
    category: "Parents",
    date: "Mar 6, 2026",
    excerpt: "Most parents only hear about school problems at report time. A guide to staying informed throughout the term — including the new tools giving parents real-time visibility into their child's learning.",
  },
  {
    title: "How to Mark Student Homework Faster and Give Better Feedback",
    category: "Teachers",
    date: "Mar 5, 2026",
    excerpt: "The average secondary school teacher marks hundreds of pieces of work per week. Here are proven strategies to reduce that burden while actually improving the feedback students receive.",
  },
  {
    title: "How to Write a Scheme of Work for African Schools",
    category: "Teachers",
    date: "Mar 5, 2026",
    excerpt: "A step-by-step guide for secondary school teachers in Africa on building an effective scheme of work — including how AI tools can cut planning time dramatically each term.",
  },
  {
    title: "How to Prepare for ZIMSEC O-Level Exams with AI",
    category: "Education",
    date: "Mar 5, 2026",
    excerpt: "A practical step-by-step guide for Zimbabwe students: build a revision plan, tackle subjects with AI and practice with past papers using Chikoro AI.",
  },
  {
    title: "AI Homework Help in Shona — Chikoro AI Explained",
    category: "Future of Technology",
    date: "Mar 5, 2026",
    excerpt: "Chikoro AI is the first AI tutor offering homework help in Shona. Learn how mother-tongue learning improves results and how to use it today.",
  },
  {
    title: "How Zimbabwean Teachers Are Using AI to Plan Lessons",
    category: "Education",
    date: "Mar 5, 2026",
    excerpt: "From lesson plans to differentiated worksheets, Zimbabwean teachers are saving hours each week with AI. Here is exactly how they are doing it.",
  },
]

// All unique categories for the filter
const allCategories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[…\u2026]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const categoryColors = {
  'Education':            { bg: '#EBF5FB', color: '#1A5276' },
  'Future of Technology': { bg: '#E8F8F5', color: '#1E8449' },
  'Teachers':             { bg: '#FEF5E7', color: '#A04000' },
  'Parents':              { bg: '#F5EEF8', color: '#6C3483' },
  'Model Update':         { bg: '#F4ECF7', color: '#6C3483' },
  'Research':             { bg: '#FEF9E7', color: '#B7950B' },
  'Deployment':           { bg: '#F0F3F4', color: '#17202A' },
  'Trust & Safety':       { bg: '#FDEDEC', color: '#C0392B' },
  'News':                 { bg: '#F0F3F4', color: '#2C3E50' },
}

export default function BlogHome() {
  const [activeCategory, setActiveCategory] = useState('All')

  // ── Read tracking (persisted in localStorage) ──────────────────────
  const [readSlugs, setReadSlugs] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem('scalesai_read') || '[]'))
    } catch {
      return new Set()
    }
  })

  const markAsRead = useCallback((slug) => {
    setReadSlugs(prev => {
      if (prev.has(slug)) return prev
      const next = new Set(prev)
      next.add(slug)
      try { localStorage.setItem('scalesai_read', JSON.stringify([...next])) } catch {}
      return next
    })
  }, [])

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Scales AI Blog",
    url: siteUrl,
    description: "AI in education, Chikoro AI updates, research and Africa's technology landscape.",
    publisher: {
      "@type": "Organization",
      name: "Scales AI",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/scales.png` },
    },
    blogPost: posts.map(p => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: new Date(p.date).toISOString(),
      url: `${siteUrl}/featured/${slugify(p.title)}`,
      articleSection: p.category,
      description: p.excerpt,
    })),
  }

  return (
    <main className="blog-home" aria-label="Blog posts">
      <Helmet>
        <title>Scales AI Blog — AI, Education &amp; Africa</title>
        <meta
          name="description"
          content="The Scales AI blog: AI in education, responsible AI research and technology across Africa."
        />
        <link rel="canonical" href={siteUrl} />
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema, null, 2)}
        </script>
      </Helmet>

      {/* Hero banner */}
      <section className="blog-hero">
        <div className="container">
          <span className="blog-hero__eyebrow">Scales AI</span>
          <h1 className="blog-hero__title">
            Ideas on AI,<br />
            Education &amp; Africa
          </h1>
          <p className="blog-hero__sub">
            Practical guides for teachers, students and parents navigating AI in African schools.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="blog-filters" aria-label="Filter posts by category">
        <div className="container">
          <div className="blog-filters__pills">
            {allCategories.map(cat => (
              <button
                key={cat}
                className={`filter-pill${activeCategory === cat ? ' filter-pill--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid" aria-live="polite">
            {filtered.map((post, index) => {
              const slug = slugify(post.title)
              const tagStyle = categoryColors[post.category] || { bg: '#F0F3F4', color: '#2C3E50' }
              const isFeatured = index === 0
              const isRead = readSlugs.has(slug)

              return (
                <article
                  key={slug}
                  className={`blog-card${isRead ? ' blog-card--read' : ''}`}
                >
                  {/* Animated accent bar on hover */}
                  <div className="blog-card__accent" aria-hidden="true" />

                  <Link
                    to={`/featured/${slug}`}
                    className="blog-card__link"
                    aria-label={`Read: ${post.title}`}
                    onClick={() => markAsRead(slug)}
                  >
                    {isFeatured ? (
                      /* ── Featured (first) card layout ── */
                      <>
                        <div className="blog-card__content">
                          <div className="blog-card__body">
                            <div className="blog-card__tags-row">
                              <span
                                className="blog-card__tag"
                                style={{ background: tagStyle.bg, color: tagStyle.color }}
                              >
                                {post.category}
                              </span>
                              <span className="blog-card__new-badge">New</span>
                            </div>
                            <h2 className="blog-card__title">{post.title}</h2>
                            <p className="blog-card__excerpt">{post.excerpt}</p>
                          </div>
                          <footer className="blog-card__footer">
                            <time
                              className="blog-card__date"
                              dateTime={new Date(post.date).toISOString()}
                            >
                              {post.date}
                            </time>
                            <span className="blog-card__read">Read</span>
                          </footer>
                        </div>
                        {/* Side panel — visible only at ≥900 px via CSS */}
                        <div className="blog-card__side">
                          <span className="blog-card__side-label">Latest</span>
                          <p className="blog-card__side-date">{post.date}</p>
                          {isRead && (
                            <p className="blog-card__side-read">✓ You've read this</p>
                          )}
                        </div>
                      </>
                    ) : (
                      /* ── Regular card layout ── */
                      <>
                        <div className="blog-card__body">
                          <span
                            className="blog-card__tag"
                            style={{ background: tagStyle.bg, color: tagStyle.color }}
                          >
                            {post.category}
                          </span>
                          <h2 className="blog-card__title">{post.title}</h2>
                          <p className="blog-card__excerpt">{post.excerpt}</p>
                        </div>
                        <footer className="blog-card__footer">
                          <time
                            className="blog-card__date"
                            dateTime={new Date(post.date).toISOString()}
                          >
                            {post.date}
                          </time>
                          <span className="blog-card__read">Read</span>
                        </footer>
                      </>
                    )}
                  </Link>
                </article>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <p className="blog-empty">No posts in this category yet. Check back soon.</p>
          )}
        </div>
      </section>
    </main>
  )
}
