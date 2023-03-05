import { useState } from 'react'

import './App.css'
import List from './List'
import data from './data'

function App() {
  
  const [persons,setPersons] = useState(data)

  return (
    <main className="App">
        <section className="container">
          <h3>{persons.length} birthdays today</h3>
          <List persons={persons} />
          <button onClick={() => setPersons([])}>Clear All</button>
        </section>
    </main>
  )
}

export default App
