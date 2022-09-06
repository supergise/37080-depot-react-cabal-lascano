import React, { useState, useEffect } from "react";
import { products } from '../../mok/products';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import './itemListContainer.css';

const ItemListContainer = ( { greeting } ) => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts  = () => 
            new Promise((res, rej) => {
                const filterProducts = products.filter(
                    (product) => product.category === categoryName
                );
                setTimeout(() => res(categoryName ? filterProducts : products), 2000);
            });

        setIsLoading(true);
        
        getProducts()
            .then(data => setItems(data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }, [categoryName]);
    
    return (
        <>
            <h2 className='greeting'> { greeting } Enjoy my { categoryName } prints  </h2>
            { isLoading ? <Spinner/> : 
                (<section className='containerCards'>
                    <ItemList items={ items } />
                </section>)
            }
        </>
    );
};

export default ItemListContainer;