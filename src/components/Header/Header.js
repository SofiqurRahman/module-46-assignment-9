import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li className="brand">
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <input className="navInput" type="text" placeholder="Search your destination"/>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="navColor">
                        <Link to="/login">Login</Link>
                    </li>
                    {/* <li>
                        <Link to="/createAccount">Create Account</Link>
                    </li> */}
                    {/* <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li> */}
                </ul>
            </nav>
            <div className="title-container">
                <h1>Cox's bazar</h1>
                <h2>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach.</h2>
                <a href="destination"><button className="booking">Booking</button>    </a>
            </div>
        </div>
    );
};

export default Header;