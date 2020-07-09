import React, { Component } from 'react';
import nutritionix from 'nutritionix-api';

class Nutrients extends Component {
    // state = {
    //     // ndb_no: 21299,
    //     calories: 0,
    //     fat: 0,
    //     saturated_fat: 0,
    //     cholesterol: 0,
    //     sodium: 0,
    //     potassium: 0,
    //     carbohydrate: 0,
    //     sugars: 0,
    //     fiber: 0,
    //     protein: 0
    // }

    submitting = async (e) => {
      
        let res = await nutritionix.natural.search(this.state.query)
          console.log(res);
      
      
        
        this.setState({
        //   source: res2.data.data[0].id
        })
      }


    displayNutrients = () => { 
        return <p>
          calories: {this.props.foodData.nf_calories},
          fat: {this.props.foodData.nf_total_fat},
          saturated_fat: {this.props.foodData.nf_saturated_fat},
          cholesterol: {this.props.foodData.nf_cholesterol},
          sodium: {this.props.foodData.nf_sodium},
          potassium: {this.props.foodData.nf_potassium},
          carbohydrate: {this.props.foodData.nf_total_carbohydrate},
          sugars: {this.props.foodData.nf_sugars},
          fiber: {this.props.foodData.nf_dietary_fiber},
          protein: {this.props.foodData.nf_protein}</p>
    }
      

    render() {
        return (
            <div>
                {this.displayNutrients()}
                {this.props.foodData.food_name}

            </div>
        );
    }
}

export default Nutrients;