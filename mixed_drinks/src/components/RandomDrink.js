// import card. 
// the card should contain a random drink with a buttom to fetch another random drink

// 1. Fetch drink from API 
// 2. Display returned drink as Card 
// 3. Provide button to fetch

import React, { Component } from 'react';
import Card from './Card'; 
import './RandomDrink.css';

class RandomDrink extends Component{
    constructor(props){
        super(props); 
        this.state={
            isLoaded: false, 
            drink: {},
            isDrillDown: false, 
        }
    }

    fetch() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(result => result.json())
        .then(
          (result) => {
            this.setState({
                isLoaded: true, 
                drink: result.drinks[0]
            })
          }
        ).catch(error => {
          console.error('Error:', error);
        })
      }

      componentDidMount(){
          this.fetch();
      }

      handleClick = () => {
        this.fetch(); 
      }

      render(){ 
          return(
          <div className="containerRandom"> 
            <h3> RANDOM DRINK</h3>
            {!this.state.isLoaded ? "Loading..." :
                this.state.drinks === null ? <p>No Drinks Found</p> :
            //     handleClick for both 'previous' and 'next' buttons in card returns a random drink
                <Card 
                    key={this.state.drink.idDrink} 
                    id={this.state.drink.idDrink} 
                    strDrinkThumb={this.state.drink.strDrinkThumb}
                    drinkName={this.state.drink.strDrink} 
                    handleClick={this.handleClick} 
                    drinkGlass={this.state.drink.strGlass} 
                    isDrillDown={false} drinkIds={[]} /> 
            }
          </div>
        )
      }
}

export default RandomDrink


