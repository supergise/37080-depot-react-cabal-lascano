import React, { useState, useEffect } from "react";
import { getProducts } from '../../mok/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        getProducts
            .then(data => setItem(data.find(product => product.id === 1)))
            .catch(error => console.log(error))
            .finally(() => console.log('Finally'));
    }, []);
    
    return (
        <>
            <section className='containerCards'>
            <ItemDetail item={ item } />
            </section>
        </>
    );
};

export default ItemDetailContainer;