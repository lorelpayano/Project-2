import React, { Component } from 'react';
import nutritionix from '../nutritionix'
import Nutrients from './Nutrients'
import Products from './Products'
// import banner from '../images/Nutritionbanner.png'
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
  
refreshPage() {
    window.location.reload(false);
}


  render() {

    console.log(this.state.source)

    return (
        <section className = 'sections'>
            <div className='banner'>
                <p className='calc-header'>Healthy lifestyles start here</p>
            </div>

            <div className='section-calc'>
                <div className='product-form'>
                <Products getIngredient={this.getIngredient} foodData={this.state.foodData} />
                </div>
                <div>
                <Nutrients foodData={this.state.foodData} />
                </div>
                {/* <div>
                {
                this.state.foodData[0] &&
                this.state.foodData.map(food => (
                <img key={food.photo.highres} src={food.photo.highres} style={{width: '80px'}} alt='img_src' />
                ))
                }
                </div> */}
            </div>

            <div className='calc-buttons-div'>
                <button onClick={this.submitting} className='calc-buttons'> Submit</button>
                <button onClick={this.refreshPage} className='calc-buttons'>Refresh</button>
            </div>



            

        </section>
    );
  }
}

export default Calculator;