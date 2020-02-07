import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <div className='mt6 pt4'>
            <input placeholder={"Search for a Cocktail..."} onChange={props.handleInputChange} onKeyPress={props.handleEnterPressed} />
        </div>
    )
}

export default Input;