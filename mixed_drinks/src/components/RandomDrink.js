import React, { Component } from 'react';
import './RandomDrink.css';
import { Constants } from './Constants.js'; 
import RandomCard from './RandomCard.js';

class RandomDrink extends Component{
  constructor(props){
    super(props); 
    this.state = {
      drink: null,
      isLoaded: false
    }
  }

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
      <div>
        {!this.state.isLoaded ? null :
          this.state.drinks === null ? <p>No Drinks Found</p> :
          <RandomCard 
              key={this.state.drink.idDrink} 
              id={this.state.drink.idDrink} 
              drink={this.state.drink}
              strDrinkThumb={this.state.drink.strDrinkThumb} 
              drinkName={this.state.drink.strDrink} 
              handleClick={this.props.handleClick} 
              drinkGlass={this.state.drink.strGlass}
              isDrillDown={this.props.isDrillDown}
              fetchNewRandom={this.fetchNewRandom}
              drinkIds={this.props.drinkIds} 
              addToFavoriteDrinks={this.props.addToFavoriteDrinks}
              favoriteDrinks={this.props.favoriteDrinks} 
          />
        }
      </div>
    )
  } 
}

export default RandomDrink;


