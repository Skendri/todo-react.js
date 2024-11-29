import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const letters = document.querySelectorAll(".letter");
letters.forEach((letter, index) => {
  letter.computedStyleMap.setProperty('--i', index)
} )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)
