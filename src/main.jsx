import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Services from './Services.jsx'
import Portfolio from './Portfolio.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Services/>
    <Portfolio/>
    <Footer/>
  </React.StrictMode>,
)
