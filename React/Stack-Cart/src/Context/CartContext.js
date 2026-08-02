import { createContext, useContext } from "react";

const cartcontext  = createContext({
    addtocart: ()=>{},
    removefromcart: ()=>{},
    cart:[]
})

export const Cartprovider = cartcontext.Provider

export default function useCart(){
    return useContext(cartcontext)
}