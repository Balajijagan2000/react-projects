import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,image,info,name,glass}) => {
  return (
    <div className="card">
        <img src={image} alt={name} />

        <div className="card-info">
            <h1>{name}</h1>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link className="btn btn-extra" to={`/cocktail/${id}`}>
                Details
            </Link>
        </div>
    </div>
  )
}

export default Cocktail