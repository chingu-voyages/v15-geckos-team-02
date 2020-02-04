import React from 'react';
import './Card.css';
import AddDrinksButton from './AddDrinksButton';

const RandomCard = props => {
    const CardStyle = {
        backgroundImage: `url(${props.strDrinkThumb})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
      <div className="card tc grow dib w-27" title={`A ${props.drinkName} served in a ${props.drinkGlass}`} style={CardStyle} id={props.id} onClick={props.handleClick}>             
        <h3 id={props.id} className='bg-white-80 pa1'>{props.drinkName}</h3>
        {
          props.isDrillDown ? 
          <div> 
            <button onClick={props.fetchNewRandom} > New Drink </button>
          </div> : 
          null
        }            
        <AddDrinksButton />           
      </div>
      
    )
}

export default RandomCard;