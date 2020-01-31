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
    return (
        <div className="card-section">
            <div className="card" key={props.id}>
                <h3>{props.drinkName}</h3>
                <img src={props.strDrinkThumb} id={props.id} onClick={props.handleClick} height={"230px"} width={"220px"} alt={`A ${props.drinkName} served in a ${props.drinkGlass}`} />
                {props.isDrillDown ? 
                <div>
                    <button id={props.drinkIds[currentDrinkIndex - 1]} onClick={props.handleClick} style={stylePrevious}>Previous</button>
                    <button id={props.drinkIds[currentDrinkIndex + 1]} onClick={props.handleClick} style={styleNext}>Next</button>
                </div> : null}
                <AddDrinksButton />
            </div>
        </div>
    )
}

export default Card;