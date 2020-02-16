import React from 'react';
import '../App.css';

const Input = props => {
    return (
        <div className='mt6 pt3 pb1 navigation'>
            <input 
                placeholder={"Search for a Cocktail..."} 
                onChange={props.handleInputChange} 
                onKeyPress={props.handleEnterPressed} 
            />
        </div>
    )
}

export default Input;