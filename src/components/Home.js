import React, { Component } from 'react';
import Section1 from './Section1'

class Home extends Component {
    render() {
        return (
            <section>
            <div className='section-home'>
                <Section1 />
            </div>
            </section>

        );
    }
}

export default Home;