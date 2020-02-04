import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';
import FirstLetterFilter from './components/FirstLetterFilter';
import DrinkDetails from './components/DrinkDetails';
import { Constants } from './components/Constants';
import RandomDrink from './components/RandomDrink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      drinks: [],
      drinkIds: [],
      isLoaded: false,
      isDrillDown: false,
    }
  }

  componentDidMount() {
    this.fetch(Constants.search, "rum");
  }

  fetch(queryType, queryDrink, isDrillDown = false) {
    fetch(`${Constants.urlPath}${queryType}${queryDrink}`)
    .then(result => result.json())
    .then(
      (result) => {
        isDrillDown ? this.setState({
          isLoaded: true,
          drinks: result.drinks,
          isDrillDown: true
        }) :
        this.setState({
          drinks: result.drinks,      
          isLoaded: true,   
          isDrillDown: false,
          drinkIds: result.drinks === null ? null : result.drinks.map(drink => drink["idDrink"]),
        });
         
      }
    ).catch(error => {
      console.error('Error:', error);
    })
  }

  handleInputChange = event => {
    this.setState({search: event.target.value});
  }

  handleEnterPressed = event => {
    if(event.key === "Enter") {
      this.fetch(Constants.search, this.state.search);
      event.target.value = "";
    }
  }

  handleBannerClick = () => {
    if(this.state.isDrillDown) {
      this.fetch(Constants.search, this.state.search);
    }
  }

  // handleClick queries the api for the id of the clicked drink, returns details and sets drilldown to true
  // if drinkid is invalid, returns list of cards using first letter of clicked drink? 
  handleClick = event => {
    parseInt(event.target.id) >= 1 ? this.fetch(Constants.lookup, event.target.id, true) : this.fetch(Constants.searchFirstLetter, event.target.innerHTML);
  }

  render () {
    return (
      <ErrorBoundary>
      <div className="App tc">
        <h1 onClick={this.handleBannerClick}>Mixed Drinks</h1>
        <Input handleInputChange={this.handleInputChange} handleEnterPressed={this.handleEnterPressed} />
        {!this.state.isLoaded ? "Loading..." :
          this.state.drinks === null ? <h1>No Drinks Found</h1>: 
          this.state.drinks.map(drink =>
          <Card 
            key={drink.idDrink} 
            id={drink.idDrink} 
            strDrinkThumb={drink.strDrinkThumb} 
            drinkName={drink.strDrink} 
            handleClick={this.handleClick} 
            drinkGlass={drink.strGlass} 
            isDrillDown={this.state.isDrillDown} 
            drinkIds={this.state.drinkIds} 
          />
        )}
        {/* Random Drink should return a card that is hooked to the objects in this.state */}
        {/* Need to find some way to return isDrillDown state from RandomDrink to App */}
        <RandomDrink 
          handleClick={this.handleClick}
          isDrillDown={this.state.isDrillDown} 
        />
        {!this.state.isDrillDown ? null : 
        <DrinkDetails 
          key={this.state.drinks[0].idDrink} 
          drink={this.state.drinks[0]}
        />
        }
        <FirstLetterFilter handleClick={this.handleClick} />
        </div>
        
      </ErrorBoundary>
    )
  }
}

export default App;