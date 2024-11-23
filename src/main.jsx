import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AosSetup from './config/AosSetup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AosSetup/>
    <App />
  </StrictMode>,
)
