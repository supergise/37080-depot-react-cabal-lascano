import React, { useContext, useState } from 'react';
import { CartContext } from '../../contex/CartContext';
import Form from '../Form/Form';

const CartData = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const [idCompra, setIdCompra] = useState('');

    const handleId = (id) => {
        setIdCompra(id)
    };
    if (idCompra) {
        return <h4 className='cartMsgBuy'>Thanks You for buying Prints. Your id number is: <strong>{ idCompra }</strong> </h4>
    } 

    return (
        <div>
            <h2 className='cartTitle'> My Data </h2>
            <Form cart={ cart } totalPrice={ totalPrice } clearCart={ clearCart } handleId={ handleId } />
        
        </div>
    )
};

export default CartData;