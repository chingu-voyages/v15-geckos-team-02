import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';
import Button from './Button';

const Card = props => {
    const drinkCount = props.drinkIds.length;
    const currentDrinkIndex = props.drinkIds.indexOf(props.id);
    const previousDisabled = currentDrinkIndex === 0 ? true : false;
    const nextDisabled = currentDrinkIndex + 1 === drinkCount ? true : false;
    const CardStyle = {
        backgroundImage: `url(${props.drink.strDrinkThumb})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
    }
    let favoriteDrinkIds = props.favoriteDrinks.map(drink => drink.idDrink);
    const isFavorite = favoriteDrinkIds.includes(props.id);
    return (
    <div className="card tc grow dib w-27" title={`A ${props.drink.strDrink} served in a ${props.drink.strGlass}`} style={CardStyle} id={props.id} onClick={props.handleClick}>
        <h3 id={props.id} className='bg-white-80 pa1'>{props.drink.strDrink}</h3>            
        {props.isDrillDown ? 
        <div> 
            <Button id={props.drinkIds[currentDrinkIndex - 1]} onClick={props.handleClick} disabled={previousDisabled}>Previous</Button>
            <Button id={props.drinkIds[currentDrinkIndex + 1]} onClick={props.handleClick} disabled={nextDisabled}>Next</Button> 
        </div>
        : null}
        {!isFavorite ? <AddDrinksButton addToFavoriteDrinks={() => props.addToFavoriteDrinks(props.drink)} /> : null}
    </div>
    )
}

export default Card;