import React from 'react';
import './AddDrinksButton.css';


const AddDrinksButton = props => {
    return(
        <div>
            <button type="submit" className="drinkBtn" onClick={props.addToFavoritesList}>Add To List</button>
        </div>
    )
}
export default AddDrinksButton;