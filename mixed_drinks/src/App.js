import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';
import FirstLetterFilter from './components/FirstLetterFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isLoaded: false,
      drinks: []
    }
  }

  componentDidMount() {
    this.fetch("search","?s=","rum")
  }
  
  fetch(queryType, extension, queryFor) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/${queryType}.php${extension}${queryFor}`)
    .then(result => result.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          drinks: result.drinks
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

    handleClickLetter = event => {
      this.fetch("search", "?f=", event.target.innerHTML)
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
          const {idDrink, strDrink, strInstructions} = drink;
          const propertyName = Object.getOwnPropertyNames(drink);
          const strIngredient = propertyName.filter(propertyName => propertyName.startsWith("strIngredient"));
          const ingredients = strIngredient.map(ingredient => drink[ingredient]);
          const strMeasure = propertyName.filter(propertyName => propertyName.startsWith("strMeasure"));
          const measurements = strMeasure.map(measure => drink[measure])
          return (
            <Card key={idDrink} id={idDrink} drinkName={strDrink} instructions={strInstructions} ingredients={ingredients} measurements={measurements} />
          )
        })
        }       
        <FirstLetterFilter handleClickLetter={this.handleClickLetter} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;