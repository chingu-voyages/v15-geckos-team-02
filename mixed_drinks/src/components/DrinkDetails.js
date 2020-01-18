import React from 'react';

const DrinkDetails = props => {
    return (
        <div>
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

export default DrinkDetails;