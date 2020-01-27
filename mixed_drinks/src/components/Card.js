import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';

const Card = props => {
    const drinkCount = props.drinkIds.length;
    const currentDrinkIndex = props.drinkIds.indexOf(props.id);
    const previousDisabled = currentDrinkIndex === 0 ? true : false;
    const nextDisabled = currentDrinkIndex + 1 === drinkCount ? true : false;
    const CardStyle = {
        backgroundImage: `url(${props.strDrinkThumb})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <div className="card tc grow dib w-27" title={`A ${props.drinkName} served in a ${props.drinkGlass}`} style={CardStyle} id={props.id} onClick={props.handleClick}>             
            <h3 id={props.id} className='bg-white-80 pa1'>{props.drinkName}</h3>            
            {props.isDrillDown ? 
            <div>
                <button id={props.drinkIds[currentDrinkIndex - 1]} onClick={props.handleClick} disabled={previousDisabled}>Previous</button>
                <button id={props.drinkIds[currentDrinkIndex + 1]} onClick={props.handleClick} disabled={nextDisabled}>Next</button>
            </div> : null}
            <AddDrinksButton />           
        </div>
    )
}

export default Card;