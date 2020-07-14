// CONTACT US, FAQ, CAREERS, MEET THE TEAM (INFO ABOUT EACH OF US)

//CAREERS (TEAM IS FULL + FUNNY GIF)

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-small.png'


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer className = 'site-footer'>
                    <div className='footerLogo'>
                        <Link to='/'>
                        <img className='logo' src={logo} alt='logo'/>
                        </Link>
                        <p className='logo'>infiniT Nutrition</p>
                    </div>
                    <ul>
                        <li><Link className='footerLinks' to='./ContactUs'>Contact Us</Link></li>
                        <li><Link className='footerLinks' to='./FAQ'>FAQ</Link></li>
                        <li><Link className='footerLinks' to='./Careers'>Careers</Link></li>
                        <li><Link className='footerLinks' to='./MeetTheTeam'>Meet The Team</Link></li>
                        <li><Link className='footerLinks' to='/login'>Log In</Link></li>
                        <li><Link className='footerLinks' to= '/signup'>Sign Up</Link></li>
                    </ul>
                    <hr></hr>
                </footer>
            </div>
        );
    }
}

export default Footer;