import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

const onAdd = (count) => {
    console.log('To Do add ' + count + ' items to cart')
}

const ItemDetail = ( { item } ) => {
    return(
        <>
            <article className='card'>
                <img src={ "img/" + item.img } alt={ item.description } /> 
            </article>    
            <article className='contentDetail'>
                <h2>{ item.title }</h2>
                <p> { "USD " + item.price + " stock: " + item.stock } </p>
                <p> { item.description } </p>
                <ItemCount initial={ 1 } onAdd={ onAdd } stock= {item.stock} />
            </article>
        </>
    )
}
    
export default ItemDetail;
