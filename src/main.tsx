import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRoutes } from './routers/routes'
import { BrowserRouter } from 'react-router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <AppRoutes />
  </BrowserRouter>
)

postMessage({ payload: 'removeLoading' }, '*')
