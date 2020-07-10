import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Recipes extends Component {
    state = {
        recipeList: [],
        query2: ''
    }



async componentDidMount() {
    let res3 = await axios.get ('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_key=3790c19a5d35e049c9344777237ef0c9&app_id=8ac1bbac&q=steak')
    console.log(res3)
    this.setState ({
        recipeList: res3.data.hits
    })
    console.log(this.state.recipeList)


}

displayRecipes = () => {
    return this.state.recipeList.map((eachRecipe) => {
        return (
        <div key={eachRecipe.recipe.label}>

        <h5>{eachRecipe.recipe.label}</h5>
        <p>{eachRecipe.recipe.dietLabels}</p>
        <p>{eachRecipe.recipe.healthLabels}</p>
        <Link to={eachRecipe.recipe.url}>
        <img src={eachRecipe.recipe.image} alt='img'/>
        </Link>
        {/* <p>
        {eachRecipe.recipe.ingredients.map((eachIngredient) => { 
            return ( 
                <p>{eachRecipe.recipe.ingredients.text}</p>
             );
            })
        };
        </p> */}
        <p>{eachRecipe.recipe.ingredientLines}</p>
        <p>{eachRecipe.recipe.source}</p>
        <p>{eachRecipe.recipe.totalTime}</p>

        </div>
        );
    })
}

recipeSearch = (e) => {
    this.setState ({
        query2: e.target.value
    })
}

submitRecipeSearch = async (e) => {
    let res3 = await axios.get (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_key=3790c19a5d35e049c9344777237ef0c9&app_id=8ac1bbac&q=${this.state.query2}`)
}


    render() {
        return (
            <div>
            <h1>RECIPES PAGE</h1>
            {this.displayRecipes()}

            <input onChange={this.recipeSearch} type= 'text'></input>
            <button onClick={this.submitRecipeSearch}> Search</button>

            {/* <button onClick={}>Get Recipes</button> */}
                
            </div>
        );
    }
}

export default Recipes;