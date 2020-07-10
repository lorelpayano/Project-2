import React, { Component } from 'react';
// import nutritionix from 'nutritionix-api';

class Nutrients extends Component {

    displayNutrients = () => { 
        return <li>
          calories: {this.props.foodData.reduce((a,v) => a+=+v.nf_calories,0).toFixed(2)},
          fat: {this.props.foodData.reduce((a,v) => a+=+v.nf_total_fat,0).toFixed(2)},
          saturated_fat: {this.props.foodData.reduce((a,v) => a+=+v.nf_saturated_fat,0).toFixed(2)},
          cholesterol: {this.props.foodData.reduce((a,v) => a+=+v.nf_cholesterol,0).toFixed(2)},
          sodium: {this.props.foodData.reduce((a,v) => a+=+v.nf_sodium,0).toFixed(2)},
          potassium: {this.props.foodData.reduce((a,v) => a+=+v.nf_potassium,0).toFixed(2)},
          carbohydrate: {this.props.foodData.reduce((a,v) => a+=+v.nf_total_carbohydrate,0).toFixed(2)},
          sugars: {this.props.foodData.reduce((a,v) => a+=+v.nf_sugars,0).toFixed(2)},
          fiber: {this.props.foodData.reduce((a,v) => a+=+v.nf_dietary_fiber,0).toFixed(2)},
          protein: {this.props.foodData.reduce((a,v) => a+=+v.nf_protein, 0).toFixed(2)}</li>
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