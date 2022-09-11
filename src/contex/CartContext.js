import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, SetCart] = useState([]);

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            addQuantity(item, item.quantity);
        } else {
            SetCart([...cart, item]);
        }
    }; 

    console.log(cart);  
    
    // const itemEncontrado = cart.find((product) => product.id === item.id);
    // //itemEncontrado = {...itemEncontrado, item.quantity}
    

    const isInCart = (id) => cart.some((product) => product.id === id);

    const addQuantity = (item, quantity) => {
        const currentCart = cart.map((product) => 
            product.id === item.id
                ? { ...product, quantity:product.quantity + quantity }
                : product
        );
        
        //     if(product.id === item.id) {
        //         const currentProduct = {...product, quantity:product.quantity + quantity}
        //         return currentProduct;
        //     } else {
        //         return product;
        //     }
        // });
        SetCart(currentCart);
    }
// to do deleteFromCart

    const clearCart = () => SetCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            { children }
        </CartContext.Provider>
    );
};

export default CartProvider;

