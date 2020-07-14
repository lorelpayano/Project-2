import React, { Component } from 'react';
// import nutritionix from 'nutritionix-api';

class Nutrients extends Component {

    displayNutrients = () => { 
        return <table className = 'calc-table'>
            <tr>
            <td className = 'table-header'>Nutrition Facts</td>
            </tr>
            <tr>
                <td>Calories: {this.props.foodData.reduce((a,v) => a+=+v.nf_calories,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Fat: {this.props.foodData.reduce((a,v) => a+=+v.nf_total_fat,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Saturated_fat: {this.props.foodData.reduce((a,v) => a+=+v.nf_saturated_fat,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Cholesterol: {this.props.foodData.reduce((a,v) => a+=+v.nf_cholesterol,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Sodium: {this.props.foodData.reduce((a,v) => a+=+v.nf_sodium,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Potassium: {this.props.foodData.reduce((a,v) => a+=+v.nf_potassium,0).toFixed(2)}</td>
            </tr>
            <tr>
            <td>Carbohydrate: {this.props.foodData.reduce((a,v) => a+=+v.nf_total_carbohydrate,0).toFixed(2)}</td>
            </tr>
            <tr>
            <td>Sugars: {this.props.foodData.reduce((a,v) => a+=+v.nf_sugars,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Fiber: {this.props.foodData.reduce((a,v) => a+=+v.nf_dietary_fiber,0).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Protein: {this.props.foodData.reduce((a,v) => a+=+v.nf_protein, 0).toFixed(2)}</td>
            </tr>
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