import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darker-3">
            <div className="container">
                <a className="brand-logo">Ok</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/quotes">Quotes</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;