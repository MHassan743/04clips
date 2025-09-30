import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GhostHost from './GhostHost.jsx'
import Credits from './Credits.jsx'
import PowerPod from './Powerpod.jsx'
import Portfolio from './Portfolio.jsx'
import ClientSuccess from './ClientSuccess.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>  
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ghosthost" element={<GhostHost />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/powerpod" element={<PowerPod />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/client-success" element={<ClientSuccess />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
