import React from "react";
import { MdError } from 'react-icons/md';

const InputDetail = ({ name, input, placeholder, value, error, onChange }) => {
    return (
        <div>
            <span> { error } </span>
            <input 
                className='formLabel'
                type={ input }
                placeholder= { placeholder }
                name= { name }
                value={ value }
                onChange={ onChange }
            />
            { (error) ? <MdError className='errorIcon'/> : '' }
        </div>
    )
}

export default InputDetail;