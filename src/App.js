import React, { Component } from 'react';
import axios from 'axios';
import nutritionix from 'nutritionix-api'
import Nutrients from './components/Nutrients'
import Products from './components/Products'


const YOUR_APP_ID   = 'b9b8c82e'; // Your APP ID
const YOUR_API_KEY  = 'c5e6d5a953ec1e27906aa91050035dea'; // Your KEY
nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

class App extends Component {
  state = {
    query: '',
    source: '',
    foodData: {}
  }


searching = (e) => { 
  this.setState ({
    query: e.target.value
  })
  console.log(e.target.value)
}

submitting = async (e) => {

  let res = await nutritionix.natural.search(this.state.query)
    console.log(res);


  let res2 = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=DJw9IYgU5zke3slpNh5BhLf7ISL13ygm&q=${this.state.query}`)
  console.log(res2)

  
  this.setState({
    source: res2.data.data[0].id,
    foodData: res.foods[0]
  })
}





  render() {

console.log(this.state.source)

    return (
      <div>
        <Nutrients foodData={this.state.foodData} />
        <Products />
        <input onChange={this.searching} type= 'text'></input>
        <button onClick={this.submitting}> Submit</button>

      {
        this.state.source &&
        <img src={`https://i.giphy.com/media/${this.state.source}/giphy.webp`} alt='img_src' />
      }
      </div>
    );
  }
}

export default App;