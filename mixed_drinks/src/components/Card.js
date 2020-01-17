import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className="card" key={props.id}>
            <h3>{props.drinkName}</h3>
            <img src={props.strDrinkThumb} id={props.id} onClick={props.handleClick} height={"220px"} width={"200px"}/>
        </div>
    )
}

export default Card;