import React from 'react';
import './itemListContainer.css';

const ItemListContainer = ( {greeting} ) => {
    return (
    <h2 className='greeting'> {greeting} Welcome to my site </h2>
    );
};

export default ItemListContainer;