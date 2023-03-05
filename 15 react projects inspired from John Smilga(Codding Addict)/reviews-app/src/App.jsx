import { useState } from 'react'
import Review from './Review'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <header>
          <h1>Our Reviews</h1>
          <div></div>
        </header>

        <Review />
    </div>
  )
}

export default App
