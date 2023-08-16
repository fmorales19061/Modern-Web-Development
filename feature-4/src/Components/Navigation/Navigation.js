import React from 'react';
import './styles.css';

const Navigation = () => {
    return (
        <div className="epic-background">
            <div className="font h1">
                {/* Header indicating what the page is about */}
                <ul className="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="register/register.html">Register</a></li>
                    <li><a href="contact/contact.html">Contact Us</a></li>
                    {/* Unordered List to serve as a menu */}
                </ul>
            </div>
        </div>
    );
}

export default Navigation;