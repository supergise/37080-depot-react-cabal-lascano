import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CartDetail = ({ product, deleteProduct }) => {
    return(
        <>
            { product 
            ? (
                <section className='cartSubTitles'>
                    <div className='cartSubTitleProd'>
                        <Link to={ `/item/${ product.id }` }>
                            <img  className='cartPic' src={ '/img/' + product.img } alt={ product.description }  />
                        </Link>
                        <span>{ product.title }</span>
                    </div>
                    <span className='cartSubTitlesOthers'> u$d { product.price }</span>
                    <span className='cartSubTitlesOthers'> { product.quantity }</span>
                    <span className='cartSubTitlesOthers'> u$d { product.price * product.quantity }</span>
                    <IoTrashOutline onClick={ () => deleteProduct(product.id) } className='cartTrashIcon cartSubTitlesOthers' /> 
                </section>
            )
            : (
                <section className='cartSubTitles'>
                    <h4 className='cartSubTitleProd'> Products </h4>
                    <h4 className='cartSubTitlesOthers'> Price </h4>
                    <h4 className='cartSubTitlesOthers'> Quantity </h4>
                    <h4 className='cartSubTitlesOthers'> Total </h4>
                    <h4 className='cartSubTitlesOthers'> &nbsp; </h4>
                </section>
            ) }
        </>
    );
};

export default CartDetail;