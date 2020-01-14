import React from 'react';

const Input = props => {
    return (
        <div>
            <input onChange={props.handleChange} onKeyPress={props.handleEnterPressed} />
        </div>
    )
}

export default Input;