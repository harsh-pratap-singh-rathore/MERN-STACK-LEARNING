import { createContext, useContext } from "react";

export const cartContext = createContext({
    cartCount: 0,
    addToCart: () => { },
    removeFromCart: () => { }
});

export const useCart = () => {
    return useContext(cartContext);
};

export const CartProvider = cartContext.Provider;