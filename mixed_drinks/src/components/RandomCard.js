import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';
import Button from './Button';

const RandomCard = props => {
    const favoriteDrinkIds = props.favoriteDrinks.map(drink => drink.idDrink);
    const isFavorite = favoriteDrinkIds.includes(props.id);
    return (

      <div className="card-section">
      <div className="card" key={props.id}>
          <h3>{props.drinkName}</h3>
          <img name="randomCard" onClick={props.handleClick} src={props.strDrinkThumb} id={props.id} height={"230px"} width={"220px"} alt={`A ${props.drinkName} served in a ${props.drink.strGlass}`} /> 
          <Button id={props.id} onClick={props.fetchNewRandom} name="randomButton"> New Drink </Button>
          {!isFavorite ? <AddDrinksButton addToFavoriteDrinks={() => props.addToFavoriteDrinks(props.drink)} /> : null}
      </div>
  </div>
    )
}

export default RandomCard;
