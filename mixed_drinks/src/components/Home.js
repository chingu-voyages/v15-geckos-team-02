import React from 'react';
import Card from './Card';
import RandomDrink from './RandomDrink';
import FirstLetterFilter from './FirstLetterFilter';
import DrinkDetails from './DrinkDetails';
import Input from './Input';
import SelectedDrinks from './SelectedDrinks';
import './Home.css';

const Home = props => {
    return (
        <div>
            <Input handleInputChange={props.handleInputChange} handleEnterPressed={props.handleEnterPressed} />
            <FirstLetterFilter handleClick={props.handleClick} />
            <div className="mainContainer absolute-ns">
                {!props.state.isLoaded ? "Loading..." :
                props.state.drinks === null ? <h1>No Drinks Found</h1> : 
                props.state.isRandom ? null : 
                props.state.drinks.map(drink =>
                <Card 
                    key={drink.idDrink} 
                    id={drink.idDrink}
                    drink={drink}
                    strDrinkThumb={drink.strDrinkThumb} 
                    drinkName={drink.strDrink} 
                    handleClick={props.handleClick} 
                    drinkGlass={drink.strGlass} 
                    isDrillDown={props.state.isDrillDown} 
                    drinkIds={props.state.drinkIds} 
                    addToFavoriteDrinks={props.addToFavoriteDrinks}
                    favoriteDrinks={props.state.favoriteDrinks}
                    deleteFavoriteDrink={props.deleteFavoriteDrink}
                />)}
                {!props.state.isRandom && props.state.isDrillDown ? null :
                <RandomDrink 
                    handleClick={props.handleClick}
                    isDrillDown={props.state.isDrillDown} 
                    updateAppDrinks={props.updateAppDrinks}
                    drinkIds={props.state.drinkIds} 
                    addToFavoriteDrinks={props.addToFavoriteDrinks}
                    favoriteDrinks={props.state.favoriteDrinks}
                    state={props.state}
                />}
                {!props.state.isDrillDown ? null : 
                <DrinkDetails key={props.state.drinks[0].idDrink} drink={props.state.drinks[0]} />}
                <SelectedDrinks
                    handleClick={props.handleClick}
                    isDrillDown={props.state.isDrillDown} 
                    drinkIds={props.state.drinkIds} 
                    favoriteDrinks={props.state.favoriteDrinks}
                    deleteFavoriteDrink={props.deleteFavoriteDrink}
                />
            </div>
      </div>
    )
}

export default Home;