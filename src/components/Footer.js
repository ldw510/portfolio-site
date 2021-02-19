import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom'; 

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>MORE DETAILS</h2>
                        <a to=''>TESTIMONIALS</a>
                        <a href='https://github.com/ldw510'>GITHUB</a>
                        <a href='https://www.linkedin.com/in/liam-wallace-a51522206/'>LINKEDIN</a>
                        <Link to='/aboutMe'>CONTACT</Link>
                        <a to='/'>TERMS AND CONDITIONS</a>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default Footer
