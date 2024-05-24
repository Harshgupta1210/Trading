import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar_list1">
                <li><a className="nav-link" href="#">Trade</a></li>
                <li><a className="nav-link" href="#">Buy Crypto</a></li>
                <li><a className="nav-link" href="#">Clans</a></li>
                <li><a className="nav-link" href="#">Why Traders</a></li>
                <li><a className="nav-link" href="#">Information</a></li>
            </ul>
            <div className="navbar_list2">
                
                <Link to="/Login">
                <button className="nav-button">Login</button>
                </Link>
                <button className="nav-button">Create Account</button>
            </div>
        </nav>
    );
};

export default Navbar;
