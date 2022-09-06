import React, { useState, useEffect } from "react";
import { products } from '../../mok/products';
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { idProd } = useParams();
    const idProdNumber = Number(idProd);

    useEffect(() => {
        const getProduct  = () => 
            new Promise((res, rej) => {
                const filterProducts = products.find(
                    (product) => product.id === idProdNumber
                    );
                    setTimeout(() => res(idProdNumber ? filterProducts : null), 2000);
                });

        getProduct()
            .then(data => setItem(data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }, [idProdNumber]);
    
    return (
        <>
            { isLoading ? <Spinner/> : 
                (<section className='containerCards'>
                    <ItemDetail item={ item } />
                </section>) 
            }
        </>
    );
};

export default ItemDetailContainer;