import { createContext, useContext } from "react";

const cartcontext = createContext({
    cart: [],
    addtocart: (product) => {},
    removefromcart: (id) => {}
})

export const Cartprovider = cartcontext.Provider

export default function useCart(){
    return useContext(cartcontext)
}