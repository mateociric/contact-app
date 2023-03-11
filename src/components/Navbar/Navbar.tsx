import { NavLink } from 'react-router-dom';
import 'components/Navbar/Navbar.scss';

function Navbar() {

    return (
        <nav className='nav flex-row-center'>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='CardFavorite'>Favorite</NavLink>
        </nav>
    )
}

export default Navbar;