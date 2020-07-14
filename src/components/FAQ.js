import React, { Component } from 'react';


class FAQ extends Component {
    render() {
        return (
            <section className = 'sections'>
                <div>
                    <div class='title'>
                        FAQ's Page
                    </div>
                    <br/>
                    <div class="content">
                        <div>
                            <label class="question">
                            What is this page?
                            </label>
                            <div class="answers">
                            This is the FAQ's page, so that your questions can be answered about our website!
                            </div>
                            <label class="question">
                            Who made this page?
                            </label>
                            <div class="answers">
                            Lorel, Luis and Kai made this page
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
            </section>
        
            );
    }
}

export default FAQ;