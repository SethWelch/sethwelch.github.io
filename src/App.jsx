import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Snake from './pages/Snake.jsx'

import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/snake" element={<Snake />} />
    </Routes>
  )
}
