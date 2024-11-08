import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthPrivider } from './context/AuthPrivider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPrivider>

    <App />
    </AuthPrivider>
  </StrictMode>,
)
