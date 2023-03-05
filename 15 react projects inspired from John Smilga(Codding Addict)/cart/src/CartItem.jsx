import React from 'react'
import {FaArrowUp} from 'react-icons/fa'
import useGlobalContext from './Context'
const CartItem = ({id,img,title,price,amount}) => {
  const {addQuantity,removeQuantity,removeCartItem} = useGlobalContext()
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
        <div className="cart-info">
          <p>{title}</p>
          <p>$ {price}</p>
          <p onClick={() => removeCartItem(id)}>remove</p>
        </div>
        <div className="cart-fn">
          <button className="increase-fn" onClick={() => addQuantity(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
          </button>
          <p>{amount}</p>
          <button className="decrease-fn" onClick={() => removeQuantity(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
          </button>
        </div>
    </div>
  )
}

export default CartItem