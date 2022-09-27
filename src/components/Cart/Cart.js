import React, { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import { Link } from 'react-router-dom';
import CartDetail from '../CartDetail/CartDetail';
import '../Cart/cart.css';

const Cart = () => {
    const { cart, clearCart, deleteProduct, totalPrice } = useContext(CartContext);
    
    if (cart.length === 0) {
        return (
            <div className='cartMsg'>
                <h4> Looks like you haven't added anything to your cart yet </h4>
                <Link to="/" className='noBorder'>
                    <button className='primaryButton'>
                        View Products
                    </button>
                </Link>
            </div>
        );    
    };

    return (
        <div>
            <h2 className='cartTitle'> My Cart </h2>
            <CartDetail/>
            { cart.map((product) => (
                <CartDetail key={ product.id } product={ product } deleteProduct={ deleteProduct } />
            ))}
            <section>
                <span className='clearCart' onClick={ clearCart }> Remove all from cart </span>
                <h4 className='totalCart'> Total: u$d { totalPrice() } </h4>
                <Link to="/cartData" className='totalLeft'> 
                    <button className='primaryButton'>
                        Checkout
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default Cart;