import React, { Component } from 'react';
import nutritionix from '../nutritionix'
import Nutrients from './Nutrients'
import Products from './Products'
// import Recipes from './components/Recipes'
// import {Link, Switch, Route} from 'react-router-dom'


const YOUR_APP_ID   = 'b9b8c82e'; // Your APP ID
const YOUR_API_KEY  = 'c5e6d5a953ec1e27906aa91050035dea'; // Your KEY
nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);


class Calculator extends Component {
  state = {
    query: [],
    source: '',
    foodData: [],
  }

getIngredient = (ingredients) => {
  console.log(ingredients)
  this.setState({
    query: ingredients
  })
  // this.submitting(ingredients)
}

testExercise = async () => {
    const exercise = '30 min yoga';
    const res = await nutritionix.exercise.search(exercise);
    console.log(res)
}

submitting = async () => {
  const ingredient = this.state.query.map(i => `${i.qty} ${i.measurement} ${i.name}`).join('\n');
  console.log(this.state.query, ingredient)
  const res = await nutritionix.natural.search(ingredient)
  console.log(res);
  this.testExercise()

  // let res2 = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=DJw9IYgU5zke3slpNh5BhLf7ISL13ygm&q=${this.state.query}`)
  // console.log(res2)


  this.setState({
    // source: res2.data.data[0].id,
    foodData: res.foods
  })
}


  render() {

    console.log(this.state.source)

    return (
      <div>
        <Nutrients foodData={this.state.foodData} />
        <Products getIngredient={this.getIngredient}/>
        {/* <Recipes /> */}




        {/* <input onChange={this.searching} type= 'text'></input> */}
        <button onClick={this.submitting}> Submit</button>
        {
          this.state.foodData[0] &&
          this.state.foodData.map(food => (
            <img key={food.photo.highres} src={food.photo.highres} style={{width: '120px'}}alt='img_src' />
          ))
        }
        {/* `https://i.giphy.com/media/${this.state.source}/giphy.webp` */}
      
      </div>
    );
  }
}

export default Calculator;