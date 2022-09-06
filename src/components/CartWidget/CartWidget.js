import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './cartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <MdShoppingCart className='iconShop' />
            <span>5</span>
        </div>
    );
};

export default CartWidget