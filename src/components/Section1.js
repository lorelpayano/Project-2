// BACKGROUND PIC, HOW IT WORKS, LINK (START CALCULATING)

import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Section1 extends Component {
    render() {
        return (
            <section className="section1">
                <div className='sec1-div'>
                <h2>Welcome!</h2>
                <p></p>
                <ul>
                <li><Link className='sec1-links' to='/recipes'>Recipes</Link></li>
                <li><Link className='sec1-links' to='/calculator'>Calculate Ingredients</Link></li>
                </ul>
                </div>
                
            </section>
        );
    }
}

export default Section1;