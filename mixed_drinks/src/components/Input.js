import React from 'react';

const Input = props => {
    return (
        <div>
            <input placeHolder={"Search for a Cocktail..."} onChange={props.handleChange} onKeyPress={props.handleEnterPressed} />
        </div>
    )
}

export default Input;