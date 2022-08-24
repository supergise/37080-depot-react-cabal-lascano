import React from 'react';
import './itemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const onAdd = (count) => {
    console.log('To Do add ' + count + ' items to cart')
}

const ItemListContainer = ( {greeting} ) => {
    return (
        <>
            <h2 className='greeting'> {greeting} Welcome to my site </h2>

            <ItemCount stock={ 5 } initial={ 1 } onAdd={ onAdd }  />
        </>
    );
};

export default ItemListContainer;