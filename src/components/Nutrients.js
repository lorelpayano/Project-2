import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import nutritionix from 'nutritionix-api'

class Nutrients extends Component {

    displayNutrition = () =>{
  
    }
=======
import nutritionix from 'nutritionix-api';

class Nutrients extends Component {
    state = {
        // ndb_no: 21299,
        calories: 0,
        fat: 0,
        saturated_fat: 0,
        cholesterol: 0,
        sodium: 0,
        potassium: 0,
        carbohydrate: 0,
        sugars: 0,
        fiber: 0,
        protein: 0
    }

    submitting = async (e) => {
      
        let res = await nutritionix.natural.search(this.state.query)
          console.log(res);
      
      
        
        this.setState({
          source: res2.data.data[0].id
        })
      }


    displayNutrients = (e) => { 
        this.setState ({
          calories: res.foods[0].nf_calories,
          fat: res.foods[0].nf_total_fat,
          saturated_fat: res.foods[0].nf_saturated_fat,
          cholesterol: res.foods[0].nf_cholesterol,
          sodium: res.foods[0].nf_sodium,
          potassium: res.foods[0].nf_potassium,
          carbohydrate: res.foods[0].nf_total_carbohydrate,
          sugars: res.foods[0].nf_sugars,
          fiber: res.foods[0].nf_dietary_fiber,
          protein: res.foods[0].nf_protein
        })

    }
      
>>>>>>> 5f084a0691cbc05a1b712b59f393f1e73aa6d725

    render() {
        return (
            <div>
<<<<<<< HEAD
                
=======
                {this.displayNutrients()}
                <button onClick={this.submitting}> Submit</button>

>>>>>>> 5f084a0691cbc05a1b712b59f393f1e73aa6d725
            </div>
        );
    }
}

export default Nutrients;