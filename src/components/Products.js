import React, { Component } from 'react';

class Products extends Component {
    state = {
        name: '',
        qty: ''
    }


    addingProducts1 = (event) => {
        console.log(event.target.name)
        console.log(this.state)
        this.setState({
            name : event.target.value
        })
    }

    addingProducts2 = (event) => {
        console.log(event.target.name)
        console.log(this.state)
        this.setState({
            qty: event.target.value
        })
    }

    addingProducts = (event) => {
        console.log(event.target.name)
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }




    render() {
        return (
            <div>

                <form >
                <label htmlFor="pname">Product name:</label>
            
                <input onChange={this.addingProducts}type="text" name="name" placeholder='ex: pizza' required/>
                
                <label htmlFor="qty">Quantity name:</label>
                
                <input onChange={this.addingProducts}type="number" name="qty" required />

                <button type='submit' id='add'>Add</button>
                </form> 
                
            </div>
        );
    }
}

export default Products;