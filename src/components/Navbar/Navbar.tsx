import React from 'react';
import { NavLink } from 'react-router-dom';
import 'components/Navbar/Navbar.scss';

function Navbar() {

    return (
        <nav className='nav'>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='CardFavorite'>Favorite</NavLink>
        </nav>
    )
}

export default Navbar;