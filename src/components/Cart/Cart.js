import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import { IoTrashOutline } from 'react-icons/io5';
import Form from '../Form/Form';
import '../Cart/cart.css';

const Cart = () => {
    const { cart, clearCart, deleteProduct, totalPrice } = useContext(CartContext);
    
    console.log(cart);

    return (
        <div>
            <h2 className='cartTitle'> My Cart </h2>
            <section className='cartSubTitles'>
                <h4 className='cartSubTitleProd'> Products </h4>
                <h4 className='cartSubTitlesOthers'> Price </h4>
                <h4 className='cartSubTitlesOthers'> Quantity </h4>
                <h4 className='cartSubTitlesOthers'> Total </h4>
                <h4 className='cartSubTitlesOthers'> &nbsp; </h4>
            </section>

            { cart.map((product) => (
                <section key={ product.id } className='cartSubTitles'>
                    <div className='cartSubTitleProd'>
                        <img  className='cartPic' src={ '/img/' + product.img } alt={ product.description }  />
                        <span>{ product.title }</span>
                    </div>
                    <span className='cartSubTitlesOthers'> u$d { product.price }</span>
                    <span className='cartSubTitlesOthers'> { product.quantity }</span>
                    <span className='cartSubTitlesOthers'> u$d { product.price * product.quantity } </span>
                    <IoTrashOutline onClick={ () => deleteProduct(product.id) } className='cartTrashIcon cartSubTitlesOthers' /> 
                </section>
            ))}
            <section>
                <span className='clearCart' onClick={ clearCart }> Remove all from cart </span>
                <h4 className='totalCart'> Total: u$d { totalPrice() } </h4>
            </section>

            <h2 className='cartTitle'> My Data </h2>
            <Form/>
        </div>
    );
};

export default Cart;