import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Link to="/home" className = "link__logo" style = {{textDecoration: 'none', color: '#ffffff'}}>Alyaska Studio</Link>
            <hr style = {{backgroundColor: '#ffffff',height: '1px', width: '50%', margin: '1 25% 1 25%', marginLeft: '24.5%', border: 'none'}}/>
            <nav className="top-menu">
                <ul className="menu-main">
                    <li><Link style = {{textDecoration: 'none'}} to="/home">Home</Link></li>
                    <li><Link style = {{textDecoration: 'none'}} to="/gallery">Our work's</Link></li>
                    <li><Link style = {{textDecoration: 'none'}} to="/ourgames">Our Game's</Link></li>
                    <li><Link style = {{textDecoration: 'none'}} to="/privacy">Privacy Policy</Link></li>
                    <li><Link style = {{textDecoration: 'none'}} to="/airshipWar">AirShip War</Link></li>
                    <li><Link style = {{textDecoration: 'none'}} to="/posts">Forum</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;