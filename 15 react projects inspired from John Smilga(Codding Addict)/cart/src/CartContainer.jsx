import React from 'react'
import useGlobalContext from './Context'
import CartItem from './CartItem'
const CartContainer = () => {
  const {cart,loading,total,clearCart} = useGlobalContext()
  
  if(loading) {
    return (
     <h1>Loading ...</h1>
    )
  } else {
      return (
        <section className="cart-container">
          <h1>YOUR BAG</h1>
          {
            cart.length === 0 ? <h3>No Items</h3>
            :
            cart.map(item => {
              return <CartItem key={item.id} {...item}/>
            }) 
          }
          <div className="cart-total">
            <h3>Total</h3>
            <h3>$ {total}</h3>
          </div>
          <button className="clear-all" onClick={clearCart}>
            Clear all
          </button>
        </section>
      )
  }
}

export default CartContainer