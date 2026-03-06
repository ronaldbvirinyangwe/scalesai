import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import BlogHome from './components/Featured.jsx'
import ArticlePage from './pages/ArticlePage.jsx'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/featured/:slug" element={<ArticlePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
