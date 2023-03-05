import { useState } from 'react'
import text from './data'

function App() {
  const [count,setCount] = useState(0)
  const [actualText,setActualText] = useState([])
  const handleSubmit = (e) => {

    e.preventDefault()
    let c = parseInt(count)

    if(c <= 0 ) {
      c = 1
    }
    if(c > text.length-1) {
      c = text.length-1
    }
    const para = text.slice(0,c)
    setActualText([...para])
  }
  return (
    <div className="App">
      <h2>TIRED OF BORING LOREM IPSUM?</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" 
          value={count} 
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <div className="lorem-container">
        {
          actualText.map((t,i) => {
            return (<p key={i}>{t}</p>)
          })
        }
      </div>
    </div>
  )
}

export default App
