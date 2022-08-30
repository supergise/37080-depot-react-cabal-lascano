import React from 'react';
import './item.css';

const Item = ( { item } ) => {
    return (
        <>
            <article className='card'>
                <img src={ "img/" + item.img } alt={ item.description } /> 
                <div className='content'>
                    <h2>{ item.title }</h2>
                    <p> { "USD " + item.price } </p>
                    <button className='primaryButton'>ver más</button>
                </div>
            </article>     
        </>
    )
}

export default Item;