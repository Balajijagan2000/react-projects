import { useEffect, useState } from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'


function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [experience,setExperience] = useState([])
  const [index,setIndex] = useState(0)
  const [loading,setLoading] = useState(true)
  
  const fetchDetail = async () => {
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setExperience(data)
    setLoading(false)
    
  }

  useEffect(() => {
      fetchDetail()
  },[])

  
  // const {id,order,title,duties,company,dates} = experience[index]
  return (
    <div className="App">
      <header>
        <h1>Experience</h1>
        <div></div>
      </header>
      <section className="card">
          {
            loading ? 
            (<h1>Loading...</h1>)
            :
            (
              
              <>
              
              <div className="menu">
                  {
                    experience.map((e,i) => {
                      return (
                        <h3 onClick={() => setIndex(i)}>{e.company}</h3>
                      )
                    })
                  }
            </div>
            <div className="card__main">
                <h3>{experience[index].title}</h3>
                <h4>{experience[index].company}</h4>
                <h5>{experience[index].dates}</h5>
                {
                  experience[index].duties.map( (duty,i) => {
                    return (
                      <div key={i}>
                        <FaAngleDoubleRight className="icon" />
                        <p>{duty}</p>
                      </div>
                    )
                  })
                }

              <div><button>MORE INFO</button></div>
            </div>
              
              </>

            )
          }
      </section>
    </div>
  )
}

export default App
