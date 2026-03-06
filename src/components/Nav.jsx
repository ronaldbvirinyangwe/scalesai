import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://scalesai.online'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Scales AI Blog Navigation",
    itemListElement: [
      { "@type": "SiteNavigationElement", position: 1, name: "Blog", url: siteUrl },
      { "@type": "SiteNavigationElement", position: 2, name: "Chikoro AI", url: "https://chikoro-ai.com" },
    ],
  }

  return (
    <header className="nav" role="banner">
      <Helmet>
        <title>Scales AI Blog — AI, Education &amp; Africa</title>
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta
          name="description"
          content="The Scales AI blog covers AI in education, Zimbabwe's tech scene and responsible AI development across Africa."
        />
        <script type="application/ld+json">
          {JSON.stringify(navSchema, null, 2)}
        </script>
      </Helmet>

      <div className="container nav__inner">
        {/* Brand */}
        <Link
          className="logo"
          to="/"
          aria-label="Scales AI Blog — home"
          title="Scales AI Blog"
        >
          Scales<span className="slash">\</span>AI
          <span className="nav__blog-label">Blog</span>
        </Link>


        {/* Mobile toggle */}
        <button
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          className={open ? 'open' : ''}
          onClick={() => {
            setOpen(o => !o)
            document.body.classList.toggle('no-scroll')
          }}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
