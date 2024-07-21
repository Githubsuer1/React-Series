import { useContext, createContext } from "react"

const CartContext = createContext({
    carts:[
        {
            item:"Bag",
            price:129,
            id:Date.now()
        },
    ],
    addCart:(id,price)=>{},
    removeCart:(id,price)=>{}
})

export const useCart = ()=>{
    return useContext(CartContext)
}

export const CartProvider = CartContext.Provider