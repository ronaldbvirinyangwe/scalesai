import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'

// All posts — newest first
const posts = [
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
    excerpt: "Smallholder farmers grow most of Zimbabwe's food but earn the least from it. Farmhut is using AI and a WhatsApp chatbot to connect 140,000 rural farmers directly to buyers, fair prices, and financial services.",
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
    excerpt: "A Harare startup has built AI-powered commerce directly inside WhatsApp — letting businesses sell, collect payments, and manage customers in Shona and Ndebele, on any phone, with no app required.",
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
    excerpt: "Swahili, Shona, Ndebele, Zulu — how well does AI actually handle Africa's languages today? A breakdown of what's possible, what's still missing, and which platforms are leading the way.",
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
    excerpt: "A practical step-by-step guide for Zimbabwe students: build a revision plan, tackle subjects with AI, and practice with past papers using Chikoro AI.",
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
    description: "AI in education, Chikoro AI updates, research, and Africa's technology landscape.",
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
