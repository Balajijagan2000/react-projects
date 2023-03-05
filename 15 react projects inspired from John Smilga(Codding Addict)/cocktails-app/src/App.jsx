import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Singlecocktail from './components/Singlecocktail'

function App() {


  return (
    <Router>

        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/cocktail/:id" element={<Singlecocktail />} />
        </Routes>

    </Router>
  )
}

export default App
