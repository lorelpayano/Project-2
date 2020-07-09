import React, { Component } from 'react';

class Nutrients extends Component {


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