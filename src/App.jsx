import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/home'
import Admin from './pages/admin'
import Offers from './pages/offers'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adm" element={<Admin />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
