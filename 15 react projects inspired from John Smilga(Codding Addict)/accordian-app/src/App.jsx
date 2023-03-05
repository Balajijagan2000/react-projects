import { useState } from 'react'
import './App.css'
import Questions from './Questions'
import questions from './data'

function App() {

  const [ques,setQues] = useState(questions)
  return (
    <div className="App">
      <div className="left">
          <h2>
            Questions And Answers About Login
          </h2>
      </div>
      <div className="right">
          <Questions questions={ques}/>
      </div>
    </div>
  )
}

export default App
