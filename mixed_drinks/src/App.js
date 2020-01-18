import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';
import FirstLetterFilter from './components/FirstLetterFilter';
import DrinkDetails from './components/DrinkDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      drinks: [],
      isLoaded: false,
      isDrillDown: false,
    }
  }

  componentDidMount() {
    this.fetch("search","?s=","rum")
  }
  
  fetch(queryType, extension, queryFor, isDrillDown = false) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/${queryType}.php${extension}${queryFor}`)
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
          isDrillDown: false
        })
      }
    ).catch(error => {
      console.error('Error:', error)
    })
  }
  handleChange = event => {
    this.setState({search: event.target.value});
  }

  handleEnterPressed = event => {
    if(event.key === "Enter") {
      this.fetch("search", "?s=", this.state.search)
    }
  }

  handleClick = event => {
    parseInt(event.target.id) >= 1 ? this.fetch("lookup", "?i=", event.target.id, true) : this.fetch("search", "?f=", event.target.innerHTML)
  }
  

  render () {
    return (
      <div className="App">
        <h1>Mixed Drinks</h1>
        <Input handleChange={this.handleChange} handleEnterPressed={this.handleEnterPressed} />
        <ErrorBoundary>
        {!this.state.isLoaded ? "Loading..." :
        this.state.drinks === null ? <h1>No Drinks Found</h1>: 
        this.state.drinks.map(drink => {
          return (
            <Card key={drink.idDrink} id={drink.idDrink} strDrinkThumb={drink.strDrinkThumb} drinkName={drink.strDrink} handleClick={this.handleClick} drinkGlass={drink.strGlass}/>
          )
        })
        }
        {!this.state.isDrillDown ? null : this.state.drinks.map(drink => {
          const ingredients = Object.getOwnPropertyNames(drink).filter(propertyName => propertyName.startsWith("strIngredient")).map(ingredient => drink[ingredient]);
          const measurements = Object.getOwnPropertyNames(drink).filter(propertyName => propertyName.startsWith("strMeasure")).map(measure => drink[measure]);
          return (
            <DrinkDetails instructions={drink.strInstructions} ingredients={ingredients} measurements={measurements} />
          )
        })}
        <FirstLetterFilter handleClick={this.handleClick} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;