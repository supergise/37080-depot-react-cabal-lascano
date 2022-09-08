import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ( { item } ) => {
    return (
        <article className='card'>
            <img src={ "/img/" + item.img } alt={ item.description } /> 
            <div className='content'>
                <h2>{ item.title }</h2>
                <p>{ "USD " + item.price }</p>
                <p>{ item.category }</p>
                <Link to={ `/item/${ item.id }` }>
                    <button className='primaryButton'>See more</button>
                </Link>
            </div>
        </article>
    );
};

export default Item;