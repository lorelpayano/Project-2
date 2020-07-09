import React, { Component } from 'react';

class Products extends Component {
    state = {
        name: '',
        qty: '',
        ingredients: []
    }

    addingProducts = (event) => {
        // console.log(event.target.name)
        // console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    makeArray = (event) => {
        event.preventDefault()
        console.log("submit")
        let arrayCopy = [...this.state.ingredients]
        arrayCopy.push({
            name : this.state.name,
            qty : this.state.qty,
        })

        this.setState({
            ingredients : arrayCopy,
            name: '',
            qty: '',
        })
    }

    displayIngredients = () => {
        return this.state.ingredients.map((eachIngredient) => {
          return (
             <p> <div>{eachIngredient.name}</div>
              <div>{eachIngredient.qty}</div> </p>
          );
        });
      };

    render() {
        console.log(this.state)
        return (
            <div>
                {this.displayIngredients()}
                <form onSubmit = {this.makeArray}>
                <label htmlFor="pname">Product name:</label>
            
                <input onChange={this.addingProducts}type="text" name="name" placeholder='ex: pizza' required/>
                
                <label htmlFor="qty">Quantity name:</label>
                
                <input onChange={this.addingProducts}type="number" name="qty" placeholder='number' required />

                <button type='submit' id='add'>Add</button>
                </form> 
                
            </div>
        );
    }
}

export default Products;