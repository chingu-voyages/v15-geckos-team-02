import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';
import FirstLetterFilter from './components/FirstLetterFilter';
import DrinkDetails from './components/DrinkDetails';
import SelectedDrinks from './components/SelectedDrinks';
import NavBar from './components/NavBar';
import { Constants } from './components/Constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      favoriteDrinks: [],
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
        })
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
      this.fetch(Constants.search, this.state.search)
    }
  }

  onHomeClick = (event) => {
          
    this.fetch(Constants.search, "rum");
  
  }

  handleClick = event => {
    parseInt(event.target.id) >= 1 ? this.fetch(Constants.lookup, event.target.id, true) : this.fetch(Constants.searchFirstLetter, event.target.innerHTML);
  }

  addToFavoriteDrinks = drinkToAdd => {
    let favoriteDrinksCopy = [...this.state.favoriteDrinks];
    let favoriteDrinkIds = favoriteDrinksCopy.map(drink => drink.idDrink)
    favoriteDrinksCopy.push(drinkToAdd);
    if(!favoriteDrinkIds.includes(drinkToAdd.idDrink)) {
      this.setState({favoriteDrinks: favoriteDrinksCopy});
    } 
  }
  
  render () {
    return (
    <ErrorBoundary>
      <div className="App tc">
        <NavBar homeClick={this.onHomeClick}/>
        <Input handleInputChange={this.handleInputChange} handleEnterPressed={this.handleEnterPressed} />
        <SelectedDrinks
          handleClick={this.handleClick}
          isDrillDown={this.state.isDrillDown} 
          drinkIds={this.state.drinkIds} 
          favoriteDrinks={this.state.favoriteDrinks}
        />
        {!this.state.isLoaded ? "Loading..." :
        this.state.drinks === null ? <h1>No Drinks Found</h1>: 
        this.state.drinks.map(drink =>
        <Card 
          key={drink.idDrink} 
          id={drink.idDrink}
          drink={drink}
          isDrillDown={this.state.isDrillDown} 
          drinkIds={this.state.drinkIds}
          handleClick={this.handleClick} 
          addToFavoriteDrinks={this.addToFavoriteDrinks}
          favoriteDrinks={this.state.favoriteDrinks}
        />
        )}
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