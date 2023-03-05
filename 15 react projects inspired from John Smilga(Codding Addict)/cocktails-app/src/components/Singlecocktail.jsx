import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import useGlobalContext from '../Context'
import Loading from './Loading'

const Singlecocktail = () => {
  const [loading,setLoading] = useState(true)
  const {cocktails} = useGlobalContext()
  const {id} = useParams()
  const [item,setItem] = useState({})
  useEffect(() => {
    setLoading(true)
    setItem(
      cocktails.find(c => {
        return c.id === id
      })
    )
    setLoading(false)
    
  },[])
  
  if(loading) {
    return (
      <Loading />
    )
  } else {
 
    return (
      <section className="single-card">
        <a  className="btn-home" href={'\\'}>
            <svg fill="rgb(246, 151, 68)" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 490 490" xml:space="preserve">
            <g>
            <path d="M245,0C109.7,0,0,109.7,0,245s109.7,245,245,245s245-109.7,245-245S380.3,0,245,0z M308.2,335.5l-42.7,42.7L175,287.7
      L132.3,245l42.7-42.7l90.5-90.5l42.7,42.7L217.8,245L308.2,335.5z"/>
          </g>
        </svg>
        </a>
        <div>
          <img src={item.image}></img>
          <div className="details">
            <p><span>Name: </span>{item.name}</p>
            <p><span>Category: </span>{item.category}</p>
            <p><span>Info: </span>{item.info}</p>
            <p><span>Glass: </span>{item.glass}</p>
            <p><span>Instructions: </span>{item.instructions}</p>
            <p><span>Ingredients:</span>{item.ingredients.filter(i => i != null).join(', ')}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Singlecocktail