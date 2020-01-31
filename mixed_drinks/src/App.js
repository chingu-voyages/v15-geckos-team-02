import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';
import FirstLetterFilter from './components/FirstLetterFilter';
import DrinkDetails from './components/DrinkDetails';
import SelectedDrinks from './components/SelectedDrinks';

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
    this.fetch(this.urlPathModifier("search"), "rum");
  }
  

  fetch(urlPath, drinkQuery, isDrillDown = false) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/${urlPath}${drinkQuery}`)
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

  urlPathModifier = (queryType) => {
    if(queryType === "lookup") {
      return "lookup.php?i=";
    }
    if(queryType === "random") {
      return "random.php";
    }
    if(queryType === "search") {
      return "search.php?s=";
    }
    if(queryType === "searchFirstLetter") {
      return "search.php?f=";
    }
  }

  handleInputChange = event => {
    this.setState({search: event.target.value});
  }

  handleEnterPressed = event => {
    if(event.key === "Enter") {
      this.fetch(this.urlPathModifier("search"), this.state.search);
    }
  }

  handleClick = event => {
    parseInt(event.target.id) >= 1 ? this.fetch(this.urlPathModifier("lookup"), event.target.id, true) : this.fetch(this.urlPathModifier("searchFirstLetter"), event.target.innerHTML);
  }

  render () {
    return (
      <ErrorBoundary>
      <div className="App">
        <h1>Mixed Drinks</h1>
        <Input handleInputChange={this.handleInputChange} handleEnterPressed={this.handleEnterPressed} />
        <SelectedDrinks />
        {!this.state.isLoaded ? "Loading..." :
        this.state.drinks === null ? <h1>No Drinks Found</h1>: 
        this.state.drinks.map(drink =>
        <Card key={drink.idDrink} id={drink.idDrink} strDrinkThumb={drink.strDrinkThumb} drinkName={drink.strDrink} handleClick={this.handleClick} drinkGlass={drink.strGlass} 
        isDrillDown={this.state.isDrillDown} drinkIds={this.state.drinkIds} />
        )}
        {!this.state.isDrillDown ? null : this.state.drinks.map(drink => {
          const ingredients = Object.getOwnPropertyNames(drink).filter(propertyName => propertyName.startsWith("strIngredient")).map(ingredient => drink[ingredient]);
          const measurements = Object.getOwnPropertyNames(drink).filter(propertyName => propertyName.startsWith("strMeasure")).map(measure => drink[measure]);
            return <DrinkDetails key={drink.idDrink} instructions={drink.strInstructions} ingredients={ingredients} measurements={measurements} />
        })}
        <FirstLetterFilter handleClick={this.handleClick} />
      </div>
      </ErrorBoundary>
    )
  }
}

export default App;