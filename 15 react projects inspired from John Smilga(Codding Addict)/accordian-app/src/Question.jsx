import React, { useState } from 'react'

const Question = ({id,title,info}) => {
    const [toggle,setToggle] = useState(false)
  return (
    <div className="question">
        <header>
            <h3>{title}</h3>
            <button
                onClick={() => setToggle(prevState => !prevState)}
            >
                {
                    toggle ? '-' : '+'
                }
            </button>
        </header>
        <footer>
            {
                toggle ? (<p>
                            {info}
                        </p>)
                : ''
            }
        </footer>
    </div>
  )
}

export default Question