import React from 'react';

const CardFavoriteDrink = props => {
    const CardStyle = {
        backgroundImage: `url(${props.drink.strDrinkThumb})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
    <div className="card tc grow dib w-27" title={`A ${props.drink.strDrink} served in a ${props.drink.strGlass}`} style={CardStyle} id={props.id} onClick={props.handleClick}>
        <h3 id={props.id} className='bg-white-80 pa1'>{props.drink.strDrink}</h3>    
    </div>
    )
}

export default CardFavoriteDrink