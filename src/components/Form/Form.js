import React, { useState } from "react";
import './form.css';

const Form = () => {
    const [formData, setFormData] = useState({ name:'', lastName:'', address:'' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    const handleChange = (e) => {
        setFormData( { ...formData, [e.target.name] : e.target.value } );
    };

    return (
        <div className='contentForm'>
            <form onSubmit={ handleSubmit }>
                <input 
                    className='formLabel'
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }
                />
                <input
                    className='formLabel'
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    value={ formData.lastName }
                    onChange={ handleChange }
                />
                <input
                    className='formLabel'
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={ formData.address }
                    onChange={ handleChange }
                />
                <button className='primaryButton'> Send </button>
            </form>
        </div>
    );
};

export default Form;
