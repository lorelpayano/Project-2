import React, { Component } from 'react';
import Section1 from './Section1'
import Goals from './Goals'

class Home extends Component {
    render() {
        return (
            <section>
            <div className='section-home'>
                <Section1 />
                <Goals/>
            </div>
            </section>

        );
    }
}

export default Home;