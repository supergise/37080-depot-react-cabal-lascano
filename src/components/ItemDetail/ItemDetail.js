import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './itemDetail.css';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count) => {
        setQuantity(count);
        console.log("Se agregaran al carrito " + count + " del print " + item.title);
    };

    return (
        <>
            <article className="card">
                <img src={ '/img/' + item.img } alt={item.description} />
            </article>
            <article className="contentDetail">
                <h2>{ item.title }</h2>
                <p> { "USD " + item.price } </p>
                <p> { item.description } </p>

                {quantity === 0 ? (
                    <ItemCount initial={1} onAdd={onAdd} stock={item.stock} />
                ) : (
                    <>
                        <p>Added { quantity } prints to cart</p>
                        <Link to="/cart" className='noBorder'>
                            <button className='primaryButton'>
                                Checkout
                            </button>
                        </Link>
                        <Link to="/" className='contentDetailLink'>
                            <p>
                                View more prints
                            </p>
                        </Link>
                    </>
                )}

            </article>
        </>
    );
};

export default ItemDetail;
