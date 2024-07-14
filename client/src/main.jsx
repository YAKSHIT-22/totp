import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Global from './hoc/Global.jsx'
import {NextUIProvider} from '@nextui-org/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <BrowserRouter>
    <Global>
    <App />
    </Global>
    </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
