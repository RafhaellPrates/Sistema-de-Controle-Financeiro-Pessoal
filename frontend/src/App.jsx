
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
