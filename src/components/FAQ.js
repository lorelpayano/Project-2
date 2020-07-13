import React, { Component } from 'react';


class FAQ extends Component {
    render() {
        return (
            <div>
                <div class='title'>
                    FAQ's Page
                </div>
                <br/>
                <div class="content">
                    <div>
                            <label class="question">
                            How do I find the nutritional facts in what I am eating?
                            </label>
                            <div class="answers">
                            Once you go to the Calculate Ingredients section of the page, you will then be able to add different ingredients or specific foods to your list. Once you add everything, just hit submit and you will get your results back!
                            </div>
                            <label class="question">
                            How do I get recipes back?
                            </label>
                            <div class="answers">
                            Once you go to the Recipes section of the page, you will then be able to type in any food you want in the search bar. Once you press submit, you will get results of diffrent meals along with the the ingredients needed and other information you can find.
                            </div>
                            <label class="question">
                            Why was this page made?
                            </label>
                            <div class="answers">
                            We made this page to promote healthy living and healthy eating habits!
                            </div>
                    </div>
                </div>
               </div> 
            );
    }
}

export default FAQ;