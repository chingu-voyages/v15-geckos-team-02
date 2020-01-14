import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      drinks: []
    }
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
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
        {!this.state.isLoaded ? "loading" :
        this.state.drinks.map(item => {
          return (
            <Card drinkName={item.strDrink}/>
          )
        })
      }
      </div>
    )
  }
}

export default App;
