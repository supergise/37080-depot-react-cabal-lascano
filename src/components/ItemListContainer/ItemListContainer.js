import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Spinner from '../Spinner/Spinner';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css';

const ItemListContainer = ( { greeting } ) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams();  

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const q = categoryName 
            ? query(itemCollection, where('category', '==', categoryName)) 
            : itemCollection;
            
        getDocs(q).then((resp) => {
            const products = resp.docs.map((product) => {
                return {
                    id: product.id,
                    ...product.data()
                }
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
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