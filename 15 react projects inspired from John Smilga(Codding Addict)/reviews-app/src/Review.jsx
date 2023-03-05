import React,{useState} from 'react'
import data from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
const Review = () => {
    const [index,setIndex] = useState(0)
    const {id,name,job,image,text} = data[index]
    
    const prev = () => {
        if(index == 0) {
            setIndex(3)
        } else {
            setIndex(prevState => prevState-1)
        }
        
    }
    const next = () => {
        if(index == 3) {
            setIndex(0)
        } else {
            setIndex(prevState => prevState+1)
        }
        
    }

    const rand = () => {
        
        setIndex(Math.round(Math.random() * 3))
    }
    return (
    <section className="container">


        <div className="card">
            <div className="img-holder">
                <img src={image} alt={name} />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
           <div className="content">
                <h2>{name}</h2>
                <h5>{job}</h5>
                <p>{text}</p>
           </div>

            <div className="controls">
                <button className="btn-pev"
                onClick={prev}>
                    <FaChevronLeft />
                </button>
                <button className="btn-next"
                onClick={next}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="btn-random"
            onClick={rand}
            >
                Surprise
            </button>
        </div>

        

    </section>
  )
}

export default Review