import React, { Component } from 'react';

class Products extends Component {
    state = {
        name: '',
        qty: '',
        measurement: '',
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
            measurement: this.state.measurement
        })
        this.props.getIngredient(arrayCopy)
        this.setState({
            ingredients : arrayCopy,
            name: '',
            qty: '',
            measurement: ''
        })
    }

    displayIngredients = () => {
        console.log(this.props.foodData)
        return this.state.ingredients.map((eachIngredient, i) => {
          return (
             <li className='products' key={eachIngredient.name}>
                <img src={this.props.foodData[i]?.photo.highres} style={{width: '30px'}} alt=''/> {eachIngredient.qty} {eachIngredient.measurement} {eachIngredient.name}
            </li>
          );
        });
      };


    render() {
        console.log(this.props, this.state)

        return (
            <section className = 'sections'>
            <div className='section-products'>
                <form className= 'calc-form' onSubmit = {this.enterIngredient}>
                <label htmlFor="pname">Product name: </label>
                <br />
                <input onChange={this.addingProducts}type="text" name="name" value = {this.state.name} placeholder='ex: pizza' required/>
                <br />
                <label htmlFor="qty">Quantity: </label>
                <br />
                <input onChange={this.addingProducts}type="number" name="qty" value = { this.state.qty} placeholder='number' required />
                <br />
                <select name="measurement" value={this.state.measurement}onChange={this.addingProducts}>
                    <option disabled value=''>Select one</option>
                    <option value="cup">cup</option>
                    <option value="oz">oz</option>
                    <option value="qt">qt</option>
                    <option value="tbsp">tbsp</option>
                    <option value="tsp">tsp</option>
                    <option value="g">g</option>
                </select>
                <br />
                <button type='submit' id='add' className='calc-buttons'>Add</button>
                
                </form> 
                {this.displayIngredients()}

            </div>

            </section>

        );
    }
}

export default Products;