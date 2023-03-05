import { useEffect, useState } from 'react'

import './App.css'
import Loading from './Loading'
import Tours from './Tours'

function App() {
  const url = "https://course-api.com/react-tours-project"
  const [tours,setTours] = useState([])
  const [loading,isLoading] = useState(true)
  const fetchTours = async () => {
    isLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setTours(data)
    isLoading(false)
  }
  useEffect(() => {
    fetchTours()
  },[])

  const removeTour = (id) => {

    setTours(tours.filter(tour => {
      return tour.id !== id
    }))

  }
  return (
    <div className="container">
        {
          loading ? <Loading />
          :
          (
            <>
            <h1>Our Tours</h1>
            <div></div>
            <Tours tours={tours} removeTour={removeTour} />
            </>
            
          )
          
        }
    </div>
  )
}

export default App
