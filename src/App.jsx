import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/home'

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login />} />
        {/* <Route path="/offers" element={<Offers />} />
        <Route path="/adm" element={<Admin />} /> */}
      </Routes>
    </>
  )
}

export default App
