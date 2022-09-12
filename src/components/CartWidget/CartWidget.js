import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import './cartWidget.css';

const CartWidget = () => {
    const { totalQuantityWidget } = useContext(CartContext);

    return (
        <div>
            <MdShoppingCart className='iconShop' />
            <span>{ totalQuantityWidget() }</span>
        </div>
    );
};

export default CartWidget;