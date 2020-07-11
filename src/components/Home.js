import React, { Component } from 'react';
import Section1 from './Section1'
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Footer />
            </div>
        );
    }
}

export default Home;