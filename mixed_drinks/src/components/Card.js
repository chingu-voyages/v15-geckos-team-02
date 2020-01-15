import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className="div" key={props.id}>
            <h3>{props.drinkName}</h3>
            <p>{props.instructions}</p>
            <ul className="ul">
                {props.ingredients.map((ingredient, index) => {
                    return props.measurements[index] === null ? 
                    <li className="li">{ingredient}</li> : 
                    <li className="li">{`${ingredient} - ${props.measurements[index]}`}</li>
                })}
            </ul>
        </div>
    )
}

export default Card;