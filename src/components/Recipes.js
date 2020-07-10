import React, { Component } from 'react';
import axios from 'axios'

class Recipes extends Component {
    state = {
        recipeList: []
    }



async componentDidMount() {
    let res3 = await axios.get ('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_key=3790c19a5d35e049c9344777237ef0c9&app_id=8ac1bbac&q=chicken')
    console.log(res3)
    this.setState ({
        recipeList: res3.data.hits
    })
    console.log(this.state.recipeList)


}

displayRecipes = () => {

    return <div>{this.state.recipeList[0]?.recipe.label}</div>
}


// data.


    render() {
        return (
            <div>
            <h1>RECIPES PAGE</h1>
            {this.displayRecipes()}

            {/* <button onClick={}>Get Recipes</button> */}
                
            </div>
        );
    }
}

export default Recipes;