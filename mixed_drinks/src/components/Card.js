import React from 'react';

const Card = props => {
    let divStyle = {
        backgroundcolor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #c5c5c5',
        borderRadius: '3px',
        width: '200px',
        height: '300px',
        float: 'left',
        margin: '10px',
        boxShadow: '1px 2px 2px #eeee',
    }
    return (
        <div key={props.id} style={divStyle}>
            <h3>{props.drinkName}</h3>
            <p><i>{props.instructions}</i></p>
        </div>
    )
}

export default Card;