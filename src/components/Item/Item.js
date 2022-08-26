import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item.css';

const onAdd = (count) => {
    console.log('To Do add ' + count + ' items to cart')
}

const Item = ( { item } ) => {
    return (
        <>
            <article className='card'>
                <img src={ "img/" + item.img } alt={ item.description } /> 
                <div className='content'>
                    <h2>{ item.title }</h2>
                    <p> { "USD " + item.price + " stock: " + item.stock } </p>
                    <ItemCount initial={ 1 } onAdd={ onAdd } stock= {item.stock} />
                </div>
            </article>     
        </>
    )
}

export default Item