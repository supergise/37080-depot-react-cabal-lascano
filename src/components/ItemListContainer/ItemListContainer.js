import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mok/products';
import './itemListContainer.css';

const ItemListContainer = ( { greeting } ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts
            .then(data => setItems(data))
            .catch(error => console.log(error))
            .finally(() => console.log('Finally'));
    }, []);
    
    return (
        <>
            <h2 className='greeting'> { greeting } Welcome to my site </h2>
            <section className='containerCards'>
            <ItemList items={ items } />
            </section>
        </>
    );
};


export default ItemListContainer;
