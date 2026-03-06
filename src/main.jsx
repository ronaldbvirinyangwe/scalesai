import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')   // ← pass your actual root element here
).render(
  <HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </HelmetProvider>
)
