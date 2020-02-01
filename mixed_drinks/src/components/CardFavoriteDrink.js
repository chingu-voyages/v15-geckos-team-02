import React from 'react';

const CardFavoriteDrink = props => {
    const CardStyle = {
        backgroundImage: `url(${props.drink.strDrinkThumb})`,
        backgroundSize: '100px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImageRadius: '50%'
        
    }
    return (
    <div className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" title={`A ${props.drink.strDrink} served in a ${props.drink.strGlass}`} style={CardStyle} id={props.id} onClick={props.handleClick}>
        <h3 id={props.id}>{props.drink.strDrink}</h3>    
    </div>
    )
}

export default CardFavoriteDrink