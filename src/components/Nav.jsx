// src/components/Nav.jsx
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  const menu = [
    ['Chikoro', 'hero'],
    ['Solutions', 'models'],
    ['Research', 'video'],
    // ['Commitments', 'trustsafety'],
    ['Learn', 'mission'],
    ['News', 'featured'],
  ]

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="logo" href="/" aria-label="Scales AI logo">
          Scales<span className="slash">\</span>AI
        </a>

        <nav className={`nav__links${open ? ' open' : ''}`}>
          {menu.map(([label, id]) => (
            pathname === '/' ? (
              <a key={id} href={`#${id}`} onClick={(e) => {
                e.preventDefault()
                scrollTo(id)
              }}>
                {label}
              </a>
            ) : (
              <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            )
          ))}

          <Link to="/sales" onClick={() => setOpen(false)}>
            Sales
          </Link>
          <Link to="/api" onClick={() => setOpen(false)}>
            API
          </Link>
        </nav>

        <button
          id="hamburger"
          aria-label="Menu"
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
