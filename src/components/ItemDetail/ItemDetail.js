import React from "react";

const ItemDetail = ( { item } ) => {
    return(
        <>
        <article className='card'>
            <img src={ "img/" + item.img } alt={ item.description } /> 
            <div className='content'>
                <h2>{ item.title }</h2>
                <p> { "USD " + item.price + " stock: " + item.stock } </p>
            </div>
        </article>     
    </>
        )
}
    
export default ItemDetail;
