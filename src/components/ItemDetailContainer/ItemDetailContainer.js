import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebaseConfig';
import { doc, getDoc, collection } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const { idProd } = useParams();

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const ref = doc(itemCollection, idProd);

        getDoc(ref).then((resp) => {
            setItem({
                id: resp.id,
                ...resp.data()
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });

    }, [idProd]);
    
    return (
        <>
            { isLoading 
                ? <Spinner/> 
                : (<section className='containerCards'>
                    <ItemDetail item={ item } />
                </section>) 
            }
        </>
    );
};

export default ItemDetailContainer;