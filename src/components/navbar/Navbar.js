import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo left logo-margin">Ok</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/quotes">Quotes</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);