import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contex/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart, qty } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        addToCart({ ...item, quantity: quantity });
        console.log("Se agregaran al carrito " + quantity + " del print " + item.title);
    };

    return (
        <>
            <article className="card">
                <img src={ '/img/' + item.img } alt={ item.description } />
            </article>
            <article className="contentDetail">
                <h2>{ item.title }</h2>
                <p> { "u$d " + item.price + "  stock: " + item.stock } </p>
                <p> { item.description } </p>

                { quantity === 0 ? (
                    <>
                        { qty(item.id) > 0 
                            ? <p>There are { qty(item.id) } prints already on your cart</p> 
                            : ''
                        }
                        <ItemCount initial={ qty(item.id) === 0 ? 1 : qty(item.id) } onAdd={ onAdd } stock={item.stock} />
                    </>
                ) : (
                    <>
                        <p>Added { quantity } prints to cart</p>
                        <Link to="/cart" className='noBorder'>
                            <button className='primaryButton'>
                                Go to cart
                            </button>
                        </Link>
                        <Link to="/" className='contentDetailLink'>
                            <p>
                                <strong className='noBorder'>View more prints</strong>
                            </p>
                        </Link>
                    </>
                ) }

            </article>
        </>
    );
};

export default ItemDetail;
