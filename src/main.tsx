import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles'
import CountryProvider from './store'
import AppRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountryProvider>
      <GlobalStyles />
      <AppRoutes />
    </CountryProvider>
  </React.StrictMode>,
)
