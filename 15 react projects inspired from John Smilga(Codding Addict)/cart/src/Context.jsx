import { createContext, useContext, useReducer, useState, useEffect } from "react";
import cartItems from './data'
import reducer from "./reducer";
const CartContext = createContext()
const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  }
 const useGlobalContext = () => {
    return useContext(CartContext)
 }
const CartContextProvider = ({children}) => {
    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }
    const addQuantity = (id) => {
        dispatch({type:'INCREASE_ITEM',payload:id})
    }
    const removeQuantity = (id) => {
        dispatch({type:'DECREASE_ITEM',payload:id})
    }
    const removeCartItem = (id) => {
        dispatch({type:'REMOVE_ITEM',payload:id})
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state)
    useEffect(() => {
        dispatch({type:'GET_TOTALS'})
    },[state.cart])
    return (
        <CartContext.Provider value={{...state,clearCart,addQuantity,removeQuantity,removeCartItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default useGlobalContext
export {CartContext,CartContextProvider}