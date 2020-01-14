import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';

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
    )
  }
  
  render () {
    return (
      <div className="App">
        <Input />
        {!this.state.isLoaded ? "Loading..." :
        this.state.drinks.map(drink => {
          const {strDrink, strInstructions} = drink
          return (
            <Card drinkName={strDrink} instructions={strInstructions}/>
          )
        })
      }
      </div>
    )
  }
}

export default App;
