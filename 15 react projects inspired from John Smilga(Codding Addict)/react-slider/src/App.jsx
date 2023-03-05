import { useEffect, useState } from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import data from './data'
function App() {
  
  const [people,setPeople] = useState(data)
  const [index,setIndex] = useState(0)

  const prev = () => {
    
    setIndex(index-1)
  }
  const next = () => {
   
    setIndex(index+1)
  } 

  const autoScroll = () => {
    // console.log('scroll ',index)
    setIndex(index+1)
   
  }
  

  useEffect(() => {
    const n = data.length - 1
    if(index < 0) {
      setIndex(n)
    }
    if(index > n) {
      setIndex(0)
    }

    // setInterval(autoScroll,3500)
  }, [index,people])

 
  return (
    <div className="App">
       <header>
          <p>
            <span>
              /
            </span>
            Reviews
          </p>
       </header>

       <div  className="wrapper">

          <FiChevronLeft className="btn btn-left" onClick={prev}/>

          <div className="slider-container">
              {
                people.map( (person,i) => {
                  const {id,image,name,title,quote} = person
                  let curPos = ''  
                  // console.log('rendered')
                    if(i === 0 && index === 0) {
                      curPos = 'current'
                    }
                    else if(index === i) {
                      curPos = 'current'
                    } 
                    else if(i < index) {
                      curPos = 'prev'
                    } else if(i > index) {
                      curPos = 'next'
                    }
                  return (

                    <section className={`slide-item ${curPos}`} key={id} id={id}>


                      <img src={image} alt={name} />
                      <div>
                        <h4>{name}</h4>
                        <h5>{title}</h5>
                      </div>
                      <p>{quote}</p>
                      <FaQuoteRight className="icon" />

                    </section>

                  )
                })
              }
          </div>

          <FiChevronRight className="btn btn-right" onClick={next}/>
       </div>
    </div>
  )
}

export default App
