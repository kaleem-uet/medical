import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeCustomization from './themes/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeCustomization>
    <App />
    </ThemeCustomization>

  </React.StrictMode>,
)
