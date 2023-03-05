const reducer = (state,action) => {
    const type = action.type
    switch(type) {
        case 'INCREASE_ITEM':
            {
                let newCart = state.cart
                newCart = newCart.map(item => {
                    if(item.id === action.payload) {
                        return {...item,amount:item.amount+1}
                    } else {
                        return item
                    }
                })
                return {
                    ...state,
                    cart:newCart
                }
            }
        case 'DECREASE_ITEM':
            {
                let newCart = state.cart
                newCart = newCart.map(item => {
                    if(item.id === action.payload) {
                        return {...item,amount:item.amount-1}
                    } else {
                        return item
                    }
                })
                newCart = newCart.filter(item => {
                    return item.amount !== 0
                })
                return {
                    ...state,
                    cart:newCart
                }
            }
        case 'CLEAR_CART':
            {
                return {
                    ...state,
                    cart:[]
                }
               
            }
        case 'REMOVE_ITEM':
            {
                return {
                    ...state,
                    cart:state.cart.filter(item => {
                        return item.id !== action.payload
                    })
                }
            }
        case 'LOADING':
            {
                return {
                    ...state,
                    loading:true
                }
                
            }
        case 'DISPLAY_ITEMS':
            {
                return {
                    ...state,
                    loading:false,
                    cart:action.payload
                }
            }
        case 'GET_TOTALS':
            {
                let {total, amount} = state.cart.reduce(
                    (cartTotal,item) => {
                        const {price, amount} = item
                        const itemTotal = price * amount

                        cartTotal.total += itemTotal
                        cartTotal.amount += amount
                        return cartTotal
                    },{total:0,amount: 0}
                )
                total = parseFloat(total.toFixed(2))


                return {
                    ...state,
                    total, amount
                }
            }
        
    }
}
export default reducer