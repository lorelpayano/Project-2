import React, { Component } from 'react';
import excercise from '../images/excercise.png'
import eating from '../images/eating.png'
import recipes from '../images/recipes.png'

class Goals extends Component {
    render() {
        return (
            <div class = 'success'>
                <p><h2>We have the items for your success!</h2></p><br/>
                <section id="general-information">
                <div class="containerGoals">

                    <article class="col col-3">
                    <h3>Eat right, feel good!</h3>
                    <p class="text">With out ingredient tracker, you will be able to easily track what you are eating, making healthy eating so much easier!</p>
                    <img src={eating} width = '150' height = '100' />
                    </article>

                    <article class="col col-3">
                    <h3>Healthy ingredients, happy life</h3>
                    <p class="text">Get healthy recipes with out recipe tracker</p>
                    <img src={recipes} width = '150' height = '100' />
                    </article>

                    <article class="col col-3">
                    <h3>Excercise more!</h3>
                    <p class="text">Get excercises that work for you and that you can track whenever you want! </p>
                    <img src={excercise} width = '150' height = '100' />
                    </article>
                    </div>
  
</section>
            </div>
        );
    }
}

export default Goals;