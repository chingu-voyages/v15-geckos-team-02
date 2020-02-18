import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';
import Button from './Button';

const Card = props => {
    const drinkCount = props.drinkIds.length;
    const currentDrinkIndex = props.drinkIds.indexOf(props.id);
    const previousDisabled = currentDrinkIndex === 0 ? true : false;
    const nextDisabled = currentDrinkIndex + 1 === drinkCount ? true : false;
    const favoriteDrinkIds = props.favoriteDrinks.map(drink => drink.idDrink);
    const isFavorite = favoriteDrinkIds.includes(props.id);
    return (


        <div className="card-section">
            <div className="card" key={props.id}>
                <h3>{props.drink.strDrink}</h3>
                <img src={props.drink.strDrinkThumb} id={props.id} onClick={props.handleClick} height={"230px"} width={"220px"} alt={`A ${props.drink.strDrink} served in a ${props.drink.strGlass}`} />
                {props.isDrillDown ? 
                <div>
                    <Button id={props.drinkIds[currentDrinkIndex - 1]} onClick={props.handleClick} disabled={previousDisabled}>Previous</Button>
                    <Button id={props.drinkIds[currentDrinkIndex + 1]} onClick={props.handleClick} disabled={nextDisabled}>Next</Button> 
                </div> : null}
                {!isFavorite ? <AddDrinksButton addToFavoriteDrinks={() => props.addToFavoriteDrinks(props.drink)} /> : 
                <Button id={props.id} onClick={() => props.deleteFavoriteDrink([props.drink], props.isFavoritesPage)}>Remove</Button>}
            </div>
        </div>
    )
}

export default Card;