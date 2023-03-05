import React, { useState } from 'react'

const Tour = ({id,name,info,price,image,removeTour}) => {
    const [readmore,setReadMore] = useState(false)
  return (
    <div className="tour">
        <img src={image} alt={name} />
        <div className="price-tag">$ {price}</div>
        <footer>
            <h4>{name}</h4>
            <p>
                {
                    readmore ? info 
                    :
                    `${info.substring(0,150)}...`
                }

                <a onClick={() => setReadMore(prevState => !prevState)}>
                    {readmore ? ` Show less` :  ` Read more`}
                </a>
            </p>
            <button onClick={() => removeTour(id)}>Not interested</button>
        </footer>
        
    </div>
  )
}

export default Tour