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
        <div className="card-section">
            <div className="card" key={props.id}>
                <h3>{props.drinkName}</h3>
                <img src={props.strDrinkThumb} id={props.id} onClick={props.handleClick} height={"230px"} width={"220px"} alt={`A ${props.drinkName} served in a ${props.drinkGlass}`} />
                {props.isDrillDown ? 
                <div>
            <Button id={props.drinkIds[currentDrinkIndex - 1]} onClick={props.handleClick} disabled={previousDisabled}>Previous</Button>
            <Button id={props.drinkIds[currentDrinkIndex + 1]} onClick={props.handleClick} disabled={nextDisabled}>Next</Button> 
                </div> : null}
                <AddDrinksButton />
            </div>
        </div>
        : null}
        {!isFavorite ? <AddDrinksButton addToFavoriteDrinks={() => props.addToFavoriteDrinks(props.drink)} /> : null}
    </div>
    )
}

export default Card;