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
      <div 
        className="card tc grow dib w-27" 
        title={`A ${props.drinkName} served in a ${props.drinkGlass}`} 
        style={CardStyle} 
        id={props.id} 
        onClick={props.handleClick}
        name="randomCard">             
        
        <h3 name="randomCard" id={props.id} className='bg-white-80 pa1'>{props.drinkName}</h3>
        <div name="randomCard" id={props.id}> 
          <button id={props.id} onClick={props.fetchNewRandom} name="randomButton"> New Drink </button>
        </div> 
        <AddDrinksButton />           
        <h3 name="randomCard" className="innerTitle" > RANDOM DRINK </h3>
      </div>
    )
}


export default RandomCard;