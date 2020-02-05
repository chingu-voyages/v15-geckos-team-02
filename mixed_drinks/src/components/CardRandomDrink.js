import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';
import Button from './Button';

const CardRandomDrink = props => {
    const favoriteDrinkIds = props.favoriteDrinks.map(drink => drink.idDrink);
    const isFavorite = favoriteDrinkIds.includes(props.id);
    return (
        <div className="card-section">
            <div className="card" key={props.id}>
                <h3>{props.drink.strDrink}</h3>
                <img src={props.drink.strDrinkThumb} id={props.id} onClick={props.handleClick} height={"230px"} width={"220px"} alt={`A ${props.drink.strDrink} served in a ${props.drink.strGlass}`} />
                <Button onClick={props.handleRandomDrink}>Random</Button>
                {!isFavorite ? <AddDrinksButton addToFavoriteDrinks={() => props.addToFavoriteDrinks(props.drink)} /> : null}
            </div>
        </div>
    )
}

export default CardRandomDrink;