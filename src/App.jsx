import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Models from './components/Models.jsx'
import VideoBlock from './components/VideoBlock.jsx'
import Mission from './components/Mission.jsx'
import Featured from './components/Featured.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'

import Genesis2Page from './pages/Genesis2Page.jsx'
import ExodusPage   from './pages/ExodusPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import SalesPage from './pages/SalesPage.jsx'
import SupportCenter from './pages/SupportCenter.jsx'
import APIDocs from './pages/api.jsx'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* Home “landing” route: puts Hero→CtaBand in here */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Models />
              <VideoBlock />
              <Mission />
              <Featured />
              <CtaBand />
            </>
          }
        />

        {/* Model detail pages */}
        <Route path="/genesis2" element={<Genesis2Page />} />
        <Route path="/exodus"   element={<ExodusPage />} />
         <Route path="/featured/:slug" element={<ArticlePage />} />
         <Route path="/sales" element={<SalesPage />} />
         <Route path="/support" element={<SupportCenter />} />
         <Route path="/api" element={<APIDocs />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
