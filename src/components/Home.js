import React, { Component } from 'react';
import Section1 from './Section1'
import Goals from './Goals'

class Home extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Goals/>
            </div>
        );
    }
}

export default Home;