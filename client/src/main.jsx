import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Global from './hoc/Global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Global>
    <App />
    </Global>
    </BrowserRouter>
  </React.StrictMode>,
)
