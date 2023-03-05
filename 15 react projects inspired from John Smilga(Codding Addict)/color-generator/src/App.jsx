import { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

function App() {
  
  const[color,setColor] = useState('')
  const[colors,setColors] = useState(new Values('#ab1ff0').all(10))
  const[error,hasError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const colorList = new Values(color).all(10)
      
      setColors(colorList)
      hasError(false)
    } catch(e) {
      hasError(true)
    }
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color Generator</label>
          <input type="text" name="color" id="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          placeholder="#ffffff"

          className={`${error?'error': null }`}
          />
          <button type="submit">Generate</button>
        </form>

        <section className="color-container">

            {
              colors.map( (c,index) => {
                
                return (
                  <SingleColor key={index} {...c} index={index} />
                )
              })
            }

        </section>
    </div>
  )
}

export default App
