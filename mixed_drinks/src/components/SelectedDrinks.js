import React from 'react';
import './SelectedDrinks.css';
import CardFavoriteDrink from './CardFavoriteDrink';
import Button from './Button';

const SelectedDrinks = props => {
    return(
        <div className="sideContainer">
            <h3>Favorite Drinks</h3>
            <ul className="list pl0 measure center">
                {props.favoriteDrinks.map(drink => {
                    return (
                    <CardFavoriteDrink 
                        key={drink.idDrink} 
                        id={drink.idDrink}
                        handleClick={props.handleClick}
                        isDrillDown={props.isDrillDown} 
                        drinkIds={props.drinkIds} 
                        drink={drink}
                        deleteFavoriteDrink={props.deleteFavoriteDrink}
                    />
                    )
                })}
            </ul>
            {props.favoriteDrinks.length === 0 ? null : <Button className="selectDrinks" onClick={() => props.deleteFavoriteDrink(props.favoriteDrinks)}>Remove All</Button>}
        </div>
    )
}
export default SelectedDrinks;