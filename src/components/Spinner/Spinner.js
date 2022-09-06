import React from 'react';
import { ImSpinner6 } from 'react-icons/im';
import './spinner.css';

const Spinner = () => {
    return (
        <div className='containerIcon'>
            <ImSpinner6 className='loaderIcon' /> 
        </div> 
    );
};

export default Spinner;