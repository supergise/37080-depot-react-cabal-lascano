import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { MdError } from 'react-icons/md';
import './form.css';

const Form = ({ cart, totalPrice, clearCart, handleId, setIsLoading }) => {
    const [formData, setFormData] =     useState({ name:'', lastName:'', phone:'', email:'', confirmEmail:'' });
    const [formErrors, setFormErrors] = useState({ name:'', lastName:'', phone:'', email:'', confirmEmail:'' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            buyer: {name: formData.name, lastName: formData.lastName, phone: formData.phone, email: formData.email },
            items: cart,
            totalPrice: totalPrice(),
            date: serverTimestamp(),
        };
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
        .then((resp) => {
            handleId(resp.id);
            clearCart();
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const handleChange = (e) => {
        const error = validateFormData(e.target.name, e.target.value);
        
        setFormErrors( { ...formErrors, [e.target.name] : error });
        setFormData(   { ...formData,   [e.target.name] : e.target.value });
    };

    const validateFormData = (key, value) => {
        switch(key) {
            case 'name':
                if(value.length === 0) {                    
                    return 'Name required!';
                }
                if(value.length < 3) {                    
                    return 'Name too short!';
                }
                break;
            case 'lastName':
                if(value.length === 0) {                    
                    return 'Last name required!';
                }
                break;
            case 'phone':
                if(value.length === 0) {                    
                    return 'Phone required!';
                }
                if(value.length < 8) {                    
                    return 'Your phone number must contain at least 8 numbers';
                }
                break;

            case 'email':
                if(value.length === 0) {                    
                    return 'Email required!';
                }
                if(!value.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)) {                    
                    return 'Invalid email please try again';
                }
                break;

            case 'confirmEmail':
                if(value.length === 0) {                    
                    return "Email confirm is required!";
                }
                if(value !== formData.email) {                    
                    return "Please verify your email";
                }
                break;

            default: 
        }
    }

    const enableForm = () => {
        const data = Object.values(formData).some( el => el === '');
        const error = Object.values(formErrors).some( el => el);

        return !data && !error;
    }

    return (
        <div className='container'>
            <form onSubmit={ handleSubmit } className='contentForm'>
                <div>
                    <span>{ formErrors.name }</span>
                    <input 
                        className='formLabel'
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={ formData.name }
                        onChange={ handleChange }
                    />
                    { (formErrors.name) ? <MdError className='errorIcon'/> : '' }
                </div>

                <div>
                    <span>{ formErrors.lastName }</span>
                    <input
                        className='formLabel'
                        type="text"
                        placeholder="LastName"
                        name="lastName"
                        value={ formData.lastName }
                        onChange={ handleChange }
                        />
                    { (formErrors.lastName) ? <MdError className='errorIcon'/> : '' }
                </div>

                <div>
                    <span>{ formErrors.phone }</span>
                    <input
                        className='formLabel'
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        value={ formData.phone }
                        onChange={ handleChange }
                    />
                    { (formErrors.phone) ? <MdError className='errorIcon'/> : '' }
                </div>

                <div>
                    <span>{ formErrors.email }</span>
                    <input
                        className='formLabel'
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                    { (formErrors.email) ? <MdError className='errorIcon'/> : '' }
                </div>

                <div>
                    <span>{ formErrors.confirmEmail }</span>
                    <input
                        className='formLabel'
                        type="text"
                        placeholder="Confirm email"
                        name="confirmEmail"
                        value={ formData.confirmEmail }
                        onChange={ handleChange }
                    />
                    { (formErrors.confirmEmail) ? <MdError className='errorIcon'/> : '' }
                </div>

                <button 
                    disabled={ !enableForm() }
                    className='primaryButton'> 
                    Send 
                </button>
            </form>
        </div>
    );
};

export default Form;