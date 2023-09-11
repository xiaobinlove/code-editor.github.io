import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css'
import 'virtual:windi.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
