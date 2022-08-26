import React from 'react';

const Item = ( { item } ) => {
    return (
        <div>
            <p>{ item.title} </p>
            <p>{ item.price} </p>
            <h5>{ item.img} </h5>
            <img src={item.img} alt='' ></img>
        </div>
    )
}

export default Item