import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import img1 from '../../img/image1.jpg';
import { GrAddCircle } from 'react-icons/gr';
import { BiMinusCircle } from 'react-icons/bi';
import './itemCount.css';

const ItemCount = ( {stock, initial, onAdd } ) => {
        const [count, setCount] = useState(initial);
    
        const add = () => {
            count < stock && setCount(count + 1);
        };
    
        const substract = () => {
            count > 0 && setCount(count - 1);
        };

    return (
        <>
            <section className='containerCards'>
                <article className='card'>
                    <img src={ img1 } alt="dibujo de planetas, estrellas y plantas" /> 
                    <div className='content'>
                        <h2>Universe USD 10</h2>
                        <InputGroup className="mb-3 buttonControl ">
                            <Button onClick={ substract } variant="outline-secondary">
                                <BiMinusCircle  className='button-icon' />
                            </Button>
                            <Form.Control disabled value={ "Prints available for you: " +count }></Form.Control> 
                            <Button onClick={ add } variant="outline-secondary">
                                <GrAddCircle className='button-icon' />
                            </Button>
                        </InputGroup>
                        <button onClick={ () => onAdd(count) } className='primaryButton' disabled={ count <= 0 } >Agregar al carrito</button>
                    </div>
                </article>
            </section>
            <div>
        </div>
        </>
    );
}

export default ItemCount;


