import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <div className='absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_90%_at_50%_0%,rgba(0,135,45,0.32)_0,rgba(0,135,45,0.04)_50%,rgba(0,135,45,0.03)_100%)]'>
    <App />
  </div>
  // </StrictMode>,
)
