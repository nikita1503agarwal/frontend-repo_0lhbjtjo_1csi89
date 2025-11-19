import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import PanelBeating from './pages/services/PanelBeating'
import SprayPainting from './pages/services/SprayPainting'
import PaintlessDentRemoval from './pages/services/PaintlessDentRemoval'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/panel-beating" element={<PanelBeating />} />
        <Route path="/services/spray-painting" element={<SprayPainting />} />
        <Route path="/services/paintless-dent-removal" element={<PaintlessDentRemoval />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
