import React, {Component} from 'react';
import './SelectedDrinks.css';

const SelectedDrinks = props => {
    return(
        <div className="Fav_drinks">
            <h3>List of Selected drinks</h3>
            <ul className="SelectedOnly">

            </ul>
            <button type="submit" className="selectDrinks">Go to drinks</button>
        </div>
    )
}
export default SelectedDrinks;