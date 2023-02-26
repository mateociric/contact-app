import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (
        <nav className='nav'>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/Favorite'>Favorite</NavLink>
        </nav>
    )
}

export default Navbar;