import React from 'react';

const Card = (props) => {
    let divStyle = {
        backgroundcolor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #c5c5c5',
        borderRadius: '3px',
        width: '200px',
        height: '300px',
        float: 'left',
        margin: '10px'
    }
    return (
        <div style={divStyle}>
            {props.drinkName}
        </div>
    )
}

export default Card;