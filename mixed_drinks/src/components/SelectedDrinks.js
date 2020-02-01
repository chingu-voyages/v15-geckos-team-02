import React from 'react';
import './SelectedDrinks.css';
import './CardFavoriteDrink';
import CardFavoriteDrink from './CardFavoriteDrink';

const SelectedDrinks = props => {
    return(
        <div className="Fav_drinks">
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
                    />
                    )
                })}
            </ul>
            <button type="submit" className="selectDrinks">Go to drinks</button>
        </div>
    )
}
export default SelectedDrinks;