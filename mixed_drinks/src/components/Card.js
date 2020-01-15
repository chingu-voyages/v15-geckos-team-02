import React from 'react';

const Card = props => {
    let divStyle = {
        backgroundcolor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #c5c5c5',
        borderRadius: '3px',
        width: '280px',
        height: '300px',
        float: 'left',
        margin: '10px',
        boxShadow: '1px 2px 2px #eeee',
    }
    let ulStyle = {
        padding: "0px",
        marginRight: '50px'
    }

    let liStyle = {
        textAlign: "center"
    }
    return (
        <div key={props.id} style={divStyle}>
            <h3>{props.drinkName}</h3>
            <p>{props.instructions}</p>
            <ul style={ulStyle}>
                {props.ingredients.map((ingredient, index) => {
                    return props.measurements[index] === null ? 
                    <li style={liStyle}>{ingredient}</li> : 
                    <li style={liStyle}>{`${ingredient} - ${props.measurements[index]}`}</li>
                })}
            </ul>
        </div>
    )
}

export default Card;