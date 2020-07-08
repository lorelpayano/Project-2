import React, { Component } from 'react';
import axios from 'axios';
//Nice job
class App extends Component {
  state = {
    query: ''
  }


  async componentDidMount(){
    let res = await axios.get("https://api.nutritionix.com/v1_1/search/cookie?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=b9b8c82e&appKey=c5e6d5a953ec1e27906aa91050035dea")
    console.log(res)
}

// curl -XPOST https://api.nutritionix.com/v1_1/search -H 'Content-Type: application/json' -d'

searching = (e) => { 
  this.setState ({
    query: e.target.value
  })
  console.log(e.target.value)
}

submitting = async (e) => {
  let res = await axios.get(`https://api.nutritionix.com/v1_1/search/${this.state.query}?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=b9b8c82e&appKey=c5e6d5a953ec1e27906aa91050035dea`)
  console.log(res)

  let res2 = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=DJw9IYgU5zke3slpNh5BhLf7ISL13ygm&q=${this.state.query}`)
  console.log(res2)
  this.setState({
    
  })
}





  render() {
    return (
      <div>
        <input onChange={this.searching} type= 'text'></input>
        <button onClick={this.submitting}> Submit</button>
      </div>
    );
  }
}

export default App;