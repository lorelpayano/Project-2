// CONTACT US, FAQ, CAREERS, MEET THE TEAM (INFO ABOUT EACH OF US)

//CAREERS (TEAM IS FULL + FUNNY GIF)

import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <div>
                <footer class = 'site-footer'>
                <ul>
                    <li><Link className='footerLinks' to='./ContactUs'>Contact Us</Link></li>
                    <li><Link className='footerLinks' to='./FAQ'>FAQ</Link></li>
                    <li><Link className='footerLinks' to='./Careers'>Careers</Link></li>
                    <li><Link className='footerLinks' to='./MeetTheTeam'>Meet The Team</Link></li>
                </ul>
            <hr></hr>
                </footer>
            </div>
        );
    }
}

export default Footer;