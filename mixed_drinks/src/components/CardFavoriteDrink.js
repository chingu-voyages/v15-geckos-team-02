import React from 'react';
import Button from './Button';

const CardFavoriteDrink = props => {
    const CardStyle = {
        backgroundImage: `url(${props.drink.strDrinkThumb})`,
        backgroundSize: '100px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImageRadius: '50%'
        
    }
    return (
    <div className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" title={`A ${props.drink.strDrink} served in a ${props.drink.strGlass}`} id={props.id}>
        <h3 onClick={props.handleClick} id={props.id}>{props.drink.strDrink} </h3>
        <Button id={props.id} onClick={() => props.deleteFavoriteDrink(props.drink)}>Remove</Button>    
    </div>
    )
}

export default CardFavoriteDrink