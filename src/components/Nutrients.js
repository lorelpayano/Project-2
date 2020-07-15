import React, { Component } from 'react';
// import nutritionix from 'nutritionix-api';

class Nutrients extends Component {

    displayNutrients = () => { 
        return <table className = 'calc-table'>
            <tr>
            <th className = 'table-header'>Nutrition Facts</th>
            </tr>
            <tr>
                <td><b>Calories:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_calories,0).toFixed(2)} g</td>
            </tr>
            <tr>
                <td><b>Fat:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_total_fat,0).toFixed(2)} g</td>
            </tr>
            <tr>
                <td><b>Saturated Fat:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_saturated_fat,0).toFixed(2)} g</td>
            </tr>
            <tr>
                <td><b>Cholesterol:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_cholesterol,0).toFixed(2)} mg</td>
            </tr>
            <tr>
                <td><b>Sodium:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_sodium,0).toFixed(2)} mg</td>
            </tr>
            <tr>
                <td><b>Potassium:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_potassium,0).toFixed(2)} mg</td>
            </tr>
            <tr>
            <td><b>Carbohydrate:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_total_carbohydrate,0).toFixed(2)} g</td>
            </tr>
            <tr>
            <td><b>Sugars:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_sugars,0).toFixed(2)} g</td>
            </tr>
            <tr>
                <td><b>Fiber:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_dietary_fiber,0).toFixed(2)} g</td>
            </tr>
            <tr>
                <td><b>Protein:</b> {this.props.foodData.reduce((a,v) => a+=+v.nf_protein, 0).toFixed(2)} g</td>
            </tr>
            <p className='nutrient-disclaimer'> Percent Daily Values are based on a 2000 calorie diet.</p>
        </table>

                // <li>
        //   calories: {this.props.foodData.reduce((a,v) => a+=+v.nf_calories,0).toFixed(2)},
        //   fat: {this.props.foodData.reduce((a,v) => a+=+v.nf_total_fat,0).toFixed(2)},
        //   saturated_fat: {this.props.foodData.reduce((a,v) => a+=+v.nf_saturated_fat,0).toFixed(2)},
        //   cholesterol: {this.props.foodData.reduce((a,v) => a+=+v.nf_cholesterol,0).toFixed(2)},
        //   sodium: {this.props.foodData.reduce((a,v) => a+=+v.nf_sodium,0).toFixed(2)},
        //   potassium: {this.props.foodData.reduce((a,v) => a+=+v.nf_potassium,0).toFixed(2)},
        //   carbohydrate: {this.props.foodData.reduce((a,v) => a+=+v.nf_total_carbohydrate,0).toFixed(2)},
        //   sugars: {this.props.foodData.reduce((a,v) => a+=+v.nf_sugars,0).toFixed(2)},
        //   fiber: {this.props.foodData.reduce((a,v) => a+=+v.nf_dietary_fiber,0).toFixed(2)},
        //   protein: {this.props.foodData.reduce((a,v) => a+=+v.nf_protein, 0).toFixed(2)}
        //   </li>
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