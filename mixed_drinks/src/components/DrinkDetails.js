import React from 'react';
import './Card.css';

const getDrinkValues = (drink, propertyNameStartsWith) => {
    return Object.getOwnPropertyNames(drink).filter(drink => drink.startsWith(`${propertyNameStartsWith}`)).map(propertyName => drink[propertyName]);
}

const DrinkDetails = props => {
    const ingredients = getDrinkValues(props.drink, "strIngredient");
    const measurements = getDrinkValues(props.drink, "strMeasure");
    return (
        <div>
            <p className='pa2 pr7-ns'>{props.drink.strInstructions}</p>
            <ul className="card__list">
                {ingredients.map((ingredient, index) => {
                    return measurements[index] === null ? 
                    <li key={index} className="card__list-item">{ingredient}</li> : 
                    <li key={index} className="card__list-item">{`${measurements[index]} ${ingredient}`}</li>
                })}
            </ul>
        </div>
    )
}

export default DrinkDetails;