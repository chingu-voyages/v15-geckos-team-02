import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';

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
    this.fetch("rum")
  }
  
  fetch(search) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
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
      this.fetch(this.state.search)
    }
  }

  render () {
    return (
      <div className="App">
        <Input handleChange={this.handleChange} handleEnterPressed={this.handleEnterPressed} />
        <ErrorBoundary>
        {!this.state.isLoaded ? "Loading..." :
        this.state.drinks === null ? <h1>No Drinks Found</h1>: 
        this.state.drinks.map(drink => {
          const {idDrink, strDrink, strInstructions} = drink;
          return (
            <Card key={idDrink} id={idDrink} drinkName={strDrink} instructions={strInstructions} />
          )
        })
        }
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
