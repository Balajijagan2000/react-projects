import React from 'react'
import Question from './Question'

const Questions = ({questions}) => {
  return (
    <>
        {
            questions.map(q => {
                return <Question {...q} />
            })
        }
    </>
  )
}

export default Questions