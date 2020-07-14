import React, { Component } from 'react';
import nutritionix from '../nutritionix'


const YOUR_APP_ID   = 'b9b8c82e'; // Your APP ID
const YOUR_API_KEY  = 'c5e6d5a953ec1e27906aa91050035dea'; // Your KEY
nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

class Exercise extends Component {
    state = {
        exerciseList: [],
        query3: '',
        exerciseSearch: ''
    }


// submitting = async () => {
//     const ingredient = this.state.query.map(i => `${i.qty} ${i.measurement} ${i.name}`).join('\n');
//     console.log(this.state.query, ingredient)
//     const res = await nutritionix.natural.search(ingredient)
//     console.log(res);
//     this.testExercise()
    
//     this.setState({
//         // source: res2.data.data[0].id,
//         foodData: res.foods
//     })
//     }

exerciseSearch = (event) => {
    this.setState ({
        query3: event.target.value
    })
}

// getIngredient = (ingredients) => {
//     console.log(ingredients)
//     this.setState({
//       query: ingredients
//     })

submitExercise = async (event) => {
    event.preventDefault()
    const exercise = this.state.query3;
    console.log(this.state.query3, exercise)
    const res = await nutritionix.exercise.search(exercise);
    console.log(res)

    this.setState ({
        exerciseList: res.exercises
    })
}

addExercise = (event) => {
    this.setState({
        [event.target.exerciseSearch]: event.target.value
    })
}

enterExercise = (event) => {
    console.log("submit")
    let exerciseCopy = [...this.state.exerciseList]
    exerciseCopy.push({
        exerciseSearch : this.state.exerciseSearch,
    })
    // this.props.getIngredient(arrayCopy)
    this.setState({
        exerciseList : exerciseCopy,
        exerciseSearch: '',
    })
}

displayExercise = () => {
    return this.state.exerciseList?.map((eachExercise) => {
        return (
        <div className='section-exercise' key={eachExercise.name}>
        <p>Burned {eachExercise.nf_calories} calories</p>
        <p>{eachExercise.healthLabels}</p>
        </div>
        );
    })
}

refreshPage() {
    window.location.reload(false);
}


    render() {
        return (
            <section className = 'sections'>
                <div className = 'section-exercise'>
                    <h1>Find out how many calories you burned!</h1>
                    <form onSubmit = {this.submitExercise}>               
                    <label htmlFor="search"></label>
                    <br />
                    <input onChange={this.exerciseSearch} className='searchBar' type="text" value ={this.state.query3}name="exerciseSearch" placeholder='Search any exercise' required />
                    <br />
                    <button type='submit' id='exerciseSearch'> Search</button>
                    
                    <button onClick={this.refreshPage}>Refresh</button>

                    </form> 
                    
                <h3>{this.displayExercise()}</h3>
                </div>
            </section>

        );
    }
}

export default Exercise;