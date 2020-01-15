import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className="card" key={props.id}>
            <h3>{props.drinkName}</h3>
            <p>{props.instructions}</p>
            <ul className="card__list">
                {props.ingredients.map((ingredient, index) => {
                    return props.measurements[index] === null ? 
                    <li key={index} className="card__list-item">{ingredient}</li> : 
                    <li key={index} className="card__list-item">{`${ingredient} - ${props.measurements[index]}`}</li>
                })}
            </ul>
        </div>
    )
}

export default Card;