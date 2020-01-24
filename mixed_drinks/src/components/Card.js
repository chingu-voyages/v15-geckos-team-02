import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';

const Card = props => {
    const drinkCount = props.drinkIds.length;
    const currentDrinkIndex = props.drinkIds.indexOf(props.id);
    const stylePrevious = {
        pointerEvents: currentDrinkIndex === 0 ? 'none' : null
    }
    const styleNext = {
        pointerEvents: currentDrinkIndex + 1 === drinkCount ? 'none' : null

    }
    const CardStyle = {
        backgroundImage: `url(${props.strDrinkThumb})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <div className="card tc grow dib w-27" key={props.id} style={CardStyle} id={props.id} onClick={props.handleClick}>            
            <h3 id={props.id} onClick={props.handleClick} className='bg-white-80 pa1'>{props.drinkName}</h3>            
            {props.isDrillDown ? 
            <div>
                <button id={props.drinkIds[currentDrinkIndex - 1]} onClick={props.handleClick} style={stylePrevious}>Previous</button>
                <button id={props.drinkIds[currentDrinkIndex + 1]} onClick={props.handleClick} style={styleNext}>Next</button>
            </div> : null}
            <AddDrinksButton />           
        </div>
    )
}

export default Card;