import React from 'react'
import useGlobalContext from '../Context'
import Cocktail from './Cocktail'
import Loading from './Loading'

const Cocktails = () => {
    const {cocktails,loading} = useGlobalContext()
 

    if(loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <section className="container">
                
                {
                    cocktails.length == 0 ?
                    <h1>No items found...</h1>
                    :
                    cocktails.map(item => {
                        return (
                            <Cocktail key={item.id} {...item}/>
                        )
                    })
                }
        
            </section>
          )
    }
}

export default Cocktails