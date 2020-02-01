import React from 'react';
import './AddDrinksButton.css';


const AddDrinksButton = props => {
    return(
        <div>
            <button className="drinkBtn" onClick={props.addToFavoriteDrinks}>Add To Favorites</button>
        </div>
    )
}
export default AddDrinksButton;