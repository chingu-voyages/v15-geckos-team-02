import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './components/NavBar';
import { Constants } from './components/Constants';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Favorites from './components/Favorites';

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
      isRandom: false
    }
  }

  componentDidMount() {
    this.fetch(Constants.search, "rum");
    const favoriteDrinkKeys = Object.keys(localStorage);
    const favoriteDrinks = [];
    favoriteDrinkKeys.forEach(drink => favoriteDrinks.push(JSON.parse(localStorage.getItem(drink))));
    this.setState({favoriteDrinks: favoriteDrinks})
  }

  fetch(queryType, queryDrink, isDrillDown = false, isRandom = false) {
    fetch(`${Constants.urlPath}${queryType}${queryDrink}`)
    .then(result => result.json())
    .then(
      (result) => {
        isDrillDown ? this.setState({
          isLoaded: true,
          drinks: result.drinks,
          isDrillDown: true,
          isRandom: isRandom,
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

  onHomeClick = () => {
    this.fetch(Constants.search, "rum");
  }

  updateAppDrinks = (drink, favorite = false) => {
    // update for AppDrink for Favorites and RandomDrink
    let drinkIds = this.state.favoriteDrinks.map(drink => drink.idDrink);
    favorite ? this.setState({
      drinks: this.state.favoriteDrinks,
      drinkIds: drinkIds,
      isDrillDown: false
    }) : 
    this.setState({
      drinks: [drink]
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

  addToFavoriteDrinks = drinkToAdd => {
    let favoriteDrinksCopy = [...this.state.favoriteDrinks];
    let favoriteDrinkIds = favoriteDrinksCopy.map(drink => drink.idDrink)
    favoriteDrinksCopy.push(drinkToAdd);
    if(!favoriteDrinkIds.includes(drinkToAdd.idDrink)) {
      this.setState({favoriteDrinks: favoriteDrinksCopy});
      localStorage.setItem(`${drinkToAdd.strDrink}`, JSON.stringify(drinkToAdd));
    } 
  }

  deleteFavoriteDrink = (drinkToDelete, isFavoritesPage) => {
    const favoriteDrinksCopy = [...this.state.favoriteDrinks];
    const favoriteDrinkIds = favoriteDrinksCopy.map(drink => drink.idDrink)
    drinkToDelete.forEach(drink => favoriteDrinksCopy.splice(drinkToDelete.length > 1 ? 0 : favoriteDrinkIds.indexOf(drink.idDrink), 1));
    this.setState({ favoriteDrinks: favoriteDrinksCopy });
    drinkToDelete.forEach(drink => {
      localStorage.removeItem(`${drink.strDrink}`)
    })
  
    if(isFavoritesPage){
      this.setState({favoriteDrinks: favoriteDrinksCopy, drinks: favoriteDrinksCopy, isDrillDown: false})
    }
  }

  render () {
    return (
    <ErrorBoundary>
      <Router>
      <div className="App tc">
        <NavBar 
          homeClick={this.onHomeClick} 
          updateAppDrinks={this.updateAppDrinks} 
          favoriteDrinks={this.state.favoriteDrinks}
        />
          <Switch>
          <Route 
            path="/home" exact 
            render={(_props) => 
              <Home 
                state={this.state} 
                handleClick={this.handleClick} 
                addToFavoriteDrinks={this.addToFavoriteDrinks} 
                updateAppDrinks={this.updateAppDrinks}
                handleInputChange={this.handleInputChange}
                handleEnterPressed={this.handleEnterPressed}
                deleteFavoriteDrink={this.deleteFavoriteDrink}
              />}  
            />
            <Route path="/favorites" 
            exact render={(_props) => 
              <Favorites 
                state={this.state}
                favoriteDrinks={this.state.favoriteDrinks} 
                handleClick={this.handleClick} 
                addToFavoriteDrinks={this.addToFavoriteDrinks} 
                updateAppDrinks={this.updateAppDrinks}
                handleEnterPressed={this.handleEnterPressed}
                deleteFavoriteDrink={this.deleteFavoriteDrink}
                favoriteDrinksNextIndex={this.favoriteDrinksNextIndex}
              />}
            />
            <Route path="/about" exact component={About} />
          </Switch>
      </div>
      </Router>
      </ErrorBoundary>
    )
  }
}

export default App;

