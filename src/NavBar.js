import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css';

function NavBar(){
    return(
        <div className="navbar">
            <ul className="item">
                <li><b>Logo</b></li>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/user">
                    <li>User</li>
                </Link>                
            </ul>
        </div>
    )
}

export default NavBar;