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
        <div className='recipes' style= {{display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin:'auto 130px'}} key={eachRecipe.recipe.url}>

        <img className='recipe-image' src={eachRecipe.recipe.image} alt='img'/>
        <div >

        <h3>{eachRecipe.recipe.label}</h3>
        <p>{eachRecipe.recipe.dietLabels}</p>
        <p>{eachRecipe.recipe.healthLabels}</p>
        <a className='recipe-a' target="_blanc" href={eachRecipe.recipe.url}>
        <p><b>{eachRecipe.recipe.source}</b></p>
        </a>
        <p className='ingredients'>{eachRecipe.recipe.ingredientLines}</p>
        {/* <p>{eachRecipe.recipe.totalTime}</p> */}
        {/* <p>
        {eachRecipe.recipe?.ingredients.map((eachIngredient) => { 
            return ( 
                <p>{eachRecipe.recipe?.ingredients.text}</p>
             );
            })
        };
        </p> */}
        </div>
        </div>
        );
    })
}

refreshPage() {
    window.location.reload(false);
}


    render() {
        console.log(this.state.recipeList)
        return (
            <section className = 'sections'>
            <p className='recipe-header'>Healthy Recipes</p>

            <div className='recipe-banner'>
                    <div id='search-refresh'>
                        <form onSubmit = {this.submitRecipeSearch}>               
                            <label htmlFor="search"></label>
                            <input onChange={this.recipeSearch} className='searchBar' type="text" value ={this.state.query2}name="searchName" placeholder='Search for foods or ingredients' required />
                            <br />
                            <button type='submit' className='recipe-buttons'> Search</button>
                            <button onClick={this.refreshPage} class='recipe-buttons'>Refresh</button>
                        </form>
                    </div>

            </div>
                <div className='recipesPage'>


                    {this.displayRecipes()}
                </div>
            </section>

        );
    }
}

export default Recipes;