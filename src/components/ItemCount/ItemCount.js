import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
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
            <InputGroup className="mb-3 formControl">
                <Button 
                        className='buttonControl' 
                        onClick={ substract } 
                        variant="outline-secondary">
                            -
                        </Button>
                <Form.Control disabled value={ 'Prints available for you: ' + count }></Form.Control> 
                <Button 
                    onClick={ add } 
                    variant="outline-secondary">
                        +
                </Button>
            </InputGroup>
            <button onClick={ () => onAdd(count) } 
                    className='primaryButton' 
                    disabled={ count <= 0 }>
                        Agregar al carrito
            </button>
        </>
    );
}

export default ItemCount;


