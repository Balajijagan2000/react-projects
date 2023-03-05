import React from 'react'

const List = (
{persons}
) => {
  return (
    <>
    {
      persons.map(person => {

        return (
          <article>
            <img src={person.image} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        )

      })
    }
    </>
    
  )
}

export default List