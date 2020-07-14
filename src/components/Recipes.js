import React, { Component } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

class Recipes extends Component {
    state = {
        recipeList: [],
        query2: '',
        searchName: ''
    }



// async componentDidMount(e) {
//     let res3 = await axios.get ('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_key=3790c19a5d35e049c9344777237ef0c9&app_id=8ac1bbac&q=steak')
//     console.log(res3)
//     this.setState ({
//         recipeList: res3.data.hits
//     })
//     console.log(this.state.recipeList)
// }

recipeSearch = (event) => {
    this.setState ({
        query2: event.target.value
    })
}

submitRecipeSearch = async (event) => {
    event.preventDefault()
    let res3 = await axios.get (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_key=3790c19a5d35e049c9344777237ef0c9&app_id=8ac1bbac&q=${this.state.query2}`)
        this.setState ({
        recipeList: res3.data.hits
        })
}

addingFoods = (event) => {
    this.setState({
        [event.target.searchName]: event.target.value
    })
}

enterFood = (event) => {
    event.preventDefault()
    console.log("submit")
    let recipeCopy = [...this.state.recipeList]
    recipeCopy.push({
        searchName : this.state.searchName,
    })
    // this.props.getIngredient(arrayCopy)
    this.setState({
        recipeList : recipeCopy,
        searchName: '',
    })
}

displayRecipes = () => {
    return this.state.recipeList.map((eachRecipe) => {
        return (
        <div className='recipes' key={eachRecipe.recipe.url}>

        <h3>{eachRecipe.recipe.label}</h3>
        <p>{eachRecipe.recipe.dietLabels}</p>
        <p>{eachRecipe.recipe.healthLabels}</p>
        <a target="_blanc" href={eachRecipe.recipe.url}>
        <img className='recipe-image' src={eachRecipe.recipe.image} alt='img'/>
        </a>
        {/* <p>
        {eachRecipe.recipe?.ingredients.map((eachIngredient) => { 
            return ( 
                <p>{eachRecipe.recipe?.ingredients.text}</p>
             );
            })
        };
        </p> */}
        <p className='ingredients'>{eachRecipe.recipe.ingredientLines}</p>
        <p>{eachRecipe.recipe.source}</p>
        <p>{eachRecipe.recipe.totalTime}</p>

        </div>
        );
    })
}





    render() {
        return (
            <div className='recipesPage'>
            <h1>RECIPES</h1>

                <form onSubmit = {this.submitRecipeSearch}>               
                <label htmlFor="search"></label>
                {/* <input onChange={this.addingFoods} type="text" name="searchName" value = {this.state.searchName} placeholder='ex: grilled chicken' required /> */}
                <input onChange={this.recipeSearch} className='searchBar' type="text" value ={this.state.query2}name="searchName" placeholder='Search for a food, brand, or ingredient' required />
                <button type='submit' id='search'> Search</button>
                </form> 

                <button>REFRESH</button>
                
                {this.displayRecipes()}


            {/* <button onClick={}>Get Recipes</button> */}
                
            </div>
        );
    }
}

export default Recipes;