import React, { useState } from 'react'

const Items = ({items}) => {

    

  return (
    <section className="menu-wrapper">

        {
            items.map(item => {
            
                return (
                    <div className="menu-items" key={item.id}>
                        <img className="item__image" src={item.img} alt={item.name} />

                        <div className="item__content">
                            <div className="title">
                                <h4>{item.title}</h4>
                                <h4>$ {item.price}</h4>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )
            })
        }

    </section>
  )
}

export default Items