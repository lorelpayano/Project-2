// ABOUT, CALORIE TRACKER, EXERCISE, RECIPES

import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar2 extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/calculator'>Calculate Ingredients</Link>
            

                       
            </div>
        );
    }
}

export default Navbar2;