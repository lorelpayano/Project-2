import React, { Component } from 'react';
import excercise from '../images/excercise.png'
import eating from '../images/eating.png'
import recipes from '../images/recipes.png'

class Goals extends Component {
    render() {
        return (
            <div className = 'success'>
                <h2>We have the tools you need to succeed!</h2><br/>
                <section id ="general-information">
                    <div className="containerGoals">
                        <article className="col col-3">
                        <h3>Eat right, feel good!</h3>
                        <p className="text">With our ingredient calculator, you will be able to easily track what you are eating, making healthy eating so much easier!</p>
                        <img src={eating} width = '150' height = '100' alt='goal'/>
                        </article>

                        <article className="col col-3">
                        <h3>Healthy ingredients, happy life :)</h3>
                        <p className="text">Browse through hundreds of healthy recipes so you never get bored of eating the same foods.</p>
                        <img src={recipes} width = '150' height = '100' alt='goal'/>
                        </article>

                        <article className="col col-3">
                        <h3>Exercise more!</h3>
                        <p className="text">Get exercises that work for you and that you can track whenever you want!</p>
                        <img src={excercise} width = '150' height = '100' alt='goal' />
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default Goals;