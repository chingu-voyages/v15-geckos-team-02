// import card. 
// the card should contain a random drink with a buttom to fetch another random drink

// 1. Fetch drink from API 
// 2. Display returned drink as Card 
// 3. Provide button to fetch

import React, { Component } from 'react';
import './RandomDrink.css';
import { Constants } from './Constants.js'; 
import RandomCard from './RandomCard.js';

class RandomDrink extends Component{
  // should inherit some common methods from App 
  constructor(props){
    super(props); 
    this.state = {
      drink: null,
      isLoaded: false
    }
  }

  // fetch should return a list of one drink
  randomFetch() {
    fetch(`${Constants.urlPath}${Constants.random}`)
    .then(result => result.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          drink: result.drinks[0]
        });
        if (this.props.isDrillDown) this.props.updateAppDrinks(this.state.drink);
      }
    ).catch(error => {
      console.error('Error:', error);
    })
  }

  
  componentDidMount(){
    this.randomFetch();
  }

  fetchNewRandom = () => {
    this.randomFetch();
  }

  render(){ 
    return(
      <div className="containerRandom">
        {!this.state.isLoaded ? "Loading..." :
          this.state.drinks === null ? <p>No Drinks Found</p> :
          <RandomCard 
              key={this.state.drink.idDrink} 
              id={this.state.drink.idDrink} 
              strDrinkThumb={this.state.drink.strDrinkThumb} 
              drinkName={this.state.drink.strDrink} 
              handleClick={this.props.handleClick} 
              drinkGlass={this.state.drink.strGlass}
              isDrillDown={this.props.isDrillDown}
              fetchNewRandom={this.fetchNewRandom} 
          />
        }
      </div>
    )
  } 
}

export default RandomDrink;


