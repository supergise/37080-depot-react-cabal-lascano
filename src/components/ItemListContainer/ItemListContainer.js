import React, { useState, useEffect } from "react";
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css';
import { getProducts } from '../../mok/products';

const onAdd = (count) => {
    console.log('To Do add ' + count + ' items to cart')
}

const ItemListContainer = ( {greeting} ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts
            .then(data => setItems(data))
            .catch(error => console.log(error))
            .finally(() => console.log('Finally'));
    }, []);
    
    return (
        <>
            <h2 className='greeting'> {greeting} Welcome to my site </h2>
            <ItemCount stock={5} initial={ 1 } onAdd={ onAdd }  />
            <ItemList items={ items } />
        </>
    );
};

export default ItemListContainer;
