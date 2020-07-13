// LOGO, LOG-IN, SIGN-UP
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/logo-small.png'


class Navbar1 extends Component {
    render() {
        return (
            <nav className='nav1'>
            <div className='logoArea'>
            <img className='logo' src={logo} alt='logo'/>
            <p className='logo'>infiniT Nutrition</p>
            </div>
            <ul className='nav1-ul'>
                <li><Link className='nav1-links' to='/login'>Log In</Link></li>
                <li><Link className='nav1-links' to= '/signup'>Sign Up</Link></li>
            </ul>
            </nav>
        );
    }
}

export default Navbar1;