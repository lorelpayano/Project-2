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

    enterIngredient = (event) => {
        event.preventDefault()
        console.log("submit")
        let arrayCopy = [...this.state.ingredients]
        arrayCopy.push({
            name : this.state.name,
            qty : this.state.qty,
        })
        this.props.getIngredient(arrayCopy)
        this.setState({
            ingredients : arrayCopy,
            name: '',
            qty: '',
        })
    }

    displayIngredients = () => {
        return this.state.ingredients.map((eachIngredient) => {
          return (
             <div key={eachIngredient.name}> <div>{eachIngredient.name}</div>
              <div>{eachIngredient.qty}</div> </div>
          );
        });
      };


    render() {
        console.log(this.state)
        return (
            <div>
                {this.displayIngredients()}
                <form onSubmit = {this.enterIngredient}>
                <label htmlFor="pname">Product name:</label>
            
                <input onChange={this.addingProducts}type="text" name="name" value = {this.state.name} placeholder='ex: pizza' required/>
                
                <label htmlFor="qty">Quantity name:</label>
                
                <input onChange={this.addingProducts}type="number" name="qty" value = { this.state.qty} placeholder='number' required />

                <button type='submit' id='add'>Add</button>
                </form> 
                
            </div>
        );
    }
}

export default Products;