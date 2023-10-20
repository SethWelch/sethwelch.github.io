import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppBar from './components/AppBar.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: '#27272A',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#2b2f32',
        },
      },
    },
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

const selectedTheme = localStorage.getItem('theme')

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider
    theme={selectedTheme && selectedTheme === 'light' ? lightTheme : darkTheme}
  >
    <React.StrictMode>
      <BrowserRouter>
        <CssBaseline />
        <AppBar />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
)
