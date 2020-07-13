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
                    <li><Link className='footerLinks' to='./ContactUs.js'>Contact Us</Link></li>
                    <li><Link className='footerLinks' to='./FAQ.js'>FAQ</Link></li>
                    <li><Link className='footerLinks' to='./Careers.js'>Careers</Link></li>
                    <li><Link className='footerLinks' to='./MeetTheTeam.js'>Meet The Team</Link></li>
                </ul>
            <hr></hr>
                </footer>
            </div>
        );
    }
}

export default Footer;