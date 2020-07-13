// ABOUT, CALORIE TRACKER, EXERCISE, RECIPES

import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar2 extends Component {
    render() {
        return (
            <nav className='nav2'>
                <ul className='nav2-ul'>
                    <li><Link className='nav2-links' to='/'>Home</Link></li>
                    <li><Link className='nav2-links' to='/recipes'>Recipes</Link></li>
                    <li><Link className='nav2-links' to='/calculator'>Calculate Ingredients</Link></li>
                    <li><Link className='nav2-links' to= '/exercise'>Exercise</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar2;