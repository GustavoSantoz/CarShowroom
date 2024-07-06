import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './pages/home'

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
