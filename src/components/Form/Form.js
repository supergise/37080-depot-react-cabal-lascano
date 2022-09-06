import React from "react";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChangeName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={handleChangeName}
                />
                <input
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    value={ lastName }
                    onChange={handleChangeLastName}
                />
                <button> Send </button>
            </form>
        </div>
    );
};

export default Form;
