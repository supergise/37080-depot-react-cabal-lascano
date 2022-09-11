import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import Form from '../Form/Form';

const Cart = () => {
    const { cart, clearCart, deleteProduct } = useContext(CartContext);
    
    console.log(cart);

    return (
        <div>
            { cart.map((product) => (
                <div key={ product.id }>
                    <h2> { product.title }</h2>
                    <button onClick={()=> deleteProduct(product.id) }> Delete product </button>
                </div>
            ))}
            <button onClick={ clearCart }> Delete cart </button>
            <Form/>
        </div>
    );
};

export default Cart