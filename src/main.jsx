import React from 'react'
import ReactDOM from 'react-dom/client'

import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import '@fontsource/permanent-marker'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
)
