import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <div>
            <input placeholder={"Search for a Cocktail..."} onChange={props.handleInputChange} onKeyPress={props.handleEnterPressed} />
        </div>
    )
}

export default Input;