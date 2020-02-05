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
      isRandom: false
    }
  }

  componentDidMount() {
    this.fetch(Constants.search, "rum");
  }

  fetch(queryType, queryDrink, isDrillDown = false, inRandom = false) {
    fetch(`${Constants.urlPath}${queryType}${queryDrink}`)
    .then(result => result.json())
    .then(
      (result) => {
        isDrillDown ? this.setState({
          isLoaded: true,
          drinks: result.drinks,
          isDrillDown: true,
          isRandom: inRandom,
        }) :
        this.setState({
          drinks: result.drinks,      
          isLoaded: true,   
          isDrillDown: false,
          drinkIds: result.drinks === null ? null : result.drinks.map(drink => drink["idDrink"]),
          isRandom: false,
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
      this.fetch(Constants.search, this.state.search, false, false);
      event.target.value = "";
    }
  }

  handleBannerClick = () => {
    if(this.state.isDrillDown) {
      this.fetch(Constants.search, this.state.search, false, false);
    }
  }

  updateDrinks = (drink) => {
    // this is for RandomDrink to pass its drink to App 
    this.setState({
      drinks: [drink],
    })
  }

  handleClick = event => {
    if(event.target.name === "randomButton"){
      return; 
    } 
    if(event.target.getAttribute("name") === "randomCard"){  
      this.fetch(Constants.lookup, event.target.id, true, true);
      return;
    }
    parseInt(event.target.id) >= 1 ? this.fetch(Constants.lookup, event.target.id, true) : this.fetch(Constants.searchFirstLetter, event.target.innerHTML);
  }

  render () {
    return (
      <ErrorBoundary>
      <div className="App tc">
        <h1 onClick={this.handleBannerClick}>Mixed Drinks</h1>
        <Input handleInputChange={this.handleInputChange} handleEnterPressed={this.handleEnterPressed} />
        {/* If isRandom is true, no Cards are displayed, except the randomCard */}
        {!this.state.isLoaded ? "Loading..." :
          this.state.drinks === null ? <h1>No Drinks Found</h1> : 
          this.state.isRandom ? null : 
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
        {!this.state.isRandom && this.state.isDrillDown ? null :
        <RandomDrink 
          handleClick={this.handleClick}
          isDrillDown={this.state.isDrillDown} 
          updateAppDrinks={this.updateDrinks}
        />
        }
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