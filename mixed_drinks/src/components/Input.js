import React from 'react';

const Input = props => {
    return (
        <div>
            <input placeholder={"Search for a Cocktail..."} onChange={props.handleInputChange} onKeyPress={props.handleEnterPressed} />
        </div>
    )
}

export default Input;