import React from 'react'

const Categories = ({categories,filterItems}) => {
    
  return (
    <div className="category-wrapper">

        {
            categories.map(cat => {
                return (
                    <p className="category"
                        onClick={() => filterItems(cat)}
                        key={cat}
                    >
                        {cat}
                    </p>
                )
            })
        }

    </div>
  )
}

export default Categories